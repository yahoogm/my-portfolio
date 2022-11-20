const Tech = ({ tech }) => {
  return (
    <div className="bg-low-priority hover:bg-primary w-full grid justify-items-center rounded-md shadow-md p-2 md:p-4 lg:p-8 transition ease-in duration-300">
      <div className="text-white text-7xl md:text-8xl">{tech.icon}</div>
      <div className="text-white font-semibold md:text-lg">{tech.title}</div>
    </div>
  );
};

export default Tech;
