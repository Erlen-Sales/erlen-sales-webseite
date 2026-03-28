"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, ChevronRight, Users, Briefcase, TrendingUp, BadgeCheck } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const services = [
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: "Neukundengewinnung",
    text: "Strukturierter Direktvertrieb mit klaren Prozessen, hoher Abschlussstärke und einem professionellen Auftritt.",
  },
  {
    icon: <Briefcase className="h-6 w-6" />,
    title: "Door-to-Door Vertrieb",
    text: "Persönliche Kundenansprache an der Haustür mit starker Beratung und nachhaltiger Wirkung.",
  },
  {
    icon: <BadgeCheck className="h-6 w-6" />,
    title: "Telekommunikation & Glasfaser",
    text: "Fokussierte Vermarktung starker Produkte im Telekommunikations- und Glasfaserumfeld.",
  },
];

const benefits = [
  "Klare Prozesse und hochwertige Außendarstellung",
  "Leistungsorientiertes Umfeld mit Aufstiegschancen",
  "Moderne Vertriebsstrukturen",
  "Direkte Bewerbung und Terminbuchung",
  "Fokus auf Strom & Gas, Photovoltaik und Glasfaser",
  "Quereinsteiger willkommen",
];

function SectionTitle({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="mx-auto mb-14 max-w-2xl text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#b8a184]">{eyebrow}</p>
      <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#13213d]">{title}</h2>
      {text ? <p className="mt-4 text-lg text-slate-600">{text}</p> : null}
    </div>
  );
}

export default function ErlenVertriebsagenturWebsite() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="absolute inset-x-0 top-0 z-50">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
          <a href="#" className="inline-flex flex-col items-start">
            <span className="text-4xl font-light tracking-[0.32em] text-white drop-shadow-lg md:text-5xl">ERLEN</span>
            <span className="mt-1 text-[11px] uppercase tracking-[0.42em] text-[#d8c0a0] md:text-xs">
              Vertriebsagentur
            </span>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-medium text-white/90 md:flex">
            <a href="#leistungen" className="transition hover:text-white">Leistungen</a>
            <a href="#partner" className="transition hover:text-white">Partner</a>
            <a href="#warum-wir" className="transition hover:text-white">Wieso wir?</a>
            <a href="#ueber-uns" className="transition hover:text-white">Über uns</a>
            <a href="#karriere" className="transition hover:text-white">Karriere</a>
            <a href="#kontakt" className="transition hover:text-white">Kontakt</a>
          </nav>

          <a
            href="#karriere"
            className="hidden rounded-xl bg-white/95 px-5 py-3 text-[#13213d] shadow-lg hover:bg-white md:inline-flex"
          >
            Jetzt bewerben
          </a>
        </div>
      </header>

      <section className="relative min-h-screen overflow-hidden bg-black text-white">
        <div className="absolute inset-0">
          <img
            src="/door-to-door-erlen-banner.png"
            alt="Door-to-Door Vertrieb"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.25),rgba(0,0,0,0.52),rgba(0,0,0,0.62))]" />
        </div>

        <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 pb-16 pt-32 text-center lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-5xl">
            <div className="mb-6 flex flex-col items-center justify-center gap-3 text-[#f3c95f]">
              <div className="flex items-center gap-2">
                <span className="text-2xl">★</span>
                <span className="text-2xl">★</span>
                <span className="text-2xl">★</span>
                <span className="text-2xl">★</span>
                <span className="text-2xl opacity-50">★</span>
              </div>
              <div className="text-sm font-medium tracking-wide text-white/90 md:text-base">
                4,5 / 5 basierend auf positiven Bewertungen
              </div>
            </div>

            <p className="mb-5 text-base font-medium text-white/90 md:text-xl">
              Door-to-Door Vertrieb für Telekommunikation und Glasfaser
            </p>

            <h1 className="mx-auto max-w-5xl text-4xl font-semibold leading-[1.08] tracking-tight md:text-6xl xl:text-[72px]">
              Vertriebsstärke mit Struktur,
              <br />
              Vertrauen und klarer Performance.
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/80 md:text-lg">
              ERLEN Vertriebsagentur steht für professionellen Außendienst, starke Partnerschaften und einen seriösen
              Auftritt, der bei Kunden und Bewerbern sofort Vertrauen schafft.
            </p>

            <div className="mt-9 flex justify-center">
              <a
  href="#karriere"
  className="mt-8 inline-flex rounded-full bg-[#13213d] px-8 py-4 text-white transition hover:bg-[#1d2f57]"
>
  Zur Bewerbung
