import { type ReactNode, useEffect } from "react";
import {
  ArrowRight,
  HandHeart,
  HeartHandshake,
  Landmark,
  Leaf,
  Mail,
  MapPin,
  Scale,
  ShieldCheck,
  Sprout,
  TrendingUp,
  UsersRound,
  Users,
} from "lucide-react";

type Stat = {
  value: string;
  label: string;
  icon: ReactNode;
  valueIcon?: ReactNode;
};

type Card = {
  title: string;
  description: string;
  icon: ReactNode;
};

type GalleryItem = {
  src: string;
  alt: string;
};

type Highlight = {
  title: string;
  description: string;
};

function WhatsAppIcon({ className = "h-4.5 w-4.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 2.2a9.8 9.8 0 0 0-8.33 14.96L2.2 21.8l4.77-1.42A9.8 9.8 0 1 0 12 2.2Zm0 17.76a7.93 7.93 0 0 1-4.04-1.1l-.29-.17-2.82.84.84-2.75-.19-.29A7.95 7.95 0 1 1 12 19.96Zm4.36-5.96c-.24-.12-1.4-.69-1.62-.77-.22-.08-.38-.12-.54.12-.16.24-.62.77-.76.93-.14.16-.28.18-.52.06-.24-.12-1-.37-1.9-1.18-.7-.62-1.17-1.38-1.31-1.62-.14-.24-.02-.37.1-.49.1-.1.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.79-.2-.47-.4-.41-.54-.42h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.68 2.56 4.06 3.59.57.25 1.02.4 1.37.51.58.18 1.1.15 1.51.09.46-.07 1.4-.57 1.6-1.11.2-.54.2-1 .14-1.1-.06-.1-.22-.16-.46-.28Z"
      />
    </svg>
  );
}

function InstagramIcon({ className = "h-4.5 w-4.5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0-6 0Z" />
      <path d="M16.8 7.2h.01" />
    </svg>
  );
}

const stats: Stat[] = [
  {
    value: "20+ anos",
    label: "de presença ativa junto a famílias e comunidades no Rio Grande do Norte",
    icon: <UsersRound className="h-5 w-5" aria-hidden="true" />,
  },
  {
    value: "100%",
    label: "dos recursos convertidos em ações, atendimento e fortalecimento comunitário",
    icon: <TrendingUp className="h-5 w-5" aria-hidden="true" />,
  },
  {
    value: "RN",
    label: "presença territorial com escuta social, parcerias e respostas locais",
    icon: <Leaf className="h-5 w-5" aria-hidden="true" />,
    valueIcon: (
      <img
        src="/assets/rn-flag.svg"
        alt=""
        className="h-5 w-7 rounded-[2px] bg-white/85 object-contain p-[1px]"
      />
    ),
  },
];

const serviceCards: Card[] = [
  {
    title: "Acolhimento e assistência",
    description:
      "Entrega de alimentos, roupas, cobertores e itens essenciais para famílias em situação de vulnerabilidade social.",
    icon: <HandHeart className="h-5 w-5" aria-hidden="true" />,
  },
  {
    title: "Orientação e defesa de direitos",
    description:
      "Escuta qualificada, orientação jurídica e apoio à população vulnerável para acesso mais digno aos seus direitos.",
    icon: <Scale className="h-5 w-5" aria-hidden="true" />,
  },
  {
    title: "Projetos educativos e comunitários",
    description:
      "Oficinas, ações de cidadania e atividades integradas que fortalecem vínculos, autoestima e participação comunitária.",
    icon: <Users className="h-5 w-5" aria-hidden="true" />,
  },
  {
    title: "Bazar solidário e sustentabilidade",
    description:
      "Economia circular aplicada com reaproveitamento, bazar permanente e transformação de doações em novos atendimentos.",
    icon: <Leaf className="h-5 w-5" aria-hidden="true" />,
  },
];

