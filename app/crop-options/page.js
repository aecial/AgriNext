import OptionsCard from "@/components/OptionsCard";

const cropOptions = () => {
  return (
    <div className="bg-emerald-500 content-height p-2 gap-10 flex-col justify-center items-center lg:p-20">
      <OptionsCard
        imageSrc={
          "https://images.pexels.com/photos/3004798/pexels-photo-3004798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
        imageAlt={"String Beans"}
        cropType={"sitaw"}
      />
    </div>
  );
};

export default cropOptions;
