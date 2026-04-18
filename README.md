# NEO-LOGISTICS - UI8 Template

Welcome to the **Modern Logistics** template! This is a production-ready, highly-performant Next.js 15 (App Router) project built specifically for UI8 buyers. It features a clean, high-tech corporate cyberpunk aesthetic using Tailwind CSS v4, Framer Motion for scroll animations, and `@splinetool/react-spline` for interactive 3D hero sections.

## Quickstart Guide

1.  **Install Dependencies:**
    Make sure you have Node.js installed. Open your terminal in the root directory and run:
    ```bash
    npm install
    ```

2.  **Run the Development Server:**
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

This project is built using modern Next.js 15 App Router conventions.

*   `src/app/page.tsx`: The main landing page. It is a server component that composes the various sections.
*   `src/app/globals.css`: Contains your global Tailwind CSS configuration and CSS variables.
*   `src/components/sections/`: Contains the major page blocks (Hero, Features, Pricing, etc.).
*   `src/components/core/`: Contains reusable atomic UI elements like buttons and cards.
*   `src/config/`: Contains the hardcoded dummy data. **This is where you should go to change text!**

## Customizing the Template

### 1. Changing Colors (Tailwind v4)
This template uses the new Tailwind CSS v4 `@theme` directive. To change the primary neon colors, open `src/app/globals.css` and look for these lines:

```css
@theme {
  --color-neon-cyan: #00F0FF;   /* Change this for the primary glow */
  --color-neon-purple: #8A2BE2; /* Change this for the secondary background gradients */
}
```

### 2. Updating the Content
You don't need to dig through complex React components to change the text. We have extracted the core data into configuration files.
*   Open `src/config/mock-data.ts` to change the Features list, Pricing tiers, and the dummy data displayed in the Tracking Dashboard.
*   Open `src/config/site.ts` to change the top navigation links and SEO metadata.

### 3. Replacing the 3D Spline Scene
The Hero section features a 3D scene embedded via Spline. Currently, it uses a generic placeholder URL.

1.  Open `src/components/spline/HeroSplineWrapper.tsx`.
2.  Find the `SPLINE_SCENE_URL` constant.
3.  Replace it with the public URL of your own Spline scene (e.g., `"https://prod.spline.design/YOUR_SCENE_ID/scene.splinecode"`).

### 4. Adjusting Animations
All animations are powered by `framer-motion`.
*   **Hero section:** Uses standard `initial`/`animate` stagger arrays. See `src/components/sections/Hero.tsx`.
*   **Scroll reveals:** The Features and Pricing sections use the `whileInView` prop to trigger animations only when the user scrolls down to them. Adjust the `viewport={{ margin: "-100px" }}` prop to trigger them earlier or later.

## Deployment
This project is ready to be deployed on Vercel. Simply push this repository to GitHub and import the project into your Vercel dashboard.

```bash
npm run build
npm run start
```
