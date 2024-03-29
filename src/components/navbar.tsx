import Image from "next/image";
import Link from "next/link";
import Container from "./ui/container";

export default function Navbar() {
  return (
    <Container className="sticky top-0 z-20 border-b bg-white">
      <nav className="flex items-center justify-between py-2">
        <Link className="flex items-center" href="/">
          <Image
            src="/runiu.webp"
            alt="logo"
            width={48}
            height={48}
            className="mr-1"
          />
          <div className="">
            <h1 className="text-lg font-bold">Runiu</h1>
            <p className="text-xs font-light">Canadian Immigration Stats</p>
          </div>
        </Link>
        <Link href="https://github.com/Crayon-ShinChan/runiu" target="_blank">
          <Image src="/github-mark.svg" alt="GitHub" width={24} height={24} />
        </Link>
      </nav>
    </Container>
  );
}
