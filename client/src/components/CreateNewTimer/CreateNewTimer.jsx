import React from "react";
import { useContext } from "react";
import { TimerContext } from "../../contexts";
import { Formik, Field, Form } from "formik";
import "./CreateNewTimer.css";

const CreateNewTimer = () => {
  const [events, setEvents] = useContext(TimerContext);

  const addEvents = (
    eventName,
    eventEndDate,
    eventNotification,
    eventEndTime,
    eventNotificationTime
  ) => {
    const newEvent = {
      eventCreateDate: Date.now(),
      eventName: eventName,
      eventEndDate: eventEndDate + ' ' + eventEndTime,
      eventNotification: eventNotification + ' ' + eventNotificationTime,
    };
    const newEvents = [...events, newEvent];
    setEvents(newEvents);
  };

  const submitHandler = (values, formikBag) => {
    const {
      eventName,
      eventEndDate,
      eventNotification,
      eventEndTime,
      eventNotificationTime,
    } = values;
    addEvents(
      eventName,
      eventEndDate,
      eventNotification,
      eventEndTime,
      eventNotificationTime
    );
    formikBag.resetForm();
  };

  return (
    <div className="formCreateTimer">
      <div style={{ display: "flex" }}>
        <h1 className="headerCreateTimer">Create new timer</h1>
        <i class="far fa-calendar-plus" style={{ paddingLeft: "10px" }}></i>
      </div>
      <Formik
        className="inputdataEvents"
        initialValues={{
          eventName: "",
          eventEndDate: "",
          eventNotification: "",
          eventEndTime: "",
          eventNotificationTime: "",
        }}
        onSubmit={submitHandler}
      >
        <Form className="inputForm">
          <Field
            type="name"
            name="eventName"
            className="fieldName"
            placeholder="Enter the name of the event"
            required
          />
          <p className="enterDate">Select the end date of the event</p>
          <Field
            type="date"
            name="eventEndDate"
            className="fieldEventDate"
            max="2050-12-31"
            required
          />
          <p className="enterTime">Select the end time of the event </p>

          <Field type="time" name="eventEndTime" className="deadlineTime" />
          <p className="enterDate">Select the event notification date </p>
          <Field
            type="date"
            name="eventNotification"
            className="fieldNotificationDate"
            max="2050-12-31"
            required
          />
          <p className="enterTime">Select the event notification time </p>

          <Field
            type="time"
            name="eventNotificationTime"
            className="deadlineTime"
          />
          <button type="submit" className="buttonCreateTimer">
            Create
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default CreateNewTimer;
