import PropTypes from "prop-types";
import React from "react";
// prettier-ignore
const EachPhotoCreate = ({ photos }) => {
  return (
    <>
      <div
        className="items"
        style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}
      >
        {photos?.map((url) => (
          <img
            key={url}
            style={{ borderRadius: "5px" }}
            src={url}
            alt="images uploaded"
          />
        ))}
      </div>
    </>
  );
};
EachPhotoCreate.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default EachPhotoCreate;
