import ProjectCard from './ProjectCard'
const Project = ()=>{
  const projectList = [
    { title: "Birthday invitation Website",
       description: "Website for the invitation of My Birthday party Venue and its proper Location.",
        url: "https://farhanhaiderucp.github.io/html-portfolio/assets/intermediateproject.html" },
    { title: "Portfolio Website",
       description: "Personal portfolio made with Simple Html and CSS.",
        url: "https://farhanhaiderucp.github.io/My-portfolio/" },
    { title: "Chatbot Prototype",
       description: "Simple AI-powered chatbot demo for FAQ handling.", 
       url: "https://chatgpt.com/" }
  ]

  return (
    <section 
    id="projects"
     className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-12">
      <div 
      className="container mx-auto px-4"
      >
        <h2 
        className="text-3xl font-bold mb-6">
          Projects
          </h2>
        <div 
        className="flex flex-wrap -m-2"
        >
          {projectList.map((p, i) => (
            <ProjectCard key={i} title={p.title} description={p.description} url={p.url} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Project
