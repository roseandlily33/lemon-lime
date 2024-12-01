import PhotosCreate from "../../createRecipe/BottomForm/PhotosCreate.component";
import EachPhotoCreate from "../../createRecipe/BottomForm/EachPhoto.component";
import React from "react";
import PropTypes from "prop-types";

const BottomEdit = ({ images, addNewImage, addNewPhotos, photos }) => {
  return (
    <>
      <PhotosCreate
        images={images}
        addNewImage={addNewImage}
        addNewPhotos={addNewPhotos}
      />
      <EachPhotoCreate photos={photos} />
      <hr />
    </>
  );
};
BottomEdit.propTypes = {
  images: PropTypes.array.isRequired,
  addNewImage: PropTypes.func.isRequired,
  addNewPhotos: PropTypes.func.isRequired,
  photos: PropTypes.array.isRequired,
};

export default BottomEdit;
