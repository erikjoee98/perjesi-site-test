const services = [
  {
    title: "Ingatlanügyek",
    icon: (
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />,
      <polyline points="9 22 9 12 15 12 15 22" />
    ),
    desc: "Ingatlan adásvételi szerződések készítése, földhivatali eljárások, tulajdonjogi kérdések szakértői kezelése.",
    points: ["Adásvételi szerződések", "Földhivatali eljárások", "Tulajdonjogi kérdések"],
  },
  {
    title: "Családjog",
    icon: (
      <>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </>
    ),
    desc: "Házassági vagyonjog, gyermekelhelyezés, tartásdíj és kapcsolattartási ügyek szakszerű kezelése.",
    points: ["Házassági vagyonjog", "Gyermekelhelyezés", "Tartásdíj ügyek"],
  },
  {
    title: "Szerződési jog",
    icon: (
      <>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" x2="8" y1="13" y2="13" />
        <line x1="16" x2="8" y1="17" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </>
    ),
    desc: "Szerződések készítése, felülvizsgálata és módosítása, jogi tanácsadás szerződéses kérdésekben.",
    points: ["Szerződések készítése", "Szerződések felülvizsgálata", "Jogi tanácsadás"],
  },
  {
    title: "Gazdasági jog",
    icon: (
      <>
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </>
    ),
    desc: "Cégalapítás, társasági jogi tanácsadás, cégjogi változások bejelentése, vállalkozások jogi támogatása.",
    points: ["Cégalapítás", "Társasági jogi tanácsadás", "Cégjogi változások"],
  },
  {
    title: "Öröklési jog",
    icon: (
      <>
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 0 1-8 0" />
      </>
    ),
    desc: "Végrendeletek készítése, hagyatéki eljárások, öröklési viták rendezése, vagyontervezés.",
    points: ["Végrendeletek készítése", "Hagyatéki eljárások", "Öröklési viták rendezése"],
  },
  {
    title: "Peres képviselet",
    icon: (
      <>
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </>
    ),
    desc: "Bírósági képviselet polgári, gazdasági és családjogi perekben, peren kívüli egyezségek előkészítése.",
    points: ["Bírósági képviselet", "Peren kívüli egyezségek", "Jogi képviselet"],
  },
];

export default function Services() {
  return (
    <section
      className="py-20 md:py-32 bg-white"
      id="szolgaltatasok"
      role="region"
      aria-label="Ügyvédi szakterületek"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 reveal-bottom">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
            Jogi szakterületeim
          </h2>
          <div className="divider-center"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ügyvédi irodám széleskörű jogi tanácsadást nyújt magánszemélyek és vállalkozások számára.
            Célom, hogy minden jogi ügyet személyre szabott, empatikus megközelítéssel és precizitással kezeljek.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <article
              key={idx}
              className="service-card bg-white p-8 shadow-md border border-gray-200 reveal"
              style={{ animationDelay: `${0.1 * (idx + 1)}s` }}
              role="article"
              aria-labelledby={`service-title-${idx}`}
            >
              <div
                className="service-icon text-gray-900 mb-6"
                title={`${service.title} ikon`}
              >
                <svg
                  className="w-12 h-12"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  {service.icon}
                </svg>
              </div>
              <h3
                className="text-xl font-serif font-bold text-gray-900 mb-4"
                id={`service-title-${idx}`}
              >
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6">{service.desc}</p>
              <ul className="text-gray-600 space-y-3 mb-8 list-none pl-0">
                {service.points.map((point, i) => (
                  <li key={i} className="flex items-center">
                    <svg
                      className="w-5 h-5 text-yellow-900 mr-3"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
