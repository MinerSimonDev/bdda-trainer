import "server-only";

import { currentUser } from "@clerk/nextjs/server";

const DEFAULT_ALLOWED = ["aaron.frick.07@gmail.com", "simon8502x@gmail.com"];

const ALLOWED = (process.env.EXAM_GENERATOR_EMAILS
  ? process.env.EXAM_GENERATOR_EMAILS.split(",")
  : DEFAULT_ALLOWED
)
  .map((mail) => mail.trim().toLowerCase())
  .filter(Boolean);

export async function mayGenerateExams(): Promise<boolean> {
  const user = await currentUser();
  if (!user) return false;

  return user.emailAddresses.some(
    (mail) =>
      mail.verification?.status === "verified" &&
      ALLOWED.includes(mail.emailAddress.toLowerCase())
  );
}
