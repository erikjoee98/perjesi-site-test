import { customScrollTo } from "../utils/customtoscroll";
import perjesidora1 from "/Users/erikjoee/perjesi-dora-ugyved/src/assets/perjesi1.jpg"

export default function Hero() {
  return (
    <section
      className="pt-32 pb-20 md:pt-40 md:pb-32 bg-white"
      id="hero"
      role="region"
      aria-label="Bevezető szekció"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          {/* Bal oldal: szöveg */}
          <div className="md:w-1/2 mb-10 md:mb-0 reveal-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 leading-tight mb-6">
              Dr. Perjési Dóra ügyvéd –
              <br className="hidden sm:block" />
              <span className="text-yellow-900">Szakértő jogi képviselet</span> minden helyzetben
            </h1>

            <div className="divider"></div>

            <p className="text-lg text-gray-600 mb-10 max-w-lg">
              Személyre szabott jogi megoldások, valódi eredményekkel. Ügyfeleim számára a jogi kérdésekben nemcsak szakmai tudást, hanem egyedi figyelmet és megértést kínálok – Szegeden és országszerte, ugyanis hiszem, hogy a hatékony jogi képviselet alapja a bizalom és az együttműködés.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#kapcsolat"
                onClick={(e) => {
                  e.preventDefault();
                  customScrollTo("kapcsolat", 1000);
                }}
                className="btn-primary bg-yellow-900 text-white py-3 px-8 font-medium inline-block text-center"
              >
                Időpontfoglalás
              </a>

              <a
                href="#szolgaltatasok"
                onClick={(e) => {
                  e.preventDefault();
                  customScrollTo("szolgaltatasok", 800);
                }}
                className="btn-outline border border-yellow-900 text-yellow-900 py-3 px-8 font-medium inline-block text-center"
              >
                Szolgáltatások
              </a>
            </div>
          </div>

          {/* Jobb oldal: kép */}
          <div
            className="md:w-1/2 flex justify-center reveal-right"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="relative w-full h-[600px] md:h-[680px]  bg-gray-100 overflow-hidden">
              <img
                src={perjesidora1}
                alt="Modern ügyvédi iroda belső tér"
                className="w-full
                            h-full
                            object-cover
                            object-[50%_37%]
                            scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
