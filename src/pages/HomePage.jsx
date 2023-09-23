import React from "react";
import Intro from "../components/Intro/Intro";
import DetailedIntro from "../components/Detailed/DetailedIntro";
import Rules from "../components/Rules/Rules";
import Privacy from "../components/privacy/Privacy";
import JudgingCriteria from "../components/Judge/JudgingCriteria";
import PrizeNReward from "../components/rewards/PrizeNReward";
import FaqQuestions from "../components/Faq/FaqQuestions";
import TimelineFile from "../components/TimeLineFol/Timeline";
import LinkedPartner from "../components/partnership/LinkedPartner";
import Footer from "../components/footerCompo/Footer";
function HomePage() {
  return (
    <>
      <Intro />
      <DetailedIntro />
      <Rules />
      <JudgingCriteria />
      <FaqQuestions />
      <TimelineFile />
      <PrizeNReward />
      <LinkedPartner />
      <Privacy />
      <Footer />
    </>
  );
}

export default HomePage;
