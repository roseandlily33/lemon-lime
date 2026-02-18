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
