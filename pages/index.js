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
      <Header darkmode={true} />
      <main>
        <section className="intro">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h1>SomethingOS</h1>
                <h2>{t("index_h2")}</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis urna placerat, congue purus sit amet, semper nunc.</p>
                <div className="links">
                  <Link href="/download">
                    <a className="btn btn-l btn-primary">{t("index_cta")}</a>
                  </Link>
                  <Link href="/documentation">
                    <a className="btn btn-l btn-outline">{t("header_documentation")}</a>
                  </Link>
                </div>
              </div>
              <div className="col-md-6">
                <img src="/assets/undraw_os.svg" alt="Illustration" />
              </div>
            </div>
          </div>
        </section>
        <section className="about">
          <div className="container">
            <h2>Why SomethingOS?</h2>
            <div className="row">
              <div className="col-md-4">
                <div>
                  <h3>
                    <FontAwesomeIcon icon={faCog} />
                  </h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia ornare finibus. Nunc vel augue massa.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div>
                  <h3>
                    <FontAwesomeIcon icon={faCog} />
                  </h3>
                  <p>Curabitur non orci urna. Ut ac augue ut dolor ultrices bibendum in eget felis.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div>
                  <h3>
                    <FontAwesomeIcon icon={faCog} />
                  </h3>
                  <p>Vestibulum a blandit nisl. Nam tristique eget neque id sollicitudin. Phasellus eu ex erat.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="download">
          <div className="container">
            <h2>Download Now</h2>
            <Link href="/download">
              <a className="btn btn-s btn-secondary">.iso | 2,82 GB</a>
            </Link>
          </div>
        </section>
      </main>
      <Footer darkmode={true} />
    </>
  );
}
