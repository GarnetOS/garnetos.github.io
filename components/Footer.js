import React from "react";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-8">
      <div className="px-4 container max-w-screen-xl mx-auto">
        <div className="grid grid-cols-4">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <hr className="border-t-1 border-gray-600 my-4" />
        <div className="flex items-center justify-between">
          <img src="/assets/logo.png" alt="Logo" className="h-20 w-auto" />
          <LanguageSwitcher short={false} />
        </div>
      </div>
    </footer>
  );
}
