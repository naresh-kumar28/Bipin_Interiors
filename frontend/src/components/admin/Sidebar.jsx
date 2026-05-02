import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useAdmin } from '../../context/AdminContext';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const { logout } = useAuth();
  const { pendingRequests } = useAdmin();
  const location = useLocation();

  const menuItems = [
    { name: 'Dashboard', icon: 'lucify:layout-dashboard', path: '/admin/dashboard' },
    { name: 'Enquiries', icon: 'lucify:message-circle', path: '/admin/enquiries', badge: pendingRequests > 0 ? pendingRequests.toString() : null },
    { name: 'Bookings', icon: 'lucify:calendar', path: '/admin/bookings' },
    { name: 'Services', icon: 'lucify:layers', path: '/admin/services' },
    { name: 'Portfolio', icon: 'lucify:image', path: '/admin/portfolio' },
    { name: 'Categories', icon: 'lucify:grid-3x3', path: '/admin/categories' },
    { name: 'Reviews', icon: 'lucify:star', path: '/admin/reviews' },
    { name: 'Customers', icon: 'lucify:users', path: '/admin/customers' },
  ];

  const systemItems = [
    { name: 'Pages', icon: 'lucify:file-text', path: '/admin/pages' },
    { name: 'Website Settings', icon: 'lucify:settings', path: '/admin/settings' },
    { name: 'Users / Admins', icon: 'lucify:shield', path: '/admin/users' },
    { name: 'Reports', icon: 'lucify:bar-chart-2', path: '/admin/reports' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-card border-r border-border flex flex-col flex-shrink-0 h-screen transition-transform duration-300 lg:sticky lg:translate-x-0
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="h-16 flex items-center px-6 border-b border-border justify-between">
          <Link to="/admin/dashboard" className="flex items-center gap-2 text-primary" onClick={() => { if (window.innerWidth < 1024) toggleSidebar(); }}>
            <iconify-icon icon="lucide:sofa" class="text-2xl"></iconify-icon>
            <span className="font-heading font-bold text-lg text-foreground tracking-wide">Bipin Decor</span>
          </Link>
          <button className="lg:hidden text-muted-foreground hover:text-foreground" onClick={toggleSidebar}>
            <iconify-icon icon="lucide:x" class="text-xl"></iconify-icon>
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => { if (window.innerWidth < 1024) toggleSidebar(); }}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg font-medium transition-colors ${
                isActive(item.path)
                  ? 'bg-primary/10 text-primary border-l-4 border-primary'
                  : 'text-muted-foreground hover:bg-muted hover:text-foreground'
              }`}
            >
              <iconify-icon icon={item.icon.replace('lucify', 'lucide')} class="text-lg"></iconify-icon>
              {item.name}
              {item.badge && (
                <span className="ml-auto bg-primary text-primary-foreground text-[10px] font-bold px-2 py-0.5 rounded-full">
                  {item.badge}
                </span>
              )}
            </Link>
          ))}
          
          <div className="pt-4 pb-2">
            <p className="px-3 text-xs font-bold uppercase tracking-wider text-muted-foreground">System</p>
          </div>
          
          {systemItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => { if (window.innerWidth < 1024) toggleSidebar(); }}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg font-medium transition-colors ${
                isActive(item.path)
                  ? 'bg-primary/10 text-primary border-l-4 border-primary'
                  : 'text-muted-foreground hover:bg-muted hover:text-foreground'
              }`}
            >
              <iconify-icon icon={item.icon.replace('lucify', 'lucide')} class="text-lg"></iconify-icon>
              {item.name}
            </Link>
          ))}
        </div>
        
        <div className="p-4 border-t border-border">
          <button 
            onClick={logout}
            className="flex items-center gap-3 px-3 py-2.5 w-full text-muted-foreground hover:bg-destructive/10 hover:text-destructive rounded-lg font-medium transition-colors"
          >
            <iconify-icon icon="lucide:log-out" class="text-lg"></iconify-icon>
            Logout
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
