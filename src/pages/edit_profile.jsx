// import { Link } from "react-router-dom";
import Page_top from "../components/page_top";
import style from "../profile.module.css";
import useUserStore from "../store/userStore";
import { useState } from "react";

const Edit_profile = () => {
  const { user } = useUserStore();

  const [values, setValues] = useState({
    firstname: user.firstname || "",
    lastname: user.lastname || "",
    phone_num: user.phone_num || "",
    email: user.email,
    gender: user.gender || "",
    religion: user.religion || "",
    duration: user.duration || "",
    department: user.department || "",
    course: user.course || "",
    studentid: user.student_id || "s",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="main_cont">
      <Page_top />
      <div className={style.eprof}>
        <h3>Edit Profile</h3>
        <div className={style.eprof_bdy}>
          <div className={style.epinfo}>
            <div className={style.lab_inp}>
              <label>First Name</label>
              <input
                type="text"
                name="firstname"
                placeholder="John"
                value={values.firstname}
                onChange={handleChange}
              />
            </div>
            <div className={style.lab_inp}>
              <label>Last Name</label>
              <input
                type="text"
                name="lastname"
                placeholder="Doe"
                value={values.lastname}
                onChange={handleChange}
              />
            </div>
            <div className={style.lab_inp}>
              <label>
                <select name="" id={style.ep_sel}>
                  <option value="+234">+234</option>
                  <option value="+234">+235</option>
                  <option value="+234">+236</option>
                </select>
              </label>
              <input
                type="number"
                name="phone_num"
                placeholder="08111222333"
                value={values.phone_num}
                onChange={handleChange}
              />
            </div>
            <div className={style.lab_inp}>
              <label>Email Address</label>
              <input
                type="text"
                name="email"
                placeholder="johndoe@gmail.com"
                value={values.email}
                onChange={handleChange}
              />
            </div>
            <div className={style.lab_inp}>
              <label>Gender</label>
              <select
                name="gender"
                id={style.gen_sel}
                value={values.gender}
                onChange={handleChange}
              >
                <option value=""></option>
                <option value="M">Male</option>
                <option value="F">Female</option>
              </select>
            </div>
            <div className={style.lab_inp}>
              <label>Religion</label>
              <input
                type="text"
                name="religion"
                placeholder="Christain/muslim"
                value={values.religion}
                onChange={handleChange}
              />
            </div>
          </div>
          <h4>SQI Profile</h4>
          <div className={style.epinfo}>
            <div className={style.lab_inp}>
              <label>Duration</label>
              <input
                type="text"
                name="duration"
                placeholder="John"
                value={values.duration}
                onChange={handleChange}
              />
            </div>
            <div className={style.lab_inp}>
              <label>Student ID</label>
              <input
                type="text"
                name="studentid"
                placeholder="12345"
                value={values.studentid}
                onChange={handleChange}
              />
            </div>
            <div className={style.lab_inp}>
              <label>Course of Study</label>
              <input
                type="text"
                name="course"
                placeholder="Cyber security"
                value={values.course}
                onChange={handleChange}
              />
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
