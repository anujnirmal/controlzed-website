import { notFound } from "next/navigation";

const projects = {
  mysaathi: {
    title: "A safer future for film workers",
    label: "MySaathi · Digital services",
    intro: "In a fast-moving film industry, workers often struggled to access essential support. With the Yash Chopra Foundation, we helped bring insurance, ration support and education services into one accessible digital experience.",
    challenge: "Processes were largely offline, difficult to navigate and slow. Documentation created a heavy administrative burden for workers and industry stakeholders alike.",
    approach: "We shaped a centralized platform around real needs: insurance access, ration distribution, education sponsorship, tutorials and multilingual support. We digitized documents, automated workflows and focused on a welcoming, easy-to-use interface.",
    outcome: "The platform reached nearly 20,000 users and exceeded 1,000 daily users. Onboarding events, practical education, in-person assistance and continuous feedback helped the service grow with its community.",
    color: "bg-[#101d16] border border-[#d6ff3f]/25",
  },
  "karma-kundli": {
    title: "People operations, reimagined",
    label: "Karma Kundli · HRMS",
    intro: "Workverse needed a clearer way to support its growing internal team. Karma Kundli brings people operations into one practical, connected system.",
    challenge: "Employee records, expenses, attendance and payroll were spread across manual processes, creating delays and making it harder to see the whole picture.",
    approach: "We built a connected HRMS for employee management, expense tracking, attendance, payroll and the Kamai Token recognition program. The experience was designed to make everyday operations easier for both employees and managers.",
    outcome: "Centralized data and automation reduced repetitive work, improved visibility and gave Workverse a scalable foundation for growth. Kamai Token added a clear way to recognize and reward employee contributions.",
    color: "bg-[#151024] border border-[#a35bff]/35",
  },
  unycc: {
    title: "40,000 people. One seamless event.",
    label: "UNYCC · Event platform",
    intro: "The United Nations Young Change Makers Conclave needed a dependable digital experience for a large, high-security gathering in Mumbai.",
    challenge: "More than 40,000 registrations were anticipated, with attendee information, document collection and strict venue security requirements to coordinate.",
    approach: "We worked closely with stakeholders to map the registration journey, then delivered online registration, real-time validation, e-ticket generation and a centralized management dashboard. The system was designed for scale, security and responsive access.",
    outcome: "Organizers gained a clearer view of registrations and ticket allocation, while attendees could complete sign-up and receive their event ticket digitally. The platform supported an event designed to bring change makers together.",
    color: "bg-[#1b1020] border border-[#ff58c7]/30",
  },
};

export function generateStaticParams() { return Object.keys(projects).map((slug) => ({ slug })); }

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects[slug as keyof typeof projects];
  if (!project) notFound();
  return <main className="min-h-screen bg-[#080611] text-[#f7f4ff]">
    <header className="mx-auto flex max-w-[1360px] items-center justify-between px-5 py-5 md:px-10"><a href="/" className="flex items-center gap-2.5"><span className="grid h-8 w-8 place-items-center rounded-full bg-[#56f6ff] text-sm font-black">cz</span><span className="text-sm font-semibold">controlzed <span className="font-normal text-white/45">labs</span></span></a><a href="/#work" className="text-sm">← All work</a></header>
    <section className="mx-auto max-w-[1360px] px-5 pb-20 pt-20 md:px-10 md:pt-32"><p className="mono mb-8 text-[10px] text-[#56f6ff]">{project.label}</p><h1 className="display max-w-5xl text-6xl leading-[.9] md:text-9xl">{project.title}</h1><p className="mt-10 max-w-2xl text-xl leading-relaxed text-white/65">{project.intro}</p><div className={`relative mt-16 grid min-h-[360px] place-items-center overflow-hidden ${project.color}`}><div className="absolute inset-0 grid-bg opacity-70"/><div className="float relative grid h-52 w-52 place-items-center rounded-[2.5rem] bg-[#100c1d] border border-[#56f6ff]/25 text-5xl text-[#d6ff3f] shadow-2xl">✳<span className="absolute bottom-6 mono text-[9px] text-white">controlzed labs</span></div></div>
      <div className="mx-auto mt-20 grid max-w-5xl gap-12 border-t border-white/15 pt-10 md:grid-cols-[220px_1fr]"><p className="mono text-[10px]">The challenge</p><p className="text-xl leading-relaxed">{project.challenge}</p></div><div className="mx-auto mt-12 grid max-w-5xl gap-12 border-t border-white/15 pt-10 md:grid-cols-[220px_1fr]"><p className="mono text-[10px]">The approach</p><p className="text-xl leading-relaxed">{project.approach}</p></div><div className="mx-auto mt-12 grid max-w-5xl gap-12 border-t border-white/15 pt-10 md:grid-cols-[220px_1fr]"><p className="mono text-[10px]">The outcome</p><p className="text-xl leading-relaxed">{project.outcome}</p></div>
    </section><footer className="bg-[#100c1d] border border-[#56f6ff]/25 px-5 py-12 text-white md:px-10"><div className="mx-auto flex max-w-[1360px] flex-col justify-between gap-8 md:flex-row md:items-end"><h2 className="display text-5xl md:text-7xl">Have a good<br/>problem?</h2><a className="rounded-full bg-[#56f6ff] px-6 py-3 text-sm font-semibold text-[#080611]" href="mailto:anuj@controlzed.in">Let’s talk ↗</a></div></footer>
  </main>;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects[slug as keyof typeof projects];
  return { title: project ? `${project.title} — Controlzed Labs` : "Project — Controlzed Labs", description: project?.intro };
}
