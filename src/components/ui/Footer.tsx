import LOGO from "@/assets/img/logo/quintazur-logo.png";
import { FaFacebook, FaPhone, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { NavLink } from "react-router";

export default function Footer() {
  const socials = [
    {
      icon: FaFacebook,
      link: "#",
    },
    {
      icon: FaInstagram,
      link: "#",
    },
    {
      icon: FaLinkedinIn,
      link: "#",
    },
  ];

  return (
    <footer className="bg-[#0033A1]">
      <div className="mx-auto mt-12 flex max-w-[1800px] flex-col items-center justify-between gap-12 px-12 py-12 lg:mt-24 lg:flex-row lg:gap-0 lg:py-24">
        <div className="flex items-center gap-4">
          <img src={LOGO} alt="logo" className="w-32" />
          <NavLink to="/">
            <h1 className="text-3xl font-light text-white lg:text-4xl">
              Nuestro propósito <br />
              <span className="noto-serif-display italic">es acompañarte</span>
            </h1>
          </NavLink>
        </div>

        <NavLink to="/">
          <p className="max-w-sm text-white">
            Espacio para colocar dirección de Quintazur Tlalpan.
          </p>
        </NavLink>
        <div className="grid gap-4">
          <div className="flex items-center gap-4 text-sm text-white">
            <a href="tel:+52-55-5812-5581" target="_blank" rel="noreferrer">
              <FaPhone className="h-4 w-4 rotate-90 text-[#48A0FF]" />
            </a>
            <span>+52-55-5812-5581</span>
          </div>
          <div className="flex gap-4 text-white">
            <ul className="flex gap-4">
              {socials.map((social, index) => (
                <li key={index}>
                  <a href={social.link} target="_blank" rel="noreferrer">
                    <social.icon className="h-6 w-6 text-[#48A0FF]" />
                  </a>
                </li>
              ))}
            </ul>
            <span>@quintazur</span>
          </div>
        </div>

        <div className="grid gap-4 text-left text-white underline">
          <NavLink to="/#contacto">Legal</NavLink>

          <NavLink to="/#nosotros">Aviso de Privacidad</NavLink>
        </div>
      </div>
    </footer>
  );
}
