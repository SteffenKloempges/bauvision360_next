import Link from "next/link";
import ImageSlider from "@/app/components/imageSlider";
import ImageKoordinierung from '@/images/services/NEU_Bauleitung.webp';
import ImageGewerke from '@/images/services/03_Trockenbau.webp';
import Image from "next/image";
import FadeIn from "@/app/components/FadeIn";

export default function Home() {
  return (
    <main className="font-sans text-gray-800">
      <section className="pt-12 lg:pt-16 px-5">
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
      <section className="py-24 px-5">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl font-bold text-primary text-center mb-16">
              Unsere Leistungen
            </h2>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-8">
            <FadeIn>
              <Link
                href="/services/professional"
                className="block bg-white rounded-lg shadow-lg hover:-translate-y-1 transition-transform overflow-hidden group h-full"
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
                  <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-secondary transition-all duration-300">
                    Baustellen-Koordinierung
                  </h3>
                  <p className="text-gray-600">
                    Professionelle Unterstützung für Ihr Projekt
                  </p>
                </div>
              </Link>
            </FadeIn>
            <FadeIn>
              <Link
                href="/services/crafting"
                className="block bg-white rounded-lg shadow-lg hover:-translate-y-1 transition-transform overflow-hidden group h-full"
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
                  <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-secondary transition-all duration-300">
                    Handwerkliche Gewerke
                  </h3>
                  <p className="text-gray-600">
                    Fachexpertise für Ihr Bauvorhaben
                  </p>
                </div>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>
      <section className="bg-lightGray py-24">
        <div className="max-w-7xl mx-auto px-5">
          <FadeIn>
            <h2 className="text-3xl font-bold text-primary text-center mb-16">
              Das sagen unsere Kunden
            </h2>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-8">
            <FadeIn>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <p className="mb-4">
                  Hervorragende Qualität und termingerechte Fertigstellung.
                </p>
                <cite className="block text-primary font-medium">
                  - Michael S., Projektentwickler
                </cite>
              </div>
            </FadeIn>
            <FadeIn>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <p className="mb-4">Kompetente Beratung von Anfang bis Ende.</p>
                <cite className="block text-primary font-medium">
                  - Sandra M., Privatkundin
                </cite>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </main>
  );
}
