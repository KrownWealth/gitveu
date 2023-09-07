import './globals.css'
import Meta from '@/components/Meta'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Meta />
      <body>{children}</body>
    </html>
  )
}
