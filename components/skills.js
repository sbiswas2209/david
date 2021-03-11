const Skills = () => {
  const skills = [
    "Flutter",
    "Node.js",
    "Ionic",
    "Golang",
    "Alexa Skills",
    "Figma",
    "Photoshop",
    "SQL",
    "NoSQL",
  ];
  return (
    <div className="lg:grid grid-cols-2 gap-2 col-span-1 row-span-1 mt-11">
      <h3 className="text-4xl text-center mt-11 mb-11">Skills</h3>
      <div
        id="skills"
        className="ml-11 mr-11 lg:grid grid-cols-2 gap-2 grid grid-cols-3 gap-9"
      >
        {skills.map((skill) => (
          <div
            key={skill}
            className="rounded-md transition duration-700 ease-in-out hover:-transition align-middle p-4 lg:border-2 lg:border-yellow-400 lg:hover:bg-yellow-400 focus:outline-none group"
          >
            <p className="text-base lg:group-hover:text-gray-900">{skill}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
