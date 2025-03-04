import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center py-3 px-4 text-sm sm:text-base mt-auto">
      <p>
        &copy; {new Date().getFullYear()} Currency Converter. All rights
        reserved.
      </p>
    </footer>
  );
};

export default Footer;
