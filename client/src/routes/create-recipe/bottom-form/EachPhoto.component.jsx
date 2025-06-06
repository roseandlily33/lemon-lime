import PropTypes from "prop-types";
import React from "react";
import DeletePhotoButton from "./DeletePhoto.component";

// prettier-ignore
const EachPhotoCreate = ({ images, setImages }) => {
  return (
    <>
      <div
        className="items"
        style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}
      >
        {images?.map((p, idx) => (
          <div key={idx} style={{display: 'flex',  flexDirection: 'column'}}>
          <img
            key={p.url}
            style={{ borderRadius: "5px" }}
            src={p.url}
            alt="images uploaded"
          />
          <DeletePhotoButton photo={p} setImages={setImages}/>
          </div>
        ))}
      </div>
    </>
  );
};
EachPhotoCreate.propTypes = {
  images: PropTypes.array,
  setImages: PropTypes.func,
};

export default EachPhotoCreate;
