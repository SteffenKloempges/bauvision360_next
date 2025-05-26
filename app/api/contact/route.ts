import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    // E-Mail-Konfiguration
    const transporter = nodemailer.createTransport({
      host: "smtp.strato.de",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Extrahiere die Dateien aus FormData
    const attachments = [];
    for (let i = 0; i < 5; i++) {
      const file = formData.get(`file${i}`) as File | null;
      if (file) {
        const buffer = Buffer.from(await file.arrayBuffer());
        attachments.push({
          filename: file.name,
          content: buffer,
        });
      }
    }

    // Extrahiere die Formularfelder
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const date = formData.get("date") as string;
    const service = formData.get("service") as string;
    const message = formData.get("message") as string;

    // E-Mail an info@bauvision360.de
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "info@bauvision360.de",
      subject: `Neue Kontaktanfrage von ${name}`,
      html: `
        <h2>Neue Kontaktanfrage</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>E-Mail:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone || "Nicht angegeben"}</p>
        <p><strong>Ausführungszeitraum:</strong> ${
          date || "Nicht angegeben"
        }</p>
        <p><strong>Dienstleistung:</strong> ${service}</p>
        <p><strong>Nachricht:</strong></p>
        <p>${message}</p>
        ${
          attachments.length > 0
            ? `<p><strong>Anzahl der Anhänge:</strong> ${attachments.length}</p>`
            : ""
        }
      `,
      attachments,
    };

    // Bestätigungs-E-Mail an den Absender
    const confirmationMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Vielen Dank für Ihre Anfrage - BAUvision360°",
      html: `
        <h2>Vielen Dank für Ihre Anfrage!</h2>
        <p>Sehr geehrte(r) ${name},</p>
        <p>wir haben Ihre Anfrage erhalten und werden uns schnellstmöglich bei Ihnen melden.</p>
        <p>Ihre Anfrage im Detail:</p>
        <ul>
          <li><strong>Dienstleistung:</strong> ${service}</li>
          <li><strong>Ausführungszeitraum:</strong> ${
            date || "Nicht angegeben"
          }</li>
          ${
            attachments.length > 0
              ? `<li><strong>Hochgeladene Dateien:</strong> ${attachments.length}</li>`
              : ""
          }
        </ul>
        <p>Mit freundlichen Grüßen<br>Ihr BAUvision360°-Team</p>
      `,
    };

    // Sende beide E-Mails
    await Promise.all([
      transporter.sendMail(mailOptions),
      transporter.sendMail(confirmationMailOptions),
    ]);

    return NextResponse.json(
      { message: "Nachricht erfolgreich empfangen" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Fehler bei der Verarbeitung des Formulars:", error);
    return NextResponse.json(
      { message: "Fehler bei der Verarbeitung der Anfrage" },
      { status: 500 }
    );
  }
}
