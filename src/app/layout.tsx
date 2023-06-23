import 'react-loading-skeleton/dist/skeleton.css';
import { GlobalProviders } from './global-providers';
import './globals.css';
import { Ubuntu } from 'next/font/google';
import { Header } from './header';

const ubuntu = Ubuntu({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'RocketShoes',
  description: 'Shoe store using App router and Redux Toolkit',
};

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en">
      <body className={ubuntu.className}>
        <main className="container">
          <GlobalProviders>
            <Header />
            {children}
          </GlobalProviders>
        </main>
      </body>
    </html>
  );
}
