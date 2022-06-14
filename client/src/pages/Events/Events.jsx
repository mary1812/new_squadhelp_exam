import React, { useState, useMemo } from "react";
import "./Events.css";
import { TimerContext } from "../../contexts";
import ListOfTimers from "../../components/ListOfTimers/ListOfTimers";
import CreateNewTimer from "../../components/CreateNewTimer/CreateNewTimer";
import NotificationCircle from "../../components/NotificationCircle/NotificationCircle";
const Events = () => {
  const [events, setEvents] = useState([]);

  useMemo(() => {
    if (window.localStorage.getItem('events') !== null) {      
      setEvents(JSON.parse(window.localStorage.events))
    } else {
      setEvents([])
    }
  }, []);

  return (
    <TimerContext.Provider value={[events, setEvents]}>
      <div className="eventsContainer">
        <div className="listOfTimers"><ListOfTimers /></div>
        <div className="createNewTimer"><CreateNewTimer /></div>
        <NotificationCircle/>
      </div>
    </TimerContext.Provider>
  );
};

export default Events;
