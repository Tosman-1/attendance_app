// import { Link } from "react-router-dom";
import Page_top from "../components/page_top";
import style from "../profile.module.css";

const Edit_profile = () => {
  return (
    <div className="main_cont">
      <Page_top />
      <div className={style.eprof}>
        <h3>Edit Profile</h3>
        <div className={style.eprof_bdy}>
          <div className={style.epinfo}>
            <div className={style.lab_inp}>
              <label>First Name</label>
              <input type="text" placeholder="John" />
            </div>
            <div className={style.lab_inp}>
              <label>Last Name</label>
              <input type="text" placeholder="Doe" />
            </div>
            <div className={style.lab_inp}>
              <label>
                <select name="" id={style.ep_sel}>
                  <option value="+234">+234</option>
                  <option value="+234">+235</option>
                  <option value="+234">+236</option>
                </select>
              </label>
              <input type="number" placeholder="John" />
            </div>
            <div className={style.lab_inp}>
              <label>Email Address</label>
              <input type="text" placeholder="John" />
            </div>
            <div className={style.lab_inp}>
              <label>Gender</label>
              <select name="" id={style.gen_sel}>
                <option value=""></option>
                <option value="M">Male</option>
                <option value="F">Female</option>
              </select>
            </div>
            <div className={style.lab_inp}>
              <label>Religion</label>
              <input type="text" placeholder="John" />
            </div>
          </div>
          <h4>SQI Profile</h4>
          <div className={style.epinfo}>
            <div className={style.lab_inp}>
              <label>Duration</label>
              <input type="text" placeholder="John" />
            </div>
            <div className={style.lab_inp}>
              <label>Student ID</label>
              <input type="text" placeholder="John" />
            </div>
            <div className={style.lab_inp}>
              <label>Course of Study</label>
              <input type="text" placeholder="John" />
            </div>
          </div>
          <div className={style.edit_btn_div}>
            <button>
              <img src="/mdi_edit-outline.svg" alt="" />
              <span>Save Profile</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit_profile;
