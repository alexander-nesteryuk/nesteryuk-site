import type { Metadata } from 'next'
import { ThemeProvider } from '@/components/ThemeProvider'
import '@fontsource/onest/400.css'
import '@fontsource/onest/500.css'
import '@fontsource/onest/600.css'
import '@fontsource/onest/700.css'
import '@fontsource/onest/800.css'
import './globals.css'

export const metadata: Metadata = {
  title: 'Александр Нестерюк — контент-заводы, 200М+ просмотров',
  description: 'Один из первых в России начал строить контент-заводы.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}