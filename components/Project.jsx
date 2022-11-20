import Image from "next/image";

const Project = ({ detail }) => {
  return (
    <div className="flex flex-col items-center rounded-md overflow-hidden shadow-md bg-low-priority p-4 h-96 md:h-[26rem] lg:h-[28rem] hover:bg-primary transition ease-in duration-300">
      <div className="relative w-full h-72 rounded-md overflow-hidden">
        <Image src={detail.img} alt="img" fill sizes="100vh" className="object-cover object-center shadow-md" />
      </div>
      <div className="text-center mt-2 text-white font-medium overflow-hidden">
        <p className="text-base md:text-xl lg:text-2xl font-bold">{detail.title}</p>
        <p className="text-sm md:text-base lg:text-lg">{detail.description}</p>
      </div>
    </div>
  );
};

export default Project;
