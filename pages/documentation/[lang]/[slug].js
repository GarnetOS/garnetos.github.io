import React from "react";
import Head from "next/head";
import { useTranslation } from "react-i18next";
import Menu from "../../../components/documentation/Menu";
import { useRouter } from "next/router";
import fs from "fs";
import path from "path";
import { marked } from "marked";

export default function Documentation({ content }) {
  const { t, i18n } = useTranslation();

  return (
    <>
      <Head>
        <title>{t("title_documentation")}</title>
        <meta name="description" content="Official website for GarnetOS" />
      </Head>
      <main className="bg-gray-900 py-12">
        <section className="grid grid-cols-4 container max-w-screen-xl mx-auto">
          <Menu />
          <article className="col-span-3 px-4 prose prose-invert lg:prose-lg" dangerouslySetInnerHTML={{ __html: marked(content) }}></article>
        </section>
      </main>
    </>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("articles"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename,
      lang: "cs",
    },
  }));

  const allPaths = paths.concat(
    files.map((filename) => ({
      params: {
        slug: filename,
        lang: "en",
      },
    }))
  );

  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug, lang } }) {
  const markdown = fs.readFileSync(path.join("articles", slug, lang + ".md"), "utf-8");
  return {
    props: { content: markdown },
  };
}
