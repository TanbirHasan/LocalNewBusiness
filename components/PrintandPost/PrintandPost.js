import { AiOutlinePrinter, AiOutlineMail } from "react-icons/ai";
import { BiDownload } from "react-icons/bi";

const PrintandPost = (props) => {
  const { ondatasubmit, isShown, setIsShown } = props;

  return (
    <div className="">
      <div className="text-center lg:px-20 px-5 md:px-20">
        <h2 className="headline3 headline3Res mb-5 ">
          Lorem ipsum dolor sit amet.
        </h2>
        <p className="headline6 headline6Res">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique
          odio nam vel. Euismod convallis condimentum facilisis tincidunt
          tristique. Varius at pretium vitae vestibulum. Turpis donec lacus
          tincidunt quis enim.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center lg:flex-row md:flex-row mt-10 max-w-full px-10 lg:px-0 md:px-0">
        <div className="border-2 border-solid lg:mx-2 md:mx-2 mt-5 w-full lg:w-1/4 md:w-2/4 sm:w-2/4 text-center hover:border-amber-600 hover:text-amber-600">
          <button
            class=" bg-grey-light hover:bg-grey text-grey-darkest font-bold py-2 lg:py-5 px-4 rounded inline-flex items-center "
            onClick={() => ondatasubmit("printandpost")}
          >
            <AiOutlinePrinter className="text-[25px] mr-5 " />
            <span className="headline7 text-[14px] lg:text-[16px] sm:text-[14px] ">
              Print and Post
            </span>
          </button>
        </div>

        <div className="border-2 border-solid lg:mx-2 md:mx-2 mt-5 w-full lg:w-1/4 md:w-2/4 sm:w-2/4 text-center hover:border-amber-600 hover:text-amber-600">
          <button
            class="bg-grey-light hover:bg-grey text-grey-darkest font-bold py-2 lg:py-5 px-4 rounded inline-flex items-center "
            onClick={() => ondatasubmit("email")}
          >
            <AiOutlineMail className="text-[25px] mr-5 " />
            <span className="headline7 text-[14px] lg:text-[16px] sm:text-[14px]">
              Email
            </span>
          </button>
        </div>

        <div className="border-2 border-solid lg:mx-2 md:mx-2 mt-5 w-full lg:w-1/4 md:w-2/4 sm:w-2/4 text-center hover:border-amber-600 hover:text-amber-600">
          <button class="bg-grey-light hover:bg-grey text-grey-darkest font-bold py-2 lg:py-5 px-4 rounded inline-flex items-center ">
            <BiDownload className="text-[25px] mr-5 " />
            <span className="headline7 text-[14px] lg:text-[16px] sm:text-[14px] ">
              Download
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrintandPost;
