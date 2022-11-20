const Footer = ({ children }) => {
  return (
    <footer className="mt-4 flex flex-col items-center justify-center px-2 py-4 text-white space-y-2">
      <p className="text-md md:text-lg lg:text-xl">Yahoo Garfield Manik &copy; {new Date().getFullYear()}</p>
      <div className="flex justify-center items-center space-x-4 text-md md:text-xl lg:text-2xl">{children}</div>
    </footer>
  );
};

export default Footer;
