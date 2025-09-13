import React from "react";
import bg from "../../assets/trusted/BG (2).png";
import pic1 from "../../assets/trusted/Image (6).png";
import pic2 from "../../assets/trusted/Image (7).png";
import left from "../../assets/trusted/left.png";
import { Container } from "../../components/ui/reUsable/Container";

const TrustBlog = () => {
  return (
    <div className="mt-40">
    <section className="relative mt-20 w-full ">
      <img
        src={bg}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />

      <img
        src={left}
        alt="Leaf Decoration"
        className="absolute bottom-12 left-12 lg:left-52 w-16 md:w-24 lg:w-32 opacity-90 z-10"
      />

      <div className=" ">
        <Container>
          <div className="flex flex-col lg:flex-row items-center justify-between ">
            <div className="flex flex-col lg:flex-row gap-6 items-center lg:items-start">
              <img
                src={pic1}
                alt="Farmer with apples"
                className="w-[260px] h-[380px] object-cover rounded-xl shadow-lg"
              />
              <img
                src={pic2}
                alt="Man with basket"
                className="w-[420px] h-[440px] object-cover rounded-xl shadow-lg"
              />
            </div>

         
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-snug">
                100% Trusted <br /> Organic Food Store
              </h2>

              <div className="space-y-6 mb-6">
                {[
                  {
                    title: "Healthy & natural food for lovers of healthy food.",
                    desc: "Ut quis tempus erat. Phasellus euismod bibendum magna non tristique. Pellentesque semper vestibulum elit sed condimentum. Nunc pretium fermentum interdum."
                  },
                  {
                    title: "Every day fresh and quality products for you.",
                    desc: "Maecenas vehicula a justo quis laoreet. Sed in placerat nibh, a posuere ex. Morbi sem neque, aliquam sed orci et, rhoncus lobortis felis."
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="text-green-500 text-xl mt-1">✔</span>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-800 ">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm mt-1 w-[510px]">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <button className="bg-green-500 text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-green-600 transition-colors">
                Shop Now →
              </button>
            </div>
          </div>
        </Container>
      </div>
    </section>
    </div>
  );
};

export default TrustBlog;
