import Image from 'next/image';
import CartDropdown from '../Cart/CartDropdown';

function Navbar({ className }: { className?: string }) {
  return (
    <nav
      className={`relative flex w-full items-center justify-between border-b-4 border-gray-lightest bg-white py-5 ${className}`}
    >
      <Image src="/images/brand/bejamas-logo.svg" width={159} height={26} alt="Bejamas Logo" />
      <CartDropdown />
    </nav>
  );
}

export default Navbar;
