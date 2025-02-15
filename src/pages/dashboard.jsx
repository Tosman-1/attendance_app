import { useState } from "react";
import style from "../dashboard.module.css";
import "../dash_calender.css";
import Ancalender from "../components/ancalender";
import Icons from "../components/icons";
import Page_top from "../components/page_top";
import useUserStore from "../store/userStore";

const Dashboard = () => {
  const [analysis, setAnalysis] = useState([
    { text: "Present", value: "40" },
    { text: "Absent", value: "10" },
    { text: "Early Leave", value: "5" },
    { text: "Delay", value: "5" },
  ]);

  const { user } = useUserStore();

  return (
    <div className="main_cont">
      <Page_top />
      <div className={style.dash_cont}>
        <h2>Dashboard</h2>
        <div className={style.nmanls}>
          <div className={style.nmotr}>
            <div className={`${style.nmatpc} ${style.nmlvdp}`}>
              <h3>
                {user ? `${user.firstname} ${user.lastname}` : "_ _ _ _ _ _ "}
              </h3>
              {user ? (
                <p>{`${user.department} / ${user.student_id}`}</p>
              ) : (
                <p>Loading user data...</p>
              )}

              <p>Level 2</p>
              <p>Active</p>
            </div>
            <div className={`${style.nmatpc} ${style.atpt}`}>
              <div>
                <p>
                  <span>Attendance</span>
                  <span>45%</span>
                </p>
                <div className={style.attmrk}>
                  <div className={style.atinmrk}></div>
                </div>
              </div>
              <div>
                <p>
                  <span>This Month</span>
                  <span>80%</span>
                </p>
                <div className={style.attmrk}>
                  <div className={style.atinmrk}></div>
                </div>
              </div>
            </div>
            <div className={`${style.nmatpc} ${style.imgst}`}>
              <img src="/prof_pic.png" alt="" />
            </div>
          </div>
          <div className={style.anls}>
            <h3>Analysis</h3>
            <div className={style.anlscnt}>
              <p>October</p>
            </div>
            <div className={style.prab}>
              {analysis.map((each, index) => (
                <div key={`analy${index + 1}`} className={style.prgrs}>
                  <span>{each.text}</span>
                  <p>{each.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Icons />
        <div className={style.caldiv}>
          <div className="caldi">
            <Ancalender />
          </div>
          <div className={style.caloth}>
            <div className={style.dtnd}>
              <p>4</p>

              <div className={style.clasnm}>
                <p>Motion Graphics</p>
                <span>LVL 4</span>
              </div>
              <div className={style.froto}>
                <span>8:00AM - 10:00AM</span>
              </div>
            </div>
            <div className={style.dtnd}>
              <p>6</p>

              <div className={style.clasnm}>
                <p>Motion Graphics</p>
                <span>LVL 4</span>
              </div>
              <div className={style.froto}>
                <span>8:00AM - 10:00AM</span>
              </div>
            </div>
            <div className={style.dtnd}>
              <p>9</p>

              <div className={style.clasnm}>
                <p>Motion Graphics</p>
                <span>LVL 4</span>
              </div>
              <div className={style.froto}>
                <span>8:00AM - 10:00AM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
