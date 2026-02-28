import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Bot, Users, Workflow, Zap, CheckCircle2 } from "lucide-react"

export default function Service1Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">AI Agents Development</span>
          </h1>
          <p className="text-xl text-foreground/70 leading-relaxed mb-8">
            Professional, industry-oriented AI agents tailored to your business needs. We develop intelligent automation
            solutions that understand your workflows and deliver measurable results.
          </p>
          <div className="mt-12 rounded-2xl overflow-hidden border border-border/20 bg-muted/30 aspect-video flex items-center justify-center">
            <img src="/ai-agents-development-dashboard-interface.jpg" alt="AI Agents Development" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">What We Deliver</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-effect p-6 rounded-xl border border-border/20">
              <Bot className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Custom AI Solutions</h3>
              <p className="text-foreground/70 leading-relaxed">
                Industry-specific agents designed to handle your unique business processes, from customer interactions
                to complex data analysis.
              </p>
            </div>
            <div className="glass-effect p-6 rounded-xl border border-border/20">
              <Users className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Client-Oriented Approach</h3>
              <p className="text-foreground/70 leading-relaxed">
                We work closely with your team to understand requirements, ensuring every agent aligns perfectly with
                your business objectives.
              </p>
            </div>
            <div className="glass-effect p-6 rounded-xl border border-border/20">
              <Workflow className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Seamless Integration</h3>
              <p className="text-foreground/70 leading-relaxed">
                Our agents integrate smoothly with your existing systems, APIs, and workflows without disrupting
                operations.
              </p>
            </div>
            <div className="glass-effect p-6 rounded-xl border border-border/20">
              <Zap className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Performance Optimization</h3>
              <p className="text-foreground/70 leading-relaxed">
                Continuous monitoring and optimization ensure your AI agents deliver peak performance and ROI.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden border border-border/20 bg-muted/30 aspect-[4/3]">
              <img src="/professional-ai-agent-workflow-automation.jpg" alt="AI Agent Workflow" className="w-full h-full object-cover" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Industry Applications</h2>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Healthcare & Medical</h4>
                    <p className="text-foreground/70">
                      Patient management, appointment scheduling, medical data analysis
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Finance & Banking</h4>
                    <p className="text-foreground/70">Fraud detection, customer service automation, risk assessment</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">E-commerce & Retail</h4>
                    <p className="text-foreground/70">
                      Product recommendations, inventory management, customer support
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Manufacturing & Logistics</h4>
                    <p className="text-foreground/70">
                      Supply chain optimization, quality control, predictive maintenance
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-8">Industry Applications</h2>
          <div className="mt-12 rounded-2xl overflow-hidden border border-border/20 bg-muted/30 aspect-video flex items-center justify-center">
            <img src="/ai-agents-development-dashboard-interface.jpg" alt="AI Agents Development" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
