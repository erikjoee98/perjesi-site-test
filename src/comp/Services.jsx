
import { Gavel } from "lucide-react";
import { Briefcase } from "lucide-react";
import { Building2 } from "lucide-react";
import { Scroll } from "lucide-react";
import { Users } from "lucide-react";
import { FileText } from "lucide-react";


const services = [
  {
    title: "Büntetőjog",
    icon: <Gavel/>,
    desc: "Szakszerű és lelkiismeretes védelmet biztosítok büntetőügyekben a nyomozati szaktól a bírósági eljárásig, továbbá vállalom sértetti jogi képviselet ellátását is.",
    points: ["Nyomozati képviselet", "Bíróság védelem", "Sértetti jogi képviselet"],
  },
  {
    title: "Családjog",
    icon: <Users />,
    desc: "Diszkrét és empatikus jogi segítséget nyújtok házassági vagyonjogi, bontó, valamint szülői felügyeleti, tartásdíj- és kapcsolattartási ügyekben peren kívül és peres eljárásban egyaránt.",
    points: ["Házassági vagyonjog", "Gyermekelhelyezés", "Tartásdíj ügyek"],
  },
  {
    title: "Szerződési jog",
  icon: <FileText />,
    
    desc: "Szerződések készítése, módosítása és véleményezése magánszemélyek és cégek számára. Célom, hogy minden megállapodás világos, biztonságos és jogilag megalapozott legyen.",
    points: ["Szerződések készítése", "Szerződésmódosítása", "Szerződés véleményezés"],
  },
  {
    title: "Gazdasági jog",
      icon: <Building2 />,
    desc: "Komplex jogi támogatást nyújtok vállalkozásoknak és civil szervezeteknek a megalapítástól a mindennapi működés során felmerülő kérdésekig. Stabil és átlátható jogi hátteret biztosítok ügyfeleimnek.",
    points: ["Cégalapítás", "Társasági jogi tanácsadás", "Cégjogi változások"],
  },
  {
    title: "Munkajog",
    icon: <Briefcase/>,
    desc: "Munkajogi tanácsadás munkavállalóknak és munkáltatóknak egyaránt. Segítek munkaszerződések előkészítésében, módosításában, valamint munkaügyi viták peren kívüli és peres úton történő rendezésében.",
    points: ["Munkaszerződásek előkészítése", "Szerződésmódosítás", "Munkaügyi viták kezelése"],
  },
  {
    title: "Öröklési jog",
      icon: <Scroll />,
    desc: "Segítek a jövőre tudatosan felkészülni végrendeletek, és egyéb végintézkedések szerkesztésével, továbbá hagyatéki eljárás során felmerülő öröklési viták jogi rendezésével.",
    points: ["Végrendeletek és végintézkedések", "Hagyatéki eljárás", "Öröklési viták kezelése"],
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
            Teljeskörű jogi tanácsadás, büntetőjogi képviselet, peres és peren kívüli képviselet, valamint követeléskezelés magánszemélyek és vállalkozások számára. Munkámat személyre szabott figyelem, empátia és precíz szakmai alaposság jellemzi.
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
