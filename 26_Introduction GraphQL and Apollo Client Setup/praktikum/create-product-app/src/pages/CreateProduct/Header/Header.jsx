import { useState } from "react";
import logo from "../../../assets/logo.png";
import article from "../../../data/lang.js";

export default function Header() {
  const [langSwitch, setLangSwitch] = useState(false);

  function handleClick() {
    const randomNumber = Math.floor(Math.random() * 100 + 1);
    console.log(randomNumber);
  }

  function handleSwitch() {
    !langSwitch ? setLangSwitch(true) : setLangSwitch(false);
  }

  return (
    <div className="row mt-4 justify-content-center">
      <div className="col-lg-8 text-center">
        <img src={logo} alt="" width="71.53px" />
        <p className="fs-3 fw-bold my-2">
          {langSwitch ? article.title.id : article.title.en}
        </p>
        <div className="d-flex justify-content-center gap-4 align-items-center">
          <button
            className="btn btn-success btn-sm"
            onClick={() => handleClick()}
          >
            Generate Random Number
          </button>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckChecked"
              defaultChecked=""
              onChange={() => handleSwitch()}
            />
            <span>ID</span>
          </div>
        </div>

        <p>{langSwitch ? article.description.id : article.description.en}</p>
      </div>
    </div>
  );
}
