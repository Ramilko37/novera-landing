const navigation = [
  { label: "Услуги", href: "#services" },
  { label: "Кейсы", href: "#cases" },
  { label: "Процесс", href: "#process" },
  { label: "Контакты", href: "#contact" },
]

const services = [
  {
    title: "Лендинги и промо-сайты",
    description: "Проектируем структуру, пишем оффер и собираем адаптивный интерфейс с упором на конверсию.",
    details: ["UI/UX и прототип", "Копирайтинг и tone of voice", "Верстка и анимации"],
  },
  {
    title: "AI-агенты для бизнеса",
    description: "Автоматизируем рутину: квалификация лидов, ответы клиентам, внутренние ассистенты для команды.",
    details: ["Интеграции с CRM", "Сценарии и память диалогов", "Метрики качества"],
  },
  {
    title: "Запуск и поддержка",
    description: "Помогаем после релиза: тесты гипотез, аналитика, обновления контента и расширение функционала.",
    details: ["A/B тесты", "Отчеты по воронке", "Спринты улучшений"],
  },
]

const cases = [
  {
    name: "FinFlow",
    niche: "Финтех",
    result: "+41% заявок за 6 недель",
    summary: "Пересобрали лендинг и внедрили AI-ассистента для предквалификации входящих лидов.",
  },
  {
    name: "MedNova",
    niche: "HealthTech",
    result: "x2.3 скорость обработки заявок",
    summary: "Автоматизировали входящие обращения и добавили сценарии персонального онбординга клиентов.",
  },
  {
    name: "CoursePilot",
    niche: "EdTech",
    result: "+28% оплат на запуске",
    summary: "Собрали промо-страницу под запуск курса и настроили AI-воронку прогрева.",
  },
]

const process = [
  {
    stage: "01",
    title: "Диагностика",
    text: "Разбираем продукт, аудиторию и текущую воронку. Фиксируем цели, KPI и ограничения.",
  },
  {
    stage: "02",
    title: "Дизайн и контент",
    text: "Проектируем структуру лендинга, собираем визуальную систему и пишем тексты под продажи.",
  },
  {
    stage: "03",
    title: "Разработка",
    text: "Реализуем адаптивный сайт, подключаем формы, аналитику и необходимые интеграции.",
  },
  {
    stage: "04",
    title: "Рост",
    text: "После релиза еженедельно улучшаем конверсию, сценарии AI и пользовательские пути.",
  },
]

const metrics = [
  { value: "70+", label: "проектов запущено" },
  { value: "14", label: "дней до первого релиза" },
  { value: "92%", label: "клиентов продолжают работу" },
]

export default function Home() {
  return (
    <main className="landing">
      <div className="ambient-layer" aria-hidden />

      <header className="topbar shell">
        <a className="brand" href="#">
          <span className="brand__dot" aria-hidden>
            /
          </span>
          <span>AI AGENTS STUDIO</span>
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
      </header>

      <section className="hero shell section-reveal">
        <div className="hero__content">
          <p className="eyebrow">Лендинги и AI-решения под ключ</p>
          <h1>
            Делаем сайты,
            <br />
            которые приводят клиентов
            <br />
            и усиливают команду AI-автоматизацией.
          </h1>
          <p className="hero__lead">
            Запускаем digital-продукты в ритме спринтов: от стратегии и дизайна до кода, аналитики и поддержки после
            релиза.
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
            <li>Landing</li>
            <li>Web Design</li>
            <li>AI Agents</li>
            <li>Automation</li>
          </ul>
        </div>

        <aside className="hero__panel section-reveal">
          <p className="hero__panel-label">Текущий формат</p>
          <h2>Собираем лендинг как продукт, а не как шаблон.</h2>
          <p>
            Каждый экран работает на бизнес-задачу: понятный оффер, аргументы, социальные доказательства и действие.
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
        </aside>
      </section>

      <section id="services" className="shell section section-reveal">
        <div className="section-head">
          <p className="eyebrow">Услуги</p>
          <h2>Закрываем полный цикл: от идеи до метрик роста.</h2>
        </div>

        <div className="service-grid">
          {services.map((service, index) => (
            <article className="service-card" key={service.title} style={{ animationDelay: `${index * 120}ms` }}>
              <span className="service-card__index">0{index + 1}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul>
                {service.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="shell section about section-reveal">
        <div>
          <p className="eyebrow">Почему с нами</p>
          <h2>Команда дизайнеров и инженеров, которая говорит языком бизнеса.</h2>
        </div>

        <div className="about__quote">
          <p>
            Мы не продаем просто “красивый сайт”. Наша задача: сократить путь от первого касания до заявки и
            автоматизировать рутину, которая тормозит рост.
          </p>
        </div>

        <div className="metric-grid">
          {metrics.map((item) => (
            <article key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </article>
          ))}
        </div>
      </section>

      <section id="cases" className="shell section section-reveal">
        <div className="section-head">
          <p className="eyebrow">Кейсы</p>
          <h2>Результаты, которые можно измерить.</h2>
        </div>

        <div className="case-grid">
          {cases.map((item, index) => (
            <article className="case-card" key={item.name} style={{ animationDelay: `${index * 140}ms` }}>
              <div className="case-card__top">
                <span>{item.niche}</span>
                <strong>{item.name}</strong>
              </div>
              <p>{item.summary}</p>
              <p className="case-card__result">{item.result}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="process" className="shell section section-reveal">
        <div className="section-head">
          <p className="eyebrow">Процесс</p>
          <h2>Работаем короткими итерациями и прозрачными этапами.</h2>
        </div>

        <ol className="process-list">
          {process.map((item, index) => (
            <li key={item.stage} className="process-item" style={{ animationDelay: `${index * 100}ms` }}>
              <span>{item.stage}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section id="contact" className="shell section cta section-reveal">
        <p className="eyebrow">Контакт</p>
        <h2>Готовы обсудить ваш запуск?</h2>
        <p>
          Напишите в Telegram или на почту. Вернемся с предложением по этапам, срокам и ожидаемым метрикам в течение
          одного рабочего дня.
        </p>
        <div className="cta__actions">
          <a className="btn btn--primary" href="mailto:hello@aiagents.studio">
            hello@aiagents.studio
          </a>
          <a className="btn btn--ghost" href="https://t.me" target="_blank" rel="noreferrer">
            Telegram
          </a>
        </div>
      </section>

      <footer className="shell footer">
        <p>AI Agents Studio</p>
        <p>Москва · 2026</p>
      </footer>
    </main>
  )
}
