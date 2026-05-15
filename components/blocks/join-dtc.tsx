"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { useReducedMotion } from "@/lib/use-reduced-motion";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const steps = [
  {
    n: "01",
    title: "Apply via LinkedIn or Discord",
    body: "Drop into our Discord or reach out on LinkedIn. We review every applicant ourselves — no automated filter, no university gatekeeping.",
  },
  {
    n: "02",
    title: "Pick a track, or pitch your own",
    body: "Choose from active research questions inside digital youth policy, or bring your own — we'll help you scope it.",
  },
  {
    n: "03",
    title: "Get paid to do real research",
    body: "$50–75 per researcher, per cycle. IRB-approved methodology, real co-authorship, real bylines — not unpaid \"experience.\"",
  },
  {
    n: "04",
    title: "Publish + advocate",
    body: "Open-access publishing, peer-reviewed submissions, journalist outreach, and direct briefings into UN bodies like HLPF and ECOSOC.",
  },
];

const tracks = [
  "Platform bans & marginalized youth",
  "Age-verification policy",
  "Algorithmic harms",
  "Online speech & dissent",
  "AI governance for minors",
  "Privacy & consent regimes",
];

const facts = [
  { k: "Who", v: "High-school-aged researchers, globally." },
  { k: "Stipend", v: "$50–75 per researcher, per cycle." },
  { k: "Time", v: "~4–8 hrs/week across a research cycle." },
  { k: "Mentorship", v: "IRB, legal, and academic mentors paired per track." },
];

