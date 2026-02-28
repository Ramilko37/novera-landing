import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CheckCircle2 } from "lucide-react"
import Image from "next/image"

export default function Project2Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Корпоративный вебсайт</span>
          </h1>
          <p className="text-xl text-foreground/70 leading-relaxed mb-12">
            Разработка современного корпоративного сайта с адаптивным дизайном и интеграцией CMS для управления контентом
          </p>

          {/* Project Images */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden border border-white/10">
              <Image
                src="/document-analysis-ai-platform-interface-financial-.jpg"
                alt="Платформа анализа документов"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden border border-white/10">
              <Image src="/financial-document-verification-dashboard-with-ai-.jpg" alt="Верификация документов" fill className="object-cover" />
            </div>
          </div>

          {/* Project Description */}
          <div className="glass-card p-8 md:p-12 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">О проекте</h2>
            <p className="text-lg text-foreground/70 leading-relaxed mb-6">
              Финтех-стартап тратил значительные ресурсы на ручную проверку документов новых клиентов. Процесс KYC
              занимал несколько дней, что негативно влияло на конверсию и пользовательский опыт.
            </p>
            <p className="text-lg text-foreground/70 leading-relaxed">
              Мы создали AI-агента с компьютерным зрением для автоматического извлечения данных из документов, их
              верификации и проверки на соответствие нормативным требованиям, интегрировав решение с существующей
              инфраструктурой компании.
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
                    <h3 className="text-xl font-semibold mb-3">Медленная верификация</h3>
                    <p className="text-foreground/70">
                      Время верификации сократилось с 2-3 дней до 15 минут, что увеличило конверсию новых пользователей
                      на 45%
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6 hover:border-accent transition-colors">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Человеческие ошибки</h3>
                    <p className="text-foreground/70">
                      Автоматизированная система снизила количество ошибок при вводе данных на 98%, обеспечив высокую
                      точность обработки
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6 hover:border-accent transition-colors">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Высокие операционные расходы</h3>
                    <p className="text-foreground/70">
                      Сокращение затрат на верификацию на 70% за счет автоматизации процесса и снижения потребности в
                      ручной работе
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6 hover:border-accent transition-colors">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Масштабируемость</h3>
                    <p className="text-foreground/70">
                      Система легко масштабируется для обработки растущего потока новых клиентов без необходимости
                      расширения команды
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
