import { AiOutlinePrinter, AiOutlineMail } from "react-icons/ai";
import { BiDownload } from "react-icons/bi";

const PrintandPost = () => {
  return (
    <div className="px-20">
      <div className="text-center px-10">
        <h2 className="headline3 mb-5">Lorem ipsum dolor sit amet.</h2>
        <p className="headline6">
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
            <span className="headline7">Print and Post</span>
          </button>
        </div>

        <div className="border-2 border-solid mx-2">
          <button class="bg-grey-light hover:bg-grey text-grey-darkest font-bold py-2 px-4 rounded inline-flex items-center">
            <AiOutlineMail className="text-[25px] mr-5" />
            <span className="headline7">Email</span>
          </button>
        </div>

        <div className="border-2 border-solid mx-2">
          <button class="bg-grey-light hover:bg-grey text-grey-darkest font-bold py-2 px-4 rounded inline-flex items-center">
            <BiDownload className="text-[25px] mr-5" />
            <span className="headline7">Download</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrintandPost;
