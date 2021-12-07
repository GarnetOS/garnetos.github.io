import React from "react";
import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { t, i18n } = useTranslation();

  return (
    <header className="py-8 bg-gray-900">
      <div className="container max-w-screen-xl mx-auto flex justify-between">
        <div className="flex items-center justify-start">
          <img src="/assets/logo.svg" alt="Logo" className="h-12" />
          <nav className="ml-2 flex items-center justify-start">
            <Link href="/">
              <a className="ml-3 font-semibold text-gray-300 transition duration-200 hover:text-gray-400">{t("header_home")}</a>
            </Link>
            <Link href="/documentation">
              <a className="ml-3 font-semibold text-gray-300 transition duration-200 hover:text-gray-400">{t("header_documentation")}</a>
            </Link>
            <Link href="/support">
              <a className="ml-3 font-semibold text-gray-300 transition duration-200 hover:text-gray-400">{t("header_support")}</a>
            </Link>
          </nav>
        </div>
        <div className="flex items-center justify-end">
          <Link href="/download">
            <a className="btn btn-s btn-primary">{t("header_download")}</a>
          </Link>
          <LanguageSwitcher short={true} />
        </div>
      </div>
    </header>
  );
}
