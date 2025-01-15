// import React from 'react'
import Icons from "../components/icons";
import style from "./instructorDash.module.css";
import Ancalender from "../components/ancalender";
import Page_top from "../components/page_top";

const InstructorDash = () => {
  return (
    <div className="main_cont">
      <Page_top />
      <h3>Dashboard</h3>
      <div className={style.top_div}>
        <div className={style.in_top_div}>
          <p>DATE</p>
          <span>09 January, 2025</span>
        </div>
        <div className={style.in_top_div}>
          <p>DEPARTMENT</p>
          <span>Product Design Dept.</span>
        </div>
        <div className={style.in_top_div}>
          <p>NO OF STUDENTS</p>
          <span>30</span>
        </div>
        <div className={style.in_top_div}>
          <p>PRESENT</p>
          <span>20</span>
        </div>
        <div className={style.in_top_div}>
          <p>ABSENT</p>
          <span>10</span>
        </div>
        <div className={style.in_top_div}>
          <p>LATE</p>
          <span>15</span>
        </div>
        <div className={`${style.in_top_div}`}>
          <img src="/instructor_qr-code.png" alt="" />
          <span>Scan Code</span>
        </div>
      </div>
      <Icons />
      <div>
        <div className={`caldi ${style.cal_cont}`}>
          <Ancalender />
        </div>
      </div>
    </div>
  );
};

export default InstructorDash;
