import React from "react";

const Layout = ({ children, className = "" }) => {
  return (
    <div className={`min-h-screen flex flex-col ${className}`}>
      <header className="bg-blue-600 text-white p-4 text-xl font-semibold">
        My App
      </header>
      <main className="flex-1 p-6">{children}</main>
      <footer className="bg-gray-200 text-center py-4 text-sm">
        © {new Date().getFullYear()} My App. All rights reserved.
      </footer>
    </div>
  );
};

export default Layout;
