export default function Quote() {
  return (
    <section className="py-20 bg-[#2B2B2B] text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center reveal-bottom">
          <div className="relative">
            <span className="text-6xl absolute left-0 -top-2 text-white opacity-30 select-none">"</span>
            <p className="text-2xl md:text-3xl font-serif italic mb-8 pt-6">
              Az igazságszolgáltatás nem csupán a törvények betűjének követése,
              hanem az emberség és méltányosság elvének érvényesítése minden
              körülmények között.
            </p>
            <span className="text-6xl absolute right-0 -bottom-14 text-white opacity-30 select-none">"</span>
          </div>
          <div className="divider-center mx-auto my-6 w-20 h-[2px] bg-[#9A8A78]"></div>
          <p className="text-lg font-medium">Dr. Perjési Dóra</p>
          <p className="text-[#9A8A78] font-bold tracking-wide text-lg uppercase">Ügyvéd</p>
        </div>
      </div>
    </section>
  );
}
