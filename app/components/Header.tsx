import { FaArrowRight } from "react-icons/fa"; // Importing the arrow icon

const Header = () => {
  return (
    <div className="bg-beige text-center py-4">
      <div className="text-black text-[10px] sm:text-[12px] md:text-[14px] font-bold flex items-center justify-center gap-2">
        <span className="new bg-gold px-2 py-1 rounded text-[8px] sm:text-[9px] uppercase">
          New
        </span>
        <span className="main-text">
          <strong className="text-[10px] sm:text-[12px] uppercase">
            Build. Brand. Scale.
          </strong>{" "}
          Take your business to the next level.
        </span>
        <FaArrowRight className="text-gold text-[10px]" />
      </div>
    </div>
  );
};

export default Header;
  