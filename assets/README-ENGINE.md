# The engine and the shared components

Everything in `assets/` is shared by the home page and all six decks. Session builders do not edit it. If a session needs something the shared kit does not cover, add it to `sessions/0N/session.css` (already linked from the template) and keep it scoped to that deck.

Start a session by copying `sessions/00-template/` to `sessions/0N/`. Keep `notes.html` exactly as it is.

## Files

| File | What it is |
| --- | --- |
| `css/base.css` | Tokens, type, every shared component, the map styles |
| `css/deck.css` | The slide engine: stage, chrome, reveals, overview, print, notes view |
| `js/deck.js` | The engine. Keys, click and swipe, reveals, hash links, notes view, print, overview |
| `js/map.js` | The five-layer map. Config, logos, highlight and expand |
| `img/logos/` | Official platform marks. Listed with source and licence in `data/credits-foundation.json` |
| `img/sharma/logo.svg` | Sharma Plumbing Works wordmark (brown, navy pipe mark, no cyan) |
| `img/sharma/photos/` | Eight free-licence plumbing photos for Sharma "after" mockups |
| `brand/tsl-mark.png` | Trimmed TSL mark for footers and headers (`tsl-logo.png` is the untrimmed original) |
| `brand/ipa-logo.png` | IPA logo |

## Deck anatomy

```html
<link rel="stylesheet" href="../../assets/css/base.css">
<link rel="stylesheet" href="../../assets/css/deck.css">
<link rel="stylesheet" href="session.css">

<div class="deck" data-deck-title="Session 2: Your home online">
  <div class="stage">
    <section class="slide" data-layer="1" data-minute="3 to 5" data-segment="Map recap">
      <div class="slide__head"><h2 class="slide__title">...</h2></div>
      <div class="slide__body">...</div>
      <aside class="notes"><p><strong>Minutes 3 to 5.</strong> ...</p></aside>
    </section>
  </div>
</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script src="../../assets/js/map.js"></script>
<script src="../../assets/js/deck.js"></script>
```

The stage is 1920 x 1080 and scales to the window with a CSS transform. Write every size in px against that stage. Body text is 30px (`--d-body`), captions and source lines 24px (`--d-caption`), never smaller.

### Section attributes

