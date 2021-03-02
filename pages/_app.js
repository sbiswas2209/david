import "../styles/globals.css";
import Head from "next/head";
import Layout from "../components/layout";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Sagnik Biswas</title>
      </Head>
      <Layout className="bg-grey-800">
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
