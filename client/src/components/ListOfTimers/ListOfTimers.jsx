import React, { useState, useContext, useRef, useEffect } from "react";
import { Field } from "formik";
import { TimerContext } from "../../contexts";
import "./ListOfTimers";
import ProgressBar from "../ProgressBar/ProgressBar";
import CountdownTimer from "../CountdownTimer/CountdownTimer";
import CreateNewTimer from "../CreateNewTimer/CreateNewTimer";

const ListOfTimers = () => {
  const [events, setEvents] = useContext(TimerContext);


  console.log(events);
  if (events.length > 0) {
    window.localStorage.events = JSON.stringify(events);
  }

  const eventsArray = events.map((event) => {
    return (
      <section key={event.eventName}>
        <p>Имя события:</p>{event.eventName}
        <p>Дата окончания события:</p>{event.eventEndDate}
        <p>Дата уведомления о событии:</p>{event.eventNotification}
        <CountdownTimer countdownDate={event.eventEndDate}/>
        
      </section>
    );
  });
  return (
    <div className="listTimersContainer">
      <ol>
        {eventsArray}
      </ol>
    </div>
  );
};
export default ListOfTimers;
