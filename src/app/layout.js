import Header from '@/components/Header'
import './globals.css'

export const metadata = {
  title: 'IMDb Clone',
  description: 'This is the IMDb CLONE',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Header */}
        <Header />
        {/* Navbar */}
        {/* SearchBox */}
        {children}
      </body>
    </html>
  )
}
