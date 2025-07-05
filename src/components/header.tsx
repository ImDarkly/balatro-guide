import Link from "next/link";
import BackgroundSwitch from "./background/background-switch";

const Header: React.FC = () => {
  return (
    <header className="flex h-20 w-full p-2 sticky top-0 justify-between items-center">
      <Link href="/" className="text-xl">
        Arlechino
      </Link>
      <BackgroundSwitch />
    </header>
  );
};

export default Header;
