import React from "react";
import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { t, i18n } = useTranslation();

  return (
    <header>
      <div className="container">
        <div className="logo-nav">
          <img src="/assets/logo.svg" alt="Logo" />
          <nav>
            <ul>
              <li>
                <Link href="/">
                  <a>{t("header_home")}</a>
                </Link>
              </li>
              <li>
                <Link href="/documentation">
                  <a>{t("header_documentation")}</a>
                </Link>
              </li>
              <li>
                <Link href="/support">
                  <a>{t("header_support")}</a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="cta-lang">
          <Link href="/download">
            <a className="btn btn-s btn-primary">{t("header_download")}</a>
          </Link>
          <LanguageSwitcher short={true} />
        </div>
      </div>
    </header>
  );
}
