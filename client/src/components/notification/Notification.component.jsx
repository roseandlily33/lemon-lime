import {
  NotificationContainer,
  NotificationMessageError,
  NotificationMessageSuccess,
} from "./Notification.styles";
import React from "react";
import PropTypes from "prop-types";

const Notification = ({ status, messageShown }) => {
  console.log("NOTFICIATION CONTAINER INCOMING", status, messageShown);
  return (
    <>
      <NotificationContainer>
        {status === "success" ? (
          <NotificationMessageSuccess>
            {messageShown}
          </NotificationMessageSuccess>
        ) : (
          <NotificationMessageError>{messageShown}</NotificationMessageError>
        )}
      </NotificationContainer>
    </>
  );
};
Notification.propTypes = {
  status: PropTypes.string.isRequired,
  messageShown: PropTypes.string.isRequired,
};

export default Notification;
