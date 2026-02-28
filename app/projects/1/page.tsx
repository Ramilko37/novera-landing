import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CheckCircle2 } from "lucide-react"
import Image from "next/image"

export default function Project1Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">HR платформа Integrity HR</span>
          </h1>
          <p className="text-xl text-foreground/70 leading-relaxed mb-12">
            Разработка комплексной HR-платформы для автоматизации процессов найма, адаптации и управления персоналом
          </p>

          {/* Project Images */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden border border-white/10">
              <Image
                src="/ai-chatbot-dashboard-interface-customer-support-an.jpg"
                alt="Панель управления AI агентом"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden border border-white/10">
              <Image src="/customer-service-chat-interface-with-ai-assistant-.jpg" alt="Интерфейс чата с клиентами" fill className="object-cover" />
            </div>
          </div>

          {/* Project Description */}
          <div className="glass-card p-8 md:p-12 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">О проекте</h2>
            <p className="text-lg text-foreground/70 leading-relaxed mb-6">
              Крупная E-commerce компания сталкивалась с растущим объемом клиентских запросов. Команда поддержки не
              справлялась с нагрузкой, что приводило к долгому времени ответа и недовольству клиентов.
            </p>
            <p className="text-lg text-foreground/70 leading-relaxed">
              Мы разработали интеллектуального AI-агента, способного обрабатывать до 80% стандартных запросов
              автоматически, интегрировали его с CRM-системой и настроили плавную эскалацию сложных случаев к
              операторам.
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
                    <h3 className="text-xl font-semibold mb-3">Долгое время ответа</h3>
                    <p className="text-foreground/70">
                      Среднее время ответа сократилось с 4 часов до 35 секунд благодаря мгновенной обработке запросов
                      AI-агентом
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6 hover:border-accent transition-colors">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Перегрузка операторов</h3>
                    <p className="text-foreground/70">
                      Автоматизация 80% рутинных запросов позволила операторам сосредоточиться на сложных задачах,
                      требующих человеческого участия
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6 hover:border-accent transition-colors">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Работа 24/7</h3>
                    <p className="text-foreground/70">
                      AI-агент обеспечивает круглосуточную поддержку клиентов без дополнительных затрат на ночные смены
                      и выходные дни
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6 hover:border-accent transition-colors">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Низкая удовлетворенность</h3>
                    <p className="text-foreground/70">
                      Показатель удовлетворенности клиентов (CSAT) вырос с 72% до 94% благодаря быстрым и точным ответам
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
