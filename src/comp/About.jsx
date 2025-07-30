export default function About() {
  return (
    <section className="py-20 md:py-32 bg-pattern" id="rolam">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          {/* Kép */}
          <div className="md:w-2/5 reveal-left">
            <div className="relative w-full h-[600px] bg-gray-100 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&w=1000&q=80"
                alt="Dr. Perjési Dóra"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Szöveg */}
          <div className="md:w-3/5 mt-16 md:mt-0 reveal-right" style={{ animationDelay: "0.3s" }}>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              Dr. Perjési <span className="text-yellow-900">Dóra</span>
            </h2>
            <div className="divider"></div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Üdvözlöm! Dr. Perjési Dóra vagyok, több mint 10 éves szakmai tapasztalattal rendelkező ügyvéd. Jogi pályafutásomat a Szegedi Tudományegyetem Állam és Jogtudományi Karán kezdtem, ahol 2021-ben szereztem diplomát summa cum laude minősítéssel.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Ügyvédi praxisom során mindig arra törekszem, hogy ügyfeleim számára a legmagasabb színvonalú jogi szolgáltatást nyújtsam. Szakterületeim közé tartozik az ingatlan- és szerződési jog, családjog, valamint a gazdasági jog.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Hiszek abban, hogy a jogi problémák megoldása nemcsak szakértelmet, hanem empátiát és odafigyelést is igényel. Célom, hogy ügyfeleim mindig biztonságban érezzék magukat.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
              {[
                { value: "10+", label: "Év tapasztalat" },
                { value: "500+", label: "Sikeres ügy" },
                { value: "100%", label: "Elkötelezettség" },
              ].map(({ value, label }, i) => (
                <div key={i} className="bg-white p-6 shadow-md">
                  <div className="text-4xl font-serif font-bold text-yellow-900 mb-2">
                    {value}
                  </div>
                  <div className="text-gray-600 font-medium">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
