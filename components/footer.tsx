import { Github, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card/50 border-t border-border/20">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-sm font-bold text-foreground">N</span>
              </div>
              <span className="font-bold">Novera</span>
            </div>
            <p className="text-sm text-foreground/60">AI-агенты для автоматизации бизнеса.</p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold mb-4">Продукт</h4>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li>
                <a href="#" className="hover:text-accent transition">
                  Возможности
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition">
                  Цены
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition">
                  Безопасность
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition">
                  Дорожная карта
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Ресурсы</h4>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li>
                <a href="#" className="hover:text-accent transition">
                  Документация
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition">
                  API справочник
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition">
                  Блог
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition">
                  Поддержка
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Компания</h4>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li>
                <a href="#" className="hover:text-accent transition">
                  О нас
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition">
                  Карьера
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition">
                  Контакты
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition">
                  Условия
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-foreground/60">© 2025 Novera. Все права защищены.</p>

          {/* Social links */}
          <div className="flex gap-4">
            <a href="#" className="text-foreground/60 hover:text-accent transition">
              <Github size={20} />
            </a>
            <a href="#" className="text-foreground/60 hover:text-accent transition">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-foreground/60 hover:text-accent transition">
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
