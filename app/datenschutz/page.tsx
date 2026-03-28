export default function DatenschutzPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-24 text-[#13213d]">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold">Datenschutzerklärung</h1>

        <div className="mt-10 space-y-8 text-base leading-8 text-slate-700">
          <section>
            <h2 className="text-2xl font-semibold text-[#13213d]">
              1. Datenschutz auf einen Blick
            </h2>
            <p className="mt-4">
              Der Schutz Ihrer persönlichen Daten ist uns wichtig. Personenbezogene Daten werden auf dieser Website nur im notwendigen Umfang verarbeitet.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#13213d]">
              2. Verantwortlicher
            </h2>
            <p className="mt-4">
              Leon Janzen & Eren Ince GbR
              <br />
              Deine Straße 1
              <br />
              12345 Deine Stadt
              <br />
              Deutschland
            </p>

            <p className="mt-4">
              E-Mail: kontakt@erlen-sales.de
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#13213d]">
              3. Erhebung und Speicherung personenbezogener Daten
            </h2>
            <p className="mt-4">
              Beim Besuch dieser Website werden automatisch Informationen durch den Browser an unseren Server übermittelt. Dies sind insbesondere:
            </p>

            <ul className="mt-4 list-disc space-y-2 pl-6">
              <li>IP-Adresse</li>
              <li>Datum und Uhrzeit der Anfrage</li>
              <li>Browsertyp und Browserversion</li>
              <li>Verwendetes Betriebssystem</li>
              <li>Referrer-URL</li>
              <li>Hostname des zugreifenden Rechners</li>
            </ul>

            <p className="mt-4">
              Diese Daten dienen ausschließlich der technischen Bereitstellung und Sicherheit der Website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#13213d]">
              4. Bewerbungsformular
            </h2>
            <p className="mt-4">
              Wenn Sie uns über das Bewerbungsformular kontaktieren, werden Ihre Angaben inklusive der von Ihnen dort angegebenen Kontaktdaten ausschließlich zur Bearbeitung Ihrer Bewerbung gespeichert und verarbeitet.
            </p>

            <p className="mt-4">
              Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO sowie Art. 6 Abs. 1 lit. f DSGVO.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#13213d]">
              5. Hosting
            </h2>
            <p className="mt-4">
              Diese Website wird über Vercel gehostet. Anbieter ist Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA.
            </p>

            <p className="mt-4">
              Weitere Informationen finden Sie unter:
            </p>

            <a
              href="https://vercel.com/legal/privacy-policy"
              target="_blank"
              className="underline"
            >
              https://vercel.com/legal/privacy-policy
            </a>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#13213d]">
              6. Ihre Rechte
            </h2>

            <p className="mt-4">
              Sie haben jederzeit das Recht auf:
            </p>

            <ul className="mt-4 list-disc space-y-2 pl-6">
              <li>Auskunft über Ihre gespeicherten Daten</li>
              <li>Berichtigung unrichtiger Daten</li>
              <li>Löschung Ihrer Daten</li>
              <li>Einschränkung der Verarbeitung</li>
              <li>Widerspruch gegen die Verarbeitung</li>
              <li>Datenübertragbarkeit</li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}