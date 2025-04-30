import './globals.css';
import type { Metadata } from 'next';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';

// Remove dynamic font loading and use system fonts instead
const fontClass = 'font-sans'; // Using system font stack

export const metadata: Metadata = {
  title: 'TradeMates - Global Trade Excellence',
  description: 'Your trusted partner in international trade of premium fruits, vegetables, and juices',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={fontClass}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}