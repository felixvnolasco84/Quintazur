import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import AmenitiesImage from "@/assets/img/bg/AmenitiesImage.png";
import { Button } from "../ui/button";
import { NavLink } from "react-router";

export default function AmenitiesSection() {
  return (
    <section
      id="experiencia"
      className="bg-[#00524E] py-16 text-white md:py-24"
    >
      <div className="mx-auto w-full max-w-[1800px] px-4 md:px-8">
        <div className="grid grid-cols-1 gap-12 md:gap-32">
          <div className="grid">
            <h3 className="poppins mb-4 text-left text-sm font-semibold uppercase tracking-wider text-white">
              Experiencia
            </h3>
            <div className="flex flex-col items-start justify-between lg:flex-row">
              {/* Columna izquierda - Título y descripción */}
              <div className="flex flex-col items-start justify-start">
                <h2 className="mb-12 text-left text-3xl font-light md:text-4xl lg:text-5xl lg:leading-[60px]">
                  Amenidades diseñadas
                  <span className="noto-serif-display block font-light italic">
                    para tu bienestar.
                  </span>
                </h2>
                <NavLink to="/#contacto">
                  <Button className="h-11 w-fit rounded-full bg-[#789C4A] px-11 py-3 text-sm font-medium uppercase tracking-wider text-white transition-colors duration-300 hover:bg-blue-800">
                    Agenda una cita
                  </Button>
                </NavLink>
              </div>
              <div className="mt-12 lg:mt-4">
                <p className="max-w-lg text-left text-2xl font-light text-white lg:leading-[40px]">
                  Desde un restaurante bistró y espacios para la vida social,
                  hasta una tarde en el jardín con tu familia, cada amenidad ha
                  sido cuidadosamente diseñada para ofrecerte confort,
                  exclusividad y armonía con el entorno.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-12 lg:flex-row lg:gap-36">
            {/* Imagen en móvil (visible solo en dispositivos pequeños) */}
            <div className="block w-full lg:w-1/2">
              <img
                src={AmenitiesImage}
                alt="Interior con amenidades de lujo"
                className="h-full w-full rounded-3xl object-cover object-center"
              />
            </div>
            {/* Columna derecha - Descripción y Accordion */}
            <div className="flex w-full flex-col lg:w-1/2">
              {/* Accordion */}
              <div>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="flex justify-between py-6 text-xl font-light text-[#F8FCEF] lg:text-3xl">
                      Restaurante y Bistró Gourmet
                    </AccordionTrigger>
                    <AccordionContent className="max-w-lg pb-6 text-left text-lg text-white">
                      Disfruta de una comida que no pierde toque casero by LC
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem
                    value="item-2"
                    className="border-t border-[#F8FCEF]"
                  >
                    <AccordionTrigger className="py-6 text-xl font-light lg:text-3xl">
                      Vida social
                    </AccordionTrigger>
                    <AccordionContent className="pb-6 text-left text-lg text-white">
                      Nunca es tarde para seguir conociendo a otras personas /
                      ven y arma tu mesa de juego
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem
                    value="item-3"
                    className="border-t border-[#F8FCEF]"
                  >
                    <AccordionTrigger className="py-6 text-xl font-light lg:text-3xl">
                      Room Service
                    </AccordionTrigger>
                    <AccordionContent className="pb-6 text-left text-lg text-white">
                      Disfruta desde la comodidad de tu suite
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem
                    value="item-4"
                    className="border-t border-[#F8FCEF]"
                  >
                    <AccordionTrigger className="py-6 text-xl font-light lg:text-3xl">
                      Punto de reunión familiar
                    </AccordionTrigger>
                    <AccordionContent className="pb-6 text-left text-lg text-white">
                      Invita a tu familia a comer y disfruta de nuestros
                      jardines
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem
                    value="item-5"
                    className="border-t border-[#F8FCEF]"
                  >
                    <AccordionTrigger className="py-6 text-xl font-light lg:text-3xl">
                      Programas y actividades
                    </AccordionTrigger>
                    <AccordionContent className="pb-6 text-left text-lg text-white">
                      Participa en el huerto, gym, cine, excursiones y más que
                      tenemos para ti.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem
                    value="item-6"
                    className="border-b border-t border-b-[#F8FCEF] border-t-[#F8FCEF]"
                  >
                    <AccordionTrigger className="py-6 text-xl font-light lg:text-3xl">
                      Modelo de cuidado validado
                    </AccordionTrigger>
                    <AccordionContent className="pb-6 text-left text-lg text-white">
                      Nuestra atención es personalizada en manos de
                      profesionales para garantizar tu calidad de vida
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem
                    value="item-7"
                    className="border-b border-t border-b-[#F8FCEF] border-t-[#F8FCEF]"
                  >
                    <AccordionTrigger className="py-6 text-xl font-light lg:text-3xl">
                      Pet friendly
                    </AccordionTrigger>
                    <AccordionContent className="pb-6 text-left text-lg text-white">
                      Aquí, tu mascota es parte de la familia: ven a vivir esta
                      nueva etapa juntos
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem
                    value="item-8"
                    className="border-b border-t border-b-[#F8FCEF] border-t-[#F8FCEF]"
                  >
                    <AccordionTrigger className="py-6 text-xl font-light lg:text-3xl">
                      Espacios de lujo
                    </AccordionTrigger>
                    <AccordionContent className="pb-6 text-left text-lg text-white">
                      Disfruta de las amenidades y jardines que tenemos
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem
                    value="item-9"
                    className="border-b border-t border-b-[#F8FCEF] border-t-[#F8FCEF]"
                  >
                    <AccordionTrigger className="py-6 text-xl font-light lg:text-3xl">
                      Club de día
                    </AccordionTrigger>
                    <AccordionContent className="pb-6 text-left text-lg text-white"></AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
