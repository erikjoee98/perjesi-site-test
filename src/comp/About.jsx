import perjesi2 from "/Users/erikjoee/perjesi-dora-ugyved/src/assets/perjesi2.jpg"

export default function About() {
  return (
    <section
      className="py-20 md:py-32 bg-pattern"
      id="rolam"
      role="region"
      aria-label="Bemutatkozás szekció"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          {/* Kép */}
          <div className="md:w-2/5 reveal-left">
            <div className="relative w-full h-[600px] md:h-[720px] overflow-hidden">
              <img
                src={perjesi2}
                alt="Dr. Perjési Dóra ügyvéd portréja"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Szöveg */}
          <div
            className="md:w-3/5 mt-16 md:mt-0 reveal-right"
            style={{ animationDelay: "0.3s" }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              Bemutatkozás – Dr. Perjési Dóra
            </h2>
            <div className="divider"></div>
            <p className="text-gray-600 mb-8 leading-snug">
             Dr. Perjési Dóra Gréta vagyok, a Szegedi Ügyvédi Kamara egyéni ügyvéd tagja. Jogi tanulmányaimat a Szegedi Tudományegyetem Állam-és Jogtudományi Karán végeztem, ahol 2021-ben cum laude minősítéssel szereztem diplomát. Ügyvédjelöltként mind a büntetőjog, mind a polgári jog területén jelentős tapasztalatra tettem szert, majd 2025 őszén jeles eredménnyel szakvizsgáztam.
            </p>
            <p className="text-gray-600 mb-8 leading-snug">
            Egyéni ügyvédként fő szakterületeim a családjog, büntetőjog, munkajog, valamint szerződések készítése, és cégeljárással kapcsolatos jogi képviselet. Ügyfeleim képviselete során kiemelt figyelmet fordítok a személyre szabott megközelítésre, és a megfelelő stratégia kialakítására. Hiszem, hogy minden sikeres, hatékony együttműködés alapja a bizalom, az egyenes kommunikáció és a szakmai felkészültség.
            </p>
            <p className="text-gray-600 mb-8 leading-snug">
            Kiemelten fontosnak tartom a folyamatos fejlődést, ennek jegyében 2022-ben munkajogi tudásomat tovább mélyítve HR szakjogász végzettséget szereztem jeles minősítéssel.            </p>
           
              <p className="text-gray-600 mb-8 leading-snug">
                Munkám során mindig arra törekszem, hogy a vonatkozó jogszabályok keretein belül megtaláljam a hozzám fordulók számára legkedvezőbb és legésszerűbb megoldást, ezért minden megbízás egy személyes jogi tanácsadással kezdődik. Ennek keretében tudom személyre szabottan felvázolni a lehetőségeket ügyfeleim részére.
                </p> 
                 <p className="text-gray-600 mb-8 leading-snug">
                  Ha elhivatott, megbízható jogi képviseletet keres, örömmel állok rendelkezésére a lentebb megjelölt elérhetőségeimen.  
                </p> 
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
              {[
                { value: "100%", label: "Elhivatottság" },
                { value: "0%", label: "Mellébeszélés"},
                { value: "1 cél", label: "Az Ön érdekeinek védelme" },
              ].map(({ value, label }, i) => (
                <div
                  key={i}
                  className="ext-center flex flex-col items-center bg-white p-6 shadow-md"
                  aria-label={`${label}: ${value}`}
                >
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
