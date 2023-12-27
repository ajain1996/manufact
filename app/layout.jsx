import { Nunito } from 'next/font/google'
import './globals.css'

export const metadata = {
  title: 'Manufact',
  description: 'Manufact',
}

const font = Nunito({
  subsets: ['latin'],
});

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        {children}
      </body>
    </html>
  )
}
