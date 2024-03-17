import { Inter } from 'next/font/google'
import CustomNavbar from '@/components/CustomNavbar'
import CustomFooter from '@/components/CustomFooter'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'MediGyaan',
  description: 'Find the information you need without a penny.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-brand-100 flex flex-col`}>
        <CustomNavbar/>
        {children}
        <CustomFooter/>
        </body>
    </html>
  )
}
