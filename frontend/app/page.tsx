"use client"; // Enable client-side interactivity

import { useState } from "react";
import Sidebar from "./components/SideBar";
import Header from "./components/Header";
import MainPage from "./components/MainPage";

export default function Page() {
  const [activeSection, setActiveSection] = useState("Dashboard");

  return (
    <div className="flex h-screen w-full">
      <Sidebar setActiveSection={setActiveSection} activeSection={activeSection}/>
      <div className="flex flex-col w-full gap-5">
        <Header setActiveSection={setActiveSection} activeSection={activeSection} />
        <MainPage activeSection={activeSection} />
      </div>
    </div>
  );
}
