'use client'
import { useState } from 'react';
import Link from 'next/link';

interface ServiceData {
  title: string;
  description: string;
  features: string[];
}

interface ServiceDataMap {
  [key: string]: ServiceData;
}

export default function Services() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentService, setCurrentService] = useState<ServiceData | null>(null);

    const serviceData: ServiceDataMap = {
        trockenbau: {
            title: "Trockenbau",
            description: "Wir bieten professionelle Trockenbaulösungen für alle Ihre Bauprojekte. Mit jahrelanger Erfahrung und modernster Technik garantieren wir hochwertige Ergebnisse.",
            features: [
                "Wand- und Deckensysteme",
                "Akustiklösungen",
                "Brandschutzverkleidungen",
                "Schallschutzlösungen",
                "Dachgeschossausbau",
                "Raumgestaltung und Raumtrennung"
            ]
        },
        bodenbelagsarbeiten: {
            title: "Bodenbelagsarbeiten",
            description: "Professionelle Verlegung verschiedener Bodenbeläge nach Ihren individuellen Wünschen und Anforderungen.",
            features: [
                "Parkett und Laminat",
                "Teppichböden",
                "Vinylbeläge",
                "Natursteinböden",
                "Estricharbeiten"
            ]
        },
        demontage_und_abbruch: {
            title: "Demontage & Abbruch",
            description: "Wir führen fachgerechte Demontage- und Abbrucharbeiten für Renovierungen, Umbauten oder Neubauten durch – schnell, sauber und professionell.",
            features: [
                "Abbruch von Bodenbelägen",
                "Trockenbau- und Holzrahmenbau-Demontage",
                "Entfernung von Türen und Fenstern",
                "Möbelabriss und Entsorgung",
                "Umweltgerechte Entsorgung",
                "Effiziente Durchführung"
            ]
        },
        pflaster_und_gartenarbeiten: {
            title: "Pflaster- & Gartenarbeiten",
            description: "Wir gestalten Einfahrten, Gehwege und Terrassen professionell und übernehmen Gartenpflegearbeiten für einen gepflegten Außenbereich.",
            features: [
                "Pflasterverlegung für Einfahrten & Terrassen",
                "Natur- und Betonsteinmuster",
                "Randsteine & Einfassungen",
                "Rasenmähen & Pflege",
                "Beetanlage & -pflege",
                "Optisch ansprechende Gartengestaltung"
            ]
        },
        entruempelung_und_haushaltsaufloesung: {
            title: "Entrümpelung & Haushaltsauflösung",
            description: "Wir entrümpeln Keller, Dachböden und ganze Haushalte schnell, zuverlässig und umweltgerecht – inklusive fachgerechter Entsorgung.",
            features: [
                "Professionelle Entrümpelung",
                "Besenreine Haushaltsauflösungen",
                "Schnelle & diskrete Abwicklung",
                "Umweltgerechte Entsorgung",
                "Transparente Preisgestaltung",
                "Wiederverwertung brauchbarer Gegenstände"
            ]
        },
        kuechenmontage: {
            title: "Küchenmontage",
            description: "Wir montieren Ihre Küche professionell und passgenau – von Schränken über Arbeitsplatten bis zum Einbau der Elektrogeräte.",
            features: [
                "Präzise Montage von Küchenmöbeln",
                "Millimetergenauer Zuschnitt von Arbeitsplatten",
                "Einbau von Küchengeräten",
                "Anpassungen für optimale Raumnutzung",
                "Sichere & stabile Befestigung",
                "Vorbereitung für Wasser- & Starkstromanschlüsse"
            ]
        },
        tuer_und_fenstermontage: {
            title: "Tür- & Fenstermontage",
            description: "Wir montieren Innentüren und Fensteranlagen aus Kunststoff und Aluminium fachgerecht, stabil und optisch ansprechend.",
            features: [
                "Passgenaue Türmontage",
                "Verschiedene Türdesigns & Materialien",
                "Termingerechte & saubere Ausführung",
                "Montage von Kunststoff- & Aluminiumfenstern",
                "Energieeffiziente & schallisolierende Fenster",
                "Erhöhte Sicherheit & Langlebigkeit"
            ]
        },
        bauleitung: {
            title: "Bauleitung",
            description: "Wir übernehmen die Bauleitung und Projektsteuerung, um Ihr Bauvorhaben effizient, termingerecht und qualitätsgesichert umzusetzen.",
            features: [
                "Koordination aller Gewerke",
                "Sicherstellung der Bauqualität",
                "Einhaltung von Zeitplänen",
                "Überwachung des Budgets",
                "Unterstützung bei Bauanträgen",
                "Reibungslose Projektabwicklung"
            ]
        }
    };

    const openModal = (serviceType: string) => {
        const data = serviceData[serviceType];
        if (!data) return;
        
        setCurrentService(data);
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setCurrentService(null);
        document.body.style.overflow = 'unset';
    };

    return (
        <main className="pt-20 font-sans text-gray-800">
            <section className="px-5 py-16 lg:py-24 text-center">
                        <h1 className="text-4xl lg:text-5xl font-bold text-primary leading-tight">
                            Unsere Leistungen
                        </h1>
                        <p className="text-xl text-gray-600">
                            Professionelle Baudienstleistungen aus einer Hand
                        </p>
            </section>
            <section className="px-5 py-16">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4     gap-8">
                    {Object.entries(serviceData).map(([key, service]) => (
                        <div
                            key={key}
                            className="bg-white p-8 rounded-lg shadow-lg hover:-translate-y-1 transition-transform cursor-pointer"
                            onClick={() => openModal(key)}
                        >
                            <div className="w-16 h-16 rounded-full bg-[#3a5d8f] mb-6"></div>
                            <h3 className="text-xl font-bold text-primary mb-4">{service.title}</h3>
                            <p className="text-gray-600">{service.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="py-16 px-5 text-center">
                <div className="max-w-2xl mx-auto space-y-6">
                    <h2 className="text-3xl font-bold text-primary">Interesse an unseren Leistungen?</h2>
                    <p className="text-gray-600">Kontaktieren Sie uns für ein unverbindliches Beratungsgespräch.</p>
                    <Link href="/contact" className="inline-block bg-primary hover:bg-secondary text-white hover:text-black px-8 py-4 rounded-md transition-colors">
                        Jetzt anfragen
                    </Link>
                </div>
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
                                <h2 className="text-2xl font-bold text-primary">{currentService.title}</h2>
                                <button 
                                    onClick={closeModal}
                                    className="text-gray-500 hover:text-gray-700 text-2xl"
                                >
                                    ×
                                </button>
                            </div>
                            <div className="mb-8">
                                <p className="text-gray-600 mb-6">{currentService.description}</p>
                                <h3 className="text-xl font-bold text-primary mb-4">Unsere Leistungen umfassen:</h3>
                                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                                    {currentService.features.map((feature, index) => (
                                        <li key={index}>{feature}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="text-center">
                                <Link 
                                    href="/contact" 
                                    className="inline-block bg-primary hover:bg-secondary text-white hover:text-black px-8 py-4 rounded-md transition-colors"
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
