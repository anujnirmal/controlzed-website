import { notFound } from "next/navigation";

const projects = {
  mysaathi: {
    title: "YCF Saathi: a React Native app for film workers",
    label: "YCF Saathi · Yash Chopra Foundation · React Native",
    intro: "I built the YCF Saathi mobile app in React Native for Yash Chopra Foundation. It helps film workers access benefits through their Saathi Card and stay informed about schemes and programs.",
    challenge: "Film workers needed an easier way to find information about Saathi Card benefits, including healthcare, education support and household utilities.",
    approach: "I built the mobile experience in React Native to help people access Saathi Card benefits and find information about the Foundation’s schemes and programs in one app.",
    outcome: "The public Google Play listing currently shows 5K+ downloads. This is the app’s download band, not monthly active users. The wider support platform’s user figures are separate and are not used here.",
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
    title: "Event registration platform for UNYCC",
    label: "UNYCC · MERN registration platform",
    intro: "I built the MERN event platform for the United Nations Young Change Makers Conclave in Mumbai.",
    challenge: "Organizers needed an event registration platform for an event expected to reach up to 40,000.",
    approach: "I built the event registration platform solo in MERN.",
    outcome: "The platform processed approximately 1,000 registrations. The event was expected to reach up to 40,000; that expected reach is not the number of registrations processed.",
    color: "bg-[#1b1020] border border-[#ff58c7]/30",
  },
  "private-ngo": {
    title: "NGO management software for donors and beneficiaries",
    label: "Private client · NGO management software · Client identity withheld",
    intro: "For a private client, I built an NGO management system with dedicated donor and beneficiary management, donation and payment management, and donor reporting. The client identity and project artifacts remain private.",
    challenge: "The organization needed one system to manage its donor and beneficiary records, donation and payment workflows, and donor reports.",
    approach: "I built custom modules for donor management, beneficiary management, donation management, payment management, and donor reports. Project-specific technology and implementation details are not public.",
    outcome: "No client link or public performance metrics are available for this private project. Controlzed has approved these work categories for anonymous description.",
    color: "bg-[#151024] border border-[#a35bff]/35",
  },
  "private-events": {
    title: "Event planning and management software",
    label: "Private client · Event management software · Client identity withheld",
    intro: "For a private client, I built software for end-to-end event planning and management. The client identity, project artifacts, and implementation details remain private.",
    challenge: "The client needed software to support event planning and management from end to end.",
    approach: "I built custom event-management software for the client's event-planning work. The client's identity, specific implementation details, and project technology are not public.",
    outcome: "No client link or public performance metrics are available for this private project. Controlzed has approved this work category for anonymous description.",
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
      {slug === "mysaathi" && <div className="mx-auto mt-12 max-w-5xl border-t border-white/15 pt-8 md:pl-[268px]"><a className="inline-flex items-center gap-3 rounded-full bg-[#56f6ff] px-5 py-3 text-sm font-semibold text-[#080611]" href="https://play.google.com/store/apps/details?id=com.mysaathi.yashchoprafoundation.com&hl=en_IN" target="_blank" rel="noreferrer">View YCF Saathi on Google Play ↗</a><p className="mt-3 text-sm text-white/45">Public listing and download band; downloads are not monthly active users.</p></div>}
    </section><footer className="bg-[#100c1d] border border-[#56f6ff]/25 px-5 py-12 text-white md:px-10"><div className="mx-auto flex max-w-[1360px] flex-col justify-between gap-8 md:flex-row md:items-end"><h2 className="display text-5xl md:text-7xl">Have a good<br/>problem?</h2><a className="rounded-full bg-[#56f6ff] px-6 py-3 text-sm font-semibold text-[#080611]" href="mailto:anuj@controlzedlabs.com">Let’s talk ↗</a></div></footer>
  </main>;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects[slug as keyof typeof projects];
  return { title: project ? `${project.title} — Controlzed Labs` : "Project — Controlzed Labs", description: project?.intro };
}
