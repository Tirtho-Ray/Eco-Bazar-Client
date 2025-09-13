import React from "react";
import { Container } from "../ui/reUsable/Container";
import logo from "../../assets/logo/plant.png";

const Footer = () => {
  return (
    <div className="mt-40 bg-[#1A1A1A] font-poppins font-[400]">
      <Container>
        <div className="h-[344px] w-full bg-transparent flex justify-around items-center gap-x-20">
          <div className="text-white">
            <div className="flex content-center">
              <img className="h-[32px] w-[32px] mr-3" src={logo} alt="" />
              <h3 className="text-[32px]">Ecobazar</h3>
            </div>
            <p className="text-[#808080] mt-4">
              Morbi cursus porttitor enim lobortis molestie. Duis gravida <br/> turpis
              dui, eget bibendum magna <br/> congue nec.
            </p>
            <div className="text-[#808080] flex mt-4">
              <a href="#" className="text-white">
                (219) 555-0114
              </a>{" "}
              <p className="mx-3">or</p>
              <a href="#" className="text-white">
                business.ecobazaar@gmail.com
              </a>
            </div>
          </div>
          <div className="text-[#999999]">
            <h3 className="text-white text-[16px] font-[450]">My Account</h3>
            <ul className="flex flex-col gap-3 whitespace-nowrap mt-2 text-[14px]">
              <a href="#">My Account</a>
              <a href="#">Order History</a>
              <a className="text-white" href="#">Shopping Cart</a>
              <a href="#">Wishlist</a>
            </ul>
          </div>
          <div className="text-[#999999]">
            <h3 className="text-white text-[16px] font-[450]">Helps</h3>
            <ul className="flex flex-col gap-3 whitespace-nowrap mt-2 text-[14px]">
              <a href="#">Contacts</a>
              <a href="#">Faqs</a>
              <a className="text-white" href="#">Terms & Conditions</a>
              <a href="#">Privacy Policy</a>
            </ul>
          </div>
          <div className="text-[#999999]">
            <h3 className="text-white text-[16px] font-[450]">Proxy</h3>
            <ul className="flex flex-col gap-3 whitespace-nowrap mt-2 text-[14px]">
              <a href="#">About</a>
              <a href="#">Shop</a>
              <a href="#">Product</a>
              <a className="text-white" href="#">Track Order</a>
            </ul>
          </div>
          <div className="text-[#999999]">
            <h3 className="text-white text-[16px] font-[450]">Categories</h3>
            <ul className="flex flex-col gap-3 whitespace-nowrap mt-2 text-[14px]">
              <a href="#">Fruit & Vegetables</a>
              <a href="#">Meat & Fish</a>
              <a href="#">Bread & Bakery</a>
              <a className="text-white" href="#">Beauty & Health</a>
            </ul>
          </div>
         
        </div>
        <div className="flex justify-between py-3 text-[13px] border-t border-t-[#333333] text-[#808080]">
            <p>Ecobazar eCommerce © 2025. All Rights Reserved</p>
            <a href="https://github.com/Tirtho-Ray" target="_blank">@TirthoDev</a>
         </div>
      </Container>
    </div>
  );
};

export default Footer;
