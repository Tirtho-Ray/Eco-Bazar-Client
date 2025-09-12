import React from 'react';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { Container } from '../ui/reUsable/Container';

const Header = () => {
  return (
    <header className="bg-slate-300 font-poppins text-[12px]">
      <Container>
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center gap-2">
            <div className="" aria-hidden="true">
              <CiLocationOn className='w-[15px] h-[18px] font-bold' />
            </div>
            <p>Store Location: Lincoln-344, Illinois, Chicago, USA</p>
          </div>
          <div className="flex gap-4 items-center">
            <div className="flex gap-1 items-center cursor-pointer" role="button" aria-label="Select Language">
              <p>Eng</p>
              <MdOutlineKeyboardArrowDown />
            </div>
            <div className="flex gap-1 items-center cursor-pointer" role="button" aria-label="Select Currency">
              <p>USD</p>
              <MdOutlineKeyboardArrowDown />
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
