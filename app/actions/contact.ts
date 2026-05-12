"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactMessage(
  prevState: { success: boolean; error: string },
  formData: FormData,
) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    return { success: false, error: "All fields are required" };
  }

  try {
    await resend.emails.send({
      from: "Vercel Portfolio Contact <onboarding@resend.dev>",
      to: "m.reeja.ul.hussain@gmail.com",
      subject: `New Contact Message from ${name}`,
      html: `
        <h2>New Contact Message</h2>

        <p><strong>Name:</strong> ${name}</p>

        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Message:</strong></p>

        <p>${message}</p>
      `,
    });

    return {
      success: true,
      error: "",
    };
  } catch (error) {
    console.error("Sending Error:", error);

    return {
      success: false,
      error: "Failed to send message",
    };
  }
}
