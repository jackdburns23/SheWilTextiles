# Landing Page Learning Notes

## Project Direction

This repo should be TypeScript-first.

For landing pages and client websites, use:

- TypeScript
- TSX
- React components
- Next.js
- Tailwind CSS

Python is useful for scripts, data cleanup, scraping, and automation, but it is NOT the main language for this landing page project.

## Core Concept

A landing page is NOT random design.

It follows a structure:

1. Attention (Hero)
2. Explanation (Services)
3. Proof (Photos / Testimonials)
4. Conversion (CTA)

## TypeScript Mental Model

A webpage is built from components.

```tsx
function Hero() {
  return <section>Hero content</section>;
}
```

A page is just components stacked together.

```tsx
export default function Page() {
  return (
    <main>
      <Hero />
      <Services />
      <Gallery />
      <CTA />
    </main>
  );
}
```

## Layout Math

Grid system:

columns = screen width / box width

Spacing (gap) controls how clean it looks.

Example:

```txt
Container width = 1200 px
Columns = 3
Gap = 24 px

Image width = (1200 - 2*24) / 3
```

## Photo Handling

DO NOT:
- Dump 100 images on page

DO:
- Show 6–12 images
- Link to full gallery
- Store photo info in TypeScript data
- Map over that data to render images

## Development Strategy

1. Build static sections
2. Replace repeated content with TypeScript arrays
3. Map over data
4. Convert repeated JSX into reusable components
5. Add real photos

## Mental Model

UI = function(data)

If you understand this, you can build anything.
