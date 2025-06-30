import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo-ms.png';
import ThemeToggle from './ThemeToggle';

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

            {/* Theme Toggle Switch */}
            <div className="ml-4">
                <ThemeToggle />
            </div>
        </nav>
    );
};

export default Navbar;
