import { testimonials } from "../content";

export function Testimonials() {
  return (
    <section id="testimonials" className="py-14 border-t border-ink/10">
      <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent border-b border-ink/10 pb-3 mb-8">
        {testimonials.heading}
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        {testimonials.quotes.map((q, i) => (
          <figure
            key={i}
            className="p-5 bg-ink/[0.02] border border-ink/10"
          >
            <blockquote className="text-ink/85 leading-relaxed">
              &ldquo;{q.text}&rdquo;
            </blockquote>
            <figcaption className="mt-4 text-sm">
              <span className="font-medium">{q.author}</span>
              <span className="text-ink/60"> · {q.role}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
