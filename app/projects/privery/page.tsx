'use client'

import Header from '@/components/Header'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

const results = [
  { label: 'Просмотры', value: '100+ млн' },
  { label: 'Роликов', value: '33 420' },
  { label: 'Команда', value: '130+ человек' },
  { label: 'Конверсия на сайт', value: 'до 10%' },
]

export default function PriveryPage() {
  return (
    <>
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container max-w-3xl">
          
          <Link href="/" className="inline-flex items-center gap-2 text-muted hover:text-foreground mb-8 transition-colors">
            <ArrowLeft size={20} />
            Назад
          </Link>
          
          <article className="section">
            <div className="mb-8">
              <span className="text-5xl mb-4 block">🎬</span>
              <h1 className="text-4xl font-bold mb-2">Privery</h1>
              <p className="text-xl text-muted">33 420 роликов за 55 дней. Это не опечатка.</p>
            </div>

            <div className="card p-6 mb-8">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-muted">Период</span>
                  <p className="font-medium">Февраль 2025 — н.в.</p>
                </div>
                <div>
                  <span className="text-muted">Роль</span>
                  <p className="font-medium">Директор по контенту / Head of Content</p>
                </div>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted mb-8">
                Privery — креативное агентство. Задача: построить контент-завод для крупного заказчика. Масштаб — тысячи роликов в месяц. Качество — чтобы работало на конверсию.
              </p>

              <h2 className="text-2xl font-bold mb-4 mt-12">Что сделал</h2>
              
              <h3 className="text-xl font-semibold mb-3 mt-8">1. Производство</h3>
              <ul className="space-y-2 text-muted mb-6">
                <li>• 33 420 роликов за 55 дней</li>
                <li>• 7 290 уникальных креативов</li>
                <li>• CPV 0,4 ₽ (в 3-5 раз дешевле рынка)</li>
                <li>• До 10 роликов/день от каждого креатора</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-8">2. Команда</h3>
              <ul className="space-y-2 text-muted mb-6">
                <li>• С нуля до 130+ сотрудников</li>
                <li>• 110+ активных креаторов</li>
                <li>• 20+ сотрудников в офисе: сценаристы, influence-менеджеры, скауты, аналитики</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-8">3. Система</h3>
              <ul className="space-y-2 text-muted mb-6">
                <li>• 6 платформ: TikTok, Instagram, VK Клипы, Shorts, Yappy</li>
                <li>• Единая система сценариев</li>
                <li>• AI-ассистенты: экономия 30% времени</li>
                <li>• Digital-дашборды для отчётности</li>
              </ul>

              <h2 className="text-2xl font-bold mb-6 mt-12">Результаты</h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {results.map((item, i) => (
                <div key={i} className="card text-center p-4">
                  <div className="text-xl font-bold text-accent">{item.value}</div>
                  <div className="text-sm text-muted mt-1">{item.label}</div>
                </div>
              ))}
            </div>

            <Link href="/" className="inline-flex items-center gap-2 text-accent hover:underline">
              <ArrowLeft size={16} />
              Вернуться на главную
            </Link>
          </article>

        </div>
      </main>
    </>
  )
}
