import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import AmenitiesImage from "@/assets/img/bg/AmenitiesImage.png";

export default function AmenitiesSection() {
  return (
    <section className="bg-teal-800 py-16 text-white md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
          {/* Columna izquierda - Título y descripción */}
          <div>
            <h3 className="mb-6 text-sm font-medium uppercase tracking-wider text-teal-100">
              Experiencia
            </h3>
            <h2 className="mb-4 text-3xl font-normal md:text-4xl lg:text-5xl">
              Amenidades diseñadas
              <span className="block font-light italic">
                para tu bienestar.
              </span>
            </h2>

            {/* Imagen en móvil (visible solo en dispositivos pequeños) */}
            <div className="mb-8 mt-8 block md:hidden">
              <img
                src={AmenitiesImage}
                alt="Interior con amenidades de lujo"
                className="h-auto w-full rounded-lg"
              />
            </div>
          </div>

          {/* Columna derecha - Descripción y Accordion */}
          <div className="flex flex-col justify-between">
            {/* Descripción */}
            <div className="mb-12">
              <p className="text-lg text-teal-50">
                Desde un restaurante bistró y espacios para la vida social,
                hasta una tarde en el jardín con tu familia, cada amenidad ha
                sido cuidadosamente diseñada para ofrecerte confort,
                exclusividad y armonía con el entorno.
              </p>
            </div>

            {/* Accordion */}
            <div>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem
                  value="item-1"
                  className="border-t border-teal-600"
                >
                  <AccordionTrigger className="flex justify-between py-6 text-xl font-medium hover:text-teal-200">
                    Restaurante y Bistró Gourmet
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 text-teal-100">
                    Disfruta de una comida que no pierde el toque casero
                    preparada por Les Croissant.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-2"
                  className="border-t border-teal-600"
                >
                  <AccordionTrigger className="py-6 text-xl font-medium hover:text-teal-200">
                    Vida social
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 text-teal-100">
                    Espacios diseñados para fomentar las relaciones sociales y
                    el bienestar comunitario.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-3"
                  className="border-t border-teal-600"
                >
                  <AccordionTrigger className="py-6 text-xl font-medium hover:text-teal-200">
                    Room Service
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 text-teal-100">
                    Servicio a la habitación con atención personalizada para tu
                    máxima comodidad.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-4"
                  className="border-t border-teal-600"
                >
                  <AccordionTrigger className="py-6 text-xl font-medium hover:text-teal-200">
                    Punto de reunión familiar
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 text-teal-100">
                    Áreas comunes para reunirse con la familia en un ambiente
                    acogedor y privado.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-5"
                  className="border-t border-teal-600"
                >
                  <AccordionTrigger className="py-6 text-xl font-medium hover:text-teal-200">
                    Programas y actividades
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 text-teal-100">
                    Amplia variedad de actividades recreativas, culturales y de
                    esparcimiento.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-6"
                  className="border-b border-t border-b-teal-600 border-t-teal-600"
                >
                  <AccordionTrigger className="py-6 text-xl font-medium hover:text-teal-200">
                    Modelo de cuidado validado
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 text-teal-100">
                    Sistema de atención integral certificado para garantizar el
                    bienestar de los residentes.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Imagen en desktop (visible solo en dispositivos medianos y grandes) */}
        <div className="mt-16 hidden md:block">
          <img
            src={AmenitiesImage}
            alt="Interior con amenidades de lujo"
            className="h-auto w-full rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
