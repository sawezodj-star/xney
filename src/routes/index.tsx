import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Instagram, Facebook, Music2, Radio, Link as LinkIcon, Check, Play, ArrowRight, Headphones, Waves, Sparkles } from "lucide-react";
import portraitAsset from "@/assets/xney-portrait.png.asset.json";
import logoAsset from "@/assets/xney-logo.png.asset.json";

export const Route = createFileRoute("/")({
  component: Landing,
  head: () => ({
    meta: [
      { property: "og:image", content: `${typeof window !== "undefined" ? window.location.origin : ""}${portraitAsset.url}` },
    ],
  }),
});

function Waveform({ bars = 60, className = "" }: { bars?: number; className?: string }) {
  return (
    <div className={`flex items-center gap-[2px] h-10 ${className}`}>
      {Array.from({ length: bars }).map((_, i) => {
        const h = 20 + Math.abs(Math.sin(i * 0.9)) * 80 + Math.abs(Math.sin(i * 0.3)) * 20;
        return (
          <div
            key={i}
            className="w-[2px] bg-foreground/70 rounded-full"
            style={{
              height: `${Math.min(100, h)}%`,
              animation: `waveform 1.4s ease-in-out ${i * 0.03}s infinite`,
            }}
          />
        );
      })}
    </div>
  );
}

