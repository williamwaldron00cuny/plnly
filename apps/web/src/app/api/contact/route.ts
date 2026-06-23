import { NextResponse } from "next/server";
import { Resend } from "resend";

const TO_ADDRESS = "hello@plnly.co";

export async function POST(request: Request) {
  const { name, email, request: requestDetail } = await request.json();

  if (!name || !email || !requestDetail) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set — contact form submission was not sent.");
    return NextResponse.json({ error: "Email service is not configured." }, { status: 500 });
  }

  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from: "PLNLY website <onboarding@resend.dev>",
    to: TO_ADDRESS,
    replyTo: email,
    subject: `New setup request from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\nWhat they'd like set up:\n${requestDetail}`,
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: "Failed to send message." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
