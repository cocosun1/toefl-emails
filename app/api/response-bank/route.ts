import { NextResponse } from "next/server";
import path from "path";
import fs from "fs/promises";
import { put, get } from "@vercel/blob";
import type { ResponseBankEntry } from "@/types/responseBank";

const FILENAME = "responseBank.json";
const BLOB_PATHNAME = "response-bank/data.json";

function getFilePath(): string {
  return path.join(process.cwd(), "data", FILENAME);
}

async function readBankFromFile(): Promise<ResponseBankEntry[]> {
  try {
    const p = getFilePath();
    const raw = await fs.readFile(p, "utf-8");
    const data = JSON.parse(raw);
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

async function writeBankToFile(entries: ResponseBankEntry[]): Promise<void> {
  const dir = path.join(process.cwd(), "data");
  await fs.mkdir(dir, { recursive: true });
  await fs.writeFile(
    path.join(dir, FILENAME),
    JSON.stringify(entries, null, 2),
    "utf-8"
  );
}

async function readBankFromBlob(): Promise<ResponseBankEntry[]> {
  const result = await get(BLOB_PATHNAME, { access: "private" });
  if (!result || result.statusCode !== 200 || !result.stream) return [];
  const text = await new Response(result.stream).text();
  try {
    const data = JSON.parse(text);
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

async function writeBankToBlob(entries: ResponseBankEntry[]): Promise<void> {
  await put(BLOB_PATHNAME, JSON.stringify(entries, null, 2), {
    access: "private",
    contentType: "application/json",
    addRandomSuffix: false,
    allowOverwrite: true,
  });
}

function useBlob(): boolean {
  return typeof process.env.BLOB_READ_WRITE_TOKEN === "string" && process.env.BLOB_READ_WRITE_TOKEN.length > 0;
}

async function readBank(): Promise<ResponseBankEntry[]> {
  if (useBlob()) return readBankFromBlob();
  return readBankFromFile();
}

async function writeBank(entries: ResponseBankEntry[]): Promise<void> {
  if (useBlob()) return writeBankToBlob(entries);
  return writeBankToFile(entries);
}

export async function GET() {
  try {
    const entries = await readBank();
    return NextResponse.json(entries);
  } catch (e) {
    console.error("response-bank GET", e);
    return NextResponse.json(
      { error: "Failed to load response bank" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { category, promptBody, recipient, subject, body: emailBody } = body;
    if (
      typeof promptBody !== "string" ||
      typeof recipient !== "string" ||
      typeof subject !== "string" ||
      typeof emailBody !== "string"
    ) {
      return NextResponse.json(
        { error: "Missing or invalid fields: promptBody, recipient, subject, body" },
        { status: 400 }
      );
    }
    const entries = await readBank();
    const id = `r-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
    const entry: ResponseBankEntry = {
      id,
      category: typeof category === "string" ? category : "wildcard",
      promptBody,
      recipient,
      subject,
      body: emailBody,
      createdAt: new Date().toISOString(),
    };
    entries.push(entry);
    await writeBank(entries);
    return NextResponse.json({ id, ok: true });
  } catch (e) {
    console.error("response-bank POST", e);
    return NextResponse.json(
      { error: "Failed to save to response bank" },
      { status: 500 }
    );
  }
}
