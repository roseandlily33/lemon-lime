import { Cloudinary } from "@cloudinary/url-gen";
import { thumbnail } from "@cloudinary/url-gen/actions/resize";
//import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
import { format, quality } from "@cloudinary/url-gen/actions/delivery";
import { AdvancedImage, placeholder, lazyload } from "@cloudinary/react";
import { byRadius } from "@cloudinary/url-gen/actions/roundCorners";
import PropTypes from "prop-types";
import React from "react";

const cloud = new Cloudinary({ cloud: { cloudName: "dql7lqwmr" } });

const CloudImage = ({ publicId }) => {
  const myImage = cloud
    .image(publicId)
    .resize(thumbnail().width(250).height(150))
    .roundCorners(byRadius(5))
    .delivery(format("auto"))
    .delivery(quality("auto"));

  return (
    <AdvancedImage
      cldImg={myImage}
      width="250px"
      height="150px"
      plugins={[
        placeholder({ mode: "blur" }),
        lazyload({ rootMargin: "10px 20px 10px 30px", threshold: 0.25 }),
      ]}
      className="rounded-lg shadow-lg"
    />
  );
};
CloudImage.propTypes = {
  publicId: PropTypes.string.isRequired,
};

export default CloudImage;
