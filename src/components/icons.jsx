import style from "../dashboard.module.css";
import { Link } from "react-router-dom";

const Icons = () => {
  const icons = [
    { text: "Personal data", icon: "/prof_icn.png", page: "/profile" },
    { text: "Attendance", icon: "/clock.png", page: "/Attendance" },
    { text: "Leave", icon: "/leave_icn.png", page: "/leave" },
    { text: "Inbox", icon: "/inbox_icn.png", page: "/instructorDash" },
    { text: "Scan QR Code", icon: "/scan_icn.png", page: "/schedule" },
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
