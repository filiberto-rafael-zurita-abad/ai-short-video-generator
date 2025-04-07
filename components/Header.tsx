import React from "react";
import { UserButton } from "@clerk/nextjs";

const Header = () => {
  return (
    <header className="bg-gray-100 p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Dashboard Header</h1>
          <UserButton />
        
      </div>
    </header>
  );
};

export default Header;
