// Copy + pricing: Notion "Everything Brochure — Master Content" (approved July 1, 2026) —
// the canonical source; not on the local disk copies of the handoff/design docs, pulled directly.
// Shared between PackagesOrbit (scroll sequence) and PackagesRecap (list view) so both stay in sync.
export interface Package {
  cadence: string;
  name: string;
  tagline: string;
  body: string;
  standard: string;
  founding: string;
}

export const PACKAGES: Package[] = [
  {
    cadence: "One session · ~90 min",
    name: "First Look",
    tagline: "The place to start, if you're not sure where to start.",
    body: "We look at how your household actually runs today — where AI could genuinely help, and where it wouldn't. Honest, specific, no upsell. You leave with the AI Snapshot, a one-page personal read on where things stand and what to do next.",
    standard: "$245",
    founding: "$199",
  },
  {
    cadence: "Three sessions · 2–4 weeks",
    name: "The Setup",
    tagline: "The core of what we do — a household actually running on AI.",
    body: "Calendars, email, meal planning, grocery routines — the obvious stuff — plus the things people mean to deal with and never do: appliance and maintenance tracking, household documents, emergency prep. You leave with the Household Playbook.",
    standard: "$750",
    founding: "$699",
  },
  {
    cadence: "Two sessions · 1 hr each",
    name: "Scholar Ready",
    tagline: "Real AI fluency for college-bound teens, inside the lines that matter.",
    body: "Research workflows, citation tools, and writing process, built around the PLAINLY curriculum: practical tool literacy, never subject tutoring, always inside academic-integrity guidelines. You leave with the Student Toolkit and a self-authored AI Use Agreement.",
    standard: "$450",
    founding: "$400",
  },
  {
    cadence: "Four sessions",
    name: "The Household",
    tagline: "Everything, for everyone in the house, at once.",
    body: "A First Look session to map the whole household, then the three Setup sessions built around what we learn — plus multi-user/device setup, a travel-planning toolkit, and a start on organizing family photos and documents. (Scholar Ready is available as an add-on.)",
    standard: "$1,350",
    founding: "$1,250",
  },
  {
    cadence: "Monthly retainer",
    name: "In Residence",
    tagline: "The household keeps getting more capable, not just maintained.",
    body: "Available once you've completed The Setup, Scholar Ready, or The Household. One 30–45 minute check-in a month, plus async questions and priority response in between. Three-month minimum. You get a quarterly AI Horizon briefing.",
    standard: "$500 upfront + $199/mo",
    founding: "upfront waived",
  },
];
