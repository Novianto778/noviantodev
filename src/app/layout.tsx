import { Metadata } from 'next';
import './globals.css';
import localFont from 'next/font/local';
import 'react-18-image-lightbox/style.css';
import Navbar from '../components/layout/navbar/Navbar';

export const metadata: Metadata = {
    title: 'NoviantoDev',
    description: ` 
      NoviantoDev - Personal Website
      Information System Students and self-starting Front-End Developer with two years of experience. Passionate about JavaScript
      programming and Figma Design. Active in building projects and blogging, seeking an opportunity to leverage my Front-End skills.
  `,
    keywords: [
        'NoviantoDev',
        'Novianto',
        'NoviantoDev - Personal Website',
        'novianto.dev',
        'Front-End Developer',
        'Front-End',
        'Front-End Developer Novianto',
    ],
};

const greycliff = localFont({
    src: [
        {
            path: '../../public/fonts/GreycliffCF-Bold.ttf',
            weight: '700',
        },

        {
            path: '../../public/fonts/GreycliffCF-Regular.ttf',
            weight: '400',
        },
        {
            path: '../../public/fonts/GreycliffCF-Medium.ttf',
            weight: '500',
        },
        {
            path: '../../public/fonts/GreycliffCF-DemiBold.ttf',
            weight: '600',
        },
    ],
    variable: '--font-greycliff',
});

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`${greycliff.className} font-medium`}>
                <Navbar />
                {children}
            </body>
        </html>
    );
}
