import EachPhotoCreate from "./EachPhoto.component";
import PhotosCreate from "./PhotosCreate.component";
import PropTypes from "prop-types";
import React from "react";

const BottomCreate = ({ images, setImages, setPhotos, photos }) => {
  const addNewImage = (img) => {
    setImages((prev) => [...prev, img]);
  };

  const addNewPhotos = (photo) => {
    setPhotos((prev) => [...prev, photo]);
  };
  return (
    <>
      <PhotosCreate
        images={images}
        addNewImage={addNewImage}
        addNewPhotos={addNewPhotos}
      />
      <EachPhotoCreate photos={photos} />
    </>
  );
};
BottomCreate.propTypes = {
  images: PropTypes.array.isRequired,
  setImages: PropTypes.func.isRequired,
  setPhotos: PropTypes.func.isRequired,
  photos: PropTypes.array.isRequired,
};

export default BottomCreate;
