import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Search, AlertTriangle, TrendingUp, FileCheck, Target, Settings } from "lucide-react"

export default function Service3Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">AI Audit & Optimization</span>
          </h1>
          <p className="text-xl text-foreground/70 leading-relaxed mb-8">
            Professional auditing of your existing AI projects and third-party solutions. We identify issues, optimize
            performance, and ensure your AI investments deliver real value.
          </p>
          <div className="mt-12 rounded-2xl overflow-hidden border border-border/20 bg-muted/30 aspect-video flex items-center justify-center">
            <img
              src="/ai-audit-code-analysis-dashboard.jpg"
              alt="AI Audit & Optimization"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Why You Need This */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">The Reality of AI Development</h2>
            <p className="text-lg text-foreground/70">
              The market is flooded with unprofessional AI implementations. Many projects suffer from poor architecture,
              inefficient token usage, and lack of proper testing. We help you identify and fix these issues.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">What We Audit</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-effect p-6 rounded-xl border border-border/20">
              <Search className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Code Quality Assessment</h3>
              <p className="text-foreground/70 leading-relaxed">
                Comprehensive review of your AI codebase, identifying technical debt, security vulnerabilities, and
                architectural issues.
              </p>
            </div>
            <div className="glass-effect p-6 rounded-xl border border-border/20">
              <AlertTriangle className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Risk Identification</h3>
              <p className="text-foreground/70 leading-relaxed">
                Detecting unprofessional implementations, data privacy issues, and potential compliance problems before
                they become critical.
              </p>
            </div>
            <div className="glass-effect p-6 rounded-xl border border-border/20">
              <TrendingUp className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Performance Optimization</h3>
              <p className="text-foreground/70 leading-relaxed">
                Analyzing API usage, token consumption, and response times to reduce costs and improve user experience.
              </p>
            </div>
            <div className="glass-effect p-6 rounded-xl border border-border/20">
              <Settings className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Agent Optimization</h3>
              <p className="text-foreground/70 leading-relaxed">
                Fine-tuning AI agents for better accuracy, faster responses, and more reliable performance across edge
                cases.
              </p>
            </div>
            <div className="glass-effect p-6 rounded-xl border border-border/20">
              <FileCheck className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Third-Party Review</h3>
              <p className="text-foreground/70 leading-relaxed">
                Independent assessment of solutions built by external developers or acquired through partnerships.
              </p>
            </div>
            <div className="glass-effect p-6 rounded-xl border border-border/20">
              <Target className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Action Plan Delivery</h3>
              <p className="text-foreground/70 leading-relaxed">
                Detailed report with prioritized recommendations and implementation roadmap for improvements.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden border border-border/20 bg-muted/30 aspect-[4/3]">
              <img src="/ai-performance-optimization-metrics-dashboard.jpg" alt="Optimization Results" className="w-full h-full object-cover" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-8">What You Gain</h2>
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <p className="text-foreground/70">
                    Reduced operational costs through optimized token usage and API calls
                  </p>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <p className="text-foreground/70">Improved reliability and accuracy of AI responses</p>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <p className="text-foreground/70">Enhanced security and compliance with industry standards</p>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <p className="text-foreground/70">Better user experience with faster response times</p>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <p className="text-foreground/70">Clear understanding of your AI system's strengths and weaknesses</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-8">Benefits</h2>
          <div className="space-y-4">
            <div className="flex gap-4 items-start">
              <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
              <p className="text-foreground/70">
                Reduced operational costs through optimized token usage and API calls
              </p>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
              <p className="text-foreground/70">Improved reliability and accuracy of AI responses</p>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
              <p className="text-foreground/70">Enhanced security and compliance with industry standards</p>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
              <p className="text-foreground/70">Better user experience with faster response times</p>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
              <p className="text-foreground/70">Clear understanding of your AI system's strengths and weaknesses</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
