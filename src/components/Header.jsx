const Header = (props) => {
  return (
    <header
     className="w-full h-[64px] bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-white flex items-center">
      <div 
      className="container mx-auto px-4 flex items-center justify-between">
        <div
         className="flex items-center gap-3">
          {props.logo ? (
            <img
              src={props.logo}
              alt="Logo"
              className="w-10 h-10 rounded-full object-cover"
            />
          ) : (
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold">
              {props.title ? props.title.charAt(0) : "?"}
            </div>
          )}
          <div 
          className="text-lg font-semibold">
            {props.title}
          </div>
        </div>

        <nav>
          <ul className="flex gap-6">
            <li>
              <a className="hover:underline font-semibold" href="#home">{props.homeText}</a>
              </li>
            <li>
              <a className="hover:underline font-semibold" href="#about">{props.aboutText}</a>
              </li>
            <li>
              <a className="hover:underline font-semibold" href="#projects">{props.projectsText}</a>
              </li>
            <li>
              <a className="hover:underline font-semibold" href="#contact">{props.contactText}</a>
              </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
