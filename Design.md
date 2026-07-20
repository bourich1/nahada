
name: "Nahda shop"
description: "Nahda Shop is an Arabic-language RTL e-commerce storefront built around a bold crimson-red brand identity (#DE2627 / #D0021B). The design uses a high-contrast promotional hero banner with large Arabic typography, a sticky announcement bar in solid red, and a white-background product grid. Product cards follow a photo-first Airbnb-style listing pattern with 1:1 aspect-ratio images, floating badges, heart save buttons, and clear price/meta blocks beneath. Typography is split between Cairo (primary Arabic UI font) and Abel (secondary Latin/numeric accent). The layout is reading-direction-aware (RTL), with navigation anchored to the end (right in LTR terms) and the logo at the start. Elevation is minimal: a single subtle drop shadow on cards and one shadow tier for floating badges. Border radii are small and geometric (3px–12px). The palette is intentionally narrow: red, near-black, and white dominate, with yellow used as a promotional accent in hero imagery."
colors:
  secondary-yellow: "#dec435"
  off-white: "#fafafa"
  pure-white: "#ffffff"
  brand-red: "#de2627"
  deep-crimson: "#d0021b"
  mid-gray: "#696969"
  near-black: "#1a1a1a"
  true-black: "#000000"
  light-gray: "#f0f0f0"
  success-green: "#008a05"
typography:
  body-default:
    fontFamily: "Cairo"
    fontSize: "14px"
    fontWeight: "400"
    lineHeight: "21px"
  body-bold:
    fontFamily: "Cairo"
    fontSize: "14px"
    fontWeight: "700"
    lineHeight: "21px"
  body-semibold:
    fontFamily: "Cairo"
    fontSize: "14px"
    fontWeight: "600"
    lineHeight: "21px"
  ui-medium:
    fontFamily: "Cairo"
    fontSize: "16px"
    fontWeight: "700"
    lineHeight: "24px"
  section-heading:
    fontFamily: "Cairo"
    fontSize: "26px"
    fontWeight: "700"
    lineHeight: "36px"
  display-heading:
    fontFamily: "Cairo"
    fontSize: "36px"
    fontWeight: "700"
    lineHeight: "54px"
  hero-number:
    fontFamily: "Cairo"
    fontSize: "34px"
    fontWeight: "400"
    lineHeight: "68px"
  label-secondary:
    fontFamily: "Abel"
    fontSize: "14px"
    fontWeight: "400"
    lineHeight: "21px"
  label-small:
    fontFamily: "Abel"
    fontSize: "13px"
    fontWeight: "400"
    lineHeight: "19.5px"
  label-medium:
    fontFamily: "Abel"
    fontSize: "20px"
    fontWeight: "400"
    lineHeight: "45px"
  title-md:
    fontFamily: "Cairo"
    fontSize: "16px"
    fontWeight: "600"
    lineHeight: "22px"
  body-sm:
    fontFamily: "Cairo"
    fontSize: "13px"
    fontWeight: "400"
    lineHeight: "19px"
  price-current:
    fontFamily: "Abel"
    fontSize: "16px"
    fontWeight: "700"
    lineHeight: "22px"
  price-old:
    fontFamily: "Abel"
    fontSize: "13px"
    fontWeight: "400"
    lineHeight: "19px"
  badge-text:
    fontFamily: "Cairo"
    fontSize: "11px"
    fontWeight: "600"
    lineHeight: "16px"
rounded:
  sm: "3px"
  md: "12px"
  full: "9999px"
spacing:
  xs: "5px"
  sm: "8px"
  md: "10px"
  base: "15px"
  lg: "20px"
  xl: "24px"
  2xl: "25px"
  3xl: "30px"
  4xl: "34px"
  5xl: "40px"
  hero-pad: "78px"
  product-thumb: "356px"
