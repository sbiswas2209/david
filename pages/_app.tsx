import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Sagnik Biswas</title>
        <meta name="description" content="Software Developer" />
        <meta
          name="keywords"
          content="Sagnik, Biswas, Sagnik Biswas, SRM, SRMKZILLA, Alexa Developers SRM, Flutter, Flutter Dev, Dev, Developer, Golang, Golang developer, SRM, Tech Analogy, Developmnt, "
        />
        <meta name="author" content="Sagnik Biswas" />
        <meta property="og:url" content="https://sagnik.dev" />
        <meta property="og:title" content="Sagnik Biswas" />
        <meta
          property="og:description"
          content="If it works, let it be!!!"
        />
        <meta
          property="og:image"
          content="https://www.datocms-assets.com/62601/1655498808-sagnik-biswas-br-software-developer.png"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}


export default MyApp;
