import React from "react";
import {Image} from "antd";
import _ from "lodash";

const ImageArea = (props) => {
  const { src } = props;
  return (
    <>
      {_.map(src, (image, index) => {
        return (
          <Image
            key={index}
            alt={image.alt}
            // width={200}
            src={image.src}
          ></Image>
        );
      })}
    </>
  );
};
export default ImageArea
