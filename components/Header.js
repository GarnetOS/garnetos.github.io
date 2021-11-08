import React from "react";
import Image from "next/image";
import Logo from "/public/assets/logo.svg";

export default function Header() {
  return (
    <header>
      <Image src={Logo} alt="Logo" />
    </header>
  );
}
