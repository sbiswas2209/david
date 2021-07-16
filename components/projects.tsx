const Projects = ({projects}) => {
  return (
    <div className="lg:grid grid-cols-2 gap-0 ml-11 lg:mr-44 mr-11 mt-11">
      <div>
      <h3 className="text-4xl text-center mt-11 mb-11">Projects</h3>
      </div>
      <div className="grid grid-rows-8 gap-4">
        {projects.map((project) => (
          <a href={project.url} target="_blank" key={project.name}>
            <div className="transition duration-500 hover:-transition container rounded-md p-5 hover:bg-yellow-400 group bg-transparent group-hover:border-5 group-hover:border-yellow-400">
              <h3 className="text-xl group-hover:text-gray-900 text-gray-100">
                {project.name}
              </h3>
              <h3 className="text-lg group-hover:text-gray-900 text-gray-100">
                Stack Used : {project.stack}
              </h3>
              <h3 className="text-base group-hover:text-gray-900 text-gray-100">
                {project.description}
              </h3>
            </div>
          </a>
        ))}
        <a className="text-sm p-5 hover:text-yellow-400" href='https://github.com/sbiswas2209' target='_blank'>
          and many more, check my Github for the latest projects I come up with.
        </a>
      </div>
    </div>
  );
};

export default Projects;
