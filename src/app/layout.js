import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Practice Next js',
  description: 'Generated by create next app',
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className='min-h-[calc(100vh-136px)]'>
          {children}

        </div>
        <Footer />

      </body>
    </html>
  )
}

export default RootLayout;