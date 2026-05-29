import { contact, education, incubators, languages, software } from "../content";

function SectionLabel({ children, right }: { children: string; right?: string }) {
  return (
    <div className="flex items-baseline justify-between border-b border-ink/10 pb-2 mb-4">
      <h3 className="text-[10px] font-semibold uppercase tracking-[0.22em] text-accent">
        {children}
      </h3>
      {right && <span className="text-[10px] text-ink/40 uppercase tracking-wider">{right}</span>}
    </div>
  );
}

function Bar({ percentage }: { percentage: number }) {
  return (
    <div className="h-[2px] bg-ink/10 w-full mt-1.5">
      <div className="h-full bg-accent" style={{ width: `${percentage}%` }} />
    </div>
  );
}

export function Sidebar() {
  return (
    <div className="px-5 py-10 space-y-7">
      {/* Photo placeholder */}
      <div className="w-28 h-28 rounded-full bg-ink/10 mx-auto flex items-center justify-center overflow-hidden border border-ink/10">
        <span className="text-[10px] text-ink/30 uppercase tracking-wider">photo</span>
      </div>

      {/* Contact */}
      <div>
        <SectionLabel>Contact</SectionLabel>
        <div className="space-y-3 text-[11px] text-ink/70">
          <div>
            <p className="text-ink/40 mb-0.5">Phone</p>
            <p>{contact.phone}</p>
          </div>
          <div>
            <p className="text-ink/40 mb-0.5">E-Mail</p>
            <p>{contact.email}</p>
          </div>
          <div>
            <p className="text-ink/40 mb-0.5">Location</p>
            <p>{contact.location}</p>
          </div>
        </div>
      </div>

      {/* Education */}
      <div>
        <SectionLabel>Education</SectionLabel>
        <div className="space-y-4">
          {education.items.map((item, i) => (
            <div key={i}>
              <p className="text-[10px] text-ink/40 mb-0.5">{item.period}</p>
              <p className="text-[11px] font-semibold leading-snug">{item.degree}</p>
              <p className="text-[11px] text-accent">{item.school}</p>
              {item.detail && (
                <p className="text-[10px] text-ink/55 mt-1 leading-relaxed">{item.detail}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Incubator Programs */}
      <div>
        <SectionLabel>Incubator Programs</SectionLabel>
        <div className="space-y-2">
          {incubators.items.map((item, i) => (
            <div
              key={i}
              className="px-2.5 py-2 bg-accent/10 text-[10px] text-accent/80 leading-relaxed"
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Languages */}
      <div>
        <SectionLabel>Languages</SectionLabel>
        <div className="space-y-3">
          {languages.items.map((lang, i) => (
            <div key={i}>
              <div className="flex justify-between text-[11px]">
                <span>{lang.name}</span>
                <span className="text-ink/50">{lang.level}</span>
              </div>
              <Bar percentage={lang.bar} />
            </div>
          ))}
        </div>
      </div>

      {/* Software */}
      <div>
        <SectionLabel right={software.subheading}>{software.heading}</SectionLabel>
        <div className="space-y-3">
          {software.items.map((tool, i) => (
            <div key={i}>
              <div className="flex justify-between text-[11px]">
                <span>{tool.name}</span>
                <span className="text-ink/50">{tool.frequency}</span>
              </div>
              <Bar percentage={tool.bar} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
