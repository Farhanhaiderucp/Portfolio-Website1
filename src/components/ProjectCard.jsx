const ProjectCard = ({ title, description, url })=>{
  return (
    <div 
    className="flex-1 min-w-[220px] p-5 m-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-lg shadow-lg flex flex-col justify-between"
    >
      <div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="mt-2 text-sm">{description}</p>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <a href={url||"#"} className="underline">View Details</a>
        <button onClick={()=> window.open(url||"#", "_blank")} className="px-3 py-1 bg-white text-black rounded hover:bg-gray-200">Open</button>
      </div>
    </div>
  )
}
export default ProjectCard
