import Page_top from "../components/page_top";
import { Link } from "react-router-dom";
import style from "../profile.module.css";
import useUserStore from "../store/userStore";
const Profile = () => {
  const { user } = useUserStore();
  return (
    <>
      <div className="main_cont">
        <Page_top />
        <div className={style.prof_cont}>
          <h3>Personal Data</h3>
          <div className={style.prof_bdy}>
            <div className={style.prof_img}>
              <img src={user?.picture || "/prof_pic.png"} alt="user" />
              <div className={style.btn_txt}>
                <button>Upload Photo</button>
                <p>
                  <span>At least 800 X 800px recommended</span>
                  <span>JPG or PNG is allowed</span>
                </p>
              </div>
            </div>
            <div className={style.prof_det}>
              <h4>Personal Info</h4>
              <div className={style.prof_det_div}>
                <div>
                  <span>Full Name</span>
                  <p>{`${user.firstname} ${user.lastname}`}</p>
                </div>
                <div>
                  <span>Email</span>
                  <p>{user.email}</p>
                </div>
                <div>
                  <span>Phone</span>
                  <p>
                    {user.phone_num ? user.phone_num : "_ _ _ _ _ _ _ _ _ _ _"}
                  </p>
                </div>
                <div>
                  <span>City</span>
                  <p>{user.city ? user.city : "_ _ _ _ _ _ _ "}</p>
                </div>
              </div>
              <h4>SQI Profile</h4>
              <div className={style.prof_det_div}>
                <div>
                  <span>Course of Study</span>
                  <p>{user.department}</p>
                </div>
                <div>
                  <span>Duration</span>
                  <p>8 months</p>
                </div>
                <div>
                  <span>Student ID</span>
                  <p>{user.student_id}</p>
                </div>
                <div>
                  <span>Level</span>
                  <p>4</p>
                </div>
              </div>
              <div className={style.edit_btn_div}>
                <Link to="/home/edit_profile">
                  <button>
                    <img src="/mdi_edit-outline.svg" alt="" />
                    <span>Edit Profile</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
