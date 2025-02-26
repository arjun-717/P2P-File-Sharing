import React from 'react'
// import Footer from '../components/Footer'
import '../styles.css'
import { ThemeProvider } from '../components/ThemeProvider'
// import { ModeToggle } from '../components/ModeToggle'
import FilePizzaQueryClientProvider from '../components/QueryClientProvider'
import { Viewport } from 'next'
import { ViewTransitions } from 'next-view-transitions'
import WavesWrapper from '../components/background/WavesWrapper'



export const metadata = {
  title: 'P2P File Transfer',
  description: 'Peer-to-peer file transfers in your web browser.',
  charSet: 'utf-8',
  openGraph: {
    // url: 'https://file.pizza',
    title: 'P2P File Transfer',
    description: 'Peer-to-peer file transfers in your web browser.',
    // images: [{ url: 'https://file.pizza/images/fb.png' }],
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}): React.ReactElement {
  return (
    <ViewTransitions>


      <html lang="en" suppressHydrationWarning>
        <body>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <FilePizzaQueryClientProvider>
              <main>{children}</main>
              {/* <Footer /> */}
              {/* <ModeToggle /> */}
                        <WavesWrapper
        lineColor="rgba(250, 250, 250, 0.38)"
        backgroundColor="rgba(84, 84, 84, 0.2)"
        waveSpeedX={0.02}
        waveSpeedY={0.01}
        waveAmpX={40}
        waveAmpY={20}
        friction={0.9}
        tension={0.01}
        maxCursorMove={120}
        xGap={12}
        yGap={36}
        className="absolute top-0 left-0 w-full h-full -z-10"
      />
            </FilePizzaQueryClientProvider>
          </ThemeProvider>
           
        </body>
      </html>
    </ViewTransitions>
  )
}
