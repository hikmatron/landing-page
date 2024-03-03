import Layout from "@/components/layout/Layout";
import Link from "next/link";
export default function BlogCardSidebar() {
    return (
        <>
            <Layout pageTitle="Sidebar  Layout" pageTitleDesc="Share your stories and news with everyone.">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9">
                            <div className="blog-left">
                                <div className="blog-action top-action flex flex-align-c flex-content-sb">
                                    <div className="results">Showing 1-9 of 15 results</div>
                                    <div className="sort flex flex-align-c flex-content-sb">
                                        <div className="sort-item sort-category">
                                            <select name="category" id="category">
                                                <option value="all">All Categories</option>
                                                <option value="marketing">Marketing</option>
                                                <option value="creative">Creative</option>
                                                <option value="tutorials">Tutorials</option>
                                                <option value="ui_ux_design">Ui/Ux Design</option>
                                                <option value="resources">Resources</option>
                                                <option value="ebooks">Ebooks</option>
                                            </select>
                                        </div>
                                        <div className="sort-item sort-tag">
                                            <select name="tag" id="tag">
                                                <option value="all">All Tags</option>
                                                <option value="marketing">Design</option>
                                                <option value="creative">Saas</option>
                                                <option value="tutorials">Startup</option>
                                                <option value="ui_ux_design">Ui/Ux</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <article className="post format-video post-featured style-card">
                                    <div className="entry-thumbnail">
                                        <Link href="/" title="Top 6 Membership Sites for Beginners">
                                            <img src="/assets/images/post-01.jpg" alt="Top 6 Membership Sites for Beginners" />
                                        </Link>
                                    </div>
                                    <div className="entry-content">
                                        <div className="entry-category">
                                            <Link href="/" title="Marketing">Marketing</Link>
                                            <Link href="/" title="Creative">Creative</Link>
                                        </div>
                                        <div className="entry-title">
                                            <h3><Link href="/" title="Top 6 Membership Sites for Beginners">Top 6 Membership Sites for Beginners</Link><span>Featured</span></h3>
                                        </div>
                                    </div>
                                </article>
                                <article className="post format-gallery style-card">
                                    <div className="entry-thumbnail">
                                        <Link href="/" title="How to become a web designer in 2022">
                                            <img src="/assets/images/post-02.jpeg" alt="How to become a web designer in 2022" />
                                        </Link>
                                    </div>
                                    <div className="entry-content">
                                        <div className="entry-category">
                                            <Link href="/" title="Tutorials">Tutorials</Link>
                                            <Link href="/" title="Ui/Ux Design">Ui/Ux Design</Link>
                                        </div>
                                        <div className="entry-title">
                                            <h3><Link href="/" title="How to become a web designer in 2022">How to become a web designer in 2022</Link></h3>
                                        </div>
                                    </div>
                                </article>
                                <article className="post format-video style-card">
                                    <div className="entry-thumbnail">
                                        <Link href="/" title="20 best affiliate programs for online creators in 2022">
                                            <img src="/assets/images/post-03.jpeg" alt="20 best affiliate programs for online creators in 2022" />
                                        </Link>
                                    </div>
                                    <div className="entry-content">
                                        <div className="entry-category">
                                            <Link href="/" title="Resources">Resources</Link>
                                            <Link href="/" title="Tutorials">Tutorials</Link>
                                        </div>
                                        <div className="entry-title">
                                            <h3><Link href="/" title="20 best affiliate programs for online creators in 2022">20 best affiliate programs for online creators in 2022</Link></h3>
                                        </div>
                                    </div>
                                </article>
                                <article className="post format-quote style-card">
                                    <div className="entry-thumbnail">
                                        <Link href="/" title="Behind the website of a renowned athlete">
                                            <img src="/assets/images/post-04.jpeg" alt="Behind the website of a renowned athlete" />
                                        </Link>
                                    </div>
                                    <div className="entry-content">
                                        <div className="entry-category">
                                            <Link href="/" title="Resources">Resources</Link>
                                            <Link href="/" title="Ui/Ux Design">Ui/Ux Design</Link>
                                        </div>
                                        <div className="entry-title">
                                            <h3><Link href="/" title="Behind the website of a renowned athlete">Behind the website of a renowned athlete</Link></h3>
                                        </div>
                                    </div>
                                </article>
                                <article className="post format-link style-card">
                                    <div className="entry-thumbnail">
                                        <Link href="/" title="Give users choice: Design ecosystems, not paths">
                                            <img src="/assets/images/post-05.jpeg" alt="Give users choice: Design ecosystems, not paths" />
                                        </Link>
                                    </div>
                                    <div className="entry-content">
                                        <div className="entry-category">
                                            <Link href="/" title="Ebooks">Ebooks</Link>
                                            <Link href="/" title="Tutorials">Tutorials</Link>
                                        </div>
                                        <div className="entry-title">
                                            <h3><Link href="/" title="Give users choice: Design ecosystems, not paths">Give users choice: Design ecosystems, not paths</Link></h3>
                                        </div>
                                    </div>
                                </article>
                                <article className="post format-audio style-card">
                                    <div className="entry-thumbnail">
                                        <Link href="/" title="So you want to build a company merch store">
                                            <img src="/assets/images/post-06.jpeg" alt="So you want to build a company merch store" />
                                        </Link>
                                    </div>
                                    <div className="entry-content">
                                        <div className="entry-category">
                                            <Link href="/" title="Resources">Resources</Link>
                                            <Link href="/" title="Ui/Ux Design">Ui/Ux Design</Link>
                                        </div>
                                        <div className="entry-title">
                                            <h3><Link href="/" title="So you want to build a company merch store">So you want to build a company merch store</Link></h3>
                                        </div>
                                    </div>
                                </article>
                                <article className="post style-card">
                                    <div className="entry-thumbnail">
                                        <Link href="/" title="What does a UX designer do?">
                                            <img src="/assets/images/post-07.jpeg" alt="What does a UX designer do?" />
                                        </Link>
                                    </div>
                                    <div className="entry-content">
                                        <div className="entry-category">
                                            <Link href="/" title="Tutorials">Tutorials</Link>
                                            <Link href="/" title="Ui/Ux Design">Ui/Ux Design</Link>
                                        </div>
                                        <div className="entry-title">
                                            <h3><Link href="/" title="What does a UX designer do?">What does a UX designer do?</Link></h3>
                                        </div>
                                    </div>
                                </article>
                                <article className="post style-card">
                                    <div className="entry-thumbnail">
                                        <Link href="/" title="From design agency to the future of web design">
                                            <img src="/assets/images/post-08.jpg" alt="From design agency to the future of web design" />
                                        </Link>
                                    </div>
                                    <div className="entry-content">
                                        <div className="entry-category">
                                            <Link href="/" title="Resources">Resources</Link>
                                            <Link href="/" title="Ui/Ux Design">Ui/Ux Design</Link>
                                        </div>
                                        <div className="entry-title">
                                            <h3><Link href="/" title="From design agency to the future of web design">From design agency to the future of web design</Link></h3>
                                        </div>
                                    </div>
                                </article>
                                <article className="post style-card">
                                    <div className="entry-thumbnail">
                                        <Link href="/" title="The guide to responsive web design in 2022">
                                            <img src="/assets/images/post-09.jpeg" alt="The guide to responsive web design in 2022" />
                                        </Link>
                                    </div>
                                    <div className="entry-content">
                                        <div className="entry-category">
                                            <Link href="/" title="Resources">Resources</Link>
                                            <Link href="/" title="Tutorials">Tutorials</Link>
                                        </div>
                                        <div className="entry-title">
                                            <h3><Link href="/" title="The guide to responsive web design in 2022">The guide to responsive web design in 2022</Link></h3>
                                        </div>
                                    </div>
                                </article>
                            </div>
                            <div className="pagination align-center">
                                <div className="inner">
                                    <Link href="/" title="Prev" className="prev"><i className="las la-long-arrow-alt-left" />Prev</Link>
                                    <span>1</span>
                                    <Link href="/" title={2} className="number">2</Link>
                                    <Link href="/" title="Next" className="next">Next<i className="las la-long-arrow-alt-right" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="sidebar">
                                <aside className="widget widget-search">
                                    <form action="#">
                                        <input type="text" name="s" placeholder="Search on blog" />
                                        <button><i className="las la-search" /></button>
                                    </form>
                                </aside>
                                <aside className="widget widget-category">
                                    <h3 className="widget-title">Categories</h3>
                                    <div className="widget-content">
                                        <ul>
                                            <li><Link href="/" title="Ui/Ux Design">Ui/Ux Design <span>(3)</span></Link></li>
                                            <li><Link href="/" title="Digital Marketing">Digital Marketing <span>(5)</span></Link></li>
                                            <li><Link href="/" title="Insprint Testing">Insprint Testing <span>(7)</span></Link></li>
                                            <li><Link href="/" title="Illustrator">Illustrator <span>(12)</span></Link></li>
                                        </ul>
                                    </div>
                                </aside>
                                <aside className="widget widget-latest">
                                    <h3 className="widget-title">Latest Posts</h3>
                                    <div className="widget-content">
                                        <article className="post">
                                            <div className="entry-date">Sep 12, 2020</div>
                                            <div className="entry-title">
                                                <h4><Link href="/" title="How To Use Discord To Grow Your Following">How To Use Discord To Grow Your Following</Link></h4>
                                            </div>
                                        </article>
                                        <article className="post">
                                            <div className="entry-date">Sep 12, 2020</div>
                                            <div className="entry-title">
                                                <h4><Link href="/" title="Sneak peek into the current technology">Sneak peek into the current technology</Link></h4>
                                            </div>
                                        </article>
                                        <article className="post">
                                            <div className="entry-date">Sep 12, 2020</div>
                                            <div className="entry-title">
                                                <h4><Link href="/" title="Global UX Software Market Size, Status And Forecast 2025">Global UX Software Market Size, Status And Forecast 2025</Link></h4>
                                            </div>
                                        </article>
                                    </div>
                                </aside>
                                <aside className="widget widget-tag">
                                    <h3 className="widget-title">Tags</h3>
                                    <div className="widget-content">
                                        <ul>
                                            <li><Link href="/" title="ui/ux">ui/ux</Link></li>
                                            <li><Link href="/" title="digital marketing">digital marketing</Link></li>
                                            <li><Link href="/" title="sketch app">sketch app</Link></li>
                                            <li><Link href="/" title="figma">figma</Link></li>
                                            <li><Link href="/" title="web">web</Link></li>
                                        </ul>
                                    </div>
                                </aside>
                                <aside className="widget widget-about">
                                    <h3 className="widget-title">About Company</h3>
                                    <div className="widget-content">
                                        <p>Eripuit legimus ut corpora per vis in intellegam, ut ius esse tritani lucilius dolor dolorum... <Link href="/" title="Read More">Read More</Link></p>
                                    </div>
                                </aside>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>


        </>
    )
}