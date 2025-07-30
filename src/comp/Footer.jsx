export default function Footer() {
  return (
    <footer className="bg-[#2B2B2B] text-white py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Bal oldal: szöveg */}
          <div className="mb-10 md:mb-0 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start mb-6">
              <div className="text-2xl font-serif font-bold">Dr. Perjési Dóra</div>
            </div>
            <p className="text-gray-400 max-w-md">
              Szakértelem és elkötelezettség a jogi ügyeiben. Keressen bizalommal!
            </p>
          </div>

          {/* Jobb oldal: ikonok + jogi sor */}
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-6 mb-6">
              {/* Facebook */}
              <a className="transition-all hover:text-[#9A8A78] text-white" href="#" aria-label="Facebook">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a className="transition-all hover:text-[#9A8A78] text-white" href="#" aria-label="LinkedIn">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.27 20.1H3.65V9.24h3.62V20.1zM5.47 7.76h-.03c-1.22 0-2-.83-2-1.87 0-1.06.8-1.87 2.05-1.87 1.24 0 2 .8 2.02 1.87 0 1.04-.78 1.87-2.05 1.87zM20.34 20.1h-3.63v-5.8c0-1.45-.52-2.45-1.83-2.45-1 0-1.6.67-1.87 1.32-.1.23-.11.55-.11.88v6.05H9.28s.05-9.82 0-10.84h3.63v1.54a3.6 3.6 0 0 1 3.26-1.8c2.39 0 4.18 1.56 4.18 4.89v6.21z" />
                </svg>
              </a>

              {/* Twitter/X */}
              <a className="transition-all hover:text-[#9A8A78] text-white" href="#" aria-label="Twitter">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
            <p className="text-gray-400 text-sm text-center md:text-right">
              © 2025 Dr. Perjési Dóra Ügyvédi Iroda. Minden jog fenntartva.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
