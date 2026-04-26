// LANDING PAGE REFERENCE FILE
// This file is NOT meant to run.
// This is a learning guide with patterns you will reuse.

// ==========================
// 1. BASIC PAGE STRUCTURE
// ==========================

function Page() {
  return (
    <main>
      <Hero />
      <Services />
      <Gallery />
      <CTA />
    </main>
  );
}

// ==========================
// 2. HERO SECTION
// ==========================

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center">
      {/* Center content */}
      <div>
        <h1>Main headline</h1>
        <p>Supporting text</p>
        <button>Call to action</button>
      </div>
    </section>
  );
}

// ==========================
// 3. SERVICES (MAPPING DATA)
// ==========================

const services = [
  "Memory Quilts",
  "T-Shirt Quilts",
  "Custom Sewing",
];

function Services() {
  return (
    <section>
      {services.map((service) => (
        <div key={service}>
          {/* Each card */}
          <h3>{service}</h3>
        </div>
      ))}
    </section>
  );
}

// ==========================
// 4. PHOTO GRID (IMPORTANT)
// ==========================

const photos = [
  { src: "/photos/1.webp" },
  { src: "/photos/2.webp" },
];

function Gallery() {
  return (
    <section>
      <div className="grid grid-cols-3 gap-4">
        {photos.map((photo) => (
          <img key={photo.src} src={photo.src} />
        ))}
      </div>
    </section>
  );
}

// ==========================
// 5. CTA SECTION
// ==========================

function CTA() {
  return (
    <section>
      <h2>Ready to get started?</h2>
      <button>Request a piece</button>
    </section>
  );
}

// ==========================
// CORE IDEA
// ==========================

// Landing pages are:
// - Sections stacked vertically
// - Data mapped into UI
// - Images placed inside grids
// - Reusable components

// Build one section at a time.
