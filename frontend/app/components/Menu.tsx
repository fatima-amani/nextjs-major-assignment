"use client";

import { useState, useEffect } from "react";
import MenuCategoryCard from "./MenuCategoryCard";
import MenuTable from "./MenuTable";

export default function Menu() {
  const [menuData, setMenuData] = useState([]);
  const [activeTab, setActiveTab] = useState("Normal Menu");

  useEffect(() => {
    fetch("http://localhost:3001/menu") 
      .then((res) => res.json())
      .then((data) => setMenuData(data))
      .catch((err) => console.error("Error fetching menu data:", err));
  }, []);

  const categories = [
    { name: "All", count: 116, icon: "menu-all.png" },
    { name: "Pizza", count: 20, icon: "menu-pizza.png" },
    { name: "Burger", count: 15, icon: "menu-burger.png" },
    { name: "Chicken", count: 10, icon: "menu-chicken.png" },
    { name: "Bakery", count: 18, icon: "menu-bakery.png" },
    { name: "Beverage", count: 12, icon: "menu-beverage.png" },
    { name: "Seafood", count: 16, icon: "menu-seafood.png" },
  ];

  return (
    <div className="p-5 bg-[#1E1E1E] text-white">

      <div className="flex justify-between mb-4">
        <div className="text-white .font-poppins text-[1.5625rem] font-medium leading-[2.34375rem] text-left">
          Categories
        </div>
        <button className="text-[#333333] w-[12.268rem] h-[3.26125rem] px-[1.383rem] py-[0.88rem] rounded-[0.467rem] bg-[#FAC1D9] font-poppins text-[1rem] font-medium leading-[1.5rem] text-center">
          Add New Category
        </button>
      </div>

      {/* Categories Section */}
      <div className="flex items-center gap-4 overflow-x-auto">
        {categories.map((category, index) => (
          <MenuCategoryCard key={index} {...category} />
        ))}
      </div>

      {/* Tabs for menu sections */}
      <div className="mt-10 w-[17.9375rem] h-[2.375rem] font-poppins text-[1.5625rem] font-medium leading-[2.34375rem] text-left text-white">
        Special menu all items
      </div>
      <div className="flex gap-4 mt-6">
        {["Normal Menu", "Special Deals", "New Year Special", "Deserts and Drinks"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-lg font-poppins text-[1rem] font-medium leading-[1.5rem] text-left ${
              activeTab === tab ? "bg-[#FAC1D9] text-black" : "bg-transparent text-white"
            }`}
          >
            {tab}
          </button>
        ))}
        <button className="ml-auto px-4 py-2 bg-[#FAC1D9] rounded-lg font-poppins text-[1rem] font-medium leading-[1.5rem] text-center text-[#333333]">
          Add Menu Item
        </button>
      </div>

      {/* Menu Table */}
      <MenuTable data={menuData} />
    </div>
  );
}
