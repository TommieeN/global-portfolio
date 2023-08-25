import LandingPage from "../../components/LandingPage/LandingPage";
import NavBar from "../../components/NavBar/NavBar";
import Projects from "../../components/Projects/Projects";
import TechStack from "../../components/TechStack/TechStack";

const Home = () => {
  return (
    <div>
        <NavBar />
        <LandingPage />
        <TechStack />
        <Projects />
    </div>
    )
};

export default Home;
