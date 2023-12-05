import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import '@fontsource-variable/unbounded';
import '@fontsource-variable/inter';
import { motion } from "framer-motion"
import './globals.css'
import { WebThemeProvider } from './themeprovider';
import '@fortawesome/fontawesome-svg-core/styles.css'

import Footer from "./footer"; 

export const metadata: Metadata = {
  title: 'Pissandshittium',
  description: 'Browser that does not care about you.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className='font-text bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text'>
        
      <WebThemeProvider>{children}
      
      <Footer></Footer>
      </WebThemeProvider>
        </body>
        
    </html>      

  )
}