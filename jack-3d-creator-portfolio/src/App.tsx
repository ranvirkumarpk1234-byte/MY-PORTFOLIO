import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type MouseEvent,
} from "react";
import {
  motion,
  useMotionValue,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const C = "#D7E2EA";

const portrait = "/ranvir.png";

const aboutDecor = [
  {
    src: "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png",
    className:
      "top-[4%] left-[1%] sm:left-[2%] md:left-[4%] w-[120px] sm:w-[160px] md:w-[210px]",
    x: -80,
    delay: 0.1,
  },
  {
    src: "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png",
    className:
      "bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] w-[100px] sm:w-[140px] md:w-[180px]",
    x: -80,
    delay: 0.25,
  },
  {
    src: "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png",
    className:
      "top-[4%] right-[1%] sm:right-[2%] md:right-[4%] w-[120px] sm:w-[160px] md:w-[210px]",
    x: 80,
    delay: 0.15,
  },
  {
    src: "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png",
    className:
      "bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] w-[130px] sm:w-[170px] md:w-[220px]",
    x: 80,
    delay: 0.3,
  },
];

const gifs = [
  "https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif",
  "https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif",
  "https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif",
  "https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif",
  "https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif",
  "https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif",
  "https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif",
  "https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif",
  "https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif",
  "https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif",
  "https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif",
  "https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif",
  "https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif",
  "https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif",
  "https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif",
  "https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif",
  "https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif",
  "https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif",
  "https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif",
  "https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif",
  "https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif",
];

const projects = [
  {
    number: "01",
    category: "Client",
    name: "Nextlevel Studio",
    images: [
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85",
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85",
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85",
    ],
  },
  {
    number: "02",
    category: "Personal",
    name: "Aura Brand Identity",
    images: [
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85",
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85",
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85",
    ],
  },
  {
    number: "03",
    category: "Client",
    name: "Solaris Digital",
    images: [
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85",
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85",
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85",
    ],
  },
];

function FadeIn({
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "50px", amount: 0 }}
      transition={{ delay, duration, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
}

function ContactButton() {
  return (
    <motion.a
      href="mailto:ranvirkumarpk1234.com"
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      className="relative rounded-full bg-[linear-gradient(123deg,#18011F_7%,#B600A8_37%,#7621B0_72%,#BE4C00_100%)] px-8 py-3 text-xs font-medium uppercase tracking-widest text-white shadow-[0_4px_4px_rgba(181,1,167,.25),4px_4px_12px_#7721B1_inset] outline outline-2 outline-white outline-offset-[-3px] sm:px-10 sm:py-3.5 sm:text-sm md:px-12 md:py-4 md:text-base"
    >
      Contact Me
    </motion.a>
  );
}

function LiveProjectButton() {
  return (
    <motion.a
      href="#contact"
      whileHover={{ backgroundColor: "rgba(215,226,234,.1)" }}
      className="flex shrink-0 items-center gap-2 rounded-full border-2 border-[#D7E2EA] px-5 py-2.5 text-xs font-medium uppercase tracking-widest text-[#D7E2EA] sm:px-8 sm:py-3 sm:text-sm md:text-base"
    >
      Live Project <ArrowUpRight size={16} />
    </motion.a>
  );
}

function Magnet({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMove = (event: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      const dx = event.clientX - (rect.left + rect.width / 2);
      const dy = event.clientY - (rect.top + rect.height / 2);
      const distance = Math.max(Math.abs(dx), Math.abs(dy));
      if (distance < Math.max(rect.width, rect.height) / 2 + 150) {
        x.set(dx / 3);
        y.set(dy / 3);
      }
    };

    const reset = () => {
      x.set(0);
      y.set(0);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    el.addEventListener("pointerleave", reset);
    return () => {
      window.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", reset);
    };
  }, [x, y]);

  return (
    <motion.div
      ref={ref}
      style={{ x, y, willChange: "transform" }}
      transition={{ x: { duration: 0.3 }, y: { duration: 0.3 } }}
    >
      {children}
    </motion.div>
  );
}

function AnimatedText({ text }: { text: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.2"],
  });

  return (
    <p
      ref={ref}
      className="relative max-w-[560px] text-center text-[clamp(1rem,2vw,1.35rem)] font-medium leading-relaxed text-[#D7E2EA]"
      aria-label={text}
    >
      {text.split("").map((char, i) => {
        const start = i / text.length;
        const end = Math.min(1, start + 0.08);
        return (
          <Character key={`${char}-${i}`} char={char} progress={scrollYProgress} range={[start, end]} />
        );
      })}
    </p>
  );
}

function Character({
  char,
  progress,
  range,
}: {
  char: string;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return (
    <span className="relative inline-block">
      <span aria-hidden="true" className="invisible">
        {char === " " ? "\u00A0" : char}
      </span>
      <motion.span style={{ opacity }} className="absolute inset-0">
        {char === " " ? "\u00A0" : char}
      </motion.span>
    </span>
  );
}

function HeroSection() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setReady(true), 100);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <section id="top" className="relative flex h-screen min-h-[650px] flex-col overflow-x-clip">
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: ready ? 1 : 0, y: ready ? 0 : -20 }}
        transition={{ duration: 0.7 }}
        className="z-20 flex items-center justify-between px-6 pt-6 text-sm font-medium uppercase tracking-wider text-[#D7E2EA] md:px-10 md:pt-8 md:text-lg lg:text-[1.4rem]"
      >
        <a href="#about" className="transition-opacity duration-200 hover:opacity-70">About</a>
        <a href="#services" className="transition-opacity duration-200 hover:opacity-70">Price</a>
        <a href="#projects" className="transition-opacity duration-200 hover:opacity-70">Projects</a>
        <a href="#contact" className="transition-opacity duration-200 hover:opacity-70">Contact</a>
      </motion.nav>

      <div className="mt-6 overflow-hidden sm:mt-4 md:-mt-5">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="hero-heading w-full whitespace-nowrap text-center text-[14vw] font-black uppercase leading-none tracking-tight sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw]"
        >
          i&apos;m RANVIR
        </motion.h1>
      </div>

      <div className="mt-auto flex items-end justify-between px-6 pb-7 sm:px-8 sm:pb-8 md:px-10 md:pb-10">
        <FadeIn delay={0.35} y={20}>
          <p className="max-w-[120px] text-[clamp(.75rem,1.4vw,2.5rem)] font-light uppercase leading-snug tracking-wide text-[#D7E2EA] sm:max-w-[220px] md:max-w-[260px]">
            A creative developer focused on building bold, meaningful, and unforgettable digital experiences.
          </p>
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>

      <FadeIn delay={0.6} y={30} className="pointer-events-none absolute left-1/2 top-1/2 z-10 -translate-x-1/2 sm:bottom-0 sm:top-auto sm:translate-y-0">
        <Magnet>
          <img
            src={portrait}
            alt="RANVIR 3D creator portrait"
            className="w-[180px] sm:w-[260px] md:w-[340px] lg:w-[420px]"
          />
        </Magnet>
      </FadeIn>
    </section>
  );
}