</a>
            </div>

            <p className="mt-3 text-sm text-white/70">in weniger als 60 Sekunden</p>
          </motion.div>
        </div>
      </section>

      <section id="partner" className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            <div className="h-full rounded-[1.75rem] border border-slate-200 shadow-sm">
              <div className="flex h-full flex-col p-7">
                <div className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#b8a184]">Partnerschaft</div>
                <div className="text-3xl font-semibold text-[#13213d]">Deutsche Glasfaser</div>
                <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">
                  Starker Fokus auf Telekommunikation und Glasfaservertrieb mit professioneller Kundenansprache vor Ort.
                </p>
              </div>
            </div>

            <div className="h-full rounded-[1.75rem] border border-slate-200 shadow-sm">
              <div className="flex h-full flex-col p-7">
                <div className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#b8a184]">Weitere Bereiche</div>
                <div className="text-3xl font-semibold text-[#13213d]">Strom & Gas, Photovoltaik, Glasfaser</div>
                <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">
                  Wir vertreiben moderne Lösungen aus den Bereichen Strom & Gas, Photovoltaik und Glasfaser mit Fokus auf persönliche Beratung.
                </p>
              </div>
            </div>

            <div className="h-full rounded-[1.75rem] border border-slate-200 shadow-sm">
              <div className="flex h-full flex-col p-7">
                <div className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#b8a184]">Vertriebsmodell</div>
                <div className="text-3xl font-semibold text-[#13213d]">Door to Door</div>
                <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">
                  Direkte Kundengespräche an der Haustür mit persönlicher Beratung und klarem Abschlussfokus.
                </p>
              </div>
            </div>

            <div className="h-full rounded-[1.75rem] border border-slate-200 shadow-sm">
              <div className="flex h-full flex-col p-7">
                <div className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#b8a184]">Karriere</div>
                <div className="text-3xl font-semibold text-[#13213d]">Quereinsteiger willkommen</div>
                <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">
                  Keine wichtigen Qualifikationen notwendig. Motivation, Ehrgeiz und ein professionelles Auftreten stehen im Vordergrund.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="leistungen" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <SectionTitle
          eyebrow="Leistungen"
          title="Vertrieb mit Struktur, Energie und klarer Ausrichtung"
          text="Wir stehen für starke Kundengewinnung, professionelle Beratung und nachhaltige Ergebnisse im Außendienst."
        />
        <div className="grid auto-rows-fr gap-6 md:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="h-full rounded-[1.75rem] border border-slate-200 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="flex h-full flex-col p-8">
                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#13213d] text-white">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold text-[#13213d]">{service.title}</h3>
                <p className="mt-3 flex-1 leading-7 text-slate-600">{service.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="ueber-uns" className="bg-[#13213d] py-24 text-white">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#d5c3aa]">Über uns</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight">Eine Vertriebsagentur mit Anspruch</h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              ERLEN Vertriebsagentur steht für eine moderne Vertriebsorganisation mit Fokus auf Leistung, Qualität und langfristige Partnerschaften.
              Unser Anspruch ist ein professioneller Auftritt nach außen und ein motivierendes Umfeld nach innen.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {["Erfolg", "Teamgeist", "Ehrlichkeit", "Wachstum", "Leistung", "Verantwortung"].map((value) => (
                <div key={value} className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-base text-white/90">
                  {value}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="grid gap-5">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"
              alt="Beratung im Vertrieb"
              className="h-72 w-full rounded-[2rem] object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80"
              alt="Erfolgreiches Vertriebsteam"
              className="h-72 w-full rounded-[2rem] object-cover"
            />
          </motion.div>
        </div>
      </section>

      <section id="warum-wir" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#b8a184]">Wieso wir?</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#13213d]">Mehr als nur ein Job im Vertrieb</h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
              Wir suchen Menschen mit Ehrgeiz, Energie und dem Willen, im Vertrieb wirklich etwas zu erreichen.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {benefits.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <ChevronRight className="mt-0.5 h-5 w-5 text-[#b8a184]" />
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <div className="mb-6 inline-flex rounded-2xl bg-[#13213d] p-3 text-white">
              <Users className="h-6 w-6" />
            </div>
            <h3 className="text-3xl font-semibold text-[#13213d]">Werde Teil unseres Teams</h3>
            <p className="mt-4 leading-7 text-slate-600">
              Bewirb dich direkt und buche anschließend direkt deinen Termin für ein erstes Gespräch.
            </p>
            <a
  href="#karriere"
  className="mt-8 inline-flex rounded-full bg-[#13213d] px-8 py-4 text-white transition hover:bg-[#1d2f57]"
>
  Zur Bewerbung
</a>
          </motion.div>
        </div>
      </section>

      <section id="karriere" className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-14 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#b8a184]">Bewerbung</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#13213d]">Bewirb dich direkt über die Website</h2>
            <p className="mt-4 text-lg text-slate-600">
              Schnell, unkompliziert und direkt. Nach dem Klick wirst du zur Terminbuchung weitergeleitet.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="rounded-[2rem] bg-[#13213d] text-white shadow-xl">
              <div className="p-8">
                <h3 className="text-2xl font-semibold">Warum sich eine Bewerbung lohnt</h3>
<div className="mt-6 space-y-5 text-slate-200">
  <div>• Kein Einkommenslimit – dein Einsatz bestimmt deinen Verdienst</div>
  <div>• 5.000 € bis 10.000 €+ pro Monat möglich</div>
  <div>• Quereinsteiger willkommen – keine Vorerfahrung notwendig</div>
  <div>• Fokus auf Strom & Gas, Photovoltaik und Glasfaser</div>
  <div>• Schnelle Aufstiegschancen und echte Perspektive</div>
  <div>• Junges Team, moderne Strukturen und starker Zusammenhalt</div>
</div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white shadow-sm">
              <div className="p-8">
                <form action="/api/apply" method="POST" className="grid gap-5 md:grid-cols-2">
                  <input name="firstName" className="h-12 rounded-xl border border-slate-300 px-4" placeholder="Vorname" />
                  <input name="lastName" className="h-12 rounded-xl border border-slate-300 px-4" placeholder="Nachname" />
                  <input name="phone" className="h-12 rounded-xl border border-slate-300 px-4" placeholder="Telefonnummer" />
                  <input name="email" className="h-12 rounded-xl border border-slate-300 px-4" placeholder="E-Mail" />
                  <input name="city" className="h-12 rounded-xl border border-slate-300 px-4" placeholder="Wohnort" />
                  <input name="age" className="h-12 rounded-xl border border-slate-300 px-4" placeholder="Alter" />
                  <input name="experience" className="md:col-span-2 h-12 rounded-xl border border-slate-300 px-4" placeholder="Berufserfahrung" />
                  <div className="md:col-span-2">
                    <label className="mb-2 block text-sm font-medium text-slate-700">Lebenslauf hochladen</label>
                    <input type="file" className="block w-full rounded-xl border border-slate-300 bg-white p-3 text-sm text-slate-600" />
                  </div>
                  <div className="md:col-span-2">
                    <textarea name="message" className="min-h-[140px] w-full rounded-xl border border-slate-300 p-4" placeholder="Nachricht" />
                  </div>
                  <div className="md:col-span-2">
                    <button
  type="submit"
  className="inline-flex h-12 items-center justify-center rounded-xl bg-black px-6 text-white transition hover:bg-neutral-800"
>
  Bewerbung abschicken
</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="kontakt" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-slate-200 bg-white shadow-sm">
            <div className="p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#b8a184]">Kontakt</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#13213d]">Lass uns sprechen</h2>
              <div className="mt-8 space-y-5 text-slate-600">
                <div className="flex items-center gap-3"><Phone className="h-5 w-5 text-[#13213d]" /> <span>+49 151 4420 4593</span></div>
                <div className="flex items-center gap-3"><Mail className="h-5 w-5 text-[#13213d]" /> <span>kontakt@erlen-sales.de</span></div>
                <div className="flex items-center gap-3"><MapPin className="h-5 w-5 text-[#13213d]" /> <span>Aubachstr. 13, 56410 Montabaur</span></div>
              </div>

              <div className="mt-10 rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
                <div className="text-sm font-semibold uppercase tracking-[0.3em] text-[#b8a184]">Termin buchen</div>
                <h3 className="mt-3 text-2xl font-semibold text-[#13213d]">Direkt Gespräch vereinbaren</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Interessenten, Bewerber und Partner können direkt online einen Termin buchen.
                </p>
                <div className="mt-5">
                  <a
  href="#karriere"
  className="mt-8 inline-flex rounded-full bg-[#13213d] px-8 py-4 text-white transition hover:bg-[#1d2f57]"
>
  Zur Bewerbung
</a>
                </div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1400&q=80"
              alt="Professionelles Vertriebsteam"
              className="h-full min-h-[560px] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      <footer className="bg-[#0d162b] text-slate-300">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-8">
          <div>
            <div className="inline-flex flex-col items-start">
              <span className="text-4xl font-light tracking-[0.32em] text-white md:text-5xl">ERLEN</span>
              <span className="mt-1 text-[11px] uppercase tracking-[0.42em] text-[#d8c0a0] md:text-xs">Vertriebsagentur</span>
            </div>
            <p className="mt-5 max-w-md leading-7 text-slate-400">
              Professioneller Vertrieb mit modernem Anspruch. Seriös, leistungsorientiert und bereit für nachhaltiges Wachstum.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Navigation</h3>
            <div className="mt-4 space-y-3 text-sm">
              <a href="#leistungen" className="block hover:text-white">Leistungen</a>
              <a href="#ueber-uns" className="block hover:text-white">Über uns</a>
              <a href="#karriere" className="block hover:text-white">Karriere</a>
              <a href="#kontakt" className="block hover:text-white">Kontakt</a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Rechtliches</h3>
            <div className="mt-4 space-y-3 text-sm">
              <a href="#" className="block hover:text-white">Impressum</a>
              <a href="#" className="block hover:text-white">Datenschutz</a>
              <a href="#" className="block hover:text-white">AGB</a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 px-6 py-5 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} ERLEN Vertriebsagentur. Alle Rechte vorbehalten.
        </div>
      </footer>
    </div>
  );
}