import Isotope from "isotope-layout";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import imagesLoaded from "imagesloaded"; // Make sure this is installed

// Dynamically import all JSON files from the ./projects directory
const projectFiles = require.context("./projects", false, /\.json$/);
const uprojects = projectFiles.keys().map((file) => projectFiles(file));
const projects = Array.from(new Map(uprojects.map((item) => [item.title, item])).values());

export default function PortfolioFilterOne({ portfolioStyle, portfolioClass }) {
    const isotope = useRef();
    const gridRef = useRef();
    const [filterKey, setFilterKey] = useState("*");

    useEffect(() => {
        const images = imagesLoaded(gridRef.current);

        images.on("always", () => {
            isotope.current = new Isotope(gridRef.current, {
                itemSelector: ".portfolio-item",
                percentPosition: true,
                masonry: {
                    columnWidth: ".grid-sizer",
                },
            });
        });

        return () => isotope.current?.destroy();
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

            <div className={`grid ${portfolioStyle ? portfolioStyle : ""}`} ref={gridRef}>
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
                                            {project.description.length > 100
                                                ? `${project.description.slice(0, 100)}...`
                                                : project.description}
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
