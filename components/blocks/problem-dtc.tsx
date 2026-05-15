"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { useReducedMotion } from "@/lib/use-reduced-motion";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const stats = [
  {
    figure: "42",
    label: "countries",
    body: "have enacted or proposed social media bans or blanket restrictions targeting minors.",
  },
  {
    figure: "0%",
    label: "youth consultation",
    body: "of those bans were developed with meaningful youth consultation or participation.",
  },
  {
    figure: "100%",
    label: "of teens",
    body: "are subject to these laws — including those who rely on social media for survival.",
  },
];

const affected = [
  {
    glyph: "LGBTQ+",
    title: "Queer youth",
    body: "For many queer teens, social media is their only access to community, affirmation, and crisis resources — particularly in unsupportive homes or restrictive regions.",
  },
  {
    glyph: "MH",
    title: "Youth in crisis",
    body: "Teens using platforms to share trauma, find help, and reach mental-health resources lose those channels under blanket bans.",
  },
  {
    glyph: "EDU",
    title: "Low-income students",
    body: "Platforms are the primary education and networking infrastructure for youth without access to elite institutions or paid opportunities.",
  },
  {
    glyph: "GLB",
    title: "Youth across contexts",
    body: "From Australia to the UK to sub-Saharan Africa, restrictions play out differently — but the exclusion of youth voices from the process is universal.",
  },
];

function CountUp({ to, suffix = "", duration = 1.6 }: { to: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (!ref.current) return;
    if (reduced) {
      ref.current.textContent = `${to}${suffix}`;
      return;
    }
    const obj = { val: 0 };
    const tween = gsap.fromTo(
      obj,
      { val: 0 },
      {
        val: to,
        duration,
        ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 85%", once: true },
        onUpdate: () => {
          if (ref.current) ref.current.textContent = `${Math.round(obj.val)}${suffix}`;
        },
      },
    );
    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [to, suffix, duration, reduced]);

  return <span ref={ref}>0{suffix}</span>;
}

export function ProblemDtc() {
  const sectionRef = useRef<HTMLElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const leadRef = useRef<HTMLParagraphElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const affectedHeadingRef = useRef<HTMLDivElement>(null);
  const affectedGridRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (!sectionRef.current) return;
    if (reduced) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        [eyebrowRef.current, headingRef.current, leadRef.current],
        { y: 32, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%", once: true },
        },
      );

      const statBlocks = statsRef.current?.children;
      if (statBlocks) {
        gsap.fromTo(
          statBlocks,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
            stagger: 0.12,
            scrollTrigger: { trigger: statsRef.current, start: "top 80%", once: true },
          },
        );
      }

      gsap.fromTo(
        affectedHeadingRef.current,
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: affectedHeadingRef.current, start: "top 85%", once: true },
        },
      );

      const items = affectedGridRef.current?.children;
      if (items) {
        gsap.fromTo(
          items,
          { y: 32, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power3.out",
            stagger: 0.08,
            scrollTrigger: { trigger: affectedGridRef.current, start: "top 82%", once: true },
          },
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [reduced]);

  return (
    <section
      ref={sectionRef}
      id="problem"
      className="bg-background pt-24 pb-24 lg:pt-32 lg:pb-32"
    >
      <div className="px-6 sm:px-12 lg:px-24 max-w-360 2xl:max-w-450 3xl:max-w-550 mx-auto">
        <div ref={eyebrowRef} className="flex items-center gap-3 text-xs sm:text-sm font-medium tracking-[0.18em] uppercase text-foreground/50">
          <span className="inline-block h-px w-8 bg-foreground/30" />
          The Problem
        </div>

        <h2
          ref={headingRef}
          className="mt-6 text-[clamp(2rem,5.2vw,4.5rem)] font-medium leading-[1.04] tracking-tight text-foreground max-w-5xl"
        >
          Governments are writing laws about teens, online —{" "}
          <em className="not-italic text-foreground/40">without ever asking one.</em>
        </h2>

        <p
          ref={leadRef}
          className="mt-8 max-w-3xl text-base sm:text-lg text-foreground/60 leading-relaxed"
        >
          Sweeping age-based restrictions on internet access are being passed worldwide — banning
          teenagers from platforms, restricting their online lives — without consulting the people
          most affected. These are blunt, policy-first interventions with serious unintended
          consequences for vulnerable youth.
        </p>

        <div
          ref={statsRef}
          className="mt-16 lg:mt-20 grid grid-cols-1 md:grid-cols-3 gap-px bg-foreground/10 border-y border-foreground/10"
        >
          {stats.map((s) => {
            const numeric = parseInt(s.figure, 10);
            const suffix = s.figure.includes("%") ? "%" : "";
            return (
              <div key={s.label} className="bg-background p-8 lg:p-10 flex flex-col">
                <div className="text-[clamp(3.5rem,7vw,6rem)] font-medium leading-none tracking-tight text-foreground">
                  <CountUp to={numeric} suffix={suffix} />
                </div>
                <div className="mt-4 text-xs font-medium uppercase tracking-[0.18em] text-foreground/50">
                  {s.label}
                </div>
                <p className="mt-4 text-sm lg:text-base text-foreground/70 leading-relaxed max-w-sm">
                  {s.body}
                </p>
              </div>
            );
          })}
        </div>

        <div ref={affectedHeadingRef} className="mt-20 lg:mt-28 flex items-end justify-between gap-8 flex-wrap">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-foreground max-w-2xl">
            Who blanket restrictions hurt most.
          </h3>
          <p className="text-sm text-foreground/50 max-w-xs">
            Bans land hardest on the youth who already have the least.
          </p>
        </div>

        <div
          ref={affectedGridRef}
          className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
        >
          {affected.map((a, i) => (
            <div
              key={a.title}
              className={`py-8 lg:py-10 pr-6 ${
                i !== affected.length - 1 ? "lg:border-r border-foreground/10" : ""
              } ${i !== 0 ? "border-t lg:border-t-0 border-foreground/10" : "border-t border-foreground/10"}`}
            >
              <div className="text-[10px] font-mono tracking-[0.2em] text-foreground/40 mb-4">
                {String(i + 1).padStart(2, "0")} / {a.glyph}
              </div>
              <div className="text-lg font-medium text-foreground tracking-tight">
                {a.title}
              </div>
              <p className="mt-3 text-sm text-foreground/60 leading-relaxed">
                {a.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
