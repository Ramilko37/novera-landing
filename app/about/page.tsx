import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Target, Users, Lightbulb, Award } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <section className="py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">
            <span className="gradient-text">О нас</span>
          </h1>
          
          <div className="space-y-8 mb-16">
            <p className="text-lg text-foreground/70 leading-relaxed">
              Novera — это команда экспертов в области искусственного интеллекта и автоматизации бизнес-процессов. 
              Мы помогаем компаниям трансформировать их операционную деятельность с помощью интеллектуальных решений, 
              которые работают круглосуточно, повышая эффективность и стимулируя рост бизнеса.
            </p>
            
            <p className="text-lg text-foreground/70 leading-relaxed">
              Наша миссия — сделать передовые технологии автоматизации доступными для организаций любого масштаба. 
              Мы верим, что искусственный интеллект должен быть инструментом, который усиливает возможности людей, 
              а не заменяет их. Поэтому наши решения всегда разрабатываются с фокусом на человеко-машинное взаимодействие.
            </p>
            
            <p className="text-lg text-foreground/70 leading-relaxed">
              За годы работы мы реализовали десятки успешных проектов для клиентов из различных отраслей: 
              от e-commerce и финтеха до здравоохранения и производства. Каждый проект для нас — это возможность 
              создать что-то уникальное, учитывая специфику бизнеса клиента и его стратегические цели.
            </p>
            
            <p className="text-lg text-foreground/70 leading-relaxed">
              Мы постоянно следим за последними достижениями в области AI и машинного обучения, 
              инвестируем в развитие нашей команды и внедряем лучшие практики разработки. 
              Это позволяет нам создавать решения, которые не только решают текущие задачи, 
              но и масштабируются вместе с ростом бизнеса наших клиентов.
            </p>
          </div>

          {/* Values Section */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-card p-6 hover:border-accent transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Результат</h3>
                  <p className="text-foreground/70">
                    Мы фокусируемся на измеримых бизнес-результатах, а не на технологиях ради технологий
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 hover:border-accent transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-accent/10 text-accent">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Партнерство</h3>
                  <p className="text-foreground/70">
                    Строим долгосрочные отношения с клиентами, становясь частью их команды
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 hover:border-accent transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-emerald-500/10 text-emerald-400">
                  <Lightbulb className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Инновации</h3>
                  <p className="text-foreground/70">
                    Применяем новейшие технологии AI для решения сложных бизнес-задач
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 hover:border-accent transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Качество</h3>
                  <p className="text-foreground/70">
                    Каждое решение проходит тщательное тестирование и оптимизацию перед внедрением
                  </p>
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
