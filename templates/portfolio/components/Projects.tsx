import { projects } from "../content";

export function Projects() {
  return (
    <section id="projects" className="py-14 border-t border-ink/10">
      <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent border-b border-ink/10 pb-3 mb-8">
        {projects.heading}
      </h2>
      <ul className="space-y-8">
        {projects.items.map((p, i) => (
          <li key={i} className="group">
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="font-semibold text-base group-hover:text-accent transition">
                {p.title}
              </h3>
              <span className="text-xs text-accent whitespace-nowrap">{p.year}</span>
            </div>
            <p className="mt-2 text-sm text-ink/70 leading-relaxed max-w-2xl">
              {p.summary}
            </p>
            {p.link && (
              <a
                href={p.link.href}
                className="mt-2 inline-block text-xs font-medium text-accent hover:underline"
              >
                {p.link.label} →
              </a>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
