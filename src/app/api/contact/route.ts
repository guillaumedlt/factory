import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, company, email, sector, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Nom, email et message sont requis." },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Factory <onboarding@resend.dev>",
      to: "delachetg@gmail.com",
      subject: `[Factory] Nouveau contact : ${name}${company ? ` (${company})` : ""}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;">
          <h2 style="color:#1a1a1a;">Nouveau message depuis factory-ai.com</h2>
          <table style="width:100%;border-collapse:collapse;margin:20px 0;">
            <tr><td style="padding:8px 12px;background:#f6f6f1;font-weight:600;width:120px;">Nom</td><td style="padding:8px 12px;">${name}</td></tr>
            <tr><td style="padding:8px 12px;background:#f6f6f1;font-weight:600;">Société</td><td style="padding:8px 12px;">${company || "Non précisé"}</td></tr>
            <tr><td style="padding:8px 12px;background:#f6f6f1;font-weight:600;">Email</td><td style="padding:8px 12px;"><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding:8px 12px;background:#f6f6f1;font-weight:600;">Secteur</td><td style="padding:8px 12px;">${sector || "Non précisé"}</td></tr>
          </table>
          <div style="background:#f6f6f1;padding:16px;border-radius:8px;margin:20px 0;">
            <p style="margin:0;white-space:pre-wrap;">${message}</p>
          </div>
          <p style="color:#888;font-size:12px;">Envoyé depuis le formulaire de contact factory-ai.com</p>
        </div>
      `,
      replyTo: email,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Resend error:", error);
    return NextResponse.json(
      { error: "Erreur lors de l'envoi du message." },
      { status: 500 }
    );
  }
}
