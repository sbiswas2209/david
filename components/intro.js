import Form from "./form";
import Wave from "./wave";

const Intro = () => {
  return (
    <>
      <Wave />
      <div className="ml-11 lg:mt-66 mt-52 grid grid-rows-3 gap-5">
        <h3 className="text-5xl">Hello!!! 👋</h3>
        <p className="text-3xl">
          I'm Sagnik Biswas, <br />
          Design Inspires me,
          <br />
          Code drives me! 👨‍💻
        </p>
        <div className="lg:grid grid-cols-6 sm:grid grid-rows-2 gap-2">
          <p className="col-span-1 pt-4 text-3xl grid-cols-1">
            Get in touch ✍
          </p>
          <a
            href="mailto:me@sagnikbiswas.tech?Subject=Wanted%20to%20have%20a%20chat"
            className="lg:p-4 col-span-2 text-3xl hover:text-yellow-400 underline hover:no-underline transition duration-500 hover:-transition rounded-md"
          >
            me@sagnikbiswas.tech
          </a>
        </div>
      </div>
    </>
  );
};

export default Intro;
