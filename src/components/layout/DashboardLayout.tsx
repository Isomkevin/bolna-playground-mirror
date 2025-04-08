
import React, { ReactNode, useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

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
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    
    // Close mobile menu when screen size changes
    const handleResize = () => {
      if (window.innerWidth > 768 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    
    // Clean up animation classes on unmount
    return () => {
      if (mainContent) {
        mainContent.classList.remove('animate-fade-in');
      }
      window.removeEventListener('resize', handleResize);
    };
  }, [mobileMenuOpen]);

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="flex h-screen bg-white overflow-hidden">
      {/* Mobile sidebar backdrop */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
      
      {/* Sidebar - changes based on collapsed state and screen size */}
      <div 
        className={cn(
          "transition-all duration-300 ease-in-out z-30",
          "fixed md:static", // Fixed on mobile, static on desktop
          mobileMenuOpen ? "left-0" : "-left-[250px]", // Off-canvas on mobile when closed
          "md:left-0", // Always visible on desktop
          sidebarCollapsed ? "md:w-[70px]" : "md:w-[200px]", // Collapsed or expanded on desktop
          "w-[200px]" // Default width on mobile
        )}
      >
        <Sidebar collapsed={sidebarCollapsed} onToggle={toggleSidebar} />
      </div>
      
      {/* Main content area */}
      <div 
        className={cn(
          "flex-1 flex flex-col transition-all duration-300 ease-in-out",
          sidebarCollapsed ? "md:ml-[70px]" : "md:ml-[200px]",
          "ml-0" // No margin on mobile
        )}
      >
        <Header 
          title={title} 
          subtitle={subtitle} 
          balance={balance} 
          onMobileMenuToggle={toggleMobileMenu}
          showMobileMenuButton
        />
        <main className="flex-1 p-4 md:p-6 overflow-y-auto transition-all duration-300">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
