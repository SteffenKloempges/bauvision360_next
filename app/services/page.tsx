"use client";
import { useState } from "react";
import Link from "next/link";
import { serviceData, ServiceData, professionalServices } from "./services";
import AccordionComponent from "../components/accordion";
import Image from "next/image";
import FadeIn from "@/app/components/FadeIn";

export default function Services() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentService, setCurrentService] = useState<ServiceData | null>(
    null
  );

  const openModal = (serviceType: string) => {
    const data = serviceData[serviceType];
    if (data) {
      setCurrentService(data);
      setIsModalOpen(true);
      // Kurze Verzögerung, damit die initialen Styles angewendet werden können
      requestAnimationFrame(() => {
        setIsModalVisible(true);
      });
      document.body.style.overflow = "hidden";
      return;
    }

    const professionalData = professionalServices[serviceType];
    if (professionalData) {
      setCurrentService(professionalData);
      setIsModalOpen(true);
      // Kurze Verzögerung, damit die initialen Styles angewendet werden können
      requestAnimationFrame(() => {
        setIsModalVisible(true);
      });
      document.body.style.overflow = "hidden";
      return;
    }
  };

  const closeModal = () => {
    setIsModalVisible(false);
    setTimeout(() => {
      setIsModalOpen(false);
      setCurrentService(null);
      document.body.style.overflow = "unset";
    }, 300);
  };

  return (
    <main className="pt-20 font-sans text-gray-800">
      <section className="px-5 py-16 lg:py-24 text-center">
        <FadeIn>
          <h1 className="text-4xl lg:text-5xl font-bold text-primary leading-tight">
            Handwerkliche Leistungen
          </h1>
          <p className="text-xl text-gray-600">
            Alles aus einer Hand für Ihr Projekt
          </p>
        </FadeIn>
      </section>
      <section className="px-5 py-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(serviceData).map(([key, service]) => (
            <FadeIn key={key}>
              <div
                className="bg-white p-8 rounded-lg shadow-lg hover:-translate-y-1 transition-transform cursor-pointer h-full flex flex-col"
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
                <h3 className="text-xl font-bold text-primary mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 flex-grow">{service.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
      <section className="px-5 py-16 lg:py-24 text-center">
        <FadeIn>
          <h1 className="text-4xl lg:text-5xl font-bold text-primary leading-tight">
            Koordinierende Leistungen
          </h1>
          <p className="text-xl text-gray-600">
            Professionelle Baudienstleistungen aus einer Hand
          </p>
        </FadeIn>
      </section>
      <section className="px-5 py-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          {Object.entries(professionalServices).map(([key, service]) => (
            <FadeIn key={key}>
              <div
                className="bg-white p-8 rounded-lg shadow-lg hover:-translate-y-1 transition-transform cursor-pointer h-full flex flex-col"
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
                <h3 className="text-xl font-bold text-primary mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 flex-grow">{service.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
      <FadeIn>
        <AccordionComponent />
      </FadeIn>

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
          className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 transition-opacity duration-300 ease-in-out ${isModalVisible ? 'opacity-100' : 'opacity-0'}`}
          onClick={(e) => e.target === e.currentTarget && closeModal()}
        >
          <div className={`bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto transform transition-all duration-300 ease-in-out ${isModalVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
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
                  href="/contact"
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
}
