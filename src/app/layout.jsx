import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import './globals.css'
import Providers from './Providers'

export const metadata = {
  title: 'IMDb Clone',
  description: 'This is the IMDb CLONE',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {/* Header */}
          <Header />
          {/* Navbar */}
          <Navbar/>
          {/* SearchBox */}
          {children}
        </Providers>
      </body>
    </html>
  )
}
