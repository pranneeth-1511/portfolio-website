import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-800 py-8 border-t border-gray-200 dark:border-gray-700">
      <div className="container-padding mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#home" className="text-2xl font-bold gradient-text">
              Pranneeth D K
            </a>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Creating beautiful digital experiences.
            </p>
          </div>
          <div className="text-center md:text-right">
            <p className="text-gray-600 dark:text-gray-400">
              © 2023 - {currentYear} Pranneeth D K. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;