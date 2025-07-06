"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  ServiceData,
  professionalServices,
  craftingServices,
  serviceData,
  ServiceDataMap,
} from "../services";
import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/app/components/FadeIn";

const SingleService = () => {
  const pathname = usePathname();
  const [dataState, setDataState] = useState<ServiceDataMap>(serviceData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentService, setCurrentService] = useState<ServiceData | null>(
    null
  );

  console.log(pathname);

  useEffect(() => {
    if (pathname.includes("professional")) {
      setDataState(professionalServices);
    } else if (pathname.includes("crafting")) {
      setDataState(craftingServices);
    }
  }, [pathname]);
  console.log(dataState);

  const openModal = (serviceType: string) => {
    if (dataState) {
      const services = dataState[serviceType];
      if (!services) return;

      setCurrentService(services);
      setIsModalOpen(true);
      document.body.style.overflow = "hidden";
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentService(null);
    document.body.style.overflow = "unset";
  };

  return (
    <main className="pt-10 font-sans text-gray-800">
      <section className="px-5 py-8 lg:py-12 text-center">
        <FadeIn>
          <h1 className="text-4xl lg:text-5xl font-bold text-primary leading-tight">
            {pathname.includes("professional")
              ? "Koordinierende Leistungen"
              : "Handwerkliche Leistungen"}
          </h1>
          <p className="text-xl text-gray-600">
            {pathname.includes("professional")
              ? "Professionelle Unterstützung für Ihr Projekt"
              : "Handwerkliche Leistungen"}
          </p>
        </FadeIn>
      </section>
      <section className="px-5 py-8">
        <div
          className={
            pathname.includes("professional")
              ? "lg:grid-cols-2 max-w-7xl mx-auto grid md:grid-cols-2 gap-8 "
              : "lg:grid-cols-4 max-w-7xl mx-auto grid md:grid-cols-2 gap-8 "
          }
        >
          {Object.entries(dataState).map(([key, service]) => (
            <FadeIn key={key}>
              <div
                className="group bg-white p-8 rounded-lg shadow-lg hover:-translate-y-1 transition-transform cursor-pointer h-full flex flex-col"
                onClick={() => openModal(key)}
              >
                <div className="w-full h-48 relative mb-4 rounded overflow-hidden">
                  <Image
                    src={service.image}
                    layout="fill"
                    alt={service.title}
                    objectFit="cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-primary mb-4 group-hover:text-secondary">
                  {service.title}
                </h3>
                <p className="text-gray-600 flex-grow">{service.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="py-16 px-5 text-center">
        <FadeIn>
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold text-primary">
              Interesse an unseren Leistungen?
            </h2>
            <p className="text-gray-600">
              Kontaktieren Sie uns für ein unverbindliches Beratungsgespräch.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-primary hover:bg-secondary text-white px-8 py-4 rounded-md transition-colors"
            >
              Jetzt anfragen
            </Link>
          </div>
        </FadeIn>
      </section>

      {/* Modal */}
      {isModalOpen && currentService && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={(e) => e.target === e.currentTarget && closeModal()}
        >
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-bold text-primary">
                  {currentService.title}
                </h2>
                <button
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>
              <div className="mb-8">
                <p className="text-gray-600 mb-6">
                  {currentService.description}
                </p>
                <h3 className="text-xl font-bold text-primary mb-4">
                  Unsere Leistungen umfassen:
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  {currentService.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                {currentService.nachtrag && (
                  <p className="mt-2">{currentService.nachtrag}</p>
                )}
              </div>
              <div className="text-center">
                <Link
                  href={`/contact?service=${encodeURIComponent(
                    currentService.title
                  )}`}
                  className="inline-block bg-primary hover:bg-secondary text-white px-8 py-4 rounded-md transition-colors"
                  onClick={(e) => e.target === e.currentTarget && closeModal()}
                >
                  Jetzt anfragen
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default SingleService;
