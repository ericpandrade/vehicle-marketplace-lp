import Image from "next/image";
import { Gallery } from "./components/Gallery";

const WA_LINK =
  "https://wa.me/5585986561786?text=Ol%C3%A1%2C%20Ratinho!%20Vi%20o%20seu%20site%20e%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20as%20motos%20do%20estoque.";

const SPECS = [
  { label: "Ano", value: "2014" },
  { label: "Km", value: "96.429 km" },
  { label: "Freio", value: "A Disco" },
  { label: "Partida", value: "Elétrica" },
  { label: "Motor", value: "Revisado" },
  { label: "Vazamentos", value: "Nenhum" },
];

const DIFERENCIAIS = [
  {
    icon: "🛡️",
    title: "Confiança",
    text: "Motos com segurança garantida e documentação pronta para transferência.",
  },
  {
    icon: "⚙️",
    title: "Qualidade",
    text: "Moto revisada antes de ir para a sua garagem, com atenção aos principais pontos mecânicos.",
  },
  {
    icon: "⚡",
    title: "Agilidade",
    text: "Negociação rápida, sem burocracia e com atendimento direto pelo WhatsApp.",
  },
];

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/96 backdrop-blur-sm border-b-2 border-[#cc0000]">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 min-w-0">
            <div className="relative w-10 h-10 flex-shrink-0">
              <Image
                src="/logo.png"
                alt="Ratinho das Motos"
                fill
                sizes="40px"
                className="object-contain"
                priority
              />
            </div>
            <span className="font-black text-sm tracking-widest uppercase text-white hidden sm:block truncate">
              Ratinho das Motos
            </span>
          </div>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 flex items-center gap-2 bg-[#cc0000] hover:bg-[#e81020] text-white font-bold text-sm px-4 py-2 rounded-full transition-all duration-200 hover:scale-105 active:scale-95"
          >
            <span>📲</span>
            <span>Fale Conosco</span>
          </a>
        </div>
      </header>

      <main className="pt-16">
        {/* HERO */}
        <section className="relative px-4 pt-10 pb-14 sm:pt-14 sm:pb-20 md:pt-20 md:pb-28 overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(204,0,0,0.18) 0%, transparent 70%)",
            }}
          />
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-tight tracking-tight mb-5">
              A MOTO DOS SEUS <span className="text-[#cc0000]">SONHOS</span>
              <br className="hidden sm:block" /> COM A{" "}
              <span className="text-[#cc0000]">SEGURANÇA</span>
              <br />
              QUE VOCÊ EXIGE!
            </h1>

            <p className="text-[#b8b8b8] text-sm sm:text-base md:text-lg leading-relaxed mb-8 max-w-xl mx-auto">
              No Ratinho das Motos você encontra motocicletas revisadas, com
              garantia e prontas para rodar. Compre, venda ou troque com
              atendimento rápido pelo WhatsApp.
            </p>

            <div className="relative w-full max-w-2xl mx-auto rounded-2xl overflow-hidden border-2 border-[#cc0000] shadow-[0_0_50px_rgba(204,0,0,0.2)] mb-8">
              <Image
                src="/banner.png"
                alt="Ratinho das Motos — Confiança, Qualidade, Atitude"
                width={1280}
                height={480}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 896px"
                className="w-full h-auto object-cover"
                priority
              />
            </div>

            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full sm:w-auto sm:inline-flex items-center justify-center gap-2 bg-[#cc0000] hover:bg-[#e81020] text-white font-black text-base sm:text-lg px-6 sm:px-8 py-4 rounded-full transition-all duration-200 hover:scale-105 active:scale-95 pulse-red uppercase tracking-wide shadow-lg"
            >
              QUERO NEGOCIAR UMA MOTO AGORA 📲
            </a>
          </div>
        </section>

        {/* DESTAQUE DA SEMANA */}
        <section className="px-4 py-12 md:py-20 bg-[#080808]">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <span className="inline-block text-[#cc0000] font-bold text-xs sm:text-sm uppercase tracking-widest mb-3">
                🏁 Destaque da Semana
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase text-white">
                Honda CG 150 Titan ESD Flex 2014
              </h2>
              <div className="mt-3 h-1 w-20 bg-[#cc0000] mx-auto rounded" />
            </div>

            <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-start">
              <Gallery />

              <div className="mt-2">
                <h3 className="text-sm font-bold text-[#cc0000] uppercase tracking-widest mb-4">
                  Ficha Técnica
                </h3>
                <dl className="mb-6 divide-y divide-white/10">
                  {SPECS.map(({ label, value }) => (
                    <div
                      key={label}
                      className="flex items-center justify-between py-3"
                    >
                      <dt className="text-[#b8b8b8] text-sm uppercase tracking-wider">
                        {label}
                      </dt>
                      <dd className="font-bold text-white text-sm ml-4 text-right">
                        {value}
                      </dd>
                    </div>
                  ))}
                </dl>

                <div className="bg-[#111] border border-[#cc0000]/40 rounded-xl p-4 mb-5 text-center">
                  <p className="text-[#b8b8b8] text-xs uppercase tracking-widest mb-1">
                    Valor
                  </p>
                  <p className="text-base sm:text-lg font-black text-[#cc0000] glow-red">
                    Consulte o Valor no WhatsApp
                  </p>
                </div>

                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-[#cc0000] hover:bg-[#e81020] text-white font-black text-sm sm:text-base py-4 rounded-full transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg uppercase tracking-wide"
                >
                  Tenho Interesse na Titan 2014 🚀
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* NEGOCIAÇÃO */}
        <section className="px-4 py-12 md:py-20 relative overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 70% 60% at 100% 100%, rgba(204,0,0,0.12) 0%, transparent 70%)",
            }}
          />
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase text-white mb-5 leading-tight">
              Quer comprar, vender ou{" "}
              <span className="text-[#cc0000]">trocar</span> sua moto?
            </h2>
            <p className="text-[#b8b8b8] text-sm sm:text-base md:text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              Fale direto com o Ratinho das Motos pelo WhatsApp. Avaliamos sua
              moto, negociamos troca, consultamos possibilidades de
              financiamento e informamos as oportunidades disponíveis no
              momento.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 justify-center">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#cc0000] hover:bg-[#e81020] text-white font-black px-5 py-4 rounded-full transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg text-sm uppercase tracking-wide"
              >
                📲 Quero vender ou trocar minha moto
              </a>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-transparent border-2 border-[#cc0000] text-white hover:bg-[#cc0000]/20 font-bold px-5 py-4 rounded-full transition-all duration-200 text-sm uppercase tracking-wide"
              >
                🔍 Consultar oportunidades disponíveis
              </a>
            </div>
          </div>
        </section>

        {/* DIFERENCIAIS */}
        <section className="px-4 py-12 md:py-20 bg-[#080808]">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase text-white leading-tight">
                Por que comprar com o{" "}
                <span className="text-[#cc0000]">Ratinho das Motos</span>?
              </h2>
              <div className="mt-3 h-1 w-20 bg-[#cc0000] mx-auto rounded" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              {DIFERENCIAIS.map(({ icon, title, text }) => (
                <div
                  key={title}
                  className="bg-[#111] border border-[#cc0000]/25 rounded-2xl p-6 hover:border-[#cc0000] hover:shadow-[0_0_24px_rgba(204,0,0,0.15)] transition-all duration-300 flex md:flex-col items-start md:items-center gap-4 md:gap-0 md:text-center"
                >
                  <div className="text-4xl flex-shrink-0 md:mb-4">{icon}</div>
                  <div>
                    <h3 className="text-base font-black text-[#cc0000] uppercase tracking-widest mb-1 md:mb-3">
                      {title}
                    </h3>
                    <p className="text-[#b8b8b8] text-sm leading-relaxed">
                      {text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROVA DE CONFIANÇA */}
        <section className="px-4 py-12 md:py-20 relative overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(204,0,0,0.07) 0%, transparent 70%)",
            }}
          />
          <div className="max-w-2xl mx-auto text-center relative z-10">
            <div className="border-2 border-[#cc0000]/60 rounded-2xl p-6 sm:p-8 md:p-12 bg-[#080808]">
              <div className="flex justify-center mb-5">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20">
                  <Image
                    src="/logo.png"
                    alt="Ratinho das Motos"
                    fill
                    sizes="80px"
                    className="object-contain"
                  />
                </div>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black uppercase text-white mb-4 leading-tight">
                Compra segura, negociação direta e atendimento de{" "}
                <span className="text-[#cc0000]">verdade</span>.
              </h2>
              <p className="text-[#b8b8b8] text-sm sm:text-base leading-relaxed">
                No Ratinho das Motos, você conversa direto com quem entende do
                negócio. A proposta é simples: moto com segurança, negociação
                transparente e atendimento rápido para quem quer fechar negócio
                sem enrolação.
              </p>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="px-4 py-16 md:py-24 bg-[#080808] relative overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 70% 70% at 50% 50%, rgba(204,0,0,0.15) 0%, transparent 70%)",
            }}
          />
          <div className="max-w-2xl mx-auto text-center relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-white mb-4 leading-tight">
              Pronto para sair de{" "}
              <span className="text-[#cc0000]">moto nova</span>?
            </h2>
            <p className="text-[#b8b8b8] text-sm sm:text-base md:text-lg mb-8">
              Chame agora no WhatsApp e negocie direto com o Ratinho das Motos.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full sm:w-auto sm:inline-flex items-center justify-center gap-2 bg-[#cc0000] hover:bg-[#e81020] text-white font-black text-base sm:text-lg md:text-xl px-8 py-5 rounded-full transition-all duration-200 hover:scale-105 active:scale-95 pulse-red uppercase tracking-wide shadow-[0_0_50px_rgba(204,0,0,0.3)]"
            >
              CHAMAR NO WHATSAPP AGORA 📲
            </a>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="bg-black border-t-2 border-[#cc0000]/30 px-4 py-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-4">
              <div className="relative w-14 h-14 sm:w-16 sm:h-16">
                <Image
                  src="/logo.png"
                  alt="Ratinho das Motos"
                  fill
                  sizes="64px"
                  className="object-contain"
                />
              </div>
            </div>
            <p className="font-black text-lg sm:text-xl text-white mb-1 uppercase tracking-widest">
              Ratinho das Motos
            </p>
            <p className="text-[#cc0000] text-sm font-semibold mb-2">
              Fortaleza — Ceará
            </p>
            <p className="text-[#b8b8b8] text-sm mb-6">
              Compra, venda, troca e financiamento de motocicletas.
            </p>
            <div className="h-px bg-white/10 mb-5" />
            <p className="text-[#666] text-xs">
              © 2026 Ratinho das Motos. Todos os direitos reservados.
            </p>
          </div>
        </footer>
      </main>

      {/* FLOATING WHATSAPP — mobile only */}
      <a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-4 z-50 flex items-center gap-2 bg-[#cc0000] hover:bg-[#e81020] text-white font-black text-sm px-5 py-3 rounded-full shadow-[0_4px_24px_rgba(204,0,0,0.5)] transition-all duration-200 hover:scale-105 active:scale-95 pulse-red md:hidden"
        aria-label="Chamar no WhatsApp"
      >
        📲 WhatsApp
      </a>
    </div>
  );
}
