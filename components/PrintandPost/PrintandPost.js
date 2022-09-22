import { AiOutlinePrinter, AiOutlineMail } from "react-icons/ai";
import { BiDownload } from "react-icons/bi";

const PrintandPost = () => {
  return (
    <div className="lg:px-20 sm:px-10">
      <div className="text-center px-10">
        <h2 className="headline3 lg:text-[40px] mb-5 sm:text-[20px]">
          Lorem ipsum dolor sit amet.
        </h2>
        <p className="headline6 lg:text-[18px] sm:text-[12px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique
          odio nam vel. Euismod convallis condimentum facilisis tincidunt
          tristique. Varius at pretium vitae vestibulum. Turpis donec lacus
          tincidunt quis enim.
        </p>
      </div>
      <div className="flex justify-center mt-10">
        <div className="border-2 border-solid mx-2">
          <button class="bg-grey-light hover:bg-grey text-grey-darkest font-bold py-2 px-4 rounded inline-flex items-center">
            <AiOutlinePrinter className="text-[25px] mr-5" />
            <span className="headline7 lg:text-[16px] sm:text-[12px]">
              Print and Post
            </span>
          </button>
        </div>

        <div className="border-2 border-solid mx-2">
          <button class="bg-grey-light hover:bg-grey text-grey-darkest font-bold py-2 px-4 rounded inline-flex items-center">
            <AiOutlineMail className="text-[25px] mr-5" />
            <span className="headline7 lg:text-[16px] sm:text-[12px]">
              Email
            </span>
          </button>
        </div>

        <div className="border-2 border-solid mx-2">
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
