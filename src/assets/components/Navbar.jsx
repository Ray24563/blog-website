import { useState } from "react";

// The Link component is similar to the <a> tag in HTML, 
// but it's used for internal navigation in React without reloading the page.
import {Link} from 'react-router-dom';

function NavigationBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white p-5 px-10 flex justify-between items-center border-b border-b-[#0A0908]">
      <h1 className="custom-font text-2xl">Just my Type</h1>

      {/* Hamburger Icon - visible on small screens only */}
      <button
        className="md:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {/* Hamburger SVG Icon */}
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="black"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Menu - shown by default on md+ (Mostly in desktops) */}
      <ul className="hidden md:flex font-[sans-serif]">
        <Link to="/" className="hover:bg-[#5E503F] hover:text-white pt-2 pb-2 pe-4 ps-4 transition-bg duration-400 rounded-sm cursor-pointer me-2"><li>Home</li></Link>
        <Link to="/about" className="hover:bg-[#5E503F] hover:text-white pt-2 pb-2 pe-4 ps-4 transition-bg duration-400 rounded-sm cursor-pointer me-2"><li>About</li></Link>
        <a className="hover:bg-[#5E503F] hover:text-white pt-2 pb-2 pe-4 ps-4 transition-bg duration-400 rounded-sm cursor-pointer"><li>Posts</li></a>
      </ul>

      {/* Menu - shown when menuOpen is true (Shown mostly in smartphones) */}
      {menuOpen && (
        <ul className="absolute top-[80px] left-0 w-full bg-white shadow-md flex flex-col items-center gap-4 py-4 md:hidden font-[sans-serif]">
          <Link to="/" className="hover:bg-[#5E503F] hover:text-white pt-2 pb-2 pe-4 ps-4 transition-bg duration-400 rounded-sm cursor-pointer "><li>Home</li></Link>
          <Link to="/about" className="hover:bg-[#5E503F] hover:text-white pt-2 pb-2 pe-4 ps-4 transition-bg duration-400 rounded-sm cursor-pointer"><li>About</li></Link>
           <a className="hover:bg-[#5E503F] hover:text-white pt-2 pb-2 pe-4 ps-4 transition-bg duration-400 rounded-sm cursor-pointer"><li>Create Post</li></a>
        </ul>
      )}
    </nav>
  );
}

export default NavigationBar;