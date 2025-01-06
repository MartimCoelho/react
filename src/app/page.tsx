"use client"
import React, { useState } from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import "./page.module.css";

export default function Home() {
  const [myName] =useState<string>("Martim Ferreira");
  const [projectName] = useState<string>("League of Heroes");
  return (

    <div className="app">
      <Header name={myName} projectName={projectName} />
      <Content />
      <Footer name={myName} projectName={projectName} />
    </div>
  );
};

