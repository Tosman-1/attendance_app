import { useLocation, Link } from "react-router-dom";
import style from "../navbar.module.css";
const Sidebar = () => {
  const location = useLocation();
  const activeRoute = location.pathname.split("/")[1];
  return (
    <nav className={style.nav}>
      <div className={style.toplgdiv}>
        <img
          src="/logo.png"
          alt="Logo"
          style={{ width: "20px", height: "20px" }}
        />
        <p>SQI</p>
      </div>
      <div className={style.midprt}>
        <ul>
          <Link to="/">
            <li className={location.pathname === "/" ? style.active : ""}>
              <img src="/dashboard.svg" alt="" />
              <p>Dashboard</p>
            </li>
          </Link>
          <Link to="/profile">
            <li
              className={
                location.pathname === "/profile" ||
                location.pathname === "/edit_profile"
                  ? style.active
                  : ""
              }
            >
              <img src="/profile.svg" alt="" />
              <p>Profile</p>
            </li>
          </Link>
          <Link to="/setting">
            <li
              className={location.pathname === "/setting" ? style.active : ""}
            >
              <img src="/setting.svg" alt="" />
              <p>Setting</p>
            </li>
          </Link>
        </ul>
      </div>
      <div className={style.balnc}></div>
    </nav>
  );
};

export default Sidebar;
