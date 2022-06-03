import React from "react";
import { useState, useContext } from "react";
import { TimerContext } from "../../contexts";
import { Formik, Field, Form } from "formik";
import "./CreateNewTimer.css";

const CreateNewTimer = () => {
  // const [value, setValue] = useState('');
  const [events, setEvents] = useContext(TimerContext);

  const addEvents = (eventName, eventEndDate, eventNotification) => {
    const newEvent = {
      eventName: eventName,
      eventEndDate: eventEndDate,
      eventNotification: eventNotification,
    };
    const newEvents = [...events, newEvent];
    setEvents(newEvents);
  };

  // console.log(events);
  // window.localStorage.events = JSON.stringify(events);

  // const getFieldValue = (event) => {
  //   const userValue = event.target.value;
  //   console.log(userValue);
  // }
  // const changeValue = (event) => {
  //   setValue({value: event.target.value})
  // }
  
  const submitHandler = (values, formikBag) => {
    const { eventName, eventEndDate, eventNotification } = values;
    addEvents(eventName, eventEndDate, eventNotification);
    formikBag.resetForm();
  };

  return (
    <div className="formCreateTimer">
      <h1 className="headerCreateTimer">Create new timer</h1>
      <Formik
        className="inputdataEvents"
        initialValues={{
          eventName: "",
          eventEndDate: "",
          eventNotification: "",
        }}
        onSubmit={submitHandler}
      >
        <Form className="inputForm">
          <Field type="name" placeholder="enter event name" name="eventName" />
          <Field type="date" name="eventEndDate" />
          <Field type="date" name="eventNotification" />
          {/* <input value={value} onChange={changeValue}/> */}
          <button type="submit" className="buttonCreateTimer">
            Create
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default CreateNewTimer;
