import React from "react";
import InfoHome from "./InfoHome";
import { Container } from "../../components/ui/reUsable/Container";
import Banner from "../../components/ui/Home/Banner";
import FeaturesProduct from "./FeaturesProduct";
import TrustBlog from "./TrustBlog";
import StatsCards from "./StatsCards";
import Category from "./category";
import OfferAndSell from "./OfferAndSell";
import BestSellProduct from "./BestSellProduct";
import ProductSection from "./ProductSection";
import Testimonials from "./Testimonials";
import ContactInfo from "./ContactInfo";

const MainHomePage = () => {
  return (
    <div className="font-poppins">
      <Banner />
      <Container>
        <InfoHome />
        <FeaturesProduct />
      </Container>
      <Container>
        <Category />
      </Container>
      <TrustBlog />
      <StatsCards />
      <Container>
        <OfferAndSell />
        <BestSellProduct />
        <ProductSection />
      </Container>
    <div className="bg-gradient-to-b from-[#FFFFFF] via-[#F2F5F3] to-[#F2F5F3] text-whit">
      <Container>
      <Testimonials />
      </Container>
        
    </div>
     
      <Container>
    
        <ContactInfo />
      </Container>
    </div>
  );
};

export default MainHomePage;
