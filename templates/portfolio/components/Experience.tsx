import { experience } from "../content";

export function Experience() {
  return (
    <section id="experience" className="py-12 border-t border-ink/10">
      <h2 className="text-[10px] font-semibold uppercase tracking-[0.22em] text-accent border-b border-ink/10 pb-2 mb-7">
        {experience.heading}
      </h2>
      <ol className="space-y-7">
        {experience.roles.map((role, i) => (
          <li key={i}>
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="font-semibold text-sm">{role.title}</h3>
              <span className="text-[11px] text-accent whitespace-nowrap shrink-0">{role.period}</span>
            </div>
            <p className="text-[11px] text-accent mt-0.5">{role.company}</p>
            {role.bullets.length > 0 && (
              <ul className="mt-2 space-y-1">
                {role.bullets.map((bullet, j) => (
                  <li key={j} className="flex gap-2 text-sm text-ink/70 leading-relaxed">
                    <span className="text-accent shrink-0 mt-0.5">·</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}
