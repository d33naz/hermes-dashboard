import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Hermy HQ — Mission Control',
  description: 'Mission control dashboard for Hermes Agent — Austin Howell',
  icons: {
    icon: [
      {
        url: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='20' fill='%236c5ce7'/><text x='50' y='68' font-size='52' font-weight='bold' text-anchor='middle' fill='white' font-family='system-ui'>H</text></svg>",
        type: 'image/svg+xml',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
