import React, { useState } from 'react';
import AdminLogin from './AdminLogin';
import AdminDashboard from './AdminDashboard';
import IITAdminLogin from './IITAdminLogin';
import AdminPanel from './AdminPanel';

const AppContainer = () => {
  const [currentView, setCurrentView] = useState('admin-login');

  const renderContent = () => {
    switch (currentView) {
      case 'admin-login':
        return (
          <AdminLogin
            onLoginSuccess={() => setCurrentView('admin-dashboard')}
          />
        );
      case 'admin-dashboard':
        return (
          <AdminDashboard
            onSelectIIT={() => setCurrentView('iit-login')}
          />
        );
      case 'iit-login':
        return (
          <IITAdminLogin
            onLoginSuccess={() => setCurrentView('iit-admin-panel')}
            onBack={() => setCurrentView('admin-dashboard')}
          />
        );
      case 'iit-admin-panel':
        return (
          <AdminPanel
            onLogout={() => setCurrentView('iit-login')}
          />
        );
      default:
        return <AdminLogin />;
    }
  };

  return (
    <div className="min-h-screen">
      {renderContent()}
    </div>
  );
};

export default AppContainer;