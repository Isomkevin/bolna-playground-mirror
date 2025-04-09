
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Settings, History, Hash, BookOpen, Layers, 
  Mic, Code, LibraryBig, User, ChevronLeft, ChevronRight, Menu
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navItems = [
  { 
    icon: Settings, 
    label: 'Agent Setup', 
    path: '/agent-setup',
  },
  { 
    icon: History, 
    label: 'Call History', 
    path: '/call-history',
  },
  { 
    icon: Hash, 
    label: 'My numbers', 
    path: '/phone-numbers',
  },
  { 
    icon: BookOpen, 
    label: 'Knowledge Base', 
    path: '/knowledge-base',
  },
  { 
    icon: Layers, 
    label: 'Batches', 
    path: '/batches',
  },
  { 
    icon: Mic, 
    label: 'Voice Lab', 
    path: '/voices',
  },
  { 
    icon: Code, 
    label: 'Developers', 
    path: '/developers',
  },
  { 
    icon: LibraryBig, 
    label: 'Providers', 
    path: '/providers',
  },
];

const Sidebar = () => {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  
  const SidebarContent = () => (
    <>
      <div className={cn(
        "p-4 border-b border-afrivoice-border h-[72px] flex items-center",
        collapsed ? "justify-center" : "justify-between"
      )}>
        {!collapsed && (
          <Link to="/" className="flex items-center">
            <AfriVoiceLogo />
          </Link>
        )}
        {collapsed && (
          <Link to="/" className="flex items-center justify-center">
            <AfriVoiceIcon />
          </Link>
        )}
        <Button
          variant="ghost"
          size="icon"
          className={cn("hidden md:flex", collapsed && "mx-auto")}
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </Button>
      </div>
      <nav className="py-4">
        <ul className={cn("space-y-1", collapsed ? "px-2" : "px-3")}>
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  location.pathname === item.path || location.pathname.startsWith(item.path + '/')
                    ? "text-afrivoice-blue bg-afrivoice-lightBlue"
                    : "text-gray-700 hover:bg-gray-100",
                  collapsed && "justify-center px-2"
                )}
                title={collapsed ? item.label : undefined}
              >
                <item.icon className="h-5 w-5 flex-shrink-0" />
                {!collapsed && <span>{item.label}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className={cn(
        "absolute bottom-5 w-full flex",
        collapsed ? "justify-center" : "justify-center"
      )}>
        <button className="p-3 rounded-full border border-afrivoice-border">
          <User className="h-5 w-5 text-gray-700" />
        </button>
      </div>
    </>
  );
  
  return (
    <>
      {/* Mobile Menu */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0">
            <div className="h-screen w-[250px] bg-white">
              <SidebarContent />
            </div>
          </SheetContent>
        </Sheet>
      </div>
      
      {/* Desktop Sidebar */}
      <div className={cn(
        "h-screen border-r border-afrivoice-border fixed left-0 top-0 bg-white z-10 hidden md:block transition-all duration-300",
        collapsed ? "w-[70px]" : "w-[200px]"
      )}>
        <SidebarContent />
      </div>
    </>
  );
};

// AfriVoice Logo SVG component
const AfriVoiceLogo = () => (
  <div className="flex items-center">
    <Phone className="h-8 w-8 text-afrivoice-blue mr-2" />
    <span className="text-lg font-bold text-afrivoice-blue">AfriVoice AI</span>
  </div>
);

// Icon only version for collapsed state
const AfriVoiceIcon = () => (
  <Phone className="h-8 w-8 text-afrivoice-blue" />
);

// For mobile compatibility
const Phone = (props) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    {...props}
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

export default Sidebar;
