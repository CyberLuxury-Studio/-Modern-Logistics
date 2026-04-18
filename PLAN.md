# Modern Logistics - UI8 Project Plan

**Tech Stack:** Next.js 16.2.4 (App Router), Tailwind CSS, Framer Motion, Spline, TypeScript.
**Aesthetic:** Clean, high-tech corporate cyberpunk (Neons, darks, glows, glassmorphism).

---

### 1. Project Structure (Next.js App Router)
A modular and scalable architecture that buyers can easily understand and extend.

```text
modern-logistics-ui8/
├── public/                 # Static assets
│   ├── images/             # Optimized placeholder images/textures
│   ├── fonts/              # Local geometric fonts (if not using next/font)
│   └── spline/             # Fallback static images for the 3D scene
├── src/
│   ├── app/                # Next.js App Router
│   │   ├── layout.tsx      # Root layout (fonts, global styles, nav/footer wrapper)
│   │   ├── page.tsx        # Main Landing Page (composed of section components)
│   │   └── globals.css     # Global Tailwind imports & custom glow utilities
│   ├── components/
│   │   ├── core/           # Reusable atomic UI (Buttons, Badges, Cards)
│   │   ├── sections/       # Page sections (Hero, Features, DashboardPreview, etc.)
│   │   ├── spline/         # Spline integration wrappers and loaders
│   │   └── ui/             # Complex UI elements (TrackingCard, MapWidget)
│   ├── config/             # Hardcoded dummy data and site config
│   │   ├── site.ts         # Navigation links, metadata
│   │   └── mock-data.ts    # Tracking data, feature lists, pricing tiers
│   ├── lib/                # Utility functions
│   │   └── utils.ts        # Tailwind merge/clsx utilities (cn function)
│   └── styles/             # Additional style configurations or animations
├── tailwind.config.ts      # Tailwind configuration with cyber theme extensions
├── tsconfig.json
├── next.config.mjs         # Next.js 16.2.4 config
└── package.json
```

---

### 2. Section-by-Section Breakdown

**A. Header / Navigation**
*   **Layout:** Fixed, glassmorphic (`backdrop-blur-md`, semi-transparent dark bg), top of the screen.
*   **Content:** Neon logo, nav links, "Get Started" glowing button.
*   **Animations:** Slide down on mount. Subtle neon text shadow on hover.

**B. Hero Section**
*   **Layout:** Two-column grid on desktop (Left: Copy, Right: Spline 3D Scene). Stacked on mobile.
*   **Content:** Large bold headline ("Logistics of Tomorrow, Tracked Today"), subheadline, Primary CTA (Glow), Secondary CTA (Outline).
*   **Spline Usage:** Embedded glowing 3D globe with animated delivery route lines (pulsing paths).
*   **Animations:** Staggered fade-up text. Spline scene scales in smoothly once loaded.

**C. Features / "Global Infrastructure"**
*   **Layout:** CSS Grid (1x3 on desktop) with high-tech "card" containers.
*   **Content:** Icons (Lucide React or custom SVG), Title, Description.
*   **Animations:** Scroll-triggered Framer Motion `whileInView`. Cards slide up and opacity fades in. Hovering on cards triggers a glowing border effect using Tailwind (`hover:shadow-[0_0_15px_rgba(0,255,255,0.5)]`).

**D. Dashboard Preview (New!)**
*   **Layout:** Full-width container with a massive mocked-up browser window/dashboard frame.
*   **Content:** A mock UI showing active tracking cards (dummy data: e.g., "Drone Delivery TX-902", status: "In Transit"), dark-mode mini-maps, and live stats widgets.
*   **Animations:** Parallax scroll effect on the dashboard frame. Tracking cards inside the mock UI will have continuous pulsing "active" dot animations.

**E. Pricing**
*   **Layout:** 3-column grid for pricing tiers. Center tier emphasized (scaled up slightly, persistent glow).
*   **Content:** "Starter", "Enterprise", "Corporate" tiers with feature lists and "Select Plan" buttons.
*   **Animations:** `whileInView` staggered fade-in.

**F. CTA (Call to Action)**
*   **Layout:** Centered content box inside a full-width container with a subtle radial gradient background to simulate a massive neon light source behind the section.
*   **Content:** Final push headline ("Ready to upgrade your supply chain?"), CTA button.

**G. Footer**
*   **Layout:** 4-column standard fat-footer.
*   **Content:** Brand column, Links, Legal, Social icons. Clean, low-contrast text.

---

### 3. Design System

**Color Palette:**
*   **Backgrounds:** `bg-slate-950` (Deep Space), `bg-slate-900` (Surface)
*   **Primary (Neon Cyan):** `#00F0FF` (Used for active states, key buttons, Spline glowing lines)
*   **Secondary (Corporate Purple):** `#8A2BE2` (Used for gradients, secondary accents)
*   **Text:** `text-slate-50` (Headings), `text-slate-400` (Body)
*   **Borders:** `border-slate-800` / `border-cyan-500/30` (for high-tech cards)

