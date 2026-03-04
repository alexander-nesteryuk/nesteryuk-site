'use client'

import Header from '@/components/Header'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

const finalResults = [
  { label: 'Магазинов', before: '3', after: '35' },
  { label: 'YouTube', before: '19K', after: '144K' },
  { label: 'Просмотры', before: '—', after: '74 млн' },
  { label: 'Трафик сайта', before: '80K', after: '312K' },
]

export default function SkifmusicPage() {
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
              <span className="text-5xl mb-4 block">🎸</span>
              <h1 className="text-4xl font-bold mb-2">SKIFMUSIC</h1>
              <p className="text-xl text-muted">Первые в музыкальной индустрии начали строить контент-заводы. Одни из первых — во всей индустрии.</p>
            </div>

            <div className="card p-6 mb-8">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-muted">Период</span>
                  <p className="font-medium">Март 2020 — Октябрь 2024</p>
                </div>
                <div>
                  <span className="text-muted">Роль</span>
                  <p className="font-medium">Head of Content / Директор по контенту</p>
                </div>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted mb-12">
                SKIFMUSIC — крупнейшая сеть музыкальных магазинов России. Пришёл, когда было 3 магазина и YouTube на 19K. Ушёл — когда стало 35 магазинов, серебряная кнопка и контент как основной канал привлечения.
              </p>

              {/* Section 1: YouTube */}
              <div className="card p-6 mb-6">
                <h2 className="text-2xl font-bold mb-4">📺 YouTube</h2>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-muted mb-2">Что было:</h4>
                  <p className="text-muted">19 000 подписчиков, контент от случая к случаю</p>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Что сделал:</h4>
                  <ul className="space-y-2 text-muted">
                    <li>• Создал in-house продакшн</li>
                    <li>• 1000+ роликов под руководством</li>
                    <li>• 140+ интервью со звёздами: А. Пушной, AkStar, ДиДюЛя, Ария</li>
                    <li>• Системное сотрудничество с 30+ блогерами</li>
                  </ul>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
                  <div className="bg-background rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-accent">144K</div>
                    <div className="text-xs text-muted">подписчиков (×7,5)</div>
                  </div>
                  <div className="bg-background rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-accent">74 млн</div>
                    <div className="text-xs text-muted">просмотров</div>
                  </div>
                  <div className="bg-background rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-accent">🥈</div>
                    <div className="text-xs text-muted">серебряная кнопка</div>
                  </div>
                  <div className="bg-background rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-accent">ТОП-1</div>
                    <div className="text-xs text-muted">в индустрии</div>
                  </div>
                </div>
              </div>

              {/* Section 2: Technical Channel */}
              <div className="card p-6 mb-6">
                <h2 className="text-2xl font-bold mb-4">🎥 Технический канал SKIFMUSIC LIVE</h2>
                
                <p className="text-muted mb-4">
                  <strong>Задача:</strong> Снимать видеообзоры для каждого товара. Быстро, системно, с минимальными затратами.
                </p>

                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Что сделал:</h4>
                  <ul className="space-y-2 text-muted">
                    <li>• Написал инструкции для управляющих магазинов</li>
                    <li>• Внедрил съёмки силами линейного персонала</li>
                    <li>• 1000+ видеообзоров товаров</li>
                  </ul>
                </div>

                <div className="bg-background rounded-lg p-4 mt-4">
                  <p className="text-sm text-muted">
                    <strong className="text-foreground">Результат:</strong> Половина клиентов нажимала на обзор (данные тепловой карты). Минимальные затраты на производство.
                  </p>
                </div>
              </div>

              {/* Section 3: Federal Actions */}
              <div className="card p-6 mb-6">
                <h2 className="text-2xl font-bold mb-4">🎁 Федеральные акции и кросс-промо</h2>
                
                <p className="text-muted mb-4">
                  <strong>Задача:</strong> Привлечь внимание к бренду, повысить средний чек, увеличить UGC.
                </p>

                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Что сделал:</h4>
                  <ul className="space-y-2 text-muted">
                    <li>• Запустил системные розыгрыши гитар</li>
                    <li>• Привлёк топовых музыкантов: ДиДюЛя (500K), Ария (250K), Riffaday (340K)</li>
                    <li>• Промо во всех соцсетях бренда + блогеров</li>
                  </ul>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
                  <div className="bg-background rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-accent">50 000+</div>
                    <div className="text-xs text-muted">участников</div>
                  </div>
                  <div className="bg-background rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-accent">×2</div>
                    <div className="text-xs text-muted">средний чек</div>
                  </div>
                  <div className="bg-background rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-accent">500K+</div>
                    <div className="text-xs text-muted">охват/мес</div>
                  </div>
                  <div className="bg-background rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-accent">50+</div>
                    <div className="text-xs text-muted">гитар разыграно</div>
                  </div>
                </div>
              </div>

              {/* Section 4: Geomarketing */}
              <div className="card p-6 mb-6">
                <h2 className="text-2xl font-bold mb-4">📍 Геомаркетинг</h2>
                
                <p className="text-muted mb-4">
                  <strong>Задача:</strong> Вывести 34 филиала в топ Яндекс.Карт, 2ГИС, Google Maps.
                </p>

                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Что сделал:</h4>
                  <ul className="space-y-2 text-muted">
                    <li>• Настроил системную работу: фото, SEO-теги, отзывы</li>
                    <li>• Обновление всех карточек раз в 2 дня</li>
                    <li>• Внедрил работу и в УК, и в точки-франчайзи</li>
                  </ul>
                </div>

                <div className="grid grid-cols-2 gap-3 mt-6">
                  <div className="bg-background rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-accent">ТОП-3</div>
                    <div className="text-xs text-muted">в каждом городе</div>
                  </div>
                  <div className="bg-background rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-accent">+4 млн ₽</div>
                    <div className="text-xs text-muted">выручки</div>
                  </div>
                </div>
              </div>

              {/* Section 5: Content Marketing */}
              <div className="card p-6 mb-6">
                <h2 className="text-2xl font-bold mb-4">📈 Контент-маркетинг и трафик</h2>
                
                <ul className="space-y-2 text-muted mb-4">
                  <li>• Контент = 60% привлечения клиентов</li>
                  <li>• Глубокий анализ аудитории, адаптация под сегменты</li>
                  <li>• AI для SEO и копирайтинга</li>
                </ul>

                <div className="grid grid-cols-2 gap-3 mt-6">
                  <div className="bg-background rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-accent">80K → 312K</div>
                    <div className="text-xs text-muted">трафик сайта (×4)</div>
                  </div>
                  <div className="bg-background rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-accent">1 млн ₽/год</div>
                    <div className="text-xs text-muted">экономия на SEO</div>
                  </div>
                </div>
              </div>

              {/* Section 6: Speaking */}
              <div className="card p-6 mb-8">
                <h2 className="text-2xl font-bold mb-4">🎤 Выступления</h2>
                <p className="text-muted">
                  С 2022 года выступаю на профильных выставках "Музыка Москва". Темы: маркетинг, контент, привлечение партнёров в федеральную сеть.
                </p>
              </div>

              {/* Final Results */}
              <h2 className="text-2xl font-bold mb-6">Итоги</h2>
              
              <div className="overflow-x-auto mb-8">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 font-semibold">Метрика</th>
                      <th className="text-center py-3 font-semibold text-muted">Было</th>
                      <th className="text-center py-3 font-semibold text-accent">Стало</th>
                    </tr>
                  </thead>
                  <tbody>
                    {finalResults.map((item, i) => (
                      <tr key={i} className="border-b border-border">
                        <td className="py-3">{item.label}</td>
                        <td className="text-center py-3 text-muted">{item.before}</td>
                        <td className="text-center py-3 font-semibold text-accent">{item.after}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="card p-6 mb-8 bg-accent/10 border-accent/20">
                <p className="font-medium text-center">
                  <strong>Ключевое:</strong> Первые в музыкальной индустрии начали строить контент-заводы. Контент стал основным каналом привлечения клиентов с долей 60%.
                </p>
              </div>
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
