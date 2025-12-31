const Footer = () => {
  return (
    <footer className="w-full mt-16 border-t border-blue-100 bg-gradient-to-r from-white via-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-600">

        {/* Left */}
        <p className="font-medium">
          © 2025 <span className="text-blue-600 font-semibold">Todo App</span>
        </p>

        {/* Center */}
        <p className="text-xs sm:text-sm text-gray-500">
          Built with <span className="text-blue-500 font-semibold">React</span> &{" "}
          <span className="text-blue-500 font-semibold">Tailwind CSS</span>
        </p>

        {/* Right (dummy links) */}
        <div className="flex items-center gap-4">
          <span className="cursor-pointer hover:text-blue-500 transition">
            Privacy
          </span>
          <span className="cursor-pointer hover:text-blue-500 transition">
            Terms
          </span>
          <span className="cursor-pointer hover:text-blue-500 transition">
            Contact
          </span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
