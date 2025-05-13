import Image from "next/image";
import Marcel from "../../images/Marcel_Lenckowski.png";
import FadeIn from "@/app/components/FadeIn";

export default function About() {
  return (
    <main className="pt-10 font-sans text-gray-800">
      <section className="px-5 py-8 lg:py-12 text-center">
        <FadeIn>
          <h1 className="text-4xl lg:text-5xl font-bold text-primary leading-tight">
            Über BAUvision360&deg;
          </h1>
          <p className="text-xl text-gray-600">
            Ihr verlässlicher Partner im Baugewerbe
          </p>
        </FadeIn>
      </section>
      <section className="px-5 py-8">
        <div className="max-w-4xl mx-auto gap-16">
          <FadeIn>
            <div className="">
              <h2 className="text-3xl font-bold text-primary mb-6">
                Unsere Geschichte
              </h2>
              <p className="text-gray-600">
                Durch langjährige Erfahrung als Bauingenieur/Projektleiter sowie
                im Handwerk bieten wir Ihnen kompetente Beratung, exakte
                Ausführung und eine reibungslose Projektumsetzung. Bei uns stehen
                Qualität, Verlässlichkeit und Kundenzufriedenheit an oberster
                Stelle. Ihre Wünsche setzen wir mit individueller Beratung um und
                verwenden dabei ausschließlich erstklassige Materialien. Ob
                Trockenbau, Bodenbeläge, Fenstermontage oder Winterdienst – wir
                liefern präzise, ästhetische und nachhaltige Ergebnisse. Gemeinsam
                mit unseren starken Partnern bieten wir auch ergänzende Leistungen
                wie Maler- und Fliesenarbeiten sowie Sanitär-, Heizungs- und
                Elektroinstallationen. Werden auch Sie Teil unseres zufriedenen
                Kundenstamms – überzeugen Sie sich von unserer Arbeit! Lassen Sie
                uns Ihr Projekt gemeinsam realisieren.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
      <section className="px-5 py-16">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl font-bold text-primary text-center mb-16">
              Geschäftsführende Ebene
            </h2>
          </FadeIn>
          <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8 place-items-center">
            <FadeIn>
              <div className="">
                <Image
                  src={Marcel}
                  alt="Marcel Schleckkowski"
                  className="w-full mb-6 rounded-lg"
                  width={300}
                  height={300}
                />
                <h3 className="text-xl font-bold text-primary">
                  Marcel Lenckowski
                </h3>
                <p className="text-gray-600">B. Eng. Bauingenieur</p>
                <p className="text-gray-600">
                  Sicherheits- und Gesundheitskoordinator
                </p>
                <p className="text-gray-600">
                  Gelernter Tischler / Küchenmonteur
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </main>
  );
}
