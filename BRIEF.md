# IPA Digital Knowledge Series: build brief

Read this whole file before doing anything. Every agent on this build works from it.

## What we are building

A static website, hosted on GitHub Pages, that holds six 30-minute presentations. Dhruv Tewari (founder, The Strategy Lab) presents one a month over Zoom to the Indian Plumbing Association (IPA): board members, chapter heads, business owners and senior people at contracting, consulting, manufacturing and dealing firms. It is a contractual deliverable (clause 4 of the IPA x TSL agreement: one Digital Marketing Knowledge Session a month).

The site is also something IPA will share afterwards with 7,500+ members across 28 chapters, so it must stand on its own without a presenter.

Working folder: `/Users/dhruvtewari/Desktop/IPA/Knowledge-Series/` (a git repo, will be pushed to GitHub as `thestrategylab/ipa-digital-series`, public).

## The audience, and what that changes

Senior, experienced, mostly 40 to 65, not marketers, not here to learn how to post. They need to:

1. See why digital matters to their business now, with credible evidence.
2. Understand the pieces well enough to direct their teams or agencies.
3. Know how to judge whether the work is paying off.

So every session has the shape: why act now (a sourced fact), how it works (the map), who does what (owner vs team vs agency), how to measure it, one thing to check this week. Never "here is how to post a reel".

## The spine: the five-layer map

Every session uses the same map and highlights one layer.

| Layer | Plain meaning | Platforms | Deep dive |
| --- | --- | --- | --- |
| 1. Home | Where people land when they look you up | Google Business Profile, website (WordPress, Shopify, custom build), WhatsApp Business | Session 2 |
| 2. Discovery | Where people come across you and judge you | Google search, LinkedIn, Instagram, YouTube, Pinterest, reviews | Session 3 |
| 3. Paid reach | Paying to be seen by the right people | Meta ads, Google ads, LinkedIn ads | Session 4 |
| 4. Relationship | Turning one job into repeat work and referrals | WhatsApp lists, email, review requests, service reminders | Session 5 |
| 5. Measurement | Knowing what is working | Platform insights, a one-page monthly scorecard | Session 6 |

## Fixed running order (30 minutes)

| Minutes | Segment | What happens |
| --- | --- | --- |
| 0 to 3 | Guess the number | A poll on one real market fact, then the answer revealed on click, source under it |
| 3 to 5 | Map recap | The five layers, this month's highlighted |
| 5 to 15 | The topic | Three ideas, each with one real example, a "what do you think" poll midway |
| 15 to 19 | Sharma Plumbing Works | Our fictional business, before and after on this month's layer, closing with a "which one would you call?" poll |
| 19 to 21 | Who does what | Owner decides / team does / agency does, and three questions to ask them |
| 21 to 22 | One thing to check | One check for your business, one for your chapter |
| 22 to 30 | Q&A | Open questions; last slide names next month's topic |

Polls are run as Zoom polls by the presenter; the slide shows the question and the options, and the answer is revealed on click. No backend.

## Sharma Plumbing Works (fictional, use everywhere)

Sharma Plumbing Works, Pune. Founded 2006 by Rajesh Sharma, now run with his son Aditya. 18 staff. Residential and small commercial plumbing contracts, maintenance work for housing societies, some fittings supply. Excellent word of mouth, almost nothing online. Phone: +91 98XXX XXXXX (always masked). Address: Kothrud, Pune (no street number). Logo: a simple wordmark the foundation agent designs (brown text, a small cyan drop is NOT allowed, use a neutral blue or no icon; the cyan belongs to TSL).

"Before" states are always Sharma's. "After" states are always Sharma's. We never show a real member's or real competitor's weak profile. Real businesses appear only as good examples.

## Dhruv's feedback after seeing the Session 1 deck (applies to every deck, and Session 1 must be updated to match)

"The content is right, but it is a little boring. I want a slide that explains what Discovery and the other layers mean in the offline world, then compares that to how the same people behave online."

