import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CheckCircle2 } from "lucide-react"
import Image from "next/image"

export default function Project3Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">E-commerce вебсайт</span>
          </h1>
          <p className="text-xl text-foreground/70 leading-relaxed mb-12">
            Разработка интернет-магазина с интеграцией платежных систем, корзиной и личным кабинетом покупателя
          </p>

          {/* Project Images */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden border border-white/10">
              <Image src="/personalized-content-recommendation-dashboard-ai-m.jpg" alt="Рекомендательная система" fill className="object-cover" />
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden border border-white/10">
              <Image src="/user-engagement-analytics-dashboard-media-platform.jpg" alt="Аналитика вовлеченности" fill className="object-cover" />
            </div>
          </div>

          {/* Project Description */}
          <div className="glass-card p-8 md:p-12 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">О проекте</h2>
            <p className="text-lg text-foreground/70 leading-relaxed mb-6">
              Медиа-платформа с миллионами пользователей испытывала проблемы с удержанием аудитории. Пользователи не
              находили интересный контент и покидали платформу через несколько минут.
            </p>
            <p className="text-lg text-foreground/70 leading-relaxed">
              Мы разработали AI-агента для анализа поведения пользователей и создания персонализированных рекомендаций
              контента в реальном времени, учитывая историю просмотров, предпочтения и контекст.
            </p>
          </div>

          {/* Problems Solved */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Решенные проблемы</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="glass-card p-6 hover:border-accent transition-colors">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Низкая вовлеченность</h3>
                    <p className="text-foreground/70">
                      Среднее время сессии увеличилось с 8 минут до 27 минут благодаря релевантным персонализированным
                      рекомендациям
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6 hover:border-accent transition-colors">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Высокий отток пользователей</h3>
                    <p className="text-foreground/70">
                      Retention rate вырос на 62%, так как пользователи начали регулярно возвращаться за новым
                      персонализированным контентом
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6 hover:border-accent transition-colors">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Неэффективная монетизация</h3>
                    <p className="text-foreground/70">
                      Рост engagement привел к увеличению показов рекламы на 75% и росту рекламной выручки на 52%
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6 hover:border-accent transition-colors">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Cold start проблема</h3>
                    <p className="text-foreground/70">
                      Новые пользователи получают качественные рекомендации с первых минут благодаря гибридному
                      алгоритму
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
