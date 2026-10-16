# Session 01 research brief: What "digital" actually means

For the builder. Everything below was opened and read on 2026-10-16. Facts live in `data/sources-01.json`, examples in `data/examples-01.json`, image credits in `data/credits-01.json`. All paths are relative to the repo root. No dates go on slides; years go under figures as part of the source line.

## Calls made here (copy into REVIEW.md "Calls we made")

1. Guess-the-number uses the IAMAI-Kantar people figure (886 million active internet users, 2024), not the newer TRAI subscription figure, because a poll about "how many Indians" needs people, not SIM cards. TRAI sits under it as a second line, with the words "subscriptions, not people".
2. The IAMAI-Kantar 2025 edition (press reports say 958 million) is not used: no IAMAI or Kantar page carrying the figure could be opened. Rule 3.
3. Midway fact uses Think with Google India 2026 ("9 in 10 shoppers researched before buying"), with the plain caveat "festive shoppers, seven product categories" on the slide. The 2021 "64% of Indians research before buying" is the fallback.
4. The real, named contractor on the "which one would you call" slide is Aquapulse Plumbing and services, Pune (not Pune Plumbing Services), because its profile is the more complete one: website, description, areas served, hours, 258 reviews.
5. Instagram, LinkedIn and WhatsApp screens are mockups labelled "illustrative". Instagram showed a sign-up overlay to a logged-out browser; LinkedIn posts need a login; WhatsApp is a private app.
6. BrightLocal (United States) is the only reviews statistic; the slide must say "United States, 2025" because no Indian figure on review reading could be found on a page we opened.
7. Platform logos come from Wikimedia Commons public-domain files, with the official brand pages recorded in credits. Use them unstretched, unrecoloured, small.

## Slide-by-slide

### Slide 1: Title

- Images: `assets/img/s01/photos/plumber-pipe-in-wall.jpg` (Timur Shakerzianov, Unsplash) or `pune-aerial.jpg` (Anand Dhumal, Unsplash, a real Pune view). Both in `data/credits-01.json`.
- Nothing to source.

### Slide 2 to 3: Guess the number (0 to 3 min)

Poll question: "How many Indians were active internet users in 2024?"

Suggested options: 300 million / 550 million / 886 million / 1.2 billion. Reveal: **886 million**.

- Fact: `s01-active-internet-users-india-2024`. Exact source line from the PDF: "Base: ICUBE 2024, Active Internet Users, 886 Million, Urban India 397 Million, Rural India 488 Million".
- Source line for the slide: IAMAI and Kantar, Internet in India 2024, 2024. https://www.iamai.in/sites/default/files/research/Kantar_%20IAMAI%20report_2024_.pdf
- Second reveal (optional, one line): "More of them are rural (488 million) than urban (397 million)." Same source.
- Second line under the number: "1,092.79 million internet subscriptions by March 2026 (subscriptions, not people)". Fact `s01-internet-subscriptions-trai-march-2026`. Exact line: "Total number of internet subscribers increased from 969.10 million at the end of March 2025 to 1092.79 million at the end of March 2026 with yearly rate of growth of 12.76%." Source line: TRAI, Indian Telecom Services Yearly Performance Indicators 2025-26, 2026. https://trai.gov.in/sites/default/files/2026-10/PR_No127of2026.pdf
- Presenter note: the gap between 886 million people (2024) and 1,092 million connections (2026) is partly growth and partly people with two SIMs; say both plainly and do not add them up.

### Slide 4 to 5: Map recap (3 to 5 min)

Five layers, interactive, each expands to platforms with real logos.

