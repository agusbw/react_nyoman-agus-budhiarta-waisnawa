import "./Home.css";
import heroImg from "../../assets/hero-img.png";
import ProductsList from "./Card/ProductsList";

export default function Home() {
  return (
    <>
      <div>
        <section id="hero">
          <div id="jumbotron">
            <div className="content">
              <h1>Better Solutions For Your Business</h1>
              <p>
                We are team of talented designers making websites with Bootstrap
              </p>
              <div className="action-button">
                <a href="./createAccount.html" className="primary-button">
                  Get Started
                </a>
                <a href="">Watch Video</a>
              </div>
            </div>
            <div className="image">
              <img src={heroImg} alt="hero image" />
            </div>
          </div>
          <ProductsList />
          <div id="newsletter">
            <p id="newsletter-title">Join Our Newsletter</p>
            <p>
              Tamen quem nulla quae legam multos aute sint culpa legam noster
              magna
            </p>
            <div className="input-group">
              <input type="text" />
              <a href="./createAccount.html" className="primary-button">
                Subscribe
              </a>
            </div>
          </div>
          <div id="link">
            <div className="profile link-items">
              <p className="link-title">ARSHA</p>
              <p>A108 Adam Street New York, NY 535022 United States</p>
              <p>
                <strong>Phone: </strong> +1 5589 55488 55
              </p>
              <p>
                <strong>Email:</strong> info@example.com
              </p>
            </div>
            <div className="useful-links link-items">
              <p className="link-title">Usefull Links</p>
              <ul>
                <li>
                  <a href="">Home</a>
                </li>
                <li>
                  <a href="">About Us</a>
                </li>
                <li>
                  <a href="">Services</a>
                </li>
                <li>
                  <a href="">Terms of service</a>
                </li>
                <li>
                  <a href="">Privacy policy</a>
                </li>
              </ul>
            </div>
            <div className="our-services link-items">
              <p className="link-title">Usefull Links</p>
              <ul>
                <li>
                  <a href="">Web Design</a>
                </li>
                <li>
                  <a href="">Web Development</a>
                </li>
                <li>
                  <a href="">Product Management</a>
                </li>
                <li>
                  <a href="">Marketing</a>
                </li>
                <li>
                  <a href="">Graphic Design</a>
                </li>
              </ul>
            </div>
            <div className="social link-items">
              <p className="link-title">Our Social Networks</p>
              <p>
                Cras fermentum odio eu feugiat lide par naso tierra videa magna
                derita valies
              </p>
              <div className="circles">
                <div className="circle" />
                <div className="circle" />
                <div className="circle" />
                <div className="circle" />
                <div className="circle" />
              </div>
            </div>
          </div>
        </section>
        <section id="footer">
          <p>
            © Copyright <strong>Arsha</strong>. All Rights Reserved
          </p>
          <p>
            Designed by <span>BootstrapMade</span>
          </p>
        </section>
      </div>
    </>
  );
}
