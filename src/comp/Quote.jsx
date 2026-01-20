import { useEffect, useRef, useState } from "react";

export default function Quote() {
  const quote =
    "Az igazságszolgáltatás nem csupán a törvények betűjének követése, hanem az emberség és méltányosság elvének érvényesítése minden körülmények között.";

  const quoteRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (quoteRef.current) observer.observe(quoteRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 bg-[#2B2B2B] text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="relative" ref={quoteRef}>

            {/* Nyitó idézőjel */}
            <span
              className="absolute text-white opacity-30 select-none"
              style={{ fontSize: "4rem", top: "-2rem", left: "-0.7rem" }}
            >
              "
            </span>

            {/* Záró idézőjel */}
            <span
              className="absolute text-white opacity-30 select-none"
              style={{ fontSize: "4rem", bottom: "2.5rem", right: "-1rem" }}
            >
              "
            </span>

            {/* Idézet szó szintű animációval, karakterenként belül inline */}
            <p
              className="text-2xl md:text-3xl font-serif italic mb-8 pt-6 leading-relaxed text-center"
              style={{ wordBreak: "keep-all", whiteSpace: "normal" }}
            >
              {quote.split(" ").map((word, i) => (
                <span
                  key={i}
                  className="inline-block"
                  style={{ whiteSpace: "nowrap" }} // a szó összetart
                >
                  {word.split("").map((char, j) => (
                    <span
                      key={j}
                      className={`opacity-0 ${isVisible ? "animate-fadeInUp" : ""}`}
                      style={{ animationDelay: `${(i * 5 + j) * 0.025}s`, display: "inline" }}
                    >
                      {char}
                    </span>
                  ))}
                  &nbsp;{/* szóköz */}
                </span>
              ))}
            </p>

            {/* Divider */}
            <div className="divider-center mx-auto my-6 w-20 h-[2px] bg-[#9A8A78]"></div>

            {/* Szerző */}
            <p className="text-lg font-medium">Dr. Perjési Dóra</p>
            <p className="text-[#9A8A78] font-bold tracking-wide text-lg uppercase">
              Ügyvéd
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}