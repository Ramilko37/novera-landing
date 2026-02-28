"use client"

import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion"

const navigation = [
  { label: "Услуги", href: "#services" },
  { label: "Кейсы", href: "#cases" },
  { label: "Процесс", href: "#process" },
  { label: "Контакты", href: "#contact" },
]

const services = [
  {
    title: "Автоматизация бизнес-процессов",
    description:
      "Находим узкие места в операционке и автоматизируем повторяемые задачи: от обработки заявок до внутренних workflow.",
    details: ["Аудит процессов", "Интеграция с CRM/ERP", "Регламенты и SLA"],
  },
  {
    title: "Разработка и внедрение AI-агентов",
    description:
      "Создаем AI-агентов под конкретные бизнес-сценарии: продажи, поддержка, аналитика, бэк-офис и сервисные команды.",
    details: ["Мультиагентные сценарии", "RAG и базы знаний", "Наблюдаемость и контроль качества"],
  },
  {
    title: "AI-консалтинг для бизнеса",
    description:
      "Формируем AI-стратегию компании: от приоритизации кейсов до дорожной карты внедрения и расчета экономического эффекта.",
    details: ["AI roadmap", "Экономика внедрения", "Governance и риски"],
  },
]

const cases = [
  {
    name: "cvetipolubvi.ru",
    niche: "Цветочный e-commerce",
    result: "Умный ИИ-помощник на сайте",
    summary: "Внедрение умного ИИ-помощника в сайт цветочного магазина для консультаций и оформления заказов.",
  },
  {
    name: "FinFlow",
    niche: "Финтех",
    result: "-38% ручной нагрузки в поддержке",
    summary: "Внедрили AI-агента первой линии и автоматическую маршрутизацию обращений по SLA.",
  },
  {
    name: "MedNova",
    niche: "HealthTech",
    result: "x2.1 скорость обработки запросов",
    summary: "Автоматизировали обработку заявок и отчетность для операционной команды клиник.",
  },
]

const process = [
  {
    stage: "01",
    title: "Диагностика",
    text: "Разбираем процессы, точки потерь и bottleneck. Формируем целевые KPI по скорости, качеству и стоимости операций.",
  },
  {
    stage: "02",
    title: "Проектирование решения",
    text: "Проектируем архитектуру AI-решения: интеграции, источники данных, роли агентов, сценарии эскалации и контроль рисков.",
  },
  {
    stage: "03",
    title: "Внедрение",
    text: "Разрабатываем и внедряем AI-агентов, подключаем к бизнес-системам и запускаем пилот на реальных задачах.",
  },
  {
    stage: "04",
    title: "Рост",
    text: "Масштабируем успешные сценарии, оптимизируем метрики и разворачиваем решение на новые направления бизнеса.",
  },
]

const metrics = [
  { value: "70+", label: "автоматизаций внедрено" },
  { value: "12", label: "дней до пилота" },
  { value: "92%", label: "клиентов масштабируют решение" },
]