| Attribute | Effect |
| --- | --- |
| `data-layer="1..5"` | Shows the layer chip top right ("Layer 1: Home"). Omit on slides that belong to no single layer |
| `data-minute="5 to 15"` | Minute mark shown in the notes view and the table of contents |
| `data-segment="Guess the number"` | Segment label in the notes view |
| `data-title="..."` | Overrides the title the notes view picks up (it otherwise reads the slide's first heading) |
| `data-chrome="none"` | Drops the footer logos and slide count (use only if a slide is a full-bleed image) |

Slide modifiers: `slide--title`, `slide--closing`, `slide--section` (big numeral divider), `slide--white` (white instead of paper), `slide--dark` (TSL Brown ground, paper type; `slide--black` for near-black), `slide--photo` (full-bleed photo).

### Contrast beats (the brief's "more energy, same restraint")

- **Dark slide.** `<section class="slide slide--dark">` and write the slide as usual: titles, statements, lists, polls and sources all switch to paper type. The footer logos sit on a paper plate automatically. One or two per deck, at the big idea and at the Sharma reveal. A "pause and think" slide before a poll is a dark slide holding only `<p class="statement statement--xl">` inside `slide__body slide__body--center`.
- **Full-bleed photo.** `<section class="slide slide--photo"><img class="photo__img" src="..." alt="..."><div class="photo__text"><p class="photo__line">One line.</p><p class="photo__credit">Photo: Name, <a href="...">Pexels</a></p></div></section>`. The line sits on a flat dark band (no gradients). Real, credited photos only, recorded in `data/credits.json`.
- **Count-up numbers.** Put `data-countup` on the element whose text holds the figure (`<p class="poll__figure" data-countup>1,002.85 million</p>`, `<span class="bignum" data-countup>59%</span>`). The first number in the text counts from zero over 600ms when the element is revealed, or when its slide arrives if it is not inside a reveal. Grouping and decimals are kept and the text always ends exactly as written. Put the attribute on the innermost element that holds only text; it rewrites `textContent`.
- **The ring.** `<span class="ring" style="left:-0.5em; top:-0.4em; width:10em; height:2em" aria-hidden="true"></span>` inside any `position: relative` parent draws a hand-drawn-feeling circle around the one thing to look at on a screenshot or shell. `ring--paper` on dark grounds; `ring--cyan` counts as the slide's one cyan element. Add `data-reveal` to draw it on a click.

### Layout helpers inside a slide

`slide__head` (title block), `slide__title` (68px, `slide__title--xl` for 88px), `slide__lede`, `slide__body` (fills the rest; add `slide__body--center` or `slide__body--end`), `cols cols--2 | cols--3 | cols--2-1 | cols--1-2 | cols--3-2` with `cols--center`, `statement` and `statement--xl` for one big sentence, `bignum` and `bignum--md` for one big figure, `list` on `ul` or `ol` (`list--big` for 38px), `steps` with `step`, `step__n`, `step__t` for journeys, `stack-8/16/24`, `mt-16/32/48/64`, `w-60/70/80`, `center`.

### Reveals

Add `data-reveal` to anything that should appear on a click. Unnumbered reveals step in document order. Numbered reveals (`data-reveal="1"`, `data-reveal="2"`) step in numeric order, and elements sharing a number appear together. Do not mix the two styles on one slide. The revealed state is the class `is-revealed`; GSAP adds a 450ms fade and rise when it is loaded, and nothing breaks when it is not.

A `.poll__answer[data-reveal]` also marks the poll's `data-correct` option when it appears.

### Keys and gestures

Right arrow, down arrow, space, PageDown, Enter: next reveal, then next slide. Left arrow, up arrow, PageUp, Backspace, shift+space: back. Home and End. `F` full screen. `N` opens `notes.html` in a window named `ipa-notes`. `P` print view (stacked slides, a "Print or save as PDF" button; Cmd+P also works from any mode because `@media print` stacks the slides itself). `Esc` or `O` overview grid; click a slide to jump. `?` or `H` help. Click the right half to go forward, the left half to go back; clicks on links, buttons, inputs, the before/after slider, the map and anything with `data-no-nav` do not navigate. Swipe on touch screens.

### Links

`index.html#5` opens slide 5. `#5-2` opens slide 5 with two reveal steps shown; `#5-all` fully revealed. `?mode=overview` and `?mode=print` open straight into those views, and `?motion=off` disables GSAP (headless Chrome never fires animation frames under a virtual time budget, so screenshot runs that step through reveals or open map panels should pass `?motion=off`). These are for QA screenshots as much as for sharing.

### The notes mechanism (decision)

Chrome blocks `fetch()` on `file://`, so the notes are not fetched. Each deck's `notes.html` is a two-line page that redirects to `index.html?notes`. In `?notes` mode `deck.js` hides the stage and builds a phone-friendly page from the same document: slide number, title, minute mark, segment, layer chip, a Zoom poll cue (question and options read from the slide's `.poll`), a clicks cue (how many reveals the slide has) and the slide's `<aside class="notes">` HTML. This works from the folder, from GitHub Pages, and in Safari and Edge, and the notes can never drift from the deck. Inside a note, wrap a cue in `<span class="cue">Click</span>`.

When the deck and the notes are open in the same browser, the notes follow the deck: the deck writes the current slide number to `localStorage` and the notes window scrolls to it. This is a convenience, not a requirement; it is wrapped in try/catch and silently does nothing where storage is blocked.

### Script API

`IPADeck.go(n)`, `IPADeck.next()`, `IPADeck.prev()`, `IPADeck.current()`, `IPADeck.count`, `IPADeck.setMode('overview' | 'print' | 'deck')`, `IPADeck.initComponents(root)` (wires any `.ba` sliders you add later). The deck element fires `slidechange` with `detail.index` and `detail.slide`. The progress line at the bottom is a `transform: scaleX()` on `.deck__progress-bar`, not a width change.

