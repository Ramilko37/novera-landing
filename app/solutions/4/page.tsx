import Header from "@/components/header"
import Footer from "@/components/footer"
import { Factory, Wrench, TrendingDown, Zap } from "lucide-react"
import Image from "next/image"

export default function Solution4Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Недвижимость</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
              AI-решения для рынка недвижимости: автоматизация оценки объектов, подбор предложений и управление сделками
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
                src="/manufacturing-ai-monitoring-dashboard-production.jpg"
                alt="Manufacturing Monitoring Dashboard"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-video rounded-xl overflow-hidden border border-border">
              <Image
                src="/predictive-maintenance-ai-industrial-equipment.jpg"
                alt="Predictive Maintenance System"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="prose prose-invert max-w-none">
            <div className="glass-card p-8 md:p-10 rounded-2xl">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 gradient-text">О решении</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Производственные предприятия сталкиваются с простоями оборудования, браком продукции и неэффективностью
                производственных процессов. Наши AI-агенты помогают производителям предсказывать поломки до их
                возникновения, контролировать качество продукции в реальном времени и оптимизировать загрузку
                производственных линий.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Система собирает данные с датчиков на оборудовании, анализирует температуру, вибрацию, энергопотребление
                и другие параметры, предсказывая необходимость технического обслуживания и выявляя дефекты продукции на
                ранних стадиях производства.
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
                  <Wrench className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Предиктивное обслуживание</h3>
                  <p className="text-foreground/70 leading-relaxed mb-3">
                    AI предсказывает поломки оборудования за несколько дней до их возникновения, планируя техническое
                    обслуживание в удобное время без остановки производства.
                  </p>
                  <p className="text-sm text-emerald-400 font-medium">↓ Снижение внеплановых простоев на 75%</p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 md:p-8 rounded-xl hover:scale-[1.02] transition-transform">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400">
                  <Factory className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Контроль качества продукции</h3>
                  <p className="text-foreground/70 leading-relaxed mb-3">
                    Компьютерное зрение анализирует продукцию на конвейере в режиме реального времени, выявляя дефекты и
                    отклонения от стандартов качества.
                  </p>
                  <p className="text-sm text-blue-400 font-medium">↓ Уменьшение брака на 90%</p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 md:p-8 rounded-xl hover:scale-[1.02] transition-transform">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-purple-500/10 text-purple-400">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Оптимизация производства</h3>
                  <p className="text-foreground/70 leading-relaxed mb-3">
                    AI анализирует загрузку производственных линий, оптимизирует последовательность заказов и
                    минимизирует время переналадки оборудования.
                  </p>
                  <p className="text-sm text-purple-400 font-medium">↑ Повышение производительности на 25%</p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 md:p-8 rounded-xl hover:scale-[1.02] transition-transform">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-cyan-500/10 text-cyan-400">
                  <TrendingDown className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Снижение энергопотребления</h3>
                  <p className="text-foreground/70 leading-relaxed mb-3">
                    Система мониторит энергопотребление оборудования, выявляет неэффективные режимы работы и
                    автоматически оптимизирует расход энергии.
                  </p>
                  <p className="text-sm text-cyan-400 font-medium">↓ Сокращение затрат на энергию на 30%</p>
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
