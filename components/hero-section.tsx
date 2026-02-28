"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import Link from "next/link"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  const phrases = [
    "ИИ-агенты для автоматизации бизнес-процессов",
    "Продакшн-готовые ИИ-системы для компаний",
    "Аудит и оптимизация существующих ИИ-агентов",
    "Чат-боты и AI-ассистенты для любой индустрии",
    "Интерактивные мини-приложения и геймификация",
  ]
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex]

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          // Typing
          if (displayedText.length < currentPhrase.length) {
            setDisplayedText(currentPhrase.slice(0, displayedText.length + 1))
          } else {
            // Pause at the end before deleting
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          // Deleting
          if (displayedText.length > 0) {
            setDisplayedText(displayedText.slice(0, -1))
          } else {
            // Move to next phrase
            setIsDeleting(false)
            setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length)
          }
        }
      },
      isDeleting ? 50 : 100,
    )

    return () => clearTimeout(timeout)
  }, [displayedText, isDeleting, currentPhraseIndex, phrases])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20 md:pt-0"
    >
      {/* Gradient background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-6 text-center">
        {/* Pill badge */}
        <div
          className={`inline-block mb-6 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="text-xs md:text-sm text-primary font-semibold">AI-Powered Automation</span>
        </div>

        <h1
          className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="gradient-text">Разработка ИИ-агентов</span> и веб-решений для бизнеса
        </h1>

        <p
          className={`text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto mb-8 leading-relaxed transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Проектируем, проводим аудит и оптимизируем ИИ-системы и веб-сайты с фокусом на надёжность, масштабируемость и
          реальную бизнес-ценность.{" "}
          <span className="gradient-text font-semibold">
            {displayedText}
            <span className="animate-pulse">|</span>
          </span>
        </p>

        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center mb-16 transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Link href="/contact">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground h-12 px-8 text-base font-semibold group">
              Запросить демо
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition" size={20} />
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline" className="h-12 px-8 text-base font-semibold bg-transparent">
              Связаться с нами
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
