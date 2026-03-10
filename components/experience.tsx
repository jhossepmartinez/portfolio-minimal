"use client";

import { BorderTrail } from "@/components/motion-primitives/border-trail";
import { InView } from "@/components/motion-primitives/in-view";

type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  description: string;
};

const experiences: ExperienceItem[] = [
  {
    company: "Company",
    role: "Senior Software Engineer",
    period: "2023 — Present",
    description:
      "Building scalable distributed systems and leading technical architecture decisions.",
  },
  {
    company: "Company",
    role: "Software Engineer",
    period: "2021 — 2023",
    description:
      "Developed and maintained core platform services handling millions of requests.",
  },
  {
    company: "Company",
    role: "Junior Software Engineer",
    period: "2019 — 2021",
    description:
      "Built internal tools and contributed to the frontend design system.",
  },
];

export function Experience() {
  return (
    <section className="mb-8">
      <h2 className="text-sm font-medium text-gray-12 mb-4">Experience</h2>
      <div className="flex flex-col gap-3">
        {experiences.map((exp, i) => (
          <InView
            key={i}
            variants={{
              hidden: { opacity: 0, y: 8 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.3, ease: "easeOut", delay: i * 0.08 }}
            once
          >
            <div className="group relative rounded-lg border border-gray-4 bg-gray-2 p-4 transition-colors hover:border-gray-6 hover:bg-gray-3">
              <BorderTrail
                className="bg-gradient-to-l from-gray-7 via-gray-9 to-gray-7"
                size={60}
                transition={{
                  repeat: Infinity,
                  duration: 8 + i * 2,
                  ease: "linear",
                }}
              />
              <div className="flex items-baseline justify-between gap-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-12">
                    {exp.role}
                  </h3>
                  <p className="text-xs text-gray-10">{exp.company}</p>
                </div>
                <time className="text-xs text-gray-9 shrink-0">
                  {exp.period}
                </time>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-gray-11">
                {exp.description}
              </p>
            </div>
          </InView>
        ))}
      </div>
    </section>
  );
}
