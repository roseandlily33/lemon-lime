import React from "react";
import PropTypes from "prop-types";
import DestructiveButton from "../../../components/buttons/destructive-button/DestructiveButton.component";

const DeletePhotoButton = ({ photo, setImages }) => {
  const deletePhoto = (e, photo) => {
    e.preventDefault();
    setImages((prev) => prev.filter((img) => img.publicId !== photo.publicId));
  };
  return (
    <>
      <DestructiveButton
        span="Delete"
        functionName={(e) => deletePhoto(e, photo)}
      />
    </>
  );
};
DeletePhotoButton.propTypes = {
  photo: PropTypes.string,
  setImages: PropTypes.func.isRequired,
};

export default DeletePhotoButton;
