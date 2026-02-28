import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Gamepad2, Sparkles, Clock, Trophy, Smartphone, Zap } from "lucide-react"

export default function Service5Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Mini Apps & Gamification</span>
          </h1>
          <p className="text-xl text-foreground/70 leading-relaxed mb-8">
            Telegram mini-apps, interactive games, and gamification solutions that boost user engagement and retention.
            Transform waiting time into engaging experiences.
          </p>
          <div className="mt-12 rounded-2xl overflow-hidden border border-border/20 bg-muted/30 aspect-video flex items-center justify-center">
            <img
              src="/telegram-mini-app-game-interface-mobile.jpg"
              alt="Mini Apps & Gamification"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Mini App Solutions</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-effect p-6 rounded-xl border border-border/20">
              <Smartphone className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Telegram Mini Apps</h3>
              <p className="text-foreground/70 leading-relaxed">
                Native-feeling apps within Telegram that provide seamless experiences without leaving the messenger.
              </p>
            </div>
            <div className="glass-effect p-6 rounded-xl border border-border/20">
              <Gamepad2 className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Interactive Games</h3>
              <p className="text-foreground/70 leading-relaxed">
                Engaging mini-games that entertain users during loading screens, waitlists, or idle time in your app.
              </p>
            </div>
            <div className="glass-effect p-6 rounded-xl border border-border/20">
              <Trophy className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Gamification Systems</h3>
              <p className="text-foreground/70 leading-relaxed">
                Points, badges, leaderboards, and achievements that motivate users and increase platform engagement.
              </p>
            </div>
            <div className="glass-effect p-6 rounded-xl border border-border/20">
              <Clock className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Wait Time Experiences</h3>
              <p className="text-foreground/70 leading-relaxed">
                Transform frustrating wait times into enjoyable moments with quick games and interactive content.
              </p>
            </div>
            <div className="glass-effect p-6 rounded-xl border border-border/20">
              <Sparkles className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Reward Programs</h3>
              <p className="text-foreground/70 leading-relaxed">
                Digital rewards, loyalty programs, and incentive systems that drive repeat usage and referrals.
              </p>
            </div>
            <div className="glass-effect p-6 rounded-xl border border-border/20">
              <Zap className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Instant Experiences</h3>
              <p className="text-foreground/70 leading-relaxed">
                Fast-loading, lightweight apps that provide instant gratification and smooth user experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden border border-border/20 bg-muted/30 aspect-[4/3]">
              <img src="/gamification-rewards-system-mobile-interface.jpg" alt="Gamification System" className="w-full h-full object-cover" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-8">Perfect For</h2>
              <div className="space-y-6">
                <div className="glass-effect p-6 rounded-xl border border-border/20">
                  <h3 className="text-lg font-semibold mb-2">E-commerce Platforms</h3>
                  <p className="text-foreground/70">
                    Spin-the-wheel games for discounts, scratch cards for promo codes, and interactive product discovery
                    experiences.
                  </p>
                </div>
                <div className="glass-effect p-6 rounded-xl border border-border/20">
                  <h3 className="text-lg font-semibold mb-2">Delivery & Transportation</h3>
                  <p className="text-foreground/70">
                    Engaging games while users wait for their order or ride, turning potential frustration into
                    entertainment.
                  </p>
                </div>
                <div className="glass-effect p-6 rounded-xl border border-border/20">
                  <h3 className="text-lg font-semibold mb-2">Social & Community Apps</h3>
                  <p className="text-foreground/70">
                    Interactive features, challenges, and social games that increase daily active users and session
                    length.
                  </p>
                </div>
                <div className="glass-effect p-6 rounded-xl border border-border/20">
                  <h3 className="text-lg font-semibold mb-2">Financial Services</h3>
                  <p className="text-foreground/70">
                    Educational games about finance, savings challenges, and investment simulations that engage users.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-8">Why Add Mini Apps?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
              <p className="text-foreground/70">Increase user engagement and time spent in your app</p>
            </div>
            <div className="flex gap-4">
              <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
              <p className="text-foreground/70">Reduce perceived wait times and improve satisfaction</p>
            </div>
            <div className="flex gap-4">
              <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
              <p className="text-foreground/70">Drive viral growth through shareable gaming experiences</p>
            </div>
            <div className="flex gap-4">
              <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
              <p className="text-foreground/70">Collect valuable user data through interactive elements</p>
            </div>
            <div className="flex gap-4">
              <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
              <p className="text-foreground/70">Create additional revenue streams through in-app features</p>
            </div>
            <div className="flex gap-4">
              <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
              <p className="text-foreground/70">Differentiate your product with unique, memorable experiences</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-8">Benefits</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
              <p className="text-foreground/70">Increase user engagement and time spent in your app</p>
            </div>
            <div className="flex gap-4">
              <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
              <p className="text-foreground/70">Reduce perceived wait times and improve satisfaction</p>
            </div>
            <div className="flex gap-4">
              <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
              <p className="text-foreground/70">Drive viral growth through shareable gaming experiences</p>
            </div>
            <div className="flex gap-4">
              <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
              <p className="text-foreground/70">Collect valuable user data through interactive elements</p>
            </div>
            <div className="flex gap-4">
              <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
              <p className="text-foreground/70">Create additional revenue streams through in-app features</p>
            </div>
            <div className="flex gap-4">
              <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
              <p className="text-foreground/70">Differentiate your product with unique, memorable experiences</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
