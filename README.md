# Pinku Neosoft Assessment Project

A modern, responsive **Next.js 15** e-commerce UI component project demonstrating **ProductCard components** with hover animations, dark/light themes, accessibility, and test coverage.

---

## Table of Contents

* [Demo](#demo)
* [Features](#features)
* [Tech Stack](#tech-stack)
* [Project Structure](#project-structure)
* [Getting Started](#getting-started)
* [Available Scripts](#available-scripts)
* [Testing](#testing)
* [Accessibility](#accessibility)

---

## Demo

> Check out the live demo of this project [here](https://pinku-neosoft-assessment.vercel.app).


---

## Features

* Fully responsive **ProductCard** component
* **Framer Motion** powered 3D hover effects
* **Dark mode / light mode** support using Tailwind and `next-themes`
* Accessibility optimized (`aria-labels`, `roles`, keyboard navigable)
* Product ratings with **full/half/empty star visualization**
* Disabled and status states for buttons
* Unit & integration tests using **Jest** and **React Testing Library**

---

## Tech Stack

* **Frontend:** Next.js 15, React 18
* **Styling:** Tailwind CSS v4
* **Animation:** Framer Motion
* **Testing:** Jest, React Testing Library, user-event
* **TypeScript:** Fully typed components
* **State & Theme:** Next-themes for dark/light mode
* **Images:** Next.js Image component

---

## Project Structure

```text
pinku-neosoft-assessment/
│
├─ src/
│   ├─ app/
│   │   ├─ api/
│   │   ├─ globals.css
│   │   ├─ layout.tsx
│   │   └─ page.tsx
│   │
│   ├─ components/
│   │   ├─ ProductCard.tsx
│   │   ├─ ProductCardSkeleton.tsx
│   │   ├─ FramerWrapper.tsx
│   │   └─ Skeleton.tsx
│   │
│   └─ theme/
│       ├─ theme-provider.tsx
│       └─ theme-toggle.tsx
│
├─ tests/
│   └─ ProductCard.test.tsx
│
├─ jest.config.ts
├─ jest.setup.ts
├─ package.json
├─ next.config.ts
└─ postcss.config.js
```

---

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/your-username/pinku-neosoft-assessment.git
cd pinku-neosoft-assessment
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view in the browser.

---

## Available Scripts

* `npm run dev` → Start development server
* `npm run build` → Build production app
* `npm run start` → Start production server
* `npm run test` → Run all Jest tests
* `npm run test:watch` → Run tests in watch mode

---

## Testing

Unit and integration tests are implemented using **Jest** and **React Testing Library**.

* `ProductCard.test.tsx` covers:

  * Rendering with/without ratings
  * Accessibility (ARIA labels, roles)
  * Button click events & disabled state
  * Star rating visualization (full, half, empty)

Run tests with:

```bash
npm run test
```

---

## Accessibility

* All interactive elements use `aria-label` and `role` attributes.
* Keyboard navigable buttons and links.
* Semantic HTML used for `figure`/`figcaption` on product cards.
* Star rating visually represented and accessible via aria labels.