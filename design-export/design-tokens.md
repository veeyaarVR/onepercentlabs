# One Percent Labs: design tokens

Source of truth in code: `src/styles/global.css`. Light theme only. Sizes are in px, as Figma expects.
Where the site uses a fluid size, both the desktop (1440 wide) and phone (390 wide) values are given.

## Colors

| Token | Hex | Used for |
| --- | --- | --- |
| bg | `#F6F6FA` | Page background |
| surface | `#FFFFFF` | Placeholders, round arrow buttons |
| line | `#E2E2EA` | Hairlines, borders |
| fg | `#101018` | Headings and main text |
| muted | `#5B5B70` | Body copy, nav links, labels |
| accent | `#4F46E5` | Primary button, ring tick |
| accent-text | `#4338CA` | Brand dot, headline dot, links on hover |
| on-accent | `#FFFFFF` | Text on the primary button |
| ok | `#15803D` | The "Live now" status dot |

Derived colors (computed from the tokens above, so values are approximate):

| Name | Value | Used for |
| --- | --- | --- |
| contact-card fill | `#F3F2FD` | Accent at 7% over surface |
| contact-card border | `#918CE7` | Accent at 55% over line |
| hero glow | `#4F46E5` at 16% opacity | Radial glow behind the phones, fading to 0% at 68% |

## Fonts (all free on Google Fonts)

| Role | Family | Weights used |
| --- | --- | --- |
| Display | Schibsted Grotesk | 600 (700 for the founder initials) |
| Body | Instrument Sans | 400, 500, 600 |
| Mono (labels, email, motto) | Geist Mono | 400, 500 |
| Tamil (footer only) | Noto Sans Tamil | 400 |

## Type styles

| Style | Font | Weight | Desktop / phone size | Line height | Letter spacing |
| --- | --- | --- | --- | --- | --- |
| Hero headline (h1) | Display | 600 | 72 / 40 | 1.04 | -3% |
| Section heading (h2) | Display | 600 | 40 / 28 | 1.1 | -2% |
| Contact card heading (h3) | Display | 600 | 32 / 24 | 1.15 | -2% |
| Product name | Display | 600 | 21.6 | 1.6 | -1% |
| Brand wordmark | Display | 600 | 16 | 1.6 | -1% |
| Founder initials | Display | 700 | 48 | 1.6 | -2% |
| Hero subline | Body | 400 | 19.2 / 17 | 1.6 | 0 |
| Body | Body | 400 | 16 | 1.6 | 0 |
| Nav link | Body | 400 | 15 | 1.6 | 0 |
| Button | Body | 600 | 16 | 1.6 | 0 |
| Small button (ghost) | Body | 600 | 15 | 1.6 | 0 |
| Small text, footer | Body | 400 | 14 | 1.6 | 0 |
| Label | Mono | 400 | 12, UPPERCASE | 1.6 | +12% |
| Motto | Mono | 400 | 13 | 1.6 | 0 |
| Email address | Mono | 500 | 17 / 13.3 | 1.6 | 0 |

The hero headline wraps at about 16 characters per line, and the hero subline at about 48.

## Layout

| Item | Value |
| --- | --- |
| Content width | 960 max, 20 side gutter |
| Desktop frame | 1440 wide |
| Phone frame | 390 wide |
| Section padding | 80 top and bottom, with a 1px `line` rule on top |
| Header | 22 top and bottom padding, 26 gap between nav links |
| Hero text block | 48 from the header, then 24 to the subline, 32 to the buttons |
| Hero image | 2:1 on desktop (4:3 on phone), 56 below the buttons (40 on phone), cropped by the section's bottom rule |
| Product row | 32 top and bottom padding, 28 gap between icon and text, 1px `line` rule between rows |
| Product icon | 88 square (72 on phone), 512 × 512 source |
| Arrow button | 44 circle, 1px `line` border, `surface` fill, 18px arrow icon with a 1.75 stroke |
| Work with me | Two columns with a 56 gap (one column with a 40 gap on phone) |
| Contact card | 32 top and bottom, 28 left and right padding, 18 between items |
| Founder | 220 square photo, 48 gap to the text (stacked on phone, photo 200) |

## Corner radius

| Item | Radius |
| --- | --- |
| Buttons and the "Send an idea" nav button | 10 |
| Contact card | 14 |
| Founder photo | 16 |
| Product icon | 22 (18 on phone) |
| Arrow buttons | Full circle |

## Breakpoints

| Width | What changes |
| --- | --- |
| 800 and below | Work with me stacks to one column |
| 700 and below | Founder photo stacks above the text |
| 640 and below | Product rows stack, and the arrow button moves under the text at the right |
| 560 and below | Nav shows only "Send an idea" |

## Brand mark

The ring mark is a 100 × 100 vector in `public/favicon.svg`. Drag it into Figma and it stays editable.
- Ring: circle, radius 38, centered, 3 stroke, `#6B6B7C` at 50% opacity.
- Tick: vertical line from y 6 to 22, 9 stroke, round cap, `#6366F1`.
- In the header it renders at 26 × 26 using the site tokens, with the tick in `accent`.
