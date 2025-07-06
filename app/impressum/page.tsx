import { contactData } from "../data/contactData";

const Impressum = () => {
  return (
    <main className="px-4 max-w-screen-xl mx-auto py-8 prose prose-slate">
      <h1 className="text-3xl font-bold mb-8">Impressum</h1>

      <p className="mb-4">
        Marcel Lenckowski
        <br />
        {contactData.company}
        <br />
        {contactData.address.street}
        <br />
        {contactData.address.code} {contactData.address.city}
      </p>

      <h2 className="text-2xl font-semibold mb-4">Kontakt</h2>
      <p className="mb-4">
        Telefon: {contactData.tel}
        <br />
        E-Mail: {contactData.email}
      </p>

      <h2 className="text-2xl font-semibold mb-4">EU-Streitschlichtung</h2>
      <p className="mb-4">
        Die Europ&auml;ische Kommission stellt eine Plattform zur
        Online-Streitbeilegung (OS) bereit:{" "}
        <a
          href="https://ec.europa.eu/consumers/odr/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800"
        >
          https://ec.europa.eu/consumers/odr/
        </a>
        .<br /> Unsere E-Mail-Adresse finden Sie oben im Impressum.
      </p>

      <h2 className="text-2xl font-semibold mb-4">
        Verbraucher&shy;streit&shy;beilegung/Universal&shy;schlichtungs&shy;stelle
      </h2>
      <p className="mb-4">
        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
        vor einer Verbraucherschlichtungsstelle teilzunehmen.
      </p>

      <p className="mb-4">
        Quelle:{" "}
        <a
          href="https://www.e-recht24.de"
          className="text-blue-600 hover:text-blue-800"
        >
          e-recht24.de
        </a>
      </p>
    </main>
  );
};

export default Impressum;
