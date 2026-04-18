# Developer Prompt: Modern Logistics UI8 Template Generation

**Context:**
You are an expert Next.js developer, specialized in modern React (v19) and Next.js (App Router). Your task is to generate the entire front-page prototype for a UI8 template called "Modern Logistics". You will build out the UI exactly as specified, writing modular, clean, and highly performant code.

**Tech Stack Constraints:**
- Framework: Next.js (latest App Router conventions)
- Styling: Tailwind CSS (with arbitrary values where needed for glowing effects, glassmorphism)
- Animation: Framer Motion (v11+)
- 3D Integration: `@splinetool/react-spline` (for the Hero section)
- Icons: `lucide-react`
- Language: TypeScript (strict types)

---

### Design System & Variables

Please adhere to the following Tailwind configuration and class strategies:

*   **Colors:**
    *   Backgrounds: `bg-slate-950` (main body), `bg-slate-900/50` (glassmorphic panels)
    *   Primary Neon: `#00F0FF` (Cyan) - use for glowing accents, active states, buttons.
    *   Secondary: `#8A2BE2` (Purple) - use for subtle background radial gradients.
    *   Text: `text-slate-50` (headings), `text-slate-400` (paragraphs/subtitles).
*   **Typography:**
    *   Use a geometric sans-serif (e.g., Space Grotesk or Syncopate for headings) and a highly legible sans for body (Inter). Implement via `next/font/google`.
*   **Effects:**
    *   Neon Text Glow: Use custom drop shadows, e.g., `drop-shadow-[0_0_8px_rgba(0,240,255,0.8)]`.
    *   Glassmorphism: Use `backdrop-blur-md bg-slate-900/40 border border-slate-800/50`.
    *   Neon Box Glow: Use `shadow-[0_0_15px_rgba(0,240,255,0.4)]` on hover for cards/buttons.

---

### Component Requirements & Section Breakdown

Please generate the code for a single `page.tsx` that composes the following sections. Extract complex UI parts into modular, reusable components (assume they exist in `components/sections/` or `components/ui/` in your generated code blocks).

#### 1. Global Layout & Header
- **Layout Requirements:** Dark theme enforced. Smooth scrolling enabled.
- **Header:** Fixed at the top, glassmorphic background (`backdrop-blur-md`). Contains a text logo ("NEO-LOGISTICS") with a cyan glow, navigation links ("Features", "Dashboard", "Pricing"), and a "Get Started" glowing button.

#### 2. Hero Section
- **Layout:** Two-column CSS grid (Desktop) / Stacked (Mobile). Minimum height `100vh`.
- **Left Column:**
    - Headline: "Logistics of Tomorrow, Tracked Today" (use gradient text or bold white with cyan accents).
    - Subheadline: "AI-driven supply chain visualization with real-time 3D tracking."
    - Buttons: Primary (Solid with cyan glow) and Secondary (Outline with hover effect).
- **Right Column (Spline):**
    - Integrate `@splinetool/react-spline`.
    - Wrap the Spline component in Next.js `dynamic` with `ssr: false` to ensure client-side rendering.
    - Provide a placeholder/fallback UI (a pulsing glowing circle) while the Spline scene loads. Use a generic public Spline URL for testing (e.g., a globe or basic shape).
- **Animation:** Staggered fade-up for text elements on initial mount.

#### 3. Global Infrastructure (Features)
- **Layout:** A grid of 3 cards (`grid-cols-1 md:grid-cols-3 gap-6`).
- **Cards (TechCard):** Glassmorphic panels with a border. Inside: a Lucide icon, Title, and short description.
- **Interactivity:** On hover, the border should glow cyan and the card should translate slightly upward (`-translate-y-1`).
- **Animation:** Wrap in Framer Motion so they fade and slide up when scrolling into view (`whileInView`).

#### 4. Dashboard Preview
- **Layout:** Full width, centered. A large "browser window" mockup container mimicking a high-tech UI.
- **Content:**
    - Sidebar or top bar indicating "Live Tracking".
    - 2-3 "TrackingCards" inside the dashboard. These cards should display dummy data: ID (e.g., `TX-902`), Status ("In Transit" with a pulsing cyan dot), and a progress bar (e.g., 75% complete).
- **Animation:** Continuous pulsing animations for the "live" status dots using Framer Motion (`repeat: Infinity`).

#### 5. Pricing
- **Layout:** 3 columns. Center column should be visually distinct (slightly larger, persistent glowing border, marked as "Enterprise").
- **Content:** Tier name, price, list of features with checkmark icons, and a call-to-action button at the bottom of each card.

#### 6. CTA & Footer
- **CTA Section:** Centered text. Behind the text, place a large, heavily blurred cyan/purple radial gradient absolute div (`blur-[100px] opacity-30`) to look like a massive neon light source.
- **Footer:** Simple 4-column layout with dummy links, clean minimal text (`text-slate-500`).

---

### Code Generation Instructions
1. Generate the complete `src/app/page.tsx` file combining these sections.
2. Generate the essential extracted components (e.g., `HeroSplineWrapper.tsx`, `GlowingButton.tsx`, `TechCard.tsx`).
3. Ensure all Framer Motion imports are present and correctly typed.
4. Ensure the Tailwind configuration requirements are translated correctly into utility classes.
5. Provide code that is fully ready to be copy-pasted into a fresh Next.js App Router project and run immediately without syntax errors.