- Logos (all in `assets/img/s01/logos/`): `google-g.svg`, `google-maps.svg`, `google-wordmark.svg`, `instagram.svg`, `whatsapp.svg`, `youtube.svg`, `linkedin.svg`, `linkedin-wordmark.svg`, `pinterest.png`, `facebook.svg`. Licence and official brand page per file in `data/credits-01.json`. No logo for WordPress, Shopify, JustDial or IndiaMART was downloaded; show those as text names.
- Optional supporting figure for the Home layer: "Searches for 'open now near me' grew more than 1.6 times in India in a year (2021)". Fact `s01-open-now-near-me-india-2021`. Source line: Think with Google India, Year in Search India 2021, 2021. https://www.thinkwithgoogle.com/_qs/documents/15123/YIS_IN_2021-compressed_2-compressed.pdf
- Optional supporting figure for "your customer is on a phone": 983.29 million of 1,028.61 million connections are wireless (Dec 2025). Fact `s01-wireless-share-trai-dec-2025`. Source line: TRAI, Telecom Services Performance Indicators October to December 2025, 2026. https://www.trai.gov.in/sites/default/files/2026-03/PR_No.32of2026.pdf
- Real example per layer, if the expanded view wants one:
  - Home: Aquapulse Google profile, `assets/img/s01/google-maps-aquapulse-plumbing-pune.png`; website `assets/img/s01/website-aquapulseplumbing-home.png`.
  - Discovery: Ashirvad YouTube how-to, `assets/img/s01/youtube-ashirvad-cpvc-installation.png` and channel `assets/img/s01/youtube-ashirvad-channel.png`; Instagram as a mockup (see slide 7).
  - Paid reach, Relationship, Measurement: no real example needed in Session 1; text only.

### Slide 6 to 9: The journey (5 to 15 min), one slide per two steps or one per step

An architect in Pune needs a plumbing contractor for a hospital extension.

