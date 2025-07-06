"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { contactData } from "../data/contactData";

export default function ContactForm() {
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    service: "",
    message: "",
    privacy: false,
  });
  const [files, setFiles] = useState<File[]>([]);
  const [fileError, setFileError] = useState<string | null>(null);
  const [status, setStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const serviceParam = searchParams.get("service");
    if (serviceParam) {
      setFormData((prev) => ({
        ...prev,
        service: decodeURIComponent(serviceParam),
      }));
    }
  }, [searchParams]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || []);
    setFileError(null);

    if (selectedFiles.length > 5) {
      setFileError("Sie können maximal 5 Dateien hochladen.");
      e.target.value = "";
      return;
    }

    const totalSize = selectedFiles.reduce((sum, file) => sum + file.size, 0);
    if (totalSize > 50 * 1024 * 1024) {
      setFileError(
        "Die Gesamtgröße aller Dateien darf 50MB nicht überschreiten."
      );
      e.target.value = "";
      return;
    }

    for (const file of selectedFiles) {
      if (file.size > 10 * 1024 * 1024) {
        setFileError("Einzelne Dateien dürfen nicht größer als 10MB sein.");
        e.target.value = "";
        return;
      }
    }

    setFiles(selectedFiles);
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
    if (files.length === 1) {
      const fileInput = document.querySelector(
        'input[type="file"]'
      ) as HTMLInputElement;
      if (fileInput) fileInput.value = "";
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    try {
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value.toString());
      });

      files.forEach((file, index) => {
        formDataToSend.append(`file${index}`, file);
      });

      const response = await fetch("/api/contact", {
        method: "POST",
        body: formDataToSend,
      });

      if (!response.ok) {
        throw new Error("Fehler beim Senden der Nachricht");
      }

      setStatus({
        type: "success",
        message:
          "Ihre Nachricht wurde erfolgreich gesendet. Wir melden uns bei Ihnen.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        date: "",
        service: "",
        message: "",
        privacy: false,
      });
      setFiles([]);
      const fileInput = document.querySelector(
        'input[type="file"]'
      ) as HTMLInputElement;
      if (fileInput) fileInput.value = "";
    } catch (error) {
      setStatus({
        type: "error",
        message:
          "Es gab einen Fehler beim Senden Ihrer Nachricht. Bitte versuchen Sie es später erneut.",
      });
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  return (
    <>
      <section className="py-8 px-5">
        <div className="max-w-7xl mx-auto bg-white p-8 rounded-lg shadow-lg border-1.5 border-secondary">
          <h2 className="text-2xl font-bold text-primary mb-8">
            Schreiben Sie uns
          </h2>
          {status && (
            <div
              className={`p-4 mb-6 rounded-md ${
                status.type === "success"
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {status.message}
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="block font-medium">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Geben Sie bitte Ihren Vor- und Nachnamen an"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="block font-medium">
                E-Mail <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Bitte geben Sie Ihre E-Mail-Adresse ein"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="phone" className="block font-medium">
                Telefon
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Bitte geben Sie Ihre Telefonnummer ein"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="date" className="block font-medium">
                Ausführungszeitraum
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="service" className="block font-medium">
                Welche Dienstleistungen benötigen Sie?{" "}
                <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="service"
                name="service"
                required
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Was können wir für Sie tun? z.B. Trockenbau, Sanierung, etc."
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="block font-medium">
                Nachricht <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Beschreiben Sie hier Ihr Projekt und Ihre Anforderungen..."
              ></textarea>
            </div>
            <div className="space-y-2">
              <label htmlFor="file" className="block font-medium">
                Dateien anhängen (max. 5 Dateien, je max. 10MB)
              </label>
              <input
                type="file"
                id="file"
                name="file"
                multiple
                onChange={handleFileChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
              />
              {fileError && (
                <p className="text-red-500 text-sm mt-1">{fileError}</p>
              )}
              {files.length > 0 && (
                <div className="mt-2 space-y-2">
                  <p className="text-sm font-medium">Ausgewählte Dateien:</p>
                  {files.map((file, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between bg-gray-50 p-2 rounded"
                    >
                      <span className="text-sm">{file.name}</span>
                      <button
                        type="button"
                        onClick={() => removeFile(index)}
                        className="text-red-500 hover:text-red-700"
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                id="privacy"
                name="privacy"
                required
                checked={formData.privacy}
                onChange={handleChange}
                className="mt-1.5"
              />
              <label htmlFor="privacy" className="text-sm">
                Ich stimme der Verarbeitung meiner Daten gemäß der
                Datenschutzerklärung zu <span className="text-red-500">*</span>
              </label>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-primary hover:bg-secondary text-white px-8 py-4 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Wird gesendet..." : "Nachricht senden"}
            </button>
          </form>
        </div>
      </section>

      <section className="py-32 px-5">
        <div className="max-w-7xl mx-auto sm:px-5 lg:px-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:-translate-y-2 transition-transform">
              <a href="mailto:info@bauvision360.de">
                <div className="text-primary text-3xl mb-4">📧</div>
                <h3 className="text-xl font-semibold mb-2">E-Mail</h3>
                <p className="text-gray-600">{contactData.email}</p>
              </a>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:-translate-y-2 transition-transform">
              <a href="tel:+4915755267680">
                <div className="text-primary text-3xl mb-4">📱</div>
                <h3 className="text-xl font-semibold mb-2">Telefon</h3>
                <p className="text-gray-600">{contactData.tel}</p>
              </a>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:-translate-y-2 transition-transform">
              <div className="text-primary text-3xl mb-4">🏢</div>
              <h3 className="text-xl font-semibold mb-2">Adresse</h3>
              <p className="text-gray-600">
                {contactData.address.street}
                <br />
                {contactData.address.code} {contactData.address.city}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
