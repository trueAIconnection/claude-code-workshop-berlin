import { skills } from "../content";

export function Skills() {
  return (
    <section id="skills" className="py-12 border-t border-ink/10">
      <h2 className="text-[10px] font-semibold uppercase tracking-[0.22em] text-accent border-b border-ink/10 pb-2 mb-7">
        {skills.heading}
      </h2>
      <div className="grid grid-cols-2 gap-x-8 gap-y-6">
        {skills.groups.map((group, i) => (
          <div key={i}>
            <p className="text-[11px] font-semibold text-accent mb-2">{group.label}</p>
            <ul className="space-y-1">
              {group.items.map((item, j) => (
                <li key={j} className="flex gap-2 text-sm text-ink/70 leading-relaxed">
                  <span className="shrink-0">–</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
