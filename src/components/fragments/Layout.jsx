import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-50 scrollbar-hide">
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;