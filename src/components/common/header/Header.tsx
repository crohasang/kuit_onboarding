import Image from 'next/image';
import Link from 'next/link';

import logoImage from '../../../../public/image/kuit_logo.png';

const Header = () => {
  return (
    <header className="absolute top-0 left-0 z-10 box-border w-full h-[60px] px-[15px] flex items-center justify-between bg-transparent">
      <Link href="/">
        <Image
          src={logoImage}
          alt="KUIT"
          width={30}
          height={30}
          className="cursor-pointer"
          priority
        />
      </Link>
    </header>
  );
};

export default Header;
