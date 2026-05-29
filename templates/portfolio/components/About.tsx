import { about } from "../content";

export function About() {
  return (
    <section id="about" className="py-12 border-t border-ink/10">
      <h2 className="text-[10px] font-semibold uppercase tracking-[0.22em] text-accent border-b border-ink/10 pb-2 mb-7">
        {about.heading}
      </h2>
      <div className="space-y-6">
        {about.sections.map((section, i) => (
          <div key={i}>
            <p className="text-[11px] font-semibold text-accent mb-2.5">{section.subheading}</p>
            <div className="space-y-2">
              {section.items.map((item, j) => (
                <p key={j} className="flex gap-2 text-sm text-ink/75 leading-relaxed">
                  <span className="text-accent mt-0.5 shrink-0">·</span>
                  <span>{item}</span>
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
