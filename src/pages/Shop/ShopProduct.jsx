import React, { useState } from "react";
// import { FaSlidersH } from "react-icons/fa";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";

const ShopProduct = () => {
  const [arrow, setArrow] = useState(null);
  const handelClick = () => {
    setArrow(!arrow);
  };
  return (
    <div className="mt-10">
      {/* top category */}

      {/* filter and product content */}
      <div className="flex gap-2 justify-between mt-8">
        <div className="w-[312px] ">
          <div className="flex justify-between items-center">
            <p className="text-[20px]">All Category</p>
            <div onClick={handelClick}>
              {arrow ? <MdKeyboardArrowUp /> : <MdOutlineKeyboardArrowDown />}
            </div>
          </div>
        </div>
        {/* here show product with category */}
        <div className="w-[984px] "></div>
      </div>
    </div>
  );
};

export default ShopProduct;
