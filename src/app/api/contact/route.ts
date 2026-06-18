import { NextResponse } from "next/server";

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const CONTACT_EMAIL = "eonresonancelab@gmail.com";
const RESEND_SEND_URL = "https://api.resend.com/emails";
const RESEND_FROM_EMAIL = "EON Resonance Lab <no-reply@eonresonance.lab>";

interface ContactRequestBody {
  name: string;
  email: string;
  projectType: string;
  budget?: string;
  message: string;
}

function isContactRequestBody(value: unknown): value is ContactRequestBody {
  if (!value || typeof value !== "object") return false;
  const data = value as Record<string, unknown>;
  return (
    typeof data.name === "string" &&
    typeof data.email === "string" &&
    typeof data.projectType === "string" &&
    typeof data.message === "string" &&
    (data.budget === undefined || typeof data.budget === "string")
  );
}

export async function POST(request: Request) {
  if (!RESEND_API_KEY) {
    return NextResponse.json(
      { success: false, error: "Missing RESEND_API_KEY." },
      { status: 500 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid JSON body." },
      { status: 400 }
    );
  }

  if (!isContactRequestBody(body)) {
    return NextResponse.json(
      { success: false, error: "Invalid request payload." },
      { status: 400 }
    );
  }

  const { name, email, projectType, budget, message } = body;

  const emailBody = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Project Type: ${projectType}`,
    `Budget: ${budget?.trim() || "Not provided"}`,
    `Message: ${message}`,
  ].join("\n");

  const resendResponse = await fetch(RESEND_SEND_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: RESEND_FROM_EMAIL,
      to: [CONTACT_EMAIL],
      subject: "New Inquiry from EON Resonance Lab",
      text: emailBody,
      reply_to: email,
    }),
  });

  if (!resendResponse.ok) {
    const errorText = await resendResponse.text().catch(() => "Unknown error");
    return NextResponse.json(
      { success: false, error: errorText || "Failed to send email." },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}
