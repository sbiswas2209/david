import Intro from "../components/intro";
import Roles from "../components/roles";
import About from "../components/about";
import Resume from "../components/resume";
import Skills from "../components/skills";
import Projects from "../components/projects";
import { request } from "../lib/datocms";
import { DATA_QUERY } from "../lib/query";
import Footer from "../components/footer";

export default function Home({email, projects, skills, roles, resume, phone, linkedin, github, instagram, name}) {
  return (
    <div className="scroll-smooth select-none">
      <Intro email={email} />
      <About email={email} />
      <Roles roles={roles} />
      <Skills skills={skills} />
      <Projects projects={projects}/>
      <Resume url={resume}/>
      <Footer phone={phone} linkedin={linkedin} github={github} instagram={instagram} name={name}/>
    </div>
  );
}

export async function getStaticProps(context){
  const data = await request(DATA_QUERY);
  const projects = data["allProjects"];
  const roles = data["allRoles"].concat(data["allClubRoles"]);
  const skills = data["allSkills"];
  const resume = data["contactDetail"]["resume"]["url"];
  const email = data["contactDetail"]["email"];
  const phone = data["contactDetail"]["phone"];
  const linkedin = data["contactDetail"]["linkedin"];
  const github = data["contactDetail"]["github"];
  const instagram = data["contactDetail"]["instagram"];
  const name = data["contactDetail"]["name"];
  return {
    props: {
      email,
      projects,
      skills,
      roles,
      resume,
      phone,
      linkedin,
      github,
      instagram,
      name
    }
  }
}
