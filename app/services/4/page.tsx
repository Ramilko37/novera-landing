import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MessageSquare, Headphones, ShoppingCart, Calendar, Globe, Sparkles } from "lucide-react"

export default function Service4Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Intelligent Chatbots</span>
          </h1>
          <p className="text-xl text-foreground/70 leading-relaxed mb-8">
            Custom chatbot solutions for any business need. From customer support to sales automation, we build
            conversational AI that understands context and delivers real results.
          </p>
          <div className="mt-12 rounded-2xl overflow-hidden border border-border/20 bg-muted/30 aspect-video flex items-center justify-center">
            <img src="/intelligent-chatbot-conversation-interface.jpg" alt="Intelligent Chatbots" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Chatbot Solutions for Every Need</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-effect p-6 rounded-xl border border-border/20">
              <Headphones className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Customer Support</h3>
              <p className="text-foreground/70 leading-relaxed">
                24/7 automated support that handles common queries, reduces ticket volume, and escalates complex issues
                to human agents.
              </p>
            </div>
            <div className="glass-effect p-6 rounded-xl border border-border/20">
              <ShoppingCart className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">E-commerce Assistant</h3>
              <p className="text-foreground/70 leading-relaxed">
                Product recommendations, order tracking, and personalized shopping experiences that drive conversions.
              </p>
            </div>
            <div className="glass-effect p-6 rounded-xl border border-border/20">
              <Calendar className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Appointment Booking</h3>
              <p className="text-foreground/70 leading-relaxed">
                Automated scheduling, reminders, and rescheduling that integrates with your calendar systems.
              </p>
            </div>
            <div className="glass-effect p-6 rounded-xl border border-border/20">
              <Globe className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Multilingual Support</h3>
              <p className="text-foreground/70 leading-relaxed">
                Communicate with customers in their native language, breaking down barriers to global expansion.
              </p>
            </div>
            <div className="glass-effect p-6 rounded-xl border border-border/20">
              <MessageSquare className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Lead Generation</h3>
              <p className="text-foreground/70 leading-relaxed">
                Qualify leads, collect information, and route prospects to the right sales representatives
                automatically.
              </p>
            </div>
            <div className="glass-effect p-6 rounded-xl border border-border/20">
              <Sparkles className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Custom Solutions</h3>
              <p className="text-foreground/70 leading-relaxed">
                Tailored chatbot experiences designed specifically for your unique business processes and requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-8">Advanced Capabilities</h2>
              <div className="space-y-6">
                <div className="glass-effect p-6 rounded-xl border border-border/20">
                  <h3 className="text-lg font-semibold mb-2">Natural Language Understanding</h3>
                  <p className="text-foreground/70">
                    Our chatbots understand context, intent, and nuance, providing human-like conversations that feel
                    natural and helpful.
                  </p>
                </div>
                <div className="glass-effect p-6 rounded-xl border border-border/20">
                  <h3 className="text-lg font-semibold mb-2">Omnichannel Deployment</h3>
                  <p className="text-foreground/70">
                    Deploy on websites, mobile apps, WhatsApp, Telegram, Facebook Messenger, and other platforms from a
                    single codebase.
                  </p>
                </div>
                <div className="glass-effect p-6 rounded-xl border border-border/20">
                  <h3 className="text-lg font-semibold mb-2">Learning & Improvement</h3>
                  <p className="text-foreground/70">
                    Continuous learning from interactions to improve accuracy, handle new scenarios, and adapt to
                    changing business needs.
                  </p>
                </div>
                <div className="glass-effect p-6 rounded-xl border border-border/20">
                  <h3 className="text-lg font-semibold mb-2">Analytics Dashboard</h3>
                  <p className="text-foreground/70">
                    Comprehensive insights into user interactions, common questions, conversion rates, and performance
                    metrics.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden border border-border/20 bg-muted/30 aspect-[4/3]">
              <img src="/chatbot-analytics-dashboard-with-metrics.jpg" alt="Chatbot Analytics" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-8">Tailored Features</h2>
          <div className="space-y-6">
            <div className="glass-effect p-6 rounded-xl border border-border/20">
              <h3 className="text-lg font-semibold mb-2">Personalization</h3>
              <p className="text-foreground/70">
                Chatbots can be personalized to match your brand's voice and style, enhancing user engagement.
              </p>
            </div>
            <div className="glass-effect p-6 rounded-xl border border-border/20">
              <h3 className="text-lg font-semibold mb-2">Scalability</h3>
              <p className="text-foreground/70">
                Easily scale your chatbot solutions to handle increased demand and grow with your business.
              </p>
            </div>
            <div className="glass-effect p-6 rounded-xl border border-border/20">
              <h3 className="text-lg font-semibold mb-2">Integration</h3>
              <p className="text-foreground/70">
                Seamlessly integrate chatbots with your existing systems and workflows for a cohesive user experience.
              </p>
            </div>
            <div className="glass-effect p-6 rounded-xl border border-border/20">
              <h3 className="text-lg font-semibold mb-2">Security</h3>
              <p className="text-foreground/70">
                Robust security measures ensure that user data is protected and complies with industry standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
