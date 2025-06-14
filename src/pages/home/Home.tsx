import CallToAction from "./sections/CallToAction";
import Landing from "./sections/Landing";
import ServicesOverview from "./sections/ServicesOverview";
import WhyChooseUs from "./sections/WhyChooseUs";

const Home = () => {
  return (
    <div>
      <Landing />
      <ServicesOverview />
      <WhyChooseUs />
      <CallToAction />
    </div>
  );
};

export default Home;
