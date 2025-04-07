
import React, { ReactNode } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

interface DashboardLayoutProps {
  children: ReactNode;
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
    <div className="flex h-screen bg-white">
      <Sidebar />
      <div className="flex-1 ml-[200px] flex flex-col">
        <Header title={title} subtitle={subtitle} balance={balance} />
        <main className="flex-1 p-6 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
