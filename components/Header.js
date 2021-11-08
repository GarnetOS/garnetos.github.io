import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "/public/assets/logo.svg";

export default function Header() {
  return (
    <header>
      <Image src={Logo} alt="Logo" />
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
