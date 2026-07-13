export interface InputField {
  key: string
  label: string
  type: 'input' | 'textarea' | 'select'
  placeholder?: string
  options?: string[]
}

export const PRODUCT = {
  name: "GeoVisor",
  slug: "geovisor",
  tagline: "See how AI answers cite your brand before competitors do.",
  description: "GeoVisor continuously tracks whether and how AI answer engines cite your brand versus competitors, then surfaces the highest-priority fixes to win more AI-driven discovery.",
  toolTitle: "AI Search Visibility Audit",
  resultLabel: "Visibility Report",
  ctaLabel: "Run Audit",
  features: [
  "Audit your brand's visibility across major AI search engines",
  "Get a GEO score with actionable optimization tips",
  "Detect citation and mention gaps versus competitors",
  "Receive a prioritized fix checklist"
],
  inputs: [
  {
    "key": "target_query",
    "label": "Target Query or Brand",
    "type": "text",
    "placeholder": "e.g. best project management tools"
  },
  {
    "key": "website_url",
    "label": "Your Website URL",
    "type": "text",
    "placeholder": "https://your-site.com"
  },
  {
    "key": "search_engine",
    "label": "AI Search Engine",
    "type": "select",
    "options": [
      "ChatGPT",
      "Perplexity",
      "Google AI Overviews",
      "All"
    ]
  }
] as InputField[],
  systemPrompt: "You are GeoVisor, an expert in Generative Engine Optimization (GEO) and AI-search visibility. Given a brand or topic, a website URL, and a target AI search engine, assess how likely the brand is to be cited or surfaced by AI search. Always structure your response as: (1) a GEO visibility score from 0-100, (2) a one-line verdict, (3) the top 3 visibility issues, and (4) 3-5 prioritized optimization actions. Be specific and reason about likely AI-search behavior. In demo (mock) mode, return a realistic sample report following exactly this structure.",
  pricing: [
  {
    "tier": "Free",
    "price": "$0",
    "desc": "Limited scans/mo"
  },
  {
    "tier": "Pro",
    "price": "$39/mo",
    "desc": "Full audit + export + history"
  }
],
  mock: (inputs: Record<string, string>): string => {
  const q = (inputs['target_query'] || '').trim()
  const url = (inputs['website_url'] || '').trim()
  const eng = inputs['search_engine'] || 'All'
  if (!q && !url) return 'Enter a brand or topic and your website URL to run the audit.'
  const score = 62
  let out = 'AI SEARCH VISIBILITY AUDIT - ' + eng + '\n\n'
  out += 'GEO Score: ' + score + '/100\n'
  out += 'Verdict: Your brand is occasionally cited, but missing from the top AI answers in your category.\n\n'
  out += 'Top 3 visibility issues:\n'
  out += '  1. Low entity authority - AI engines rarely associate your brand with "' + (q || 'your topic') + '"\n'
  out += '  2. Thin citation-worthy content (no comparison / FAQ pages)\n'
  out += '  3. Competitors dominate "best X" answers\n\n'
  out += 'Prioritized optimization actions:\n'
  out += '  - Publish a comparison page targeting the exact query cluster\n'
  out += '  - Add FAQ schema + concise definitions AI can quote\n'
  out += '  - Earn 2-3 authoritative backlinks from industry sites\n'
  out += '\n--- (Mock demo. Pro unlocks full brand-citation audit, export and history.)'
  return out
}
}
