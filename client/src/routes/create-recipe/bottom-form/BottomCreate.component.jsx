import EachPhotoCreate from "./EachPhoto.component";
import PhotosCreate from "./PhotosCreate.component";
import PropTypes from "prop-types";
import React from "react";

const BottomCreate = ({ images, setImages }) => {
  const addNewImage = (img) => {
    setImages((prev) => [...prev, img]);
  };

  return (
    <>
      <PhotosCreate
        images={images}
        setImages={setImages}
        addNewImage={addNewImage}
      />
      <EachPhotoCreate images={images} setImages={setImages} />
    </>
  );
};
BottomCreate.propTypes = {
  images: PropTypes.array,
  setImages: PropTypes.func.isRequired,
  setPhotos: PropTypes.func.isRequired,
};

export default BottomCreate;
