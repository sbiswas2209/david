interface ResumeProps {
  link: string;
}
const Resume: React.FC<ResumeProps> = (props) => {
  return (
    <div
      id="resume"
      className="lg:mt-44 mt-11 lg:mb-44 mb-11 flex justify-center w-full"
    >
      <a href={props.link} target="_blank">
        <button className="rounded-md transition duration-700 ease-in-out hover:-transition align-middle p-4 border-2 border-yellow-400 hover:bg-yellow-400 focus:outline-none">
          Download Resume
        </button>
      </a>
    </div>
  );
};

export default Resume;
