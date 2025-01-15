import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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

const Home = () => {
  return (
    <Router>
      <div className="main_div">
        <div className="sidebdiv">
          <Sidebar />
        </div>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/edit_profile" element={<Edit_profile />} />
          <Route path="/scan" element={<Scan />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/leave" element={<Leave />} />
          <Route path="/confirm" element={<Confirm />} />
          <Route path="/Attendance" element={<Attendance />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/instructorDash" element={<InstructorDash />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Home;
