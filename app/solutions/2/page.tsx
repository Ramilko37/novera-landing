import Header from "@/components/header"
import Footer from "@/components/footer"
import { Stethoscope, Clock, FileText, Brain } from "lucide-react"
import Image from "next/image"

export default function Solution2Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Контейнерная логистика</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
              Оптимизация логистических процессов, отслеживание контейнеров и автоматизация управления грузоперевозками с AI
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
                src="/healthcare-ai-patient-management-dashboard.jpg"
                alt="Healthcare AI Dashboard"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-video rounded-xl overflow-hidden border border-border">
              <Image
                src="/medical-document-analysis-ai-system.jpg"
                alt="Medical Document Analysis"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="prose prose-invert max-w-none">
            <div className="glass-card p-8 md:p-10 rounded-2xl">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 gradient-text">О решении</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Медицинские учреждения сталкиваются с огромным объемом документации, длительными процессами обработки
                данных и необходимостью круглосуточной поддержки пациентов. Наши AI-агенты помогают клиникам
                автоматизировать административные процессы, анализировать медицинские данные и оптимизировать
                взаимодействие с пациентами.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Система интегрируется с электронными медицинскими картами, обрабатывает результаты анализов, напоминает
                пациентам о приемах и помогает врачам принимать обоснованные решения на основе исторических данных и
                медицинских протоколов.
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
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Автоматизация записи на прием</h3>
                  <p className="text-foreground/70 leading-relaxed mb-3">
                    AI-ассистент принимает записи 24/7, учитывает специализацию врачей, их расписание и автоматически
                    отправляет напоминания пациентам.
                  </p>
                  <p className="text-sm text-emerald-400 font-medium">↓ Сокращение времени на запись на 80%</p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 md:p-8 rounded-xl hover:scale-[1.02] transition-transform">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400">
                  <FileText className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Обработка медицинских документов</h3>
                  <p className="text-foreground/70 leading-relaxed mb-3">
                    Автоматическое извлечение данных из результатов анализов, истории болезни и диагностических
                    заключений для быстрого доступа врачей.
                  </p>
                  <p className="text-sm text-blue-400 font-medium">↑ Ускорение обработки документов в 5 раз</p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 md:p-8 rounded-xl hover:scale-[1.02] transition-transform">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-purple-500/10 text-purple-400">
                  <Brain className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Поддержка врачебных решений</h3>
                  <p className="text-foreground/70 leading-relaxed mb-3">
                    AI анализирует симптомы, историю пациента и медицинские базы знаний, предлагая врачам возможные
                    диагнозы и рекомендации по лечению.
                  </p>
                  <p className="text-sm text-purple-400 font-medium">↑ Повышение точности диагностики на 30%</p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 md:p-8 rounded-xl hover:scale-[1.02] transition-transform">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-cyan-500/10 text-cyan-400">
                  <Stethoscope className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Мониторинг состояния пациентов</h3>
                  <p className="text-foreground/70 leading-relaxed mb-3">
                    Система отслеживает показатели здоровья пациентов, напоминает о приеме лекарств и автоматически
                    уведомляет врачей о критических изменениях.
                  </p>
                  <p className="text-sm text-cyan-400 font-medium">↓ Снижение пропуска приемов лекарств на 65%</p>
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