## The map (`map.js`)

```html
<div data-map></div>                          all five lit, none highlighted
<div data-map data-highlight="2"></div>       layer 2: cyan node, bold name (this is the slide's one cyan element)
<div data-map data-lit="1,2"></div>           only 1 and 2 lit, the rest hollow (journeys that light up step by step)
<div data-map data-lit="none"></div>
<div data-map data-expanded="2"></div>        panel for layer 2 open on load
<div data-map data-platforms="inline"></div>  logos always visible under each layer, no clicking
<div data-map data-compact></div>             hides the plain-meaning line and session label
<div data-map data-static></div>              not clickable
```

Script: `var api = IPAMap.render(el, { highlight: 2, lit: [1, 2], expanded: 2, platforms: 'inline', compact: false, static: false })`, then `api.highlight(3)`, `api.light([1, 2, 3])`, `api.light('all')`, `api.expand(2)`, `api.collapse()`. A rendered element keeps its API at `el.__ipaMap`, so a slide can light layers on each reveal:

```html
<section class="slide" id="journey">
  <div data-map data-lit="none" id="journey-map"></div>
  <p data-reveal="1">Searches Google</p> ...
  <script>
    document.querySelector('.deck').addEventListener('slidechange', function () {});
  </script>
</section>
```

Simpler: give each reveal element a `data-light="2"` attribute and add this to `session.css`'s companion script if needed; or render a separate map per state. The config (`IPAMap.LAYERS`) holds the number, key, name, meaning, session and platforms for every layer, with logo files or drawn icons. Sizes are em based: `.slide .map` is 26px by default; `map--lg` is 32px.

## Shared components (base.css)

All component sizes are em based, so they scale with the container's font-size. In a slide, `.plat` shells default to 26px (`plat--lg` 30px, `plat--sm` 22px), the phone to 24px with a 20px shell inside, the before/after slider to 26px with a 24px shell inside.

