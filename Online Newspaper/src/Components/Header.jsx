import { format } from "date-fns";
import Logo from "../assets/Header Logo.png";
const Header = () => {
  return (
    <div>
      <div className="flex justify-center flex-col items-center gap-3 ">
        <img className="w-[400px] h-35" src={Logo} alt="" />
        <p className="text-accent">Journalism Without Fear or Favour</p>
        <p className="font-semibold text-accent">
          {format(new Date(), "EEEE , MMMM MM , yyyy")}
        </p>
      </div>
    </div>
  );
};

export default Header;
