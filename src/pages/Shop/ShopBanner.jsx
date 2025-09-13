import React from 'react';
import bgImg from "../../assets/shop/bannerimg.png"

const ShopBanner = () => {
    return (
        <div 
         className="py-10 bg-cover bg-center"
              style={{
                backgroundImage: `url(${bgImg})`,
              }}
        >
            <div >

            </div>
        </div>
    );
};

export default ShopBanner;