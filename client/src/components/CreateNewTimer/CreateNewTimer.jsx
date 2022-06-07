import React from "react";
import { useState, useContext } from "react";
import { TimerContext } from "../../contexts";
import { Formik, Field, Form } from "formik";
import "./CreateNewTimer.css";

const CreateNewTimer = () => {
  const [events, setEvents] = useContext(TimerContext);

  const addEvents = (eventName, eventEndDate, eventNotification) => {
    const newEvent = {
      eventCreateDate: Date.now(),
      eventName: eventName,
      eventEndDate: eventEndDate,
      eventNotification: eventNotification,
    };
    const newEvents = [...events, newEvent];
    setEvents(newEvents);
  };

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
          <Field type="name" placeholder="enter event name" name="eventName" className="fieldName" required/>
          <Field type="date" name="eventEndDate" className="fieldEventDate" required/>
          <Field type="date" name="eventNotification" className="fieldNotificationDate" required />
          <button type="submit" className="buttonCreateTimer">
            Create
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default CreateNewTimer;
