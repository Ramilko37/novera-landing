import { CheckCircle } from "lucide-react"

const features = [
  "No-code agent builder with visual workflows",
  "Real-time analytics and performance metrics",
  "Enterprise-grade security and encryption",
  "API-first architecture for seamless integration",
  "Automated testing and quality assurance",
  "Multi-agent orchestration and coordination",
  "Custom model fine-tuning capabilities",
  "Advanced debugging and monitoring tools",
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Features list */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Built for Scale</span>
            </h2>
            <p className="text-lg text-foreground/70 mb-8">
              Everything you need to deploy, manage, and optimize AI agents in production.
            </p>

            <div className="space-y-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="text-secondary flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-foreground/80">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Visual element */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 md:p-12 border border-border/20">
              <div className="space-y-4">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="glass-effect p-4 rounded-lg">
                    <div className="h-2 bg-muted/50 rounded w-3/4 mb-2"></div>
                    <div className="h-2 bg-muted/50 rounded w-1/2"></div>
                  </div>
                ))}
              </div>

              {/* Accent elements */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-secondary/10 rounded-full blur-2xl"></div>
              <div className="absolute bottom-4 left-4 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
