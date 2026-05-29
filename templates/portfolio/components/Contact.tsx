import { contact } from "../content";

export function Contact() {
  return (
    <section id="contact" className="py-14 border-t border-ink/10">
      <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent border-b border-ink/10 pb-3 mb-8">
        {contact.heading}
      </h2>
      <p className="text-sm text-ink/70 leading-relaxed max-w-xl mb-6">
        {contact.body}
      </p>
      <a
        href={`mailto:${contact.email}`}
        className="block text-sm text-accent hover:underline mb-4"
      >
        {contact.email}
      </a>
      <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-ink/60">
        {contact.socials.map((s, i) => (
          <li key={i}>
            <a
              href={s.href}
              className="hover:text-accent transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              {s.label} →
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
