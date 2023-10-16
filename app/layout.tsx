import type { Metadata } from 'next'
import { Nunito_Sans } from 'next/font/google'
import './globals.css'

const font = Nunito_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Generic AI',
  description: 'Your GenAI tool',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  )
}
