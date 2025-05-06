// Nuevo import
import MuxPlayer from "@mux/mux-player-react";

export default function VideoSection() {
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
      </div>

      {/* MUX Player con estilo adaptado */}
      <div className="relative aspect-video w-full overflow-hidden md:aspect-[16/9]">
        <MuxPlayer
          playbackId="bxw4K8NflgsfkXb5FNHbM9MKhwJWbzMPzURT6ctkhbg"
          streamType="on-demand"
          metadata={{
            video_title: "Residencia Quintazur Tlalpan",
          }}
          autoPlay={false}
          className="h-full w-full object-cover"
        />
      </div>
    </section>
  );
}
