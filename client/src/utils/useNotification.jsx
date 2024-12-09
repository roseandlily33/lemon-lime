import { useState, useEffect } from "react";
// import { clearState } from "../redux/crudRecipeSlice";
// import { useDispatch } from "react-redux";

const useNotification = (success, error, alert) => {
  const [notificationType, setNotificationType] = useState();
  const [successMessage, setSuccessMessage] = useState("");
  // const dispatch = useDispatch();

  useEffect(() => {
    if (success) {
      setSuccessMessage(alert);
      setNotificationType(true);
    }
    if (error) {
      setSuccessMessage(alert);
      setNotificationType(false);
    }
    // const timer = setTimeout(() => {
    //   dispatch(clearState());
    // }, 3000);
    // return () => clearTimeout(timer);
  }, [success, error, alert]);

  return { notificationType, successMessage };
};

export default useNotification;
