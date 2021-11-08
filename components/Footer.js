import React from "react";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-sm-3 col-6"></div>
          <div className="col-sm-3 col-6"></div>
          <div className="col-sm-3 col-6"></div>
          <div className="col-sm-3 col-6"></div>
        </div>
        <hr />
        <div>
          <img src="/assets/logo.svg" alt="Logo" />
          <LanguageSwitcher short={false} />
        </div>
      </div>
    </footer>
  );
}
