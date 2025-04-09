
import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

interface DashboardLayoutProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  balance?: string;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ 
  children,
  title,
  subtitle,
  balance
}) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar takes up the left side */}
      <Sidebar />
      
      {/* Main content area with padding to account for sidebar width on desktop */}
      <div className="md:ml-[200px] transition-all duration-300">
        <Header title={title} subtitle={subtitle} balance={balance} />
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
