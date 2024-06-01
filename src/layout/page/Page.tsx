import Hero from "../../contents/hero/Hero";
import OurServices from "../../contents/our-services/OurServices";

const Page = () => {
  return (
    <div className="Page">
      <div className="Hero-Section">
        <Hero />
      </div>

      <div className="Service-Section">
        <OurServices />
      </div>
    </div>
  );
};
export default Page;
