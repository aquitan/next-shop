import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <div className={styles.wrapper}>
          <main className={styles.content}>
            <Header />
            <div className={styles.container}>
              {children}
            </div>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
