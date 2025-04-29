import { AchievementsSectionInterface } from "@/utils/interfaces";
import CarouselComponent from "../ui/CarouselComponent";
import { CarouselItem } from "../ui/carousel";
import { achievementsSection } from "@/utils/data";

export default function AchievmentsSection({
  archievementsSection,
}: {
  archievementsSection: AchievementsSectionInterface;
}) {
  return (
    <div
      id="cuidados"
      className="gap-12 bg-[#F8FCEF] px-4 py-12 lg:px-0 lg:py-24"
    >
      <div className="mx-auto grid max-w-[1800px] items-center justify-center justify-items-center">
        <span className="poppins mb-8 text-sm font-semibold text-[#6D6D6D]">
          {achievementsSection.description}
        </span>
        <h3 className="text-2xl font-light text-[#0033A1] lg:max-w-6xl lg:text-6xl">
          Cuidarte con respeto <br />
          <span className="noto-serif-display font-light italic text-blue-700">
            es acompañarte en tu independencia.
          </span>
        </h3>
        <CarouselComponent>
          {archievementsSection.achievements.map((achivement, index) => (
            <CarouselItem className="basis-full lg:basis-1/4" key={index}>
              <div className="grid gap-4 px-6 py-14">
                <img
                  src={achivement.image}
                  alt="Imagen de un hombre con una mano sostenida"
                  className="aspect-square h-full w-full object-cover"
                />
                <div className="mt-6 flex flex-col gap-2">
                  <h3 className="bg-gradient-to-r bg-clip-text text-left text-2xl font-bold text-[#0033A1]">
                    {achivement.title}
                  </h3>
                  <p className="text-left text-lg text-[#6D6D6D] lg:max-w-[275px]">
                    {achivement.description}
                  </p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselComponent>
      </div>
    </div>
  );
}
