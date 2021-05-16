import "../styles/globals.css";
import Head from "next/head";
import Layout from "../components/layout";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Sagnik Biswas</title>
        <meta name="description" content="Flutter Developer" />
        <meta name="keywords" content="Sagnik, Biswas, Sagnik Biswas, SRM, SRMKZILLA, Alexa Developers SRM, Flutter, Flutter Dev, Dev, Developer, Golang, Golang developer" />
        <meta name="author" content="Sagnik Biswas" />
        <meta property="og:url" content="https://sagnikbiswas.tech" />
        <meta property="og:title" content="Sagnik Biswas" />
        <meta
          property="og:description"
          content="An undergraduate, building mostly stupid but sometimes interesting projects"
        />
        <meta
          property="og:image"
          content="https://billboard.srmkzilla.net/api/blog?title=Sagnik&subtitle=Portfolio&theme=dark"
        />
      </Head>
      <Layout className="bg-grey-800">
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
