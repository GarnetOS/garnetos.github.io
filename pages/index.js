import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header";
import { useTranslation, Trans } from "react-i18next";

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
        <div className="container">
          <h1>
            <Trans i18nKey="index_h1" components={[<strong key="0" />]} />
          </h1>
          <Link href="/download">
            <a className="btn btn-l btn-duotone">{t("index_cta")}</a>
          </Link>
        </div>
      </main>
    </>
  );
}
