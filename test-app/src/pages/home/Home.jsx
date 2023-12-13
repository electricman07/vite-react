import MainHeader from "../../components/MainHeader";
import Values from "../../components/Values";
import Programs from "../../components/Programs";
import FAQs from "../../components/FAQs";
import PortfolioImages from "../../components/PortfolioImages";
import Testimonials from "../../components/Testimonials";
import "./Home.css";

const Home = () => {
  return (
    <>
      <MainHeader />
      <Values />
      <Programs />
      <FAQs />
      <PortfolioImages />
      <Testimonials />
    </>
  );
};

export default Home;
