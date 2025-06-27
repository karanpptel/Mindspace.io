import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo-ms.png';
import ThemeToggle from './ThemeToggle'; // ✅ Import the custom toggle

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center p-4 bg-blue-900 text-white">
            {/* Logo + Title */}
            <div className='flex items-center space-x-2'>
                <img src={logo} alt="Mindspace logo" className='h-10 w-10 rounded-full' />
                <span className='text-2xl font-bold dark:text-white'>Mindspace</span>
            </div>

            {/* Navigation Links */}
            <ul className='hidden md:flex space-x-7 font-semibold text-lg'>
                <li><Link to="/" className="hover:text-red-500 text-white font-bold">Home</Link></li>
                <li><Link to="/dashboard" className="hover:text-red-500 text-white font-bold">Dashboard</Link></li>
                <li><Link to="/journal" className="hover:text-red-500 text-white font-bold">Journal</Link></li>
                <li><Link to="/chart-tracker" className="hover:text-red-500 text-white font-bold">Visualize</Link></li>
                <li><Link to="/calendar" className="hover:text-red-500 text-white font-bold">Calendar</Link></li>
            </ul>

            {/* ✅ ShadCN Theme Toggle Switch */}
            <div className="ml-4">
                <ThemeToggle />
            </div>
        </nav>
    );
};

export default Navbar;




// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom'; // ✅ Import Link
// import logo from '../assets/logo-ms.png';

// const Navbar = () => {
//     const [darkMode, setDarkMode] = useState(() =>
//         localStorage.getItem('theme') === 'dark'
//     );

//     useEffect(() => {
//         if (darkMode) {
//             document.documentElement.classList.add("dark");
//             localStorage.setItem("theme", "dark");
//         } else {
//             document.documentElement.classList.remove("dark");
//             localStorage.setItem("theme", "light");
//         }
//     }, [darkMode]);

//     return (
//         <nav className="flex justify-between items-center p-4 bg-blue-900 text-white">
//             {/* Logo + Title */}
//             <div className='flex items-center space-x-2'>
//                 <img src={logo} alt="Mindspace logo" className='h-10 w-10 rounded-full' />
//                 <span className='text-2xl font-bold dark:text-white'>Mindspace</span>
//             </div>

//             {/* Navigation Links */}
//             <ul className='hidden md:flex space-x-7 font-semibold text-lg'>
//                  <li>
//                     <Link to="/" className="hover:text-red-500 text-white font-bold">Home</Link>
//                 </li>
//                 <li>
//                     <Link to="/dashboard" className="hover:text-red-500 text-white font-bold">Dashboard</Link>
//                 </li>
//                 <li>
//                     <Link to="/journal" className="hover:text-red-500 text-white font-bold">Journal</Link>
//                 </li>
//                 <li>
//                     <Link to="/chart-tracker" className="hover:text-red-500 text-white font-bold">Visualize</Link>
//                 </li>
                
//                 <li>
//                     <Link to="/calendar" className="hover:text-red-500 text-white font-bold">Calendar</Link>
//                 </li>
//             </ul>

//             {/* Dark Mode Toggle */}
//             <button
//                 onClick={() => setDarkMode(!darkMode)}
//                 className='ml-4 bg-gray-200 dark:bg-gray-700 p-2 rounded-full transition'
//             >
//                 {darkMode ? "🌙" : "☀️"}
//             </button>
//         </nav>
//     );
// };

// export default Navbar;
