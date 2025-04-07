
import React, { ReactNode, useEffect } from 'react';
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
  // Add a fade-in animation effect when the component mounts
  useEffect(() => {
    // This creates a nice fade-in effect when navigating between pages
    const mainContent = document.querySelector('main');
    if (mainContent) {
      mainContent.classList.add('opacity-0');
      
      // Force a reflow to ensure the animation works properly
      void mainContent.offsetWidth;
      
      // Add the animation classes
      mainContent.classList.add('animate-fade-in');
      mainContent.classList.remove('opacity-0');
    }
    
    // Clean up animation classes on unmount
    return () => {
      if (mainContent) {
        mainContent.classList.remove('animate-fade-in');
      }
    };
  }, []);

  return (
    <div className="flex h-screen bg-white">
      <Sidebar />
      <div className="flex-1 ml-[200px] flex flex-col">
        <Header title={title} subtitle={subtitle} balance={balance} />
        <main className="flex-1 p-6 overflow-y-auto transition-all duration-300">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
