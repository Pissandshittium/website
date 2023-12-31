import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import '@fontsource-variable/unbounded';
import '@fontsource-variable/inter';
import { motion } from "framer-motion"
import './globals.css'
import { WebThemeProvider } from './themeprovider';
import '@fortawesome/fontawesome-svg-core/styles.css'
import ThemeSwitcher from './themechanger';
import Footer from "./footer"; 
import NagBar from './nagbar';
import NagbarButton from './NagbarButton';

export const metadata: Metadata = {
  metadataBase: new URL('https://pissandshittium.org'),
  title: 'Pissandshittium',
  description: 'Browser that does not care about you.',
  openGraph:{
    images:[
      {
        url:'/pissandshittium.png',
        width:128,
        height:128,
        alt:'Pissandshittium Logo'
      }
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className='font-text transition-colors bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text'>
        
      <WebThemeProvider>
      <ThemeSwitcher></ThemeSwitcher>
      <NagBar message={<><b>Warning!</b> The latest build of Pissandshittium is somewhat broken. <NagbarButton href="/broken">Tell me more</NagbarButton></>}></NagBar>
        {children}
      
      <Footer></Footer>
      </WebThemeProvider>
        </body>
        
    </html>      

  )
}
