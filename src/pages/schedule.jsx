import { useState } from "react";

import Ancalender from "../components/ancalender";
import "../schedule.css";

const Schedule = () => {
  const [isSchedule, setIsSchedule] = useState(true);
  return (
    <div className="main_cont">
      <div className="notnm">
        <img src="/Notification.svg" alt="" />
        <p>M. Irabo</p>
      </div>
      <div className="shec_div">
        <h3>Schedule</h3>
        <div className="shec_bdy">
          <div className="calender shec">
            <Ancalender isSchedule={isSchedule} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
