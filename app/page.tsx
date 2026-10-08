import { Button } from "@/components/ui/button"
import { ArrowRight, Code, MonitorSmartphone, PenTool, Sparkles, Zap } from "lucide-react"

export default function Page() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-white/30 font-sans overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 -left-1/4 w-[150%] h-[800px] bg-gradient-to-b from-blue-900/20 via-purple-900/10 to-transparent blur-[120px] pointer-events-none -z-10" />

      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 backdrop-blur-md bg-[#0a0a0a]/60 border-b border-white/5">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight">Thetta.</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <a href="#" className="hover:text-white transition-colors">Services</a>
          <a href="#" className="hover:text-white transition-colors">Work</a>
          <a href="#" className="hover:text-white transition-colors">About</a>
          <a href="#" className="hover:text-white transition-colors">Insights</a>
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="hidden md:flex text-gray-300 hover:text-white hover:bg-white/10 rounded-full">
            Log in
          </Button>
          <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-6 font-medium">
            Let&apos;s Talk
          </Button>
        </div>
      </header>

      <main className="pt-32 pb-24 px-6 md:px-12 max-w-[1400px] mx-auto">
        {/* Hero Section */}
        <section className="flex flex-col items-center text-center mt-12 md:mt-24 mb-32">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Available for new projects
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.1] mb-6 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-150">
            Crafting digital <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              experiences
            </span> that matter.
          </h1>
          <p className="max-w-2xl text-lg md:text-xl text-gray-400 mb-10 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
            Thetta is a forward-thinking digital agency dedicated to elevating brands through strategic design, cutting-edge engineering, and bold creativity.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-500">
            <Button size="lg" className="bg-white text-black hover:bg-gray-200 rounded-full px-8 h-14 text-base font-medium w-full sm:w-auto">
              View Our Work
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 rounded-full px-8 h-14 text-base font-medium w-full sm:w-auto bg-transparent">
              Our Services
            </Button>
          </div>
        </section>

        {/* Big Dashboard / Visual Graphic Placeholder */}
        <div className="relative w-full aspect-[16/9] md:aspect-[21/9] bg-gradient-to-br from-white/5 to-white/0 rounded-[2rem] border border-white/10 overflow-hidden mb-32 flex items-center justify-center group">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay transition-transform duration-1000 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
          
          <div className="relative z-10 p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl flex items-center justify-center flex-col shadow-2xl">
            <MonitorSmartphone className="w-16 h-16 text-gray-400 mb-4" />
            <h3 className="text-xl font-semibold">Premium Aesthetics</h3>
            <p className="text-sm text-gray-400">Award-winning layouts</p>
          </div>
        </div>

        {/* Services Bento Grid */}
        <section className="mb-32">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">What we do</h2>
              <p className="text-gray-400 max-w-md">We blend strategic thinking with top-tier execution to deliver impactful results.</p>
            </div>
            <Button variant="ghost" className="hidden md:flex text-gray-300 hover:text-white mt-4 md:mt-0">
              See all services <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="col-span-1 md:col-span-2 bg-gradient-to-br from-white/[0.08] to-transparent border border-white/10 p-10 rounded-3xl hover:bg-white/[0.1] transition-colors group">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <PenTool className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">UI/UX Design</h3>
              <p className="text-gray-400 max-w-sm mb-8">We design intuitive and stunning user interfaces that drive conversion and delight users at every touchpoint.</p>
              <a href="#" className="inline-flex items-center text-sm font-medium hover:text-blue-400 transition-colors">
                Explore Design <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>

            {/* Card 2 */}
            <div className="col-span-1 bg-gradient-to-br from-white/[0.08] to-transparent border border-white/10 p-10 rounded-3xl hover:bg-white/[0.1] transition-colors group">
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Code className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">Development</h3>
              <p className="text-gray-400 mb-8">Robust, scalable, and high-performance web applications built with the latest technologies.</p>
              <a href="#" className="inline-flex items-center text-sm font-medium hover:text-purple-400 transition-colors">
                Explore Code <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>

            {/* Card 3 */}
            <div className="col-span-1 bg-gradient-to-br from-white/[0.08] to-transparent border border-white/10 p-10 rounded-3xl hover:bg-white/[0.1] transition-colors group">
              <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6 text-orange-400" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">Branding</h3>
              <p className="text-gray-400 mb-8">Crafting memorable brand identities that resonate with your target audience and stand out.</p>
            </div>

            {/* Card 4 */}
            <div className="col-span-1 md:col-span-2 bg-gradient-to-br from-white/[0.08] to-transparent border border-white/10 p-10 rounded-3xl overflow-hidden relative group">
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-xs text-white mb-6">
                  Featured Case Study
                </div>
                <h3 className="text-3xl font-semibold mb-3 max-w-md">Revolutionizing digital banking for the modern era.</h3>
                <Button className="mt-6 bg-white text-black hover:bg-gray-200 rounded-full">
                  Read Case Study
                </Button>
              </div>
              <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-blue-600/30 to-transparent pointer-events-none transform translate-x-8 group-hover:translate-x-0 transition-transform duration-500" />
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#050505] pt-20 pb-10 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center">
                <Sparkles className="w-3 h-3 text-white" />
              </div>
              <span className="text-lg font-bold tracking-tight">Thetta.</span>
            </div>
            <p className="text-gray-400 max-w-sm mb-8">
              A creative digital agency building the future of the web. We partner with visionaries to create digital products that lead markets.
            </p>
            <div className="text-xl font-medium">hello@thetta.agency</div>
          </div>
          <div>
            <h4 className="font-semibold mb-6">Company</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">News</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-6">Socials</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Twitter / X</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Dribbble</a></li>
              <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 text-xs text-gray-500">
          <p>© 2026 Thetta Agency. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-300">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
