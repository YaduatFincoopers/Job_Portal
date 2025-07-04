// src/layouts/AdminLayout.jsx
import React from 'react';
import AdminNavbar from '../components/admin/Navbar';

const AdminLayout = ({ children }) => {
  return (
    <>
      {/* <AdminNavbar /> */}
      <main>{children}</main>
    </>
  );
};

export default AdminLayout;
