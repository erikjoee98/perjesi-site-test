import { useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(false);
    setError(false);
    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          setSuccess(true);
          e.target.reset();
        },
        () => {
          setLoading(false);
          setError(true);
        }
      );
  };

  return (
    <section className="py-20 md:py-32 bg-white" id="kapcsolat">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#2B2B2B] mb-4">
            Kapcsolatfelvétel ügyvédi irodánkkal
          </h2>
          <div className="divider-center"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Vegye fel velünk a kapcsolatot jogi tanácsadás vagy időpontegyeztetés céljából.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* --- ELÉRHETŐSÉG + MAP --- */}
          <div className="lg:w-1/2 reveal-left" style={{ animationDelay: "0.1s" }}>
            <div className="bg-white p-10 shadow-md h-full border border-gray-200 rounded-lg space-y-8">
              <div>
                <h3 className="text-2xl font-serif font-bold text-[#2B2B2B] mb-4">Elérhetőségek</h3>
                <p className="text-gray-700 text-lg mb-2"><strong>Cím:</strong> Szeged, Mérey u. 6.</p>
                <p className="text-gray-700 text-lg mb-2">
                  <strong>Telefon:</strong>{" "}
                  <a href="tel:+36301234567" className="text-[#9A8A78] hover:underline">+36 30 123 4567</a>
                </p>
                <p className="text-gray-700 text-lg">
                  <strong>E-mail:</strong>{" "}
                  <a href="mailto:info@perjesi-legal.hu" className="text-[#9A8A78] hover:underline">info@perjesi-legal.hu</a>
                </p>
              </div>

              <div>
                <iframe
                  title="Dr. Perjési Dóra ügyvédi iroda térkép"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2734.1369826800097!2d20.14577621567816!3d46.25766417911751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47448735e8f2623d%3A0x77768131a4ddc521!2sSzeged%2C%20M%C3%A9rey%20u.%206%2C%206721!5e0!3m2!1shu!2hu!4v1722329080000!5m2!1shu!2hu"
                  width="100%"
                  height="250"
                  loading="lazy"
                  style={{ border: 0 }}
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded"
                ></iframe>
              </div>
            </div>
          </div>

          {/* --- ŰRLAP --- */}
          <div className="lg:w-1/2 reveal-right" style={{ animationDelay: "0.3s" }}>
            <div className="bg-white p-10 shadow-md border border-gray-200 rounded-lg">
              <h3 className="text-2xl font-serif font-bold text-[#2B2B2B] mb-6">Kapcsolatfelvételi űrlap</h3>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-gray-600 mb-2">
                    Név <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full border border-gray-300 py-3 px-4 text-gray-800 rounded focus:outline-none focus:border-[#9A8A78] transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-600 mb-2">
                    E-mail <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full border border-gray-300 py-3 px-4 text-gray-800 rounded focus:outline-none focus:border-[#9A8A78] transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-gray-600 mb-2">
                    Telefon <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    className="w-full border border-gray-300 py-3 px-4 text-gray-800 rounded focus:outline-none focus:border-[#9A8A78] transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-600 mb-2">
                    Üzenet <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    required
                    className="w-full border border-gray-300 py-3 px-4 text-gray-800 rounded focus:outline-none focus:border-[#9A8A78] transition-colors"
                  ></textarea>
                </div>
                <div className="flex items-start">
                  <input
                    id="consent"
                    name="consent"
                    type="checkbox"
                    required
                    className="mt-1 mr-2"
                  />
                  <label htmlFor="consent" className="text-gray-600 text-sm">
                    Elfogadom az{" "}
                    <a href="/adatkezelesi-tajekoztato" className="underline">
                      adatkezelési tájékoztatót
                    </a>
                  </label>
                </div>

                {success && (
                  <p className="text-green-600 font-medium">Az üzenet sikeresen elküldve!</p>
                )}
                {error && (
                  <p className="text-red-600 font-medium">Hiba történt. Kérjük, próbálja újra később.</p>
                )}

                <div>
                  <button
                    type="submit"
                    className="w-full bg-[#9A8A78] text-white py-3 font-medium rounded hover:opacity-90 transition flex items-center justify-center"
                    disabled={loading}
                  >
                    {loading ? (
                      <span className="flex items-center space-x-2">
                        <svg
                          className="animate-spin h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 000 16z"
                          ></path>
                        </svg>
                        <span>Küldés...</span>
                      </span>
                    ) : (
                      "Üzenet elküldése"
                    )}
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
