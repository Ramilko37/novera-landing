import Header from "@/components/header"
import Footer from "@/components/footer"
import { Building2, TrendingUp, Users, Shield } from "lucide-react"
import Image from "next/image"

export default function Solution1Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">HR платформа</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
              Автоматизация HR-процессов, подбор персонала с помощью AI и оптимизация управления человеческими ресурсами
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
                src="/ecommerce-ai-dashboard-analytics.jpg"
                alt="E-commerce AI Dashboard"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-video rounded-xl overflow-hidden border border-border">
              <Image
                src="/ecommerce-personalization-recommendation-engine.jpg"
                alt="Personalization Engine"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="prose prose-invert max-w-none">
            <div className="glass-card p-8 md:p-10 rounded-2xl">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 gradient-text">О решении</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                В сфере электронной коммерции скорость обработки заказов и качество клиентского сервиса напрямую влияют
                на конверсию и лояльность покупателей. Наши AI-агенты помогают интернет-магазинам автоматизировать
                рутинные операции, предоставлять персонализированные рекомендации и обрабатывать тысячи запросов
                одновременно.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Система анализирует поведение пользователей, предсказывает их предпочтения и автоматически подбирает
                релевантные товары. Интеграция с CRM и складскими системами позволяет в реальном времени отслеживать
                наличие товаров, статус доставки и автоматически уведомлять клиентов.
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
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Персонализация рекомендаций</h3>
                  <p className="text-foreground/70 leading-relaxed mb-3">
                    AI-агенты анализируют историю покупок, поведение на сайте и предпочтения клиентов для формирования
                    индивидуальных рекомендаций.
                  </p>
                  <p className="text-sm text-emerald-400 font-medium">↑ Увеличение среднего чека на 25-40%</p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 md:p-8 rounded-xl hover:scale-[1.02] transition-transform">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Автоматизация обработки заказов</h3>
                  <p className="text-foreground/70 leading-relaxed mb-3">
                    Автоматическая проверка наличия товара, формирование документов, уведомления клиентов и интеграция с
                    логистическими системами.
                  </p>
                  <p className="text-sm text-blue-400 font-medium">↓ Сокращение времени обработки на 60%</p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 md:p-8 rounded-xl hover:scale-[1.02] transition-transform">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-purple-500/10 text-purple-400">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">24/7 поддержка клиентов</h3>
                  <p className="text-foreground/70 leading-relaxed mb-3">
                    Чат-боты обрабатывают типовые вопросы, помогают с выбором товара, отслеживают статус заказа и решают
                    проблемы без участия человека.
                  </p>
                  <p className="text-sm text-purple-400 font-medium">↓ Снижение нагрузки на поддержку на 70%</p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 md:p-8 rounded-xl hover:scale-[1.02] transition-transform">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-cyan-500/10 text-cyan-400">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Предотвращение мошенничества</h3>
                  <p className="text-foreground/70 leading-relaxed mb-3">
                    Анализ паттернов покупок, выявление подозрительных транзакций и автоматическая блокировка
                    мошеннических заказов.
                  </p>
                  <p className="text-sm text-cyan-400 font-medium">↓ Уменьшение количества возвратов на 45%</p>
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
