import React from "react";
import InfoHome from "./InfoHome";
import { Container } from "../../components/ui/reUsable/Container";
import Banner from "../../components/ui/Home/Banner";
import FeaturesProduct from "./FeaturesProduct";
import TrustBlog from "./TrustBlog";
import StatsCards from "./StatsCards";
import Category from "./category";
import OfferAndSell from "./OfferAndSell";

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
      </Container>
    </div>
  );
};

export default MainHomePage;
