"use client";

import FadeIn from "./FadeIn";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useEffect, useState } from "react";

interface Testimonial {
  text: string;
  author: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    text: `Hervorragende Qualität in den Gewerken Trockenbau und Bodenbelagsarbeiten. Das Wichtigste: eine termingerechte Fertigstellung. Vom ersten Kennenlernen bis zur Übergabe verlief die Kommunikation reibungslos und professionell. Das nächste Projekt in der Nähe von Kamen ist bereits in Planung. BAUvision360° werden wir definitiv wieder anfragen. Auf eine langfristige und unkomplizierte Zusammenarbeit!`,
    author: "Michael S.",
    role: "Projektentwickler",
  },
  {
    text: "Kompetenz von Anfang bis Ende. Freundliches und professionelles Auftreten. Meine Küche stand innerhalb eines Tages. Alles wurde wie besprochen umgesetzt. Preis-Leistung ist super!!! Vielen Dank nochmal an Herrn Lenckowski.",
    author: "Sandra M.",
    role: "Privatkundin",
  },
  {
    text: "Ich bin wirklich glücklich, dass die Wohnung meiner damaligen Mieter so schnell, gründlich und sauber geräumt wurde. Tolle Arbeit! Ich empfehle Sie mit gutem Gewissen weiter. ",
    author: "Bernd S.",
    role: "Privatkunde",
  },
  {
    text: "Unsere neue Decke mit Beleuchtung ist sehr gut geworden. Preis ist gut, Arbeit ist noch besser.",
    author: "Hamid A.",
    role: "Privatkunde",
  },
  {
    text: `Hallo,
wir haben einen neuen Laminatboden für unser Haus bei BAUvision360° erworben und verlegen lassen. Die Qualität des Laminats ist sehr hochwertig. Es wurde sehr gewissenhaft gearbeitet. Bevor die Handwerker Feierabend gemacht haben, war immer alles sauber und aufgeräumt. BAUvision360° ist sehr zu empfehlen.
Viele Grüße
Johanna und Markus`,
    author: "Johanna P.",
    role: "Privatkundin",
  },
];

const Testimonials = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return (
    <section className="bg-lightGray py-24 overflow-hidden">
      <div className="max-w-[1920px] mx-auto px-5">
        <FadeIn>
          <h2 className="text-3xl font-bold text-primary text-center mb-16">
            Das sagen unsere Kunden
          </h2>
        </FadeIn>
        {isMobile ? (
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            className="w-full"
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col h-full">
                  <div className="flex-grow overflow-y-auto">
                    <p className="text-base leading-relaxed break-words">
                      {testimonial.text}
                    </p>
                  </div>
                  <div className="pt-6">
                    <cite className="block text-primary font-medium">
                      - {testimonial.author}, {testimonial.role}
                    </cite>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="relative w-full mx-auto overflow-hidden">
            <div className="flex whitespace-nowrap">
              <div className="animate-scrollLeft flex gap-8 items-stretch">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={`first-${index}`}
                    className="w-[500px] min-h-[300px] flex-shrink-0 flex"
                  >
                    <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col w-full">
                      <div className="flex-grow overflow-y-auto">
                        <p className="text-base leading-relaxed break-words whitespace-normal">
                          {testimonial.text}
                        </p>
                      </div>
                      <div className="pt-6">
                        <cite className="block text-primary font-medium">
                          - {testimonial.author}, {testimonial.role}
                        </cite>
                      </div>
                    </div>
                  </div>
                ))}
                {testimonials.map((testimonial, index) => (
                  <div
                    key={`second-${index}`}
                    className="w-[500px] min-h-[300px] flex-shrink-0 flex"
                  >
                    <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col w-full">
                      <div className="flex-grow overflow-y-auto">
                        <p className="text-base leading-relaxed break-words whitespace-normal">
                          {testimonial.text}
                        </p>
                      </div>
                      <div className="pt-6">
                        <cite className="block text-primary font-medium">
                          - {testimonial.author}, {testimonial.role}
                        </cite>
                      </div>
                    </div>
                  </div>
                ))}
                {testimonials.map((testimonial, index) => (
                  <div
                    key={`third-${index}`}
                    className="w-[500px] min-h-[300px] flex-shrink-0 flex"
                  >
                    <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col w-full">
                      <div className="flex-grow overflow-y-auto">
                        <p className="text-base leading-relaxed break-words whitespace-normal">
                          {testimonial.text}
                        </p>
                      </div>
                      <div className="pt-6">
                        <cite className="block text-primary font-medium">
                          - {testimonial.author}, {testimonial.role}
                        </cite>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
