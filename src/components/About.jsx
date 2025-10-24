const About = ()=>{
  return (
    <section 
    id="about" 
    className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-12"
    >
      <div 
      className="container mx-auto px-4"
      >
        <h2
         className="mt-0 text-3xl font-bold"
         >About Me</h2>
        <p className="mt-4 max-w-3xl ">I'm Farhan Haider, a Software and Web Developer with strong SQA skills, focused on building reliable, high-performing web applications. I enjoy turning ideas into scalable digital solutions and ensuring seamless functionality through clean code, responsive design, and thorough quality testing.
</p>
        <div className="mt-4 flex gap-3">
          <span className="px-3 py-1 bg-white/20 rounded-full">Web-Developmet</span>
          <span className="px-3 py-1 bg-white/20 rounded-full">Github</span>
          <span className="px-3 py-1 bg-white/20 rounded-full">SQE</span>
        </div>
      </div>
    </section>
  )
}

export default About
