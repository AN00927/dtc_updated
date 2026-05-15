"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { useReducedMotion } from "@/lib/use-reduced-motion";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const rows = [
  {
    label: "Leadership",
    value:
      "DTC is teen-led: research direction, publishing decisions, and external advocacy sit with our youth team. Adult mentors advise; they do not steer.",
  },
  {
    label: "Advisory & mentors",
    value:
      "Legal, IRB, and academic mentors are paired per research track. We are actively recruiting more mentors in digital-policy law, ethics, and peer-review.",
  },
  {
    label: "Research ethics",
    value:
      "All primary research goes through an IRB-approved methodology before data collection. Studies involving minors use age-appropriate consent and assent procedures.",
  },
  {
    label: "Data & safeguarding",
    value:
      "We minimise data collection from minors, store identifiers separately, and never publish material that could re-identify a participant. Withdrawal is honoured at any stage.",
  },
  {
    label: "Open access",
    value:
      "Findings are published open-access first, with full methodology and data statements wherever ethically possible.",
  },
  {
    label: "Contact ownership",
    value:
      "Org email and applications route to a named adult-of-record alongside the youth leadership, so applicants always have a clear point of accountability.",
  },
];

export function GovernanceDtc() {
  const sectionRef = useRef<HTMLElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDListElement>(null);
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
            scrollTrigger: { trigger: sectionRef.current, start: "top 78%", once: true },
          },
        );
      }

      const items = listRef.current?.querySelectorAll("[data-gov-row]");
      if (items) {
        gsap.fromTo(
          items,
          { y: 24, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power3.out",
            stagger: 0.06,
            scrollTrigger: { trigger: listRef.current, start: "top 82%", once: true },
          },
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [reduced]);

  return (
    <section
      ref={sectionRef}
      id="governance"
      className="bg-background pt-8 pb-24 lg:pb-32"
    >
      <div className="px-6 sm:px-12 lg:px-24 max-w-360 2xl:max-w-450 3xl:max-w-550 mx-auto">
        <div ref={headRef} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 text-xs sm:text-sm font-medium tracking-[0.18em] uppercase text-foreground/50">
              <span className="inline-block h-px w-8 bg-foreground/30" />
              Trust &amp; governance
            </div>
            <h2 className="mt-6 text-[clamp(1.75rem,4vw,3rem)] font-medium leading-[1.08] tracking-tight text-foreground">
              Teen-led isn&apos;t the same as ungoverned.
            </h2>
          </div>
          <p className="lg:col-span-5 lg:pt-6 text-base text-foreground/60 leading-relaxed">
            DTC works with minors, sensitive policy data, and high-stakes publishing. Here&apos;s how
            we set that up so it&apos;s safe, transparent, and ours to own.
          </p>
        </div>

        <dl
          ref={listRef}
          className="mt-12 lg:mt-16 grid grid-cols-1"
        >
          {rows.map((r, i) => (
            <div
              key={r.label}
              data-gov-row
              className={`grid grid-cols-1 lg:grid-cols-12 gap-2 lg:gap-12 py-6 lg:py-7 border-b border-foreground/10 ${
                i === 0 ? "border-t" : ""
              }`}
            >
              <dt className="lg:col-span-3 text-xs font-mono tracking-[0.2em] uppercase text-foreground/50 pt-1">
                {r.label}
              </dt>
              <dd className="lg:col-span-9 text-base lg:text-lg text-foreground/85 leading-relaxed max-w-3xl">
                {r.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
