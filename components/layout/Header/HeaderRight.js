import Link from "next/link";

export default function HeaderRight() {
  return (
    <>
      <div className="header-right flex flex-align-c flex-content-e">
        <div className="buttons">
          <Link href="/contact-01" className="button fullfield">
            <i className="las la-headset" />
            <span>Let's Talk</span>
          </Link>
        </div>
      </div>
    </>
  );
}
