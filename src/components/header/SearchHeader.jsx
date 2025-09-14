import React from "react";
import { Heart, ShoppingCart } from "lucide-react";
import logo from "../../assets/logo/plant.png"; // Adjust the path if needed
import { Container } from "../ui/reUsable/Container";

const SearchHeader = () => {
  return (
    <div className="border-b-1">
      <Container>
        <div className="container mx-auto flex items-center justify-between py-4 px-4">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Logo" className="h-[29] w-[32]" />
            <span className="text-[32px] font-semibold text-green-700">
              Ecobazar
            </span>
          </div>

          <div className="flex-1 mx-6 max-w-xl">
            <div className="flex border border-gray-300 rounded-md overflow-hidden">
              <input
                type="text"
                placeholder="Search"
                className="flex-1 px-4 py-2 outline-none"
              />
              <button className="bg-green-600 hover:bg-green-700 text-white px-4">
                Search
              </button>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <Heart className="w-5 h-5 text-gray-700 hover:text-green-600 cursor-pointer" />

            <div className="flex items-center gap-3">
              <ShoppingCart className="w-5 h-5 text-gray-700 hover:text-green-600 cursor-pointer" />
              <div className="text-sm text-gray-700">
                <span className="text-xs text-gray-500">Shopping cart:</span>
                <br />
                <span className="font-medium">$57.00</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SearchHeader;
