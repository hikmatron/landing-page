import Link from "next/link";
export default function Web3_Section3() {
  return (
    <>
      <section className="section spdt">
        <div className="container">
          <div className="heading align-center">
            <div className="heading-sub">Our services</div>
            <h2 className="heading-title w500 size-l">What We Do Best</h2>
          </div>
          <div className="block-image-box layout-04">
            <div className="image-box">
              <div className="thumbnail">
                <img src="/assets/images/hw3-02.png" alt="Thumbnail" />
              </div>
              <div className="content">
                <h4 className="title">Web Development</h4>
                <div className="desc">
                  Experience modern and optimized solutions tailored to your
                  needs.
                </div>
                <div className="button-wrap">
                  <Link
                    href="/contact-01"
                    className="button text"
                    title="Learn More"
                  >
                    Learn More{" "}
                    <i className="las la-long-arrow-alt-right color-navy" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="image-box">
              <div className="thumbnail">
                <img src="/assets/images/hw3-03.png" alt="Thumbnail" />
              </div>
              <div className="content">
                <h4 className="title">Automation Tools</h4>
                <div className="desc">
                  Achieve efficiency and convenience with just a few clicks.
                </div>
                <div className="button-wrap">
                  <Link
                    href="/contact-01"
                    className="button text"
                    title="Learn More"
                  >
                    Learn More{" "}
                    <i className="las la-long-arrow-alt-right color-navy" />
                  </Link>
                </div>
              </div>
            </div>
                       <Link
                    href="/portfolio/embedded-projects.js"
                    className="button text"
                    title="Learn More"
                  >
            <div className="image-box">
              <div className="thumbnail">
                <img src="/assets/images/hw3-04.png" alt="Thumbnail" />
              </div>
              <div className="content">
                <h4 className="title">Embedded Systems</h4>
                <div className="desc">
                  Experience robust and advanced solutions tailored for seamless
                  integration.
                </div>
                <div className="button-wrap">
                  <Link
                    href="/portfolio/embedded-projects.js"
                    className="button text"
                    title="Learn More"
                  >
                    Learn More{" "}
                    <i className="las la-long-arrow-alt-right color-navy" />
                  </Link>
                </div>
              </div>
            </div>
                      </Link>
          </div>
        </div>
      </section>
    </>
  );
}
