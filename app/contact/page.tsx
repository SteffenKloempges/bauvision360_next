export default function ContactPage() {
    return <main className="pt-20 font-sans text-gray-800">
        <section className="px-5 py-16 lg:py-24 text-center">

            <h1 className="text-4xl lg:text-5xl font-bold text-primary leading-tight">
                Kontaktieren Sie uns
            </h1>
            <p className="text-xl text-gray-600">
                Wir freuen uns auf Ihre Nachricht
            </p>

        </section>
        <section className="py-16">
            <div className="max-w-7xl mx-auto sm:px-5 lg:px-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:-translate-y-2 transition-transform">
                        <div className="text-primary text-3xl mb-4">📧</div>
                        <h3 className="text-xl font-semibold mb-2">E-Mail</h3>
                        <p className="text-gray-600">info@bauvision360.de</p>
                    </div>
                    <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:-translate-y-2 transition-transform">
                        <a href="tel:+4915755267680">
                            <div className="text-primary text-3xl mb-4">📱</div>
                            <h3 className="text-xl font-semibold mb-2">Telefon</h3>
                            <p className="text-gray-600">+49 (0) 1575 52 67 68 0</p>
                        </a>
                    </div>
                    <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:-translate-y-2 transition-transform">
                        <div className="text-primary text-3xl mb-4">🏢</div>
                        <h3 className="text-xl font-semibold mb-2">Adresse</h3>
                        <p className="text-gray-600">Oelder Straße 148a<br />59269 Beckum</p>
                    </div>
                </div>
            </div>
        </section>

        <section className="bg-lightGray py-16 px-5">
            <div className="max-w-7xl mx-auto bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-primary mb-8">Schreiben Sie uns</h2>
                <form action="#" method="POST" className="space-y-6">
                    <div className="space-y-2">
                        <label htmlFor="name" className="block font-medium">Name <span className="text-red-500">*</span></label>
                        <input type="text" id="name" name="name" required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Geben Sie bitte Ihren Vor- und Nachnamen an" />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="email" className="block font-medium">E-Mail <span className="text-red-500">*</span></label>
                        <input type="email" id="email" name="email" required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Bitte geben Sie Ihre E-Mail-Adresse ein" />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="phone" className="block font-medium">Telefon</label>
                        <input type="tel" id="phone" name="phone"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Bitte geben Sie Ihre Telefonnummer ein" />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="date" className="block font-medium">Ausführungszeitraum <span className="text-red-500">*</span></label>
                        <input type="date" id="date" name="date" required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Bitte geben Sie den gewünschten Ausführungszeitraum ein" />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="service" className="block font-medium">Welche Dienstleistungen benötigen Sie? <span className="text-red-500">*</span></label>
                        <input type="text" id="service" name="service" required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Was können wir für Sie tun? z.B. Trockenbau, Sanierung, etc." />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="files" className="block font-medium">Dateien hochladen</label>
                        <input type="file" id="files" name="files" multiple
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="message" className="block font-medium">Nachricht <span className="text-red-500">*</span></label>
                        <textarea id="message" name="message" rows={5} required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Beschreiben Sie hier Ihr Projekt und Ihre Anforderungen..."></textarea>
                    </div>
                    <div className="flex items-start gap-2">
                        <input type="checkbox" id="privacy" required className="mt-1.5" />
                        <label htmlFor="privacy" className="text-sm">
                            Ich stimme der Verarbeitung meiner Daten gemäß der Datenschutzerklärung zu <span className="text-red-500">*</span>
                        </label>
                    </div>
                    <button type="submit"
                        className="bg-primary hover:bg-secondary text-white px-8 py-4 rounded-md transition-colors">
                        Nachricht senden
                    </button>
                </form>
            </div>
        </section>
    </main>
}
