import {
  type CSSProperties,
  type ElementType,
  type PropsWithChildren,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { ExternalLink, Mail } from "lucide-react";

const portraitUrl =
  "https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png";

const marqueeImages = [
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

const aboutDecor = [
  {
    alt: "Moon 3D icon",
    src: "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png",
    className:
      "top-[4%] left-[1%] sm:left-[2%] md:left-[4%] w-[120px] sm:w-[160px] md:w-[210px]",
    delay: 0.1,
    x: -80,
  },
  {
    alt: "Abstract 3D object",
    src: "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png",
    className:
      "bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] w-[100px] sm:w-[140px] md:w-[180px]",
    delay: 0.25,
    x: -80,
  },
  {
    alt: "Lego 3D icon",
    src: "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png",
    className:
      "top-[4%] right-[1%] sm:right-[2%] md:right-[4%] w-[120px] sm:w-[160px] md:w-[210px]",
    delay: 0.15,
    x: 80,
  },
  {
    alt: "Grouped 3D shapes",
    src: "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png",
    className:
      "bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] w-[130px] sm:w-[170px] md:w-[220px]",
    delay: 0.3,
    x: 80,
  },
];

const services = [
  {
    number: "01",
    name: "3D Modeling",
    description:
      "Creation of detailed objects, characters, or environments tailored to specific client needs, ideal for games, products, and visualizations.",
  },
  {
    number: "02",
    name: "Rendering",
    description:
      "High-quality, photorealistic renders that showcase designs with custom lighting, textures, and materials to bring concepts to life.",
  },
  {
    number: "03",
    name: "Motion Design",
    description:
      "Dynamic animations and motion graphics that add energy and storytelling to brands, products, and digital experiences.",
  },
  {
    number: "04",
    name: "Branding",
    description:
      "Crafting cohesive visual identities -- from logos to full brand systems -- that communicate a clear and memorable presence.",
  },
  {
    number: "05",
    name: "Web Design",
    description:
      "Designing clean, modern, and conversion-focused websites with attention to layout, typography, and user experience.",
  },
];

const projects = [
  {
    number: "01",
    name: "Nextlevel Studio",
    category: "Client",
    images: [
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85",
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85",
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85",
    ],
  },
  {
    number: "02",
    name: "Aura Brand Identity",
    category: "Personal",
    images: [
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85",
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85",
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85",
    ],
  },
  {
    number: "03",
    name: "Solaris Digital",
    category: "Client",
    images: [
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85",
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85",
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85",
    ],
  },
];

type FadeInElement = "div" | "nav" | "p" | "h2";

type FadeInProps = PropsWithChildren<{
  as?: FadeInElement;
  className?: string;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  style?: CSSProperties;
}>;

function FadeIn({
  as = "div",
  children,
  className,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  style,
}: FadeInProps) {
  const MotionElement = useMemo(() => motion.create(as), [as]) as ElementType;

  return (
    <MotionElement
      className={className}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "50px", amount: 0 }}
      transition={{ delay, duration, ease: [0.25, 0.1, 0.25, 1] }}
      style={style}
    >
      {children}
    </MotionElement>
  );
}

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    const updateMatches = () => setMatches(media.matches);

    updateMatches();
    media.addEventListener("change", updateMatches);

    return () => {
      media.removeEventListener("change", updateMatches);
    };
  }, [query]);

  return matches;
}

type MagnetProps = PropsWithChildren<{
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  className?: string;
}>;

function Magnet({
  children,
  padding = 150,
  strength = 3,
  activeTransition = "transform 0.3s ease-out",
  inactiveTransition = "transform 0.6s ease-in-out",
  className,
}: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("translate3d(0px, 0px, 0)");
  const [transition, setTransition] = useState(inactiveTransition);

  useEffect(() => {
    let frame = 0;

    const handlePointerMove = (event: PointerEvent) => {
      if (frame) {
        cancelAnimationFrame(frame);
      }

      frame = requestAnimationFrame(() => {
        const element = ref.current;
        if (!element) {
          return;
        }

        const rect = element.getBoundingClientRect();
        const withinX =
          event.clientX >= rect.left - padding &&
          event.clientX <= rect.right + padding;
        const withinY =
          event.clientY >= rect.top - padding &&
          event.clientY <= rect.bottom + padding;

        if (!withinX || !withinY) {
          setTransition(inactiveTransition);
          setTransform("translate3d(0px, 0px, 0)");
          return;
        }

        const x = (event.clientX - (rect.left + rect.width / 2)) / strength;
        const y = (event.clientY - (rect.top + rect.height / 2)) / strength;

        setTransition(activeTransition);
        setTransform(`translate3d(${x}px, ${y}px, 0)`);
      });
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      if (frame) {
        cancelAnimationFrame(frame);
      }
    };
  }, [activeTransition, inactiveTransition, padding, strength]);

  return (
    <div
      ref={ref}
      className={className}
      style={{ transform, transition, willChange: "transform" }}
    >
      {children}
    </div>
  );
}

