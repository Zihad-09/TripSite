// import { useState } from "react";
// import { FaStar } from "react-icons/fa";
// import { IoCallOutline, IoMailOutline } from "react-icons/io5";
// import { NavLink } from "react-router";

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   return (
//     <div>
//       {/* <p>responsiv korte hobe</p> */}
//       <div className="flex justify-between container mx-auto p-2 ">
//         <div className="flex items-center gap-5">
//           <img className="w-[200px]" src={"/src/assets/image/Logo.png"} alt="" />
//          <div className="flex flex-col mt-7">
//             <div className="flex items-center text-[#feb33d] gap-1">
//             <p className="text-gray-600">4.6</p>
//           <FaStar />
//           <FaStar />
//           <FaStar />
//           <FaStar />
//           <FaStar />
//          </div>
//           <p className="text-[#fe653d]">Based on 6,221 reviews</p>
//          </div>
//         </div>

//         <div>
//         <div className="flex border border-gray-200 gap-4 px-15 py-3 bg-[#fe653d] rounded-md">
//           <div className="flex items-center gap-2 btn hover:scale-110 text-lg">
//             <IoMailOutline />
//             <p>CONTACT</p>
//           </div>
//           <div className="flex items-center gap-2 btn hover:scale-110 text-lg">
//             <IoCallOutline />
//             <p>0123456789</p>
//           </div>
//            <div>
//           <label className="input">
//             <svg
//               className="h-[1em] opacity-50"
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 24 24"
//             >
//               <g
//                 strokeLinejoin="round"
//                 strokeLinecap="round"
//                 strokeWidth="2.5"
//                 fill="none"
//                 stroke="currentColor"
//               >
//                 <circle cx="11" cy="11" r="8"></circle>
//                 <path d="m21 21-4.3-4.3"></path>
//               </g>
//             </svg>
//             <input type="search" required placeholder="Search" />
//           </label>
//         </div>
//         </div>
//          <div className="flex gap-10 font-semibold mt-5">
//   {/* Desktop Menu - Hidden on mobile, visible on lg and above */}
//   <div className="hidden lg:flex gap-10 font-semibold">
//     <NavLink className={({isActive})=>isActive?'font-semibold text-lg text-[#fe653d]':'' } to="/">
//       HOME
//     </NavLink>
//     <NavLink className={({isActive})=>isActive?'font-semibold text-lg text-[#fe653d]':'' } to="/browsetours">
//       BROWSE TOURS
//     </NavLink>
//     <NavLink className={({isActive})=>isActive?'font-semibold text-lg text-[#fe653d]':'' } to="/tripessentials">
//       TRIP ESSENTIALS
//     </NavLink>
//     <NavLink className={({isActive})=>isActive?'font-semibold text-lg text-[#fe653d]':'' } to="/ourstory">
//       OUR STORY
//     </NavLink>
//     <NavLink className={({isActive})=>isActive?'font-semibold text-lg text-[#fe653d]':'' } to="/blog">
//       BLOG
//     </NavLink>
//   </div>

//   {/* Mobile Hamburger Menu - Visible only on md and below (hidden on lg) */}
//   <div className="lg:hidden">
//     <div className="relative">
//       {/* Hamburger Button */}
//       <button 
//         onClick={() => setIsOpen(!isOpen)}
//         className="p-2 rounded-md text-gray-600 hover:text-[#fe653d] focus:outline-none transition-all duration-300"
//       >
//         <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           {isOpen ? (
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//           ) : (
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//           )}
//         </svg>
//       </button>

//       {/* Dropdown Menu */}
//       {isOpen && (
//         <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-xl py-3 z-50 border border-gray-200">
//           <NavLink 
//             to="/" 
//             className={({isActive}) => 
//               `block px-6 py-3 text-lg transition-all duration-200 ${
//                 isActive 
//                   ? 'text-[#fe653d] font-semibold bg-orange-50 border-r-4 border-[#fe653d]' 
//                   : 'text-gray-700 hover:bg-gray-100 hover:text-[#fe653d]'
//               }`
//             }
//             onClick={() => setIsOpen(false)}
//           >
//             HOME
//           </NavLink>
          
//           <NavLink 
//             to="/browsetours" 
//             className={({isActive}) => 
//               `block px-6 py-3 text-lg transition-all duration-200 ${
//                 isActive 
//                   ? 'text-[#fe653d] font-semibold bg-orange-50 border-r-4 border-[#fe653d]' 
//                   : 'text-gray-700 hover:bg-gray-100 hover:text-[#fe653d]'
//               }`
//             }
//             onClick={() => setIsOpen(false)}
//           >
//             BROWSE TOURS
//           </NavLink>
          
//           <NavLink 
//             to="/tripessentials" 
//             className={({isActive}) => 
//               `block px-6 py-3 text-lg transition-all duration-200 ${
//                 isActive 
//                   ? 'text-[#fe653d] font-semibold bg-orange-50 border-r-4 border-[#fe653d]' 
//                   : 'text-gray-700 hover:bg-gray-100 hover:text-[#fe653d]'
//               }`
//             }
//             onClick={() => setIsOpen(false)}
//           >
//             TRIP ESSENTIALS
//           </NavLink>
          
//           <NavLink 
//             to="/ourstory" 
//             className={({isActive}) => 
//               `block px-6 py-3 text-lg transition-all duration-200 ${
//                 isActive 
//                   ? 'text-[#fe653d] font-semibold bg-orange-50 border-r-4 border-[#fe653d]' 
//                   : 'text-gray-700 hover:bg-gray-100 hover:text-[#fe653d]'
//               }`
//             }
//             onClick={() => setIsOpen(false)}
//           >
//             OUR STORY
//           </NavLink>
          
//           <NavLink 
//             to="/blog" 
//             className={({isActive}) => 
//               `block px-6 py-3 text-lg transition-all duration-200 ${
//                 isActive 
//                   ? 'text-[#fe653d] font-semibold bg-orange-50 border-r-4 border-[#fe653d]' 
//                   : 'text-gray-700 hover:bg-gray-100 hover:text-[#fe653d]'
//               }`
//             }
//             onClick={() => setIsOpen(false)}
//           >
//             BLOG
//           </NavLink>
//         </div>
//       )}
//     </div>
//   </div>
// </div>
//         </div>
       
//       </div>
//     </div>

  
//   );
// };

// export default Header;

import { useState } from 'react';
import { NavLink } from 'react-router';
import { FaStar } from 'react-icons/fa';
import { IoMailOutline, IoCallOutline } from 'react-icons/io5';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="container mx-auto p-2">
      {/* Desktop Layout */}
      <div className="hidden md:flex justify-between items-center">
        <div className="flex items-center gap-5">
          <img className="w-[200px]" src={"https://i.ibb.co.com/s9VHQ83H/Logo.png"} alt="Logo" />
          <div className="flex flex-col">
            <div className="flex items-center text-[#feb33d] gap-1">
              <p className="text-gray-600">4.6</p>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className="text-[#fe653d]">Based on 6,221 reviews</p>
          </div>
        </div>

        <div className="flex flex-col items-end">
          <div className="flex gap-4 mb-4">
            <div className="flex border border-gray-200 gap-4 px-6 py-3 bg-[#fe653d] rounded-md">
              <div className="flex items-center gap-2 btn hover:scale-110 text-lg">
                <IoMailOutline />
                <p>CONTACT</p>
              </div>
              <div className="flex items-center gap-2 btn hover:scale-110 text-lg">
                <IoCallOutline />
                <p>0123456789</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <label className="input">
                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                  </g>
                </svg>
                <input type="search" required placeholder="Search" />
              </label>
            </div>
          </div>
          
          <div className="flex gap-10 font-semibold">
            <NavLink className={({isActive}) => isActive ? 'font-semibold text-lg text-[#fe653d]' : ''} to="/">
              HOME
            </NavLink>
            <NavLink className={({isActive}) => isActive ? 'font-semibold text-lg text-[#fe653d]' : ''} to="/browsetours">
              BROWSE TOURS
            </NavLink>
            <NavLink className={({isActive}) => isActive ? 'font-semibold text-lg text-[#fe653d]' : ''} to="/tripessentials">
              TRIP ESSENTIALS
            </NavLink>
            <NavLink className={({isActive}) => isActive ? 'font-semibold text-lg text-[#fe653d]' : ''} to="/ourstory">
              OUR STORY
            </NavLink>
            <NavLink className={({isActive}) => isActive ? 'font-semibold text-lg text-[#fe653d]' : ''} to="/blog">
              BLOG
            </NavLink>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden">
        {/* Top Row - Logo at center top */}
        <div className="flex justify-center mb-4">
          <img className="w-[150px]" src={"/src/assets/image/Logo.png"} alt="Logo" />
        </div>

        {/* Rating at center below logo */}
        <div className="flex justify-center mb-4">
          <div className="flex flex-col items-center">
            <div className="flex items-center text-[#feb33d] gap-1">
              <p className="text-gray-600">4.6</p>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className="text-[#fe653d] text-sm">Based on 6,221 reviews</p>
          </div>
        </div>

        {/* Contact buttons at center bottom */}
        <div className="flex justify-center mb-4">
          <div className="flex gap-2">
            <div className="flex items-center gap-2 px-4 py-2 bg-[#fe653d] rounded-md text-white">
              <IoMailOutline />
              <p>CONTACT</p>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-[#fe653d] rounded-md text-white">
              <IoCallOutline />
              <p>0123456789</p>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex justify-center mb-4">
          <label className="input w-full max-w-xs">
            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input type="search" required placeholder="Search" className="w-full" />
          </label>
        </div>

        {/* Hamburger Menu at top right corner */}
        <div className="absolute top-4 right-4">
          <div className="relative">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-600 hover:text-[#fe653d] focus:outline-none transition-all duration-300 bg-white shadow-md"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-xl py-3 z-50 border border-gray-200">
                <NavLink 
                  to="/" 
                  className={({isActive}) => 
                    `block px-6 py-3 text-lg transition-all duration-200 ${
                      isActive 
                        ? 'text-[#fe653d] font-semibold bg-orange-50 border-r-4 border-[#fe653d]' 
                        : 'text-gray-700 hover:bg-gray-100 hover:text-[#fe653d]'
                    }`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  HOME
                </NavLink>
                
                <NavLink 
                  to="/browsetours" 
                  className={({isActive}) => 
                    `block px-6 py-3 text-lg transition-all duration-200 ${
                      isActive 
                        ? 'text-[#fe653d] font-semibold bg-orange-50 border-r-4 border-[#fe653d]' 
                        : 'text-gray-700 hover:bg-gray-100 hover:text-[#fe653d]'
                    }`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  BROWSE TOURS
                </NavLink>
                
                <NavLink 
                  to="/tripessentials" 
                  className={({isActive}) => 
                    `block px-6 py-3 text-lg transition-all duration-200 ${
                      isActive 
                        ? 'text-[#fe653d] font-semibold bg-orange-50 border-r-4 border-[#fe653d]' 
                        : 'text-gray-700 hover:bg-gray-100 hover:text-[#fe653d]'
                    }`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  TRIP ESSENTIALS
                </NavLink>
                
                <NavLink 
                  to="/ourstory" 
                  className={({isActive}) => 
                    `block px-6 py-3 text-lg transition-all duration-200 ${
                      isActive 
                        ? 'text-[#fe653d] font-semibold bg-orange-50 border-r-4 border-[#fe653d]' 
                        : 'text-gray-700 hover:bg-gray-100 hover:text-[#fe653d]'
                    }`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  OUR STORY
                </NavLink>
                
                <NavLink 
                  to="/blog" 
                  className={({isActive}) => 
                    `block px-6 py-3 text-lg transition-all duration-200 ${
                      isActive 
                        ? 'text-[#fe653d] font-semibold bg-orange-50 border-r-4 border-[#fe653d]' 
                        : 'text-gray-700 hover:bg-gray-100 hover:text-[#fe653d]'
                    }`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  BLOG
                </NavLink>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;