What this means in practice:

1. **The offline mirror slide (new, every session).** Right after the map recap, one slide titled on the lines of "You already do all five. Offline." A two-column build-up, one row per layer, revealed row by row: the offline version this audience has run for 30 years on the left, the online version on the right. Session 1 shows all five rows; later sessions show the full table with their layer highlighted and the others quiet. Use this mapping, in these words or better:
   - Home: the office, the signboard, the visiting card. Online: the Google profile, the website, WhatsApp Business.
   - Discovery: word of mouth, the architect who recommends you, the trade fair stall, the Yellow Pages and JustDial listing. Online: Google search, LinkedIn, Instagram, YouTube, reviews.
   - Paid reach: the newspaper ad, the hoarding on the highway, sponsoring the chapter dinner. Online: Google, Meta and LinkedIn ads, aimed at one city and one kind of buyer.
   - Relationship: the diary of old customers, the Diwali calendar, dropping in on site. Online: the WhatsApp list, the service reminder, the review request.
   - Measurement: the ledger and the gut feel. Online: five numbers once a month.
   The point the notes make: the customer did not change what they do, they changed where they do it. Then one line of evidence: the same person who once asked a neighbour now asks a phone first (use a sourced fact from the session's sources file where one fits; do not invent one).
2. **Offline people vs online people, same people.** Wherever a session describes buyer behaviour, show the offline habit and the online habit side by side for the same buyer (the architect, the society secretary, the hospital's facilities head), not "offline customers" and "online customers" as two groups.
3. **More energy, same restraint.** The decks should feel alive, not like a report on a screen. Ways to do that within rule 8: full-bleed photo slides with one line of type over them (real, credited photos of Indian sites, bathrooms, pipework, trade fairs); numbers that count up on reveal (GSAP, 600ms); one or two dark slides per deck as a contrast beat (TSL Brown or near-black background, paper type) placed at the big idea and the Sharma reveal; real screenshots shown large, cropped to the part that matters, with a hand-drawn-feeling circle or underline on the one thing to look at; the journey and comparison slides as build-ups that change the picture on each click; a "pause and think" slide before each poll with only the question in big type. Never cyan to add energy. Never more than one idea per slide. Never emoji, clip art, gradients or stock-looking handshake photos.
4. **Titles that say something.** Slide titles are claims ("The architect checked you online before she called"), not labels ("The journey").

## Rules that apply to every file

1. **Plain English.** No marketing jargon. Banned on slides and in notes: funnel, CRO, CPL, CPA, CTR, ROAS, pixel, conversion rate, KPI, SEO (say "showing up on Google"), engagement rate, impressions (say "times seen"), CTA, retargeting (say "showing ads to people who already visited"), omnichannel, synergy. If a platform's own screen shows the word, explain it in plain words next to it.
2. **No em dashes or en dashes anywhere.** Use commas, full stops or colons. This is a house rule; the fact reviewer checks for it (U+2014, U+2013).
3. **Every number has a source.** Fetch the source page, read the figure in context, cite publisher, title, year and URL on the slide (small, under the number) and in `data/sources.json`. Search snippets are not sources. If a figure cannot be verified on a page you opened, drop it. Never estimate, round up, or quote a secondary blog. Prefer: IAMAI-Kantar, Think with Google India, Google-Bain-Temasek e-Conomy, Pitch Madison Advertising Report, dentsu India digital report, GroupM TYNY, Statista only when it cites the primary, BrightLocal, LinkedIn-Edelman, Bain / HBR, Meta and Google official pages, RBI/TRAI, Indian government data. Label the year. Indian figures first, global only when no Indian figure exists, and say so.
4. **No real company criticised.** Real brands and businesses only as good examples, by name, with a link. IPA sponsors and members may be in the room.
5. **Images and screenshots.** Use: official platform press and brand assets (Meta, Google, LinkedIn, Pinterest, YouTube, WhatsApp brand resource pages), screenshots of public pages that render without login (Google search results, Google Maps listings, public YouTube pages, public websites), free-licence photos (Unsplash, Pexels; record photographer and URL in `data/credits.json`), Wikimedia Commons with licence noted. Do NOT: hotlink images (download into `assets/img/`), use stock images with watermarks, use logos stretched or recoloured, screenshot anything behind a login. Where a platform screen cannot be captured (Instagram and LinkedIn mostly), build a faithful UI mockup in HTML/CSS in that platform's visual style, with a small "illustrative" label. Sharma before/after screens are always mockups.
6. **No decisions left for Dhruv.** Make the call, note it in `REVIEW.md` under "Calls we made". Dates are not shown anywhere ("Session 1" not "October"). No "TBC", "TBD", "lorem", placeholders or empty states in anything shipped.
7. **Indian context.** Rupees, Indian cities, Indian examples, Indian platforms where relevant (WhatsApp, JustDial, IndiaMART as mentions). Phone numbers masked.
8. **Design: TSL signature, not a TSL ad.** Light paper backgrounds (#F7F5F3 or white), TSL Brown #54453E and near-black #1A1A1A as the inks, Montserrat for headings. TSL Cyan #4DD1F4 is a signature: at most one small cyan element per slide (an underline, one number, one dot). Never cyan backgrounds, cards, headlines or glows. Warm grey #9B9189 for captions. TSL and IPA marks small in the footer of every slide; TSL logo at `assets/brand/tsl-logo.png` (dark mark on transparent, for light backgrounds), IPA logo at `assets/brand/ipa-logo.png`. The look should feel like a well-made keynote from a serious consultancy: generous whitespace, one idea per slide, big readable type (body never under 24px at 1920x1080, since it is screen-shared over Zoom and viewed on laptops), real imagery, no clip art, no emoji, no gradients, no glassmorphism.
9. **Accessibility and robustness.** Works offline from the folder (no build step, relative paths), works in Chrome, Safari and Edge, keyboard navigation, 16:9 slides that scale to the window, nothing cut off at 1280x720 or 1920x1080. All external scripts from cdnjs.cloudflare.com, pinned versions (GSAP 3.12.5 is fine). Fonts from Google Fonts.
10. **File hygiene.** Lowercase, hyphenated filenames. Every session self-contained in its folder except for shared `assets/`.

## Site structure

```
index.html                  home: the series, the map, six session cards, how to use
assets/css/base.css         tokens, type, shared components
assets/css/deck.css         slide engine styles
assets/js/deck.js           slide engine: keyboard, click-to-reveal, progress, notes link, fullscreen, print
assets/js/map.js            the five-layer map component (reusable, highlight a layer)
assets/img/                 downloaded images, screenshots, mockup assets
assets/brand/               logos
data/sources.json           every statistic: id, figure, claim as shown, publisher, title, year, url, fetched_on, used_in
data/credits.json           every image: file, source, licence, url
sessions/01/index.html      deck
sessions/01/notes.html      presenter notes (readable on a phone), minute marks, poll cues, what to click
sessions/01/polls.md        the poll questions and options, ready to paste into Zoom
sessions/02 ... 06          same
summary/index.html          executive summary for the IPA board (also printable to PDF)
README.md                   what this is, how to present, how to update, sources
REVIEW.md                   the 30-minute morning review checklist for Dhruv, plus "Calls we made"
```

## Slide engine requirements (foundation agent)

- One HTML file per deck, `<section class="slide">` per slide, engine handles the rest.
- Arrow keys, space, PageUp/Down, click on right/left halves, swipe on touch. `F` fullscreen. `N` opens notes.html in a new window. `P` print view (all slides stacked, for PDF export via browser print). `Esc` overview grid.
- `data-reveal` elements appear step by step on each keypress within a slide (used for poll answers and build-ups). GSAP for slide transitions and reveals; subtle, 300 to 500ms, no bounces.
- Progress indicator and slide count, small, bottom right. Footer with both logos bottom left. Current layer chip top right when a slide belongs to a layer.
- Speaker notes also embedded per slide in `<aside class="notes">`, hidden in deck view, shown in notes.html by reading the same file (fetch and parse) or by a shared JSON; pick the simplest that works offline with `file://` in Chrome (fetch on file:// fails in Chrome, so either inline notes into notes.html at build time or have deck.js render the notes view from the same document via a `?notes` query). Make the decision, document it in README.
- Scales to any window with a 16:9 stage at 1920x1080 design size, CSS transform scale.
- Deep links: `#5` goes to slide 5.
- Zero console errors.

## Session outlines

Each session: 14 to 18 slides. Titles below are the working titles. Builders may improve wording but not drop segments.

### Session 1: What "digital" actually means

Big idea: digital is not "being on Instagram". It is five layers that hand a customer from one to the next, and most businesses only have one or two switched on.

- Guess the number poll: how many Indians are online, and what share of people look online before hiring a service or buying from a business. Research both; use whichever has a solid Indian source.
- Map: the five layers, interactive, each expands to show platforms with real logos.
- The journey: an architect in Pune needs a plumbing contractor for a hospital extension. Searches Google, reads reviews on a Maps listing, checks past work on Instagram, sends a WhatsApp enquiry, awards the job, leaves a review, the firm wins the annual maintenance contract. Each step lights a layer. Real screenshots or faithful mockups.
- Where businesses leak: usually Home (no or stale Google profile) and Relationship (no follow-up after the job).
- What do you think poll: how many of the five layers does your business have switched on today, 0 to 5.
- Sharma: introduced as it is today. "Which one would you call?": two search results side by side, a real well-run contractor (good example, named, linked) vs Sharma's bare listing (mockup).
- Who does what: owner decides which layers matter and what success looks like; team or agency runs them. Three questions: which layers are we on today, who owns each one, what are we measuring.
- Self-check slide: score yourself 0 to 5.
- One thing to check: search your own business name plus trade plus city on Google and see what a stranger sees. Chapter: do the same for the chapter and share the result in the chapter group.
- Next month: Your home online.

### Session 2: Your home online

Big idea: before you spend a rupee on ads, fix where people land. For most plumbing businesses that is the Google profile, not the website.

- Guess the number: share of clicks that go to the top three Google Maps results for a local search, or how many people who search for a local business visit or call within a day. Sourced.
- Google Business Profile as the standard: a real well-kept Indian trade business profile (screenshot of the public Maps listing): category, service areas, hours, photos, reviews, posts. Interactive checklist: tick what your own profile has.
- What do you think poll: who last updated your Google profile and when. Me / my team / an agency / nobody / we do not have one.
- Website decision tree: sell products online (Shopify) / a site you update yourself (WordPress) / portals, member logins, complex catalogues (custom build; IPA's own site indianplumbing.org is a React build, use it as the example). Real screenshots of each.
- Five seconds on the home page: what you do, where, proof, how to contact. Shown on a real example that passes.
- WhatsApp Business: business profile, catalogue, quick replies, away message. Official WhatsApp Business imagery or mockups.
- Sharma: Google profile before (no photos, wrong hours, two reviews from 2021) vs after (30 real-work photos, service areas, 40 reviews, replies). Before/after slider. Poll: which one would you call.
- Who does what: owner approves what the business claims to be and where it works; team keeps photos and reviews current; agency builds the site if needed. Three questions: is the profile claimed and who holds the login, when were photos last updated, how many reviews last month.
- One thing to check: open your Google profile today. Chapter: does the chapter have a findable page with events and a contact.
- Next month: Being found and trusted.

### Session 3: Being found and trusted

Big idea: each platform has one job. Pick the one or two where your buyers already are.

- Guess the number: share of B2B buyers who research a vendor and its people online before engaging. LinkedIn-Edelman or Think with Google B2B. Sourced, year stated.
- One platform, one job: flip cards for LinkedIn (credibility with architects, MEP consultants, developers), Instagram (showing finished work and the team), YouTube (how-to and walkthroughs that keep being found), Pinterest (design ideas, bathroom and fittings brands only). Real good examples from India, named and linked.
- What do you think poll: where do your best clients spend time. LinkedIn / Instagram / YouTube / WhatsApp groups / do not know.
- What to post when you have no time: before and after, site walkthrough, one tip a week, client thank-you. Phone video is enough.
- Reviews and reputation: a real example of a business replying well to a one-star review (public, any trade, not criticised), with the three-line reply formula.
- Your personal profile counts: for B2B the owner's LinkedIn often does more than the company page.
- Sharma: the owner's LinkedIn and the company Instagram before and after (mockups). Poll: which firm would you trust with a hospital's plumbing.
- Who does what: owner picks two platforms, appears in content now and then, approves the tone; team shoots on site; agency plans, edits, posts. Three questions: which two platforms and why, what did we post last month and what did it get, how do we handle a bad review.
- One thing to check: look at your last five posts as a client would. Chapter: share one photo and three lines from the last meeting, tagging IPA.
- Next month: Paying for reach.

### Session 4: Paying for reach

Big idea: ads multiply what exists. They do not fix a weak home.

- Guess the number: share of India's advertising spend now on digital vs TV and print. Pitch Madison, dentsu or GroupM, year stated.
- Three platforms, three jobs: Google ads catch people already searching; Meta ads reach people in your city who are not searching yet; LinkedIn ads reach decision-makers by title and company. Real examples of what each ad looks like to the viewer (official ad format examples from the platforms' own pages, or screenshots of public search results with ads).
- What do you think poll: has your business paid for online ads. Yes and it worked / yes but unclear / no / do not know.
- How a small test works: four-week timeline, one platform, one city, one offer, fixed budget, decide with numbers.
- Budget slider: move a monthly budget and see what it might buy on each platform as a range. Only if credible Indian benchmark ranges with sources exist; otherwise show the method (cost per enquiry = spend / enquiries) with Sharma's illustrative numbers clearly labelled illustrative.
- Mistakes that waste money: boosting random posts aimed at all of India, a vague ad, no way to know where the call came from.
- For chapters: promoting an event with a small budget and a registration link; use the 32nd Indian Plumbing Conference (IPC 2026, Chennai) as the example, facts from indianplumbingconference.com only.
- Sharma: the same Rs 5,000 two ways, a boosted post aimed at all India vs a Google ad for one service in Pune. Poll: which would you fund.
- Who does what: owner sets goal, budget and the one offer; agency runs the ads; team answers every enquiry within the hour. Three questions: what did one enquiry cost, how many became jobs, what did we stop spending on.
- One thing to check: write down one offer, one city, one monthly budget. Do not spend yet. Chapter: pick the next event that could use a small push.
- Next month: Keeping customers.

### Session 5: Keeping customers

Big idea: the cheapest new job is from a customer you already served. Plumbing has built-in repeat work, and most firms never ask for it.

- Guess the number: how much more it costs to win a new customer than to keep one. Bain or HBR; state on the slide that the ratio varies by industry.
- The customer list as an asset: a simple sheet with name, number, job, date, next service due (mockup).
- What do you think poll: are your last 50 customers' names and numbers in one place. Yes / scattered across phones / no.
- Reminders that bring work back: a 12-month calendar graphic, pre-monsoon checks, tank cleaning, pump servicing, annual maintenance contracts. A well-written WhatsApp reminder (mockup in WhatsApp style).
- Broadcast lists done right: a message people welcome vs one they block, side by side.
- Referrals and reviews: the moment to ask, with a real-looking review request message.
- Repeat value calculator: enter average job value and number of customers, see what one extra repeat job a year per customer is worth. Illustrative, labelled.
- For chapters: keeping members engaged between events with a short monthly update.
- Sharma: the after-job message before ("Payment received, thank you") and after (thank you, review link, reminder in six months). Poll: which would bring you back.
- Who does what: owner decides what the business promises after the job; team sends and logs; agency sets up tools. Three questions: repeat jobs last quarter, who owns the list, what customers heard from us after the job.
- One thing to check: list your last 20 customers, send one useful seasonal reminder. Chapter: one monthly update with a member spotlight.
- Next month: Measuring it.

### Session 6: Measuring it, plus the new tools

Big idea: you do not need a dashboard. You need five numbers once a month.

- Opening self-poll: how many of these five could you state for last month: profile views, enquiries, jobs won, reviews, repeat customers. Revealed one at a time.
- The one-page scorecard: an interactive template you can fill on screen and print.
- Where each number lives: screenshots or faithful mockups of Google Business Profile insights, Instagram and LinkedIn insights, Meta Ads and Google Ads result screens, each annotated with the one number to read. Official help-centre imagery is acceptable with credit.
- What do you think poll: who reads your reports today. Me / my team / the agency sends them but nobody reads / there are none.
- Reading the numbers: three if-then cards. Views up but enquiries flat; enquiries up but jobs flat; jobs up but no reviews. Likely cause and the question to ask.
- AI tools that save time: drafting a post or a review reply, writing a quote, turning a phone video into a captioned reel. One rule on what to check before anything goes out. Name real tools (ChatGPT, Claude, Gemini, Canva, CapCut) neutrally.
- Sharma: the agency's monthly report before (14 pages of reach and likes) and after (one page, five numbers, one decision). Poll: which would you pay for.
- Who does what: owner reads five numbers monthly and decides; team or agency produces them with sources. Three questions: what are our five numbers, what changed and why, what will we do differently.
- The 90-day plan: all six "one thing to check" items on one printable page. The map fully lit as the closing image.
- Chapter: report the chapter's five numbers to IPA HQ monthly.
- Closing: thank you, the series page link, TSL contact (dhruv@thestrategylab.in, thestrategylab.in).

## Review bar (both reviewers use this)

Design reviewer, per deck: first confirm the deck meets "Dhruv's feedback after seeing the Session 1 deck" above: the offline mirror slide exists after the map recap, buyer behaviour is shown offline and online for the same person, there are at least two full-bleed photo slides, at least one dark contrast slide, numbers count up, titles are claims. Missing any of these is a fail with a concrete fix. Then screenshot every slide at 1920x1080 and 1280x720 with headless Chrome (`"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --screenshot=... --window-size=1920,1080 "file://.../index.html#N"`) and look at them. Fail on: text cut off or overlapping, body text under 24px equivalent, more than one cyan element on a slide, cyan backgrounds or headlines, emoji, clip art, gradients, a slide with more than one idea, missing footer logos, broken images, console errors, a reveal that never shows, inconsistent spacing or type scale across slides, anything that looks like a template rather than a crafted deck. Also check index.html and notes.html render on a 390px wide phone.

Fact and language reviewer, per deck: every number on every slide traced to `data/sources.json` and the source page re-opened and the figure confirmed; banned words; em and en dashes (grep for U+2014 and U+2013 in all files); real companies only as good examples; no dates, TBC, placeholders; Sharma details consistent with this brief; polls present (guess the number, what do you think, which one would you call); who does what and one thing to check present; notes.html has minute marks and matches the slides; polls.md matches the slides; all links resolve (curl HEAD 200 or 301/302).

Both return a pass/fail with a numbered list of concrete fixes (file, slide, what to change). A deck ships only when both pass.

## Head agent, at the end

Serve the folder locally, open every page, screenshot a sample, run the dash and banned-word greps across the whole repo, validate `data/sources.json` and `data/credits.json` parse and every file they reference exists, check no image is hotlinked, write README.md and REVIEW.md, commit, create the public repo `thestrategylab/ipa-digital-series` with `gh`, push, enable GitHub Pages from the main branch root with `gh api`, wait for the live URL to return 200, and put the live URL at the top of REVIEW.md and README.md.
