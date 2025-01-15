import style from "../scan.module.css";
import Sidebar from "../components/sidebar";
import { QRCodeCanvas } from "qrcode.react";

const Scan = () => {
  return (
    <div className={`main_cont ${style.main}`}>
      <div className={style.logo}>
        <img src="./logo.png" alt="logo" />
      </div>
      <div className={style.scncd}>
        <h3>Scan QR code</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur. Consectetur et quisque sit
          diam viverra curabitur. Nibh in duis nisl et pretium faucibus.
        </p>
      </div>
      <div className={style.qr}>
        <QRCodeCanvas
          value={`ID: ${"10"}, Name: ${"TOSIN"}, Age: ${"25"}`}
          size={316}
          bgColor={"#ffffff"} // Background color
          fgColor={"#000000"} // Foreground color
          level={"H"} // Error correction level (L, M, Q, H)
        />
      </div>
    </div>
  );
};
export default Scan;
