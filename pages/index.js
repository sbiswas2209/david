import Head from 'next/head'
import Intro from '../components/intro'
import Roles from '../components/roles'
import About from '../components/about'
import Resume from '../components/resume'
import Skills from '../components/skills'

export default function Home() {
  return (
      <div>
      <Intro />
      <About />
      <Roles />
      <Skills />
      <Resume />
    </div>
  )
}
