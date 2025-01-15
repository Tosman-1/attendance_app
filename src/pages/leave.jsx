import Page_top from "../components/page_top";
import style from "../leave.module.css";

const Leave = () => {
  return (
    <div className="main_cont">
      <Page_top />
      <div className={style.leav_bdy}>
        <h3>Leave</h3>
        <div className={style.leav_form}>
          <div className={style.leav_inp}>
            <label>Leave Date</label>
            <input type="text" />
          </div>
          <div className={style.leav_inp}>
            <label>Leave Type</label>
            <select>
              <option value="1">Sick Leave</option>
              <option value="2">Emergency Leave</option>
              <option value="3">Maternity Leave</option>
            </select>
          </div>
          <div className={style.leav_inp}>
            <label>Department</label>
            <input type="text" />
          </div>
          <div className={style.leav_inp}>
            <label>Courses Completed</label>
            <input type="text" />
          </div>
          <div className={style.leav_text}>
            <label>Reason</label>
            <textarea
              rows="4"
              cols="50"
              placeholder="Write comment down here"
            ></textarea>
          </div>
        </div>
        <div className={style.leav_btn}>
          <button>Submit Leave</button>
        </div>
      </div>
    </div>
  );
};

export default Leave;
