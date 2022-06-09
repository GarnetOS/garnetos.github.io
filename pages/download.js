import React from "react";
import Head from "next/head";
import { useTranslation } from "react-i18next";

export default function Download() {
  const { t, i18n } = useTranslation();

  return (
    <>
      <Head>
        <title>{t("title_download")}</title>
        <meta name="description" content="Official website for GarnetOS" />
      </Head>
      <main className="bg-gray-900 py-12">
        <section className="px-4 container max-w-screen-xl mx-auto">
          <h1 className="text-gray-100 text-5xl text-center font-bold">{t("download_h1")}</h1>
          <div className="mb-4">
            <h2 className="text-gray-50 text-4xl">armv6</h2>
            <button className="btn btn-s btn-primary mt-2">{t("header_download")}</button>
          </div>
          <div className="mb-4">
            <h2 className="text-gray-50 text-4xl">armv7</h2>
            <button className="btn btn-s btn-primary mt-2">{t("header_download")}</button>
          </div>
          <div className="mb-4">
            <h2 className="text-gray-50 text-4xl">aarch64</h2>
            <button className="btn btn-s btn-primary mt-2">{t("header_download")}</button>
          </div>
          <div className="mb-4">
            <h2 className="text-gray-50 text-4xl">amd64</h2>
            <button className="btn btn-s btn-primary mt-2">{t("header_download")}</button>
          </div>
          <div className="mb-4">
            <h2 className="text-gray-50 text-4xl">ppc64le</h2>
            <button className="btn btn-s btn-primary mt-2">{t("header_download")}</button>
          </div>
          <div className="mb-4">
            <h2 className="text-gray-50 text-4xl">i386</h2>
            <button className="btn btn-s btn-primary mt-2">{t("header_download")}</button>
          </div>
        </section>
      </main>
    </>
  );
}
