# Roadmap: AEO/GEO Optimization Project

## Overview

This roadmap transforms an existing Next.js portfolio (12 workflow articles + 3 case studies) into an AI-search-optimized lead generation engine. The journey progresses from technical foundation (crawler access, sitemap) through structured data implementation (Schema.org types) and content enhancement (citations, statistics, E-E-AT signals) to conversion optimization. Each phase delivers observable improvements in AI search visibility, building toward the goal of 10 inquiries per week within 1 month.

## Phases

**Phase Numbering:**
- Integer phases (1, 2, 3): Planned milestone work
- Decimal phases (2.1, 2.2): Urgent insertions (marked with INSERTED)

Decimal phases appear between their surrounding integers in numeric order.

- [x] **Phase 1: Technical Foundation** - AI crawler access and sitemap infrastructure ✓
- [x] **Phase 2: Entity Foundation** - Organization and Person schemas for site-wide identity ✓
- [x] **Phase 3: Content Structure** - Paragraph optimization and heading hierarchy ✓
- [x] **Phase 4: Article Schema** - Article markup with publication dates ✓
- [x] **Phase 5: E-E-AT Signals** - Author profiles and expertise display ✓
- [x] **Phase 6: FAQ System** - FAQ content creation and FAQPage schema ✓
- [x] **Phase 7: Citations & Statistics** - Content credibility enhancement ✓
- [x] **Phase 8: HowTo Schema** - Step-by-step workflow article markup ✓
- [x] **Phase 9: Conversion Optimization** - CTA and contact flow optimization ✓
- [x] **Phase 10: Validation & Launch** - Schema validation and cross-platform testing ✓

## Phase Details

### Phase 1: Technical Foundation
**Goal**: AI search crawlers can access and index the site
**Depends on**: Nothing (first phase)
**Requirements**: TECH-01, TECH-02
**Success Criteria** (what must be TRUE):
  1. robots.txt explicitly allows GPTBot, PerplexityBot, ClaudeBot, and GoogleBot
  2. sitemap.xml is generated with all pages and proper lastmod dates
  3. sitemap.xml includes hreflang alternates for en/ja bilingual pages
**Plans:** 1 plan

Plans:
- [x] 01-01-PLAN.md — robots.txt and sitemap.xml implementation with AI crawler allow rules and bilingual hreflang ✓

### Phase 2: Entity Foundation
**Goal**: Site has established entity identity for AI knowledge graphs
**Depends on**: Phase 1
**Requirements**: SCHEMA-01, SCHEMA-02, SCHEMA-07
**Success Criteria** (what must be TRUE):
  1. Organization schema appears on every page with consistent NAP data
  2. Person schema on About page with expertise, credentials, and sameAs links
  3. JSON-LD is bilingual-aware (correct language attributes per locale)
  4. Rich Results Test validates Organization and Person schemas
**Plans:** 2 plans

Plans:
- [x] 02-01-PLAN.md — Organization schema with site-wide injection in layout and bilingual content ✓
- [x] 02-02-PLAN.md — Person schema on About page with E-E-A-T expertise data ✓

### Phase 3: Content Structure
**Goal**: Content follows AI-extractable patterns for direct answers
**Depends on**: Phase 1
**Requirements**: STRUCT-01, STRUCT-02, STRUCT-03, STRUCT-04
**Success Criteria** (what must be TRUE):
  1. Every page's first paragraph contains a direct answer in under 50 words
  2. All pages follow H1 > H2 > H3 hierarchy without skipped levels
  3. No paragraph exceeds 4 lines (optimized for AI chunk extraction)
  4. Update dates visible on all articles (dateModified UI display)
**Plans:** 3 plans

Plans:
- [x] 03-01-PLAN.md — Content type schema extension with date and direct answer fields, LastUpdated component ✓
- [x] 03-02-PLAN.md — Workflow articles direct answer content and article page date display ✓
- [x] 03-03-PLAN.md — Case study direct answers, dates, and static page intro optimization ✓

### Phase 4: Article Schema
**Goal**: All content articles have structured Article markup
**Depends on**: Phase 2, Phase 3
**Requirements**: SCHEMA-03, SCHEMA-06
**Success Criteria** (what must be TRUE):
  1. Every workflow article has Article schema with author, datePublished, dateModified
  2. Every case study has Article schema with author, datePublished, dateModified
  3. Article schemas reference the Person schema author entity
  4. Rich Results Test validates all Article schemas
**Plans**: TBD

Plans:
- [x] 04-01: Article schema generator and implementation ✓

### Phase 5: E-E-AT Signals
**Goal**: Author expertise is prominently displayed and linked
**Depends on**: Phase 2, Phase 4
**Requirements**: EEAT-01, EEAT-02, EEAT-03
**Success Criteria** (what must be TRUE):
  1. About page displays credentials, experience timeline, and key achievements
  2. sameAs links to LinkedIn, GitHub, and other professional profiles work
  3. Every article displays author card with photo, name, and expertise tagline
  4. Author cards link to the About page