function ContactButton({ id }: { id?: string }) {
  return (
    <a
      id={id}
      href="mailto:hello@example.com"
      className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-2.5 text-[0.68rem] font-medium uppercase tracking-[0.18em] text-white outline outline-2 -outline-offset-[3px] outline-white transition-transform duration-200 hover:scale-[1.03] sm:px-10 sm:py-3.5 sm:text-sm sm:tracking-widest md:px-12 md:py-4 md:text-base"
      style={{
        background:
          "linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)",
        boxShadow:
          "0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset",
      }}
    >
      <Mail aria-hidden="true" className="h-4 w-4 sm:h-5 sm:w-5" />
      <span>Contact Me</span>
    </a>
  );
}

function LiveProjectButton() {
  return (
    <a
      href="#projects"
      className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#D7E2EA] px-5 py-2.5 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-[#D7E2EA] transition-colors duration-200 hover:bg-[#D7E2EA]/10 sm:px-10 sm:py-3.5 sm:text-base sm:tracking-widest"
    >
      <span>Live Project</span>
      <ExternalLink aria-hidden="true" className="h-4 w-4" />
    </a>
  );
}

function HeroSection() {
  const navItems = ["About", "Price", "Projects", "Contact"];

  return (
    <section className="relative flex min-h-[640px] h-screen flex-col overflow-x-clip bg-[#0C0C0C]">
      <FadeIn
        as="nav"
        delay={0}
        y={-20}
        className="relative z-20 flex justify-between gap-3 px-4 pt-5 text-xs font-medium uppercase tracking-[0.16em] text-[#D7E2EA] sm:px-6 sm:pt-6 sm:text-sm sm:tracking-wider md:px-10 md:pt-8 md:text-lg lg:text-[1.4rem]"
      >
        {navItems.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="transition-opacity duration-200 hover:opacity-70"
          >
            {item}
          </a>
        ))}
      </FadeIn>

      <div className="relative z-0 mt-6 w-full overflow-hidden sm:mt-4 md:-mt-5">
        <FadeIn as="div" delay={0.15} y={40}>
          <h1 className="hero-heading w-full whitespace-nowrap text-[12vw] font-black uppercase leading-none tracking-tight sm:text-[13.2vw] md:text-[14.2vw] lg:text-[15.2vw]">
            Hi, i&apos;m ahmed
          </h1>
        </FadeIn>
      </div>

      <FadeIn
        delay={0.6}
        y={30}
        className="absolute left-1/2 top-1/2 z-10 w-[min(74vw,280px)] -translate-x-1/2 -translate-y-1/2 sm:bottom-0 sm:top-auto sm:w-[360px] sm:translate-y-0 md:w-[440px] lg:w-[520px]"
      >
        <Magnet
          padding={150}
          strength={3}
          activeTransition="transform 0.3s ease-out"
          inactiveTransition="transform 0.6s ease-in-out"
        >
          <img
            src={portraitUrl}
            alt="Ahmed 3D creator portrait"
            className="w-full select-none"
            decoding="async"
          />
        </Magnet>
      </FadeIn>

      <div className="relative z-20 mt-auto flex items-end justify-between gap-4 px-4 pb-7 sm:gap-6 sm:px-6 sm:pb-8 md:px-10 md:pb-10">
        <FadeIn
          as="p"
          delay={0.35}
          y={20}
          className="max-w-[130px] text-[clamp(0.7rem,1.4vw,1.5rem)] font-light uppercase leading-snug tracking-wide text-[#D7E2EA] sm:max-w-[220px] md:max-w-[260px]"
        >
          a 3d creator driven by crafting striking and unforgettable projects
        </FadeIn>

        <FadeIn delay={0.5} y={20}>
          <ContactButton id="contact" />
        </FadeIn>
      </div>
    </section>
  );
}

