import Link from "next/link";
export default function Web3_Section7() {
  return (
    <>
      <section className="section background-navy pt40 pb40">
        <div className="container">
          <div className="row flex-align-c">
            <div className="col-lg-6">
              <div className="heading heading-alway-white mb32">
                <div className="heading-sub">Work with us</div>
                <h2 className="heading-title w500 size-xl">
                  It's about the impact we make together
                </h2>
                <div className="heading-desc">
                  In our world, it's not about the size or cost of the project.
                  From the smallest spark to the grandest endeavor, each one
                  matters deeply to us.
                </div>
              </div>
              <div className="button-wrap">
                <Link
                  href="/contact-01"
                  className="button borderline-white"
                  title="Contact Us"
                >
                  Contact Us <i className="las la-long-arrow-alt-right" />
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="lg-mgt32">
                <img src="/assets/images/product-delivery.png" alt="Image" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
