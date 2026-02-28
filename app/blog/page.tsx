import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"

const blogPosts = [
  {
    id: 1,
    title: "Как AI-автоматизация сократила операционные расходы компании на 40%",
    excerpt: "Реальный кейс внедрения AI-агентов в крупной логистической компании. Рассказываем о результатах спустя 6 месяцев после запуска и о том, какие процессы удалось оптимизировать в первую очередь.",
    date: "15 января 2026",
    readTime: "7 мин",
    category: "Кейсы",
    slug: "ai-automation-cost-reduction"
  },
  {
    id: 2,
    title: "5 признаков того, что вашему бизнесу нужна AI-автоматизация",
    excerpt: "Многие компании откладывают внедрение AI-решений, не понимая, когда это действительно необходимо. В этой статье мы разберем ключевые сигналы, указывающие на готовность бизнеса к автоматизации.",
    date: "10 января 2026",
    readTime: "5 мин",
    category: "Советы",
    slug: "signs-business-needs-ai"
  },
  {
    id: 3,
    title: "Отзывы клиентов: как AI-чатбот изменил клиентский сервис в e-commerce",
    excerpt: "Собрали отзывы наших клиентов о внедрении AI-чатботов. Узнайте, как автоматизация поддержки повысила удовлетворенность покупателей и сократила нагрузку на операторов.",
    date: "5 января 2026",
    readTime: "6 мин",
    category: "Отзывы",
    slug: "ai-chatbot-customer-reviews"
  },
  {
    id: 4,
    title: "Тренды AI-автоматизации в 2026 году: что ждет бизнес",
    excerpt: "Искусственный интеллект продолжает трансформировать бизнес-процессы. Рассматриваем главные тренды года: мультимодальные агенты, автономные системы принятия решений и персонализация на новом уровне.",
    date: "1 января 2026",
    readTime: "8 мин",
    category: "Аналитика",
    slug: "ai-automation-trends-2026"
  }
]

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Блог</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
              Статьи о AI-автоматизации, кейсы внедрения и экспертные советы для развития вашего бизнеса
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="glass-card p-6 md:p-8 rounded-xl hover:border-accent transition-all hover:scale-[1.02]">
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-2 text-sm text-foreground/50">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-foreground/50">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </div>
                </div>
                
                <h2 className="text-xl md:text-2xl font-bold mb-4 hover:text-accent transition-colors">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h2>
                
                <p className="text-foreground/70 leading-relaxed mb-6">
                  {post.excerpt}
                </p>
                
                <Link 
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-accent hover:text-primary transition-colors font-medium"
                >
                  Читать далее
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <div className="glass-card p-8 md:p-12 rounded-2xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Хотите узнать больше о возможностях AI для вашего бизнеса?
            </h2>
            <p className="text-foreground/70 mb-8 max-w-2xl mx-auto">
              Наши эксперты проведут бесплатную консультацию и расскажут, как AI-автоматизация может помочь именно вашей компании
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-accent text-foreground font-semibold rounded-full hover:opacity-90 transition"
            >
              Связаться с нами
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
