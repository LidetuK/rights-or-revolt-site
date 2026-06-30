import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Briefcase, Landmark, GraduationCap, Scale, HeartPulse, Instagram, Twitter, Facebook, Mail, ArrowRight } from "lucide-react";
import logoAsset from "@/assets/logo.png.asset.json";
import rt1 from "@/assets/roundtable-1.jpg.asset.json";
import rt2 from "@/assets/roundtable-2.jpg.asset.json";
import rt3 from "@/assets/roundtable-3.jpg.asset.json";
import rt4 from "@/assets/roundtable-4.jpg.asset.json";
import rt5 from "@/assets/roundtable-5.jpg.asset.json";

const LOGO = logoAsset.url;
const HERO = rt1.url;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RIGHTS or RIOTS — Justice, Equal Rights or Riots" },
      { name: "description", content: "Economic, Political & Social Justice for people of color. Challenging the status quo at the business roundtable. Join the grassroots movement." },
      { property: "og:title", content: "RIGHTS or RIOTS" },
      { property: "og:description", content: "Fighting for Economic, Political & Social Justice. Empowering through education. Challenging the status quo." },
      { property: "og:image", content: LOGO },
    ],
  }),
  component: Index,
});

const focusAreas = [
  { icon: Briefcase, title: "Economic Justice", sub: "Equal Employment" },
  { icon: Landmark, title: "Political Advocacy", sub: "Federal Level" },
  { icon: GraduationCap, title: "Education", sub: "Empowerment" },
  { icon: Scale, title: "Social Justice", sub: "Human Rights" },
  { icon: HeartPulse, title: "Health", sub: "Well-being" },
];

