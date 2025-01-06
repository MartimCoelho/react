"use client"
import React from "react";
import "../page.module.css";
import Link from "next/link";
const Header: React.FC<{ name: string; projectName: string }> = ({ name, projectName }) => {
  return (
    <header className="header">
      <h1>{projectName}</h1>
      <h3>Desenvolvido por {name}</h3>
      <nav>
        <Link href="/" className='nav'>Home</Link>
        <Link href="/dashboard" className='nav'>Dashboard</Link>
      </nav>
    </header>
  );
};
export default Header;

