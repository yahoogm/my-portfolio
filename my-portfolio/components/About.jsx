import Image from "next/image";

const About = () => {
  return (
    <div className="space-y-4 mt-14 md:mt-24 md:px-6 lg:px-20">
      <div className="mt-5 px-4 md:px-0 py-2 md:grid md:grid-cols-2 md:items-center lg:py-10">
        <div className="relative w-28 h-28 rounded-full overflow-hidden m-auto shadow-md shadow-black md:order-2 md:w-52 md:h-52 lg:w-64 lg:h-64">
          <Image fill sizes="100vh" src="https://images.unsplash.com/photo-1602992708529-c9fdb12905c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="img" />
        </div>
        <div className="px-4 md:text-center lg:text- flex flex-col items-center text-light md:order-1 lg:space-y-2">
          <p className="text-lg md:text-2xl lg:text-3xl font-semibold">Hello, i`m</p>
          <p className="font-semibold text-2xl md:text-4xl lg:text-5xl">Yahoo Garfield Manik</p>
          <p className="text-sm md:text-lg lg:text-2xl">Frontend Web Developer</p>
        </div>
      </div>

      <div className="w-full h-8 bg-dark"></div>

      <div className="flex flex-col items-center px-4 md:px-10">
        <p className="text-primary font-semibold text-lg md:text-2xl md:py-2">About Me:</p>
        <p className="text-center text-light text-sm leading-6 md:text-lg md:leading-7 lg:text-start">
          My name is <span className="font-semibold">Yahoo Garfield Manik</span>, a student at the <span className="font-semibold">University of North Sumatra</span> majoring in informatics engineering. The field that I am working on is a
          <span className="font-semibold"> Frontend Web Developer</span> and currently I am undergoing an Internship with the Merdeka Campus at PT Pundi Mas Berjaya as a Frontend Web Developer
        </p>
      </div>
    </div>
  );
};

export default About;
