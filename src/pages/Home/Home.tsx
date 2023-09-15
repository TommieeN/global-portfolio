import NavBar from "../../components/NavBar/NavBar";
import LandingPage from "../../components/LandingPage/LandingPage";
import Projects from "../../components/Projects/Projects";
import TechStack from "../../components/TechStack/TechStack";
import About from "../../components/About/About";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
import Line from "../../components/Line/Line";

const Home = () => {
  return (
    <>
      <NavBar />
      <LandingPage />
      <Line />
      <About />
      <TechStack />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
