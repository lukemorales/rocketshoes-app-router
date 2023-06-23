import logo from '../assets/logo.svg';
import Link from 'next/link';
import { HeaderCart } from './header-cart';
import Image from 'next/image';

export const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center py-6">
      <Link href="/">
        <figure>
          <Image
            className="w-full max-w-[274px]"
            src={logo}
            alt="RocketShoes"
          />
        </figure>
      </Link>

      <HeaderCart />
    </header>
  );
};
