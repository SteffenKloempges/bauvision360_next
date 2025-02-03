export default function About() {
  return (
        <main className="pt-20 font-sans text-gray-800">
            <section className="px-5 py-16 lg:py-24 text-center">
                        <h1 className="text-4xl lg:text-5xl font-bold text-primary leading-tight">
                            Über Bauvision 360
                        </h1>
                        <p className="text-xl text-gray-600">
                            Ihr verlässlicher Partner im Baugewerbe
                        </p>
            </section>
            <section className="px-5 py-16">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
                    <div className="bg-[#3a5d8f] h-[300px]"></div>
                    <div className="">
                        <h2 className="text-3xl font-bold text-primary mb-6">Unsere Geschichte</h2>
                        <p className="text-gray-600">
                        Unsere oberste Priorität sind Qualität, Zuverlässigkeit und Kundenzufriedenheit. Qualität, Zuverlässigkeit und Kundenzufriedenheit stehen bei uns an erster Stelle. Wir setzen Ihre Wünsche mit persönlicher Beratung und hochwertigen Materialien um. Ob Trockenbau, Bodenbeläge oder Fenstermontage – wir liefern präzise und ästhetische Ergebnisse. Dank starker Partner bieten wir zudem Elektroinstallationen, Maler- und Fliesenarbeiten an. Viele zufriedene Kunden empfehlen uns weiter.Lassen Sie uns gemeinsam Ihr Projekt verwirklichen.
                        </p>
                    </div>
                </div>
            </section>
            <section className="px-5 py-16">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-primary text-center mb-16">Unser Team</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
                        <div className="">
                            <img src="../images/IMG_0237.jpg" alt="Marcel Schleckkowski" className="w-full mb-6 rounded-lg" />
                            <h3 className="text-xl font-bold text-primary">Marcel Schleckkowski</h3>
                            <p className="text-gray-600">Geschäftsführer</p>
                        </div>
                        <div className="">
                            <img src="../images/IMG_0237.jpg" alt="Marcel Leckerkowski" className="w-full mb-6 rounded-lg" />
                            <h3 className="text-xl font-bold text-primary">Marcel Leckerkowski</h3>
                            <p className="text-gray-600">Projektleiterin</p>
                        </div>
                        <div className="">
                            <img src="../images/IMG_0237.jpg" alt="Marcel Pedokowski" className="w-full mb-6 rounded-lg" />
                            <h3 className="text-xl font-bold text-primary">Marcel Pedokowski</h3>
                            <p className="text-gray-600">Bauleiter</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
  )
}
