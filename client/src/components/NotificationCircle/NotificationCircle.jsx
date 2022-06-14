import React, { useState, useEffect } from "react";
import Badge from "@mui/material/Badge";
import "./NotificationCircle.css";

const NotificationCircle = () => {
  const [count, setCount] = useState(0);
  const eventsFromStore = JSON.parse(window.localStorage.events);

  useEffect(() => {
    for (let i = 0; i < eventsFromStore.length; i++){
      if (Date.now() >= Date.parse(eventsFromStore[i].eventNotification)){
        setCount(prevState => prevState + 1)
      }
      console.log(count)
      console.log(eventsFromStore.eventNotification)
      console.log(Date.parse(eventsFromStore[0].eventNotification))
     
    }
  }, []);

  return (
    <div className="badgeWithCircle">
      <Badge badgeContent={count} color="primary" className="badgeCircle">
        <p className="eventIcon">events</p>
      </Badge>
    </div>
  );
};

export default NotificationCircle;
