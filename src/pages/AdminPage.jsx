// src/pages/AdminPage.jsx
import React, { useState } from 'react';
import Login from './Login';
import AdminDashboard from './AdminDashboard';

const AdminPage = () => {
  const [user, setUser] = useState(null);

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      {user ? (
        <AdminDashboard onLogout={() => setUser(null)} />
      ) : (
        <Login onLogin={(user) => setUser(user)} />
      )}
    </div>
  );
};

export default AdminPage;
