// import { useState, useEffect, useMemo } from "react";

// const useNotification = (error, alert) => {
//   const [notificationType, setNotificationType] = useState("");
//   const [successMessage, setSuccessMessage] = useState("");

//   useEffect(() => {
//     if (error) {
//       setSuccessMessage(alert);
//       setNotificationType("error");
//     } else {
//       setSuccessMessage(alert);
//       setNotificationType("success");
//     }
//   }, [error, alert]);

//   return { notificationType, successMessage };
// };

// export default useNotification;
import { useMemo } from "react";

const useNotification = (error, alert) => {
  const { notificationType, successMessage } = useMemo(() => {
    if (error) {
      return { notificationType: "error", successMessage: alert };
    } else {
      return { notificationType: "success", successMessage: alert };
    }
  }, [error, alert]);

  return { notificationType, successMessage };
};

export default useNotification;
