import about from "../assets/about.jpg";

export default function About() {
  return (
    <div className="about-us" id="about-us">
      <div className="row justify-content-center align-items-center g-5">
        <div className="col-9 d-flex flex-column justify-content-center align-items-center">
          <h1 className="mb-4">About Us</h1>
          <div
            style={{
              maxWidth: "500px",
            }}
          >
            <img
              src={about}
              alt="about-image"
              style={{ width: "100%" }}
              className="mb-4"
            />
          </div>
          <div className="text-justify">
            <p>
              At Plantify, we believe that planting trees is one of the most
              effective ways to combat climate change and create a healthier
              planet for ourselves and future generations. Our mission is to
              make it easy for everyone to get involved and make a difference.
            </p>
            <p>
              Our planting tree program is designed to be accessible and
              affordable for individuals and businesses alike. We work with
              trusted partners around the world to identify areas in need of
              reforestation and plant native trees that will have the greatest
              impact on local ecosystems.
            </p>
            <p>
              Plantify is committed to transparency and accountability. We
              provide regular updates on our planting projects and the impact
              they are having on the environment. We also encourage our
              community to share their own planting stories and experiences, so
              we can all learn from each other and inspire even more people to
              get involved.
            </p>
            <p>
              We know that planting trees is just one small part of a larger
              effort to protect our planet, and we believe that every little bit
              counts. By joining Plantify, you are taking a meaningful step
              towards a greener, more sustainable future. Thank you for your
              support!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
