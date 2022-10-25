import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import Lottie from "react-lottie";
import * as animationData from "../assets/wave_contact.json";
import { request } from "../lib/datocms";
import { CONTACT_DATA_QUERY } from "../lib/query";
const ContactPage = ({ contact }) => {
  const options = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        theme: "dark",
        styles: { branding: { brandColor: "#EAB308" } },
      });
    })();
  }, []);

  console.log(contact.map((e) => e.slug));

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      <div className="rotate-0 lg:rotate-90 flex-1">
        <Lottie options={options} />
      </div>
      <div className="flex-1 justify-between p-14 lg:pr-28 lg:m-auto">
        <h1 className="p-5 text-3xl font-extrabold text-yellow-400">
          Contact me
        </h1>
        {contact.map((e, index) => (
          <div
            key={index}
            data-cal-link={`sagnik/${e.slug}`}
            className="text-left transition duration-500 hover:-transition container rounded-md p-5 hover:bg-yellow-400 group bg-transparent group-hover:border-5 group-hover:border-yellow-400"
          >
            <div>
              <h3 className="text-xl group-hover:text-gray-900 text-gray-100">
                {e.title}
              </h3>

              <h3
                className="text-base group-hover:text-gray-900 text-gray-100"
                dangerouslySetInnerHTML={{ __html: e.description }}
              ></h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export async function getStaticProps(context) {
  const data = await request(CONTACT_DATA_QUERY);
  const contact = data["allContacts"] as any[];
  contact.sort((a, b) => {
    return new Date(a.createdAt).valueOf() - new Date(b.createdAt).valueOf();
  });
  return {
    props: { contact },
  };
}

export default ContactPage;
