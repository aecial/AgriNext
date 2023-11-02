"use client";
import OptionsCard from "@/components/OptionsCard";
import prisma from "@/lib/Prisma";
const cropOptions = async () => {
  const crops = await prisma.cropTypes.findMany();
  return (
    <div className="bg-emerald-500 content-height p-2 flex flex-col gap-8 justify-center items-center lg:p-20">
      {crops.map((crop) => {
        return (
          <OptionsCard
            key={crop.id}
            imageSrc={crop.image}
            imageAlt={crop.crop_type}
            cropType={crop.crop_type}
          />
        );
      })}
    </div>
  );
};

export default cropOptions;
