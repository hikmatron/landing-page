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
                                    <div className="number"><span className="counter"><CounterUp count={35} time={1} /></span></div>
                                    <div className="title">Business Partners</div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6">
                                <div className="counter-box">
                                    <div className="number"><span className="counter"><CounterUp count={50} time={1} /></span></div>
                                    <div className="title">Distinct Projects</div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6">
                                <div className="counter-box">
                                    <div className="number"><span className="counter"><CounterUp count={5} time={1} /></span><span className="suffix">+</span></div>
                                    <div className="title">Global regions</div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}