import Head from "next/head";
import Header from "../components/Header";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t, i18n } = useTranslation();

  return (
    <>
      <Head>
        <title>Hello World</title>
        <meta name="description" content="Official website for SomethingOS" />
      </Head>

      <main>
        <Header />
        <h1>{t("helloworld")}</h1>
      </main>
    </>
  );
}
