import React, { useState } from "react";
import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const { t, i18n } = useTranslation();

  const [navHidden, setNavHidden] = useState(true);

  return (
    <header className="py-8 bg-slate-900">
      <div className="px-4 container max-w-screen-xl mx-auto flex justify-between">
        <div className="flex items-center justify-start">
          <img src="/assets/logo.png" alt="Logo" className="h-24 w-auto" />
        </div>
        <div className={`${navHidden ? "hidden" : "flex"} flex-col md:flex-row items-center md:justify-end md:flex absolute md:static z-10 bg-slate-900 top-24 left-0 right-0 pb-12 md:pb-0 border-b border-slate-500 md:border-none`}>
          <nav className="mr-4 flex items-center justify-start flex-col md:flex-row">
            <Link href="/">
              <a className="ml-3 mb-3 md:mb-0 font-semibold text-slate-300 transition duration-200 hover:text-slate-400">{t("header_home")}</a>
            </Link>
            <Link href="/documentation">
              <a className="ml-3 mb-3 md:mb-0 font-semibold text-slate-300 transition duration-200 hover:text-slate-400">{t("header_documentation")}</a>
            </Link>
            <Link href="/support">
              <a className="ml-3 mb-3 md:mb-0 font-semibold text-slate-300 transition duration-200 hover:text-slate-400">{t("header_support")}</a>
            </Link>
          </nav>
          <Link href="/download">
            <a className="btn btn-s btn-primary mb-2 md:mb-0  ">{t("header_download")}</a>
          </Link>
          <LanguageSwitcher short={true} />
        </div>
        <div className="text-white text-3xl my-auto cursor-pointer md:hidden" onClick={() => setNavHidden(!navHidden)}>
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>
      <div></div>
    </header>
  );
}
