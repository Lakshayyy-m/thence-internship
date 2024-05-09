const Footer = () => {
  return (
    <div className="w-full p-8">
      <div className="bg-[#F5F5F5] rounded-3xl py-14 px-10 flex justify-between max-md:flex-col max-md:gap-5 items-center">
        <div className="text-lg">
          &copy;&nbsp;&nbsp;&nbsp;Talup 2023. All rights reserved
        </div>
        <div className="flex gap-10 underline cursor-pointer">
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
