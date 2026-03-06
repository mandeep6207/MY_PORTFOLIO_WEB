import { Inter, Poppins } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://mandeepkumar.dev'),
  title: 'Mandeep Kumar | AI/ML Engineer & Data Scientist',
  description: 'Portfolio of Mandeep Kumar — AI/ML Engineer, Data Scientist, Open Source Leader & Tech Speaker. B.Tech CSE (Data Science) student with expertise in machine learning, deep learning, and data analytics.',
  keywords: ['Mandeep Kumar', 'AI Engineer', 'ML Engineer', 'Data Scientist', 'Portfolio', 'Open Source', 'B.Tech', 'Data Science', 'Machine Learning', 'Deep Learning'],
  authors: [{ name: 'Mandeep Kumar' }],
  creator: 'Mandeep Kumar',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mandeepkumar.dev',
    siteName: 'Mandeep Kumar Portfolio',
    title: 'Mandeep Kumar | AI/ML Engineer & Data Scientist',
    description: 'AI/ML Engineer and Data Science enthusiast with expertise in machine learning, deep learning, and open source leadership.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Mandeep Kumar - AI/ML Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mandeep Kumar | AI/ML Engineer & Data Scientist',
    description: 'AI/ML Engineer and Data Science enthusiast with expertise in machine learning, deep learning, and open source leadership.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Mandeep Kumar',
    url: 'https://mandeepkumar.dev',
    jobTitle: 'AI/ML Engineer & Data Scientist',
    description: 'B.Tech CSE (Data Science) student with expertise in AI/ML, deep learning, and data analytics.',
    sameAs: [
      'https://linkedin.com/in/mandeepkumar',
      'https://github.com/mandeepkumar',
    ],
    knowsAbout: ['Machine Learning', 'Deep Learning', 'Data Science', 'Python', 'AI'],
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'RCET Bhilai',
    },
  };

  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