function Index() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-paper text-ink font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-paper border-b-2 border-ink">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3">
            <img src={LOGO} alt="RIGHTS or RIOTS logo" className="h-12 w-auto" />
          </a>
          <a
            href="#donate"
            className="bg-signal text-signal-foreground font-display font-bold uppercase text-xs tracking-widest px-5 py-2.5 hover:bg-ink transition-colors"
          >
            Donate Now
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative bg-ink text-paper overflow-hidden">
        <div
          className="absolute inset-0 opacity-40 grayscale"
          style={{ backgroundImage: `url(${HERO})`, backgroundSize: "cover", backgroundPosition: "center" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/40" />
        <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-28 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 border border-signal text-signal px-3 py-1 mb-8 text-xs font-display font-bold tracking-[0.2em] uppercase">
              <span className="w-1.5 h-1.5 bg-signal animate-pulse" /> The Movement Is Now
            </div>
            <img src={LOGO} alt="RIGHTS or RIOTS" className="mb-8 max-w-md w-full invert" />
            <p className="mt-2 max-w-xl text-lg lg:text-xl text-paper/80 leading-relaxed">
              Economic, Political & Social Justice for people of color. Challenging the status quo at the business roundtable.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#join" className="group bg-signal text-signal-foreground font-display font-bold uppercase tracking-widest text-sm px-7 py-4 inline-flex items-center gap-3 hover:bg-paper hover:text-ink transition-colors">
                Join the Movement <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#manifesto" className="font-display font-bold uppercase tracking-widest text-sm px-7 py-4 inline-flex items-center gap-3 border border-paper/30 hover:bg-paper hover:text-ink transition-colors">
                Read the Manifesto
              </a>
            </div>
          </div>

          {/* Lead capture card */}
          <div id="join" className="lg:col-span-5">
            <div className="bg-paper text-ink p-8 border-t-8 border-signal shadow-2xl">
              <div className="text-xs font-display font-bold tracking-[0.25em] uppercase text-signal mb-2">Take Action</div>
              <h2 className="font-display font-black text-2xl uppercase leading-tight mb-6">Enough is Enough.<br/>Join the Movement.</h2>
              {submitted ? (
                <div className="py-12 text-center">
                  <div className="font-display font-black text-3xl text-signal mb-3">WELCOME, SOLDIER.</div>
                  <p className="text-sm text-ink/70">You'll hear from us soon. The work begins now.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <Input label="First Name" name="first" required />
                    <Input label="Last Name" name="last" required />
                  </div>
                  <Input label="Email" name="email" type="email" required />
                  <Input label="Phone" name="phone" type="tel" />
                  <div className="grid grid-cols-2 gap-3">
                    <Input label="Occupation" name="occupation" />
                    <Input label="Industry" name="industry" />
                  </div>
                  <Input label="City / State / Country" name="location" />
                  <button type="submit" className="w-full bg-signal text-signal-foreground font-display font-bold uppercase tracking-widest text-sm py-4 hover:bg-ink transition-colors mt-2">
                    Join Now
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="border-b border-ink/10">
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-3">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-px bg-signal" />
              <span className="text-xs font-display font-bold tracking-[0.25em] uppercase text-signal">Our Mission</span>
            </div>
            <h2 className="font-display font-black text-3xl lg:text-4xl uppercase leading-none">Why We Exist.</h2>
          </div>
          <div className="lg:col-span-9">
            <p className="font-display font-bold text-2xl lg:text-4xl leading-tight tracking-tight">
              True change starts with us. By improving economic, political, and social inclusions, we impact the lives of people of color at the proverbial <span className="text-signal">business roundtable</span> — where the most important decisions are made.
            </p>
          </div>
        </div>
      </section>

      {/* The Roundtable — image gallery */}
      <section className="bg-paper">
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-24">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-6">
            <div>
              <div className="text-xs font-display font-bold tracking-[0.25em] uppercase text-signal mb-3">The Roundtable</div>
              <h2 className="font-display font-black text-4xl lg:text-5xl uppercase leading-none tracking-tighter">A Seat at<br/>Every Table.</h2>
            </div>
            <p className="text-sm text-ink/60 max-w-sm">Where decisions are made about us — without us. We are arriving. We are organizing. We are leading.</p>
          </div>
          <div className="grid grid-cols-12 gap-3 lg:gap-4">
            <figure className="col-span-12 md:col-span-8 relative overflow-hidden aspect-[16/10] group">
              <img src={rt1.url} alt="Leaders at a roundtable discussion" className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
              <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-ink/90 to-transparent p-6 text-paper">
                <div className="text-[10px] font-display font-bold tracking-[0.25em] uppercase text-signal">01 — Convene</div>
                <div className="font-display font-black text-xl uppercase mt-1">Voices at the Table</div>
              </figcaption>
            </figure>
            <figure className="col-span-12 md:col-span-4 relative overflow-hidden aspect-[4/5] group">
              <img src={rt2.url} alt="Community members organizing" className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
              <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-ink/90 to-transparent p-5 text-paper">
                <div className="text-[10px] font-display font-bold tracking-[0.25em] uppercase text-signal">02 — Community</div>
                <div className="font-display font-black text-lg uppercase mt-1">We Are the Future</div>
              </figcaption>
            </figure>
            <figure className="col-span-6 md:col-span-4 relative overflow-hidden aspect-square group">
              <img src={rt3.url} alt="Observer at a strategic meeting" className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
              <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-ink/90 to-transparent p-4 text-paper">
                <div className="text-[10px] font-display font-bold tracking-[0.25em] uppercase text-signal">03 — Observe</div>
              </figcaption>
            </figure>
            <figure className="col-span-6 md:col-span-4 relative overflow-hidden aspect-square group">
              <img src={rt4.url} alt="Stakeholders in dialogue" className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
              <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-ink/90 to-transparent p-4 text-paper">
                <div className="text-[10px] font-display font-bold tracking-[0.25em] uppercase text-signal">04 — Dialogue</div>
              </figcaption>
            </figure>
            <figure className="col-span-12 md:col-span-4 relative overflow-hidden aspect-square group">
              <img src={rt5.url} alt="Speaker at a press conference" className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
              <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-ink/90 to-transparent p-4 text-paper">
                <div className="text-[10px] font-display font-bold tracking-[0.25em] uppercase text-signal">05 — Speak</div>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="bg-ink text-paper">
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-24">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-6">
            <div>
              <div className="text-xs font-display font-bold tracking-[0.25em] uppercase text-signal mb-3">Focus Areas</div>
              <h2 className="font-display font-black text-4xl lg:text-5xl uppercase leading-none">Five Fronts.<br/>One Fight.</h2>
            </div>
            <div className="text-sm text-paper/60 max-w-sm">Where we organize, advocate, and mobilize — relentlessly.</div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 border-t border-l border-paper/15">
            {focusAreas.map(({ icon: Icon, title, sub }) => (
              <div key={title} className="border-b border-r border-paper/15 p-8 group hover:bg-signal transition-colors">
                <Icon strokeWidth={1.25} className="w-12 h-12 text-signal group-hover:text-paper transition-colors mb-6" />
                <div className="font-display font-black uppercase text-lg leading-tight">{title}</div>
                <div className="text-xs uppercase tracking-widest text-paper/50 group-hover:text-paper/80 mt-2">{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manifesto */}
      <section id="manifesto" className="bg-paper">
        <div className="bg-ink text-paper py-24 lg:py-32 relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-20 grayscale"
            style={{ backgroundImage: `url(${rt4.url})`, backgroundSize: "cover", backgroundPosition: "center" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/95 to-ink" />
          <div className="relative max-w-6xl mx-auto px-6">
            <div className="text-xs font-display font-bold tracking-[0.3em] uppercase text-signal mb-8">The Manifesto</div>
            <blockquote className="font-display font-black uppercase leading-[0.95] tracking-tighter text-[clamp(2.25rem,6vw,5.5rem)]">
              "How long shall we keep singing <span className="text-signal">'We Shall Overcome'</span>?"
            </blockquote>
            <p className="mt-8 text-xl lg:text-2xl text-paper/70 max-w-3xl leading-snug">
              We will perish overcoming nothing. We are at war; the enemy rejoices in our demise.
            </p>
          </div>
        </div>

        {/* Three content blocks */}
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-24 grid md:grid-cols-3 gap-px bg-ink/10">
          {[
            { tag: "01 / The Challenge", title: "Inaction Is the Enemy.", body: "Our ancestors marched and sang — how far have we come? It is time to rise as humanity. Not later. NOW." },
            { tag: "02 / Inclusivity", title: "Your Race Is Not the Enemy.", body: "Black, White, Yellow, or Blue — your mindset is. Your silence is no longer an option." },
            { tag: "03 / Africa Sits Quiet", title: "The Roundtable Awaits.", body: "While the world decides our fate, we must seize a seat. We do not ask. We arrive." },
          ].map((b) => (
            <div key={b.tag} className="bg-paper p-8 lg:p-10">
              <div className="text-xs font-display font-bold tracking-[0.25em] uppercase text-signal mb-6">{b.tag}</div>
              <h3 className="font-display font-black text-2xl lg:text-3xl uppercase leading-tight mb-4">{b.title}</h3>
              <p className="text-ink/70 leading-relaxed">{b.body}</p>
            </div>
          ))}
        </div>

        {/* Impact statement */}
        <div className="bg-paper border-t-2 border-b-2 border-ink py-20">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <p className="font-display font-black uppercase leading-[0.95] tracking-tighter text-signal text-[clamp(2rem,6vw,5rem)]">
              All Lives Can't Matter<br/>If Black Lives Don't Matter.
            </p>
          </div>
        </div>
      </section>

      {/* Donate */}
      <section id="donate" className="bg-paper">
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
          <div className="max-w-3xl mb-14">
            <div className="text-xs font-display font-bold tracking-[0.25em] uppercase text-signal mb-3">Fuel the Movement</div>
            <h2 className="font-display font-black text-4xl lg:text-6xl uppercase leading-none tracking-tighter mb-6">Support the Grassroots Movement.</h2>
            <p className="text-lg text-ink/70">This is a financial war. Every contribution shields our community and empowers our grassroots action.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <DonateCard label="DonorBox" handle="Secure Recurring Gifts" cta="Donate Securely" href="#" featured />
            <DonateCard label="Cash App" handle="$RIGHTSorRIOTS" cta="Pay on CashApp" href="https://cash.app/$RIGHTSorRIOTS" />
            <DonateCard label="Venmo" handle="@RIGHTSorRIOTS" cta="Pay on Venmo" href="https://venmo.com/RIGHTSorRIOTS" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-ink text-paper">
        <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-10">
          <div>
            <img src={LOGO} alt="RIGHTS or RIOTS" className="h-16 w-auto invert mb-4" />
            <p className="text-sm text-paper/60 max-w-xs">A grassroots movement for economic, political, and social justice.</p>
          </div>
          <div>
            <div className="text-xs font-display font-bold tracking-[0.25em] uppercase text-signal mb-4">Connect</div>
            <div className="flex gap-3">
              {[Instagram, Twitter, Facebook].map((Icon, i) => (
                <a key={i} href="#" aria-label="social" className="w-10 h-10 border border-paper/30 flex items-center justify-center hover:bg-signal hover:border-signal transition-colors">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <div className="text-xs font-display font-bold tracking-[0.25em] uppercase text-signal mb-4">Contact</div>
            <a href="mailto:rightsORriots@gmail.com" className="inline-flex items-center gap-2 hover:text-signal transition-colors">
              <Mail className="w-4 h-4" /> rightsORriots@gmail.com
            </a>
          </div>
        </div>
        <div className="border-t border-paper/15">
          <div className="max-w-7xl mx-auto px-6 py-6 text-xs text-paper/50 flex flex-wrap justify-between gap-2">
            <span>© {new Date().getFullYear()} RIGHTS or RIOTS. All rights reserved.</span>
            <span className="font-display font-bold tracking-widest uppercase">Silence Is Not an Option.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Input({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <label className="block">
      <span className="block text-[10px] font-display font-bold tracking-[0.2em] uppercase text-ink/60 mb-1.5">{label}{required && " *"}</span>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full border-b-2 border-ink/20 focus:border-signal bg-transparent py-2 text-sm outline-none transition-colors"
      />
    </label>
  );
}

function DonateCard({ label, handle, cta, href, featured }: { label: string; handle: string; cta: string; href: string; featured?: boolean }) {
  return (
    <a
      href={href}
      className={`group block p-8 border-2 transition-all ${featured ? "bg-ink text-paper border-ink hover:bg-signal hover:border-signal" : "bg-paper text-ink border-ink hover:bg-ink hover:text-paper"}`}
    >
      <div className={`text-xs font-display font-bold tracking-[0.25em] uppercase mb-3 ${featured ? "text-signal group-hover:text-paper" : "text-signal"}`}>{label}</div>
      <div className="font-display font-black text-2xl lg:text-3xl uppercase leading-tight mb-10">{handle}</div>
      <div className="flex items-center justify-between border-t border-current/20 pt-4">
        <span className="font-display font-bold uppercase tracking-widest text-sm">{cta}</span>
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </div>
    </a>
  );
}
