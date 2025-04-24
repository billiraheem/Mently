import React from 'react';
import Sidebar from '../Sidebar/SideBar';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="flex overflow-hidden min-h-screen bg-gray-100">
      <Sidebar className="w-64 flex-shrink-0" />
      <div className="flex-1">
        <main className="flex-1 w-[960px]">{children}</main>
      </div>
    </div>
  );
};
// w-64 fixed inset-y-0 z-10 hidden md:block md:pl-64 flex flex-col
export default DashboardLayout;