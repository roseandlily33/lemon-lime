import EachPhotoCreate from "./EachPhoto.component";
import PhotosCreate from "./PhotosCreate.component";
import PropTypes from "prop-types";
import React from "react";

//setPhotos, photos
const BottomCreate = ({ images, setImages }) => {
  const addNewImage = (img) => {
    setImages((prev) => [...prev, img]);
  };

  // const addNewPhotos = (photo) => {
  //   setPhotos((prev) => [...prev, photo]);
  // };
  return (
    <>
      <PhotosCreate
        images={images}
        setImages={setImages}
        addNewImage={addNewImage}
        //addNewPhotos={addNewPhotos}
      />
      {/* photos={photos}  */}
      <EachPhotoCreate images={images} setImages={setImages} />
    </>
  );
};
BottomCreate.propTypes = {
  images: PropTypes.array.isRequired,
  setImages: PropTypes.func.isRequired,
  setPhotos: PropTypes.func.isRequired,
  //photos: PropTypes.array.isRequired,
};

export default BottomCreate;
