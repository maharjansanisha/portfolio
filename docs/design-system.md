# Design system

The visual foundation of the portfolio, implemented with Tailwind CSS 4 tokens and a few React primitives. Only the homepage is built.

## Philosophy

The reference is the owner's Framer project, "Maharjan Sanisha". Its visual language was translated into tokens; its layers, content and imagery were not copied.

- **Type carries the design.** One grotesque, mostly medium weight, tightly tracked, with a large jump between display and interface sizes.
- **Monochrome frame.** The interface is black, white and grey. Project imagery supplies the colour.
- **One signal.** Lime marks status and selection. It is not decoration.
- **Tiles with intent.** Large rounded panels group or link to content, with 16px between them. Running text sits directly on the canvas, separated by space and hairlines.
- **Quiet depth.** Tonal steps and a 1px inset line. No drop shadows or gradients.
- **Calm motion.** Movement decelerates and does not bounce.

### Changes from the reference

| Reference | Here | Reason |
| --- | --- | --- |
| 14 text styles, many close in size | 11 roles | Each size has a distinct job |
| Sizes step at breakpoints | Fluid between 390px and 1440px | No jumps between layouts |
| 160px display falls to 48px | 160px to 64px | Keeps scale on phones; a smaller range also zooms better |
| 14px body on phones | 16px body at all widths | Readability |
| -0.02em tracking on small text | -0.01em to 0 | Small text needs more room |
| Muted text at 50% opacity | Solid colours | Predictable contrast on every background |
| Lime in both themes as one colour | Separate fill and text tokens | Light-theme lime is unreadable as text |
| Input borders at 4% opacity | `line-control`, at least 3:1 | Control edges must be visible |
| Inter alongside Open Sauce | Open Sauce only | One family |

## Typography

