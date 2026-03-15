/**
 * Data bank for 高级练习 (Advanced practice).
 * Each prompt has: category (one of four types), body (question text), and recipient.
 */

export type AdvancedCategory =
  | "ask_for_help"
  | "invite_friend"
  | "invite_professional"
  | "propose_solution";

export interface AdvancedPrompt {
  category: AdvancedCategory;
  body: string;
  /** Prefilled recipient for the email */
  recipient: string;
}

export const ADVANCED_CATEGORIES: AdvancedCategory[] = [
  "ask_for_help",
  "invite_friend",
  "invite_professional",
  "propose_solution",
];

const ADVANCED_PROMPTS: AdvancedPrompt[] = [
  // ——— Propose a solution ———
  {
    category: "propose_solution",
    recipient: "Building Administrator",
    body: "You are a student representative, and many students in your department have said that the study spaces in the academic building are often too noisy to use effectively. Because of this, students have difficulty concentrating and preparing for exams. You have been asked to contact the building administrator with a possible solution.\n\nWrite an email to the building administrator. In your email, do the following:\n\n• Explain the problem students are experiencing in the study spaces.\n• Propose one or more solutions to improve the study environment.\n• Request feedback or suggestions about your proposed ideas.",
  },
  {
    category: "propose_solution",
    recipient: "Library Director",
    body: "You are a student representative at your university, and many students have said that the library does not stay open late enough during exam periods. Because of this, students who prefer to study at night often struggle to find a quiet place to work. You have been asked to share this concern with the library director.\n\nWrite an email to the library director. In your email, do the following:\n\n• Explain the problem students are facing with the current library hours.\n• Propose one or more solutions to improve the situation.\n• Request feedback or suggestions about your proposed ideas.",
  },
  {
    category: "propose_solution",
    recipient: "Transportation Manager",
    body: "You are a member of the student council, and many students have reported that the campus shuttle is often delayed in the morning. As a result, some students arrive late to class, especially those who live farther from the main campus. You have been asked to discuss this issue with the transportation manager.\n\nWrite an email to the transportation manager. In your email, do the following:\n\n• Explain the problem students are experiencing with the shuttle service.\n• Propose one or more solutions to improve the service.\n• Request feedback or suggestions about your proposed ideas.",
  },
  {
    category: "propose_solution",
    recipient: "Housing Manager",
    body: "You are a resident assistant in a campus dormitory, and students have repeatedly complained that the laundry room is difficult to use because too many machines are out of order. This has caused long waits and frustration for residents. You have been asked to contact the housing manager with suggestions.\n\nWrite an email to the housing manager. In your email, do the following:\n\n• Explain the problem students are facing in the dormitory laundry room.\n• Propose one or more solutions to improve the situation.\n• Request feedback or suggestions about your proposed ideas.",
  },
  {
    category: "propose_solution",
    recipient: "Academic Services Office",
    body: "You are part of a student academic committee, and students have said that it is too difficult to reserve group study rooms on campus. The current booking system is confusing, and many students do not know how to use it. You have been asked to share possible improvements with the academic services office.\n\nWrite an email to the academic services office. In your email, do the following:\n\n• Explain the problem students are having with the room reservation system.\n• Propose one or more solutions to make the system easier to use.\n• Request feedback or suggestions about your proposed ideas.",
  },
  {
    category: "propose_solution",
    recipient: "Campus Facilities Manager",
    body: "You are a student council member, and many students who ride bicycles to campus have complained that there are not enough safe places to park them. Some students have even said that their bicycles were damaged or left in inconvenient locations. You have been asked to contact the campus facilities manager.\n\nWrite an email to the campus facilities manager. In your email, do the following:\n\n• Explain the problem students are facing with bicycle parking.\n• Propose one or more solutions to improve bicycle parking on campus.\n• Request feedback or suggestions about your proposed ideas.",
  },
  {
    category: "propose_solution",
    recipient: "Cafeteria Supervisor",
    body: "You are part of a student wellness committee, and many students have said that the cafeteria does not offer enough healthy or varied meal options. Some students feel that the current menu does not meet their dietary needs or preferences. You have been asked to write to the cafeteria supervisor.\n\nWrite an email to the cafeteria supervisor. In your email, do the following:\n\n• Explain the problem students have with the current cafeteria menu.\n• Propose one or more solutions to improve the meal options.\n• Request feedback or suggestions about your proposed ideas.",
  },
  {
    category: "propose_solution",
    recipient: "Fitness Center Manager",
    body: "You are a student representative, and many students have reported that the campus gym is too crowded in the evening. Because of this, students often have to wait a long time to use the equipment. You have been asked to share this issue with the fitness center manager.\n\nWrite an email to the fitness center manager. In your email, do the following:\n\n• Explain the problem students are experiencing at the gym.\n• Propose one or more solutions to reduce overcrowding.\n• Request feedback or suggestions about your proposed ideas.",
  },
  {
    category: "propose_solution",
    recipient: "Department Administrator",
    body: "You are a member of a department student committee, and students have complained that classroom technology often does not work properly during lectures. Problems with projectors, microphones, or computers sometimes waste class time and affect learning. You have been asked to contact the department administrator.\n\nWrite an email to the department administrator. In your email, do the following:\n\n• Explain the problem students are experiencing with classroom technology.\n• Propose one or more solutions to improve the situation.\n• Request feedback or suggestions about your proposed ideas.",
  },
  {
    category: "propose_solution",
    recipient: "Campus Sustainability Coordinator",
    body: "You are involved in a student environmental group, and many students feel that the university's recycling program is unclear and ineffective. Some recycling bins are hard to find, and students are often unsure what items can be recycled. You have been asked to write to the campus sustainability coordinator.\n\nWrite an email to the campus sustainability coordinator. In your email, do the following:\n\n• Explain the problem students are facing with the recycling system.\n• Propose one or more solutions to improve the program.\n• Request feedback or suggestions about your proposed ideas.",
  },
  {
    category: "propose_solution",
    recipient: "Residence Hall Director",
    body: "You are a student leader in your residence hall, and many students have said that noise late at night is making it difficult for them to sleep or study. This has become a bigger problem during busy parts of the semester. You have been asked to contact the residence hall director with some ideas.\n\nWrite an email to the residence hall director. In your email, do the following:\n\n• Explain the problem students are experiencing with noise in the residence hall.\n• Propose one or more solutions to reduce the problem.\n• Request feedback or suggestions about your proposed ideas.",
  },
  // ——— Ask for help ———
  {
    category: "ask_for_help",
    recipient: "Campus Card Office",
    body: "You recently realized that you lost your student ID card, and you need it to enter campus buildings and borrow books from the library. You think you may have dropped it somewhere near the student center earlier this week. You want to ask the campus card office for help.\n\nWrite an email to the campus card office. In your email, do the following:\n\n• Explain that you lost your student ID card and why it is important.\n• Describe when and where you think you may have lost it.\n• Ask for help and request information about what you should do next.",
  },
  {
    category: "ask_for_help",
    recipient: "Academic Advisor",
    body: "You are in your first year at university and still have not decided on a major. Recently, you have become interested in several different subjects, but you are not sure which one would be the best fit for your strengths and future goals. You would like advice from an academic advisor.\n\nWrite an email to your academic advisor. In your email, do the following:\n\n• Explain why you are having difficulty choosing a major.\n• Describe the subjects or goals you are considering.\n• Ask for help and request advice on how to make your decision.",
  },
  {
    category: "ask_for_help",
    recipient: "University Technology Support Office",
    body: "One of your classes uses an online platform for readings and assignments, but you have been unable to log in for the past two days. Because an important homework assignment is due soon, you are worried that you may fall behind. You decide to contact the university technology support office.\n\nWrite an email to the university technology support office. In your email, do the following:\n\n• Describe the problem you are having with the online platform.\n• Explain why the issue is urgent for you.\n• Ask for help and request information about how the problem can be solved.",
  },
  {
    category: "ask_for_help",
    recipient: "Student Activities Office",
    body: "You want to become more involved in campus life and gain some useful experience outside the classroom. You are especially interested in volunteering, but you do not know what opportunities are available or how students usually sign up. You decide to contact the student activities office.\n\nWrite an email to the student activities office. In your email, do the following:\n\n• Explain why you are interested in volunteering.\n• Describe the kind of opportunity you are hoping to find.\n• Ask for help and request information about how to get involved.",
  },
  {
    category: "ask_for_help",
    recipient: "Career Center",
    body: "You have been invited to interview for a summer internship, but you have never had a formal interview before. You know that the university career center offers guidance to students, and you would like some advice before your interview next week.\n\nWrite an email to the career center. In your email, do the following:\n\n• Explain why you are contacting the career center.\n• Describe your upcoming interview and why you want support.\n• Ask for help and request information about what services or advice they can provide.",
  },
  // ——— Invite a friend ———
  {
    category: "invite_friend",
    recipient: "Ben",
    body: "You recently learned that there will be a book fair on campus next weekend. According to the announcement, students will be able to buy books at discounted prices and attend short talks by local writers. It made you think of your classmate Ben, who enjoys reading and is always looking for affordable books.\n\nWrite an email to Ben. In your email, do the following:\n\n• Describe the book fair and what you know about it.\n• Explain why you think Ben would enjoy attending.\n• Invite him to go with you and suggest a time to meet.",
  },
  {
    category: "invite_friend",
    recipient: "Lily",
    body: "You saw a poster for a student photography exhibition at the university art center. The exhibition will feature work by students from different departments and will be open for only a few days. You immediately thought of your friend Lily, who enjoys art and often looks for creative events to attend.\n\nWrite an email to Lily. In your email, do the following:\n\n• Describe the exhibition and what you learned about it.\n• Explain why you think Lily would enjoy seeing it.\n• Invite her to go with you and suggest a time.",
  },
  {
    category: "invite_friend",
    recipient: "Chris",
    body: "You found out that the student center is offering a weekend cooking workshop for beginners. Participants will learn to make simple, inexpensive meals that are good for busy students. You thought of your roommate Chris, who has said many times that it is hard to cook in the dorm.\n\nWrite an email to Chris. In your email, do the following:\n\n• Describe the cooking workshop and what participants will do.\n• Explain why you think Chris would find it useful or enjoyable.\n• Invite Chris to join you and suggest a plan.",
  },
  {
    category: "invite_friend",
    recipient: "Ava",
    body: "You and your teammate Ava have both been busy with classes and group projects lately. You recently heard about a seminar on time management for students, and you think it could be useful for both of you. You would like to invite Ava to attend with you.\n\nWrite an email to Ava. In your email, do the following:\n\n• Describe the seminar and what you know about it.\n• Explain why you think it would be helpful for Ava.\n• Invite Ava to attend with you and suggest a time to meet.",
  },
  {
    category: "invite_friend",
    recipient: "Daniel",
    body: "A new student named Daniel recently moved into your residence hall. You saw an announcement that the university is organizing a welcome picnic this weekend where students can meet each other, play games, and enjoy free food. Since Daniel is still new to campus, you would like to invite him to join you.\n\nWrite an email to Daniel. In your email, do the following:\n\n• Describe the welcome picnic and what will happen there.\n• Explain why you think Daniel would enjoy or benefit from going.\n• Invite him to come with you and suggest where to meet.",
  },
  // ——— Invite a professional ———
  {
    category: "invite_professional",
    recipient: "Professor Green",
    body: "You are helping organize a student club event about environmental issues. Your club would like to include a short talk from a faculty member whose research relates to the topic. Since Professor Green is well known for work in this area, you would like to invite her to speak at the event.\n\nWrite an email to Professor Green. In your email, do the following:\n\n• Describe the event and its purpose.\n• Explain why you would especially like Professor Green to participate.\n• Politely invite her to give a short talk and include the main details.",
  },
  {
    category: "invite_professional",
    recipient: "Ms. Collins",
    body: "Your department is holding a student forum to discuss academic life and ways to improve communication between students and staff. You think the department administrator, Ms. Collins, would be a valuable guest because she often works closely with students on academic matters.\n\nWrite an email to Ms. Collins. In your email, do the following:\n\n• Describe the student forum and its purpose.\n• Explain why you think her attendance would be valuable.\n• Politely invite her to attend and provide the event details.",
  },
  {
    category: "invite_professional",
    recipient: "Mr. Patel",
    body: "Your student organization is planning a career panel for students who want to learn more about internship opportunities. Because your academic advisor, Mr. Patel, often helps students think about their future plans, you believe he may be interested in the event. You would like to invite him to attend.\n\nWrite an email to Mr. Patel. In your email, do the following:\n\n• Describe the career panel and what it will focus on.\n• Explain why you thought of Mr. Patel.\n• Politely invite him and include the main details.",
  },
  {
    category: "invite_professional",
    recipient: "Professor Kim",
    body: "You and several classmates will present posters at an undergraduate research event next week. Although Professor Kim is not directly supervising your project, she teaches a course that inspired your interest in the topic. You would like to invite her to attend the session if she is available.\n\nWrite an email to Professor Kim. In your email, do the following:\n\n• Describe the poster session and your project topic.\n• Explain why her attendance would be meaningful to you.\n• Politely invite her and provide the time and location.",
  },
  {
    category: "invite_professional",
    recipient: "Dr. Evans",
    body: "Your student committee is organizing an event about improving study habits and making better use of campus learning resources. Since the library director, Dr. Evans, has supported many academic programs for students, you think it would be appropriate to invite him to attend the event.\n\nWrite an email to Dr. Evans. In your email, do the following:\n\n• Describe the event and its purpose.\n• Explain why you would like Dr. Evans to attend.\n• Politely invite him and share the basic details.",
  },
];

export function getAdvancedPromptsByCategory(
  category: AdvancedCategory
): AdvancedPrompt[] {
  return ADVANCED_PROMPTS.filter((p) => p.category === category);
}

export function getRandomAdvancedPrompt(
  category?: AdvancedCategory
): AdvancedPrompt {
  const pool =
    category && ADVANCED_CATEGORIES.includes(category)
      ? getAdvancedPromptsByCategory(category)
      : ADVANCED_PROMPTS;
  return pool[Math.floor(Math.random() * pool.length)];
}
