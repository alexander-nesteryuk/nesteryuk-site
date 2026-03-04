'use client'

import { useState } from 'react'

const phrases = [
  'Кнопка',
  'В чём смысл?',
  'Хороший вопрос',
  'Проверка на упорство',
  'HR оценит',
  'Пишите в Telegram', 
  'Ладно, респект',
  'Это о чём-то говорит',
  'Последний раз?',
  'Или нет?',
  'Я сейчас Грейс позову!',
  'Впечатляет! ЕЩЕ!',
  'Вы победили...',
  '👏',
]

export default function FunButton() {
  const [index, setIndex] = useState(0)
  const [isClicked, setIsClicked] = useState(false)

  const handleClick = () => {
    setIsClicked(true)
    setIndex((prev) => (prev + 1) % phrases.length)
    setTimeout(() => setIsClicked(false), 300)
  }

  return (
    <button 
      onClick={handleClick}
      className={`btn-fun ${isClicked ? 'clicked' : ''}`}
    >
      {phrases[index]}
    </button>
  )
}
