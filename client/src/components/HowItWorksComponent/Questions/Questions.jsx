import React from "react";
import QuestionContainer from "../QuestionContainer/QuestionContainer";
import CONSTANTS from "../../../constants";

const Questions = () => {
  const dataForQuestionsLaunching = CONSTANTS.QUESTION_ITEMS_LAUNCHING;
  const dataForQuestionsMarketplace = CONSTANTS.QUESTION_ITEMS_MARKETPLACE;
  const dataForQuestionsContests = CONSTANTS.QUESTION_ITEMS_CONTESTS;
  const dataForQuestionsCreatives = CONSTANTS.QUESTION_ITEMS_CREATIVES;

  return (
    <div className="container row justify-content-lg-between align-items-start">
      <nav className="js-sticky-block card border-0 bg-primary col col-3 ">
        <div className="js-scroll-nav list-group list-group-transparent list-group-white">
          <a className="btn btn-primary py-3 btn-sm text-start" href="/">Launching A Contest</a>
          <a  className="btn btn-primary py-3 btn-sm text-start" href="/">Buying From Marketplace</a>
          <a  className="btn btn-primary py-3 btn-sm text-start" href="/">Managed Contest</a>
          <a  className="btn btn-primary py-3 btn-sm text-start" href="/">For Creatives</a>
        </div>
      </nav>

      <div className="col col-lg-8">
        <QuestionContainer
          header={"Launching A Contest"}
          dataForQuestionBoxArray={dataForQuestionsLaunching}
        />
        <QuestionContainer
          header={"Buying From Marketplace"}
          dataForQuestionBoxArray={dataForQuestionsMarketplace}
        />
        <QuestionContainer
          header={"Managed Contests"}
          dataForQuestionBoxArray={dataForQuestionsContests}
        />
        <QuestionContainer
          header={"For Creatives"}
          dataForQuestionBoxArray={dataForQuestionsCreatives}
        />
      </div>
    </div>
  );
};

export default Questions;
