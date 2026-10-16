# Session 06 research brief: Measuring it, plus the new tools (layer 5, Measurement)

For the builder. Everything below was opened and read on 2026-10-16. Figures live in `data/sources-06.json` (ids `s06-...`), examples in `data/examples-06.json` (ids `x06-...`), images in `data/credits-06.json`, files in `assets/img/s06/`. You should not need to search for anything.

Big idea to carry through every slide: you do not need a dashboard. You need five numbers once a month.

The five numbers, in the order the outline gives them: profile views, enquiries, jobs won, reviews, repeat customers. Use that order everywhere (poll, scorecard, Sharma after, chapter slide) so the room learns it once.

## What is real and what is a mockup

Real, captured, usable as is (crop notes in `credits-06.json`): Google's own Performance screen illustration, five help and product pages (Google Business Profile, Instagram, LinkedIn, Google Ads, Meta Ads Manager), the Claude and Gemini home pages, three source page renders, four free photos, five official logos.

Must be mocked up (login walls or blocked sites), always with a small "illustrative" label: the Instagram insights screen, the LinkedIn profile and page analytics screens, the Google Ads account Overview, the Meta Ads Manager results table, the ChatGPT, Canva and CapCut home pages, the one-page scorecard, both Sharma reports, the 90-day plan page. Use the metric names from the help pages (quoted in `sources-06.json`) so the mockups are faithful.

## Slide-by-slide

### 1. Title

- Title and layer chip: Measurement. No facts.
- Image, if wanted: `photo-notebook-calculator-flatlay-pexels-8276240.jpg` (open notebook, pen, glasses, calculator on a dark table; calm, no cyan) or `photo-shop-owner-phone-pexels-17584250.jpg` (an Indian shop owner reading his phone among stock; warm, candid). The second is the better "owner reads five numbers on his phone" image. Both are Pexels, credited.

### 2. Opening self-poll (minutes 0 to 3)

- The outline replaces guess-the-number with a self-poll: "How many of these five could you state for last month?" Reveal the five one at a time with `data-reveal`: profile views, enquiries, jobs won, reviews, repeat customers. Options: 0 / 1 to 2 / 3 to 4 / all 5. No fact needed on this slide.
- If you want a sourced number on the opening anyway, the guess-the-number fact for this session is the AI one (id `s06-google-kantar-genai-tried-2025`): "Of people surveyed across 18 Indian cities, what share had tried any generative AI tool?" Options: about 1 in 10 / about 3 in 10 / about 5 in 10 / about 7 in 10. Answer: 31% (and 60% were not familiar with AI at all). Exact line: "60% aren't familiar with AI, and only 31% have tried any Generative AI tool." Citation under the number: Google India with Kantar, Google-Kantar report on generative AI in India, 2025, blog.google/intl/en-in. Source render: `google-kantar-genai-india-blog.png`, small. Call we made: the self-poll opens the session as the outline says; the 31% is used later on the AI slide (slide 9) unless you prefer it up front.

### 3. Map recap (minutes 3 to 5)

- Five-layer map, layer 5 highlighted. Closing slide (15) shows the map fully lit; keep the same component.

### 4. The one-page scorecard (minutes 5 to 15, idea 1)

- Interactive template, fill on screen, print with `P`. Five rows, three columns: this month / last month / what we will do. Mockup, no source needed. Put the source of each number in a fourth, small column so it teaches where to look: Google profile (views, calls, messages), the enquiry log (WhatsApp, calls, site form), the job book, Google reviews, the customer list from Session 5.
- Photo for the slide, if it has room: `photo-notebook-calculator-hands-pexels-5466814.jpg` (hands writing monthly sums; crop the banknote at the right edge).

### 5 to 7. Where each number lives (idea 2)

One slide with five cards, or three slides. Each card: the platform screen, one number circled, the plain-words meaning next to any platform word (rule 1).

