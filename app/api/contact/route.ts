import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, phone, date, service, message } = body;

        // E-Mail-Transport konfigurieren
        const transporter = nodemailer.createTransport({
            host: 'smtp.strato.de',
            port: 587,
            secure: false,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASSWORD
            }
        });

        // E-Mail an BAUvision360
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: 'info@bauvision360.de',
            subject: `Neue Kontaktanfrage von ${name}`,
            html: `
                <h2>Neue Kontaktanfrage</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>E-Mail:</strong> ${email}</p>
                <p><strong>Telefon:</strong> ${phone || 'Nicht angegeben'}</p>
                <p><strong>Ausführungszeitraum:</strong> ${date}</p>
                <p><strong>Dienstleistung:</strong> ${service}</p>
                <p><strong>Nachricht:</strong></p>
                <p>${message}</p>
            `
        };

        // Bestätigungs-E-Mail an den Kunden
        const confirmationMailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Vielen Dank für Ihre Anfrage - BAUvision360°',
            html: `
                <h2>Vielen Dank für Ihre Anfrage!</h2>
                <p>Sehr geehrte(r) ${name},</p>
                <p>wir haben Ihre Anfrage erhalten und werden uns schnellstmöglich bei Ihnen melden.</p>
                <p>Ihre Anfrage im Detail:</p>
                <ul>
                    <li><strong>Dienstleistung:</strong> ${service}</li>
                    <li><strong>Ausführungszeitraum:</strong> ${date}</li>
                </ul>
                <p>Mit freundlichen Grüßen<br>Ihr BAUvision360°-Team</p>
            `
        };

        // Beide E-Mails senden
        await Promise.all([
            transporter.sendMail(mailOptions),
            transporter.sendMail(confirmationMailOptions)
        ]);

        return NextResponse.json({ message: 'E-Mail erfolgreich gesendet' }, { status: 200 });
    } catch (error) {
        console.error('Fehler beim Senden der E-Mail:', error);
        return NextResponse.json({ error: 'Fehler beim Senden der E-Mail' }, { status: 500 });
    }
} 