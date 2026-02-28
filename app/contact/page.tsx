import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <section className="py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Контакты</span>
          </h1>
          <p className="text-lg text-foreground/70 leading-relaxed mb-12">
            Свяжитесь с нашей командой, чтобы узнать, как мы можем помочь трансформировать ваш бизнес с помощью AI-агентов.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">Свяжитесь с нами</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="text-accent" size={20} />
                  <span className="text-foreground/80">contact@novera.ai</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="text-accent" size={20} />
                  <span className="text-foreground/80">+7 (999) 123-45-67</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="text-accent" size={20} />
                  <span className="text-foreground/80">Москва, Россия</span>
                </div>
              </div>
            </div>

            <div className="glass-effect border border-border/20 rounded-2xl p-6">
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Имя</label>
                  <input
                    type="text"
                    className="w-full bg-background/50 border border-border/20 rounded-lg px-4 py-2 focus:outline-none focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full bg-background/50 border border-border/20 rounded-lg px-4 py-2 focus:outline-none focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Сообщение</label>
                  <textarea
                    rows={4}
                    className="w-full bg-background/50 border border-border/20 rounded-lg px-4 py-2 focus:outline-none focus:border-primary"
                  />
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90">Отправить</Button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
