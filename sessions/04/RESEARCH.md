# Session 04 research brief: Paying for reach (layer 3, Paid reach)

For the builder. Everything below was opened and read on 2026-10-16. Figures live in `data/sources-04.json` (ids `s04-...`), examples in `data/examples-04.json` (ids `x04-...`), images in `data/credits-04.json`, files in `assets/img/s04/`. You should not need to search for anything.

Big idea to carry through every slide: ads multiply what exists. They do not fix a weak home.

## Slide-by-slide

### 1. Title

- Title and layer chip: Paid reach. No facts.
- Image, if wanted: `photo-plumber-bathroom-unsplash.jpg` (plumber seen from behind, grey tiled bathroom, calm, no cyan). Avoid `photo-plumber-pipe-wall-unsplash.jpg` on any slide that already has a cyan element: the photo has a strong cyan light inside the cabinet.

### 2. Guess the number (minutes 0 to 3)

- Question: Of every Rs 100 spent on advertising in India last year, how much went to digital (Google, Meta, LinkedIn, YouTube and the rest) rather than TV, print, radio, cinema and outdoor?
- Options (suggested): about Rs 20 / about Rs 40 / about Rs 60 / about Rs 80.
- Answer: 59% (Rs 71,621 crore of Rs 1,21,339 crore). Source id `s04-digital-share-2025`.
- Exact source line (dentsu-e4m Digital Advertising Report 2026, report page 14): "Digital media now contributes Rs 71,621 crore, commanding a dominant 59% share of the Indian advertising Industry."
- Citation under the number: dentsu India and exchange4media, Digital Advertising Report 2026 (figures for calendar 2025), dentsu.com/in/en/reports/dentsu_e4m_digital_advertising_2026
- Build-up on reveal (same source, id `s04-tv-print-share-2025`): TV 21% (Rs 25,964 crore), print 14% (Rs 16,594 crore), outdoor 4%, radio 1%, cinema 1%. Three or six bars, digital bar the one cyan element if you want one.
- Optional second beat (id `s04-digital-share-trend`): "12% in 2016, 59% in 2025." The 70% by 2027 is a projection; if shown, label it "projected".
- Corroboration for the notes only (id `s04-pmar-digital-share-2025`): Pitch Madison Advertising Report 2026 lands at 60% for 2025 on its wider definition (46% on its older definition). Do not put PMAR and dentsu numbers on the same slide.
- Source visual: `dentsu-2026-media-wise-spends.png` (report page render, 1906x953). Use small, as the citation image, not as artwork; it is the publisher's copyrighted page.

### 3. Map recap (minutes 3 to 5)

- Five-layer map, layer 3 highlighted. Logos for the layer: `google-ads-logo.svg`, `meta-logo.svg`, `linkedin-logo.png` (all Wikimedia Commons, public domain as shapes, trademarks: never stretch or recolour).

### 4 to 6. Three platforms, three jobs (minutes 5 to 15, idea 1)

One slide per platform or one slide with three cards. Each card: the job, what the ad looks like to the viewer, the real example.

Google ads: catch people already searching.
- Exact official wording (business.google.com/in/ad-solutions/search/): "Search ads work by targeting people who are actively searching online for your products and services."
- Real ad to show: `google-ads-transparency-astral.png`, first card: "Astral Pipes - India - Industrial Pipe Manufacturer - Get A Quote" with the extra links (24/7 Customer Support, CPVC Pipes, Contact Us, All Over India). Example id `x04-astral-google-ads`. Crop to the first card if the video thumbnails distract.
- Cleaner alternative: `google-search-ads-page-in.png`, Google's own mock ad ("Ad, example-business.com, Modern Design & Co.").
- A live Google results page could not be captured (Google serves a captcha to headless Chrome). If you want a results page, mock one up in Google's style with the "Sponsored" label and mark it illustrative.

Meta ads: reach people in your city who are not searching yet.
- Real ads to show: `meta-ad-library-astral-pipes.png`, middle card: "Become a dealer with India's Safest Water Tank Brand!" with a "Get Offer" button. Example id `x04-astral-meta-ads`.
- Second real example, city-level: `meta-ad-library-jaquar-dealers.png`, second and third cards, Jaquar ads that name one showroom and its address (Bath World, Bengaluru; Balaji Expo India, Rohini). Example id `x04-jaquar-dealer-meta-ads`. Crop out the first card (an unrelated gym equipment ad that matched the keyword).
- A phone-feed view of a Meta ad cannot be captured without login; mock it up in Meta's style, labelled illustrative, and reuse Astral's wording as the content if you need a real-looking example.

