import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "Kalibrium — L'entraînement, guidé par la science",
  description: "Un écosystème qui transforme les connaissances scientifiques en programmes d'entraînement personnalisés.",
  openGraph: {
    title: "Kalibrium — L'entraînement, guidé par la science",
    description: "Un écosystème qui transforme les connaissances scientifiques en programmes d'entraînement personnalisés.",
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Kalibrium — L'entraînement, guidé par la science",
    description: "Un écosystème qui transforme les connaissances scientifiques en programmes d'entraînement personnalisés.",
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className="bg-white text-neutral-900 antialiased font-sans selection:bg-[#ccff00] selection:text-black">
        {children}
      </body>
    </html>
  );
}
