// Nuevo import
// import MuxPlayer from "@mux/mux-player-react";
// import { useState } from "react";
// import { Button } from "../ui/button";

export default function VideoSection() {

  // const [currentVideo, setCurrentVideo] = useState<boolean>(true);

  return (
    <section
      id="comunidades"
      className="mx-auto w-full max-w-7xl px-4 py-16 md:px-14 md:py-24"
    >
      {/* Encabezado y Título */}
      <div className="mb-8 text-center md:mb-12">
        <h3 className="poppins mb-4 text-sm font-semibold uppercase tracking-wider text-[#6D6D6D]">
          Comunidades
        </h3>
        <h2 className="mb-4 text-4xl font-light text-blue-800 md:text-5xl lg:text-6xl">
          Quintazur Tlalpan
        </h2>
        <p className="text-lg text-[#6D6D6D] lg:text-2xl">
          Primera residencia en México{" "}
          <span className="font-bold">con certificado Leed.</span>
        </p>
        {/* <Button onClick={() => setCurrentVideo(!currentVideo)} variant={"default"} className="mt-4" size={"lg"}>
           {currentVideo ? "Change language to English" : "Cambiar idioma a Español"}
        </Button> */}
      </div>

      {/* MUX Player con estilo adaptado */}
      <div className="relative aspect-video w-full overflow-hidden md:aspect-[16/9]">


        {/* <MuxPlayer
          playbackId="MCubJngarGxgv7rIXbQT422BKAlMwQyAw2wMznuww8Q"
          streamType="on-demand"
          metadata={{
            video_title: "Residencia Quintazur Tlalpan",
          }}
          autoPlay={false}
          className="h-full w-full object-cover"
        /> */}

        <video  controls className="h-full w-full object-cover">
          <source src="https://f5z6vohtd8.ufs.sh/f/9xW4M4QjXVSm3vZzKAD6jqJTMZCBARXs7LEfW8v4oUbOzKmh" type="video/mp4" />
        </video>

        {/* 
        {
          currentVideo ? (
            <MuxPlayer
              playbackId="aAzmunnmbTE8D6vxe8d023QSN900A01DnvSvxW00ImkLvRQ"
              streamType="on-demand"
              metadata={{
                video_title: "Residencia Quintazur Tlalpan",
              }}
              autoPlay={false}
              className="h-full w-full object-cover"
            />
          ) : (
            <MuxPlayer
              playbackId="TPToldOjE5QDg3jUrZ8EJSunm02PUyjGdWf5l02z4qFXo"
              streamType="on-demand"
              metadata={{
                video_title: "Residencia Quintazur Tlalpan",
              }}
              autoPlay={false}
              className="h-full w-full object-cover"
            />
          )
        } */}

      </div>
    </section>
  );
}
