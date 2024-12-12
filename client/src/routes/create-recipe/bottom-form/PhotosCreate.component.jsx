import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import Modal from "../../../components/modal/Model.component";
import PrimaryButton from "../../../components/buttons/primary-button/PrimaryButton.component";

const PhotosCreate = ({ images, addNewImage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const cloudinaryRef = useRef();
  const widgetRef = useRef();

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: "dql7lqwmr",
        uploadPreset: "lemon_lime_preset",
      },
      function (error, result) {
        if (result.event === "success") {
          let newImage = {
            publicId: result.info.public_id,
            url: result.info.url,
          };
          addNewImage(newImage);
        } else if (error) {
          setIsOpen(true);
        }
        if (images?.length > 5) {
          setError("No more than 4 images can be uploaded");
        }
      }
    );
  }, [images, addNewImage]);

  return (
    <>
      <h3>
        Images <span>max 4</span>
      </h3>
      <hr />
      {isOpen && (
        <Modal onClose={() => setIsOpen(false)}>
          <h3>An error has occured trying to submit your pictures</h3>
          <PrimaryButton
            functionName={() => navigate("/user/home")}
            span="Go Home"
          />
        </Modal>
      )}
      <div key={1} className="image-item">
        <p className="error">{error}</p>
        <div className="image-options">
          <PrimaryButton
            functionName={(e) => {
              e.preventDefault();
              widgetRef.current.open();
            }}
            span="Upload Images"
          />
        </div>
      </div>
    </>
  );
};
PhotosCreate.propTypes = {
  images: PropTypes.array,
  addNewImage: PropTypes.func.isRequired,
  addNewPhotos: PropTypes.func.isRequired,
};

export default PhotosCreate;
