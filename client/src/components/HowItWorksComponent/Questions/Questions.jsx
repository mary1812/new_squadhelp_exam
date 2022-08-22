import React from "react";
import QuestionContainer from "../QuestionContainer/QuestionContainer";
import CONSTANTS from "../../../constants";
import { ListGroup } from "react-bootstrap";
import styles from "./Questions.module.sass";

const Questions = () => {
  const dataForQuestionsLaunching = CONSTANTS.QUESTION_ITEMS_LAUNCHING;
  const dataForQuestionsMarketplace = CONSTANTS.QUESTION_ITEMS_MARKETPLACE;
  const dataForQuestionsContests = CONSTANTS.QUESTION_ITEMS_CONTESTS;
  const dataForQuestionsCreatives = CONSTANTS.QUESTION_ITEMS_CREATIVES;

  return (
    <div className="container row justify-content-lg-between align-items-start px-0 mx-0">
      <ul className={`js-sticky-block card bg-primary col-3 ${styles.containerQuestions}`}>
        <div className={styles.listGroup}>
          <div className="js-scroll-nav list-group">
            <a className="btn btn-primary py-3 btn-sm text-start" href="#launching">
              Launching A Contest
            </a>
            <a className="btn btn-primary py-3 btn-sm text-start" href="#buying">
              Buying From Marketplace
            </a>
            <a className="btn btn-primary py-3 btn-sm text-start" href="#managed">
              Managed Contest
            </a>
            <a className="btn btn-primary py-3 btn-sm text-start" href="#creatives">
              For Creatives
            </a>
          </div>
        </div>
      </ul>

      <div className="col col-lg-9 lh-base pr-0">
        <div className="border-bottom space-top-1 pb-5 " id="launching">
          <QuestionContainer
            header={"Launching A Contest"}
            dataForQuestionBoxArray={dataForQuestionsLaunching}
          />
        </div>
        <div className="border-bottom space-top-1 pt-5 pb-5 mt-3" id="buying">
          <QuestionContainer
            header={"Buying From Marketplace"}
            dataForQuestionBoxArray={dataForQuestionsMarketplace}
          />
        </div>
        <div className="border-bottom space-top-1 pt-5 pb-5 mt-3" id="managed">
          <QuestionContainer
            header={"Managed Contests"}
            dataForQuestionBoxArray={dataForQuestionsContests}
          />
        </div>
        <div className="pt-5 pb-4 mt-3" id="creatives">
          <QuestionContainer
            header = {"For Creatives"}
            dataForQuestionBoxArray={dataForQuestionsCreatives}
          />
        </div>
      </div>
    </div>
  );
};

export default Questions;
