import React, { useRef } from "react";
import { Field } from "formik";

const FieldFileInput = ({ classes, ...rest }) => {
  const { fileUploadContainer, labelClass, fileNameClass, fileInput } = classes;

  const fileInputEl = useRef(null);

  return (
    <Field name={rest.name}>
      {(props) => {
        const { field } = props;

        const getFileName = () => {
          if (props.field.value) {
            return props.field.value.name;
          }
          return "";
        };

        return (
          <div className={fileUploadContainer}>
            <label htmlFor="fileInput" className={labelClass}>
              Choose file
            </label>
            <span id="fileNameContainer" className={fileNameClass}>
              {getFileName()}
            </span>
            <input
              {...field}
              className={fileInput}
              id="fileInput"
              type="file"
              ref={fileInputEl}
              value={""}
              onChange={(event) =>
                props.form.setFieldValue("file", event.target.files[0])
              }
            />
          </div>
        );
      }}
    </Field>
  );
};

export default FieldFileInput;
