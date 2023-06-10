// 'use client' is needed to import ThemeProvider, react client-side;

'use client';

import { ThemeProvider } from 'next-themes'; // for dark/light toggle

import Script from 'next/script';
import { Navbar, Footer } from '../components';
import './globals.css';

const RootLayout = ({ children }) => (
  <html lang="en" suppressHydrationWarning>
    <body>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem storageKey>
        <div className="dark:bg-black bg-white min-h-screen">
          <Navbar />
          { children }
          <Footer />
        </div>

        <Script src="https://kit.fontawesome.com/062856fb59.js" crossorigin="anonymous" />
      </ThemeProvider>
    </body>
  </html>

);

export default RootLayout;