Google Business Profile (profile views, calls, messages)
- Real image: `gbp-performance-dashboard-sample.png` (1440x598), Google's own illustration of the Performance screen: "4,275 Views" split Search and Maps, plus the search terms list. Example id `x06-google-business-profile-performance`. Caption: Google's illustration, sample numbers, business.google.com.
- Definitions in Google's words (id `s06-gbp-performance-metrics`): "Views: How many people viewed your Business Profile on Search and Maps." "Calls: The number of times a customer clicked on the call button on your Business Profile." "Messages: The number of different conversations through messages." Also "Performance data is available only for verified Business Profiles" (so the first check is: is the profile verified and who holds the login, tying back to Session 2).
- Help page render if wanted: `gbp-help-performance.png`.

Instagram (people reached, enquiries through Instagram)
- Screen is behind login: phone-sized mockup in Instagram's style, labelled illustrative, using Meta's names (id `s06-instagram-insights-definitions`): Views, Viewers, Interactions, New followers, Content you shared. Exact line: "From the Instagram app, you can see an insights overview that includes Views, Interactions, New followers and Content you shared." Account must be public. Period: any time within the last 90 days.
- Plain words next to the platform words: Views = times your posts were seen; Viewers = people who saw them; Interactions = likes, comments, saves, shares. The number for the scorecard is enquiries that came through Instagram (messages and calls from the profile), counted by hand in the enquiry log.
- Help page renders: `meta-help-instagram-insights.png`, `instagram-help-insights.png` (crop the prompts on the right). Example id `x06-instagram-insights-help`.

