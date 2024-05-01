import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <div className="logo">
      <a className="logo-link">
        <Link href="/">
          <div
            className="logo-container"
            style={{ display: "flex", alignItems: "center" }}
          >
            <div className="logo-image">
              <Image
                src="/assets/images/hikmatron-icon-logo.svg"
                height={50}
                width={50}
                alt="Logo of Hikmatron"
              />
            </div>
            <div className="logo-text">
              <h2 style={{ fontWeight: 700 }}>HIKMATRON</h2>
            </div>
          </div>
        </Link>
      </a>
    </div>
  );
}
