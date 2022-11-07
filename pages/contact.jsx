import Head from 'next/head';
import IndexLayout from "components/layouts/IndexLayout";
import { useRouter } from 'next/router';
import { Image } from 'react-bootstrap';

export default function ContactPage() {
  const router = useRouter();
  return (
    < >
      <Head>
        <title>Contact | Io Design And Home</title>
        <meta
          name="description"
          content="I2AROBOT 2"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id="contact" className="contact-us section">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="section-heading">
                <h2>Feel free to <em>Contact</em> us via the <span>HTML form</span></h2>
                <div id="map">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d484.6569287739167!2d100.47176262255218!3d13.642220229992173!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2a2cc5d820327%3A0xa613a036b2061a31!2z4LmE4Lit4LmC4LitIOC4lOC4teC5hOC4i-C4meC5jEDguYLguK7guKE!5e0!3m2!1sth!2sth!4v1665041908297!5m2!1sth!2sth"
                    width="100%" height="360px" frameBorder="0" style={{ border: "0" }} allowFullScreen=""></iframe>
                </div>
                <div className="info">
                  <span><i className="fa fa-phone"></i> <a href="#">010-020-0340<br />090-080-0760</a></span>
                  <span><i className="fa fa-envelope"></i> <a href="#">info@company.com<br />mail@company.com</a></span>
                </div>
              </div>
            </div>
            <div className="col-lg-5 align-self-center">
              <form id="contact" action="" method="get">
                <div className="row">
                  <div className="col-lg-12">
                    <fieldset>
                      <input type="name" name="name" id="name" placeholder="Name" autoComplete="on" required />
                    </fieldset>
                  </div>
                  <div className="col-lg-12">
                    <fieldset>
                      <input type="surname" name="surname" id="surname" placeholder="Surname" autoComplete="on" required />
                    </fieldset>
                  </div>
                  <div className="col-lg-12">
                    <fieldset>
                      <input type="text" name="email" id="email" pattern="[^ @]*@[^ @]*" placeholder="Your Email" required="" />
                    </fieldset>
                  </div>
                  <div className="col-lg-12">
                    <fieldset>
                      <input type="text" name="website" id="website" placeholder="Your Website URL" required="" />
                    </fieldset>
                  </div>
                  <div className="col-lg-12">
                    <fieldset>
                      <button type="submit" id="form-submit" className="main-button">Submit Request</button>
                    </fieldset>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="contact-dec">
          <Image src="images/contact-dec.png" alt="" />
        </div>
        <div className="contact-left-dec">
          <Image src="images/contact-left-dec.png" alt="" />
        </div>
      </div>
    </ >
  );
}
ContactPage.layout = IndexLayout;