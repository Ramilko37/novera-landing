import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Globe, Smartphone, Palette, Code, Gauge, Shield } from "lucide-react"

export default function Service2Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Website Development</span>
          </h1>
          <p className="text-xl text-foreground/70 leading-relaxed mb-8">
            Modern, responsive websites that convert visitors into customers. We create stunning digital experiences
            optimized for performance and user engagement.
          </p>
          <div className="mt-12 rounded-2xl overflow-hidden border border-border/20 bg-muted/30 aspect-video flex items-center justify-center">
            <img src="/modern-responsive-website-design-mockup.jpg" alt="Website Development" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Web Development Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-effect p-6 rounded-xl border border-border/20">
              <Globe className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Corporate Websites</h3>
              <p className="text-foreground/70 leading-relaxed">
                Professional websites that establish your brand presence and build trust with potential clients.
              </p>
            </div>
            <div className="glass-effect p-6 rounded-xl border border-border/20">
              <Smartphone className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Responsive Design</h3>
              <p className="text-foreground/70 leading-relaxed">
                Mobile-first approach ensuring perfect display across all devices and screen sizes.
              </p>
            </div>
            <div className="glass-effect p-6 rounded-xl border border-border/20">
              <Palette className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Custom UI/UX</h3>
              <p className="text-foreground/70 leading-relaxed">
                Unique designs tailored to your brand identity and user experience goals.
              </p>
            </div>
            <div className="glass-effect p-6 rounded-xl border border-border/20">
              <Code className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Modern Tech Stack</h3>
              <p className="text-foreground/70 leading-relaxed">
                Built with latest technologies like Next.js, React, and TypeScript for optimal performance.
              </p>
            </div>
            <div className="glass-effect p-6 rounded-xl border border-border/20">
              <Gauge className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Performance Optimized</h3>
              <p className="text-foreground/70 leading-relaxed">
                Lightning-fast load times with SEO optimization to improve search rankings.
              </p>
            </div>
            <div className="glass-effect p-6 rounded-xl border border-border/20">
              <Shield className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Security First</h3>
              <p className="text-foreground/70 leading-relaxed">
                Enterprise-grade security measures to protect your data and users.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-8">Our Development Process</h2>
              <div className="space-y-6">
                <div className="border-l-2 border-primary pl-6">
                  <h4 className="text-lg font-semibold mb-2">1. Discovery & Planning</h4>
                  <p className="text-foreground/70">
                    Understanding your business goals, target audience, and project requirements.
                  </p>
                </div>
                <div className="border-l-2 border-primary pl-6">
                  <h4 className="text-lg font-semibold mb-2">2. Design & Prototyping</h4>
                  <p className="text-foreground/70">
                    Creating wireframes and visual designs that align with your brand identity.
                  </p>
                </div>
                <div className="border-l-2 border-primary pl-6">
                  <h4 className="text-lg font-semibold mb-2">3. Development & Testing</h4>
                  <p className="text-foreground/70">
                    Building your website with clean code and rigorous quality assurance.
                  </p>
                </div>
                <div className="border-l-2 border-primary pl-6">
                  <h4 className="text-lg font-semibold mb-2">4. Launch & Support</h4>
                  <p className="text-foreground/70">
                    Deploying your website and providing ongoing maintenance and updates.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden border border-border/20 bg-muted/30 aspect-[4/3]">
              <img src="/website-development-process-workflow.jpg" alt="Development Process" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 md:px-6">{/* ... existing code ... */}</div>
      </section>

      <Footer />
    </main>
  )
}