const valuesCards: Card[] = [
  {
    title: "Missão",
    description:
      "Promover dignidade humana com responsabilidade social, inclusão e sustentabilidade em cada ação realizada.",
    icon: <HeartHandshake className="h-5 w-5" aria-hidden="true" />,
  },
  {
    title: "Valores",
    description:
      "Solidariedade, ética, transparência, cidadania plena e compromisso permanente com impacto social concreto.",
    icon: <ShieldCheck className="h-5 w-5" aria-hidden="true" />,
  },
  {
    title: "Compromisso",
    description:
      "Transformar recursos em atendimento, fortalecimento comunitário e apoio contínuo a famílias no Rio Grande do Norte.",
    icon: <Landmark className="h-5 w-5" aria-hidden="true" />,
  },
];

const partnershipCards: Card[] = [
  {
    title: "Sobras de estoque",
    description:
      "Coleções passadas, produtos fora de linha e itens corporativos com potencial de reaproveitamento social.",
    icon: <Sprout className="h-5 w-5" aria-hidden="true" />,
  },
  {
    title: "Mostruário e devoluções",
    description:
      "Peças de mostruário, trocas, devoluções e itens com pequenos danos que ainda podem gerar valor e cuidado.",
    icon: <ArrowRight className="h-5 w-5" aria-hidden="true" />,
  },
  {
    title: "ESG com impacto local",
    description:
      "Parcerias que reduzem descarte, fortalecem a reputação institucional e atendem necessidades reais da comunidade.",
    icon: <Leaf className="h-5 w-5" aria-hidden="true" />,
  },
  {
    title: "Voluntariado e apoio técnico",
    description:
      "Pessoas e empresas podem contribuir com tempo, conhecimento, serviços e apoio profissional para ampliar o alcance das ações.",
    icon: <Users className="h-5 w-5" aria-hidden="true" />,
  },
];

const resultHighlights: Highlight[] = [
  {
    title: "Histórico",
    description: "Presença social consolidada no RN com confiança construída ao longo do tempo.",
  },
  {
    title: "Transparência",
    description: "Doações e apoios convertidos em resposta social com comunicação clara e responsabilidade.",
  },
  {
    title: "Rede local",
    description: "Atuação conectada a famílias, comunidade e parceiros que conhecem a realidade do território.",
  },
  {
    title: "Reinvestimento",
    description: "Cada contribuição retorna em cuidado, acolhimento, orientação e fortalecimento comunitário.",
  },
];

const gallery: GalleryItem[] = [
  { src: "/assets/pdf-images/p02-img01.jpeg", alt: "Atendimento individual da Sociedade Terra Viva" },
  { src: "/assets/pdf-images/p02-img03.jpeg", alt: "Atendimento social realizado pela equipe" },
  { src: "/assets/pdf-images/p03-img02.jpeg", alt: "Evento institucional com parceiros" },
  { src: "/assets/pdf-images/p03-img03.jpeg", alt: "Atividade educativa com crianças" },
  { src: "/assets/pdf-images/p06-img01.jpeg", alt: "Atendimento comunitário em sala" },
  { src: "/assets/pdf-images/p06-img02.jpeg", alt: "Reunião com participantes da comunidade" },
];

