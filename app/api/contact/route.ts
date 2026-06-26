import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

/**
 * Contact API: the back-end half of the project.
 * ------------------------------------------------------------------
 * POST /api/contact   → validate + store an inbound enquiry
 * GET  /api/contact   → lightweight health/info endpoint
 *
 * Enquiries are appended to /data/submissions.json so you can see real
 * persistence in dev. To productionise, swap the `saveSubmission` body
 * for a database insert (Postgres, Prisma, Supabase…) or an email/CRM
 * call. The route contract stays the same.
 */

type Payload = {
  name?: string;
  email?: string;
  company?: string;
  budget?: string;
  services?: string[];
  message?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(body: Payload): string | null {
  if (!body.name || body.name.trim().length < 2)
    return "Please enter your name.";
  if (!body.email || !EMAIL_RE.test(body.email))
    return "Please enter a valid email address.";
  if (!body.message || body.message.trim().length < 10)
    return "Please tell us a little more about your project.";
  return null;
}

async function saveSubmission(record: Record<string, unknown>) {
  // NOTE: file persistence is for local/demo use. Replace with a DB in prod.
  try {
    const dir = path.join(process.cwd(), "data");
    const file = path.join(dir, "submissions.json");
    await fs.mkdir(dir, { recursive: true });

    let existing: unknown[] = [];
    try {
      const raw = await fs.readFile(file, "utf-8");
      existing = JSON.parse(raw);
    } catch {
      existing = [];
    }

    existing.push(record);
    await fs.writeFile(file, JSON.stringify(existing, null, 2), "utf-8");
  } catch (err) {
    // Don't fail the request if the filesystem is read-only (e.g. serverless).
    console.error("[contact] could not persist submission:", err);
  }
}

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const validationError = validate(body);
  if (validationError) {
    return NextResponse.json({ error: validationError }, { status: 422 });
  }

  const record = {
    id: crypto.randomUUID(),
    name: body.name!.trim(),
    email: body.email!.trim(),
    company: body.company?.trim() || null,
    budget: body.budget || null,
    services: Array.isArray(body.services) ? body.services : [],
    message: body.message!.trim(),
    receivedAt: new Date().toISOString(),
  };

  await saveSubmission(record);

  // Hook point: send notification email / push to CRM here.
  console.log("[contact] new enquiry:", record.email);

  return NextResponse.json(
    { ok: true, id: record.id, message: "Enquiry received." },
    { status: 201 }
  );
}

export async function GET() {
  return NextResponse.json({
    service: "contact",
    status: "ok",
    accepts: "POST application/json { name, email, company, budget, services[], message }",
  });
}
