import '../globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import styles from './page.module.css'
import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
import { ThemeProvider } from '../../../context/ThemeContext'
import { Suspense } from 'react'
import LoadingMain from './loading'
import { Sidebar } from '@/components'
import ym from 'react-yandex-metrika'

const montserrat = Montserrat({ subsets: ['latin', 'cyrillic'] })

export const metadata: Metadata = {
  title: 'Cargosil - автохимия',
  description: 'Автохимия Cargosil',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <head>
        <link rel="icon" href="./favicon.ico" sizes='any' />
        <link rel="preconnect" href="https://mc.yandex.ru" />
      </head>
      <body className={montserrat.className}>
        <ThemeProvider>
          <main className={styles.content}>
            <Header />
            <Sidebar/>
            <div className={styles.container}>
              <Suspense fallback={<LoadingMain/>}>
                {children}
              </Suspense>
            </div>
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
