import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/react";
import { ReactElement } from "react";
import { NavLink } from "react-router-dom";

import Logo from "../logo";

import { PATH } from "@/shared/enums";
import ThemeToggle from "@/components/theme-toggle";
import LanguageSwitcher from "@/components/lang-switcher";

const NavbarHeroui = (): ReactElement => {
  const customClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "text-secondary font-semibold underline underline-offset-4 decoration-secondary"
      : "text-foreground/80 hover:text-foreground dark:text-foreground/90 dark:hover:text-white";

  return (
    <Navbar className="w-full bg-inherit text-inherit border border-gray-500 rounded-md justify-center mb-8">
      <NavbarBrand>
        <Logo />
      </NavbarBrand>
      <NavbarContent className="sm:flex gap-[20px]" justify="center">
        <NavbarItem>
          <NavLink to={PATH.USER} className={customClass}>
            User
          </NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink to={PATH.MANAGER} className={customClass}>
            Manager
          </NavLink>
        </NavbarItem>
      </NavbarContent>
      <div className="flex gap-4 items-center ml-7">
        <ThemeToggle />
        <LanguageSwitcher />
      </div>
    </Navbar>
  );
};

export default NavbarHeroui;
