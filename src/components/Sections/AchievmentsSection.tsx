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
      id="mision"
      className="gap-12 bg-[#F8FCEF] px-4 py-12 lg:px-0 lg:py-24"
    >
      <div className="mx-auto grid max-w-[1800px] items-center justify-center justify-items-center">
        <span>{achievementsSection.description}</span>
        <h3 className="text-2xl font-bold text-[#0033A1] lg:max-w-4xl lg:text-4xl">
          {archievementsSection.title}
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
                <div className="flex flex-col gap-2">
                  <h3 className="bg-gradient-to-r bg-clip-text text-left text-2xl font-bold text-[#0033A1]">
                    {achivement.title}
                  </h3>
                  <p className="text-left text-lg leading-relaxed text-[#6D6D6D]">
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
