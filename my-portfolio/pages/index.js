import About from "../components/About";
import Navbar from "../components/Navbar";
import Tech from "../components/Tech";
import { FaGithub, FaHtml5, FaCss3, FaJs, FaReact, FaGitAlt } from "react-icons/fa";

export default function Home() {
  const techStack = [
    {
      icon: <FaHtml5 size={60} />,
      title: "HTML 5",
    },
    {
      icon: <FaCss3 size={60} />,
      title: "CSS 3",
    },
    {
      icon: <FaGithub size={60} />,
      title: "Github",
    },
    {
      icon: <FaJs size={60} />,
      title: "Java Script",
    },
    {
      icon: <FaGitAlt size={60} />,
      title: "Git",
    },
    {
      icon: <FaReact size={60} />,
      title: "React Js",
    },
  ];
  return (
    <div>
      <Navbar />
      <About />
      <div className="space-y-4 mt-4 md:mt-8 lg:mt-12 md:px-16 lg:px-16">
        <p className="text-center text-primary text-primary font-semibold text-lg md:text-2xl">Tech Stack:</p>
        <div className="grid grid-cols-1 p-4 md:p-0 lg:p-0 gap-4  justify-items-center md:grid-cols-2 lg:grid-cols-3">
          {techStack.map((tech, i) => {
            return <Tech key={i} tech={tech} />;
          })}
        </div>
      </div>
    </div>
  );
}
