const Tech = ({ tech }) => {
  return (
    <div className="bg-low-priority hover:bg-primary w-full grid justify-items-center rounded-md shadow-md md:p-4 lg:p-8">
      <div className="text-white">{tech.icon}</div>
      <div className="text-white font-semibold md:text-lg">{tech.title}</div>
    </div>
  );
};

export default Tech;