function MarqueeSection() {
  const ref = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const update = () => {
      const sectionTop = ref.current?.getBoundingClientRect().top ?? 0;
      setOffset((window.scrollY - (window.scrollY + sectionTop) + window.innerHeight) * 0.3);
    };
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  const row1 = [...gifs.slice(0, 11), ...gifs.slice(0, 11), ...gifs.slice(0, 11)];
  const row2 = [...gifs.slice(11), ...gifs.slice(11), ...gifs.slice(11)];

  return (
    <section ref={ref} className="overflow-hidden bg-[#0C0C0C] pb-10 pt-24 sm:pt-32 md:pt-40">
      <div className="flex flex-col gap-3">
        <div
          className="flex w-max gap-3"
          style={{ transform: `translateX(${offset - 200}px)`, willChange: "transform" }}
        >
          {row1.map((src, i) => (
            <img key={`r1-${i}`} src={src} alt="" loading="lazy" className="h-[270px] w-[420px] shrink-0 rounded-2xl object-cover" />
          ))}
        </div>
        <div
          className="flex w-max gap-3"
          style={{ transform: `translateX(${-offset + 200}px)`, willChange: "transform" }}
        >
          {row2.map((src, i) => (
            <img key={`r2-${i}`} src={src} alt="" loading="lazy" className="h-[270px] w-[420px] shrink-0 rounded-2xl object-cover" />
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="relative flex min-h-screen items-center justify-center overflow-hidden px-5 py-20 sm:px-8 md:px-10">
      {aboutDecor.map((item, i) => (
        <FadeIn key={item.src} delay={item.delay} x={item.x} y={0} duration={0.9} className={`pointer-events-none absolute ${item.className}`}>
          <img src={item.src} alt="" className="w-full" />
        </FadeIn>
      ))}

      <div className="relative z-10 flex max-w-4xl flex-col items-center gap-10 text-center sm:gap-14 md:gap-16">
        <FadeIn>
          <h2 className="hero-heading text-[clamp(3rem,12vw,160px)] font-black uppercase leading-none tracking-tight">
            About me
          </h2>
        </FadeIn>

        <AnimatedText text="I'm ₹ANVI₹, a creative developer who loves building modern websites and digital experiences.!" />

        <FadeIn delay={0.2} y={20} className="mt-6 sm:mt-8 md:mt-8">
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
}

const services = [
  ["01", "3D Modeling", "Creation of detailed objects, characters, or environments tailored to specific client needs, ideal for games, products, and visualizations."],
  ["02", "Rendering", "High-quality, photorealistic renders that showcase designs with custom lighting, textures, and materials to bring concepts to life."],
  ["03", "Motion Design", "Dynamic animations and motion graphics that add energy and storytelling to brands, products, and digital experiences."],
  ["04", "Branding", "Crafting cohesive visual identities -- from logos to full brand systems -- that communicate a clear and memorable presence."],
  ["05", "Web Design", "Designing clean, modern, and conversion-focused websites with attention to layout, typography, and user experience."],
];

function ServicesSection() {
  return (
    <section id="services" className="rounded-t-[40px] bg-white px-5 py-20 text-[#0C0C0C] sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32">
      <FadeIn>
        <h2 className="mb-16 text-center text-[clamp(3rem,12vw,160px)] font-black uppercase leading-none tracking-tight sm:mb-20 md:mb-28">
          Services
        </h2>
      </FadeIn>

      <div className="mx-auto max-w-5xl">
        {services.map(([number, name, description], i) => (
          <FadeIn key={number} delay={i * 0.1} y={30}>
            <article className="flex gap-5 border-b border-[rgba(12,12,12,.15)] py-8 sm:gap-8 sm:py-10 md:gap-12 md:py-12">
              <div className="w-[28%] shrink-0 text-[clamp(3rem,10vw,140px)] font-black leading-[.8]">{number}</div>
              <div className="pt-1">
                <h3 className="text-[clamp(1rem,2.2vw,2.1rem)] font-medium uppercase leading-tight">{name}</h3>
                <p className="mt-3 max-w-2xl text-[clamp(.85rem,1.6vw,1.25rem)] font-light leading-relaxed opacity-60">{description}</p>
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
  total,
}: {
  project: (typeof projects)[number];
  index: number;
  total: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });
  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div ref={ref} className="relative h-[85vh]" style={{ top: `${index * 28}px` }}>
      <motion.article
        style={{ scale }}
        className="sticky top-24 h-[calc(85vh-2rem)] overflow-hidden rounded-[40px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:top-28 sm:rounded-[50px] sm:p-6 md:top-32 md:rounded-[60px] md:p-8"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex min-w-0 items-start gap-3 sm:gap-5">
            <span className="shrink-0 text-[clamp(3rem,10vw,140px)] font-black leading-[.72] text-[#D7E2EA]">{project.number}</span>
            <div className="pt-1 sm:pt-2">
              <p className="text-xs uppercase tracking-widest text-[#D7E2EA]/60 sm:text-sm">{project.category}</p>
              <h3 className="mt-1 text-lg font-medium uppercase text-[#D7E2EA] sm:text-2xl md:text-3xl">{project.name}</h3>
            </div>
          </div>
          <LiveProjectButton />
        </div>

        <div className="mt-5 grid h-[calc(100%-100px)] grid-cols-[40%_60%] gap-2.5 sm:mt-6 sm:gap-3">
          <div className="flex min-h-0 flex-col gap-2.5 sm:gap-3">
            <img src={project.images[0]} alt="" className="h-[clamp(130px,16vw,230px)] w-full min-h-0 rounded-[30px] object-cover sm:rounded-[40px] md:rounded-[50px]" />
            <img src={project.images[1]} alt="" className="min-h-0 flex-1 w-full rounded-[30px] object-cover sm:rounded-[40px] md:rounded-[50px]" />
          </div>
          <img src={project.images[2]} alt="" className="h-full min-h-0 w-full rounded-[30px] object-cover sm:rounded-[40px] md:rounded-[50px]" />
        </div>
      </motion.article>
    </div>
  );
}

function ProjectsSection() {
  return (
    <section id="projects" className="-mt-10 rounded-t-[40px] bg-[#0C0C0C] px-5 pb-24 pt-16 text-[#D7E2EA] sm:-mt-12 sm:rounded-t-[50px] sm:px-8 sm:pt-20 md:-mt-14 md:rounded-t-[60px] md:px-10 md:pt-24">
      <FadeIn>
        <h2 className="hero-heading mb-12 text-center text-[clamp(3rem,12vw,160px)] font-black uppercase leading-none tracking-tight sm:mb-16 md:mb-20">
          Project
        </h2>
      </FadeIn>

      <div className="mx-auto max-w-7xl">
        {projects.map((project, index) => (
          <ProjectCard key={project.number} project={project} index={index} total={projects.length} />
        ))}
      </div>

      <div id="contact" className="mx-auto mt-20 flex max-w-7xl flex-col items-center gap-6 border-t border-[#D7E2EA]/20 pt-16 text-center">
        <p className="text-sm uppercase tracking-widest text-[#D7E2EA]/60">Available for selected projects</p>
        <a href="ranvirkumarpk1234.com" className="hero-heading text-[clamp(2rem,6vw,5rem)] font-black uppercase leading-none hover:opacity-80">
          ranvirkumarpk1234@gmail.com
        </a>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <main className="min-h-screen overflow-x-clip bg-[#0C0C0C]">
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
    </main>
  );
}