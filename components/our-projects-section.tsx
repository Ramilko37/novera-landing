import { Target, Zap, Shield } from "lucide-react"

const projects = [
  {
    icon: Target,
    title: "Инженерный подход",
    description: "Мы создаём продакшн-готовые решения, рассчитанные на реальную нагрузку и долгосрочную эксплуатацию.",
  },
  {
    icon: Zap,
    title: "Контроль качества ИИ",
    description:
      "Проводим независимый аудит и оптимизацию ИИ-агентов, выявляя архитектурные ошибки, риски галлюцинаций и проблемы безопасности.",
  },
  {
    icon: Shield,
    title: "Интеграция в бизнес-процессы",
    description: "Наши решения встраиваются в существующие системы и поддерживают реальные рабочие процессы.",
  },
]

export function OurProjectsSection() {
  return (
    <section id="projects" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Наши преимущества</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Мы работаем с компаниями, которым важны предсказуемость, техническая ответственность и долгосрочный
            результат
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => {
            const Icon = project.icon
            return (
              <div
                key={index}
                className="glass-effect border border-border/20 rounded-2xl p-6 md:p-8 hover:border-primary/30 transition-all group"
              >
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition">
                      <Icon className="text-accent" size={32} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold mb-3 text-foreground">{project.title}</h3>
                    <p className="text-foreground/70 leading-relaxed">{project.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
