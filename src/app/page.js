import DemoProduct from "@/components/common/DemoProduct";
import Banner from "@/components/common/Banner";
import Blog from "@/components/common/Blog";
import Help from "@/components/common/Help";
import PopularProduct from "@/components/common/PopularProduct";
import Testimonial from "@/components/common/Testimonial";
import WhyChoose from "@/components/common/WhyChoose";

export default function Home() {
  return (
    <>
      <Banner
        title={"Modern Interior Design Studio"}
        body={
          " Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet  velit. Aliquam vulputate velit imperdiet dolor tempor tristique."
        }
      />
      <DemoProduct  />
      <WhyChoose />
      <Help />
      <PopularProduct />
      <Testimonial />
      <Blog />
    </>
  );
}
