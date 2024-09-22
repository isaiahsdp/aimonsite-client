import BackgroundSlider from "../components/BackgroundSlider";
import HomeInfo from "../components/HomeInfo";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import "../components/BackgroundMain.css";
export const Home = () => {
  return (
    <>
      <div className="full-screen-div">
        <BackgroundSlider />
        <HomeInfo />
        <Services />
      </div>
    </>
  );
};