**Plans**: TBD

Plans:
- [x] 05-01: Author profile page enhancement ✓
- [x] 05-02: Author card component and integration ✓

### Phase 6: FAQ System
**Goal**: FAQ content exists and is schema-marked for AI extraction
**Depends on**: Phase 3
**Requirements**: FAQ-01, FAQ-02, FAQ-03, FAQ-04, SCHEMA-04
**Success Criteria** (what must be TRUE):
  1. What I Do page has 5-7 FAQ questions with comprehensive answers
  2. About page has 3-5 FAQ questions addressing common inquiries
  3. Each workflow article has 2-3 contextual FAQ questions
  4. Process page (or dedicated FAQ page) exists with general service FAQs
  5. All FAQ sections have FAQPage schema matching visible content exactly
**Plans**: TBD

Plans:
- [x] 06-01: FAQ content creation (main pages) ✓
- [x] 06-02: FAQ content for workflow articles ✓
- [x] 06-03: FAQPage schema implementation ✓

### Phase 7: Citations & Statistics
**Goal**: Content includes credible sources and specific data points
**Depends on**: Phase 3
**Requirements**: CITE-01, CITE-02, CITE-03, CITE-04
**Success Criteria** (what must be TRUE):
  1. Workflow articles average 5-7 citations per 1000 words
  2. Case studies include specific metrics (time saved, ROI, efficiency gains)
  3. Key pages include at least one expert quotation with attribution
  4. Citation format is consistent: "Source Name, Publication/Platform, Year"
**Plans**: TBD

Plans:
- [x] 07-01: Citation and statistics audit ✓
- [x] 07-02: Workflow article citation enhancement ✓
- [x] 07-03: Case study metrics enhancement ✓

### Phase 8: HowTo Schema
**Goal**: Tutorial-style workflow articles have step-by-step schema markup
**Depends on**: Phase 4, Phase 6
**Requirements**: SCHEMA-05
**Success Criteria** (what must be TRUE):
  1. Workflow articles with step-by-step structure have HowTo schema
  2. HowTo schema includes estimated time and required tools where applicable
  3. Each step has clear name and instruction text
  4. Rich Results Test validates all HowTo schemas
**Plans**: TBD

Plans:
- [x] 08-01: HowTo schema generator and implementation ✓

### Phase 9: Conversion Optimization
**Goal**: Clear conversion paths from content to contact
**Depends on**: Phase 5, Phase 6
**Requirements**: CONV-01, CONV-02, CONV-03
**Success Criteria** (what must be TRUE):
  1. CTA buttons have appropriate schema markup (ContactAction)
  2. Every content page has visible path to contact form
  3. Service value proposition is stated in under 50 words on key pages
  4. Contact page loads quickly and form works reliably
**Plans**: TBD

Plans:
- [x] 09-01: CTA schema and value proposition ✓
- [x] 09-02: Contact flow optimization ✓

### Phase 10: Validation & Launch
**Goal**: All schemas validated and site tested across AI platforms
**Depends on**: Phase 8, Phase 9
**Requirements**: TECH-03
**Success Criteria** (what must be TRUE):
  1. Every schema passes Google Rich Results Test without errors
  2. Site tested in ChatGPT, Perplexity, and Google AI Overviews
  3. Bilingual schemas work correctly for both en and ja locales
  4. No schema-content mismatches (visible content matches structured data)
**Plans**: TBD

Plans:
- [x] 10-01: Schema validation and platform testing ✓

## Progress

**Execution Order:**
Phases execute in numeric order: 1 > 2 > 3 > 4 > 5 > 6 > 7 > 8 > 9 > 10

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Technical Foundation | 1/1 | ✓ Complete | 2026-02-12 |
| 2. Entity Foundation | 2/2 | ✓ Complete | 2026-02-12 |
| 3. Content Structure | 3/3 | ✓ Complete | 2026-02-12 |
| 4. Article Schema | 1/1 | ✓ Complete | 2026-02-12 |
| 5. E-E-AT Signals | 2/2 | ✓ Complete | 2026-02-12 |
| 6. FAQ System | 1/1 | ✓ Complete | 2026-02-12 |
| 7. Citations & Statistics | 1/1 | ✓ Complete | 2026-02-12 |
| 8. HowTo Schema | 1/1 | ✓ Complete | 2026-02-12 |
| 9. Conversion Optimization | 1/1 | ✓ Complete | 2026-02-12 |
| 10. Validation & Launch | 1/1 | ✓ Complete | 2026-02-12 |

---
*Roadmap created: 2026-02-12*
*Total phases: 10 | Total plans: 19 | Depth: comprehensive*
