import React from 'react';
import { Link } from "react-router-dom";
import "./NavBar.css"

export default function NavBar() {
  return (
    <div className="nav-text-size nav-title navbar-title px-4 flex justify-between items-center">
      <Link to={"/"} className="rounded-lg transition-all duration-200 hover:bg-gray-100 hover:text-gray-900">
        <h2>Captain's Log</h2>
      </Link>

      <div className="hidden md:flex md:items-center md:justify-end md:gap-5">
        <Link to="/logs" className="logs inline-block rounded-lg px-2 py-1 text-white-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900">Logs</Link>
        <Link to="/logs/new" className="new inline-block rounded-lg px-2 py-1 text-white-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900">New Log</Link>
      </div>
    </div>
  );
}
