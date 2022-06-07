import * as React from "react";
import Box from "@mui/material/Box";
import "./TimerProgressBar.css";
import LinearProgress from "@mui/material/LinearProgress";

export default function TimerProgressBar(props) {
  const nowDate = Date.now();
  const objProg = Date.parse(props.progressDate);
  const dateInPercent = ((Date.now() - props.createDate) / (objProg - props.createDate)) * 100;
  const [progress, setProgress] = React.useState(dateInPercent);
  console.log(progress);
  // console.log(progress)
  // React.useEffect(() => {
  //   const timer = setInterval(() => {
  //     setProgress((oldProgress) => {
  //       if (oldProgress >= 100) {
  //         return 0;
  //       }
  //       // const progressDate = Math.random() * 10;
  //       const progressDate = objProg;
  //       return Math.min((oldProgress + progressDate), 100);
  //     });
  //   }, 500);

  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, []);
  return (
    <div>
        <LinearProgress
          variant="determinate"
          value={progress}
          style={{ height: "50px", borderRadius: '5px' }}
      />
      </div>
  );
}
