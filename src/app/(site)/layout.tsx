import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
import { ThemeProvider } from '../../../context/ThemeContext'
import { Suspense } from 'react'
import LoadingMain from './loading'
import { Sidebar } from '@/components'

const inter = Inter({ subsets: ['latin'] })

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
      <body className={inter.className}>
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
