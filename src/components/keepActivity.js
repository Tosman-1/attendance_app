// import Api from "../api";

// import { useEffect, useState } from "react";

// // import { useNavigate } from "react-router-dom";

// const TOKEN_EXPIRY_TIME = 18 * 60 * 1000; // Refresh token every 18 minutes

// const KeepActivity = () => {
//   const [inactivityTimeout, setInactivityTimeout] = useState(null);

//   const navigate = useNavigate();

//   const startInactivityTimer = () => {
//     if (inactivityTimeout) clearTimeout(inactivityTimeout);

//     const timeout = setTimeout(() => {
//       alert("Session expired due to inactivity.");
//       sessionStorage.clear(); // clear the token stored in the session storage
//       navigate("/login"); // Redirect to login page
//     }, TOKEN_EXPIRY_TIME);

//     setInactivityTimeout(timeout);
//   };

//   // Refresh the access token
//   const refreshAccessToken = async () => {
//     try {
//       const token = sessionStorage.getItem("accessToken");
//       if (!token) return;

//       const response = await Api.get("/refresh-access.php", {
//         headers: { Authorization: `Bearer ${token}` },
//       });

//       const { accessToken } = response.data;
//       sessionStorage.setItem("accessToken", accessToken);
//       console.log("Token refreshed successfully");
//       // startInactivityTimer(); // Restart the inactivity timer with the new access token
//     } catch (error) {
//       console.error("Failed to refresh token:", error);
//       sessionStorage.clear();
//       navigate("/login"); // Redirect to login page
//     }
//   };

//   // Set up activity tracking
//   const trackActivity = () => {
//     ["mousemove", "keydown", "click"].forEach((event) =>
//       window.addEventListener(event, startInactivityTimer)
//     );
//   };

//   // Initialize the session logic
//   const initializeSession = () => {
//     startInactivityTimer(); // Start inactivity timer
//     trackActivity(); // Track user activity
//     setInterval(refreshAccessToken, TOKEN_EXPIRY_TIME); // Refresh token periodically
//   };

//   useEffect(() => {
//     initializeSession();

//     return () => {
//       clearTimeout(inactivityTimeout); // Cleanup timeout
//       ["mousemove", "keydown", "click"].forEach((event) =>
//         window.removeEventListener(event, startInactivityTimer)
//       );
//     };
//   }, []);
// };

// export default KeepActivity;

import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Api from "../api";

const TOKEN_EXPIRY_TIME = 18 * 60 * 1000; // 18 minutes

const useKeepActivity = () => {
  const [sessionExpired, setSessionExpired] = useState(false);

  const navigate = useNavigate();
  const inactivityTimeout = useRef(null);
  const intervalId = useRef(null);

  useEffect(() => {
    const startInactivityTimer = () => {
      if (inactivityTimeout.current) clearTimeout(inactivityTimeout.current);

      // console.log("Before setting timeout:", inactivityTimeout.current); // Should log previous timeout ID or null

      // if (inactivityTimeout.current) {
      //   clearTimeout(inactivityTimeout.current);
      //   console.log("Cleared timeout:", inactivityTimeout.current);
      // }

      inactivityTimeout.current = setTimeout(() => {
        if (!sessionExpired) {
          setSessionExpired(true);
          alert("Session expired due to inactivity.");
          sessionStorage.clear();
          navigate("/login");
        }
      }, TOKEN_EXPIRY_TIME);

      // console.log("After setting timeout:", inactivityTimeout.current);

      // setInactivityTimeout(timeout);
    };

    const refreshAccessToken = async () => {
      try {
        const token = sessionStorage.getItem("accessToken");
        if (!token) return;

        const response = await Api.get("/refresh-access.php", {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (response.data) {
          const { accessToken } = response.data;
          sessionStorage.setItem("accessToken", accessToken);
          console.log("Token refreshed successfully");
        }
      } catch (error) {
        console.error("Failed to refresh token:", error);
        sessionStorage.clear();
        navigate("/login");
      }
    };

    const trackActivity = () => {
      ["mousemove", "keydown", "click"].forEach((event) =>
        window.addEventListener(event, startInactivityTimer)
      );
    };

    const cleanupActivityTracking = () => {
      ["mousemove", "keydown", "click"].forEach((event) =>
        window.removeEventListener(event, startInactivityTimer)
      );
    };

    // console.log(inactivityTimeout.current);

    // Initialize
    // startInactivityTimer();
    trackActivity();
    intervalId.current = setInterval(refreshAccessToken, TOKEN_EXPIRY_TIME);

    return () => {
      clearTimeout(inactivityTimeout.current);
      clearInterval(intervalId.current);
      cleanupActivityTracking();
    };
  }, []);

  return null;
};

export default useKeepActivity;
