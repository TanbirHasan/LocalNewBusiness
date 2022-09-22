import Image from "next/image";
import Carousel from "react-grid-carousel";

const DashboardSlider = () => {
  return (
    <div className=";g:px-[200px] sm:px-[20px] sm:mx-auto">
      <Carousel cols={1} rows={1} gap={10} loop>
        <Carousel.Item>
          <div className="flex justify-center items-center">
            <Image
              src="/assets/Laptop.png"
              width="700"
              height="400"
              alt="laptop pic"
            />
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default DashboardSlider;
