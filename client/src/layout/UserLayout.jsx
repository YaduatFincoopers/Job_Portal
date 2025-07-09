import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/landingpage/Footer';

const UserLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
};

export default UserLayout;