LinkedIn ads: reach decision-makers by title and company.
- Exact official wording (business.linkedin.com/marketing-solutions/ads): "Target your audience by job title, function, industry, and more." and "Over 1 billion active professionals are on LinkedIn." Sponsored Content page: "Reach and engage a professional audience in the LinkedIn feed."
- Captures: `linkedin-sponsored-content-page.png`, `linkedin-ads-page.png` (both illustrations, not real ads). A sponsored post in the feed is behind login: mock it up in LinkedIn's style, labelled illustrative. Example id `x04-linkedin-sponsored-content-page`.
- Member figure, global only (id `s04-linkedin-members-global`): "A community of +1.3B Members" and "410M+" in Asia Pacific, from news.linkedin.com/about-us. Say "global figure; LinkedIn does not publish an India count" if used. The 160 million India figure in the press is not on a LinkedIn page, so it is not usable (see unverified list).

Supporting figure for this section, if you want one line on where Indian ad money goes (id `s04-digital-social-search-split`): within digital spend, social media 29% (Rs 21,057 crore) and paid search 23% (Rs 16,581 crore). Same dentsu report. Rupee alternative from PMAR in `s04-pmar-search-social-video-2025`; use one report per slide, never both.

### 7. What do you think poll

- Has your business paid for online ads? Yes and it worked / Yes but unclear / No / Do not know. No facts.

### 8. How a small test works (idea 2)

- Four-week timeline: one platform, one city, one offer, fixed budget, decide with numbers. No external facts needed.
- Backing for "one city" (id `s04-google-location-targeting`): Google Ads Help, "Depending on the country, you can target regions, cities, or postal codes." and "Radius targeting requires setting a radius of at least 1 km around any given location." Meta's equivalent help page is script-rendered and could not be read, so do not quote Meta on this; the Jaquar dealer ads show it in practice.

### 9. Budget slider or method

- Call made: no credible primary Indian benchmark for cost per click or cost per enquiry exists (Google and Meta do not publish one; everything else is agency blogs, which rule 3 bans). Build the method, not the slider: cost per enquiry = spend divided by enquiries. Sharma's numbers, clearly labelled illustrative, for example Rs 5,000 spend, 10 enquiries, Rs 500 per enquiry, 3 jobs, Rs 1,667 per job won.
- Note for REVIEW.md "Calls we made": budget slider dropped for lack of a source; method shown instead, as the brief allows.

### 10. Mistakes that waste money (idea 3)

- Boosting random posts aimed at all of India: counter-example is the Jaquar dealer ad (one showroom, one address). Meta's "About boosted posts" help page is script-rendered and could not be quoted; describe boosting in plain words without a quote.
- A vague ad: contrast with Astral's "Become a dealer" line (one audience, one ask).
- No way to know where the call came from (id `s04-google-call-reporting`): Google Ads Help, "Call reporting, which runs on Google forwarding numbers, lets you measure the performance of your call assets." The page does not state India availability, so say "can". The plain alternative needs no source: give the ad its own number, or ask every caller how they found you.

### 11. For chapters: promoting an event (IPC 2026)

- Facts, all from indianplumbingconference.com (id `s04-ipc-2026-facts`): 32nd Indian Plumbing Conference and Exhibition, 17 to 19 December 2026, Chennai Trade Centre, Chennai. Theme: "Water, Plumbing & Sanitation Operations & Maintenance (Challenges & Solutions)". Delegate fee Rs 1,500 (IPA member), Rs 1,800 (non-member), Rs 500 (student), inclusive of taxes, includes delegate kit and hi-tea and lunch on the first two days. "Entry to the exhibition is free for visitors." Organiser's expectations: 3,000+ delegates, 150+ exhibitors, 10,000+ visitors (label "expected" if used).
- Do not show: the early-bird deadline (31 October 2026, it expires before the series is shared), hall numbers (the site says "Hall Nos. 3, 4 & 5" on the banner and "Halls 3 & 4" on the visitor page; use "Chennai Trade Centre, Chennai").
- Timing call for REVIEW.md: if Session 4 airs after 19 December 2026 the example still works as "the kind of event a chapter promotes"; write the slide so it reads correctly before or after the event (no "register now").
- Captures: `ipc-2026-event-page.png` and `ipc-2026-home.png`, both with a cookie bar across the bottom 140px; crop it. Example id `x04-ipc-2026-site`.
- Shape of the chapter ad: one city, one audience (architects, MEP consultants, contractors, facility managers, all listed on the event page as who should attend), one link (the registration page), small budget, two weeks.

