const Main = () => {
  return (
    <section
      id="home"
      className="w-full min-h-[100vh] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white flex items-center justify-center"
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">

        <div className="text-center md:text-left max-w-xl">
          <h1 className="text-5xl font-extrabold">
            Hi, I'm <span className="text-white">Farhan Haider</span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed">
            Software & Web Developer — I build efficient, scalable web applications with a focus
            on performance, usability, and quality. Combining modern development practices with
            strong SQA skills, I ensure every project runs smoothly, looks great, and delivers a
            seamless user experience.
          </p>
          <div className="mt-8">
            <a
              href="#projects"
              className="px-6 py-3 bg-white text-black font-medium rounded-md hover:bg-gray-200 transition"
            >
              View Projects
            </a>
          </div>
        </div>


        <div className="flex justify-center md:justify-end">
          <img
            src="./profilenew.jpg" 
            alt="Farhan Haider"
            className="w-74 h-74 md:w-64 md:h-74 mr-7 rounded-full border-4 border-white shadow-lg object-cover "
          />
        </div>
      </div>
    </section>
  );
};

export default Main;