LinkedIn (visitors to the page, views of the owner's profile)
- Real image: `linkedin-help-page-analytics.png`, LinkedIn's own table (Content, Followers, Visitors, Search appearances). Example id `x06-linkedin-page-analytics-help`. Exact line (id `s06-linkedin-page-analytics`): "Analytics are available for all Page admin roles."
- The owner's personal profile views sit behind login: mock up, labelled illustrative, if you show it.

Google ads (amount spent, enquiries, cost per enquiry)
- Account screen behind login: mock up one Overview card in Google's style, labelled illustrative, three numbers: amount spent, enquiries, cost per enquiry (Rs spend divided by enquiries, the Session 4 method).
- Google's words (id `s06-google-ads-overview-and-conversion`): the Performance summary card "summarizes performance changes over the last 7 days compared to 7 days prior based on your account goals"; "A conversion is an action used to measure the performance of your ad campaigns". The screen says "conversions": write "enquiries the ad produced" beside it.
- Help page render: `google-ads-help-overview-page.png` (crop the Help guide chat box). Product page: `google-ads-home-in.png`. Example id `x06-google-ads-overview-help`.

Meta ads (amount spent, results, cost per result)
- Ads Manager behind login: mock up a one-row table in Meta's style, labelled illustrative: Amount spent, Results, Cost per result. Plain words: results = the number of times the ad did what you asked (for Sharma, enquiries); cost per result = spend divided by results. Do not quote Meta for these two column definitions (their help page could not be retrieved; see unverified list).
- Meta's words you can quote (id `s06-meta-ads-manager-wording`): Ads Manager is for "tracking how well your campaigns are performing towards your marketing goals" and "See if your ads are driving their intended goal with reporting tools."
- Product page render: `meta-ads-manager-page.png` (crop the login prompt). Example id `x06-meta-ads-manager-page`.

### 8. What do you think poll

- Who reads your reports today? Me / my team / the agency sends them but nobody reads / there are none. No facts.

### 9. Reading the numbers: three if-then cards (idea 3)

- Views up but enquiries flat: likely cause, the profile or page does not say what you do, where, with proof and a way to contact (the Session 2 five-second test). Question to ask: what does a stranger see in five seconds.
- Enquiries up but jobs flat: likely cause, slow or weak replies (Session 4: answer every enquiry within the hour). Question: how long did we take to reply last week, and who replied.
- Jobs up but no reviews: likely cause, nobody asks at the right moment (Session 5). Question: who asked for a review after each job this month. Sourced support (id `s06-brightlocal-2026-recent-reviews-74`): "74% seek reviews written in the last three months", and 41% now always read reviews (29% a year earlier). US survey, say so; the point is that reviews go stale, so the number to watch is new reviews this month, not the total. Second line if wanted (id `s06-brightlocal-2026-reply-all-80`): 80% are likely to use a business that replies to all its reviews; 42% unlikely to use one that never replies.
- Source render, small: `brightlocal-review-survey-2026.png`.

### 10. AI tools that save time

- Name five tools neutrally, with logos: ChatGPT (`logos/chatgpt-logo.svg`), Claude (`logos/claude-logo-slate.svg` or `logos/claude-icon-rounded.svg`, from Anthropic's press kit), Gemini (`logos/gemini-logo.svg`), Canva (no logo file: Canva's site blocks headless capture and its logo is not on Wikimedia Commons; set the name in type), CapCut (`logos/capcut-logo.svg`). All logos as supplied, never stretched or recoloured.
- Three jobs from the outline: drafting a post or a review reply, writing a quote, turning a phone video into a captioned reel. Real screens: `claude-home.png` (crop the cookie banner) and `gemini-home.png` show the room that these tools are a text box. ChatGPT, Canva and CapCut home pages could not be captured (Cloudflare and a 404); if you want all five screens, mock the missing three as plain text-box frames, labelled illustrative, or show only the two real ones.
- Facts for this slide, pick two at most:
  - Indian (id `s06-google-kantar-genai-tried-2025`): only 31% of people surveyed had tried a generative AI tool; 60% not familiar with AI. The point: most of your customers and staff have not started, so a simple rule now is enough.
  - Indian (id `s06-google-ipsos-genai-shopping-india-2025`): festive shoppers who used generative AI used it "7.5 times on average" during their shopping, and "51% say it helped them make decisions". Label: festive shoppers, consumer context.
  - Global, India included (id `s06-wti-2024-ai-at-work-75`): "75% of knowledge workers use AI at work today" (Microsoft and LinkedIn, 31 markets). Companion (id `s06-wti-2024-byoai-smb-80`): 78% bring their own AI tools to work, 80% at small and medium companies. The point: your team is already using these tools, with or without a rule.
  - US (id `s06-brightlocal-2026-ai-recommendations-45`): use of ChatGPT and other AI tools to find local businesses rose from 6% to 45% in a year. The point: customers use them too, so what Google and reviews say about you now feeds the AI answer as well.
- The one rule on what to check before anything goes out: a person reads it, checks every fact, price and name, and makes it specific to the customer. Sourced reason (id `s06-brightlocal-2026-templated-replies-50`): "Generic or templated replies put off 50% of consumers" (US). Source render, small: `microsoft-work-trend-index-2024.png` if the Microsoft figure is shown (keep it small; the page header is a gradient).

### 11. Sharma Plumbing Works: the agency report before and after (minutes 15 to 19)

- Before: a 14-page report mockup, page thumbnails of reach, likes, followers, "times seen" charts, no decision. Photo that fits the before state: `photo-man-reading-report-pexels-9052193.jpg` (a man leafing through a thick printed report of charts).
- After: one page, five numbers with last month beside each, one decision at the bottom. Illustrative numbers, labelled, for example: profile views 1,240 (980), enquiries 31 (22), jobs won 9 (7), new reviews 6 (2), repeat customers 4 (3). Decision: "Pre-monsoon reminder to the 40 society contacts went out; 6 of the 9 jobs came from it. Repeat it in September for tank cleaning." Keep Sharma details per the brief (Pune, Kothrud, 18 staff, Rajesh and Aditya Sharma, phone masked).
- Poll: which would you pay for. Before / After.

### 12. Who does what (minutes 19 to 21)

- Owner reads five numbers monthly and decides; team or agency produces them with sources (a line under each number saying which screen it came from). Three questions: what are our five numbers, what changed and why, what will we do differently. No facts.

### 13. The 90-day plan (minutes 21 to 22)

- All six "one thing to check" items on one printable page: search your own name plus trade plus city (S1); open your Google profile today (S2); look at your last five posts as a client would (S3); write down one offer, one city, one monthly budget, do not spend yet (S4); list your last 20 customers and send one seasonal reminder (S5); fill the five-number scorecard for last month (S6). Mockup, print view.
- Closing image: the map fully lit.

### 14. Chapter

- Report the chapter's five numbers to IPA HQ monthly. Suggested chapter five: page or profile views, enquiries to the chapter contact, event registrations, new members, posts tagged to IPA. No facts; keep IPA as a good example only.

### 15. Closing

- Thank you, the series page link, TSL contact: dhruv@thestrategylab.in, thestrategylab.in. Map fully lit. No "next month" slide (last session).

## Images available (all in `assets/img/s06/`)

Captures, 1440x900 unless noted: `gbp-business-profile-page-in.png`, `gbp-performance-dashboard-sample.png` (1440x598 crop), `gbp-help-performance.png`, `linkedin-help-page-analytics.png`, `google-ads-help-overview-page.png`, `google-ads-home-in.png`, `meta-ads-manager-page.png`, `meta-business-suite-page.png`, `meta-help-instagram-insights.png`, `instagram-help-insights.png`, `google-kantar-genai-india-blog.png`, `microsoft-work-trend-index-2024.png`, `brightlocal-review-survey-2026.png` (1440x1300), `claude-home.png`, `gemini-home.png`.

Logos in `logos/`: `chatgpt-logo.svg`, `claude-logo-slate.svg`, `claude-logo-slate.png`, `claude-icon-rounded.svg`, `gemini-logo.svg`, `capcut-logo.svg`.

Photos (Pexels, credited): `photo-shop-owner-phone-pexels-17584250.jpg` (1920x2880 portrait), `photo-notebook-calculator-hands-pexels-5466814.jpg` (1920x1280), `photo-notebook-calculator-flatlay-pexels-8276240.jpg` (1920x1280), `photo-man-reading-report-pexels-9052193.jpg` (1920x1280).

Reusable from earlier sessions: the Google profile good example (AquaPulse Plumbing, `assets/img/s01/google-maps-aquapulse-plumbing-pune.png`, example id `x01-...` in `examples-01.json`) if a real profile is wanted next to the Performance illustration; the five-second-test site captures in `assets/img/s02/`; the HBR keeping-customers render in `assets/img/s05/` for the repeat-customers row.

## Calls we made (for REVIEW.md)

1. The session opens with the self-poll as the outline says; the sourced guess-the-number fact (31% tried a generative AI tool, Google-Kantar 2025) sits on the AI tools slide. Builder may move it up front.
2. Platform result screens behind login (Instagram insights, LinkedIn analytics, Google Ads account, Meta Ads Manager) are mockups built from the platforms' own metric names, labelled illustrative; Google's own Performance illustration is the one real "insights" image.
3. Canva has no logo file and no capture (Cloudflare block, not on Wikimedia Commons); its name is set in type. CapCut and ChatGPT home pages likewise not captured; logos exist for both.
4. Review figures are US (BrightLocal 2026) and the AI-at-work figure is global (Microsoft and LinkedIn 2024); each slide that uses them says so. Two Indian AI figures (Google-Kantar 2025, Google/Ipsos 2025) lead.
5. The carpet-shop photo found on Pexels was dropped because its location is not stated; only the shoe-shop photo is clearly Indian.

## notes_unverified (tried, not used)

- Google's older claims that a complete Business Profile makes customers "2.7 times more likely to consider a business reputable" and "70% more likely to visit": not on the current business.google.com/in/business-profile page or the help page; dropped.
- "92% of knowledge workers in India use AI at work" (press coverage of the Microsoft Work Trend Index 2024): the report page gives no India breakdown; its 92% figures are about AI power users. Dropped; the 75% global figure is used instead.
- BrightLocal 2025 figures from search summaries (89% expect businesses to respond, 83% use Google for reviews): the 2025 page opened does not state the response figure in that form; the 2026 edition was opened and used instead.
- Meta's official definition of the "Results" and "Cost per result" columns in Ads Manager: the Business Help Centre pages return "Sorry, something went wrong" to curl and the specific article could not be found; described in plain words without quoting Meta.
- The Google-Kantar full report PDF (Google Drive link on the blog post) was not opened; the figures are taken from Google's own blog post, which is the cited page.
- Canva, CapCut and ChatGPT official brand or home pages: 403, 451 and Cloudflare challenge respectively; not captured.
- Unsplash downloads returned HTML (the download endpoint needs a browser session); Pexels used instead.
