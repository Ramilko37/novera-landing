import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Brain, Globe, Shield, Bot, Zap } from "lucide-react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

const services = [
  {
    icon: Brain,
    title: "Разработка ИИ-агентов",
    description: "Проектируем и реализуем ИИ-агентов и сложные ИИ-системы под конкретные бизнес-задачи.",
    features: [
      "архитектура ИИ-систем и агентных решений",
      "интеграция с CRM, ERP, внутренними сервисами и API",
      "настройка логики агентов, инструментов и контекста",
      "подготовка решений к продакшену и масштабированию",
    ],
  },
  {
    icon: Globe,
    title: "Создание веб-сайтов",
    description:
      "Разработка веб-сайтов для компаний с фокусом на стабильность, производительность и понятную структуру.",
    features: [
      "корпоративные сайты и продуктовые лендинги",
      "архитектура фронтенда и бэкенда",
      "оптимизация скорости и SEO-основ",
      "поддерживаемый и чистый код",
    ],
  },
  {
    icon: Shield,
    title: "Аудит и оптимизация ИИ",
    description: "Проводим независимый технический аудит уже созданных ИИ-агентов и ИИ-систем.",
    whyNeeded: [
      "на рынке много некачественных и небезопасных ИИ-реализаций",
      "ошибки архитектуры приводят к нестабильной работе и галлюцинациям",
      "неоптимальные системы стоят дороже и работают хуже",
    ],
    features: [
      "архитектуру и логику агентов",
      "качество промптов и цепочек рассуждений",
      "устойчивость и предсказуемость ответов",
      "безопасность и контроль данных",
      "производительность и стоимость эксплуатации",
    ],
  },
  {
    icon: Bot,
    title: "Чат-боты для бизнеса",
    description: "Разработка чат-ботов и AI-ассистентов для любой индустрии.",
    scenarios: [
      "поддержка клиентов",
      "продажи и первичная квалификация лидов",
      "онбординг пользователей",
      "внутренние корпоративные боты",
    ],
  },
  {
    icon: Zap,
    title: "Mini Apps и геймификация",
    description: "Разрабатываем Telegram mini-apps, интерактивные решения и элементы геймификации.",
    examples: [
      "мини-игры и интерактивы во время ожидания процессов",
      "повышение вовлечённости и удержания пользователей",
      "игровые механики в сервисах и продуктах",
      "брендированные мини-приложения",
    ],
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 md:py-32 relative overflow-hidden">
          <div className="max-w-5xl mx-auto px-4 md:px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Услуги</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
              Мы разрабатываем и сопровождаем ИИ- и веб-решения для бизнеса. Работаем с продакшн-готовыми системами,
              реальными пользователями и долгосрочной эксплуатацией.
            </p>
          </div>
        </section>

        {/* Services List */}
        <section className="py-12 md:py-20 bg-card/30">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <div className="space-y-12 md:space-y-16">
              {services.map((service, index) => {
                const Icon = service.icon
                return (
                  <Card
                    key={index}
                    className="glass-effect hover:border-accent/50 transition-all duration-300 p-8 md:p-12"
                  >
                    <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                      {/* Icon */}
                      <div className="shrink-0">
                        <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                          <Icon className="text-accent-foreground" size={32} />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">{service.title}</h2>
                        <p className="text-lg text-foreground/70 mb-6">{service.description}</p>

                        {/* Why Needed (for Audit service) */}
                        {service.whyNeeded && (
                          <div className="mb-6">
                            <h3 className="text-lg font-semibold mb-3 text-foreground/90">Зачем это нужно:</h3>
                            <ul className="space-y-2">
                              {service.whyNeeded.map((item, itemIndex) => (
                                <li key={itemIndex} className="text-foreground/70 flex items-start gap-3">
                                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 shrink-0"></span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Features / What we do */}
                        {service.features && (
                          <div>
                            <h3 className="text-lg font-semibold mb-3 text-foreground/90">
                              {service.whyNeeded ? "Что проверяем и улучшаем:" : "Что делаем:"}
                            </h3>
                            <ul className="space-y-2">
                              {service.features.map((feature, featureIndex) => (
                                <li key={featureIndex} className="text-foreground/70 flex items-start gap-3">
                                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 shrink-0"></span>
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Scenarios (for Chatbots) */}
                        {service.scenarios && (
                          <div>
                            <h3 className="text-lg font-semibold mb-3 text-foreground/90">Типовые сценарии:</h3>
                            <ul className="space-y-2">
                              {service.scenarios.map((scenario, scenarioIndex) => (
                                <li key={scenarioIndex} className="text-foreground/70 flex items-start gap-3">
                                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 shrink-0"></span>
                                  <span>{scenario}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Examples (for Mini Apps) */}
                        {service.examples && (
                          <div>
                            <h3 className="text-lg font-semibold mb-3 text-foreground/90">Примеры использования:</h3>
                            <ul className="space-y-2">
                              {service.examples.map((example, exampleIndex) => (
                                <li key={exampleIndex} className="text-foreground/70 flex items-start gap-3">
                                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 shrink-0"></span>
                                  <span>{example}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-32 relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Поможем выбрать оптимальный формат решения под ваши задачи.
            </h2>
            <Link href="/contact">
              <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-lg px-8">
                Связаться с нами
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
