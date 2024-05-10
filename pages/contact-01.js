import Layout from "@/components/layout/Layout";
import Link from "next/link";
export default function ContactOne() {
    return (
        <>
            <Layout pageTitleDesc="We’re happy to talk to you." pageTitle="Get in Touch">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="contact-content">
                                <div className="heading">
                                    <h2 className="heading-title">Let’s talk.</h2>
                                    <div className="heading-desc">
        Having something on your mind? Talk to us!
        </div>
                                </div>
                                <div className="contact-boxs">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="contact-box">
                                                <Link href="/tel:+94 76 354 56 51" title="Call us" className="background-navy">Call us<span>+94 76 354 56 51</span></Link>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="contact-box">
                                                <Link href="/mailto:hikmatron@gmail.com" title="Email us" className="background-dark">Email us<span>hikmatron@gmail.com</span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
  </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="contact-form layout-01">
                                <div className="heading">
                                    <h2 className="heading-title">Send us a message.</h2>
                                    <div className="heading-desc">Feel free to contact us with questions, potential partnerships, or media inquiries.</div>
                                </div>
                                <form action="#">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="field-input">
                                                <label htmlFor="first_name">First name*</label>
                                                <input type="text" name="first_name" id="first_name" placeholder="Enter your first name" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="field-input">
                                                <label htmlFor="last_name">Last name*</label>
                                                <input type="text" name="last_name" id="last_name" placeholder="Enter your last name" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="field-input">
                                                <label htmlFor="work_email">Work email*</label>
                                                <input type="text" name="work_email" id="work_email" placeholder="Enter your email" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="field-input">
                                                <label htmlFor="phone_number">Phone number</label>
                                                <input type="text" name="phone_number" id="phone_number" placeholder="Enter your phone number" />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="field-input field-textarea">
                                                <label htmlFor="message">Message*</label>
                                                <textarea name="message" id="message" cols={30} rows={10} placeholder="Write your message" defaultValue={""} />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="field-submit">
                                                <input type="submit" defaultValue="Send Message" name="submit" />
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>

        </>
    )
}
