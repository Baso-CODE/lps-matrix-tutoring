import VisiEndMisiLps from "../HomePage/Components/VisiEndMisiLps/VisiEndMisiLps";
import "./AboutPage.css";
import HeroAbout from "./Components/HeroAbout/HeroAbout";
import HistoryAndSuccesLps from "./Components/HistoryAndSuccesLps/HistoryAndSuccesLps";
import ValuesCompany from "./Components/ValuesCompany/ValuesCompany";

const AboutPage = () => {
  return (
    <div className="container-all">
      <HeroAbout />
      <HistoryAndSuccesLps />
      <VisiEndMisiLps />
      <ValuesCompany />
    </div>
  );
};

export default AboutPage;
