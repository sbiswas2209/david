import "../styles/globals.css";
import Head from "next/head";
import Layout from "../components/layout";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Sagnik Biswas</title>
        <meta name="description" content="Free Web tutorials" />
        <meta name="keywords" content="Sagnik, Biswas, Sagnik Biswas, SRM, SRMKZILLA, Alexa Developers SRM, Flutter, Flutter Dev, Dev, Developer, Golang, Golang developer" />
        <meta name="author" content="Sagnik Biswas" />
      </Head>
      <Layout className="bg-grey-800">
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
