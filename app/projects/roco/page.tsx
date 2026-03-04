'use client'

import Header from '@/components/Header'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

const results = [
  { label: 'Рост выручки', value: '×20 за 4 месяца' },
  { label: 'Telegram', value: '0 → 8 600+' },
  { label: 'Переходы', value: '200 000+' },
  { label: 'Рост активных', value: '×3 за 3 месяца' },
]

export default function RocoPage() {
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
              <span className="text-5xl mb-4 block">☕</span>
              <h1 className="text-4xl font-bold mb-2">ROCO Coffee</h1>
              <p className="text-xl text-muted">Как вырастить бренд на маркетплейсе в 20 раз за 4 месяца</p>
            </div>

            <div className="card p-6 mb-8">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-muted">Период</span>
                  <p className="font-medium">Ноябрь 2025 — н.в.</p>
                </div>
                <div>
                  <span className="text-muted">Роль</span>
                  <p className="font-medium">Директор по digital-маркетингу</p>
                </div>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted mb-8">
                ROCO Coffee — российский бренд кофе. Задача: вывести на Wildberries, построить digital-присутствие, запустить influence-маркетинг. Бюджет ограничен, сроки сжаты.
              </p>

              <h2 className="text-2xl font-bold mb-4 mt-12">Что было</h2>
              <ul className="space-y-2 text-muted mb-8">
                <li>• Бренд без digital-присутствия</li>
                <li>• Нет Telegram-канала</li>
                <li>• Нет системной работы с блогерами</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4 mt-12">Что сделал</h2>
              
              <h3 className="text-xl font-semibold mb-3 mt-8">1. Telegram-канал</h3>
              <ul className="space-y-2 text-muted mb-6">
                <li>• 0 → 8 600+ подписчиков за 3 месяца</li>
                <li>• ER 8,11% (отличный для коммерческого канала)</li>
                <li>• 42 органических упоминания</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-8">2. Influence-маркетинг</h3>
              <ul className="space-y-2 text-muted mb-6">
                <li>• 50+ блогеров (Telegram, VK)</li>
                <li>• 200 000+ целевых переходов</li>
                <li>• CPM: 1 850 ₽</li>
                <li>• CPC: 19 ₽</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-8">3. Wildberries</h3>
              <ul className="space-y-2 text-muted mb-6">
                <li>• Рекламный бюджет: 2+ млн ₽</li>
                <li>• ABC-анализ ассортимента</li>
                <li>• Оптимизация карточек</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-8">4. Команда и процессы</h3>
              <ul className="space-y-2 text-muted mb-6">
                <li>• 8-10 человек под координацией</li>
                <li>• Брендбук и гайдлайны</li>
                <li>• Организация разработки сайта</li>
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
