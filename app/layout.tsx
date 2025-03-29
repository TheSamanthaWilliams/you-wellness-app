import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'YOU Wellness | Align Mind, Body, and Spirit',
  description: 'Personal wellness journey for mind, body, and spirit',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
