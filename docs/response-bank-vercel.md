# Response bank on Vercel

Uploads to the response bank are stored in **Vercel Blob** when you deploy to Vercel, so everyone can access them.

## Setup (one-time)

1. In the [Vercel Dashboard](https://vercel.com/dashboard), open your project.
2. Go to **Storage** and create a new store → choose **Blob**.
3. Name the store (e.g. `response-bank`) and set access to **Private** (the API uses the token to read/write).
4. Create the store. Vercel will add the `BLOB_READ_WRITE_TOKEN` environment variable to your project.
5. Redeploy the project (or push a new commit) so the new env var is used.

## Local development

- **Without the token:** Responses are saved to `data/responseBank.json` on your machine (file-based).
- **With the token:** Run `vercel env pull` in the project root, then restart `npm run dev`. Uploads will go to your Vercel Blob store.

## How it works

The API route (`/api/response-bank`) checks for `BLOB_READ_WRITE_TOKEN`. If set, it uses Vercel Blob; otherwise it uses the local JSON file. No code changes are needed when switching between local and Vercel.
