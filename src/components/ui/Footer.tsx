import LOGO from "@/assets/img/logo/quintazur-logo.png";
import {
  //  FaFacebook,
  //  FaLinkedinIn
  // FaPhone,
  FaInstagram,
} from "react-icons/fa";
import { NavLink } from "react-router";

export default function Footer() {
  const socials = [
    // {
    //   icon: FaFacebook,
    //   link: "#",
    // },
    {
      icon: FaInstagram,
      link: "https://www.instagram.com/quintazur?igsh=MWJwYWcxanh6dWdx",
    },
    // {
    //   icon: FaLinkedinIn,
    //   link: "#",
    // },
  ];

  return (
    <footer className="bg-[#0033A1]">
      <div className="mx-auto mt-12 flex max-w-7xl flex-col items-start justify-between gap-12 px-4 py-12 lg:mt-24 lg:flex-row lg:items-center lg:gap-0 lg:px-12 lg:py-24">
        <div className="flex items-center gap-4">
          <img src={LOGO} alt="logo" className="w-24 lg:w-32" />
          <NavLink to="/">
            <h1 className="text-left text-3xl font-light text-white lg:text-4xl">
              Nuestro propósito <br />
              <span className="noto-serif-display italic">es acompañarte</span>
            </h1>
          </NavLink>
        </div>

        {/* <NavLink to="/">
          <p className="max-w-sm text-white">
            Espacio para colocar dirección de Quintazur Tlalpan.
          </p>
        </NavLink> */}
        <div className="grid gap-4">
          {/* <div className="flex items-center gap-4 text-sm text-white">
            <a href="tel:+525558125581" target="_blank" rel="noreferrer">
              <FaPhone className="h-4 w-4 rotate-90 text-[#48A0FF]" />
            </a>
            <span>+52 (55) 5812 5581</span>
          </div> */}
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
            <a
              href="https://www.instagram.com/quintazur?igsh=MWJwYWcxanh6dWdx"
              target="_blank"
              rel="noreferrer"
            >
              <span>@quintazur</span>
            </a>
          </div>
        </div>

        <div className="grid gap-4 text-left text-white underline">
          <NavLink to="/legal">Legal</NavLink>
          <NavLink to="/aviso-de-privacidad">Aviso de Privacidad</NavLink>
        </div>
      </div>
    </footer>
  );
}
