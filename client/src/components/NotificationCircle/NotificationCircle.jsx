import React, { useState, useEffect } from "react";
import Badge from "@mui/material/Badge";
import "./NotificationCircle.css";

const NotificationCircle = () => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (window.localStorage.getItem('events') !== null) {
      const eventsFromStore = JSON.parse(window.localStorage.events);
      for (let i = 0; i < eventsFromStore.length; i++){
        if (Date.now() >= Date.parse(eventsFromStore[i].eventNotification)){
          setCount(prevState => prevState + 1)
        }}
    }
    else {
      setCount(0)
    }
    
  }, []);

  return (
    <div className="badgeWithCircle">
      <Badge badgeContent={count} color="primary" className="badgeCircle">
        <p className="eventIcon">Events</p>
      </Badge>
    </div>
  );
};

export default NotificationCircle;