function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <img src={logoAsset.url} alt="XNEY" className="h-8 w-auto invert-0" />
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#sonido" className="hover:text-foreground transition">Sonido</a>
          <a href="#porque" className="hover:text-foreground transition">Por qué</a>
          <a href="#sets" className="hover:text-foreground transition">Sets</a>
          <a href="#bookings" className="hover:text-foreground transition">Bookings</a>
          <a href="#faq" className="hover:text-foreground transition">FAQ</a>
        </nav>
        <a href="#contacto" className="inline-flex items-center gap-2 bg-foreground text-background px-4 py-2 text-xs font-mono uppercase tracking-widest hover:bg-primary transition">
          Reservar <ArrowRight className="w-3 h-3" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative pt-28 pb-20 md:pt-36 md:pb-32 overflow-hidden grain">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 relative z-10">
          <div className="tag mb-6">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            Bogotá, Colombia · Disponible para bookings 2026
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-6">
            La conciencia<br />
            <span className="italic font-normal text-primary">es el ritmo.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8 leading-relaxed">
            Sesiones hipnóticas de techno melódico, minimal y house experimental.
            Diseñadas para conectar, expandir y mover a tu audiencia desde el primer beat.
          </p>
          <div className="flex flex-wrap gap-4 items-center">
            <a href="#contacto" className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-4 font-mono text-xs uppercase tracking-widest hover:bg-primary transition">
              Reservar sesión <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#sets" className="inline-flex items-center gap-2 border border-border px-6 py-4 font-mono text-xs uppercase tracking-widest hover:border-foreground transition">
              <Play className="w-4 h-4" /> Escuchar sets
            </a>
          </div>
          <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
            {[
              { n: "10+", l: "Años en escena" },
              { n: "200+", l: "Eventos activados" },
              { n: "50k+", l: "Reproducciones" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-2xl md:text-3xl font-display font-semibold">{s.n}</div>
                <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-5 relative">
          <div className="relative aspect-[3/4] overflow-hidden">
            <div className="absolute inset-0 duotone mix-blend-color z-10 pointer-events-none" />
            <img src={portraitAsset.url} alt="XNEY" className="w-full h-full object-cover" />
            <div className="absolute inset-0 border border-primary/40 m-4 pointer-events-none z-20" />
            <div className="absolute top-6 left-6 z-30 font-mono text-[10px] tracking-widest text-primary uppercase">
              XNEY · DJ_PRODUCER
            </div>
            <div className="absolute bottom-6 right-6 z-30 font-mono text-[10px] tracking-widest text-accent uppercase">
              REC · 2026
            </div>
          </div>
          <div className="mt-4">
            <Waveform bars={80} className="opacity-60" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  const items = [
    { icon: Waves, title: "Viaje sonoro coherente", desc: "Sets diseñados como narrativa: apertura, clímax y cierre que mantienen a la audiencia conectada de principio a fin." },
    { icon: Headphones, title: "Producción propia", desc: "Tracks originales publicados en SoundCloud y Bandcamp. Identidad sonora reconocible que eleva la marca de tu evento." },
    { icon: Sparkles, title: "Energía introspectiva", desc: "Ni ambient plano ni techno agresivo. Un punto medio hipnótico que conecta cuerpo y mente en la pista." },
    { icon: Radio, title: "Adaptable a cualquier formato", desc: "Warm-up, prime time o closing. Club íntimo, festival o evento privado. Cada set se calibra al momento y al público." },
  ];
  return (
    <section id="sonido" className="py-24 md:py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="tag mb-4">01 · Beneficios</div>
        <h2 className="text-4xl md:text-6xl font-bold max-w-3xl mb-16">
          Lo que tu evento gana <span className="italic font-normal text-primary">al reservar a XNEY.</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-px bg-border">
          {items.map((it) => (
            <div key={it.title} className="bg-background p-8 md:p-10 group hover:bg-card transition">
              <it.icon className="w-8 h-8 text-primary mb-6 group-hover:text-accent transition" />
              <h3 className="text-xl font-semibold mb-3">{it.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyMe() {
  const points = [
    { k: "01", t: "Más de una década en escena", d: "Desde 2014 produciendo y presentándome en clubs y colectivos underground de Latinoamérica." },
    { k: "02", t: "Identidad sonora definida", d: "Melódico. Hipnótico. Profundo. No un DJ genérico: una firma sonora reconocible." },
    { k: "03", t: "Profesionalismo integral", d: "Rider técnico claro, puntualidad, comunicación fluida antes, durante y después del evento." },
    { k: "04", t: "Enfoque en la pista", d: "Leo el momento. No impongo un set: construyo con la energía real del público esa noche." },
  ];
  return (
    <section id="porque" className="py-24 md:py-32 border-t border-border bg-card/30">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <div className="tag mb-4">02 · Por qué XNEY</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Un artista, no un <span className="italic font-normal text-accent">playlist</span>.
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            El público distingue entre alguien que reproduce música y alguien que la habita.
            Contratar a XNEY es traer una visión curada, no un servicio intercambiable.
          </p>
          <img src={logoAsset.url} alt="XNEY logo" className="w-40 opacity-70" />
        </div>
        <div className="lg:col-span-8 space-y-px bg-border">
          {points.map((p) => (
            <div key={p.k} className="bg-background p-8 flex gap-6 items-start hover:bg-card transition">
              <div className="font-mono text-sm text-primary shrink-0 pt-1">{p.k}</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{p.t}</h3>
                <p className="text-muted-foreground">{p.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Sets() {
  const tracks = [
    { title: "XNEY — Integra (Original Mix)", genre: "Minimal / Deep Tech", dur: "5:19" },
    { title: "XNEY — Sonante (Original Mix)", genre: "Minimal / Deep Tech", dur: "5:28" },
    { title: "XNEY — Inner Peace", genre: "Minimal / Deep Tech", dur: "6:58" },
    { title: "XNEY — Unconditional (Original Mix)", genre: "Deep House", dur: "7:32" },
    { title: "XNEY — Pineal", genre: "Minimal / Deep Tech", dur: "5:36" },
    { title: "XNEY — Pleasure (Original Mix)", genre: "Minimal / Deep Tech", dur: "5:05" },
  ];
  return (
    <section id="sets" className="py-24 md:py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div>
            <div className="tag mb-4">03 · Sesiones seleccionadas</div>
            <h2 className="text-4xl md:text-6xl font-bold">Escúchalo <span className="italic font-normal text-primary">antes de reservar.</span></h2>
          </div>
          <a href="https://soundcloud.com/xneydj" target="_blank" rel="noopener" className="font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground inline-flex items-center gap-2">
            Ver todo en SoundCloud <ArrowRight className="w-3 h-3" />
          </a>
        </div>
        <div className="space-y-px bg-border">
          {tracks.map((t, i) => (
            <div key={t.title} className="bg-background p-5 md:p-6 grid grid-cols-12 gap-4 items-center hover:bg-card group cursor-pointer transition">
              <div className="col-span-1 font-mono text-xs text-muted-foreground">{String(i + 1).padStart(2, "0")}</div>
              <div className="col-span-1">
                <div className="w-10 h-10 border border-border group-hover:border-primary flex items-center justify-center transition">
                  <Play className="w-3 h-3 fill-current" />
                </div>
              </div>
              <div className="col-span-6 md:col-span-5">
                <div className="font-medium truncate">{t.title}</div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mt-1">{t.genre}</div>
              </div>
              <div className="col-span-3 hidden md:block">
                <Waveform bars={40} className="opacity-40 group-hover:opacity-80 transition" />
              </div>
              <div className="col-span-4 md:col-span-2 text-right font-mono text-xs text-muted-foreground">{t.dur}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const ts = [
    { q: "Cerró el festival con una sesión que la gente sigue pidiendo un año después. Profesional de principio a fin.", n: "Andrés M.", r: "Promotor · Ritual Sessions" },
    { q: "Reservamos a XNEY para nuestro aniversario. El flujo fue impecable y elevó el nivel de toda la noche.", n: "Laura V.", r: "Directora · Club Subterra" },
    { q: "Contratarlo fue la mejor decisión. Comunicación clara, puntualidad total y un set que conectó con cada persona en la pista.", n: "Diego R.", r: "Organizador evento privado" },
  ];
  return (
    <section className="py-24 md:py-32 border-t border-border bg-card/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="tag mb-4">04 · Confianza</div>
        <h2 className="text-4xl md:text-6xl font-bold mb-16 max-w-3xl">
          Lo que dicen quienes ya lo <span className="italic font-normal text-primary">contrataron.</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-px bg-border">
          {ts.map((t) => (
            <figure key={t.n} className="bg-background p-8 md:p-10 flex flex-col">
              <div className="text-4xl font-display text-primary/60 mb-4 leading-none">"</div>
              <blockquote className="text-lg leading-relaxed mb-8 flex-1">{t.q}</blockquote>
              <figcaption>
                <div className="font-semibold">{t.n}</div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mt-1">{t.r}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Plans() {
  const plans = [
    {
      name: "Club Set",
      price: "Desde COP $1.2M",
      duration: "2h de sesión",
      features: ["Set de 2 horas", "Rider técnico incluido", "Playlist adaptada al slot", "Comunicación previa con el promotor"],
      cta: "Reservar club",
    },
    {
      name: "Festival / Prime Time",
      price: "Desde COP $2.8M",
      duration: "2-3h · Slot principal",
      features: ["Set curado para prime time", "Producción propia exclusiva", "Coordinación con producción del festival", "Contenido promocional pre-evento", "Grabación de la sesión"],
      cta: "Reservar festival",
      featured: true,
    },
    {
      name: "Evento Privado",
      price: "Cotización a medida",
      duration: "Duración flexible",
      features: ["Set 100% personalizado", "Asesoría de sonido e iluminación", "Equipos incluidos (opcional)", "Confidencialidad total"],
      cta: "Solicitar cotización",
    },
  ];
  return (
    <section id="bookings" className="py-24 md:py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="tag mb-4">05 · Bookings</div>
        <h2 className="text-4xl md:text-6xl font-bold mb-4 max-w-3xl">Elige el formato de tu <span className="italic font-normal text-primary">noche.</span></h2>
        <p className="text-muted-foreground max-w-xl mb-16">Tres formatos base. Todos se ajustan al tamaño, ciudad y momento de tu evento.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`p-8 md:p-10 border relative flex flex-col ${
                p.featured ? "border-primary bg-card" : "border-border bg-background"
              }`}
            >
              {p.featured && (
                <div className="absolute -top-3 left-8 bg-primary text-primary-foreground px-3 py-1 font-mono text-[10px] uppercase tracking-widest">
                  Más reservado
                </div>
              )}
              <h3 className="text-2xl font-semibold mb-2">{p.name}</h3>
              <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-6">{p.duration}</div>
              <div className="text-3xl font-display font-bold mb-8">{p.price}</div>
              <ul className="space-y-3 mb-10 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-3 text-sm">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" /> {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contacto"
                className={`inline-flex items-center justify-center gap-2 py-4 font-mono text-xs uppercase tracking-widest transition ${
                  p.featured ? "bg-primary text-primary-foreground hover:bg-foreground" : "border border-border hover:border-foreground"
                }`}
              >
                {p.cta} <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const items = [
    { q: "¿En qué ciudades te presentas?", a: "Base en Bogotá, Colombia. Disponible para presentaciones en toda Latinoamérica. Los costos de traslado y hospedaje se cotizan aparte según destino." },
    { q: "¿Cuánto tiempo antes debo reservar?", a: "Recomiendo mínimo 3 semanas de anticipación para asegurar disponibilidad y coordinar todos los detalles técnicos y promocionales." },
    { q: "¿Puedes adaptar el estilo musical al evento?", a: "Sí. Dentro del universo del techno melódico, minimal y house experimental adapto la energía al público, hora y formato. No toco géneros fuera de esa identidad." },
    { q: "¿Qué equipo técnico necesitas?", a: "Rider estándar: 2 CDJ (preferible 3000 o superior) + DJM. Envío el rider completo tras confirmar la reserva." },
    { q: "¿Grabas la sesión?", a: "Incluida en los planes Festival y Evento Privado. En el plan Club se puede añadir como extra." },
    { q: "¿Cómo se confirma la reserva?", a: "Con el 50% de anticipo. El saldo se paga el día del evento antes de la presentación. Contrato simple por escrito." },
  ];
  return (
    <section id="faq" className="py-24 md:py-32 border-t border-border bg-card/30">
      <div className="max-w-4xl mx-auto px-6">
        <div className="tag mb-4">06 · Preguntas frecuentes</div>
        <h2 className="text-4xl md:text-6xl font-bold mb-16">Antes de que <span className="italic font-normal text-primary">preguntes.</span></h2>
        <div className="divide-y divide-border border-y border-border">
          {items.map((it, i) => (
            <details key={i} className="group py-6">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <span className="text-lg font-medium pr-8">{it.q}</span>
                <span className="font-mono text-primary group-open:rotate-45 transition-transform text-xl">+</span>
              </summary>
              <p className="mt-4 text-muted-foreground leading-relaxed pr-8">{it.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contacto" className="py-24 md:py-32 border-t border-border">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
        <div>
          <div className="tag mb-4">07 · Contacto</div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Reserva tu <span className="italic font-normal text-primary">fecha.</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
            Cuéntame sobre tu evento. Respondo cada solicitud en menos de 24 horas con propuesta y disponibilidad.
          </p>
          <div className="space-y-4 font-mono text-sm">
            <a href="mailto:xneymusic@gmail.com" className="flex items-center gap-3 hover:text-primary transition">
              <Mail className="w-4 h-4 text-primary" /> xneymusic@gmail.com
            </a>
            <a href="https://soundcloud.com/xneydj" target="_blank" rel="noopener" className="flex items-center gap-3 hover:text-primary transition">
              <Music2 className="w-4 h-4 text-primary" /> soundcloud.com/xneydj
            </a>
            <a href="https://xney.bandcamp.com" target="_blank" rel="noopener" className="flex items-center gap-3 hover:text-primary transition">
              <LinkIcon className="w-4 h-4 text-primary" /> xney.bandcamp.com
            </a>
            <a href="https://instagram.com/xney_dj" target="_blank" rel="noopener" className="flex items-center gap-3 hover:text-primary transition">
              <Instagram className="w-4 h-4 text-primary" /> instagram.com/xney_dj
            </a>
            <a href="https://facebook.com/djxney" target="_blank" rel="noopener" className="flex items-center gap-3 hover:text-primary transition">
              <Facebook className="w-4 h-4 text-primary" /> facebook.com/djxney
            </a>
            <a href="https://mixcloud.com/xneydj" target="_blank" rel="noopener" className="flex items-center gap-3 hover:text-primary transition">
              <Radio className="w-4 h-4 text-primary" /> mixcloud.com/xneydj
            </a>
          </div>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="bg-card border border-border p-8 md:p-10 space-y-6"
        >
          {sent ? (
            <div className="py-16 text-center">
              <div className="w-14 h-14 mx-auto mb-6 border border-primary rounded-full flex items-center justify-center">
                <Check className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-2">Solicitud enviada</h3>
              <p className="text-muted-foreground">Recibirás respuesta en menos de 24 horas.</p>
            </div>
          ) : (
            <>
              <div className="grid md:grid-cols-2 gap-4">
                <Field label="Nombre" name="name" required />
                <Field label="Email" name="email" type="email" required />
              </div>
              <Field label="Ciudad / País del evento" name="city" required />
              <Field label="Fecha tentativa" name="date" type="date" required />
              <div>
                <label className="block font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2">
                  Tipo de evento
                </label>
                <select
                  name="type"
                  required
                  className="w-full bg-background border border-border px-4 py-3 focus:border-primary outline-none transition"
                >
                  <option value="">Selecciona una opción</option>
                  <option>Club Set</option>
                  <option>Festival / Prime Time</option>
                  <option>Evento Privado</option>
                  <option>Otro</option>
                </select>
              </div>
              <div>
                <label className="block font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2">
                  Cuéntame sobre el evento
                </label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  className="w-full bg-background border border-border px-4 py-3 focus:border-primary outline-none transition resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-foreground text-background py-4 font-mono text-xs uppercase tracking-widest hover:bg-primary transition inline-flex items-center justify-center gap-2"
              >
                Enviar solicitud <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-xs text-muted-foreground text-center">
                Respuesta garantizada en menos de 24 horas.
              </p>
            </>
          )}
        </form>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", required = false }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="block font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2">{label}</label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full bg-background border border-border px-4 py-3 focus:border-primary outline-none transition"
      />
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-between items-center gap-4 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
        <div>© 2026 XNEY · Bogotá, Colombia</div>
        <div>Consciousness is the rhythm</div>
      </div>
    </footer>
  );
}

function Landing() {
  return (
    <div>
      <Nav />
      <main>
        <Hero />
        <Benefits />
        <WhyMe />
        <Sets />
        <Testimonials />
        <Plans />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
