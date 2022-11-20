import About from "../components/About";
import Navbar from "../components/Navbar";
import Tech from "../components/Tech";
import { FaGithub, FaHtml5, FaCss3, FaJs, FaReact, FaGitAlt, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import Project from "../components/Project";
import Footer from "../components/Footer";
import Link from "next/link";

export default function Home() {
  const techStack = [
    {
      icon: <FaHtml5 />,
      title: "HTML 5",
    },
    {
      icon: <FaCss3 />,
      title: "CSS 3",
    },
    {
      icon: <FaGithub />,
      title: "Github",
    },
    {
      icon: <FaJs />,
      title: "Java Script",
    },
    {
      icon: <FaGitAlt />,
      title: "Git",
    },
    {
      icon: <FaReact />,
      title: "React Js",
    },
  ];

  const detailProjek = [
    {
      img: "/images/projek_marketplace.jpg",
      title: "Marketplace",
      description: "This marketplace project was built from scratch, using Next JS, Tailwind CSS, and many other libraries",
    },
    {
      img: "/images/projek_pos.jpg",
      title: "Point Of Sale",
      description: "This point of sale projek build from scratch, using React JS, Tailwind CSS, Ant desgin, and many other libraries",
    },
    {
      img: "/images/projek_todolist.jpg",
      title: "Todo List",
      description: "This todo list project was built from scratch, using React JS, Tailwind CSS, and many other libraries",
    },
  ];

  const follow = [
    {
      url: "https://github.com/yahoogm",
      icon: <FaGithub />,
    },
    {
      url: "https://www.instagram.com/yahoomanik/?hl=id",
      icon: <FaInstagram />,
    },
    {
      url: "https://twitter.com/yahoomanik04",
      icon: <FaTwitter />,
    },
    {
      url: "https://www.linkedin.com/in/yahoo-garfield-manik-24b67b210/",
      icon: <FaLinkedin />,
    },
  ];
  return (
    <div>
      <Navbar />
      <About />
      <div id="tech" className="mt-6 md:mt-8 lg:mt-12 md:px-16 lg:px-16">
        <p className="text-center text-primary font-semibold text-lg md:text-2xl">Tech Stack:</p>
        <div className="grid grid-cols-1 p-4 md:p-0 lg:p-0 gap-4 md:mt-4 justify-items-center md:grid-cols-2 lg:grid-cols-3">
          {techStack.map((tech, i) => {
            return <Tech key={i} tech={tech} />;
          })}
        </div>
      </div>
      <div id="projek" className="px-4 md:px-16 space-y-4 mt-6 md:mt-8 lg:mt-12 md:space-y-3 lg:space-y-4">
        <p className="text-center text-primary font-semibold text-lg md:text-2xl">Project:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3">
          {detailProjek.map((detail, i) => {
            return <Project key={i} detail={detail} />;
          })}
        </div>
      </div>
      <Footer>
        {follow.map((fols, i) => {
          return (
            <Link className="hover:text-primary transition ease-in duration-300" key={i} href={fols.url}>
              {fols.icon}
            </Link>
          );
        })}
      </Footer>
    </div>
  );
}
