import { useState } from 'react';

export function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="header bg-black shadow-md sticky top-0 z-50">
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">

        <div className="logo-container flex items-center gap-2">
          <img
            className="w-10 h-10 object-cover rounded-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtOvjazQo3iSjjvTzg4pOV0bJnozGGyUMylw&s"
            alt="logo"
          />
          <span className="text-xl font-bold text-white">Foodiez</span>
        </div>


        <div className="lg:hidden">
          <button onClick={() => setIsNavOpen(!isNavOpen)} className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isNavOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        <ul className="hidden lg:flex gap-6 text-gray-300 font-medium text-md">
          <li className="hover:text-white cursor-pointer transition-colors">Home</li>
          <li className="hover:text-white cursor-pointer transition-colors">About Us</li>
          <li className="hover:text-white cursor-pointer transition-colors">Contact Us</li>
          <li className="hover:text-white cursor-pointer transition-colors">Cart</li>
        </ul>
      </div>


      {isNavOpen && (
        <div className="lg:hidden px-6 pb-4">
          <ul className="flex flex-col gap-4 text-gray-300 font-medium">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Contact Us</li>
            <li className="hover:text-white cursor-pointer">Cart</li>
          </ul>
        </div>
      )}
    </div>
  );
}
