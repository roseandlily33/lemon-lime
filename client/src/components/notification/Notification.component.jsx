import {
  NotificationContainer,
  NotificationMessageError,
  NotificationMessageSuccess,
} from "./Notification.styles";
import React from "react";
import PropTypes from "prop-types";

const Notification = ({ success, message }) => {
  console.log("NOTFICIATION CONTAINER INCOMING", success, message);
  return (
    <>
      <NotificationContainer>
        {success ? (
          <NotificationMessageSuccess>{message}</NotificationMessageSuccess>
        ) : (
          <NotificationMessageError>{message}</NotificationMessageError>
        )}
      </NotificationContainer>
    </>
  );
};
Notification.propTypes = {
  success: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
};

export default Notification;
