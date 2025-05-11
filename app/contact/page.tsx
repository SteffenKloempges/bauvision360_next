"use client";
import { Suspense } from 'react';
import ContactForm from './ContactForm';

export default function ContactPage() {
    return (
        <main className="pt-4 font-sans text-gray-800">
            <section className="px-5 lg:py-16 text-center">
                <h1 className="text-4xl lg:text-5xl font-bold text-primary leading-tight">
                    Kontaktieren Sie uns
                </h1>
                <p className="text-xl text-gray-600">
                    Wir freuen uns auf Ihre Nachricht
                </p>
            </section>
            <Suspense fallback={<div className="p-8 text-center">Laden...</div>}>
                <ContactForm />
            </Suspense>
        </main>
    );
}
