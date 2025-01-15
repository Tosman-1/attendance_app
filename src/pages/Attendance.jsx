import style from "../attendance.module.css";

const Attendance = () => {
  return (
    <div className={style.atten}>
      <h4>Attendance</h4>
      <div className={style.prabel}>
        <div className={style.present}>
          <p>Present</p>
          <span>25</span>
        </div>
        <div className={style.present}>
          <p>Present</p>
          <span>25</span>
        </div>
        <div className={style.present}>
          <p>Present</p>
          <span>25</span>
        </div>
        <div className={style.present}>
          <p>Present</p>
          <span>25</span>
        </div>
      </div>
      <div className={style.analys}>
        <div className={style.sumry}>
          <p>Attendance Summary</p>
          <div className={style.round}>
            <svg
              width="250"
              height="250"
              viewBox="0 0 42 42"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="21"
                cy="21"
                r="15.915"
                fill="transparent"
                stroke="#020659"
                stroke-width="8"
                stroke-dasharray="35 65"
                stroke-dashoffset="0"
              ></circle>

              <circle
                cx="21"
                cy="21"
                r="15.915"
                fill="transparent"
                stroke="#ffc72b"
                stroke-width="8"
                stroke-dasharray="65 35"
                stroke-dashoffset="-35"
              ></circle>

              <circle cx="21" cy="21" r="11" fill="#fff"></circle>
            </svg>
          </div>
          <div className={style.preab}>
            <div className={style.iden}>
              <div style={{ backgroundColor: "#ffc72b" }}></div>
              <span>Present</span>
            </div>
            <div className={style.iden}>
              <div style={{ backgroundColor: "#020659" }}></div>
              <span>Absent</span>
            </div>
          </div>
        </div>
        <div className={style.graph}>
          <canvas id="attendanceGraph"></canvas>
        </div>
      </div>
    </div>
  );
};

export default Attendance;
