import React from 'react';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { GiRoyalLove } from "react-icons/gi";
import { IoBagOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import logo from "../../assets/logo/plant.png"

const navLinks = [
  { name: "Home", href: "/", icon: <MdOutlineKeyboardArrowDown /> },
  { name: "Shop", href: "/shop", icon: <MdOutlineKeyboardArrowDown /> },
  { name: "Blog", href: "/blog", icon: <MdOutlineKeyboardArrowDown /> },
  { name: "About Us", href: "/about",  },
];

const MainHeader = () => {
  return (
    <header className='w-full  py-[18px] font-poppins font-semibold'>
      <nav className='flex justify-between items-center max-w-[1440px] mx-auto'>
        
     
        <ul className='flex items-center gap-[27px] list-none'>
          {navLinks.map((item, index) => (
            <li key={index} className='flex items-center gap-1 font-poppins  text-[14px] hover:text-blue-600 transition cursor-pointer'>
              <a href={item.href}>{item.name}</a> {item.icon}
            </li>
          ))}
        </ul>

      
        <div className='text-2xl font-semibold text-gray-900 tracking-wide'>
          <div className='flex gap-2 items-center'>
            <img className='h-[32px] w-32[px]' src={logo} alt="" />
            <h className="text-[32px]">Ecobazar</h>
          </div>
        </div>

       
        <div className='flex items-center gap-[40px]'>  
          <div className='flex items-center gap-2  text-sm'>
            <FiPhoneCall className='text-lg' />
            <span>(215) 550-114</span>
          </div>

          
          <div className='flex items-center gap-5 font-poppins  text-xl'>
            <CiSearch className='hover:text-blue-600 transition cursor-pointer' />
            <GiRoyalLove className='hover:text-blue-600 transition cursor-pointer' />
            <IoBagOutline className='hover:text-blue-600 transition cursor-pointer' />
            <FaRegUser className='hover:text-blue-600 transition cursor-pointer' />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default MainHeader;