### 12. Sharma Plumbing Works: the same Rs 5,000 two ways

- Before: a boosted post aimed at all India (mockup in Meta's style, illustrative). After: a Google search ad for one service in Pune (mockup in Google's style, illustrative; model it on the Astral text ad: business name, one service, one line, call button, "Sponsored" label). Poll: which would you fund.
- Phone always +91 98XXX XXXXX, Kothrud, Pune, no street number.

### 13. Who does what

- Owner sets goal, budget and the one offer; agency runs the ads; team answers every enquiry within the hour. Three questions: what did one enquiry cost, how many became jobs, what did we stop spending on. No facts.

### 14. One thing to check

- Business: write down one offer, one city, one monthly budget; do not spend yet. Chapter: pick the next event that could use a small push. No facts.

### 15. Q&A and next month

- Next month: Keeping customers.

## Images available (all in assets/img/s04/, all opened and checked)

| File | What it is | Use |
| --- | --- | --- |
| dentsu-2026-media-wise-spends.png | Report page with the 59% figure | Source citation image, small |
| meta-ad-library-astral-pipes.png | Three real Astral Pipes Meta ads | Meta card, Sharma model |
| meta-ad-library-jaquar-dealers.png | Jaquar dealer-level Meta ads | One-city counter-example (crop first card) |
| google-ads-transparency-astral.png | Real Astral Google search ad plus video ads | Google card |
| google-search-ads-page-in.png | Google's own search ad example | Google card alternative |
| linkedin-ads-page.png, linkedin-sponsored-content-page.png | Official LinkedIn pages, illustrations | LinkedIn card background |
| ipc-2026-event-page.png, ipc-2026-home.png | IPC 2026 site | Chapter event slide (crop cookie bar) |
| google-ads-logo.svg, meta-logo.svg, linkedin-logo.png | Platform marks | Map and cards, unaltered |
| photo-plumber-bathroom-unsplash.jpg | Plumber at work, grey bathroom | Title or section divider |
| photo-plumber-pipe-wall-unsplash.jpg | Plumber under a sink, cyan light | Only where no other cyan is on the slide |
| photo-kolkata-newspaper-pexels.jpg | Man reading a Bengali newspaper | Print versus digital beat on the poll slide |

## Must be mocked up (labelled illustrative)

1. A Google results page for "plumbing contractor Pune" with a Sponsored result (captcha blocked the capture).
2. A Meta ad as seen in a phone feed (login wall).
3. A LinkedIn sponsored post in the feed (login wall).
4. All Sharma before and after screens.

## Could not verify, so not included

- LinkedIn members in India: "more than 160 million" is quoted in Storyboard18 (8 September 2025) from a PTI interview with LinkedIn's India country manager, but it is not on any LinkedIn-published page. news.linkedin.com/about-us gives only the global and Asia Pacific figures.
- Meta users in India: Meta publishes no country figure.
- Indian cost per click or cost per enquiry benchmarks: no Google, Meta or LinkedIn page publishes one; only agency blogs do. Method shown instead.
- Pitch Madison Advertising Report 2026 PDF: behind a form at e4mevents.com; the exchange4media write-up (Pitch's own publisher) was used for corroboration only, and its page capture was blocked by an interstitial ad.
- Meta help pages on location targeting and boosted posts: script-rendered, no readable text, so no Meta quotes on those points.
- GroupM (WPP Media) This Year Next Year 2026: no India digital-share figure found on a page that could be opened.

## Calls made (copy to REVIEW.md)

1. Guess-the-number uses dentsu-e4m 59% (primary PDF opened), with PMAR 60% in notes only.
2. Budget slider dropped; method with Sharma's illustrative numbers instead.
3. IPC 2026 slide written to read correctly before or after the event; no early-bird deadline, no hall numbers.
4. LinkedIn member count shown only as the global figure, labelled global.
5. Kanchipuram newspaper-stand photo rejected (political posters in frame); Kolkata photo kept.
