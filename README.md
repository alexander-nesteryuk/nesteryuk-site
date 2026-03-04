# nesteryuk.com

Персональный сайт-портфолио Александра Нестерюка.

## Запуск локально

```bash
# Установить зависимости
npm install

# Запустить dev-сервер
npm run dev
```

Открыть http://localhost:3000

## Деплой на Vercel

### 1. Загрузить на GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/nesteryuk-site.git
git push -u origin main
```

### 2. Подключить Vercel

1. Зайти на [vercel.com](https://vercel.com)
2. Нажать "Add New Project"
3. Import репозиторий с GitHub
4. Нажать "Deploy"

### 3. Подключить домен

1. В Vercel: Settings → Domains
2. Добавить `nesteryuk.com`
3. В reg.ru: изменить DNS на Vercel (инструкция появится в Vercel)

## Структура

```
├── app/
│   ├── page.tsx              # Главная страница
│   ├── layout.tsx            # Общий layout
│   ├── globals.css           # Стили
│   └── projects/
│       ├── roco/page.tsx     # Кейс ROCO Coffee
│       ├── privery/page.tsx  # Кейс Privery
│       └── skifmusic/page.tsx # Кейс SKIFMUSIC
├── components/
│   ├── Header.tsx
│   ├── FunButton.tsx         # Интерактивная кнопка
│   └── ThemeProvider.tsx     # Тёмная тема
└── public/
    ├── images/               # Фотографии
    └── cv.pdf                # CV для скачивания
```

## Технологии

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Lucide Icons

---

Сделано с помощью Claude Code 🐕
