import React from "react";
import QuestionContainer from "../QuestionContainer/QuestionContainer";
import CONSTANTS from "../../../constants";
import { ListGroup } from "react-bootstrap";
import styles from "./Questions.module.sass"

const Questions = () => {
  const dataForQuestionsLaunching = CONSTANTS.QUESTION_ITEMS_LAUNCHING;
  const dataForQuestionsMarketplace = CONSTANTS.QUESTION_ITEMS_MARKETPLACE;
  const dataForQuestionsContests = CONSTANTS.QUESTION_ITEMS_CONTESTS;
  const dataForQuestionsCreatives = CONSTANTS.QUESTION_ITEMS_CREATIVES;

  return (
    
    <div className="container row justify-content-lg-around align-items-start ">
      <ul className="js-sticky-block card bg-primary col-3" >
        <div className={styles.listGroup}>
        <div className="js-scroll-nav list-group">
          <a className="btn btn-primary py-3 btn-sm text-start" href="/">Launching A Contest</a>
          <a  className="btn btn-primary py-3 btn-sm text-start" href="/">Buying From Marketplace</a>
          <a  className="btn btn-primary py-3 btn-sm text-start" href="/">Managed Contest</a>
          <a  className="btn btn-primary py-3 btn-sm text-start" href="/">For Creatives</a>
        </div>
      </div>
      </ul>
      
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
