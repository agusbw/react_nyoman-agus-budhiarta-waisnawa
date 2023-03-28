export default function Footer() {
  return (
    <div className="links" id="link">
      <div className="row g-5">
        <div className="col-lg-5">
          <p className="fw-bold fs-5">
            Join our mission to create a healthier planet by planting trees with
            Plantify today!
          </p>
          <form action="">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                id="footerInput"
                placeholder="Email Address"
                required=""
              />
              <button type="submit" className="btn button-primary">
                Sign me up
              </button>
            </div>
          </form>
        </div>
        <div className="col-lg-4">
          <p className="fw-bold fs-5">Plantify Community Member</p>
          <p>
            Our Plantify community members are at the heart of our mission to
            combat climate change and create a healthier planet. By planting
            trees with us, they are taking action to make a positive impact on
            the environment and their communities.
          </p>
          <a href="#">More about our community..</a>
        </div>
        <div className="col-lg-3">
          <p className="fw-bold fs-5">Come Say Hello!</p>
          <p>Jalan Villa Gading 1, No 9, Baktiseraga, Singaraja, Bali</p>
          <p className="fw-bold text-success">(+62)81353270169</p>
          <p className="fw-bold fs-5">Socials</p>
          <div className="d-flex gap-3">
            <a href="https://www.facebook.com/agus.budhiarta/" target="_blank">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="https://www.instagram.com/agus_bw/" target="_blank">
              <i className="fab fa-instagram" />
            </a>
            <a href="https://www.linkedin.com/in/agusbw/" target="_blank">
              <i className="fab fa-linkedin-in" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
