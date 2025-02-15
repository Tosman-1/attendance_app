import { Route, Routes, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Sidebar from "../components/sidebar";
import Attendance from "./Attendance";
import Confirm from "./confirm";
import Leave from "./leave";
import Schedule from "./schedule";
import Edit_profile from "./edit_profile";
import Scan from "./scan";
import Dashboard from "./dashboard";
import Profile from "./profile";
import Setting from "./setting";
import InstructorDash from "../instructor/instructorDash";
import Api from "../api";
import useUserStore from "../store/userStore";
import useKeepActivity from "../components/keepActivity";

const Home = () => {
  const navigate = useNavigate();

  const { setUser } = useUserStore();

  useEffect(() => {
    const fetchUserData = async () => {
      const accessToken = sessionStorage.getItem("accessToken");
      // console.log(accessToken);

      if (!accessToken) {
        // Redirect to login page if no access token
        navigate("/login");
        return;
      }

      try {
        const response = await Api.get("/getUser.php", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
        });
        // Handle the response (e.g., save user data in state)
        console.log(response.data);
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);

        if (error.response) {
          // Server responded with an error status
          alert(error.response.data.message || "An error occurred");
          sessionStorage.clear();
        } else if (error.request) {
          // Request was made but no response received
          alert("Network error. Please try again later.");
          sessionStorage.clear();
        } else {
          // Something else went wrong
          alert("An unexpected error occurred.");
          sessionStorage.clear();
        }
        navigate("/login");
      }
    };

    fetchUserData();
  }, [setUser]);

  useKeepActivity();

  return (
    <div className="main_div">
      <div className="sidebdiv">
        <Sidebar />
      </div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="profile" element={<Profile />} />
        <Route path="edit_profile" element={<Edit_profile />} />
        <Route path="scan" element={<Scan />} />
        <Route path="schedule" element={<Schedule />} />
        <Route path="leave" element={<Leave />} />
        <Route path="confirm" element={<Confirm />} />
        <Route path="Attendance" element={<Attendance />} />
        <Route path="setting" element={<Setting />} />
        <Route path="instructorDash" element={<InstructorDash />} />
      </Routes>
    </div>
  );
};

export default Home;
