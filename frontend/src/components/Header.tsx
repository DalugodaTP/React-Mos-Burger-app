import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
import MainNav from "./MainNav";
// import icon from "../assets/favicon.jpeg";

const Header = () => {
  return (
    <div className="border-b-2 border-b-orange-500 py-6">
        {/* <img src={icon} className="h-10 w-10"/> */}
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-3xl font-bold tracking-tight">
          Contract
          <span className="text-3xl font-bold text-orange-500">Oven</span>
        </Link>
        {/* Add mobile navigation menu */}
        <div className="md:hidden">
          <MobileNav />
        </div>
        {/* Add desktop navigation menu */}
        <div className="hidden md:block">
          <MainNav />
        </div>
      </div>
    </div>
  );
};

export default Header;
