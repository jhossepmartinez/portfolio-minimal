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
    <section className="mb-12">
      <h2 className="text-sm font-medium text-gray-12 mb-4">Experience</h2>
      <div className="flex flex-col">
        {experiences.map((exp, i) => (
          <div key={i} className={`flex flex-col gap-1`}>
            <div className="flex items-baseline justify-between gap-4">
              <span className="text-sm text-gray-12">{exp.role}</span>
              <time className="text-xs text-gray-9 shrink-0">{exp.period}</time>
            </div>
            <p className="text-xs text-gray-10">{exp.company}</p>
            <div className={`${i !== experiences.length - 1 ? "pb-6" : ""}`}>
              {exp.description.map((desc, index) => (
                <p key={index} className="text-sm text-gray-11 mt-1">
                  • {desc}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
