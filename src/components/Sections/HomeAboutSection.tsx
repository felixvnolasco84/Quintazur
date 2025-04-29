import HandHeroImage from "@/assets/img/bg/HandHeroImage.png";
import { NavLink } from "react-router";
import { Button } from "../ui/button";

export default function HomeAboutSection() {
  return (
    <section
      id="nosotros"
      className="mx-auto grid max-w-7xl gap-36 px-4 py-16 md:px-12 md:py-24"
    >
      <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-16">
        {/* Imagen - A pantalla completa en móvil, mitad en desktop */}
        <div className="h-full w-full overflow-hidden rounded-2xl">
          <img
            src={HandHeroImage}
            alt="Manos sostenidas, representando el cuidado y acompañamiento"
            className="h-auto w-full object-cover"
          />
        </div>

        {/* Contenido de texto */}
        <div className="flex flex-col text-left">
          {/* Subtítulo superior */}
          <h3 className="poppins mb-6 text-sm font-semibold uppercase tracking-wider text-[#6D6D6D]">
            Nosotros
          </h3>

          {/* Título principal con estilo diferente para "de sentirte acompañado" */}
          <h2 className="mb-8 text-3xl font-light text-blue-800 md:text-4xl lg:text-6xl">
            La tranquilidad{" "}
            <span className="noto-serif-display font-light italic text-blue-700">
              de
              <br className="noto-serif-display hidden md:block" /> sentirte
              acompañado.
            </span>
          </h2>

          {/* Primer párrafo */}
          <p className="mb-6 max-w-lg text-lg leading-[30px] text-[#6D6D6D]">
            En Quintazur, nuestra misión es ofrecer un modelo integral de
            atención personalizada, acompañando a las personas mayores en todas
            sus necesidades. Nos enfocamos en brindar cuidados excepcionales que
            respeten su dignidad y garanticen su bienestar asegurando una
            calidad de vida. Estamos comprometidos con la innovación en el
            tratamiento de enfermedades crónicas y cognitivas, con un enfoque
            ético y humano.
          </p>

          {/* Segundo párrafo */}
          <p className="max-w-lg text-lg leading-[30px] text-[#6D6D6D]">
            Con el apoyo de un equipo multidisciplinario de profesionales,
            priorizamos la calidad de vida, brindando atención médica de
            excelencia en una comunidad activa y segura que enriquece la
            experiencia de cada residente.
          </p>
        </div>
      </div>
      <div className="grid items-center justify-center gap-8">
        <p className="max-w-3xl text-lg font-normal text-[#6D6D6D] lg:text-2xl lg:leading-[40px]">
          Nos comprometemos a ofrecer un cuidado integral y profesional,
          poniendo a cada residente en el centro de nuestras decisiones.
          Promovemos la dignidad, la autonomía y el respeto, asegurándonos de
          que nuestros cuidados respondan a las necesidades individuales de
          quienes confían en nosotros, en un entorno cálido y acogedor donde se
          sientan siempre cuidados y valorados.
        </p>
        <NavLink to="/#contacto">
          <Button className="mt-8 h-11 rounded-full bg-[#0033A1] px-11 py-4 text-sm font-medium uppercase tracking-wider text-white transition-colors duration-300 hover:bg-blue-800">
            Quiero saber más
          </Button>
        </NavLink>
      </div>
    </section>
  );
}
