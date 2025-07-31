import { customScrollTo } from "../utils/customtoscroll";

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
              Személyre szabott jogi megoldások, amelyek valódi eredményeket
              hoznak. Több mint 10 éves tapasztalattal állok ügyfeleim
              rendelkezésére Szegeden és országosan is.
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
            <div className="relative w-full h-[500px] bg-gray-100 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Modern ügyvédi iroda belső tér"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