export function JoinDtc() {
  const sectionRef = useRef<HTMLElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLOListElement>(null);
  const tracksRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (!sectionRef.current) return;
    if (reduced) return;

    const ctx = gsap.context(() => {
      const headChildren = headRef.current?.children;
      if (headChildren) {
        gsap.fromTo(
          headChildren,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.85,
            ease: "power3.out",
            stagger: 0.1,
            scrollTrigger: { trigger: sectionRef.current, start: "top 75%", once: true },
          },
        );
      }

      const stepItems = stepsRef.current?.children;
      if (stepItems) {
        gsap.fromTo(
          stepItems,
          { y: 28, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.75,
            ease: "power3.out",
            stagger: 0.08,
            scrollTrigger: { trigger: stepsRef.current, start: "top 80%", once: true },
          },
        );
      }

      gsap.fromTo(
        tracksRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: { trigger: tracksRef.current, start: "top 82%", once: true },
        },
      );

      gsap.fromTo(
        ctaRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: { trigger: ctaRef.current, start: "top 85%", once: true },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [reduced]);

  return (
    <section
      ref={sectionRef}
      id="join"
      className="bg-background pt-24 pb-24 lg:pt-32 lg:pb-32"
    >
      <div className="px-6 sm:px-12 lg:px-24 max-w-360 2xl:max-w-450 3xl:max-w-550 mx-auto">
        {/* Header */}
        <div ref={headRef} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 text-xs sm:text-sm font-medium tracking-[0.18em] uppercase text-foreground/50">
              <span className="inline-block h-px w-8 bg-foreground/30" />
              Join the Lab
            </div>
            <h2 className="mt-6 text-[clamp(2rem,5.2vw,4.5rem)] font-medium leading-[1.04] tracking-tight text-foreground">
              Stop being the subject of the research.{" "}
              <em className="not-italic text-foreground/40">Become the researcher.</em>
            </h2>
          </div>
          <p className="lg:col-span-5 lg:pt-10 text-base sm:text-lg text-foreground/60 leading-relaxed">
            DTC pays teen researchers to lead IRB-approved policy research on the laws that govern
            their own online lives. We&apos;re recruiting now for the 2026 cycle. No prior research
            experience required — only that you take the work seriously.
          </p>
        </div>

        {/* Facts strip */}
        <dl className="mt-16 lg:mt-20 grid grid-cols-2 lg:grid-cols-4 border-y border-foreground/10">
          {facts.map((f, i) => (
            <div
              key={f.k}
              className={`py-6 lg:py-8 px-1 ${
                i !== facts.length - 1 ? "lg:border-r border-foreground/10" : ""
              } ${i % 2 === 0 ? "sm:border-r border-foreground/10 lg:border-r" : ""}`}
            >
              <dt className="text-[10px] font-mono tracking-[0.2em] uppercase text-foreground/40">
                {f.k}
              </dt>
              <dd className="mt-3 text-sm lg:text-base font-medium text-foreground leading-snug">
                {f.v}
              </dd>
            </div>
          ))}
        </dl>

        {/* Steps */}
        <div className="mt-20 lg:mt-28 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-4">
            <div className="text-xs font-mono tracking-[0.2em] uppercase text-foreground/40">
              How it works
            </div>
            <h3 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-foreground leading-tight">
              Four steps from <em className="not-italic text-foreground/40">applicant</em> to{" "}
              <em className="not-italic text-foreground/40">co-author.</em>
            </h3>
          </div>

          <ol ref={stepsRef} className="lg:col-span-8 flex flex-col">
            {steps.map((s) => (
              <li
                key={s.n}
                className="group grid grid-cols-[auto_1fr] gap-6 lg:gap-10 py-7 lg:py-8 border-t border-foreground/10 last:border-b"
              >
                <div className="text-base font-mono tracking-wider text-foreground/40 pt-1.5">
                  {s.n}
                </div>
                <div>
                  <div className="text-lg lg:text-xl font-medium tracking-tight text-foreground">
                    {s.title}
                  </div>
                  <p className="mt-2 text-sm lg:text-base text-foreground/60 leading-relaxed max-w-2xl">
                    {s.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Tracks */}
        <div ref={tracksRef} className="mt-20 lg:mt-28">
          <div className="flex items-end justify-between gap-8 flex-wrap">
            <div>
              <div className="text-xs font-mono tracking-[0.2em] uppercase text-foreground/40">
                Open research tracks · 2026
              </div>
              <h3 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-foreground">
                What you might work on.
              </h3>
            </div>
            <p className="text-sm text-foreground/50 max-w-xs">
              Or pitch your own — if it sits inside digital youth policy, we&apos;ll consider it.
            </p>
          </div>

          <ul className="mt-10 flex flex-wrap gap-3">
            {tracks.map((t) => (
              <li
                key={t}
                className="px-4 py-2 rounded-full border border-foreground/15 text-sm text-foreground/80 hover:bg-foreground hover:text-background hover:border-foreground transition-colors"
              >
                {t}
              </li>
            ))}
          </ul>
        </div>

        {/* CTA block */}
        <div
          ref={ctaRef}
          className="mt-20 lg:mt-28 rounded-3xl bg-foreground text-background p-8 sm:p-12 lg:p-16 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10"
        >
          <div className="max-w-2xl">
            <div className="text-xs font-mono tracking-[0.2em] uppercase text-background/50">
              Recruiting · 2026 cycle
            </div>
            <h3 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.05]">
              The 2026 cycle is open.{" "}
              <span className="text-background/50">Come build it with us.</span>
            </h3>
            <p className="mt-6 text-base sm:text-lg text-background/70 leading-relaxed">
              Join the Discord to talk to current researchers, see open tracks, and start your
              application. We respond to every applicant.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 lg:shrink-0">
            <Link
              href="https://discord.gg/8GFq3pqp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-7 py-4 rounded-full bg-background text-foreground text-base font-medium transition-opacity hover:opacity-90"
            >
              Join the Discord
              <svg className="ml-2 w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </Link>
            <a
              href="mailto:hello@dtcpolicylab.org?subject=DTC%20Researcher%20Application"
              className="inline-flex items-center justify-center px-7 py-4 rounded-full border border-background/30 text-background text-base font-medium transition-colors hover:bg-background/10"
            >
              Email an application
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
