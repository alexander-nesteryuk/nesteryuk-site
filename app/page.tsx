'use client'

import Header from '@/components/Header'
import FunButton from '@/components/FunButton'
import { Send, Download, ArrowRight } from 'lucide-react'
import Image from 'next/image'

const stats = [
  { number: '200M+', label: 'просмотров' },
  { number: '50 000+', label: 'роликов' },
  { number: '130+', label: 'человек в команде' },
  { number: '🥈', label: 'серебряная кнопка' },
]

const projects = [
  {
    icon: '☕',
    title: 'ROCO Coffee',
    period: '2025–2026',
    description: 'Вывел кофейный бренд на Wildberries: Telegram с 0 до 8.6K, 50+ блогеров, 200K+ переходов, рост активных ×3.',
    link: '/projects/roco',
  },
  {
    icon: '🎬',
    title: 'Privery',
    period: '2025–н.в.',
    description: 'Построил контент-завод: 33 420 роликов за 55 дней, 100+ млн просмотров, команда 130+ человек.',
    link: '/projects/privery',
  },
  {
    icon: '🎸',
    title: 'SKIFMUSIC',
    period: '2020–2024',
    description: 'Первые в музыкальной индустрии начали строить контент-заводы. Серебряная кнопка, 74 млн просмотров, рост сети с 3 до 35 магазинов.',
    link: '/projects/skifmusic',
  },
]

const skills = [
  'Контент-стратегия',
  'Контент-заводы',
  'Управление командами',
  'E-commerce',
  'Influence-маркетинг',
  'YouTube',
  'Telegram',
  'VK',
  'Instagram',
  'TikTok',
  'Shorts',
  'UGC/EGC',
  'Performance-аналитика',
  'AI-инструменты',
  'SEO',
  'Геомаркетинг',
  'Брендинг',
]

export default function Home() {
  return (
    <>
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container">
          
          {/* Hero Section */}
          <section className="section mb-16">
            <div className="card p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-start">
                <div className="flex-1 order-2 md:order-1">
                  <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                    Привет,<br />
                    я Александр Нестерюк
                  </h1>
                  <p className="text-lg text-muted mb-8 max-w-xl">
                    Один из первых в России начал строить контент-заводы. 200+ млн просмотров. 50 000+ роликов. Тогда это ещё так не называлось.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a 
                      href="https://t.me/s_nesteryuk" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn-primary"
                    >
                      <Send size={18} />
                      Telegram
                    </a>
                    <a 
                      href="/cv.pdf" 
                      download
                      className="btn-secondary"
                    >
                      <Download size={18} />
                      Скачать CV
                    </a>
                    <FunButton />
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <img 
                    src="/images/hero.jpg" 
                    alt="Александр Нестерюк"
                    className="hero-photo"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="section mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, i) => (
                <div key={i} className="card stat-card">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Projects Section */}
          <section className="section mb-16">
            <h2 className="text-2xl font-bold mb-6">Проекты</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {projects.map((project, i) => (
                <a key={i} href={project.link} className="card project-card block">
                  <div className="project-icon">{project.icon}</div>
                  <h3>{project.title}</h3>
                  <div className="project-period">{project.period}</div>
                  <p>{project.description}</p>
                  <span className="project-link">
                    Подробнее <ArrowRight size={16} />
                  </span>
                </a>
              ))}
            </div>
          </section>

          {/* Skills Section */}
          <section className="section mb-16">
            <h2 className="text-2xl font-bold mb-6">Что умею</h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, i) => (
                <span key={i} className="skill-tag">{skill}</span>
              ))}
            </div>
          </section>

          {/* About Section */}
          <section className="section mb-16">
            <h2 className="text-2xl font-bold mb-6">А это просто я</h2>
            <div className="card p-8">
              <div className="max-w-2xl mb-8">
                <p className="text-lg mb-4">
                  Привет! Я Александр.
                </p>
                <p className="text-muted mb-4">
                  Строю контент-заводы. Первый запустил в SKIFMUSIC в 2020 году — тогда это ещё так не называлось. Сейчас это тренд, а тогда просто нужно было сделать так, чтобы работало.
                </p>
                <p className="text-muted mb-4">
                  За это время: 200+ млн просмотров, 50 000+ роликов, серебряная кнопка YouTube, команды до 130 человек.
                </p>
                <p className="text-muted">
                  Живу в Москве. Работаю с теми, кому нужен результат в цифрах.
                </p>
              </div>
              
              {/* Hobbies */}
              <div className="space-y-8">
                {/* Leather */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">🧵 Кожевенное дело</h3>
                  <p className="text-muted mb-4">Шью кожаные сумки. Одну ношу сам — на фото выше.</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <img src="/images/bag-full.jpg" alt="Сумка" className="hobby-image h-48 w-full" />
                    <img src="/images/bag-hands.jpg" alt="Сумка в руках" className="hobby-image h-48 w-full" />
                    <img src="/images/bag-detail.jpg" alt="Детали сумки" className="hobby-image h-48 w-full" />
                    <img src="/images/bag-open.jpg" alt="Сумка открывается" className="hobby-image h-48 w-full" />
                  </div>
                </div>

                {/* Cycling */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">🚴 Велосипед</h3>
                  <p className="text-muted mb-4">Катаю на шоссейном велосипеде. Рекорд — 130 км за день. Велосипед, кстати, цел, я — не очень.</p>
                  <div className="grid grid-cols-2 gap-3">
                    <img src="/images/bike.jpg" alt="Велосипед" className="hobby-image h-48 w-full" />
                    <img src="/images/cyclists.jpg" alt="С велосипедистами" className="hobby-image h-48 w-full" />
                  </div>
                </div>

                {/* Dog */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">🐕 Грейс</h3>
                  <p className="text-muted mb-4">Дрессирую Грейс. Она знает 20 команд, но больше любит мяч. И меня.</p>
                  <div className="w-64">
                    <img src="/images/grace.jpg" alt="Грейс" className="hobby-image h-64 w-full" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="section text-center py-8 border-t border-border">
            <p className="text-muted mb-4">
              У всех сайтов есть подвал, и у этого тоже.
            </p>
            <p className="text-sm text-muted mb-6">
              Сделано с помощью Claude Code под чутким надзором Грейс 🐕
            </p>
            <div className="flex justify-center gap-4">
              <a 
                href="https://t.me/s_nesteryuk" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                @s_nesteryuk
              </a>
              <a 
                href="/cv.pdf" 
                download
                className="text-accent hover:underline"
              >
                Скачать CV
              </a>
            </div>
            <p className="text-sm text-muted mt-6">
              © 2026 Александр Нестерюк
            </p>
          </footer>

        </div>
      </main>
    </>
  )
}
