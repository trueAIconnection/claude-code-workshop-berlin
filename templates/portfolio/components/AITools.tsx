import { aiTools } from "../content";

function Bar({ percentage }: { percentage: number }) {
  return (
    <div className="h-[2px] bg-ink/10 w-full mt-1.5">
      <div className="h-full bg-accent" style={{ width: `${percentage}%` }} />
    </div>
  );
}

export function AITools() {
  return (
    <section id="ai-tools" className="py-12 border-t border-ink/10">
      <div className="flex items-baseline justify-between border-b border-ink/10 pb-2 mb-7">
        <h2 className="text-[10px] font-semibold uppercase tracking-[0.22em] text-accent">
          {aiTools.heading}
        </h2>
        <span className="text-[10px] text-ink/40 uppercase tracking-wider">{aiTools.subheading}</span>
      </div>
      <div className="space-y-4">
        {aiTools.items.map((tool, i) => (
          <div key={i}>
            <div className="flex justify-between text-sm">
              <span>{tool.name}</span>
              <span className="text-ink/50 text-xs">{tool.frequency}</span>
            </div>
            <Bar percentage={tool.bar} />
          </div>
        ))}
      </div>
    </section>
  );
}
