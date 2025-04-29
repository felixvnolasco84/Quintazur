import { Play } from "lucide-react";

export default function VideoSection() {
  return (
    <section id="comunidades" className="mx-auto max-w-7xl px-4 py-16 md:px-0 md:py-24">
      {/* Encabezado y Título */}
      <div className="mb-8 text-center md:mb-12">
        <h3 className="poppins mb-4 text-sm font-semibold uppercase tracking-wider text-[#6D6D6D]">
          Comunidades
        </h3>
        <h2 className="mb-4 text-4xl font-light text-blue-800 md:text-5xl lg:text-6xl">
          Quintazur Tlalpan
        </h2>
        <p className="text-lg text-[#6D6D6D] lg:text-2xl">
          Primera residencia en México <span className="font-bold">con certificado Leed.</span> 
        </p>
      </div>

      {/* Contenedor del Video */}
      <div className="relative aspect-video w-full overflow-hidden rounded-lg md:aspect-[21/9]">
        {/* Imagen de fondo (thumbnail del video) */}
        <img
          src="/images/quintazur-tlalpan.jpg"
          alt="Residencia Quintazur Tlalpan"
          className="h-full w-full object-cover"
        />

        {/* Overlay oscuro para mejorar visibilidad del botón */}
        <div className="absolute inset-0 bg-black/10"></div>

        {/* Botón de reproducción de video */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <button
            className="flex h-16 w-16 items-center justify-center rounded-full bg-white/80 transition-all duration-300 hover:bg-white md:h-24 md:w-24"
            onClick={() => console.log("Reproducir video")}
            aria-label="Reproducir video"
          >
            <Play className="ml-1 h-8 w-8 text-blue-800 md:h-10 md:w-10" />
          </button>

          <p className="mt-4 text-lg font-medium text-white drop-shadow-lg md:text-xl">
            Ver vídeo
          </p>
        </div>
      </div>
    </section>
  );
}
