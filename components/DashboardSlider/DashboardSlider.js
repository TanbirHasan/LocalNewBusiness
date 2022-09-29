import Image from "next/image";
import Carousel from "react-grid-carousel";

const DashboardSlider = () => {
  return (
    <div className="lg:px-[200px] mx-auto">
      <Carousel cols={1} rows={1} gap={10} loop>
        <Carousel.Item className="w-full">
          <div className="flex justify-center items-center w-full">
            <img
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
