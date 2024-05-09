import { NavLink } from "react-router-dom";
import logo from "../assets/images/mainLogo.svg";

const MainNav = () => {
  return (
    <div className="flex justify-between p-9 max-md:flex-col max-md:items-center max-md:gap-9">
      <div className="h-[30.5px] w-[121px]">
        <img src={logo} alt="logo" width={121} height={30.5} />
      </div>
      <div className="flex gap-3">
        <NavLink to={"/get-projects"} className={() => {}}>
          <button className="p-4 border-light-1 hover:bg-light-1 border px-10 rounded-full text-sm">
            Get Project
          </button>
        </NavLink>
        <button className="bg-dark-1 text-white px-10 rounded-full text-sm hover:bg-dark-2">
          Onboard Talent
        </button>
      </div>
    </div>
  );
};

export default MainNav;
