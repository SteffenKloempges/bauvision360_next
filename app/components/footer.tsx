export default function Footer() {
    return     <footer className="bg-primary text-white">
    <div className="max-w-7xl mx-auto px-5 py-16">
        <div className="grid md:grid-cols-3 gap-8 mb-16 md:place-items-center">
            <div>
                <h3 className="text-xl font-bold mb-4">Bauvision 360</h3>
                <p>Ihr verlässlicher Partner im Baugewerbe</p>
            </div>
            <div>
                <h3 className="text-xl font-bold mb-4">Kontakt</h3>
                <p>Baustraße 123<br />12345 Baustadt<br />Tel: 0123 456789<br />Email: info@bauvision360.de</p>
            </div>
            <div>
                <h3 className="text-xl font-bold mb-4">Links</h3>
                <ul className="space-y-2">
                    <li><a href="impressum.html" className="hover:text-secondary transition-colors">Impressum</a></li>
                    <li><a href="datenschutz.html" className="hover:text-secondary transition-colors">Datenschutz</a></li>
                </ul>
            </div>
        </div>
        <div className="text-center pt-8 border-t border-white/10">
            <p>&copy; 2024 Bauvision 360. Alle Rechte vorbehalten.</p>
        </div>
    </div>
</footer>;
}