**Typography:**
*   **Headings:** *Space Grotesk* or *Syncopate* (Technical, wide, geometric)
*   **Body:** *Inter* or *Geist* (Clean, hyper-legible for data/dashboard elements)

**Spacing & Border Radius:**
*   Strict 4pt grid system (`gap-4`, `p-8`, etc.).
*   Sharp or slightly rounded corners (`rounded-md`, `rounded-lg`) to maintain a serious corporate aesthetic, avoiding overly bubbly large radiuses.

**Reusable Component List:**
*   `GlowingButton`: Standard interactive element with hover glow.
*   `TechCard`: Container with frosted glass background and subtle animated border gradient.
*   `TrackingBadge`: Small status indicator (e.g., Green for "Delivered", Cyan for "In Transit").
*   `NeonText`: Component that applies a specific drop-shadow for neon glow on text.

---

### 4. Animation Plan (Framer Motion)

*   **Global Variant:** `fadeUp` (y: 20 -> 0, opacity: 0 -> 1) used with `staggerChildren` for lists/grids.
*   **Hero Stagger:** `initial="hidden" animate="visible"` triggered on mount.
*   **Scroll Reveal:** Sections wrapped in `<motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>` to ensure smooth reveals as the user scrolls.
*   **Micro-interactions:**
    *   Tracking Card hover: `whileHover={{ scale: 1.02, y: -5 }}`.
    *   Live Status dots: `animate={{ opacity: [1, 0.5, 1] }} transition={{ repeat: Infinity, duration: 1.5 }}`.

---

### 5. Spline Integration Plan

*   **Scene Setup:** Create a low-poly or wireframe globe in Spline. Add emissive (glowing) materials to specific paths/arcs looping over the globe. Ensure background is transparent so it blends with Next.js `bg-slate-950`.
*   **Embedding Strategy:** Use `@splinetool/react-spline`.
*   **Performance / Lazy Loading:**
    *   Wrap the Spline component in Next.js `next/dynamic` to load it client-side only and prevent blocking the main thread during initial render.
    *   **Fallback:** While the Spline canvas loads, display a static, optimized WebP image of the globe with a pulsing loading indicator in the center.

---

### 6. Component Architecture (Key Elements)

*   `HeroSplineWrapper.tsx`
    *   *Props:* None.
    *   *Responsibility:* Dynamically imports Spline, handles the `isLoading` state, shows the fallback image, and renders the `<Spline />` component once ready.
*   `TrackingCard.tsx`
    *   *Props:* `id` (string), `destination` (string), `status` (enum: Transit | Delivered), `progress` (number).
    *   *Responsibility:* Displays individual logistical tracking data in the Dashboard Preview section. Consumes dummy data from `mock-data.ts`.
*   `GlowingButton.tsx`
    *   *Props:* `children` (ReactNode), `href` (string), `variant` (primary | outline).
    *   *Responsibility:* Renders an anchor tag or Next Link with highly specific Tailwind hover states for neon glow.

---

### 7. Performance Strategy

*   **Image Optimization:** All static assets (mock dashboard screenshots, background textures) will use Next.js `next/image` with WebP formats and strict width/height sizing to prevent layout shift.
*   **Font Loading:** Use `next/font/google` to optimize and self-host fonts, ensuring zero Cumulative Layout Shift (CLS) on the high-tech typography.
*   **Code Splitting:** Rely heavily on Next.js App Router Server Components (`layout.tsx`, `page.tsx`) and only use `"use client"` directives at the lowest possible leaf nodes (e.g., the Spline wrapper, Framer Motion animated components, interactive buttons).
*   **3D Render:** Rely on the `next/dynamic` strategy for the Spline scene to keep Initial Load JS minimal.

---

### 8. UI8 Packaging Checklist (Developer Focused)

Since this is a developer-centric codebase template for UI8 (no design files), the final zip must include:

1.  **[ ] Source Code:** Complete Next.js `src` folder, configurations, and public folder.
2.  **[ ] `.env.example`:** Example environment file (even if empty, establishes good practice).
3.  **[ ] `README.md`:** Extremely detailed documentation containing:
    *   Quickstart guide (`npm install`, `npm run dev`).
    *   Explanation of the project structure.
    *   Instructions on how to change colors in `tailwind.config.ts`.
    *   Instructions on how to replace the Spline URL with the buyer's own Spline creation.
    *   Where to replace the hardcoded dummy data in `config/mock-data.ts`.
4.  **[ ] Cleanup:** Ensure `.git`, `node_modules`, and `.next` build folders are completely removed before zipping.
5.  **[ ] Clean Linting:** Ensure `npm run lint` and `npm run build` pass with zero errors/warnings in Next.js 16.2.4.
6.  **[ ] UI8 Promotional Assets:** High-res screenshots of the Hero and Dashboard Preview sections to upload as presentation thumbnails on the UI8 product page.
