import Head from "next/head";
import Intro from "../components/intro";
import Roles from "../components/roles";
import About from "../components/about";
import Resume from "../components/resume";
import Skills from "../components/skills";
import Projects from "../components/projects";
import getProjects from "../controllers/getProjects";
import getRoles from "../controllers/getRoles";
import getSkills from "../controllers/getSkills";
import getResume from "../controllers/getResume";

export default function Home({projects, skills, roles, resume}) {
  return (
    <div>
      <Intro />
      <About />
      <Roles roles={roles} />
      <Skills skills={skills} />
      <Projects projects={projects}/>
      <Resume link={resume}/>
    </div>
  );
}

export async function getStaticProps(context){
  const projects = await getProjects();
  const roles = await getRoles();
  const skills = await getSkills();
  const resume = await getResume();
  return {
    props: {
      projects,
      skills,
      roles,
      resume
    }
  }
}
