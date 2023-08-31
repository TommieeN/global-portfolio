import LandingPage from "../../components/LandingPage/LandingPage";
import NavBar from "../../components/NavBar/NavBar";
import Projects from "../../components/Projects/Projects";
import TechStack from "../../components/TechStack/TechStack";
import About from "../../components/About/About"
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div>
        <NavBar />
        <LandingPage />
        <TechStack />
        <Projects />
        <About />
        <Contact />
        <Footer />
    </div>
    )
};

export default Home;
