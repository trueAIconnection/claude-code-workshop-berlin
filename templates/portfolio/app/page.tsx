import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Experience } from "../components/Experience";
import { AITools } from "../components/AITools";
import { Skills } from "../components/Skills";
import { Sidebar } from "../components/Sidebar";

export default function Home() {
  return (
    <div className="flex min-h-screen">
      {/* Left sidebar — fixed width, scrollable independently */}
      <aside className="hidden md:block w-60 lg:w-68 shrink-0 border-r border-ink/10 sticky top-0 h-screen overflow-y-auto">
        <Sidebar />
      </aside>

      {/* Main content */}
      <main className="flex-1 min-w-0 px-8 lg:px-14 pb-16">
        <Hero />
        <About />
        <Experience />
        <AITools />
        <Skills />
        <footer className="py-8 border-t border-ink/10 text-[10px] text-ink/35 uppercase tracking-wider">
          Made with Claude Code · Berlin · 2026
        </footer>
      </main>
    </div>
  );
}
