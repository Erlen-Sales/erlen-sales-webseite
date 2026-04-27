export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-24 text-[#13213d]">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold">Impressum</h1>

        <div className="mt-10 space-y-6 text-lg leading-8 text-slate-700">
          <div>
            <p className="font-semibold">Angaben gemäß § 5 DDG</p>
            <p>Erlen Sales GbR</p>
            <p>Kömbchesweg 26</p>
            <p>57612 Helmenzen</p>
            <p>Deutschland</p>
          </div>

          <div>
            <p className="font-semibold">Vertreten durch</p>
            <p>Leon Janzen</p>
            <p>Eren Ince</p>
          </div>

          <div>
            <p className="font-semibold">Kontakt</p>
            <p>E-Mail: kontakt@erlen-sales.de</p>
          </div>

          <div>
            <p className="font-semibold">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</p>
            <p>Leon Janzen & Eren Ince</p>
            <p>Kömbchesweg 26</p>
            <p>57612 Helmenzen</p>
          </div>

          <div>
            <p className="font-semibold">EU-Streitschlichtung</p>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung bereit:
            </p>
            <a
              href="https://ec.europa.eu/consumers/odr/"
              target="_blank"
              className="text-[#13213d] underline"
            >
              https://ec.europa.eu/consumers/odr/
            </a>
          </div>

          <div>
            <p>
              Wir sind nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}