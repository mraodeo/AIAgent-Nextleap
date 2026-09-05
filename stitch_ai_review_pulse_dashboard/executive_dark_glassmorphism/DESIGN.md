---
name: Executive Dark Glassmorphism
colors:
  surface: '#121318'
  surface-dim: '#121318'
  surface-bright: '#38393f'
  surface-container-lowest: '#0d0e13'
  surface-container-low: '#1a1b21'
  surface-container: '#1e1f25'
  surface-container-high: '#292a2f'
  surface-container-highest: '#34343a'
  on-surface: '#e3e1e9'
  on-surface-variant: '#b9cacb'
  inverse-surface: '#e3e1e9'
  inverse-on-surface: '#2f3036'
  outline: '#849495'
  outline-variant: '#3a494b'
  surface-tint: '#00dce6'
  primary: '#e0fdff'
  on-primary: '#00373a'
  primary-container: '#00f2fe'
  on-primary-container: '#006a70'
  inverse-primary: '#00696f'
  secondary: '#deb7ff'
  on-secondary: '#4a007f'
  secondary-container: '#670fac'
  on-secondary-container: '#d2a0ff'
  tertiary: '#e0ffe8'
  on-tertiary: '#003921'
  tertiary-container: '#16f9a4'
  on-tertiary-container: '#006e45'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#6ff6ff'
  primary-fixed-dim: '#00dce6'
  on-primary-fixed: '#002022'
  on-primary-fixed-variant: '#004f53'
  secondary-fixed: '#f0dbff'
  secondary-fixed-dim: '#deb7ff'
  on-secondary-fixed: '#2c0050'
  on-secondary-fixed-variant: '#670fac'
  tertiary-fixed: '#50ffaf'
  tertiary-fixed-dim: '#00e293'
  on-tertiary-fixed: '#002111'
  on-tertiary-fixed-variant: '#005232'
  background: '#121318'
  on-background: '#e3e1e9'
  surface-variant: '#34343a'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.03em
  display-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '600'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 26px
    fontWeight: '600'
    lineHeight: 34px
    letterSpacing: -0.015em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 30px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
    letterSpacing: 0em
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
    letterSpacing: -0.005em
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
    letterSpacing: 0em
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
    letterSpacing: 0.01em
  label-md:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.06em
  data-metric:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.02em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter-xs: 0.25rem
  gutter-sm: 0.5rem
  gutter-md: 1rem
  gutter-lg: 1.5rem
  gutter-xl: 2rem
  gutter-2xl: 3rem
  layout-margin-mobile: 1rem
  layout-margin-tablet: 1.5rem
  layout-margin-desktop: 2.5rem
---

## Brand & Style

This design system expresses high-precision intelligence, operational command, and luxury analytical rigor. Designed for C-suite leaders and senior product directors monitoring customer sentiment at scale, the visual personality is unapologetically dark, luminous, and hyper-modern. It eliminates corporate clutter in favor of deep optical depth, focused visual hierarchy, and high-frequency analytical signal.

The aesthetic fuses **Glassmorphism** with **Deep Space Obsidian**. Surface layers hover over ultra-deep obsidian canvases using translucent dark frosted glass, accented by hair-thin glowing borders and atmospheric neon radial flares (cyan, electric violet, and emerald). The interface conveys immense processing capability while remaining serene, controlled, and visually effortless.

## Colors

The palette is engineered specifically for deep-field OLED displays and low-light operations environments.

### Core Canvas & Surfacing
- **Base Obsidian (`#08090E`)**: The absolute background foundation.
- **Midnight Elevated (`#0D0F18`)**: Base fill for docked containers and sidebars.
- **Glass Base (`rgba(13, 15, 24, 0.65)`)**: Primary card backdrop overlaid with `backdrop-filter: blur(20px)`.
- **Glass Raised (`rgba(22, 27, 44, 0.75)`)**: Elevated modals, tooltips, and floating widgets.

### Vibrant Accents & Gradients
- **Primary / Hyper Cyan (`#00F2FE` to `#4FACFE`)**: Primary metrics, real-time AI processing indicators, active tabs, and primary action affordances.
- **Secondary / Electric Violet (`#9B51E0` with accents to `#E94057`)**: AI inference confidence, sentiment velocity tags, anomaly clusters, and secondary interaction surfaces.
- **Tertiary / Emerald Glow (`#00F5A0` to `#00D9F5`)**: Positive customer sentiment ratings, uptime metrics, growth vectors, and healthy diagnostic markers.

### Contrast Borders & Overlays
- **Hairline Border Normal**: `rgba(255, 255, 255, 0.08)`
- **Hairline Border Highlight**: `rgba(0, 242, 254, 0.35)`
- **Hairline Violet Highlight**: `rgba(155, 81, 224, 0.35)`
- **Text Primary**: `#F8FAFC`
- **Text Muted**: `#94A3B8`
- **Text Faint**: `#475569`

## Typography

Typography balances display authority with dense analytical clarity. 

- **Plus Jakarta Sans** is employed for display scales, major card headers, and large metric callouts. Its contemporary geometric curves add a polished executive demeanor to quantitative figures.
- **Inter** handles high-density data tables, analytical readouts, body paragraphs, and functional UI metadata. Tabular figures (`font-variant-numeric: tabular-nums`) must be enabled on all numerical comparisons, percentages, and counter displays to preserve vertical alignment.
- Uppercase styling with expanded tracking (`letterSpacing: 0.06em`) is applied exclusively to operational micro-tags, column headers, and data status badges.

## Layout & Spacing

The dashboard relies on a 12-column fluid grid system pinned inside an executive widescreen canvas (`max-width: 1720px`).

