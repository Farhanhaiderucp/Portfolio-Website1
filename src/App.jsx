import profileimg from './assets/profileimg.jpeg'
import Header from './components/Header'
import Main from './components/Main'
import About from './components/About'
import Project from './components/Project'
import Footer from './components/Footer'
const App=()=>{
  
  return(
    <div className="min-h-screen flex flex-col">
      <Header
      title="Farhan Haider"
        logo={profileimg}
        homeText="Home"
        aboutText="About"
        projectsText="Projects"
        contactText="Contact"
      />
      <Main/>
<About/>
<Project/>
<Footer/>

    </div>
  )
}
export default App