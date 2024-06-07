import Link from "next/link";
export default function Embedded_Portfolio_Banner () {
    return (
        <>
            <section className="section background-full opt120 spdb relative" style={{ backgroundImage: 'url(/assets/images/hdp-01.png)' }}>
                <div className="container">
                    <div className="row flex-align-c">
                        <div className="col-lg-6">
                            <div className="spdtb pdr50">
                                <div className="heading heading-alway-white mb32">
                                    <div className="heading-sub">We're Hikmatron</div>
                                    <h2 className="heading-title size-xl w400">A team of seasoned engineers with proven experience in developing top-notch embedded systems for clients all over the world.</h2>
                                </div>
                                <div className="button-wrap">
                                    <Link href="/contact-01" className="button fullfield" title="Contact Us">Talk to Us!</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6" />
                    </div>
                    <ul className="socials socials-line color-white">
                        <li><Link href="/" title="Facebook">Facebook</Link></li>
                        <li><Link href="/" title="Behance">Behance</Link></li>
                        <li><Link href="/" title="Twitter">Twitter</Link></li>
                    </ul>
                </div>
            </section>


        </>
    )
}
