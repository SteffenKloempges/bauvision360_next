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
            <a href="tel:+491234567890">
              <div className="text-primary text-3xl mb-4">📱</div>
              <h3 className="text-xl font-semibold mb-2">Telefon</h3>
              <p className="text-gray-600">+49 (0) 123 456 789</p>
            </a>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:-translate-y-2 transition-transform">
              <div className="text-primary text-3xl mb-4">🏢</div>
              <h3 className="text-xl font-semibold mb-2">Adresse</h3>
              <p className="text-gray-600">Baustraße 123<br />12345 Baustadt</p>
            </div>
          </div>
        </div>
      </section>

        <section className="bg-lightGray py-16 px-5">
                <div className="max-w-7xl mx-auto bg-white p-8 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold text-primary mb-8">Schreiben Sie uns</h2>
                    <form action="#" method="POST" className="space-y-6">
                        <div className="space-y-2">
                            <label htmlFor="name" className="block font-medium">Name *</label>
                            <input type="text" id="name" name="name" required 
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="block font-medium">E-Mail *</label>
                            <input type="email" id="email" name="email" required 
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="phone" className="block font-medium">Telefon</label>
                            <input type="tel" id="phone" name="phone" 
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="date" className="block font-medium">Ausführungszeitraum *</label>
                            <input type="date" id="date" name="date" required 
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="project" className="block font-medium">Projektbezeichnung *</label>
                            <input type="text" id="project" name="project" required 
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="service" className="block font-medium">Welche Dienstleistungen benötigen Sie? *</label>
                            <input type="text" id="service" name="service" required 
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="files" className="block font-medium">Dateien hochladen</label>
                            <input type="file" id="files" name="files" multiple
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="message" className="block font-medium">Nachricht *</label>
                            <textarea id="message" name="message" rows={5} required 
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"></textarea>
                        </div>
                        <div className="flex items-start gap-2">
                            <input type="checkbox" id="privacy" required className="mt-1.5" />
                            <label htmlFor="privacy" className="text-sm">
                                Ich stimme der Verarbeitung meiner Daten gemäß der Datenschutzerklärung zu *
                            </label>
                        </div>
                        <button type="submit" 
                            className="bg-primary hover:bg-secondary text-white hover:text-black px-8 py-4 rounded-md transition-colors">
                            Nachricht senden
                        </button>
                    </form>
                </div>
        </section>
    </main>
}
