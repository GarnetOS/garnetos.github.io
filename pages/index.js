import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const { t, i18n } = useTranslation();

  return (
    <>
      <Head>
        <title>Hello World</title>
        <meta name="description" content="Official website for SomethingOS" />
      </Head>
      <Header />
      <main className="bg-slate-900 py-12">
        <section className="px-4 container max-w-screen-xl mx-auto">
          <div className="sm:grid sm:grid-cols-2">
            <div>
              <h1 className="text-4xl font-bold leading-snug mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-700">SomethingOS</h1>
              <h2 className="text-5xl font-bold leading-snug text-white mb-4">{t("index_h2")}</h2>
              <p className="text-slate-300 text-2xl mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis urna placerat, congue purus sit amet, semper nunc.</p>
              <div className="links">
                <Link href="/download">
                  <a className="btn btn-l btn-primary mb-4 mr-4">{t("index_cta")}</a>
                </Link>
                <Link href="/documentation">
                  <a className="btn btn-l btn-secondary">{t("header_documentation")}</a>
                </Link>
              </div>
            </div>
            <div className="flex items-center">
              <img className="w-full" src="/assets/undraw_os.svg" alt="Illustration" />
            </div>
          </div>
        </section>
        <section className="px-4 container max-w-screen-xl mx-auto py-20">
          <h2 className="text-4xl text-center font-bold text-white mb-6">Why SomethingOS?</h2>
          <div className="sm:grid sm:grid-cols-3 sm:gap-x-6">
            <div className="px-6 py-8 rounded-3xl bg-gradient-to-r from-fuchsia-400 to-violet-400 mb-4">
              <h3 className="text-3xl mb-2">
                <FontAwesomeIcon icon={faCog} />
              </h3>
              <p className="text-xl font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia ornare finibus. Nunc vel augue massa.</p>
            </div>
            <div className="px-6 py-8 rounded-3xl bg-gradient-to-r from-emerald-400 to-cyan-400 mb-4">
              <h3 className="text-3xl mb-2">
                <FontAwesomeIcon icon={faCog} />
              </h3>
              <p className="text-xl font-medium">Curabitur non orci urna. Ut ac augue ut dolor ultrices bibendum in eget felis.</p>
            </div>
            <div className="px-6 py-8 rounded-3xl bg-gradient-to-r from-pink-400 to-rose-400 mb-4">
              <h3 className="text-3xl mb-2">
                <FontAwesomeIcon icon={faCog} />
              </h3>
              <p className="text-xl font-medium">Vestibulum a blandit nisl. Nam tristique eget neque id sollicitudin. Phasellus eu ex erat.</p>
            </div>
          </div>
        </section>
        <section className="px-4 container max-w-screen-xl mx-auto">
          <div className="p-12 flex flex-col items-center bg-gradient-to-r from-blue-500 to-blue-800 rounded-3xl">
            <h2 className="text-4xl text-white font-bold text-center">Download Now</h2>
            <Link href="/download">
              <a className="btn btn-s btn-secondary mt-3">.iso | 2,82 GB</a>
            </Link>
          </div>
        </section>
      </main>
      <Footer darkmode={true} />
    </>
  );
}
