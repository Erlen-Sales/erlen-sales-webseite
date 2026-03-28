import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const firstName = formData.get("firstName")?.toString() || "";
    const lastName = formData.get("lastName")?.toString() || "";
    const email = formData.get("email")?.toString() || "";
    const phone = formData.get("phone")?.toString() || "";
    const city = formData.get("city")?.toString() || "";
    const age = formData.get("age")?.toString() || "";
    const experience = formData.get("experience")?.toString() || "";
    const message = formData.get("message")?.toString() || "";

    await resend.emails.send({
      from: "Bewerbungen <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL || "kontakt@erlen-sales.de",
      subject: `Neue Bewerbung von ${firstName} ${lastName}`,
      html: `
        <h2>Neue Bewerbung über ERLEN Sales</h2>
        <p><strong>Vorname:</strong> ${firstName}</p>
        <p><strong>Nachname:</strong> ${lastName}</p>
        <p><strong>E-Mail:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone}</p>
        <p><strong>Wohnort:</strong> ${city}</p>
        <p><strong>Alter:</strong> ${age}</p>
        <p><strong>Berufserfahrung:</strong> ${experience}</p>
        <p><strong>Nachricht:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.redirect(new URL("/#karriere", req.url));
  } catch (error) {
    console.error(error);
    return NextResponse.redirect(new URL("/#karriere", req.url));
  }
}
