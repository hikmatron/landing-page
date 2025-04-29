import Isotope from "isotope-layout";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
// Dynamically import all JSON files from the ./projects directory
const projectFiles = require.context("./projects", false, /\.json$/);
const projects = projectFiles.keys().map((file) => projectFiles(file));

export default function PortfolioFilterOne({ portfolioStyle, portfolioClass }) {
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
                ? isotope.current.arrange({ filter: "*" })
                : isotope.current.arrange({ filter: `.${filterKey}` });
        }
    }, [filterKey]);

    const handleFilterKeyChange = useCallback((key) => () => {
        setFilterKey(key);
    }, []);

    const activeBtn = (value) => (value === filterKey ? "is-active" : "");

    return (
        <>
            <div className="portfolio-action">
                <div className="button-group filter-button-group">
                    <button className={activeBtn("*")} onClick={handleFilterKeyChange("*")}>
                        All <span>({projects.length})</span>
                    </button>
                    <button className={activeBtn("webapps")} onClick={handleFilterKeyChange("webapps")}>
                        Web Apps <span>(4)</span>
                    </button>
                    <button className={activeBtn("mobileapps")} onClick={handleFilterKeyChange("mobileapps")}>
                        Mobile Apps <span>(2)</span>
                    </button>
                    <button className={activeBtn("iot")} onClick={handleFilterKeyChange("iot")}>
                        IoT <span>(4)</span>
                    </button>
                </div>
            </div>

            <div className={`grid ${portfolioStyle ? portfolioStyle : ""}`}>
                <div className="grid-sizer" />
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className={`portfolio-item ${portfolioClass ? portfolioClass : ""} ${project.category.toLowerCase()}`}
                    >
                        <article className="portfolio">
                            <div className="entry-thumbnail">
                                <Link href={project.link} title={project.title}>
                                    <img src={project.image} alt={project.alt} />
                                </Link>
                            </div>
                            <div className="entry-content">
                                <div className="entry-category">
                                    <Link href={project.link} title={project.category}>
                                        {project.category}
                                    </Link>
                                </div>
                                <div className="entry-title">
                                    <h3>
                                        <Link href={project.link} title={project.title}>
                                            {project.description}
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </article>
                    </div>
                ))}
            </div>
        </>
    );
}
