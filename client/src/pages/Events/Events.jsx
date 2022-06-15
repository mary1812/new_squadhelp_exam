import React, { useState, useMemo } from "react";
import Header from "../../components/Header/Header"
import "./Events.css";
import { TimerContext } from "../../contexts";
import ListOfTimers from "../../components/ListOfTimers/ListOfTimers";
import CreateNewTimer from "../../components/CreateNewTimer/CreateNewTimer";
import NotificationCircle from "../../components/NotificationCircle/NotificationCircle";
const Events = () => {
  const [events, setEvents] = useState([]);
  const compireDates = (event1, event2) => {
    return Date.parse(event1.eventEndDate) - Date.parse(event2.eventEndDate)
  }

  useMemo(() => {
    if (window.localStorage.getItem('events') !== null) {
      const eventsArray = JSON.parse(window.localStorage.events)
      setEvents(eventsArray.sort(compireDates))
    } else {
      setEvents([])
    }
  }, []);

  return (
    <TimerContext.Provider value={[events, setEvents]}>
      <Header/>
      <div className="eventsContainer">
        <div className="listOfTimers"><ListOfTimers /></div>
        <div className="createNewTimer"><CreateNewTimer /></div>
      </div>
    </TimerContext.Provider>
  );
};

export default Events;
