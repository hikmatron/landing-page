import Link from "next/link";

export default function DufasBurger({ portfolioClass }) {
    return (
        <div className={`portfolio-item grid-item--width2 ${portfolioClass ? portfolioClass : ""} branding`}>
            <article className="portfolio">
                <div className="entry-thumbnail">
                    <Link href="/" title="Hikmatron.com">
                        <img src="/assets/images/portfolio-01.jpg" alt="Hikmatron.com" />
                    </Link>
                </div>
                <div className="entry-content">
                    <div className="entry-category">
                        <Link href="/" title="Branding">Branding</Link>
                    </div>
                    <div className="entry-title">
                        <h3>
                            <Link href="/" title="Dufa’s Burger">Dufa’s Burger 01</Link>
                        </h3>
                    </div>
                </div>
            </article>
        </div>
    );
}
