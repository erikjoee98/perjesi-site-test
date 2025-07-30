export default function Contact() {
  return (
    <section className="py-20 md:py-32 bg-white" id="kapcsolat">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#2B2B2B] mb-4">
            Kapcsolat
          </h2>
          <div className="divider-center"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Keressen bizalommal jogi kérdéseivel. Időpontegyeztetéshez használja az alábbi elérhetőségeket vagy töltse ki a kapcsolatfelvételi űrlapot.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Bal oszlop: elérhetőségek */}
          <div className="lg:w-1/2 reveal-left" style={{ animationDelay: "0.1s" }}>
            <div className="bg-white p-10 shadow-md h-full border border-gray-200 rounded-lg">
              <h3 className="text-2xl font-serif font-bold text-[#2B2B2B] mb-8">
                Elérhetőségek
              </h3>
              <div className="space-y-10">
                {/* Cím */}
                <div className="flex items-start">
                  <div className="bg-[#9A8A78] bg-opacity-10 rounded-full p-4 mr-6">
                    <svg className="w-8 h-8 text-[#9A8A78]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#2B2B2B] text-xl mb-2">Iroda címe</h4>
                    <div className="text-gray-600 text-lg">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2734.1369826800097!2d20.14577621567816!3d46.25766417911751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47448735e8f2623d%3A0x77768131a4ddc521!2sSzeged%2C%20M%C3%A9rey%20u.%206%2C%206721!5e0!3m2!1shu!2hu!4v1722329080000!5m2!1shu!2hu"
                        width="100%"
                        height="200"
                        loading="lazy"
                        style={{ border: 0 }}
                        allowFullScreen
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                  </div>
                </div>

                {/* Telefon */}
                <div className="flex items-start">
                  <div className="bg-[#9A8A78] bg-opacity-10 rounded-full p-4 mr-6">
                    <svg className="w-8 h-8 text-[#9A8A78]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#2B2B2B] text-xl mb-2">Telefon</h4>
                    <p className="text-gray-600 text-lg">+36 30 123 4567</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start">
                  <div className="bg-[#9A8A78] bg-opacity-10 rounded-full p-4 mr-6">
                    <svg className="w-8 h-8 text-[#9A8A78]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#2B2B2B] text-xl mb-2">E-mail</h4>
                    <p className="text-gray-600 text-lg">info@perjesi-legal.hu</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Jobb oszlop: űrlap */}
          <div className="lg:w-1/2 reveal-right" style={{ animationDelay: "0.3s" }}>
            <div className="bg-white p-10 shadow-md h-full border border-gray-200 rounded-lg">
              <h3 className="text-2xl font-serif font-bold text-[#2B2B2B] mb-8">
                Kapcsolatfelvétel
              </h3>
              <form
                className="space-y-6"
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Köszönjük megkeresését! Hamarosan felvesszük Önnel a kapcsolatot.");
                }}
              >
                <div>
                  <label className="block text-gray-600 mb-2" htmlFor="name">Név</label>
                  <input className="w-full border border-gray-300 py-3 px-4 text-gray-800 focus:outline-none focus:border-[#9A8A78] transition-colors" id="name" type="text" required />
                </div>
                <div>
                  <label className="block text-gray-600 mb-2" htmlFor="email">E-mail</label>
                  <input className="w-full border border-gray-300 py-3 px-4 text-gray-800 focus:outline-none focus:border-[#9A8A78] transition-colors" id="email" type="email" required />
                </div>
                <div>
                  <label className="block text-gray-600 mb-2" htmlFor="phone">Telefon</label>
                  <input className="w-full border border-gray-300 py-3 px-4 text-gray-800 focus:outline-none focus:border-[#9A8A78] transition-colors" id="phone" type="tel" />
                </div>
                <div>
                  <label className="block text-gray-600 mb-2" htmlFor="message">Üzenet</label>
                  <textarea className="w-full border border-gray-300 py-3 px-4 text-gray-800 focus:outline-none focus:border-[#9A8A78] transition-colors" id="message" rows="5" required></textarea>
                </div>
                <div className="flex items-center">
                  <input className="mr-2" id="consent" type="checkbox" required />
                  <label className="text-gray-600 text-sm" htmlFor="consent">Elfogadom az adatkezelési tájékoztatót</label>
                </div>
                <div>
                  <button className="w-full bg-[#9A8A78] text-white py-3 font-medium transition hover:opacity-90" type="submit">
                    Küldés
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
