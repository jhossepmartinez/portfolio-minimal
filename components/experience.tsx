type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  description: string[];
};

const experiences: ExperienceItem[] = [
  {
    company: "KLog.co",
    role: "Software Engineer",
    period: "Sept. 2024 - Feb. 2026",
    description: [
      "Led the design and implementation of the next-generation web API, transitioning the system to DCSA standards for logistics.",
      "Architected the API to efficiently process over 100,000 requests per day.",
      "Reduced customer support tickets by designing a self-service-focused architecture with standardized, self-explanatory error messages.",
      "Secured API access by implementing a robust OAuth authentication flow.",
    ],
  },
  {
    company: "USAFE",
    role: "Software Engineer",
    period: "Mar. 2025 - Dec. 2025",
    description: [
      "Led a team of 6 engineers to develop a safe-routes platform encompassing an Android app, backend services, and an admin portal.",
      "Mentored team members and managed task allocation to ensure timely project delivery.",
      "Designed the Express.js backend infrastructure and orchestrated containerized deployments using Docker and Google Cloud Run.",
    ],
  },
  {
    company: "Universidad Tecnica Federico Santa Maria",
    role: "Teaching Assistant",
    period: "Mar. 2024 - Jan. 2025",
    description: [
      "Curated engaging supplemental content and mentored 20+ students in the Programming Languages course.",
    ],
  },
];

export function Experience() {
  return (
    <div className="flex flex-col gap-4">
      {experiences.map((exp, i) => (
        <article
          key={i}
          className="rounded-lg border border-gray-4/80 bg-gray-2/40 p-4"
        >
          <div className="mb-3 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <h3 className="text-sm font-medium text-gray-12">{exp.role}</h3>
            <time className="text-xs text-gray-9">{exp.period}</time>
          </div>
          <p className="mb-3 text-xs text-gray-10">{exp.company}</p>
          <ul className="space-y-1.5">
            {exp.description.map((desc, index) => (
              <li key={index} className="text-sm leading-6 text-gray-11">
                {desc}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
