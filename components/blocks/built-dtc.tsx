"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { useReducedMotion } from "@/lib/use-reduced-motion";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type Entry = {
  n: string;
  title: string;
  body: string;
  status: string;
  year: string;
  kind: string;
};

const entries: Entry[] = [
  {
    n: "01",
    title: "Global Teen Restriction Database",
    body: "The first systematic effort to map social media bans and blanket restrictions affecting teens across countries and platforms — built for policy and advocacy use.",
    status: "Live · v1",
    year: "2024 – present",
    kind: "Database",
  },
  {
    n: "02",
    title: "Blanket Restrictions & Marginalized Youth",
    body: "Original research on the real-world impacts of age-based platform bans on vulnerable youth. Currently under peer review at the Taylor & Francis Social Sciences journal.",
    status: "Under peer review",
    year: "2025 – 2026",
    kind: "Paper",
  },
  {
    n: "03",
    title: "UN Website Ageism Audit",
    body: "Identification of discriminatory access patterns across UN and UN-affiliated websites, plus initiation of a UN-wide ageism study using automation-assisted methods.",
    status: "In progress",
    year: "2025 – 2026",
    kind: "Audit",
  },
  {
    n: "04",
    title: "Opportunity-Mapping Database",
    body: "A structured database separating under-18 and 18+ access pathways across global platforms and institutions — making youth-accessible opportunities discoverable.",
    status: "Live · expanding",
    year: "2024 – present",
    kind: "Database",
  },
];

export function BuiltDtc() {
  const sectionRef = useRef<HTMLElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLOListElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (!sectionRef.current) return;
    if (reduced) return;

    const ctx = gsap.context(() => {
      const headChildren = headRef.current?.children;
      if (headChildren) {
        gsap.fromTo(
          headChildren,
          { y: 28, opacity: 0 },
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

      const rows = listRef.current?.querySelectorAll("[data-row]");
      if (rows && rows.length) {
        rows.forEach((row, i) => {
          gsap.fromTo(
            row,
            { y: 36, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              ease: "power3.out",
              delay: i * 0.06,
              scrollTrigger: { trigger: row, start: "top 88%", once: true },
            },
          );
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [reduced]);

  return (
    <section
      ref={sectionRef}
      id="built"
      className="bg-background pt-24 pb-24 lg:pt-32 lg:pb-32"
    >
      <div className="px-6 sm:px-12 lg:px-24 max-w-360 2xl:max-w-450 3xl:max-w-550 mx-auto">
        <div ref={headRef} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 text-xs sm:text-sm font-medium tracking-[0.18em] uppercase text-foreground/50">
              <span className="inline-block h-px w-8 bg-foreground/30" />
              What we&apos;ve already built
            </div>
            <h2 className="mt-6 text-[clamp(2rem,5.2vw,4.5rem)] font-medium leading-[1.04] tracking-tight text-foreground">
              Before a single funded researcher.{" "}
              <em className="not-italic text-foreground/40">Here&apos;s the body of work.</em>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pt-10">
            <p className="text-base sm:text-lg text-foreground/60 leading-relaxed">
              DTC has spent three years embedded inside the UN policy track, building primary
              research, databases, and audits that policymakers and journalists actually use.
            </p>
            <div className="mt-6 flex items-center gap-6 text-xs font-mono tracking-[0.18em] uppercase text-foreground/40">
              <span>04 outputs</span>
              <span className="h-px flex-1 bg-foreground/15" />
              <span>2024 – 2026</span>
            </div>
          </div>
        </div>

        {/* Ledger header (desktop) */}
        <div className="hidden lg:grid mt-16 lg:mt-20 grid-cols-12 gap-6 pb-4 border-b border-foreground/20 text-[10px] font-mono tracking-[0.2em] uppercase text-foreground/40">
          <div className="col-span-1">No.</div>
          <div className="col-span-5">Title</div>
          <div className="col-span-2">Kind</div>
          <div className="col-span-2">Status</div>
          <div className="col-span-2 text-right">Span</div>
        </div>

        <ol ref={listRef} className="mt-0 lg:mt-0">
          {entries.map((e) => (
            <li
              key={e.n}
              data-row
              className="group relative border-b border-foreground/15 first:border-t lg:first:border-t-0 py-8 lg:py-10 transition-colors hover:bg-foreground/[0.02]"
            >
              {/* Mobile / compact */}
              <div className="lg:hidden">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono tracking-[0.2em] text-foreground/40">
                    {e.n}
                  </span>
                  <span className="text-[10px] font-mono tracking-[0.18em] uppercase text-foreground/50">
                    {e.status}
                  </span>
                </div>
                <h3 className="mt-3 text-2xl sm:text-3xl font-medium tracking-tight text-foreground leading-tight">
                  {e.title}
                </h3>
                <p className="mt-3 text-sm text-foreground/60 leading-relaxed">{e.body}</p>
                <div className="mt-4 flex items-center gap-4 text-[10px] font-mono tracking-[0.18em] uppercase text-foreground/40">
                  <span>{e.kind}</span>
                  <span className="h-px flex-1 bg-foreground/10" />
                  <span>{e.year}</span>
                </div>
              </div>

              {/* Desktop ledger row */}
              <div className="hidden lg:grid grid-cols-12 gap-6 items-start">
                <div className="col-span-1 pt-1">
                  <span className="text-base font-mono tracking-wider text-foreground/40 group-hover:text-foreground transition-colors">
                    {e.n}
                  </span>
                </div>
                <div className="col-span-5">
                  <h3 className="text-[clamp(1.5rem,2.2vw,2.25rem)] font-medium tracking-tight text-foreground leading-[1.1]">
                    {e.title}
                  </h3>
                  <p className="mt-3 text-sm xl:text-base text-foreground/60 leading-relaxed max-w-xl">
                    {e.body}
                  </p>
                </div>
                <div className="col-span-2 pt-2 text-sm text-foreground/70">{e.kind}</div>
                <div className="col-span-2 pt-2">
                  <span className="inline-flex items-center gap-2 text-sm text-foreground/80">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-foreground/50 group-hover:bg-foreground transition-colors" />
                    {e.status}
                  </span>
                </div>
                <div className="col-span-2 pt-2 text-right text-sm font-mono tracking-wider text-foreground/50">
                  {e.year}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
