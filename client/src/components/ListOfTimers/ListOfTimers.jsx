import React, { useState, useContext, useRef, useEffect } from "react";
import { Field } from "formik";
import { Grid } from "@mui/material";
import { TimerContext } from "../../contexts";
import "./ListOfTimers.css";
import CountdownTimer from "../CountdownTimer/CountdownTimer";
import TimerProgressBar from "../TimerProgressBar/TimerProgressBar";

const ListOfTimers = () => {
  const [events, setEvents] = useContext(TimerContext);

  console.log(events);
  if (events.length > 0) {
    window.localStorage.events = JSON.stringify(events);
  }

  const eventsArray = events.map((event) => {
    return (
      <section key={event.eventName} className="listOfEvents">
        {/* <p>Имя события:</p>
        {event.eventName} */}
        {/* <p>Дата окончания события:</p>
        {event.eventEndDate}
        <p>Дата уведомления о событии:</p>
        {event.eventNotification} */}
        <div className="wrapperBtnProgress">
          <div>
        <Grid container spacing={1} justify="space-between">
          <Grid item xs={12} spacing={0}>
            <div>
              <span className="progressLabel">{event.eventName}</span>
            </div>
            <TimerProgressBar
              progressDate={event.eventEndDate}
              createDate={event.eventCreateDate}
            />
            <CountdownTimer countdownDate={event.eventEndDate} />
          </Grid>
            </Grid>
            </div>
        <div className="btnDeleteDone">
          <button className="faBtn">
            <i class="far fa-trash-alt"></i>
          </button>
          <button className="faBtn">
            <i class="far fa-check-circle"></i>
          </button>
          </div>
          </div>
      </section>
    );
  });
  return (
    <div className="listTimersContainer">
      <div className="headerOfListTimers">
        <div className="upcommingChecks">
          <h1>Live upcomming checks</h1>
        </div>
        <div className="remainingTime">
          <p style={{ paddingRight: "5px" }}>Remaining time</p>
          <i class="far fa-clock"></i>
        </div>
      </div>
      <ol>{eventsArray}</ol>
    </div>
  );
};
export default ListOfTimers;
