"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/20">
      <nav className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
            <span className="text-sm font-bold text-foreground">N</span>
          </div>
          <span className="text-xl font-bold gradient-text">Novera</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/about" className="text-sm text-foreground/80 hover:text-accent transition">
            О нас
          </Link>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown("services")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button className="text-sm text-foreground/80 hover:text-accent transition flex items-center gap-1">
              Услуги
              <ChevronDown size={16} />
            </button>
            {openDropdown === "services" && (
              <div className="absolute top-full left-0 mt-2 w-48 glass-effect border border-border/20 rounded-lg py-2 shadow-lg">
                <Link
                  href="/services/1"
                  className="block px-4 py-2 text-sm text-foreground/80 hover:bg-primary/10 hover:text-accent transition"
                >
                  AI-агенты
                </Link>
                <Link
                  href="/services/2"
                  className="block px-4 py-2 text-sm text-foreground/80 hover:bg-primary/10 hover:text-accent transition"
                >
                  Разработка сайтов
                </Link>
                <Link
                  href="/services/3"
                  className="block px-4 py-2 text-sm text-foreground/80 hover:bg-primary/10 hover:text-accent transition"
                >
                  AI-аудит
                </Link>
                <Link
                  href="/services/4"
                  className="block px-4 py-2 text-sm text-foreground/80 hover:bg-primary/10 hover:text-accent transition"
                >
                  Чат-боты
                </Link>
                <Link
                  href="/services/5"
                  className="block px-4 py-2 text-sm text-foreground/80 hover:bg-primary/10 hover:text-accent transition"
                >
                  Мини-приложения
                </Link>
              </div>
            )}
          </div>

          {/* Projects Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown("projects")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button className="text-sm text-foreground/80 hover:text-accent transition flex items-center gap-1">
              Проекты
              <ChevronDown size={16} />
            </button>
            {openDropdown === "projects" && (
              <div className="absolute top-full left-0 mt-2 w-48 glass-effect border border-border/20 rounded-lg py-2 shadow-lg">
                <Link
                  href="/projects/1"
                  className="block px-4 py-2 text-sm text-foreground/80 hover:bg-primary/10 hover:text-accent transition"
                >
                  HR платформа
                </Link>
                <Link
                  href="/projects/2"
                  className="block px-4 py-2 text-sm text-foreground/80 hover:bg-primary/10 hover:text-accent transition"
                >
                  Вебсайт
                </Link>
                <Link
                  href="/projects/3"
                  className="block px-4 py-2 text-sm text-foreground/80 hover:bg-primary/10 hover:text-accent transition"
                >
                  Вебсайт
                </Link>
              </div>
            )}
          </div>

          {/* Industry Solutions Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown("solutions")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button className="text-sm text-foreground/80 hover:text-accent transition flex items-center gap-1">
              Отраслевые решения
              <ChevronDown size={16} />
            </button>
            {openDropdown === "solutions" && (
              <div className="absolute top-full left-0 mt-2 w-48 glass-effect border border-border/20 rounded-lg py-2 shadow-lg">
                <Link
                  href="/solutions/1"
                  className="block px-4 py-2 text-sm text-foreground/80 hover:bg-primary/10 hover:text-accent transition"
                >
                  HR платформа
                </Link>
                <Link
                  href="/solutions/2"
                  className="block px-4 py-2 text-sm text-foreground/80 hover:bg-primary/10 hover:text-accent transition"
                >
                  Контейнерная логистика
                </Link>
                <Link
                  href="/solutions/3"
                  className="block px-4 py-2 text-sm text-foreground/80 hover:bg-primary/10 hover:text-accent transition"
                >
                  Обучение ИИ моделей
                </Link>
                <Link
                  href="/solutions/4"
                  className="block px-4 py-2 text-sm text-foreground/80 hover:bg-primary/10 hover:text-accent transition"
                >
                  Недвижимость
                </Link>
              </div>
            )}
          </div>

          <Link href="/blog" className="text-sm text-foreground/80 hover:text-accent transition">
            Блог
          </Link>

          <Link href="/contact" className="text-sm text-foreground/80 hover:text-accent transition">
            Контакты
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-foreground" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border/20 bg-background/95 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-4">
            <Link href="/about" className="text-sm text-foreground/80 hover:text-accent transition py-2">
              О нас
            </Link>
            <div>
              <button
                onClick={() => setOpenDropdown(openDropdown === "services" ? null : "services")}
                className="text-sm text-foreground/80 hover:text-accent transition py-2 flex items-center gap-1 w-full"
              >
                Услуги
                <ChevronDown size={16} />
              </button>
              {openDropdown === "services" && (
                <div className="pl-4 space-y-2 mt-2">
                  <Link href="/services/1" className="block text-sm text-foreground/60 hover:text-accent py-1">
                    AI-агенты
                  </Link>
                  <Link href="/services/2" className="block text-sm text-foreground/60 hover:text-accent py-1">
                    Разработка сайтов
                  </Link>
                  <Link href="/services/3" className="block text-sm text-foreground/60 hover:text-accent py-1">
                    AI-аудит
                  </Link>
                  <Link href="/services/4" className="block text-sm text-foreground/60 hover:text-accent py-1">
                    Чат-боты
                  </Link>
                  <Link href="/services/5" className="block text-sm text-foreground/60 hover:text-accent py-1">
                    Мини-приложения
                  </Link>
                </div>
              )}
            </div>
            <div>
              <button
                onClick={() => setOpenDropdown(openDropdown === "projects" ? null : "projects")}
                className="text-sm text-foreground/80 hover:text-accent transition py-2 flex items-center gap-1 w-full"
              >
                Проекты
                <ChevronDown size={16} />
              </button>
              {openDropdown === "projects" && (
                <div className="pl-4 space-y-2 mt-2">
                  <Link href="/projects/1" className="block text-sm text-foreground/60 hover:text-accent py-1">
                    HR платформа
                  </Link>
                  <Link href="/projects/2" className="block text-sm text-foreground/60 hover:text-accent py-1">
                    Вебсайт
                  </Link>
                  <Link href="/projects/3" className="block text-sm text-foreground/60 hover:text-accent py-1">
                    Вебсайт
                  </Link>
                </div>
              )}
            </div>
            <div>
              <button
                onClick={() => setOpenDropdown(openDropdown === "solutions" ? null : "solutions")}
                className="text-sm text-foreground/80 hover:text-accent transition py-2 flex items-center gap-1 w-full"
              >
                Отраслевые решения
                <ChevronDown size={16} />
              </button>
              {openDropdown === "solutions" && (
                <div className="pl-4 space-y-2 mt-2">
                  <Link href="/solutions/1" className="block text-sm text-foreground/60 hover:text-accent py-1">
                    HR платформа
                  </Link>
                  <Link href="/solutions/2" className="block text-sm text-foreground/60 hover:text-accent py-1">
                    Контейнерная логистика
                  </Link>
                  <Link href="/solutions/3" className="block text-sm text-foreground/60 hover:text-accent py-1">
                    Обучение ИИ моделей
                  </Link>
                  <Link href="/solutions/4" className="block text-sm text-foreground/60 hover:text-accent py-1">
                    Недвижимость
                  </Link>
                </div>
              )}
            </div>
            <Link href="/blog" className="text-sm text-foreground/80 hover:text-accent transition py-2">
              Блог
            </Link>
            <Link href="/contact" className="text-sm text-foreground/80 hover:text-accent transition py-2">
              Контакты
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
