import "./Home.css";
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";
import Shapes from "./Shapes";
import PortfolioModal from "../modal/PortfolioModal";

const Home = () => {
  return (
    <>
      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[99999] w-80">
        <PortfolioModal />
      </div>
      <section className="home container" id="home">
        <div className="intro">
          <img
            src="https://i.ibb.co/zS38BWV/9434621.png"
            height={145}
            width={160}
            alt=""
            className="home__img"
          />
          <h1 className="home__name">Chetan Kesare</h1>
          <span className="home__education">I am a Full-Stack UX Designer</span>

          <HeaderSocials />

          <a href="#contact" className="btn">
            Hire Me
          </a>
          <ScrollDown />
        </div>

        <Shapes />
      </section>
    </>
  );
};

export default Home;
