"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

import Logo from "@/assets/img/logo/quintazur-logo.png";

import { MdMenu } from "react-icons/md";
import { NavLink } from "react-router";
import { Button } from "./button";
import { NavigationMenuItem, NavigationMenuList } from "./navigation-menu";

export default function MenuMobile() {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (!section) return;
    section.scrollIntoView({ behavior: "smooth" });
  };

  const links: { title: string; id: string; href: string }[] = [
    {
      title: "Nosotros",
      id: "nosotros",
      href: "/#nosotros",
    },
    {
      title: "Cuidados",
      id: "cuidados",
      href: "/#cuidados",
    },
    {
      title: "Comunidades",
      id: "comunidades",
      href: "/#comunidades",
    },
    {
      title: "Experiencia",
      id: "experiencia",
      href: "/#experiencia",
    },
    {
      title: "Contacto",
      id: "contacto",
      href: "/#contacto",
    },
  ];

  return (
    <Sheet>
      <SheetTrigger className="flex lg:hidden" asChild>
        <Button
          variant={"ghost"}
          size={"icon"}
          className="rounded-md bg-[#0033A1] text-white"
          aria-label="Open menu"
        >
          <MdMenu className="h-6 w-6" />
        </Button>
      </SheetTrigger>

      <SheetContent side={"left"}>
        <nav className="pl-4" id="mobile-menu-2">
          <ul className="list-inside space-y-4 pl-4">
            <NavLink onClick={() => scrollToSection("inicio")} to="/">
              <SheetClose>
                <img src={Logo} className="h-16 w-auto" alt="Logo" />
              </SheetClose>
            </NavLink>

            <NavigationMenuList className="flex w-full flex-col space-y-4">
              {links.map((link) => (
                <NavigationMenuItem className="w-full" key={link.title}>
                  <NavLink
                    onClick={() => scrollToSection(link.id)}
                    to={link.href}
                  >
                    <SheetClose className="text-xl">{link.title}</SheetClose>
                  </NavLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
