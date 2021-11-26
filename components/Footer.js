import React from "react";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Footer({ darkmode }) {
  return (
    <footer className={darkmode ? "dark" : "light"}>
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
          <LanguageSwitcher short={false} darkmode={darkmode ? darkmode : false} />
        </div>
      </div>
    </footer>
  );
}
