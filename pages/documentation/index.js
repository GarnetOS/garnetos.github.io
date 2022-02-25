import React from "react";
import Head from "next/head";
import { useTranslation } from "react-i18next";
import Menu from "../../components/documentation/Menu";

export default function Documentation() {
  const { t, i18n } = useTranslation();

  return (
    <>
      <Head>
        <title>{t("title_documentation")}</title>
        <meta name="description" content="Official website for SomethingOS" />
      </Head>
      <main className="bg-slate-900 py-12">
        <h1 className="text-slate-100 text-5xl text-center font-bold">{t("documentation_h1")}</h1>
        <section className="grid grid-cols-4 container max-w-screen-xl mx-auto">
          <Menu />
        </section>
      </main>
    </>
  );
}