| Component | Classes |
| --- | --- |
| Chip | `chip`, `chip--solid`, `chip--quiet`, `chip__n` for the "Layer 2" part |
| Card | `card`, `card--flat`, `card--paper`, `card__title` |
| Callout | `callout`, `callout--check` (adds the tick), `callout__mark`, `callout__title`, `callout__text` |
| Two-up | `two-up`, `two-up--tight`, `two-up__label` on each child's first line |
| Source line | `source`, `source__pub` for the publisher name. Always under the number it supports |
| Poll | `poll`, `poll--inline` (question across, options left, answer right), `poll__q`, `poll__options`, `poll__option`, `poll__key`, `data-correct` on the right option, `poll__answer[data-reveal]`, `poll__figure`, `poll__claim` |
| Before/after | `ba` (set `--ba-ratio` and a width), `ba__pane ba__before`, `ba__pane ba__after`, `ba__tag`, `ba__handle`, `input.ba__range`. Each pane holds one shell |
| Phone | `phone`, `phone--wide`, `phone__notch`, `phone__screen` holding one `.plat` |
| Google Maps listing | `plat gmaps`, `gmaps__photos` (three images or `gmaps__nophoto`), `gmaps__body`, `gmaps__name`, `gmaps__rating` with `stars` (`--rating: 4.8`), `gmaps__meta`, `gmaps__actions` with `gmaps__action` and `gmaps__action--primary`, `gmaps__rows` with `gmaps__row`, `gmaps__open`, `gmaps__closed`, `gmaps__review`, `gmaps__review-head`, `gmaps__avatar`, `gmaps__review-meta`, `gmaps__reply` |
| Google search result | `plat` wrapping `gsr__searchbar`, then either `gsr` (web result: `gsr__site`, `gsr__favicon`, `gsr__sitename`, `gsr__url`, `gsr__title`, `gsr__snippet`; add `gsr--ad` and `gsr__sponsored` for an ad) or `gsr__localpack` with `gsr__local`, `gsr__local-name`, `gsr__local-line`, `gsr__local-action` |
| WhatsApp chat | `plat wa`, `wa__header`, `wa__avatar`, `wa__name`, `wa__verified`, `wa__status`, `wa__chat`, `wa__day`, `wa__msg wa__msg--in` or `--out` (line breaks are kept), `wa__meta`, `wa__link`, `wa__input` |
| Instagram profile | `plat ig`, `ig__top`, `ig__head`, `ig__avatar` (`ig__avatar--plain` for no story ring), `ig__stats` with `ig__stat`, `ig__bio`, `ig__buttons` with `ig__btn` and `ig__btn--primary`, `ig__tabs`, `ig__grid` (3 or 6 images) or `ig__empty` |
| LinkedIn profile | `plat li`, `li__banner` (`li__banner--brand` for navy), `li__avatar`, `li__name`, `li__headline`, `li__meta`, `li__buttons` with `li__btn`, `li__btn--primary`, `li__btn--muted`, `li__section` with a `p.li__section-h` heading (a `p`, not an `h4`, so the slide's heading order stays intact) |
| Real screenshot | `shot` wrapping an `img` and a `shot__caption` with the page URL |
| Who does what | `wdw`, three `wdw__col` each with `wdw__role` and a `ul`, then `wdw__questions` with an `ol` |
| Logo tile | `logo-tile` (an `img`), `logo-tile--drawn` (an inline SVG, stroke 2) |
| Lockup | `lockup`, `lockup__tsl`, `lockup__sep`, `lockup__ipa` |
| Signature | `sig` (cyan underline on one word), `sig-dot`, `sig-rule`, `sig-num`. One per slide, and the map's highlighted node counts as it |

Every mockup shell carries `<span class="plat__tag">Illustrative</span>` as its first child. Real screenshots use `shot` instead and do not carry the tag.

### Sharma Plumbing Works kit

Facts never vary: Sharma Plumbing Works, Kothrud, Pune (no street number). Founded 2006 by Rajesh Sharma, now run with his son Aditya. 18 staff. Residential and small commercial plumbing contracts, maintenance for housing societies, some fittings supply. Phone always `+91 98XXX XXXXX`; WhatsApp link always `wa.me/9198XXXXXXXX`.

Classes: `sharma-logo` and `sharma-logo--sm` on the wordmark image; `sharma-avatar` for the navy initials avatar (`SP` for the firm, `AS` for Aditya, `RS` for Rajesh); `mock mock--before` and `mock mock--after` around a shell, with `mock__tag` if you want a Before or After label outside a slider. Photos: `assets/img/sharma/photos/work-01.jpg` to `work-08.jpg` (credited in `data/credits-foundation.json`; list them in your deck's `used_in` when you use them).

"Before" shells: no photos (`gmaps__nophoto`), few or old reviews, `gmaps__closed`, `ig__empty`, `ig__avatar--plain`, `li__btn--muted`, no bio link. "After" shells: photos, `gmaps__open`, reviews with a reply, a full bio with the WhatsApp link.

## The cyan rule

One small cyan element per slide at most: a `sig` underline under one word, one `sig-dot`, one `sig-num`, or the map's highlighted node. The TSL mark in the footer is the brand mark and is not counted. Never cyan backgrounds, cards, headlines or glows.

## Design decisions made here

- Caption grey is `#6E645D` (`--grey`), a deeper warm grey than the brand's `#9B9189`, so caption text reaches 5.2:1 on paper and 5.7:1 on white. The brand warm grey is kept as `--warm-grey` for hairlines and decoration only, never for text. `--brown-soft` is for the unlit map layers (large type) only, never for small text.
- Platform shells use the platforms' own type (Roboto or the system font) and their own colours, including greys lighter than ours, because they are faithful mockups. They are always labelled illustrative.
- Fonts come from Google Fonts as the brief asks, with Helvetica Neue and Arial as the fallbacks when offline.
- Both logos sit in every slide's footer, injected by `deck.js`, so no slide can forget them.
- Text inside a platform shell follows the platform's own scale (17 to 26px on the stage), the same as a real screenshot would. The slide's own text never goes under 24px. Keep shells at the sizes deck.css sets rather than enlarging them to pass a type check.
- The `.impeccable/` folder is the design hook's cache and config; it is gitignored.
