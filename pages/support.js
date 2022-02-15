import React from "react";
import Head from "next/head";
import { useTranslation } from "react-i18next";

export default function Support() {
  const { t, i18n } = useTranslation();

  return (
    <>
      <Head>
        <title>{t("title_support")}</title>
        <meta name="description" content="Official website for SomethingOS" />
      </Head>
      <main className="bg-slate-900 py-12">
        <section className="px-4 container max-w-screen-xl mx-auto">
          <h1 className="text-slate-100 text-5xl text-center font-bold">{t("support_h1")}</h1>
          <p className="text-slate-100 text-lg">{t("support_p")}</p>
        </section>
      </main>
    </>
  );
}
