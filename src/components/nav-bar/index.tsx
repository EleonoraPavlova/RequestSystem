import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@heroui/react";
import { ReactElement, useMemo, useState } from "react";
import { NavLink } from "react-router-dom";
import { useT } from "talkr";

import Logo from "../logo";

import ThemeToggle from "@/components/theme-toggle";
import LanguageSwitcher from "@/components/lang-switcher";
import { getNavBarItems } from "@/components/nav-bar/nav-bar.const";

const NavbarHeroui = (): ReactElement => {
  const { T: t } = useT();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = useMemo(() => getNavBarItems(t), [t]);

  const customClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "text-secondary font-semibold underline underline-offset-4 decoration-secondary"
      : "text-foreground/80 hover:text-foreground dark:text-foreground/90 dark:hover:text-white";

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      isBordered
      className="w-full bg-inherit text-inherit border border-gray-500 rounded-md justify-center mb-8"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Logo />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-[20px]" justify="center">
        {navItems.map((item) => (
          <NavbarItem key={item.path}>
            <NavLink to={item.path} className={customClass}>
              {item.label}
            </NavLink>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarMenu className="bg-background/50 backdrop-blur-md mt-6 border-t border-gray-500">
        {navItems.map((item, index) => (
          <NavbarMenuItem key={`${item.label}-${index}`} className="flex justify-center">
            <NavLink
              to={item.path}
              className={(props) => `${customClass(props)} w-fit py-1 transition-all`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </NavLink>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>

      <div className="flex gap-4 items-center ml-7">
        <ThemeToggle />
        <LanguageSwitcher />
      </div>
    </Navbar>
  );
};

export default NavbarHeroui;
