import { Inter } from '@next/font/google';

import './globals.css';

const inter = Inter();

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={inter.className}>
            <head />
            <body>{children}</body>
        </html>
    );
}
