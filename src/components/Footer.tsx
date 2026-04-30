export default function Footer() {
  return (
    <footer className="w-full border-t border-muted-gray/20 pt-12 pb-8 bg-background-dark">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Content Area */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-16">
          {/* Left: Headline and Status */}
          <div className="space-y-4">
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-background-light tracking-tighter">
              Let's build together.
            </h1>
            <div className="flex items-center gap-3 py-2 px-4 rounded-full bg-background-light/5 border border-background-light/10 w-fit">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
              </span>
              <span className="font-medium text-sm text-primary">Available for new opportunities</span>
            </div>
          </div>
          {/* Right: Social Links Grid */}
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-3">
            <a className="flex items-center gap-2 px-5 py-3 rounded-full border border-muted-gray/40 text-muted-gray hover:text-background-light hover:border-background-light transition-all duration-300 text-sm font-medium group" href="#">
              <span className="material-symbols-outlined text-[20px]">code</span>
              GitHub
            </a>
            <a className="flex items-center gap-2 px-5 py-3 rounded-full border border-muted-gray/40 text-muted-gray hover:text-background-light hover:border-background-light transition-all duration-300 text-sm font-medium group" href="#">
              <span className="material-symbols-outlined text-[20px]">group</span>
              LinkedIn
            </a>
            <a className="flex items-center gap-2 px-5 py-3 rounded-full border border-muted-gray/40 text-muted-gray hover:text-background-light hover:border-background-light transition-all duration-300 text-sm font-medium group" href="#">
              <span className="material-symbols-outlined text-[20px]">public</span>
              Facebook
            </a>
            <a className="flex items-center gap-2 px-5 py-3 rounded-full border border-muted-gray/40 text-muted-gray hover:text-background-light hover:border-background-light transition-all duration-300 text-sm font-medium group" href="#">
              <span className="material-symbols-outlined text-[20px]">play_circle</span>
              YouTube
            </a>
            <a className="flex items-center gap-2 px-5 py-3 rounded-full border border-muted-gray/40 text-muted-gray hover:text-background-light hover:border-background-light transition-all duration-300 text-sm font-medium group" href="#">
              <span className="material-symbols-outlined text-[20px]">mail</span>
              Email
            </a>
          </div>
        </div>
        {/* Bottom Section */}
        <div className="border-t border-muted-gray/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright & Signature */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <span className="font-display text-sm text-muted-gray">© 2024 David Smith | Full-Stack Developer</span>
            <nav className="flex gap-6">
              <a className="text-sm font-medium text-muted-gray hover:text-primary transition-colors" href="#">Projects</a>
              <a className="text-sm font-medium text-muted-gray hover:text-primary transition-colors" href="#">Blog</a>
              <a className="text-sm font-medium text-muted-gray hover:text-primary transition-colors" href="#">Privacy</a>
            </nav>
          </div>
          {/* Terminal-style pill */}
          <div className="bg-[#0e0e0e] px-6 py-3 rounded-full border border-muted-gray/20 flex items-center gap-3 shadow-inner">
            <span className="text-primary font-pixel text-sm">➜</span>
            <code className="text-background-light font-pixel text-sm tracking-tight">npx hello-david-smith <span className="animate-pulse">_</span></code>
          </div>
        </div>
      </div>
    </footer>
  );
}
