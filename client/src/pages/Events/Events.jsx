import React, { useState, useMemo } from "react";
import "./Events.css";
import { TimerContext } from "../../contexts";
import ListOfTimers from "../../components/ListOfTimers/ListOfTimers";
import CreateNewTimer from "../../components/CreateNewTimer/CreateNewTimer";
const Events = () => {
  const [events, setEvents] = useState([]);

  useMemo(() => {
    if (window.localStorage.getItem('events') !== null) {      
      setEvents(JSON.parse(window.localStorage.events))
    }
  }, []);

  return (
    <TimerContext.Provider value={[events, setEvents]}>
      <div className="eventsContainer">
        <ListOfTimers />
        <CreateNewTimer />
      </div>
    </TimerContext.Provider>
  );
};

export default Events;
