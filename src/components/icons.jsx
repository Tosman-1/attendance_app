import style from "../dashboard.module.css";
import { Link } from "react-router-dom";

const Icons = () => {
  const icons = [
    { text: "Personal data", icon: "/prof_icn.png", page: "/home/profile" },
    { text: "Attendance", icon: "/clock.png", page: "/home/Attendance" },
    { text: "Leave", icon: "/leave_icn.png", page: "/home/leave" },
    { text: "Inbox", icon: "/inbox_icn.png", page: "/home/instructorDash" },
    { text: "Scan QR Code", icon: "/scan_icn.png", page: "/home/schedule" },
  ];

  return (
    <div className={style.dscnic}>
      {icons.map((icon, index) => (
        <div key={`icon${index + 1}`} className={style.icons}>
          <Link to={icon.page}>
            <img src={icon.icon} alt="" />
            <p>{icon.text}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Icons;
