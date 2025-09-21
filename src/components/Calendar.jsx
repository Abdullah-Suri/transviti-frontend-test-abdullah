import { useState } from "react";
import dropDownIcon from "@/assets/svg/dropdown-icon.svg";

const Calendar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full select-none">
      <div className="bg-white rounded-[10px] flex items-center justify-between p-2.5 mt-2.5 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <div>
          <h4 className="font-semibold">My Calendar</h4>
          <p className="text-sm font-medium text-teriatory -mt-0.5">Upcoming Interviews</p>
        </div>
        <img src={dropDownIcon} alt="drop-down icon" className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </div>

      <div className={`bg-white rounded-[10px] shadow-md transition-all duration-300 overflow-hidden 
        ${ isOpen ? "max-h-40 opacity-100 p-3 mt-2" : "max-h-0 opacity-0 p-0"}`}
      >
        <p className="text-gray-600">📅 No upcoming interviews scheduled.</p>
      </div>
    </div>
  );
};

export { Calendar };
