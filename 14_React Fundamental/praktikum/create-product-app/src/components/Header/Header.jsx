import logo from "../../assets/bootstrap-logo.png";

export default function Header() {
  return (
    <div className="row mt-4 justify-content-center">
      <div className="col-lg-8 text-center">
        <img src={logo} alt="" width="71.53px" />
        <p className="fs-3 fw-bold my-2">Create Product</p>
        <p>
          Below is an example form built entirely with Bootstrap’s form
          controls. Each required form group has a validation state that can be
          triggered by attempting to submit the form without completing it.
        </p>
      </div>
    </div>
  );
}
