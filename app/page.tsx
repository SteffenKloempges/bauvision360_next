import Link from "next/link";
import ImageSlider from "@/app/components/imageSlider";
import ImageKoordinierung from '@/images/services/NEU_Bauleitung.webp';
import ImageGewerke from '@/images/services/03_Trockenbau.webp';
import Image from "next/image";

export default function Home() {
  return (
    <main className="font-sans text-gray-800">
      <section className="pt-24 lg:pt-32 px-5">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center space-y-8 h-96">
            <h1 className="text-4xl lg:text-5xl font-bold text-primary leading-tight">
              Handwerk und Bauleitung aus einer Hand
            </h1>
            <p className="text-xl text-gray-600">
              Wir realisieren Ihr Bauvorhaben termingerecht und professionell
            </p>
            <Link
              href="/contact"
              className="inline-block bg-primary hover:bg-secondary text-white px-8 py-4 rounded-md transition-colors w-fit"
            >
              Kontakt aufnehmen
            </Link>
          </div>
          <ImageSlider />
        </div>
      </section>

      {/* <section className="bg-lightGray py-24 mt-24">
        <div className="max-w-7xl mx-auto px-5 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <h2 className="text-5xl font-bold text-primary mb-2">5+</h2>
            <p>Jahre Erfahrung</p>
          </div>
          <div className="text-center">
            <h2 className="text-5xl font-bold text-primary mb-2">10+</h2>
            <p>Projekte</p>
          </div>
          <div className="text-center">
            <h2 className="text-5xl font-bold text-primary mb-2">100%</h2>
            <p>Kundenorientiert</p>
          </div>
        </div>
      </section> */}

      <section className="py-24 px-5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-primary text-center mb-16">
            Unsere Leistungen
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Link
              href="/services/professional"
              className="block bg-white rounded-lg shadow-lg hover:-translate-y-1 transition-transform overflow-hidden"
            >
              <div className="relative w-full h-72">
                <Image
                  src={ImageKoordinierung}
                  layout="fill"
                  alt="Hier sieht man eine Koordinierende Bauleistung"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">
                  Koordinierung
                </h3>
                <p className="text-gray-600">
                  Professionelle Unterstützung an Ihr Projekt
                </p>
              </div>
            </Link>
            <Link
              href="/services/crafting"
              className="block bg-white rounded-lg shadow-lg hover:-translate-y-1 transition-transform overflow-hidden"
            >
              <div className="relative w-full h-72">
                <Image
                  src={ImageGewerke}
                  layout="fill"
                  alt="Hier sieht man eine Koordinierende Bauleistung"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">
                  Handwerkliche Gewerke
                </h3>
                <p className="text-gray-600">
                  Handwerkliche Unterstützung für Ihr Projekt
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-lightGray py-24">
        <div className="max-w-7xl mx-auto px-5">
          <h2 className="text-3xl font-bold text-primary text-center mb-16">
            Das sagen unsere Kunden
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <p className="mb-4">
                Hervorragende Qualität und termingerechte Fertigstellung.
              </p>
              <cite className="block text-primary font-medium">
                - Michael S., Projektentwickler
              </cite>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <p className="mb-4">Kompetente Beratung von Anfang bis Ende.</p>
              <cite className="block text-primary font-medium">
                - Sandra M., Privatkundin
              </cite>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
