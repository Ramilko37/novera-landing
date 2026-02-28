"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-80 h-80 bg-primary/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/15 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Обсудим вашу задачу и предложим <span className="gradient-text">техническое решение</span>
        </h2>
        <p className="text-lg md:text-xl text-foreground/70 mb-10 max-w-2xl mx-auto">подходящее под ваш бизнес</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link href="/contact">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground h-12 px-8 text-base font-semibold group">
              Связаться с нами
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition" size={20} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
