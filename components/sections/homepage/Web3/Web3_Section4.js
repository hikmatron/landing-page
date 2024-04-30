import Link from "next/link";
export default function Web3_Section4() {
  return (
    <>
      <section className="section spdt">
        <div className="container">
          <div className="heading align-center">
            <div className="heading-sub">Our products</div>
            <h2 className="heading-title w500 size-l">Ready for Delivery!</h2>
          </div>
          <div className="block-banner background-shade-2 br30">
            <div className="row flex-align-c">
              <div className="col-lg-6">
                <div className="lg-pdl30 lg-pdr30 lg-pdt30 pdl100 pdr60">
                  <div className="heading mb32">
                    <div className="heading-sub">E-Commerce</div>
                    <h2 className="heading-title w500">ShopSync Pro</h2>
                    <div className="heading-desc">
                      Integrated e-commerce and point-of-sale capabilities.
                      Seamlessly manage online sales and in-store transactions
                      from one platform.
                    </div>
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
              <div className="col-lg-6">
                <div className="align-center">
                  <img
                    className="wow animate__animated animate__zoomIn"
                    src="/assets/images/hw3-05.png"
                    alt="Image"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="block-banner background-shade-2 br30 mt32">
            <div className="row flex-align-c">
              <div className="col-lg-6">
                <div className="lg-pdl30 lg-pdr30 lg-pdt30 pdl100 pdr60">
                  <div className="heading mb32">
                    <div className="heading-sub">E-HEALTH</div>
                    <h2 className="heading-title w500">MediConnect</h2>
                    <div className="heading-desc">
                      Revolutionizes hospital operations by facilitating
                      seamless e-channeling for patients. From booking
                      appointments online to managing schedules and physician
                      availability.
                    </div>
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
              <div className="col-lg-6">
                <div className="align-center">
                  <img
                    className="wow animate__animated animate__zoomIn"
                    src="/assets/images/hw3-06.png"
                    alt="Image"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="block-banner background-shade-2 br30 mt32">
            <div className="row flex-align-c">
              <div className="col-lg-6">
                <div className="lg-pdl30 lg-pdr30 lg-pdt30 pdl100 pdr60">
                  <div className="heading mb32">
                    <div className="heading-sub">E-HEALTH</div>
                    <h2 className="heading-title w500">LabMaster Pro</h2>
                    <div className="heading-desc">
                      Comprehensive solution for effortlessly storing,
                      analyzing, and reporting medical lab data. From sample
                      tracking to generating detailed reports.
                    </div>
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
              <div className="col-lg-6">
                <div className="align-center">
                  <img
                    className="wow animate__animated animate__zoomIn"
                    src="/assets/images/hw3-07.png"
                    alt="Image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