function MarqueeRow({
  images,
  direction,
  offset,
}: {
  images: string[];
  direction: "left" | "right";
  offset: number;
}) {
  const tripledImages = [...images, ...images, ...images];
  const translate = direction === "right" ? offset - 200 : -(offset - 200);

  return (
    <div
      className="flex w-max gap-3"
      style={{
        transform: `translate3d(${translate}px, 0, 0)`,
        willChange: "transform",
      }}
    >
      {tripledImages.map((src, index) => (
        <img
          key={`${src}-${index}`}
          src={src}
          alt=""
          className="h-[clamp(150px,28vw,270px)] w-[clamp(235px,50vw,420px)] flex-none rounded-2xl object-cover"
          loading="lazy"
          decoding="async"
        />
      ))}
    </div>
  );
}

function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);
  const rowOne = marqueeImages.slice(0, 11);
  const rowTwo = marqueeImages.slice(11);

  useEffect(() => {
    let frame = 0;

    const updateOffset = () => {
      const section = sectionRef.current;
      if (!section) {
        return;
      }

      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      const nextOffset =
        (window.scrollY - sectionTop + window.innerHeight) * 0.3;

      setOffset(nextOffset);
    };

    const onScroll = () => {
      if (frame) {
        return;
      }

      frame = requestAnimationFrame(() => {
        updateOffset();
        frame = 0;
      });
    };

    updateOffset();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateOffset);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateOffset);
      if (frame) {
        cancelAnimationFrame(frame);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden bg-[#0C0C0C] pb-10 pt-24 sm:pt-32 md:pt-40"
    >
      <div className="flex flex-col gap-3">
        <MarqueeRow images={rowOne} direction="right" offset={offset} />
        <MarqueeRow images={rowTwo} direction="left" offset={offset} />
      </div>
    </section>
  );
}

function AnimatedCharacter({
  char,
  index,
  total,
  progress,
}: {
  char: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const start = index / total;
  const end = Math.min(start + 1 / total, 1);
  const opacity = useTransform(progress, [start, end], [0.2, 1]);

  return (
    <span className="relative inline-block whitespace-pre">
      <span className="invisible">{char}</span>
      <motion.span className="absolute left-0 top-0" style={{ opacity }}>
        {char}
      </motion.span>
    </span>
  );
}

function AnimatedText({ text }: { text: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.2"],
  });
  const characters = useMemo(() => text.split(""), [text]);

  return (
    <p
      ref={ref}
      className="relative max-w-[560px] text-center text-[clamp(1rem,2vw,1.35rem)] font-medium leading-relaxed text-[#D7E2EA]"
    >
      {characters.map((char, index) => (
        <AnimatedCharacter
          key={`${char}-${index}`}
          char={char}
          index={index}
          total={characters.length}
          progress={scrollYProgress}
        />
      ))}
    </p>
  );
}