[Open Sauce](https://github.com/marcologous/Open-Sauce-Fonts) under the SIL Open Font License 1.1, self-hosted through `next/font/local` in `src/config/fonts.ts`. Files and licences are in `public/fonts/open-sauce/`.

- `font-sans`: Open Sauce Sans 400, 500, 600.
- `font-display`: Open Sauce Two 500, for `display` only.

Only Latin, upright faces are included. Font synthesis is off, so weights or italics that are not loaded are not faked. Add a font file before using one.

Each `text-*` utility sets size, line height, tracking and weight. Fluid sizes run from a 390px to a 1440px viewport.

| Role | Utility | Size (px) | Line height | Tracking | Weight |
| --- | --- | --- | --- | --- | --- |
| Display | `text-display` | 64 to 160 | 1 | -0.04em | 500 |
| Title | `text-title` | 40 to 80 | 1.05 | -0.025em | 500 |
| Heading 1 | `text-heading-1` | 28 to 48 | 1.15 | -0.02em | 500 |
| Heading 2 | `text-heading-2` | 20 to 26 | 1.25 | -0.02em | 600 |
| Heading 3 | `text-heading-3` | 18 to 20 | 1.3 | -0.015em | 500 |
| Lead | `text-lead` | 24 to 40 | 1.25 | -0.03em | 400 |
| Body large | `text-body-lg` | 18 | 1.5 | -0.01em | 400 |
| Body | `text-body` | 16 | 1.55 | -0.01em | 400 |
| Small | `text-small` | 14 | 1.5 | -0.005em | 400 |
| Label | `text-label` | 14 | 1.4 | -0.005em | 500 |
| Caption | `text-caption` | 12 | 1.4 | 0 | 500 |

`text-hero` is the homepage title only. It follows the reference's steps instead of scaling fluidly: 48px, then 100px from 700px, 130px from 1024px and 160px from 1440px.

Use lead for one introductory statement per page, and caption for short metadata only. Weights are `font-regular`, `font-medium` and `font-semibold`.

## Colour

Defined in `src/styles/tokens/color.css`. Tailwind's default palette is removed, so only these colours exist (plus `transparent` and `current`).

| Token | Light | Dark | Use |
| --- | --- | --- | --- |
| `canvas` | `#f2f2f2` | `#050505` | Primary background |
| `surface` | `#e6e6e6` | `#171717` | Tiles, secondary background |
| `surface-hover` | `#dcdcdc` | `#202020` | Hovered or nested surface |
| `grain-base` | `#ffffff` | `#000000` | Under the homepage grain, which composites it to about `canvas` |
| `tile` | 7% black | 8% white | Translucent homepage panels over blurred content |
| `tile-hover` | 2% black | 3% white | Hovered translucent panel |
| `tile-edge` | 2% black | 6% white | 1px inset edge, through `shadow-tile` |
| `media` | `#111111` | `#111111` | Image placeholder |
| `on-media` | `#bdbdbd` | `#bdbdbd` | Text on `media` |
| `ink` | `#0a0a0a` | `#f2f2f2` | Primary text, primary button |
| `ink-secondary` | `#3d3d3d` | `#bdbdbd` | Supporting text |
| `ink-muted` | `#555555` | `#949494` | Labels and metadata |
| `ink-hover` | `#2e2e2e` | `#d4d4d4` | Hovered primary button |
| `line` | `#d4d4d4` | `#2a2a2a` | Decorative dividers and hairlines |
| `line-control` | `#6b6b6b` | `#707070` | Boundaries of form controls |
| `accent` | `#7ecc00` | `#ccf500` | Accent fills |
| `accent-ink` | `#355900` | `#ccf500` | Accent-coloured text |
| `on-accent` | `#0a0a0a` | `#0a0a0a` | Text on an accent fill |
| `focus` | `ink` | `ink` | Focus outline |
| `success` | `accent-ink` | `accent-ink` | Success messages |
| `error` | `#a8001c` | `#ff7a8a` | Error messages |

There is no warning colour because nothing needs one yet.

### Contrast

Measured in a browser against `canvas`, `surface` and `surface-hover`. Figures are the lowest of the three.

| Foreground | Light | Dark |
| --- | --- | --- |
| `ink` | 14.4:1 | 14.6:1 |
| `ink-secondary` | 7.9:1 | 8.7:1 |
| `ink-muted` | 5.4:1 | 5.4:1 |
| `accent-ink`, `success` | 5.9:1 | 12.9:1 |
| `error` | 5.7:1 | 6.5:1 |
| `line-control` | 3.9:1 | 3.3:1 |

Primary button text is at least 12.1:1, and `on-accent` on `accent` at least 9.9:1.

`line` is deliberately faint; never rely on it to identify a control. In the light theme, `accent` is only 1.6:1 to 1.8:1 against the backgrounds. An accent dot or fill must therefore sit beside text that says the same thing.

### Themes

The theme follows the system preference using `light-dark()`, which the build compiles to a fallback for older browsers. Setting `data-theme="light"` or `"dark"` on `<html>` overrides it. The override works on `<html>` only, not on a section. `ThemeToggle` in `src/components/layout/` sets it and saves the choice; a script in the root layout restores it before the first paint.

## Spacing

The base unit is 4px (`--spacing`). Prefer these steps:

| Step | 1 | 2 | 3 | 4 | 6 | 8 | 12 | 16 | 20 | 30 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| px | 4 | 8 | 12 | 16 | 24 | 32 | 48 | 64 | 80 | 120 |

Responsive semantic spacing:

| Token | Under 700px | From 700px | From 1024px | Use |
| --- | --- | --- | --- | --- |
| `gutter` | 16 | 32 | 32 | Page side padding |
| `stack` | 32 | 48 | 48 | Between a heading group and its content |
| `section` | 64 | 80 | 120 | Between page sections |
| `tile` | 16 | 16 | 16 | Between tiles and grid columns |

Vertical rhythm: 8 to 12px within a text group, 16 to 24px between related groups, `stack` under a section introduction, and `section` between sections.

Do not name a spacing token after a CSS display value. A token named `block` or `grid` also creates `inline-block` or `inline-grid` width utilities, which break the standard classes.

## Layout

| Item | Value |
| --- | --- |
| Page maximum, `max-w-page` | 1920px |
| Statement width, `max-w-statement` | 960px, for large headings and lead text |
| Reading width, `max-w-reading` | 640px, for long-form text |

`max-w-reading` is not called `prose` because Tailwind reserves `max-w-prose` for 65ch.

`layout-grid` has 4 columns under 700px, 8 from 700px and 12 from 1024px, with a 16px gap. Children set their own spans, for example `col-span-4 laptop:col-span-8`.

### Breakpoints

| Prefix | Minimum width |
| --- | --- |
| (none) | 0 |
| `tablet:` | 700px |
| `laptop:` | 1024px |
| `desktop:` | 1440px |

These replace Tailwind's defaults, so `sm:` and `md:` do not exist. They follow the reference, which uses 1025px for laptop. Write styles for phones first.

### Shape

| Token | Value | Use |
| --- | --- | --- |
| `rounded-control` | 12px | Buttons and form controls |
| `rounded-media` | 16px | Images, including inside a tile |
| `rounded-tile` | 24px; 32px from 700px | Large panels |
| `rounded-full` | Round | Status dots and similar |

`shadow-hairline` draws the 1px inset line. `surface-tile` combines tile radius, surface colour and hairline. An image set into a tile with 16px padding nests cleanly with `rounded-media`. An element drawn over the tile's edge, such as a full-bleed image, covers the hairline.

## Components

Primitives are in `src/components/ui/`. All are Server Components.

| Component | Props | Notes |
| --- | --- | --- |
| `Container` | `as` | Page maximum width and gutter |
| `Heading` | `level` (1 to 4), `size` | Outline level and appearance are separate |
| `RollText` | `children` | Label that rolls to a copy while its `group` ancestor is hovered or focused |
| `Text` | `as`, `size`, `tone` | Tones: `default`, `secondary`, `muted`, `accent`, `success`, `error` |
| `Button` | `variant` | For actions. Defaults to `type="button"` |
| `ButtonLink` | `variant` | For navigation styled as a button |
| `TextLink` | `variant` | `inline`, `standalone` or `nav` |
| `Divider` | | A thematic break, rendered as `<hr>` |

Conventions:

- Buttons are `primary` (solid ink) or `secondary` (surface), with a minimum height of 48px.
- Use `inline` links inside sentences. Their permanent underline means colour is not the only cue.
- Use `standalone` links in lists whose context shows they are links. On touch screens they have no underline.
- For `nav` links, set `aria-current="page"` on the active item. The tap area extends beyond the text, so leave at least 16px between items.
- `className` adds layout classes. `cn` does not resolve conflicting utilities, so do not use it to override a component's colour or type. Use a prop.
- Use `border-line-control` for the edge of any future form control.

## Interaction and accessibility

- Every focusable element gets a 2px `focus` outline, offset 3px, through `:focus-visible`. Do not remove it. An ancestor that clips overflow can hide it.
- Hover styles apply only where hovering is supported. Nothing may be available on hover alone.
- Disabled buttons use 50% opacity and a not-allowed cursor.
- Selected text uses `accent` with `on-accent`.
- In forced-colours mode, animated link underlines become standard underlines.
- Pages must still provide landmarks, one `h1`, ordered heading levels, alternative text and a skip link when navigation is added.

## Responsive behaviour

- Type sizes scale fluidly; spacing, tile radius and grid columns change at breakpoints.
- Fluid sizes include a `rem` term, so they respond to the user's font size and to zoom.
- The primitives were checked at 320, 390, 700, 1024 and 1440px with no horizontal scrolling. Real page content still needs its own check; very long words at display size can overflow a phone.

## Motion

| Token | Value | Use |
| --- | --- | --- |
| `duration-fast` | 150ms (default) | Colour and press feedback |
| `duration-base` | 300ms | Underlines and small movement |
| `duration-slow` | 600ms | Entrances and large surfaces |
| `ease-standard` | `cubic-bezier(0.44, 0, 0.56, 1)` (default) | State changes |
| `ease-settle` | `cubic-bezier(0.22, 1, 0.36, 1)` | Decelerating movement |

`ease-standard` comes from the reference. `ease-settle` approximates its non-bouncing springs.

- Links: standalone and navigation underlines draw from the left over 300ms. Inline underlines thicken on hover.
- Buttons: colour changes on hover; the button moves down 1px while pressed.
- Focus: the outline appears at once. No component animates it.
- Reduced motion: CSS animations and transitions are cut to 0.01ms and smooth scrolling is off. Motion driven by JavaScript is not covered and must check the preference itself.

No animation library is installed.

The homepage's title entrance, title swap, tool marquee and phone header rotation are CSS, in `src/features/home/home.css`. The title swap runs from 1024px.

## Deferred

These reference features belong to later page work and are not implemented: scroll-linked text reveal, the 300px oversized text style, page transitions, smooth scrolling, parallax, the footer, project tiles and form fields.

Before adding the text reveal, make sure unrevealed text stays readable. The reference dims it to 20% opacity.

## Adding to the system

1. Use an existing token or primitive first.
2. Add a token to the matching file in `src/styles/tokens/` only for a value with a repeated role. Give it a light and a dark value if it is a colour.
3. Check contrast on all three backgrounds.
4. Update this document.
