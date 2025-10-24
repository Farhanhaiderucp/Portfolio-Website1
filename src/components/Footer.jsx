const Footer = ()=>{
  return (
    <footer
     id="contact"
      className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-6"
      >
      <div
       className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between"
       >
        <p>© {new Date().getFullYear()} 
          Farhan Haider — Softwear Engineer
          </p>
        <div 
        className="mt-3 md:mt-0 flex gap-4"
        >
          <a 
          href="mailto:fk4033455@gmail.com"
           className="underline">FarhanHaider@gmail.com</a>
          <a
           href="https://github.com/Farhanhaiderucp"
            className="underline">GitHub</a>
          <a
           href="https://www.linkedin.com/in/farhan-haider-a846b6254?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
           className="underline">LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
