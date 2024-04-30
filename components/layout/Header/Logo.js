import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <>
      <div className="logo">
        <Link href="/">
          <Image
            src="/assets/images/hikmatron-logo.svg"
            height={250}
            width={250}
            alt="Picture of the author"
          />
        </Link>
      </div>
    </>
  );
}
