import { ROUTE } from "@/constants/route-constant";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <nav className="flex w-full justify-between">
        {/* 개발 편의성을 위한 임시 nav */}
        <Link href={ROUTE.HOME}>Home</Link>
        <Link href={ROUTE.PROJECT("chickmate")}>Project</Link>
        <Link href={ROUTE.ABOUT}>About</Link>
        <Link href={ROUTE.NOTE_POST}>Post</Link>
        <Link href={ROUTE.NOTES}>Notes</Link>
        <Link href={ROUTE.NOTE_DETAIL(1)}>Note Detail</Link>
      </nav>
    </header>
  );
};

export default Header;
