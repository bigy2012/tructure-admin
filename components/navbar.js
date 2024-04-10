"use client";
import Image from "next/image";
import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    console.log(123);
    setIsOpen(!isOpen);
  };

  return (
    <div>
      
    </div>
  );
}