Overview
Nahda Shop is an Arabic-language RTL e-commerce storefront built around a bold crimson-red brand identity (#DE2627 / #D0021B). The design uses a high-contrast promotional hero banner with large Arabic typography, a sticky announcement bar in solid red, and a white-background product grid. Product cards follow a photo-first Airbnb-style listing pattern with 1:1 aspect-ratio images, floating badges, heart save buttons, and clear price/meta blocks beneath. Typography is split between Cairo (primary Arabic UI font) and Abel (secondary Latin/numeric accent). The layout is reading-direction-aware (RTL), with navigation anchored to the end (right in LTR terms) and the logo at the start. Elevation is minimal: a single subtle drop shadow on cards and one shadow tier for floating badges. Border radii are small and geometric (3px–12px). The palette is intentionally narrow: red, near-black, and white dominate, with yellow used as a promotional accent in hero imagery.
Signature traits:
Dual typeface system: Pairs Cairo and Abel across the type hierarchy.
Photo-first product cards: 1:1 images with floating badges, carousel dots, and heart save buttons.
Tight geometric corners: Near-square geometry with corner radii capped at 12px for cards, 3px for small elements.
Layered elevation: Depth comes from 2 validated shadow tokens (card + badge).
Clear price hierarchy: Current price in bold Abel, old price in strikethrough muted Abel.
Colors
The palette uses 10 validated color tokens across 1 theme profile. Semantic roles stay attached to observed usage so generation agents can choose accents without inventing new color meaning.
Semantic naming:
action-text maps to brand-red: Role "text" is grounded by usage context "Primary brand color — used on nav links, borders, section headings, CTA text, and input borders. Defined as --primary-color, --light-primary-color, --dark-primary-color, --danger-color.".
surface-text maps to deep-crimson: Role "text" is grounded by usage context "Darker red variant used on h3.heading-primary and announcement bar background. Highest frequency color (270 hits).".
content-text maps to near-black: Role "text" is grounded by usage context "Primary body text and general foreground color across header, footer, and main content areas.".
surface-background maps to pure-white: Role "background" is grounded by usage context "Page and card surface background. Defined as --body-background-color.".
success maps to success-green: Role "text" is grounded by usage context "Used for 'Guest favorite' badge text and positive action signals.".
Text Scale
Brand Red (#de2627): Primary brand color — used on nav links, borders, section headings, CTA text, and input borders. Defined as --primary-color, --light-primary-color, --dark-primary-color, --danger-color.. Role: text. {authored: rgb(222, 38, 39), space: rgb}
Deep Crimson (#d0021b): Darker red variant used on h3.heading-primary and announcement bar background. Highest frequency color (270 hits).. Role: text. {authored: rgb(208, 2, 27), space: rgb, alpha: 0.07}
Mid Gray (#696969): Secondary/muted text in footer areas and card meta lines.. Role: text. {authored: rgb(105, 105, 105), space: rgb}
Near Black (#1a1a1a): Primary body text and general foreground color across header, footer, and main content areas.. Role: text. {authored: rgb(26, 26, 26), space: rgb}
True Black (#000000): Search icon, input text, and button foreground in specific interactive elements.. Role: text. {authored: rgb(0, 0, 0), space: rgb, alpha: 0.15}
Success Green (#008a05): Used for "Guest favorite" badge text and positive action signals.. Role: text. {authored: rgb(0, 138, 5), space: rgb}
Interactive
Secondary Yellow (#dec435): Secondary brand accent defined in CSS variable --secondary-color. Visible as yellow circles in hero banner imagery.. Role: secondary.
Light Gray (#f0f0f0): Dividers, subtle borders, and section separators in header and footer.. Role: border. {authored: rgb(240, 240, 240), space: rgb}
Surface & Shadows
Off White (#fafafa): Subtle surface variant for card or section backgrounds.. Role: background. {authored: rgb(250, 250, 250), space: rgb}
Pure White (#ffffff): Page and card surface background. Defined as --body-background-color.. Role: background. {authored: rgb(255, 255, 255), space: rgb, alpha: 0.8}
Typography
Typography uses Cairo, Abel across extracted hierarchy roles. Keep hierarchy mapped to these token rows before adding decorative type styles.
Mixes Cairo and Abel for visual contrast. Weight range spans regular, bold, semi-bold. Sizes range from 11px to 36px.
Font Roles
Headline Font: Cairo
Body Font: Cairo
Numeric / Price Font: Abel
Badge Font: Cairo
Type Scale Evidence
Table
Role	Font	Size	Weight	Line Height	Letter Spacing	Stack / Features	Notes
Primary body text, navigation links, product labels — the dominant Arabic UI typeface	Cairo	14px	400	21px	normal	Cairo, sans-serif	Extracted token
Emphasized body text, product names, bold labels	Cairo	14px	700	21px	normal	Cairo, sans-serif	Extracted token
Medium-emphasis labels and UI text	Cairo	14px	600	21px	normal	Cairo, sans-serif	Extracted token
Sub-headings, card titles, section labels	Cairo	16px	700	24px	normal	Cairo, sans-serif	Extracted token
Section headings like 'المنتجات الأكثر مبيعا' — confirmed by probe h3.heading-primary at 26px	Cairo	26px	700	36px	normal	Cairo, sans-serif	Extracted token
Large display headings, hero banner Arabic text	Cairo	36px	700	54px	normal	Cairo, sans-serif	Extracted token
Large promotional numbers (e.g. 30%) in hero banner	Cairo	34px	400	68px	normal	Cairo, sans-serif	Extracted token
Secondary labels, numeric values, Latin-script supplementary text	Abel	14px	400	21px	normal	Abel, sans-serif	Extracted token
Small secondary labels and captions	Abel	13px	400	19.5px	normal	Abel, sans-serif	Extracted token
Medium-size Abel labels, price or promotional callouts	Abel	20px	400	45px	normal	Abel, sans-serif	Extracted token
Card product title — medium weight, readable at small sizes	Cairo	16px	600	22px	normal	Cairo, sans-serif	New: card title
Card meta text — muted, small, secondary info	Cairo	13px	400	19px	normal	Cairo, sans-serif	New: card meta
Current price — bold, prominent, numeric	Abel	16px	700	22px	normal	Abel, sans-serif	New: price current
Old price — strikethrough, muted, numeric	Abel	13px	400	19px	normal	Abel, sans-serif	New: price old
Badge text — small, semi-bold, inside pill	Cairo	11px	600	16px	normal	Cairo, sans-serif	New: badge
Layout
Layout rhythm is inferred from spacing tokens and responsive breakpoint evidence.
This system uses a 5px base grid with scale values 5, 8, 10, 15, 20, 24, 25, 30, 34, 40, 78.
Spacing System
Table
Token	Value	Px	Notes
xs	5px	5	Extracted spacing token
sm	8px	8	Extracted spacing token
md	10px	10	Extracted spacing token
base	15px	15	Extracted spacing token
lg	20px	20	Extracted spacing token
xl	24px	24	Extracted spacing token
2xl	25px	25	Extracted spacing token
3xl	30px	30	Extracted spacing token
4xl	34px	34	Extracted spacing token
5xl	40px	40	Extracted spacing token
hero-pad	78px	78	Extracted spacing token
product-thumb	356px	356	Extracted spacing token
Elevation & Depth
Keep depth flat unless validated shadow or interaction evidence appears in the extraction payload. Do not invent shadows beyond this evidence boundary.
Shadow Evidence
Table
Shadow Token	Layers	Details
card-shadow	1	0px 5px 20px -10px rgba(0, 0, 0, 0.1)
badge-elevation	1	0px 2px 8px rgba(0, 0, 0, 0.12)
Interaction Signals
Table
Theme	Signal	Evidence
Light	outline-color	rgb(208, 2, 27) ; rgb(26, 26, 26) ; rgb(222, 38, 39)
Light	outline-width	3px
Light	outline-offset	0px ; -2px
Light	transform	matrix(1, 0, 0, 1, 130.125, -130.125) ; matrix(1, 0, 0, 1, 178, -178) ; matrix(1, 0, 0, 1, -350, 0)
Shapes
Shape language maps directly to rounded tokens. Keep component corners consistent with the role mapping below before introducing bespoke geometry.
Radius Roles
Table
Token	Value	Px	Role Mapping
sm	3px	3	Small buttons, inputs, tags
md	12px	12	Card corners, image clipping, modals
full	9999px	9999	Pills, badges, avatars, circular buttons
Geometry Evidence
Table
Radius Token	Shape	Units
sm	3px	px
md	12px	px
full	9999px	px
Components
Listing Cards
product-card — A photo-first card. 1:1 aspect-ratio image with {rounded.md} corner clipping, image carousel dots overlay, "الأكثر مبيعاً" (Guest favorite) floating badge top-right in RTL ({component.favorite-badge}), and a heart icon top-left ({component.icon-button-circle} in default outlined state, brand-red-filled when saved). Beneath the image: 4–5 lines of meta — product name ({typography.title-md} in Cairo), category/tag ({typography.body-sm} muted in mid-gray), and price block right-aligned in RTL: current price ({typography.price-current} in near-black) + old price ({typography.price-old} in mid-gray with text-decoration: line-through). Card container uses {shadow.card-shadow} on hover.
product-card-photo — The photo plate itself, separated as a token because some surfaces (wishlist, search results) reuse just the photo without the meta block. Wraps the 1:1 image, carousel dots, favorite badge, and heart button.
experience-card — A taller-aspect card (4:5) for featured/promotional listings. Same {rounded.md} clipping, floating "جديد" (NEW) badge top-right in RTL, heart top-left, and a single-line title beneath. Used for seasonal campaigns or highlighted products.
favorite-badge — White rounded pill ({rounded.full}) at {typography.badge-text} (11px / 600 weight). Text color: success-green (#008a05). Sits over the photo with {shadow.badge-elevation} applied for elevation. In RTL: positioned at top: 12px; right: 12px (logical top: 12px; inset-inline-end: 12px).
icon-button-circle — Circular button ({rounded.full}, 32px × 32px) with pure-white background at 80% opacity, 1px light-gray border. Heart icon inside uses near-black in default state, switches to brand-red fill when saved/active. Positioned at top: 12px; left: 12px in RTL (logical top: 12px; inset-inline-start: 12px).
price-block — RTL-aligned price container. Displays: current price in {typography.price-current} (Abel 16px/700) in near-black, followed by old price in {typography.price-old} (Abel 13px/400) in mid-gray with text-decoration: line-through. Prices separated by {spacing.sm} (8px). In promotional context, current price uses brand-red instead of near-black.
Do's and Don'ts
Guardrails protect Dual typeface system, Photo-first cards, Tight geometric corners, Layered elevation without adding unsupported visual claims.
Table
Do	Don't
Do maintain consistent spacing using the base grid	Don't make unsupported claims about absent visual features
Do maintain WCAG AA contrast ratios (4.5:1 for normal text)	Don't mix rounded and sharp corners in the same view
Do use the primary color only for the single most important action per screen	Don't use old-price styling without a valid current price next to it
Do verify evidence before writing new design-system guidance	Don't place badges or buttons outside the photo plate bounds
Do keep card images strictly 1:1 (product) or 4:5 (experience)	Don't stretch or crop images unevenly
Do align price blocks to the end (right in RTL)	Don't center-align prices inside product cards
Do use near-black for current price, brand-red only for promo prices	Don't use red for every price on the page
Responsive Evidence
Breakpoints
No distinct responsive breakpoints were extracted.
Agent Prompt Guide
Example Component Prompts
Create button component using validated primary color role and spacing tokens.
Create card component with mapped radius role and evidence-backed elevation.
Create form input component using inferred typography hierarchy and border roles.
Create product-card with 1:1 image, carousel dots, favorite badge top-right RTL, heart button top-left RTL, title in title-md, meta in body-sm, and price block with current + old price aligned to end.
Create favorite-badge as white pill with green text, badge-elevation shadow, positioned over card photo.
Create price-block RTL with Abel typography: bold current price + strikethrough old price in muted gray.
Iteration Guide
Start with extracted palette and typography roles only.
Map spacing and radius directly from token tables before visual polish.
Apply component patterns one section at a time and compare against source intent.
Keep elevation claims tied to explicit evidence in output.
Iterate with smallest diffs and re-check section hierarchy after each change.