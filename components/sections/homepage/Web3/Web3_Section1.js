import Link from "next/link";
import { useEffect } from "react";

export default function Web3_Section1() {
  useEffect(() => {
    const interval = setInterval(() => {
      const blinkElement = document.getElementById("blink");
      if (blinkElement) {
        blinkElement.style.visibility =
          blinkElement.style.visibility === "hidden" ? "visible" : "hidden";
      }
    }, 750); // Adjust blinking speed here (in milliseconds)
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="section background-grey has-shape opt120 spdb overflow-hidden">
        <div className="shape shape-navy-2" />
        <div className="shape shape-navy" />
        <div className="container">
          <div className="row flex-align-c">
            <div className="col-lg-6">
              <div className="heading mb32">
                <div className="heading-sub size-xl no-uppercase">
                  Heartfelt Solutions,
                </div>
                <h2 className="heading-title size-xxxxl color-navy-2">
                  Every Line of Code
                  <span id="blink" style={{ textDecoration: "none" }}>
                    |
                  </span>
                </h2>
                <div className="heading-desc">Buy Humans For Humans</div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="images lg-mt32 layout-10">
                <div className="inner">
                  <img
                    className="img01 animate__jump"
                    src="/assets/images/programmer-image.png"
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
