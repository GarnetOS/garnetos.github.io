import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useTranslation, Trans } from "react-i18next";

export default function Home() {
  const { t, i18n } = useTranslation();

  return (
    <>
      <Head>
        <title>Hello World</title>
        <meta name="description" content="Official website for SomethingOS" />
      </Head>
      <Header />
      <main>
        <section className="intro">
          <div className="container">
            <h1>
              <Trans i18nKey="index_h1" components={[<strong key="0" />]} />
            </h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis urna placerat, congue purus sit amet, semper nunc.</p>
            <Link href="/download">
              <a className="btn btn-l btn-duotone">{t("index_cta")}</a>
            </Link>
          </div>
        </section>
        <section className="about">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,256L48,234.7C96,213,192,171,288,165.3C384,160,480,192,576,176C672,160,768,96,864,85.3C960,75,1056,117,1152,154.7C1248,192,1344,224,1392,240L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            ></path>
          </svg>
          <div className="container">
            <h2>About this system</h2>
            <div className="row">
              <div className="col-md-6">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia ornare finibus. Nunc vel augue massa. Sed commodo nunc at quam feugiat rutrum. In vulputate nunc justo, sit amet sollicitudin mi accumsan sed. Morbi ut blandit ante. Aenean vitae eros arcu. Etiam bibendum viverra
                  odio id lobortis.
                </p>
              </div>
              <div className="col-md-6"></div>
            </div>
            <div className="row">
              <div className="col-md-6"></div>
              <div className="col-md-6">
                <p>
                  Curabitur non orci urna. Ut ac augue ut dolor ultrices bibendum in eget felis. Mauris id tellus eu nisi iaculis vestibulum et nec sapien. Aenean placerat, ex at ornare porta, tellus justo viverra eros, at bibendum ligula justo dictum mauris. Aliquam aliquam hendrerit nisi id
                  luctus. Fusce ac aliquet dui.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <p>Vestibulum a blandit nisl. Nam tristique eget neque id sollicitudin. Phasellus eu ex erat. Sed efficitur convallis porta. Curabitur sed nisl condimentum, consequat orci vitae, convallis dolor. Vivamus porttitor iaculis rhoncus. Nunc non faucibus sapien. Aliquam erat volutpat.</p>
              </div>
              <div className="col-md-6"></div>
            </div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,96L60,117.3C120,139,240,181,360,170.7C480,160,600,96,720,85.3C840,75,960,117,1080,122.7C1200,128,1320,96,1380,80L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            ></path>
          </svg>
        </section>
        <section className="download">
          <div className="container">
            <h2>Download Now</h2>
            <Link href="/download">
              <a className="btn btn-s btn-primary">.iso | 2,82 GB</a>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