| Step | Layer lit | What to show | Asset |
| --- | --- | --- | --- |
| 1. Searches Google | Home, Discovery | Real screenshot of the Places pack for "plumbing contractors in Pune": Pune Plumbing Services 4.9 (135), Super tech plumbing service 4.8 (279), Aquapulse 4.6 (258) | `assets/img/s01/google-search-plumbing-contractors-pune.png` (alternative with the hospital query: `google-search-hospital-plumbing-contractor-pune.png`, which shows an AI Overview and JustDial and IndiaMART results, useful as the "Indian platforms" mention) |
| 2. Reads reviews on a Maps listing | Home | Real Maps listing: Aquapulse, 4.6 stars, 258 reviews, open 24 hours, website, phone | `assets/img/s01/google-maps-aquapulse-plumbing-pune.png`; the knowledge-panel view with the description and "Areas served: Pune" is `google-search-aquapulse-plumbing-pune.png` |
| 3. Checks past work on Instagram | Discovery | Mockup in Instagram style, labelled illustrative, modelled on the real M.N's Plumbing and Renovation profile (bio, Residential and Commercial highlights, work photos, review graphics). Use `photos/plumber-bathroom-repair.jpg` and `photos/plumber-pipe-in-wall.jpg` as the grid images | reference only, not shipped: `.work/research-01/ig-mnsplumbingpune.png` |
| 4. Sends a WhatsApp enquiry | Home, Relationship | Mockup in WhatsApp style, labelled illustrative. Photo for the slide: `photos/phone-whatsapp-bubble.jpg` (appshunter.io, Unsplash) | mockup |
| 5. Awards the job | (offline) | Photo: `photos/architect-blueprints-desk.jpg` or `photos/architect-drafting.jpg`; hospital context: `photos/hospital-corridor.jpg` | photos |
| 6. Leaves a review | Relationship | Mockup of a Google review card in the Sharma after-state (never a real customer's review) | mockup |
| 7. Wins the annual maintenance contract | Relationship, Measurement | Text and the map fully lit | none |

Fact that makes the journey credible, for the step 1 or 2 slide: "69% of Indian festive shoppers who saw a brand on Facebook or Instagram went to Google Search to check it further." Fact `s01-social-to-search-india-2026`. Source line: Think with Google India (Google/Ipsos), Win India's Tyohaar 2026, 2026. https://business.google.com/in/think/consumer-insights/festive-advertising-strategy-ai-search-india/

### Slide 10: Where businesses leak

Usually Home (no or stale Google profile) and Relationship (no follow-up after the job).

- Fact: "63% of urban Indians who buy offline still use Google Search just before the purchase (2021)." Fact `s01-offline-shoppers-use-search-india-2021`. Exact line: "63% of urban offline shoppers use Search just before their purchase". Source line: Think with Google India, Year in Search India 2021, 2021 (Google/Kantar, n=4,600+). Same PDF URL as above.
- Fact (global, label it): "Only 4% of consumers say they never read online reviews of a business; 74% check two or more review sites (United States, 2025)." Fact `s01-reviews-never-read-brightlocal-2025`. Source line: BrightLocal, Local Consumer Review Survey 2025, 2025. https://www.brightlocal.com/research/local-consumer-review-survey-2025/
- Visual: the map with Home and Relationship dimmed; no real business shown as a leak. Sharma only.

### Slide 11: What do you think poll

"How many of the five layers does your business have switched on today?" Options 0 / 1 / 2 / 3 / 4 / 5. No reveal needed; presenter reads the Zoom result.

- Midway fact to show after the poll: "9 in 10 Indian shoppers who bought something during the 2025 festive season say they researched online first." Fact `s01-researched-before-buying-india-2026`. Exact wording: "9 in 10 shoppers who made a purchase report that they researched beforehand, with 33% saying they did 'a lot of research'." Caveat line on the slide: "festive shoppers, seven product categories, Google/Ipsos survey of 2,410 buyers". Source line: Think with Google India (Google/Ipsos), Win India's Tyohaar 2026, 2026. URL as above.
- Fallback if the builder prefers a general-population figure: "64% of Indians research products online before making a purchase (2021)." Fact `s01-research-before-purchase-india-2021`. Exact line: "In fact, 64% of Indians research products before making a purchase to ensure they get the right product or service that meets their needs." Source: Think with Google India, Year in Search India 2021 (Google commissioned Kantar/Quantum, n=1,002).

### Slide 12 to 13: Sharma Plumbing Works (15 to 19 min)

- Sharma introduced as today: text and the Sharma wordmark from the foundation agent. No photo of a real business.
- "Which one would you call?": two search results side by side.
  - Left, real and named: Aquapulse Plumbing and services, Pune. Crop the knowledge panel from `assets/img/s01/google-search-aquapulse-plumbing-pune.png` (right-hand column: photos, 4.6 stars, 258 Google reviews, Plumber in Pune, Website and Directions buttons, description, address, phone, open 24 hours, areas served) or rebuild it faithfully in HTML from the same facts. Link: https://www.google.com/maps/search/Aquapulse+Plumbing+and+services+Bibwewadi+Pune
  - Right, mockup: Sharma's bare listing (name, "Plumber", no photos, no hours, two reviews, no website), labelled illustrative.
- Poll options: Aquapulse / Sharma / would call both / would ask a friend instead.

### Slide 14: Who does what (19 to 21 min)

Owner decides which layers matter and what success looks like; team or agency runs them. Three questions: which layers are we on today, who owns each one, what are we measuring. Nothing to source.

### Slide 15: Self-check, score yourself 0 to 5

Interactive tick list of the five layers. Nothing to source.

### Slide 16: One thing to check (21 to 22 min)

Search your own business name plus trade plus city on Google and see what a stranger sees. Chapter: do the same for the chapter and share in the chapter group.

- Visual: `assets/img/s01/google-search-plumbing-contractors-pune.png` with the search box highlighted, or a Google-style search box mockup with "Sharma Plumbing Works plumber Kothrud Pune".

### Slide 17: Q&A and next month

Next month: Your home online. Nothing to source.

## Real good examples (all live on 2026-10-16, details in `data/examples-01.json`)

| Example | Link | Status |
| --- | --- | --- |
| Aquapulse Plumbing and services, Pune, Google profile | https://www.google.com/maps/search/Aquapulse+Plumbing+and+services+Bibwewadi+Pune | HTTP 200, captured |
| AquaPulse website (passes the five-second test) | https://aquapulseplumbing.in/ | HTTP 200, captured |
| Pune Plumbing Services, Erandwane, Google listing | https://www.google.com/maps/search/Pune+Plumbing+Services+Continental+Chambers+Pune | HTTP 200, visible in the Places capture |
| Ashirvad by aliaxis, YouTube how-to "Ashirvad CPVC Installation" | https://www.youtube.com/watch?v=osOfTtlO0S8 (channel https://www.youtube.com/@ashirvadpipesofficial) | HTTP 200, oEmbed confirms author, captured |
| M.N's Plumbing and Renovation, Pune, Instagram | https://www.instagram.com/mnsplumbingpune/ | HTTP 200, sign-up overlay, mock it up |

## Images available

- Screenshots (1440x900, public pages, logged out): `assets/img/s01/google-search-plumbing-contractors-pune.png`, `google-search-hospital-plumbing-contractor-pune.png`, `google-search-aquapulse-plumbing-pune.png`, `google-maps-aquapulse-plumbing-pune.png`, `website-aquapulseplumbing-home.png`, `youtube-ashirvad-cpvc-installation.png`, `youtube-ashirvad-channel.png`. All opened and checked; none is a captcha or cookie wall.
- Logos: `assets/img/s01/logos/` (10 files, Wikimedia Commons public domain, official brand pages in credits).
- Photos (Unsplash License, resized to 1920 px): `assets/img/s01/photos/plumber-bathroom-repair.jpg`, `plumber-pipe-in-wall.jpg`, `pune-aerial.jpg`, `hospital-corridor.jpg`, `phone-whatsapp-bubble.jpg`, `architect-blueprints-desk.jpg`, `architect-drafting.jpg`.

## What the builder must mock up (label each "illustrative")

1. Instagram profile and grid (journey step 3; Discovery layer example). Model on M.N's Plumbing and Renovation; put Sharma or neutral content in the mockup, not the real account's photos.
2. WhatsApp enquiry thread (journey step 4).
3. Google review card for the Sharma after-state (journey step 6).
4. Sharma's bare Google listing (which one would you call, right-hand side).
5. A LinkedIn post, if the map's Discovery layer wants one. No public LinkedIn post by an Indian plumbing or MEP professional could be opened without a login, so there is no real example for Session 1; Session 3 will need its own search.

## Not verified, not used

- IAMAI-Kantar Internet in India 2025 (press: 958 million active users, 57% rural). Tried: iamai.in research page (404), knowledge centre with "internet" and "2025" filters (only the 2024 PDF is listed), Kantar and IAMAI domain searches. Only news articles carry the figure, so it is out.
- WhatsApp users in India (press: "over 500 million"). No Meta newsroom, WhatsApp blog or investor page states a number; searches limited to about.fb.com, blog.whatsapp.com, business.whatsapp.com and investor.atmeta.com returned nothing. Out.
- Think with Google "near me" page on the India site (https://business.google.com/in/think/marketing-strategies/near-me-searches/) carries only United States data from 2015 to 2017. Out.
- Think with Google local-search page "76% of people who search for something nearby visit a business within a day" was not opened (old URL redirects to a landing page). Session 2 should look again.
- Google search results from headless Chrome need a normal browser user agent; the default headless UA returns a reCAPTCHA page. Command that worked: `"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --hide-scrollbars --virtual-time-budget=8000 --window-size=1440,900 --user-agent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/155.0.0.0 Safari/537.36" --disable-blink-features=AutomationControlled --screenshot=out.png "URL"`.
- Unsplash blocks curl; photo pages were read with `--dump-dom` and the `images.unsplash.com` URL downloaded from the page's srcset. The `/download` endpoint returns HTML. One candidate (a Pune skyline with a train) was Unsplash+ and was dropped.
