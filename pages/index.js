import Head from "next/head"
import Main from "../components/Main"
import Navbar from "../components/Navbar"
import About from "../components/About"
import Skills from "../components/Skills"
import Project from "../components/Project"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import Qualification from "../components/Qualification"


export default function Home() {
  return (
    <div>
      <Head>
        <title>Suvroportfolio</title>
        <meta name="description" content="generated by next app"/>
        <link rel="icon" href="/favicon.jpg"/>
      </Head>
      <Navbar/>
      <Main/>
      <About/>
      <Qualification/>
      <Skills/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  )
}
