import CallToAction from "./sections/CallToAction";
import Landing from "./sections/Landing";
import ServicesOverview from "./sections/ServicesOverview";
import WhyChooseUs from "./sections/WhyChooseUs";
import Pricing from "../../components/Pricing";

const Home = () => {
  return (
    <div>
      <Landing />
      <ServicesOverview />
      <Pricing />
      <WhyChooseUs />
      <CallToAction />
    </div>
  );
};

export default Home;
