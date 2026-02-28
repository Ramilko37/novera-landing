import Header from "@/components/header"
import Footer from "@/components/footer"
import { DollarSign, BarChart3, Shield, LineChart } from "lucide-react"
import Image from "next/image"

export default function Solution3Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Обучение ИИ моделей специалистами</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
              Профессиональное обучение и дообучение AI-моделей с участием экспертов для повышения точности и релевантности
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section with Images */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="relative aspect-video rounded-xl overflow-hidden border border-border">
              <Image
                src="/financial-analytics-ai-dashboard-real-time.jpg"
                alt="Financial Analytics Dashboard"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-video rounded-xl overflow-hidden border border-border">
              <Image
                src="/fraud-detection-ai-system-banking.jpg"
                alt="Fraud Detection System"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="prose prose-invert max-w-none">
            <div className="glass-card p-8 md:p-10 rounded-2xl">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 gradient-text">О решении</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Финансовый сектор требует высокой точности анализа, моментальной обработки транзакций и надежной защиты
                от мошенничества. Наши AI-агенты помогают банкам, инвестиционным компаниям и финтех-стартапам
                автоматизировать рутинные операции, анализировать рыночные тренды и выявлять подозрительную активность в
                режиме реального времени.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Система обрабатывает миллионы транзакций, анализирует финансовые отчеты, предсказывает риски и формирует
                персонализированные инвестиционные рекомендации на основе профиля риска клиента и рыночной ситуации.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits / Problems Solved */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="gradient-text">Решаемые задачи</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-card p-6 md:p-8 rounded-xl hover:scale-[1.02] transition-transform">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-emerald-500/10 text-emerald-400">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Выявление мошенничества</h3>
                  <p className="text-foreground/70 leading-relaxed mb-3">
                    AI анализирует паттерны транзакций, выявляет аномалии и автоматически блокирует подозрительные
                    операции до их завершения.
                  </p>
                  <p className="text-sm text-emerald-400 font-medium">↓ Снижение мошеннических операций на 85%</p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 md:p-8 rounded-xl hover:scale-[1.02] transition-transform">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Автоматизация финансового анализа</h3>
                  <p className="text-foreground/70 leading-relaxed mb-3">
                    Обработка финансовых отчетов, расчет показателей рентабельности и формирование аналитических отчетов
                    без участия аналитика.
                  </p>
                  <p className="text-sm text-blue-400 font-medium">↑ Ускорение анализа в 10 раз</p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 md:p-8 rounded-xl hover:scale-[1.02] transition-transform">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-purple-500/10 text-purple-400">
                  <LineChart className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Прогнозирование рисков</h3>
                  <p className="text-foreground/70 leading-relaxed mb-3">
                    Анализ кредитной истории, оценка вероятности дефолта и автоматический расчет кредитного рейтинга на
                    основе множества факторов.
                  </p>
                  <p className="text-sm text-purple-400 font-medium">↑ Точность оценки рисков повышена на 40%</p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 md:p-8 rounded-xl hover:scale-[1.02] transition-transform">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-cyan-500/10 text-cyan-400">
                  <DollarSign className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Персонализация финансовых продуктов</h3>
                  <p className="text-foreground/70 leading-relaxed mb-3">
                    AI формирует индивидуальные инвестиционные портфели, подбирает оптимальные кредитные продукты и
                    страховые предложения для каждого клиента.
                  </p>
                  <p className="text-sm text-cyan-400 font-medium">↑ Увеличение конверсии продаж на 35%</p>
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
