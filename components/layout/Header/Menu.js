import Link from "next/link";

export default function Menu() {
  return (
    <>
      <div className="main-menu">
        <div className="menu-action">
          <span className="item menu-back">
            <i className="las la-arrow-left" />
          </span>
          <span className="item menu-close">
            <i className="las la-times" />
          </span>
        </div>

        <ul>
          <li className="is-mega-menu">
            <Link href="/portfolio/">
              Done!
            </Link>{" "}
          </li>
          <li className="is-mega-menu">
            <Link href="/">How?</Link>
          </li>
          <li className="is-mega-menu">
            <Link href="/">
              What Else? <span className="toggle-sub-menu"></span>
            </Link>
            <ul className="sub-menu">
              <li>
                <div className="mega-menu flex-content-c flex">
                  <div className="mega-menu-item">
                    <h6 className="mega-head">Home Demo I</h6>
                    <ul className="sub-menu">
                      <li>
                        <Link href="/home/home-app-showcase">App Showcase</Link>
                      </li>
                      <li>
                        <Link href="/home/home-shopify-app">Shopify App</Link>
                      </li>
                      <li>
                        <Link href="/home/home-design-studio">
                          Design Studio
                        </Link>
                      </li>
                      <li>
                        <Link href="/home/home-music-app">Music App</Link>
                      </li>
                      <li>
                        <Link href="/home/home-hr-maganement">HR Software</Link>
                      </li>
                      <li>
                        <Link href="/home/home-saas">Saas Subscription</Link>
                      </li>
                      <li>
                        <Link href="/home/home-nft">Home NFT</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="mega-menu-item">
                    <h6 className="mega-head">Home Demo II</h6>
                    <ul className="sub-menu">
                      <li>
                        <Link href="/home/home-coworking">Coworking</Link>
                      </li>
                      <li>
                        <Link href="/home/home-video">Video Conferencing</Link>
                      </li>
                      <li>
                        <Link href="/home/home-design-portfolio">
                          Designer Portfolio
                        </Link>
                      </li>
                      <li>
                        <Link href="/home/home-dating">Dating App</Link>
                      </li>
                      <li>
                        <Link href="/home/home-crypto">Crypto Wallet</Link>
                      </li>
                      <li>
                        <Link href="/home/home-email">Email Tool</Link>
                      </li>
                      <li>
                        <Link href="/home/home-web3">Home Web3</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="mega-menu-item">
                    <h6 className="mega-head">Home Demo III</h6>
                    <ul className="sub-menu">
                      <li>
                        <Link href="/home/home-fintech">Fintech</Link>
                      </li>
                      <li>
                        <Link href="/home/home-ecommerce-platform">
                          Ecommerce Platform
                        </Link>
                      </li>
                      <li>
                        <Link href="/home/home-seo">SEO Agency</Link>
                      </li>
                      <li>
                        <Link href="/home/home-pet">Pet App</Link>
                      </li>
                      <li>
                        <Link href="/home/home-startup">Startup</Link>
                      </li>
                      <li>
                        <Link href="/home/home-chat-service">
                          Chat Tool Service
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="mega-menu-item">
                    <h6 className="mega-head">Home Demo IV</h6>
                    <ul className="sub-menu">
                      <li>
                        <Link href="/home/home-ico">Crypto ICO</Link>
                      </li>
                      <li>
                        <Link href="/home/home-vr">Seller Page - VR</Link>
                      </li>
                      <li>
                        <Link href="/home/home-ecommerce-agency">
                          Ecommerce Agency
                        </Link>
                      </li>
                      <li>
                        <Link href="/home/home-book">Seller Page - Book</Link>
                      </li>
                      <li>
                        <Link href="/home/home-fitness">Fitness App</Link>
                      </li>
                      <li>
                        <Link href="/home/home-webinar">Webinar</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </li>
          {/* <li className="is-normal-menu">
            <Link href="/">
              Shop <span className="toggle-sub-menu"></span>
            </Link>
            <ul className="sub-menu">
              <li>
                <Link href="/shop/shop-fullwidth">Shop Layout</Link>
                <ul className="sub-menu">
                  <li>
                    <Link href="/shop/shop-fullwidth">Shop Fullwidth</Link>
                  </li>
                  <li>
                    <Link href="/shop/shop-sidebar">Shop Sidebar</Link>
                  </li>
                  <li>
                    <Link href="/shop/shop-detail">Shop Detail</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/shop/shop-fullwidth">Other</Link>
                <ul className="sub-menu">
                  <li>
                    <Link href="/shop/shop-cart">Cart</Link>
                  </li>
                  <li>
                    <Link href="/shop/shop-checkout">Checkout</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </li> */}
        </ul>
      </div>
    </>
  );
}
