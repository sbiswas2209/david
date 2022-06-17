import Head from "next/head";
import Image from "next/image";
import { request } from "../../lib/datocms";
import { BLOG_DATA_QUERY, BLOG_QUERY_BY_SLUG, DATA_QUERY } from "../../lib/query";
import { StructuredText, renderNodeRule } from "react-datocms";
import { isCode, isLink } from "datocms-structured-text-utils";
import Footer from "../../components/footer";

interface BlogProps {
  title: string;
  slug: string;
  contentData: any;
}

function BlogPage({ data }) {
  return (
    <>
      <Head>
        <title>{data.title}</title>
        <meta name="author" content="Sagnik Biswas" />
        <meta property="og:url" content="https://sagnik.dev" />
        <meta property="og:title" content={data.title} />
        <meta
          property="og:description"
          content="Blogs by Sagnik Biswas"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/**${encodeURI(data.title)}**%20%3Cbr%2F%3E%20Blogs%20by%20Sagnik%20Biswas.png?theme=dark&md=1&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fhyper-bw-logo.svg`}
        />
      </Head>
      <div>
      {data.landingImage !== null ?  <img src={data.landingImage.url} className="object-cover h-96 w-screen pb-10"/> : <div></div>}
        <h1 className="lg:text-5xl text-3xl font-bold lg:px-96 px-14 flex flex-auto">{data.title}</h1>
        {data.contentData.map((e) => (
          <div
            key={data.contentData.indexOf(e)}
            className="lg:px-96 px-14 text-lg flex flex-auto"
          >
            {e.content != undefined ? (
              <div className="lg:py-10 py-3">
                <StructuredText
                  data={e.content}
                  customNodeRules={[
                    renderNodeRule(isCode, ({ node, key }) => {
                      return <code key={key}>{node.code}</code>;
                    }),
                    renderNodeRule(isLink, ({ node, key }) => {
                      return (
                        <a href={node.url} target="__blank" key={key}>
                          {node.children.map((e) => (
                            <span className="underline hover:text-yellow-400 hover:no-underline lg:text-white sm:text-white duration-500" key={node.children.indexOf(e)}>
                              {e.value}
                            </span>
                          ))}
                        </a>
                      );
                    }),
                  ]}
                />
              </div>
            ) : e.image != undefined ? (
              <div className="flex justify-center w-full lg:py-10 py-3">
                <Image
                  src={e.image.url}
                  height={e.image.height}
                  width={e.image.width}
                />
              </div>
            ) : (
              <div></div>
            )}
          </div>
        ))}
      </div>
      <Footer phone={data.phone} linkedin={data.linkedin} github={data.github} instagram={data.instagram} name={data.name}/>
    </>
  );
}

export async function getStaticPaths() {
  const data = await request(BLOG_DATA_QUERY);
  console.log(data);
  return {
    paths: (data["allBlogs"] as any[]).map((e) => {
      return {
        params: {
          slug: e.slug,
        },
      };
    }),
    fallback: false,
  };
}

export const getStaticProps = async ({ params: { slug } }) => {
  console.log(slug);
  const data = await request(BLOG_QUERY_BY_SLUG(slug));
  console.log(data["blog"]);
  const profileData = await request(DATA_QUERY);
  const phone = profileData["contactDetail"]["phone"];
  const linkedin = profileData["contactDetail"]["linkedin"];
  const github = profileData["contactDetail"]["github"];
  const instagram = profileData["contactDetail"]["instagram"];
  const name = profileData["contactDetail"]["name"];
  const propData = {
    title: data["blog"].title,
    slug: data["blog"].slug,
    contentData: data["blog"].contentData,
    landingImage: data["blog"].landingImage ?? null,
    phone, linkedin, github, instagram, name
  };
  return {
    props: {
      data: propData,
    },
    revalidate: false,
  };
};

export default BlogPage;
