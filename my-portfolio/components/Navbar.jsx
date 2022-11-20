import Link from "next/link";
import { useState } from "react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="bg-dark text-primary font-bold sticky w-full top-0 z-30 mb-20">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center md:py-3 md:px-16 lg:px-32">
        <div className="flex items-center justify-between md:px-0 px-4 py-3">
          <div className="uppercase md:text-2xl lg:text-3xl">
            <Link href={""}>yahoo</Link>
          </div>
          <div className="flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                {isOpen ? <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /> : <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />}
              </svg>
            </button>
          </div>
        </div>
        <div className={`${isOpen ? "flex" : "hidden"} md:flex flex-col px-4 py-2 md:px-0 md:py-0 md:flex-row md:space-x-6 space-y-1 md:space-y-0 text-light font-thin text-sm md:text-lg lg:text-2xl`}>
          <Link href={"#about"}>About</Link>
          <Link href={"#tech"}>Tech Stack</Link>
          <Link href={"#projek"}>Project</Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
