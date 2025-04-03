import Isotope from "isotope-layout";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

export default function PortfolioFilterOne({ portfolioStyle, portfolioClass }) {
    // Isotope
    const isotope = useRef();
    const [filterKey, setFilterKey] = useState("*");
    useEffect(() => {
        setTimeout(() => {
            isotope.current = new Isotope(".grid", {
                itemSelector: ".portfolio-item",
                percentPosition: true,
                masonry: {
                    columnWidth: ".portfolio-item",
                },
                animationOptions: {
                    duration: 750,
                    easing: "linear",
                    queue: false,
                },
            });
        }, 0);
    }, []);
    useEffect(() => {
        if (isotope.current) {
            filterKey === "*"
                ? isotope.current.arrange({ filter: `*` })
                : isotope.current.arrange({ filter: `.${filterKey}` });
        }
    }, [filterKey]);
    const handleFilterKeyChange = useCallback((key) => () => {
        setFilterKey(key);
    },
        []
    );

    const activeBtn = (value) => (value === filterKey ? "is-active" : "");

    return (
        <>
            <div className="portfolio-action">
                <div className="button-group filter-button-group">
                    <button className={activeBtn("*")} onClick={handleFilterKeyChange("*")}>
                        All
                    </button>
                    <button className={activeBtn("ecommerce")} onClick={handleFilterKeyChange("ecommerce")}>
                        Ecommerce
                    </button>
                    <button className={activeBtn("web-app")} onClick={handleFilterKeyChange("web-app")}>
                        Web App
                    </button>
                    <button className={activeBtn("mobile-apps")} onClick={handleFilterKeyChange("mobile-apps")}>
                        Mobile Apps
                    </button>
                    <button className={activeBtn("others")} onClick={handleFilterKeyChange("others")}>
                        Others
                    </button>
                </div>
            </div>

            <div className={`grid ${portfolioStyle ? portfolioStyle : ""}`}>
                <div className="grid-sizer" />
                <div className={`portfolio-item ${portfolioClass ? portfolioClass : ""} ecommerce`}>
                    <article className="portfolio">
                        <div className="entry-thumbnail">
                            <Link href="/" title="Ecommerce Project">
                                <img src="/assets/images/ecommerce.jpg" alt="Ecommerce Project" />
                            </Link>
                        </div>
                        <div className="entry-content">
                            <div className="entry-category">
                                <Link href="/" title="Ecommerce">Ecommerce</Link>
                            </div>
                            <div className="entry-title">
                                <h3><Link href="/" title="Ecommerce Project">Ecommerce Project</Link></h3>
                            </div>
                        </div>
                    </article>
                </div>
                <div className={`portfolio-item ${portfolioClass ? portfolioClass : ""} web-app`}>
                    <article className="portfolio">
                        <div className="entry-thumbnail">
                            <Link href="/" title="Web App Project">
                                <img src="/assets/images/web-app.jpg" alt="Web App Project" />
                            </Link>
                        </div>
                        <div className="entry-content">
                            <div className="entry-category">
                                <Link href="/" title="Web App">Web App</Link>
                            </div>
                            <div className="entry-title">
                                <h3><Link href="/" title="Web App Project">Web App Project</Link></h3>
                            </div>
                        </div>
                    </article>
                </div>
                <div className={`portfolio-item ${portfolioClass ? portfolioClass : ""} mobile-apps`}>
                    <article className="portfolio">
                        <div className="entry-thumbnail">
                            <Link href="/" title="Mobile App Project">
                                <img src="/assets/images/mobile-app.jpg" alt="Mobile App Project" />
                            </Link>
                        </div>
                        <div className="entry-content">
                            <div className="entry-category">
                                <Link href="/" title="Mobile Apps">Mobile Apps</Link>
                            </div>
                            <div className="entry-title">
                                <h3><Link href="/" title="Mobile App Project">Mobile App Project</Link></h3>
                            </div>
                        </div>
                    </article>
                </div>
                <div className={`portfolio-item ${portfolioClass ? portfolioClass : ""} others`}>
                    <article className="portfolio">
                        <div className="entry-thumbnail">
                            <Link href="/" title="Other Project">
                                <img src="/assets/images/others.jpg" alt="Other Project" />
                            </Link>
                        </div>
                        <div className="entry-content">
                            <div className="entry-category">
                                <Link href="/" title="Others">Others</Link>
                            </div>
                            <div className="entry-title">
                                <h3><Link href="/" title="Other Project">Other Project</Link></h3>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </>
    );
};
