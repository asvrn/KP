import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? "text-red-500 border-b-2 border-red-500" : "text-gray-500 hover:text-gray-700";
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <img src="/images/LOGO PT SEMEN PADANG HITAM.png" alt="Logo" className="h-8 w-auto"/>
            <div className="ml-6 flex space-x-8">
              <Link to="/home" className={`${isActive('/home')} px-3 py-2`}>Dashboard</Link>
              <Link to="/absensi" className={`${isActive('/absensi')} px-3 py-2`}>Absensi</Link>
              <Link to="/logbook" className={`${isActive('/logbook')} px-3 py-2`}>Logbook</Link>
              <Link to="/laporan" className={`${isActive('/laporan')} px-3 py-2`}>Laporan</Link>
            </div>
          </div>
          <div className="flex items-center">
            <Link 
              to="/profil"
              className="flex items-center group hover:bg-gray-50 rounded-lg px-3 py-2 transition-colors"
            >
              <div className="flex flex-col items-end mr-3">
                <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">Rifqi Gacor</span>
                <span className="text-xs text-gray-500 group-hover:text-gray-700">Internship</span>
              </div>
              <img src="/images/avatar.png" alt="Profile" className="h-9 w-8 rounded-full"/>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;