import * as React from "react";
import Box from "@mui/material/Box";
import "./TimerProgressBar.css";
import LinearProgress from "@mui/material/LinearProgress";

export default function TimerProgressBar(props) {
  const nowDate = Date.now();
  const msTime = Date.parse(props.createDate)
  const objProg = Date.parse(props.progressDate);
  const dateInPercent =
    ((Date.now() - props.createDate) / (objProg - props.createDate)) * 100;
  const [progress, setProgress] = React.useState(dateInPercent);
  console.log(progress);
  console.log(msTime)
  return (
    <div>
      <LinearProgress
        variant="determinate"
        color={props.color}
        value={progress}
        style={{ height: "50px", borderRadius: "5px" }}
      />
    </div>
  );
}