function AboutSection() {
  const aboutText =
    "With more than five years of experience in design, i focus on branding, web design, and user experience, i truly enjoy working with businesses that aim to stand out and present their best image. Let's build something incredible together!";

  return (
    <section
      id="about"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0C0C0C] px-5 py-24 sm:px-8 md:px-10"
    >
      {aboutDecor.map((item) => (
        <FadeIn
          key={item.src}
          delay={item.delay}
          duration={0.9}
          x={item.x}
          y={0}
          className={`pointer-events-none absolute z-0 opacity-70 sm:opacity-100 ${item.className}`}
        >
          <img src={item.src} alt={item.alt} loading="lazy" decoding="async" />
        </FadeIn>
      ))}

      <div className="relative z-10 flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
        <FadeIn as="h2" delay={0} y={40}>
          <span className="hero-heading block text-center text-[clamp(2.9rem,12vw,160px)] font-black uppercase leading-none tracking-tight">
            About me
          </span>
        </FadeIn>

        <div className="flex flex-col items-center gap-16 sm:gap-20 md:gap-24">
          <AnimatedText text={aboutText} />
          <ContactButton />
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section
      id="price"
      className="rounded-t-[40px] bg-white px-5 py-20 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32"
    >
      <FadeIn as="h2" y={40}>
        <span className="mb-16 block text-center text-[clamp(3rem,12vw,160px)] font-black uppercase leading-none tracking-tight text-[#0C0C0C] sm:mb-20 md:mb-28">
          Services
        </span>
      </FadeIn>

      <div className="mx-auto max-w-5xl">
        {services.map((service, index) => (
          <FadeIn
            key={service.number}
            delay={index * 0.1}
            className={`flex flex-col gap-3 border-t border-[rgba(12,12,12,0.15)] py-8 sm:flex-row sm:gap-8 sm:py-10 md:gap-12 md:py-12 ${
              index === services.length - 1
                ? "border-b border-[rgba(12,12,12,0.15)]"
                : ""
            }`}
          >
            <div className="text-[clamp(3rem,10vw,140px)] font-black leading-none text-[#0C0C0C] sm:min-w-[150px] md:min-w-[210px]">
              {service.number}
            </div>
            <div className="flex min-w-0 flex-col justify-center gap-3 text-[#0C0C0C]">
              <h3 className="text-[clamp(1rem,2.2vw,2.1rem)] font-medium uppercase leading-tight">
                {service.name}
              </h3>
              <p className="max-w-2xl text-[clamp(0.85rem,1.6vw,1.25rem)] font-light leading-relaxed opacity-60">
                {service.description}
              </p>
            </div>
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
  const enableStickyStack = useMediaQuery("(min-width: 768px)");
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "start 0.18"],
  });
  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div ref={ref} className="relative mb-8 h-auto md:mb-0 md:h-[85vh]">
      <motion.article
        className="relative rounded-[28px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:rounded-[50px] sm:p-6 md:sticky md:rounded-[60px] md:p-8 md:[--sticky-top:8rem]"
        style={{
          scale: enableStickyStack ? scale : 1,
          top: enableStickyStack
            ? `calc(var(--sticky-top) + ${index * 28}px)`
            : undefined,
        }}
      >
        <div className="mb-5 flex flex-col items-stretch justify-between gap-4 text-[#D7E2EA] sm:mb-6 md:mb-8 md:flex-row md:items-start">
          <div className="flex min-w-0 items-start gap-3 sm:gap-6 md:gap-8">
            <span className="text-[clamp(3rem,10vw,140px)] font-black leading-none">
              {project.number}
            </span>
            <div className="min-w-0 pt-2 sm:pt-4 md:pt-6">
              <p className="text-[0.68rem] font-medium uppercase tracking-[0.3em] opacity-60 sm:text-sm">
                {project.category}
              </p>
              <h3 className="mt-1 text-[clamp(1.45rem,4.4vw,4.6rem)] font-black uppercase leading-none tracking-tight">
                {project.name}
              </h3>
            </div>
          </div>
          <div className="pt-0 md:pt-5">
            <LiveProjectButton />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-[minmax(0,0.4fr)_minmax(0,0.6fr)]">
          <div className="grid gap-3">
            <img
              src={project.images[0]}
              alt={`${project.name} detail one`}
              className="h-[clamp(150px,38vw,230px)] w-full rounded-[26px] object-cover sm:rounded-[50px] md:rounded-[60px]"
              loading={index === 0 ? "eager" : "lazy"}
              decoding="async"
            />
            <img
              src={project.images[1]}
              alt={`${project.name} detail two`}
              className="h-[clamp(170px,45vw,340px)] w-full rounded-[26px] object-cover sm:rounded-[50px] md:rounded-[60px]"
              loading="lazy"
              decoding="async"
            />
          </div>
          <img
            src={project.images[2]}
            alt={`${project.name} hero`}
            className="h-[clamp(230px,60vw,360px)] w-full rounded-[26px] object-cover sm:h-full sm:min-h-[303px] sm:rounded-[50px] md:min-h-[clamp(390px,39vw,582px)] md:rounded-[60px]"
            loading={index === 0 ? "eager" : "lazy"}
            decoding="async"
          />
        </div>
      </motion.article>
    </div>
  );
}

function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative z-10 -mt-10 rounded-t-[40px] bg-[#0C0C0C] px-5 py-20 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:-mt-14 md:rounded-t-[60px] md:px-10 md:py-32"
    >
      <FadeIn as="h2" y={40}>
        <span className="hero-heading mb-16 block text-center text-[clamp(3rem,12vw,160px)] font-black uppercase leading-none tracking-tight sm:mb-20 md:mb-28">
          Project
        </span>
      </FadeIn>

      <div className="mx-auto max-w-7xl">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.number}
            project={project}
            index={index}
            total={projects.length}
          />
        ))}
      </div>
    </section>
  );
}

export default function App() {
  return (
    <main
      className="min-h-screen bg-[#0C0C0C] font-kanit"
      style={{ overflowX: "clip" }}
    >
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
    </main>
  );
}
