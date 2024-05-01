import Link from "next/link";
import Logo from "../Header/Logo";

const logoPath = "assets/images/hikmatron-logo.svg";

export default function Footer() {
  return (
    <>
      <footer id="footer" className="footer">
        <div className="footer-top">
          <div className="container">
            <div className="inner">
              <div className="row">
                <div className="col-lg-4">
                  <div className="footer-item footer-about">
                    <div className="logo">
                      <Logo />
                    </div>
                    <p>
                      A small group of people who wants to give some love to the
                      world!
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="footer-item footer-menu">
                    <h6>Hikmatron Systems</h6>
                    <ul>
                      <li>
                        <Link href="/about-company" title="About us">
                          Who?
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog-simple-grid" title="Blog">
                          To Read 🤓
                        </Link>
                      </li>
                      <li>
                        <Link href="/careers" title="Careers">
                          +1 To Team
                        </Link>
                      </li>
                      <li>
                        <Link href="/contact-01" title="Contact">
                          Let's Talk
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="footer-item footer-menu">
                    <h6>Social Media</h6>
                    <ul>
                      <li>
                        <Link href="https://www.facebook.com" title="Facebook">
                          Facebook
                        </Link>
                      </li>
                      <li>
                        <Link href="https://www.twitter.com" title="Twitter">
                          X
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="https://www.instagram.com"
                          title="Instagram"
                        >
                          Instagram
                        </Link>
                      </li>
                      <li>
                        <Link href="https://www.linkedin.com" title="Linkedin">
                          Linkedin
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="inner flex flex-content-sb flex-align-c">
              <div className="copyright">
                © 2024 Hikmatron Systems. All rights reserved
              </div>
              <div className="menu">
                <ul>
                  <li>
                    <Link href="/privacy-policy" title="Terms">
                      Terms
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy-policy" title="Privacy Policy">
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
