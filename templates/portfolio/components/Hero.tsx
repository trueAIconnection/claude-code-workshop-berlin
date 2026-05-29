import { hero } from "../content";

export function Hero() {
  return (
    <section className="pt-12 pb-10">
      <h1 className="text-6xl md:text-7xl font-black uppercase tracking-[0.1em] leading-none">
        {hero.name.split(" ").map((word, i) => (
          <span key={i} className="block">{word}</span>
        ))}
      </h1>
      <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.22em] text-accent">
        {hero.role} · {hero.location}
      </p>
    </section>
  );
}
