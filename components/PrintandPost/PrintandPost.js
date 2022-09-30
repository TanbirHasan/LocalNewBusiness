import { AiOutlinePrinter, AiOutlineMail } from "react-icons/ai";
import { BiDownload } from "react-icons/bi";

const PrintandPost = () => {
  return (
    <div className="lg:px-20 px-10 md:px-20">
      <div className="text-center px-10">
        <h2 className="headline3 text-[20px] lg:text-[36px] md:text-[36px] sm:text-[28px] mb-5 sm:text-[20px]">
          Lorem ipsum dolor sit amet.
        </h2>
        <p className="headline6 text-[14px] lg:text-[18px] md:text-[18px] sm:text-[18px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique
          odio nam vel. Euismod convallis condimentum facilisis tincidunt
          tristique. Varius at pretium vitae vestibulum. Turpis donec lacus
          tincidunt quis enim.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center lg:flex-row md:flex-row mt-10">
        <div className="border-2 border-solid lg:mx-2 md:mx-2 mt-5 w-2/4 text-center">
          <button class="bg-grey-light hover:bg-grey text-grey-darkest font-bold py-2 px-4 rounded inline-flex items-center">
            <AiOutlinePrinter className="text-[25px] mr-5" />
            <span className="headline7 text-[8px] lg:text-[16px] sm:text-[16px]">
              Print and Post
            </span>
          </button>
        </div>

        <div className="border-2 border-solid lg:mx-2 md:mx-2 mt-5 w-2/4 text-center">
          <button class="bg-grey-light hover:bg-grey text-grey-darkest font-bold py-2 px-4 rounded inline-flex items-center">
            <AiOutlineMail className="text-[25px] mr-5" />
            <span className="headline7 lg:text-[16px] sm:text-[12px]">
              Email
            </span>
          </button>
        </div>

        <div className="border-2 border-solid lg:mx-2 md:mx-2 mt-5 w-2/4 text-center">
          <button class="bg-grey-light hover:bg-grey text-grey-darkest font-bold py-2 px-4 rounded inline-flex items-center">
            <BiDownload className="text-[25px] mr-5" />
            <span className="headline7 lg:text-[16px] sm:text-[12px]">
              Download
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrintandPost;
