import { Inter } from '@next/font/google';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

import './globals.css';
import Navigation from './Navigation';

config.autoAddCss = false;
const inter = Inter();

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={inter.className}>
            <head />
            <body className="h-screen bg-right bg-cover bg-[url('/bg.svg')]">
                <Navigation />
                {children}
            </body>
        </html>
    );
}
