const PROVIDER_URL = 'https://kinchitshahmd.com/'
const BOOKING_URL = 'https://kinchit-shah.clientsecure.me/'
const PROVIDER_PHOTO =
  'https://kinchitshahmd.com/_assets/media/c48d0beac4a5d43a18aa4ca15facb15b.png'

const providerProfile = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="color-scheme" content="light" />
    <title>Kinchit Shah MD FACP</title>
    <style>
      :root {
        color-scheme: light;
        --ink: #14243b;
        --muted: #516173;
        --green: #174f40;
        --blue: #416782;
        --cream: #f7f5ee;
        --line: #dce5e1;
      }

      * { box-sizing: border-box; }
      html { scroll-behavior: smooth; }
      body {
        margin: 0;
        background: var(--cream);
        color: var(--ink);
        font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        line-height: 1.6;
      }

      a { color: inherit; }
      .shell { min-height: 100vh; }
      .hero {
        display: grid;
        grid-template-columns: minmax(240px, 0.8fr) minmax(0, 1.2fr);
        gap: clamp(28px, 5vw, 72px);
        align-items: center;
        padding: clamp(28px, 5vw, 72px);
        background:
          radial-gradient(circle at 84% 12%, rgba(255, 255, 255, 0.16), transparent 28%),
          var(--blue);
        color: white;
      }

      .portrait-wrap { position: relative; max-width: 440px; }
      .portrait-wrap::before {
        content: "";
        position: absolute;
        inset: 18px -18px -18px 18px;
        border: 1px solid rgba(255, 255, 255, 0.32);
        border-radius: 36px 12px 36px 12px;
      }
      .portrait {
        position: relative;
        display: block;
        width: 100%;
        aspect-ratio: 1 / 1;
        object-fit: cover;
        border-radius: 36px 12px 36px 12px;
      }

      .eyebrow {
        margin: 0 0 14px;
        font-size: 13px;
        font-weight: 800;
        letter-spacing: 0.15em;
        text-transform: uppercase;
        color: #d9f3e8;
      }
      h1 {
        max-width: 760px;
        margin: 0;
        font-size: clamp(38px, 6vw, 72px);
        line-height: 0.98;
        letter-spacing: -0.05em;
      }
      .specialty {
        margin: 16px 0 22px;
        font-family: Georgia, serif;
        font-size: clamp(24px, 3vw, 38px);
        font-style: italic;
      }
      .intro { max-width: 720px; margin: 0; font-size: 18px; color: #f0f6f8; }
      .actions { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 28px; }
      .button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-height: 48px;
        border: 1px solid rgba(255, 255, 255, 0.5);
        border-radius: 12px;
        padding: 11px 18px;
        font-weight: 800;
        text-decoration: none;
      }
      .button-primary { border-color: white; background: white; color: var(--green); }

      .details {
        display: grid;
        grid-template-columns: minmax(0, 1.15fr) minmax(260px, 0.85fr);
        gap: clamp(28px, 5vw, 64px);
        padding: clamp(32px, 5vw, 68px);
        background: white;
      }
      h2 { margin: 0 0 16px; font-size: clamp(26px, 3vw, 40px); letter-spacing: -0.035em; }
      .details p { margin: 0; color: var(--muted); }
      .expertise {
        align-self: start;
        border: 1px solid var(--line);
        border-radius: 22px;
        padding: 26px;
        background: #eef6f2;
      }
      .expertise h2 { font-size: 24px; }
      .tags { display: flex; flex-wrap: wrap; gap: 9px; }
      .tag {
        border: 1px solid #c9ddd4;
        border-radius: 999px;
        background: white;
        padding: 8px 12px;
        color: var(--green);
        font-size: 14px;
        font-weight: 750;
      }

      .source-note {
        display: flex;
        justify-content: space-between;
        gap: 20px;
        align-items: center;
        border-top: 1px solid var(--line);
        padding: 20px clamp(28px, 5vw, 68px);
        background: #f7f5ee;
        color: var(--muted);
        font-size: 14px;
      }
      .source-note a { color: var(--green); font-weight: 800; }

      @media (max-width: 760px) {
        .hero, .details { grid-template-columns: 1fr; }
        .portrait-wrap { max-width: 320px; }
        .intro { font-size: 16px; }
        .source-note { align-items: flex-start; flex-direction: column; }
      }
    </style>
  </head>
  <body>
    <main class="shell">
      <section class="hero">
        <div class="portrait-wrap">
          <img class="portrait" src="${PROVIDER_PHOTO}" alt="Kinchit Shah, MD" />
        </div>
        <div>
          <p class="eyebrow">Telehealth provider profile</p>
          <h1>Kinchit Shah MD FACP</h1>
          <p class="specialty">Internal Medicine</p>
          <p class="intro">
            Dr. Shah is a board-certified Internal Medicine physician who has provided
            personalized adult care since 2014. His work includes patient care, clinical
            leadership, medical education, and telemedicine.
          </p>
          <div class="actions">
            <a class="button button-primary" href="${BOOKING_URL}" target="_blank" rel="noopener noreferrer">Book an appointment</a>
            <a class="button" href="${PROVIDER_URL}" target="_blank" rel="noopener noreferrer">Visit provider website</a>
          </div>
        </div>
      </section>

      <section class="details">
        <div>
          <p class="eyebrow" style="color: var(--green)">Background</p>
          <h2>Clinical care with an education-first approach</h2>
          <p>
            Dr. Shah is a Clinical Assistant Professor at Wake Forest School of Medicine
            and works across patient care, quality improvement, clinical research, and
            medical education. His background includes advanced training with Cleveland
            Clinic and Wake Forest University.
          </p>
        </div>
        <aside class="expertise">
          <h2>Areas of expertise</h2>
          <div class="tags">
            <span class="tag">Telemedicine</span>
            <span class="tag">Internal medicine</span>
            <span class="tag">Complex patient care</span>
            <span class="tag">Weight loss</span>
            <span class="tag">Hormonal treatment</span>
            <span class="tag">Chronic disease management</span>
          </div>
        </aside>
      </section>

      <div class="source-note">
        <span>This provider profile is displayed by Anclote Pharmacy for convenient access.</span>
        <a href="${PROVIDER_URL}" target="_blank" rel="noopener noreferrer">View the complete provider website</a>
      </div>
    </main>
  </body>
</html>`

export async function GET() {
  return new Response(providerProfile, {
    status: 200,
    headers: {
      'Cache-Control': 'public, max-age=300, s-maxage=3600',
      'Content-Security-Policy': [
        "default-src 'none'",
        "script-src 'none'",
        "style-src 'unsafe-inline'",
        'img-src https: data:',
        "base-uri 'none'",
        "frame-ancestors 'self'",
        "form-action 'none'",
      ].join('; '),
      'Content-Type': 'text/html; charset=utf-8',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
      'X-Content-Type-Options': 'nosniff',
    },
  })
}