### Breakpoints & Grid Rhythm
- **Desktop (1280px+)**: 12 columns, 24px gutters, 40px external margins. Persistent collapsible sidebar (280px expanded, 72px icon-only). Multi-widget bento rows.
- **Tablet (768px - 1279px)**: 8 columns, 16px gutters, 24px margins. Two-column widget grids. Sidebar collapses into a high-glass floating navigation drawer.
- **Mobile (< 767px)**: 4 columns, 12px gutters, 16px margins. Single-column stacked stream. Secondary metrics condense into horizontal touch carousels.

Spacing adheres strictly to a 4px/8px incremental base rhythm. Data cards use uniform internal padding: compact widgets leverage 16px (`gutter-md`), while primary visualization panels leverage 24px (`gutter-lg`).

## Elevation & Depth

Visual hierarchy uses frosted optical depth, multi-layered light refraction, and subtle ambient glows instead of opaque drop shadows.

1. **Canvas Level (Base Zero)**: Pitch dark midnight (`#08090E`) with fixed, high-radius background ambient radial gradients (e.g., subtle cyan bloom at top right at 4% opacity, violet glow bottom left at 3% opacity).
2. **Glass Level 1 (Panels & Dashboard Tiles)**: 
   - Background: `rgba(13, 15, 24, 0.65)`
   - Backdrop Filter: `blur(20px) saturate(160%)`
   - Border: `1px solid rgba(255, 255, 255, 0.07)`
   - Shadow: `0 8px 32px 0 rgba(0, 0, 0, 0.45)`
3. **Glass Level 2 (Hover States & Selected Containers)**: 
   - Background: `rgba(20, 24, 38, 0.75)`
   - Backdrop Filter: `blur(24px) saturate(180%)`
   - Border: 1px continuous hairline with gradient bias (top-to-bottom: `rgba(0, 242, 254, 0.4)` to `rgba(255, 255, 255, 0.05)`)
   - Shadow: `0 12px 40px 0 rgba(0, 0, 0, 0.6)`, plus an ambient outer glow `0 0 24px rgba(0, 242, 254, 0.12)`.
4. **Glass Level 3 (Modals, Overlays, Dropdowns)**: 
   - Background: `rgba(22, 27, 44, 0.88)`
   - Backdrop Filter: `blur(32px)`
   - Border: `1px solid rgba(255, 255, 255, 0.15)`
   - Shadow: `0 24px 64px 0 rgba(0, 0, 0, 0.75), inset 0 1px 0 rgba(255, 255, 255, 0.15)`.

## Shapes

The design uses a refined **Level 2 (Rounded)** geometric approach:
- Executive Data Tiles & Cards: `16px` (`rounded-lg`)
- Internal Sub-Modules & Data Tables: `12px`
- Input Fields, Selectors & Dropdowns: `10px`
- Interactive Buttons: `10px` to `12px`
- Status Badges, Live Pulse Markers, and Sentiment Chips: `9999px` (fully pill-shaped)

All borders are precision-rendered hairline borders (`1px`). Avoid thicker borders to preserve optical weight and lightness.

## Components

### 1. Executive Buttons
- **Primary (Glow Action)**: Linear gradient background (`#00F2FE` to `#4FACFE`), dark typography (`#08090E`, weight 600), subtle box shadow (`0 0 20px rgba(0, 242, 254, 0.4)`). On hover, scale transitions to `1.02` with amplified outer glow.
- **Secondary Glass**: Transparent glass background (`rgba(255, 255, 255, 0.05)`), border `1px solid rgba(255, 255, 255, 0.12)`, text `#F8FAFC`. On hover, border switches to `rgba(0, 242, 254, 0.4)` with faint cyan text shift.
- **Icon / Ghost**: Glass circle or rounded rectangle with subtle white stroke, interactive hover luminescence.

### 2. Glow Badges & Sentiment Chips
- **Positive Sentiment**: Emerald background (`rgba(0, 245, 160, 0.12)`), border `1px solid rgba(0, 245, 160, 0.3)`, text `#00F5A0`, accompanying pulsing circular beacon.
- **Neutral / Velocity**: Violet background (`rgba(155, 81, 224, 0.12)`), border `1px solid rgba(155, 81, 224, 0.3)`, text `#C084FC`.
- **Alert / Negative**: Rose background (`rgba(233, 64, 87, 0.12)`), border `1px solid rgba(233, 64, 87, 0.35)`, text `#F87171`.

### 3. Cards & Bento Data Widgets
- Top edge features an ultra-subtle highlight line (`inset 0 1px 0 rgba(255, 255, 255, 0.1)`).
- Header row combines an upper-case category label (`label-sm`), the metric title (`headline-sm`), and a three-dot glass action button.
- Card metrics display value via `data-metric` alongside a sparkline graph with neon linear gradient stroke and translucent area fill.

### 4. Input Fields & Controls
- **Inputs**: Midnight base (`rgba(8, 9, 14, 0.6)`), border `1px solid rgba(255, 255, 255, 0.1)`, placeholder text `#475569`.
- **Focus State**: Border transitions to `#00F2FE` with subtle box-shadow ring `0 0 0 2px rgba(0, 242, 254, 0.2)`.
- **Checkboxes & Radios**: Glass frame with `#00F2FE` checkmark fill and glowing ring in active state.

### 5. Specialized AI Widgets
- **AI Sentiment Dial**: Circular progress meter with multi-stop conic gradient (`#00F2FE` → `#9B51E0` → `#00F5A0`), centered executive confidence score, and real-time review volume subtitle.
- **Review Feed List**: Border-separated rows (`rgba(255, 255, 255, 0.04)`) with hover illumination, inline source attribution icons (App Store, Trustpilot, Google), and AI automated theme extraction tags.