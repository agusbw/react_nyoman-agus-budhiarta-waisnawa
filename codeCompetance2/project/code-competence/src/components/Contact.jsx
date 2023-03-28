import { useState, useRef } from "react";

export default function Contact() {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const firstName = firstNameRef.current.value;
    const lastName = lastNameRef.current.value;
    const email = emailRef.current.value;
    const message = messageRef.current.value;
    alert(JSON.stringify({ firstName, lastName, email, message }, null, 2));
  };

  return (
    <div className="contact-us" id="contact">
      <div className="row justify-content-center g-5">
        <div className="col-lg-7">
          <h2>Contact us</h2>
          <p className="pt-3">
            We value your feedback and are committed to providing excellent
            customer service. If you have any questions or comments about our
            tree planting program, please don't hesitate to contact us. Our team
            is always available to assist you and we strive to respond to all
            inquiries within 24 hours. You can reach us by filling out the
            contact form!.
          </p>
        </div>
        <div className="col-lg-5">
          <form className="row g-3" id="form" onSubmit={handleSubmit}>
            <div className="col-md-6">
              <label htmlFor="firstname" className="form-label">
                First Name*
              </label>
              <input
                type="text"
                className="form-control"
                id="firstname"
                required
                ref={firstNameRef}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="lastname" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                className="form-control"
                id="lastname"
                ref={lastNameRef}
              />
            </div>
            <div className="col-md-12">
              <label htmlFor="email" className="form-label">
                Email*
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                required
                ref={emailRef}
              />
            </div>
            <div className="col-md-12">
              <label htmlFor="message" className="form-label">
                What can we help you with?
              </label>
              <textarea
                className="form-control"
                id="message"
                rows={3}
                defaultValue={""}
                ref={messageRef}
              />
            </div>
            <div className="col-12 mt-3">
              <button type="submit" className="btn button-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
