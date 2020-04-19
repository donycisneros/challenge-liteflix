import React from "react";
import NavigationPrimary from "./NavigationPrimary/NavigationPrimary";
import NavigationSecondary from "./NavigationSecondary/NavigationSecondary";
import { useScroll } from "../../hooks/useScroll";

const Header = () => {
  useScroll(".nav-header", "scroll");

  return (
    <header className="nav-header">
      <NavigationPrimary />
      <NavigationSecondary />
    </header>
  );
};

export default Header;
