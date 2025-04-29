"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

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
      title: "Misión",
      id: "mision",
      href: "/#mision",
    },
    {
      title: "Nuestras empresas",
      id: "companias",
      href: "/#companias",
    },

    {
      title: "Oficinas",
      id: "oficinas",
      href: "/#oficinas",
    },
  ];


  return (
    <Sheet>
      <SheetTrigger className="flex lg:hidden" asChild>
        <Button
          variant={"ghost"}
          size={"icon"}
          className="rounded-md bg-[#00B4E9]"
          aria-label="Open menu"
        >
          <MdMenu className="h-6 w-6" />
        </Button>
      </SheetTrigger>

      <SheetContent side={"left"}>
        <nav className="pl-8" id="mobile-menu-2">
          <ul className="list-inside space-y-4 pl-8">
            <NavLink onClick={() => scrollToSection("inicio")} to="/">
              <h1 className="text-3xl font-semibold">EPI GROUP</h1>
            </NavLink>

            <NavigationMenuList className="flex w-full flex-col">
              {links.map((link) => (
                <NavigationMenuItem className="w-full" key={link.title}>
                  <NavLink
                    onClick={() => scrollToSection(link.id)}
                    to={link.href}
                  >
                    <SheetClose className="text-lg">{link.title}</SheetClose>
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
