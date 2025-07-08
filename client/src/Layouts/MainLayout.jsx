// src/layouts/MainLayout.jsx
import React from 'react';
import Navbar from '../components/admin/Navbar';
import Footer from '../components/pages/Footer';

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
