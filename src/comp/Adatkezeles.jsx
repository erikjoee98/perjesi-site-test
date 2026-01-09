export default function Adatkezelesi() {
  return (
    <section className="py-20 md:py-32 bg-white px-6">
      <div className="max-w-4xl mx-auto text-gray-800">
        <h1 className="text-4xl font-bold font-serif text-[#2B2B2B] mb-8">Adatkezelési tájékoztató</h1>
        <p className="mb-4 text-sm text-gray-500">Hatályos: 2025. augusztus 1.</p>

        <h2 className="text-2xl font-bold mt-8 mb-4">1. Adatkezelő adatai</h2>
        <p>Dr. Perjési Dóra<br />
        Székhely: 6721 Szeged, Mérey utca 6.<br />
        E-mail: <a href="mailto:info@perjesi-legal.hu" className="text-[#9A8A78] underline">info@perjesi-legal.hu</a><br />
        Telefon: <a href="tel:+36301234567" className="text-[#9A8A78] underline">+36 30 123 4567</a></p>

        <h2 className="text-2xl font-bold mt-8 mb-4">2. Kezelt adatok köre</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Név</li>
          <li>E-mail cím</li>
          <li>Telefonszám</li>
          <li>Üzenet tartalma</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">3. Az adatkezelés célja</h2>
        <p>Kapcsolatfelvétel, jogi tanácsadás nyújtása, ügyvédi megbízás előkészítése.</p>

        <h2 className="text-2xl font-bold mt-8 mb-4">4. Az adatkezelés jogalapja</h2>
        <p>Az érintett hozzájárulása (GDPR 6. cikk (1) a)). Megrendelés vagy megbízás esetén jogi kötelezettség és szerződés teljesítése.</p>

        <h2 className="text-2xl font-bold mt-8 mb-4">5. Az adatok megőrzési ideje</h2>
        <p>Kapcsolatfelvételi adatok: legfeljebb 90 nap. Ügyfélként történő megbízás esetén: jogszabályi előírás szerint.</p>

        <h2 className="text-2xl font-bold mt-8 mb-4">6. Adatok továbbítása</h2>
        <p>Harmadik fél részére nem történik adattovábbítás, kivéve jogszabályi kötelezettség vagy technikai adatfeldolgozó (pl. e-mail szolgáltató).</p>

        <h2 className="text-2xl font-bold mt-8 mb-4">7. Érintetti jogok</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Tájékoztatás kérése</li>
          <li>Hozzáférés saját adatokhoz</li>
          <li>Helyesbítés, törlés, adatkezelés korlátozása</li>
          <li>Tiltakozás az adatkezelés ellen</li>
          <li>Panasz benyújtása a <strong>Nemzeti Adatvédelmi és Információszabadság Hatósághoz (NAIH)</strong></li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">8. Cookie-k</h2>
        <p>A weboldal kizárólag technikai (funkcionális) célú cookie-kat használ. Marketing vagy harmadik fél cookie-k nem kerülnek elhelyezésre.</p>
      </div>
    </section>
  );
}
