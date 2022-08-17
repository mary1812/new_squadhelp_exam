import * as React from "react";
import Box from "@mui/material/Box";
import "./TimerProgressBar.css";
import LinearProgress from "@mui/material/LinearProgress";

export default function TimerProgressBar(props) {
  const nowDate = Date.now();
  const msTime = Date.parse(props.createDate);
  const objProg = Date.parse(props.progressDate);
  function dateInPercent() {
    return (
      ((Date.now() - props.createDate) / (objProg - props.createDate)) * 100
    );
  }
  const [progress, setProgress] = React.useState(dateInPercent());

  React.useEffect(() => {
    const timer = setInterval(() => {
    
      setProgress((oldProgress) =>
        oldProgress >= 100
          ? 0
          : dateInPercent()
      );
    }, 1000);


    return () => {
      clearInterval(timer);
    };
  }, [setProgress]);

  return (
    <div className="muiProgressBar">
      <LinearProgress
        variant="determinate"
        color={props.color}
        value={progress >= 100 ? 0 : progress}
        style={{ height: "50px", borderRadius: "5px" }}
        classname="linearProgress"
      />
    </div>
  );
}
