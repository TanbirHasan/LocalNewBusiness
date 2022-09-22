import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="lg:px-20 my-20 text-center sm:px-10">
      <div>
        <Image src="/assets/SearchLogo.png" width="212" height="199" alt="" />
      </div>
      <h3 className="Tagline mb-5 lg:text-[20px] text-[#D16F32]">About Us</h3>
      <h2 className="headline3 lg:text-[36px] sm:text-[22px]">
        Be the first to access new companies contact
        <br /> details with new start data.
      </h2>
    </div>
  );
};

export default AboutUs;
