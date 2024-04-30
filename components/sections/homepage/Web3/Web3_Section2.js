import CounterUp from "@/components/elements/CounterUp";

export default function Web3_Section2() {
  return (
    <>
      <div className="section spdt">
        <div className="container">
          <div className="block-counter layout-06">
            <div className="row g-0">
              <div className="col-xl-3 col-lg-6">
                <div className="counter-box">
                  <div className="number">
                    <span className="counter">
                      <CounterUp count={10} time={1} />
                    </span>
                  </div>
                  <div className="title">Beloved Clients</div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6">
                <div className="counter-box">
                  <div className="number">
                    <span className="counter">
                      <CounterUp count={35} time={1} />
                    </span>
                  </div>
                  <div className="title">Done Projects</div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6">
                <div className="counter-box">
                  <div className="number">
                    <span className="counter">
                      <CounterUp count={3} time={1} />
                    </span>
                    {/* <span className="suffix">+</span> */}
                  </div>
                  <div className="title">Global Regions</div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6">
                <div className="counter-box">
                  <div className="number">
                    <span className="counter">
                      <CounterUp count={5} time={1} />
                    </span>
                  </div>
                  <div className="title">Short Years </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
