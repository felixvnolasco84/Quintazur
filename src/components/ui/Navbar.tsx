import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { NavLink } from "react-router";
import { Button } from "./button";
import MenuMobile from "./MenuMobile";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Logo from '@/assets/img/logo/Nuevo_Logo_Quintazur_Azul.png'
import { ChevronDown } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Navbar() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (!section) return;
    section.scrollIntoView({ behavior: "smooth" });
  };

  const epiLinks: { title: string; id: string; href: string }[] = [
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
    <div className="sticky top-0 z-40 grid">
      <div className="bg-[#0033A1]  py-2 lg:py-4 px-4 sm:px-6 lg:px-8 ">
        
        <div className="grid grid-cols-2 items-center text-white max-w-7xl mx-auto">
          <p className="text-base lg:text-2xl italic font-semibold text-left">
            Próxima apertura: <br /> Abril 2026
          </p>        
          {/* Whatsapp button */}
          <NavLink to="https://wa.me/5622008895" target="_blank" className={"text-right"}>
              <Button variant={"ghost"} className=" bg-[#F8FCEF] text-[#0033A1] text-sm lg:text-lg">
                <FaWhatsapp className="h-6 w-6" />
                Contáctanos
              </Button> 
            </NavLink>
        </div>        
          
      </div>
      <header className="bg-white px-4 py-4 sm:px-6 lg:px-8 shadow-lg">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <NavLink onClick={() => scrollToSection("inicio")} to="/">
            <img src={Logo} className="h-20 w-auto" alt="Logo" />
          </NavLink>
          <NavigationMenu>
            <NavigationMenuList className="hidden lg:flex">
              {epiLinks.map((link) => (
                <NavigationMenuItem key={link.title}>
                  <NavLink
                    onClick={() => scrollToSection(link.id)}
                    to={link.href}
                    className={"flex items-center"}
                  >
                    <Button
                      className="text-lg font-normal pr-1"
                      size={"sm"}
                      variant={"ghost"}
                    >
                      {link.title}
                    </Button>

                    <ChevronDown className="h-4 w-4 text-[#0033a1]" />
                  </NavLink>
                </NavigationMenuItem>
              ))}

            </NavigationMenuList>

            {/* <div>
          <SearchCommand />
          <SearchInput />
        </div> */}
            <MenuMobile />
          </NavigationMenu>
        </div>
      </header>
    </div>
  );
}
