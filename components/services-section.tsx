import { Card } from "@/components/ui/card"
import { Brain, Zap, Shield, Workflow, Bot } from "lucide-react"

const services = [
  {
    icon: Brain,
    title: "ИИ-агенты и сложные ИИ-системы",
    description: "Разработка надёжных ИИ-агентов с учётом масштабирования, интеграций и требований к продакшену.",
    features: ["Инженерный подход", "Интеграция в бизнес-процессы", "Долгосрочная эксплуатация"],
  },
  {
    icon: Workflow,
    title: "Веб-разработка для компаний",
    description: "Создание быстрых и поддерживаемых веб-сайтов, ориентированных на бизнес-задачи.",
    features: ["Техническая ответственность", "Масштабируемость", "Продакшн-готовые решения"],
  },
  {
    icon: Shield,
    title: "Аудит и оптимизация ИИ",
    description:
      "Проверка и улучшение уже существующих ИИ-агентов и систем. Выявляем архитектурные ошибки, риски галлюцинаций и проблемы безопасности.",
    features: ["Независимый аудит", "Контроль качества", "Оптимизация агентов"],
  },
  {
    icon: Bot,
    title: "Чат-боты для бизнеса",
    description: "Автоматизация продаж, поддержки и внутренних процессов для любой индустрии.",
    features: ["Автоматизация поддержки", "Интеграция с CRM", "24/7 доступность"],
  },
  {
    icon: Zap,
    title: "Mini Apps и геймификация",
    description:
      "Telegram mini-apps и интерактивные решения для вовлечения пользователей. Мини-игры для удержания внимания.",
    features: ["Telegram mini-apps", "Геймификация UX", "Интерактивные решения"],
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-32 bg-card/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section header */}
        <div className="max-w-2xl mx-auto text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Наши услуги</span>
          </h2>
          <p className="text-lg text-foreground/70">
            Выберите решение для автоматизации и масштабирования вашего бизнеса
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className="glass-effect hover:border-accent/50 transition-all duration-300 group p-6 md:p-8"
              >
                {/* Icon */}
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition">
                  <Icon className="text-accent-foreground" size={24} />
                </div>

                {/* Title and description */}
                <h3 className="text-xl md:text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-foreground/70 mb-6 text-base">{service.description}</p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-foreground/60 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Hover accent line */}
                <div className="h-1 w-0 bg-gradient-to-r from-primary to-accent mt-6 group-hover:w-full transition-all duration-300"></div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