export default function Home() {
  const prefersReducedMotion = useReducedMotion()
  const { scrollYProgress } = useScroll()

  const ambientYRaw = useTransform(scrollYProgress, [0, 1], [0, prefersReducedMotion ? 0 : -150])
  const ambientY = useSpring(ambientYRaw, { stiffness: 110, damping: 24, mass: 0.45 })

  const heroYRaw = useTransform(scrollYProgress, [0, 0.25], [0, prefersReducedMotion ? 0 : -56])
  const heroOpacityRaw = useTransform(scrollYProgress, [0, 0.3], [1, prefersReducedMotion ? 1 : 0.72])
  const heroY = useSpring(heroYRaw, { stiffness: 120, damping: 28 })
  const heroOpacity = useSpring(heroOpacityRaw, { stiffness: 120, damping: 30 })

  const topbarScaleRaw = useTransform(scrollYProgress, [0, 0.18], [1, prefersReducedMotion ? 1 : 0.975])
  const topbarYRaw = useTransform(scrollYProgress, [0, 0.18], [0, prefersReducedMotion ? 0 : -8])
  const topbarScale = useSpring(topbarScaleRaw, { stiffness: 140, damping: 30 })
  const topbarY = useSpring(topbarYRaw, { stiffness: 140, damping: 32 })

  const sectionInView = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 34 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.2 },
        transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] },
      }

  const cardInView = (index: number) =>
    prefersReducedMotion
      ? {}
      : {
          initial: { opacity: 0, y: 24, scale: 0.985 },
          whileInView: { opacity: 1, y: 0, scale: 1 },
          viewport: { once: true, amount: 0.25 },
          transition: {
            duration: 0.58,
            delay: index * 0.1,
            ease: [0.22, 1, 0.36, 1],
          },
        }

  return (
    <main className="landing">
      <motion.div className="ambient-layer" aria-hidden style={prefersReducedMotion ? undefined : { y: ambientY }} />

      <motion.header
        className="topbar shell"
        style={prefersReducedMotion ? undefined : { scale: topbarScale, y: topbarY }}
      >
        <a className="brand" href="#">
          <span className="brand__dot" aria-hidden>
            /
          </span>
          <span>NOVERA</span>
        </a>

        <nav className="menu" aria-label="Навигация">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="topbar__cta" href="#contact">
          Обсудить проект
        </a>
      </motion.header>

      <motion.section className="hero shell" style={prefersReducedMotion ? undefined : { y: heroY, opacity: heroOpacity }} {...sectionInView}>
        <motion.div className="hero__content" {...cardInView(0)}>
          <p className="eyebrow">Novera · AI Automation Studio</p>
          <h1>
            Автоматизируем бизнес
            <br />
            с помощью AI-агентов
            <br />и прикладного AI-консалтинга.
          </h1>
          <p className="hero__lead">
            Внедряем AI-решения в операционку, продажи и сервис. Помогаем быстро получить измеримый эффект и
            масштабировать его на всю компанию.
          </p>

          <div className="hero__actions">
            <a className="btn btn--primary" href="#contact">
              Запустить проект
            </a>
            <a className="btn btn--ghost" href="#cases">
              Посмотреть кейсы
            </a>
          </div>

          <ul className="tag-list" aria-label="Направления">
            <li>Business Automation</li>
            <li>AI Agents</li>
            <li>AI Consulting</li>
            <li>Operations</li>
          </ul>
        </motion.div>

        <motion.aside className="hero__panel" {...cardInView(1)}>
          <p className="hero__panel-label">Как работаем</p>
          <h2>Запускаем AI-инициативы как управляемый бизнес-проект.</h2>
          <p>
            Сначала считаем экономику и риски, затем запускаем пилот и выводим решение в промышленную эксплуатацию.
          </p>
          <dl>
            <div>
              <dt>Старт</dt>
              <dd>2-3 дня</dd>
            </div>
            <div>
              <dt>Релиз MVP</dt>
              <dd>до 14 дней</dd>
            </div>
            <div>
              <dt>Поддержка</dt>
              <dd>еженедельные итерации</dd>
            </div>
          </dl>
        </motion.aside>
      </motion.section>

      <motion.section id="services" className="shell section" {...sectionInView}>
        <div className="section-head">
          <p className="eyebrow">Услуги</p>
          <h2>Помогаем бизнесу внедрять AI без хаоса и лишних затрат.</h2>
        </div>

        <div className="service-grid">
          {services.map((service, index) => (
            <motion.article className="service-card" key={service.title} {...cardInView(index)}>
              <span className="service-card__index">0{index + 1}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul>
                {service.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </motion.section>

      <motion.section className="shell section about" {...sectionInView}>
        <div>
          <p className="eyebrow">Почему с нами</p>
          <h2>Novera объединяет экспертизу в AI-инженерии, автоматизации и бизнес-операциях.</h2>
        </div>

        <motion.div className="about__quote" {...cardInView(0)}>
          <p>
            Наша цель не «показать демо AI», а внедрить рабочую систему, которая снижает издержки, ускоряет процессы и
            высвобождает время команды.
          </p>
        </motion.div>

        <div className="metric-grid">
          {metrics.map((item, index) => (
            <motion.article key={item.label} {...cardInView(index)}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </motion.article>
          ))}
        </div>
      </motion.section>

      <motion.section id="cases" className="shell section" {...sectionInView}>
        <div className="section-head">
          <p className="eyebrow">Кейсы</p>
          <h2>Результаты, которые можно измерить.</h2>
        </div>

        <div className="case-grid">
          {cases.map((item, index) => (
            <motion.article className="case-card" key={item.name} {...cardInView(index)}>
              <div className="case-card__top">
                <span>{item.niche}</span>
                <strong>{item.name}</strong>
              </div>
              <p>{item.summary}</p>
              <p className="case-card__result">{item.result}</p>
            </motion.article>
          ))}
        </div>
      </motion.section>

      <motion.section id="process" className="shell section" {...sectionInView}>
        <div className="section-head">
          <p className="eyebrow">Процесс</p>
          <h2>Работаем короткими итерациями и прозрачными этапами.</h2>
        </div>

        <ol className="process-list">
          {process.map((item, index) => (
            <motion.li key={item.stage} className="process-item" {...cardInView(index)}>
              <span>{item.stage}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </motion.li>
          ))}
        </ol>
      </motion.section>

      <motion.section id="contact" className="shell section cta" {...sectionInView}>
        <p className="eyebrow">Контакт</p>
        <h2>Готовы обсудить AI-трансформацию вашего бизнеса?</h2>
        <p>
          Напишите в Telegram или на почту. Подготовим предложение по этапам внедрения, срокам и целевым метрикам в
          течение одного рабочего дня.
        </p>
        <div className="cta__actions">
          <a className="btn btn--primary" href="mailto:hello@aiagents.studio">
            hello@aiagents.studio
          </a>
          <a className="btn btn--ghost" href="https://t.me" target="_blank" rel="noreferrer">
            Telegram
          </a>
        </div>
      </motion.section>

      <motion.footer className="shell footer" {...cardInView(0)}>
        <p>Novera</p>
        <p>Москва · 2026</p>
      </motion.footer>
    </main>
  )
}
