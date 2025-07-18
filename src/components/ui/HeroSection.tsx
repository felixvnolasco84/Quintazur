// import MuxPlayer from "@mux/mux-player-react";
import { NavLink } from "react-router";
import { Button } from "./button";

export default function HeroSection() {
  return (
    <div id="inicio" className="relative h-[800px] w-full">
      {/* Background Image - Desktop & Mobile */}
      <div className="absolute inset-0 z-0">
        <div className="relative h-full w-full">

          {/* <MuxPlayer
            playbackId="MCubJngarGxgv7rIXbQT422BKAlMwQyAw2wMznuww8Q"
            metadata={{
              video_title: "Residencia Quintazur Tlalpan",
            }}
            muted={true}
            autoPlay={true}
            loop={true}
            className="h-full w-full object-cover"
          /> */}
          <video poster="https://files.edgestore.dev/evsl88oz3bs775wf/publicFiles/_public/a69e817b-b95b-476d-8669-223d0ad58931.png" autoPlay loop muted className="h-full w-full object-cover">
            <source src="https://f5z6vohtd8.ufs.sh/f/9xW4M4QjXVSm3vZzKAD6jqJTMZCBARXs7LEfW8v4oUbOzKmh" type="video/mp4" />
          </video>
          {/* Dark overlay for better text visibility */}
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center md:px-12">
        <div className="max-w-4xl">
          {/* Main Heading - Larger on desktop, smaller on mobile */}
          <h1 className="mb-2 text-4xl font-light text-white lg:text-7xl">
            Somos una residencia
            <span className="noto-serif-display mt-1 block font-light italic">
              a la que se le puede llamar hogar.
            </span>
          </h1>

          {/* Tagline - Responsive font size */}
          <p className="mx-auto mt-6 max-w-xl text-lg font-light text-white md:text-xl">
            Porque la paciencia no significa nada si no viene acompañada de amor
            y respeto
          </p>

          {/* CTA Button - Slightly different sizing for mobile */}
          <div className="mt-10 md:mt-12">
            <NavLink to="/#nosotros">
              <Button className="h-11 rounded-full bg-[#0033A1] px-11 py-3 text-sm font-medium uppercase tracking-wider text-white transition-colors duration-300 hover:bg-blue-800">
                Quiero saber más
              </Button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