function App() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));

    if (elements.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.16,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    elements.forEach((element, index) => {
      element.style.setProperty("--reveal-delay", `${Math.min(index % 6, 5) * 85}ms`);
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-[var(--accent)] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-[var(--accent-ink)]"
      >
        Ir para o conteúdo
      </a>

      <header className="sticky top-0 z-50 border-b border-[var(--border)]/80 bg-[color:color-mix(in_srgb,var(--bg)_90%,white)] shadow-[0_10px_34px_rgba(14,34,63,0.05)] backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
          <a href="#inicio" className="flex items-center gap-3 text-left">
            <img
              src="/assets/stv-logo-clean.png"
              alt="Logo da Sociedade Terra Viva"
              className="h-12 w-12 rounded-full ring-1 ring-[var(--border)]"
            />
            <div>
              <div className="font-heading text-base font-semibold tracking-tight text-[var(--title)] sm:text-lg">
                Sociedade Terra Viva
              </div>
              <div className="text-xs text-[var(--muted)]">Instituição social e comunitária</div>
            </div>
          </a>

          <nav
            id="main-nav"
            className="flex w-full flex-wrap items-center justify-start gap-3 border-t border-[var(--border)]/70 pt-3 sm:w-auto sm:justify-end sm:border-t-0 sm:pt-0 lg:flex-nowrap"
          >
            <div className="nav-primary-group">
              <a className="nav-link" href="#missao">
                Missão
              </a>
              <a className="nav-link" href="#servicos">
                Serviços
              </a>
              <a className="nav-link" href="#resultados">
                Resultados
              </a>
              <a className="nav-link" href="#contato">
                Contato
              </a>
            </div>
            <div className="nav-actions">
              <a
                className="interactive-chip mt-3 inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full border border-[var(--donation-border)] bg-[var(--donation-bg)] px-5 text-sm font-semibold text-[var(--donation-ink)] transition duration-200 ease-out hover:translate-y-[-1px] hover:bg-[var(--donation-bg-strong)] hover:shadow-[0_16px_30px_rgba(191,89,56,0.18)] lg:mt-0"
                href="#contato"
              >
                <HandHeart className="h-4.5 w-4.5 shrink-0" aria-hidden="true" />
                Quero doar
              </a>
              <a
                className="interactive-chip mt-3 inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full bg-[var(--whatsapp)] px-5 text-sm font-semibold text-white transition duration-200 ease-out hover:translate-y-[-1px] hover:bg-[var(--whatsapp-dark)] hover:shadow-[0_18px_32px_rgba(37,211,102,0.28)] lg:mt-0"
                href="https://wa.me/5584987060009?text=Ol%C3%A1,%20quero%20falar%20com%20a%20Sociedade%20Terra%20Viva."
                target="_blank"
                rel="noreferrer"
              >
                <WhatsAppIcon className="h-4.5 w-4.5 shrink-0" />
                Falar agora
              </a>
            </div>
          </nav>
        </div>
      </header>

      <main id="conteudo">
        <section
          id="inicio"
          className="hero-section relative isolate overflow-hidden border-b border-[var(--border)] bg-[radial-gradient(circle_at_top_left,rgba(37,211,102,0.24),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(202,138,4,0.18),transparent_24%),linear-gradient(180deg,#14372f_0%,#102a47_100%)]"
        >
          <img
            src="/assets/pdf-images/p02-img02.jpeg"
            alt="Ação comunitária com atendimento e convivência social"
            className="hero-media absolute inset-0 -z-20 h-full w-full object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(10,32,28,0.9)_0%,rgba(10,32,28,0.72)_42%,rgba(10,32,28,0.28)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 -z-10 h-28 bg-[linear-gradient(180deg,transparent,var(--bg))]" />
          <div className="hero-orb hero-orb-primary" aria-hidden="true" />
          <div className="hero-orb hero-orb-secondary" aria-hidden="true" />
          <div className="hero-grid" aria-hidden="true" />

          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
            <div className="max-w-4xl">
              <p
                className="reveal-up mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--accent)]"
                data-reveal
              >
                Sociedade Terra Viva Brasil
              </p>
              <h1
                className="reveal-up heading-balance title-flow max-w-[16ch] font-heading text-4xl leading-[0.98] font-semibold text-white sm:text-5xl lg:text-6xl"
                data-reveal
              >
                Cuidar de quem mais precisa com presença, dignidade e ação contínua.
              </h1>
              <p className="reveal-up body-copy mt-5 max-w-3xl text-base leading-7 text-white/86 sm:text-lg" data-reveal>
                Desde os anos 2000, a Sociedade Terra Viva atua no Rio Grande do Norte levando acolhimento,
                orientação, reaproveitamento solidário e mobilização comunitária para famílias em situação de
                vulnerabilidade.
              </p>

              <div className="reveal-up mt-7 flex flex-col gap-3 sm:flex-row" data-reveal>
                <a
                  href="https://wa.me/5584987060009?text=Ol%C3%A1,%20preciso%20de%20atendimento%20da%20Sociedade%20Terra%20Viva."
                  target="_blank"
                  rel="noreferrer"
                  className="interactive-chip inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full bg-[var(--accent)] px-6 text-sm font-semibold text-[var(--accent-ink)] transition duration-200 ease-out hover:translate-y-[-1px] hover:shadow-[0_18px_34px_rgba(202,138,4,0.28)]"
                >
                  <WhatsAppIcon className="h-4.5 w-4.5 shrink-0" />
                  Preciso de atendimento
                </a>
                <a
                  href="#contato"
                  className="interactive-chip inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full border border-[var(--donation-border)] bg-[var(--donation-bg)] px-6 text-sm font-semibold text-[var(--donation-ink)] shadow-[0_18px_34px_rgba(191,89,56,0.16)] transition duration-200 ease-out hover:translate-y-[-1px] hover:bg-[var(--donation-bg-strong)] hover:shadow-[0_20px_36px_rgba(191,89,56,0.22)]"
                >
                  <HandHeart className="h-4.5 w-4.5 shrink-0" aria-hidden="true" />
                  Quero doar ou ser parceiro
                </a>
              </div>

              <div className="mt-9 grid gap-3 sm:grid-cols-3">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="reveal-up stat-card border border-white/18 bg-white/12 p-5 text-white shadow-[0_18px_44px_rgba(5,24,22,0.22)] backdrop-blur-md"
                    data-reveal
                  >
                    <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white">
                      {stat.icon}
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="font-heading text-2xl font-semibold text-white">{stat.value}</div>
                      {stat.valueIcon}
                    </div>
                    <p className="mt-2 text-sm leading-6 text-white/78">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="missao"
          className="mx-auto max-w-7xl bg-[linear-gradient(180deg,rgba(229,246,236,0.86)_0%,rgba(241,248,255,0.84)_100%)] px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16"
        >
          <div className="grid items-start gap-6 lg:grid-cols-12 lg:items-center">
            <div className="reveal-up lg:col-span-5" data-reveal>
              <p className="section-kicker">Missão, valores e compromisso</p>
              <h2 className="section-title title-flow mission-title max-w-none sm:max-w-[22ch]">
                Uma instituição feita para acolher, orientar e sustentar confiança pública.
              </h2>
              <p className="section-copy body-copy">
                A base da Terra Viva une compromisso social, escuta humana e gestão responsável para atender com
                seriedade quem precisa e inspirar quem deseja ajudar.
              </p>
            </div>
            <div className="grid items-start gap-4 md:grid-cols-3 lg:col-span-7">
              {valuesCards.map((card) => (
                <article key={card.title} className="reveal-up value-card" data-reveal>
                  <div className="icon-shell">{card.icon}</div>
                  <h3 className="card-title mt-4">{card.title}</h3>
                  <p className="card-copy mt-2">{card.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="servicos"
          className="border-y border-[var(--border)] bg-[radial-gradient(circle_at_top_right,rgba(202,138,4,0.12),transparent_22%),linear-gradient(180deg,rgba(255,250,241,0.92)_0%,rgba(248,252,249,0.96)_100%)]"
        >
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-15 lg:px-8 lg:py-16">
            <div className="grid gap-8 lg:grid-cols-12">
              <div className="reveal-up lg:col-span-4" data-reveal>
                <p className="section-kicker">Projetos e serviços</p>
                <h2 className="section-title title-flow max-w-[20ch]">
                  Frentes de atuação pensadas para transformar doações, escuta e parceria em cuidado real.
                </h2>
                <p className="section-copy body-copy">
                  Cada serviço responde a necessidades concretas da população vulnerabilizada e fortalece a presença da
                  instituição no território.
                </p>
              </div>
              <div className="grid items-start gap-3.5 md:grid-cols-2 lg:col-span-8">
                {serviceCards.map((card) => (
                  <article key={card.title} className="reveal-up service-card" data-reveal>
                    <div className="icon-shell">{card.icon}</div>
                    <h3 className="card-title">{card.title}</h3>
                    <p className="card-copy">{card.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="resultados"
          className="mx-auto max-w-7xl bg-[linear-gradient(180deg,rgba(223,237,232,0.9)_0%,rgba(233,242,251,0.94)_100%)] px-4 py-16 sm:px-6 lg:px-8 lg:py-20"
        >
          <div className="grid gap-6 lg:grid-cols-12">
            <div
              className="reveal-up rounded-[var(--radius-xl)] border border-[var(--strong-border)] bg-[var(--surface-strong)] p-8 text-white shadow-[0_28px_70px_rgba(14,34,63,0.16)] lg:col-span-5"
              data-reveal
            >
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
                Resultados e legitimidade
              </p>
              <h2 className="mt-4 font-heading text-4xl leading-tight text-white sm:text-5xl">
                Seriedade institucional que vira presença, resposta e cuidado ao longo do tempo.
              </h2>
              <p className="body-copy mt-5 max-w-xl text-base leading-7 text-white/82">
                A atuação contínua da Terra Viva mostra que confiança se constrói com permanência, transparência e
                compromisso diário com as necessidades da comunidade.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {resultHighlights.map((item) => (
                  <article
                    key={item.title}
                    className="interactive-panel rounded-[1.15rem] border border-white/12 bg-white/8 p-5 transition duration-200 ease-out hover:translate-y-[-2px] hover:bg-white/12 hover:shadow-[0_18px_38px_rgba(0,0,0,0.12)]"
                  >
                    <div className="text-sm font-semibold uppercase tracking-[0.16em] text-white/60">{item.title}</div>
                    <p className="body-copy mt-3 text-sm leading-6 text-white/82">{item.description}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:col-span-7">
              {partnershipCards.map((card) => (
                <article key={card.title} className="reveal-up card-shell" data-reveal>
                  <div className="icon-shell">{card.icon}</div>
                  <h3 className="card-title">{card.title}</h3>
                  <p className="card-copy">{card.description}</p>
                </article>
              ))}
              <div
                className="reveal-up rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface-muted)] p-6 transition duration-200 ease-out hover:translate-y-[-2px] hover:shadow-[0_16px_36px_rgba(24,92,71,0.08)] md:col-span-2"
                data-reveal
              >
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--primary)]">
                  Compromisso declarado
                </p>
                <blockquote className="mt-4 font-heading text-3xl leading-tight text-[var(--title)]">
                  “Cada item doado se transforma em dignidade para centenas de famílias.”
                </blockquote>
                <p className="body-copy mt-4 text-sm leading-6 text-[var(--muted)]">
                  Um princípio simples orienta cada ação: o apoio recebido precisa chegar à ponta em forma de cuidado,
                  escuta e oportunidade.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-[var(--border)] bg-[linear-gradient(180deg,rgba(238,247,242,0.96)_0%,rgba(242,246,252,0.96)_100%)]">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            <div className="reveal-up" data-reveal>
              <p className="section-kicker">Registro visual da atuação</p>
              <h2 className="section-title max-w-none">
                Imagens que revelam a presença da Terra Viva no atendimento, na orientação e no cuidado com a
                comunidade.
              </h2>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {gallery.map((item, index) => (
                <figure
                  key={item.src}
                  className={`reveal-up gallery-card overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border)] bg-white p-2 shadow-[0_16px_44px_rgba(24,92,71,0.06)] transition duration-200 ease-out hover:translate-y-[-2px] hover:shadow-[0_20px_54px_rgba(24,92,71,0.1)] ${index === 0 ? "xl:col-span-2" : ""}`}
                  data-reveal
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className={`w-full rounded-md object-cover ${index === 0 ? "h-72 sm:h-80" : "h-72"}`}
                  />
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section
          id="contato"
          className="mx-auto max-w-7xl bg-[radial-gradient(circle_at_top_left,rgba(37,211,102,0.1),transparent_24%),linear-gradient(180deg,rgba(245,250,245,0.95)_0%,rgba(255,248,240,0.92)_100%)] px-4 py-16 sm:px-6 lg:px-8 lg:py-20"
        >
          <div className="grid items-start gap-6 lg:grid-cols-12">
            <div className="reveal-up contact-intro-panel flex border border-[var(--border)] bg-white p-8 lg:col-span-5" data-reveal>
              <div className="flex w-full flex-col justify-between gap-8">
                <div>
                  <p className="section-kicker">Contato institucional</p>
                  <h2 className="section-title contact-title max-w-[19ch]">
                    Canais diretos para atendimento, doações e parcerias.
                  </h2>
                  <p className="section-copy body-copy max-w-[34rem]">
                    Quando alguém precisa de ajuda, o caminho precisa ser claro. Quando alguém quer contribuir, a
                    resposta precisa ser confiável. Aqui os dois encontros acontecem.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[1.15rem] bg-[var(--surface-muted)] p-5">
                    <div className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--primary)]">
                      Atendimento
                    </div>
                    <p className="mt-3 text-base leading-7 text-[var(--muted)]">
                      Encaminhamento social e contato direto para demandas urgentes da população vulnerabilizada.
                    </p>
                  </div>
                  <div className="rounded-[1.15rem] bg-[var(--surface-muted)] p-5">
                    <div className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--primary)]">
                      Parcerias e doações
                    </div>
                    <p className="mt-3 text-base leading-7 text-[var(--muted)]">
                      Empresas, voluntários e apoiadores encontram aqui um canal simples para gerar impacto real.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="reveal-up contact-details-panel relative overflow-hidden border border-[var(--strong-border)] bg-[var(--title)] p-5 text-white lg:col-span-7 xl:p-6"
              data-reveal
            >
              <img
                src="/assets/stv-logo-clean.png"
                alt=""
                className="contact-panel-watermark"
                aria-hidden="true"
              />
              <div className="grid items-start gap-5 xl:grid-cols-[minmax(0,1.02fr)_minmax(320px,0.98fr)]">
                <div className="flex flex-col gap-4">
                  <div>
                    <h3 className="max-w-[10ch] font-heading text-3xl leading-[1.02] text-white sm:text-[2.6rem]">
                      Sociedade Terra Viva Brasil
                    </h3>
                    <p className="body-copy mt-3 max-w-xl text-[0.98rem] leading-6 text-white/82">
                      Rua Cônego Lustosa, 156, São José de Mipibu/RN. Atendimento por WhatsApp, e-mail institucional e
                      Instagram oficial para acolhimento, doações e propostas de parceria.
                    </p>
                  </div>

                  <div className="grid gap-2.5 lg:grid-cols-2">
                    <div className="rounded-[1.15rem] border border-white/12 bg-white/7 p-3.5">
                      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/65">Resposta humana</p>
                      <p className="mt-1.5 text-sm leading-5.5 text-white/82">
                        Escuta atenta para acolher, orientar e encaminhar quem vive situações de vulnerabilidade.
                      </p>
                    </div>
                    <div className="rounded-[1.15rem] border border-white/12 bg-white/7 p-3.5">
                      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/65">Apoio responsável</p>
                      <p className="mt-1.5 text-sm leading-5.5 text-white/82">
                        Canal direto para doadores, voluntários e parceiros que desejam contribuir com propósito.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-[1.15rem] border border-white/12 bg-white/7 p-3.5">
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/65">
                      Presença acessível
                    </p>
                    <p className="body-copy mt-1.5 text-[0.98rem] leading-6 text-white/82">
                      Comunicação direta e canais claros para quem precisa de ajuda e para quem quer transformar doação
                      em cuidado concreto.
                    </p>
                  </div>
                </div>

                <div className="relative grid gap-2.5 self-start overflow-hidden rounded-[1.4rem]">
                  <a
                    href="https://wa.me/5584987060009?text=Ol%C3%A1,%20quero%20falar%20com%20a%20Sociedade%20Terra%20Viva."
                    target="_blank"
                    rel="noreferrer"
                    className="interactive-chip relative z-10 inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-full bg-[var(--whatsapp)] px-5 text-sm font-semibold text-white transition duration-200 ease-out hover:translate-y-[-1px] hover:bg-[var(--whatsapp-dark)] hover:shadow-[0_18px_32px_rgba(37,211,102,0.28)]"
                  >
                    <WhatsAppIcon className="h-4.5 w-4.5 shrink-0" />
                    WhatsApp: (84) 98706-0009
                  </a>
                  <a
                    href="mailto:stvbrasil@hotmail.com"
                    className="interactive-chip relative z-10 inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-full border border-white/16 bg-white/8 px-5 text-sm font-semibold text-white backdrop-blur-sm transition duration-200 ease-out hover:bg-white/12"
                  >
                    <Mail className="h-4.5 w-4.5 shrink-0" aria-hidden="true" />
                    stvbrasil@hotmail.com
                  </a>
                  <a
                    href="https://www.instagram.com/sociedadeterraviva"
                    target="_blank"
                    rel="noreferrer"
                    className="interactive-chip relative z-10 inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-full border border-white/16 bg-[rgba(255,255,255,0.03)] px-5 text-sm font-semibold text-white backdrop-blur-sm transition duration-200 ease-out hover:bg-white/8"
                  >
                    <InstagramIcon className="h-4.5 w-4.5 shrink-0" />
                    @sociedadeterraviva
                  </a>
                  <div className="relative z-10 rounded-[1.15rem] border border-white/12 bg-white/7 px-4 py-3 backdrop-blur-sm">
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/60">Resposta rápida</p>
                    <p className="mt-1.5 text-sm leading-5.5 text-white/82">
                      Atendimento humano, canal claro e apoio direto para quem precisa de acolhimento ou quer doar.
                    </p>
                  </div>

                  <div className="relative overflow-hidden rounded-[1.4rem] border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-4 shadow-[0_18px_40px_rgba(3,12,24,0.16)]">
                    <div
                      className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(37,211,102,0.18),transparent_34%),radial-gradient(circle_at_82%_14%,rgba(202,138,4,0.16),transparent_30%)]"
                      aria-hidden="true"
                    />
                    <div className="relative z-10 flex items-center justify-between gap-3">
                      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/70">
                        Presença em ação
                      </p>
                      <span className="text-xs font-semibold uppercase tracking-[0.14em] text-white/45">
                        Território e cuidado
                      </span>
                    </div>

                    <div className="relative z-10 mt-4 grid gap-3 sm:grid-cols-[1.12fr_0.88fr]">
                      <figure className="group overflow-hidden rounded-[1.1rem] border border-white/12 bg-white/6">
                        <img
                          src={gallery[0].src}
                          alt={gallery[0].alt}
                          className="h-44 w-full object-cover transition duration-500 ease-out group-hover:scale-[1.03]"
                        />
                        <figcaption className="border-t border-white/10 px-3 py-2">
                          <p className="text-sm font-semibold text-white">Atendimento real, presença real.</p>
                          <p className="mt-1 text-xs leading-5 text-white/72">
                            Um recorte visual da atuação cotidiana da instituição.
                          </p>
                        </figcaption>
                      </figure>

                      <div className="grid gap-3">
                        <div className="rounded-[1rem] border border-white/12 bg-white/8 p-3">
                          <div className="font-heading text-3xl leading-none text-white">20+</div>
                          <p className="mt-1 text-sm leading-5 text-white/76">anos de atuação social</p>
                        </div>
                        <div className="rounded-[1rem] border border-white/12 bg-white/8 p-3">
                          <div className="font-heading text-3xl leading-none text-white">RN</div>
                          <p className="mt-1 text-sm leading-5 text-white/76">presença territorial local</p>
                        </div>
                        <div className="rounded-[1rem] border border-white/12 bg-white/8 p-3">
                          <div className="text-sm font-semibold uppercase tracking-[0.14em] text-white/68">
                            3 frentes
                          </div>
                          <p className="mt-1 text-sm leading-5 text-white/76">
                            acolhimento, orientação e parcerias
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[var(--border)] bg-[linear-gradient(180deg,#173f34_0%,#102a47_100%)]">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 text-white sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
          <div className="reveal-up" data-reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/60">Sociedade Terra Viva Brasil</p>
            <p className="mt-4 max-w-2xl font-heading text-2xl leading-tight text-white sm:text-3xl">
              Sua doação pode chegar onde a urgência social bate primeiro: na mesa, no cuidado e na esperança de uma
              família.
            </p>
          </div>

          <div className="reveal-up rounded-lg border border-white/12 bg-white/6 p-5" data-reveal>
            <div className="grid gap-4 sm:grid-cols-[0.92fr_1.08fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/60">Endereço</p>
                <p className="body-copy mt-3 text-base leading-7 text-white/82">
                  Rua Cônego Lustosa, 156
                  <br />
                  São José de Mipibu/RN
                </p>
                <a
                  href="https://wa.me/5584987060009?text=Ol%C3%A1,%20quero%20ajudar%20a%20Sociedade%20Terra%20Viva."
                  target="_blank"
                  rel="noreferrer"
                  className="interactive-chip mt-5 inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full bg-[var(--accent)] px-5 text-sm font-semibold text-[var(--accent-ink)] transition duration-200 ease-out hover:translate-y-[-1px]"
                >
                  <WhatsAppIcon className="h-4.5 w-4.5 shrink-0" />
                  Quero contribuir
                </a>
              </div>

              <a
                href="https://share.google/bM1tXct6aOKG6XnCf"
                target="_blank"
                rel="noreferrer"
                className="group interactive-panel relative overflow-hidden rounded-xl border border-white/10 bg-white/10 shadow-[0_18px_34px_rgba(0,0,0,0.14)]"
                aria-label="Abrir mapa da Sociedade Terra Viva no Google Maps"
              >
                <div
                  className="relative min-h-[180px] w-full overflow-hidden bg-[radial-gradient(circle_at_18%_22%,rgba(37,211,102,0.24),transparent_24%),radial-gradient(circle_at_78%_18%,rgba(202,138,4,0.22),transparent_22%),linear-gradient(135deg,#d9e5d8_0%,#c8d7ea_100%)]"
                  aria-hidden="true"
                >
                  <div className="absolute inset-x-0 top-7 h-1.5 bg-white/45" />
                  <div className="absolute left-[12%] top-[58%] h-1.5 w-[76%] rotate-[-10deg] rounded-full bg-white/32" />
                  <div className="absolute left-[24%] top-[14%] h-[74%] w-1.5 rotate-[18deg] rounded-full bg-white/28" />
                  <div className="absolute left-[58%] top-[8%] h-[82%] w-1.5 rotate-[10deg] rounded-full bg-white/20" />
                  <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.08)_50%,transparent_100%)]" />
                  <div className="absolute left-1/2 top-[52%] -translate-x-1/2 -translate-y-1/2">
                    <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[rgba(15,34,63,0.85)] text-white shadow-[0_16px_30px_rgba(15,34,63,0.24)]">
                      <MapPin className="h-6 w-6" aria-hidden="true" />
                      <span className="absolute -bottom-1.5 h-3 w-3 rounded-full bg-[var(--accent)] ring-4 ring-white/55" />
                    </div>
                  </div>
                  <div className="absolute left-4 top-4 rounded-full border border-white/25 bg-white/72 px-3 py-1 text-xs font-semibold tracking-[0.16em] text-[var(--title)] shadow-[0_8px_20px_rgba(0,0,0,0.08)]">
                    São José de Mipibu/RN
                  </div>
                  <div className="absolute bottom-4 left-4 rounded-full border border-white/30 bg-white/78 px-3 py-1 text-xs font-semibold text-[var(--title)] shadow-[0_8px_20px_rgba(0,0,0,0.08)]">
                    Rua Cônego Lustosa, 156
                  </div>
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(180deg,transparent,rgba(15,34,63,0.78))] p-4">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/75">Abrir no mapa</p>
                  <p className="mt-1 text-sm text-white/86">Clique para ver a localização no Google Maps.</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
