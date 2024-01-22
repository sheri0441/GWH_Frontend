import { useState } from "react";
import NotFoundImage from "../assets/image/imageNotFound.png";

const ExtractImage = (image: string) => {
  const [isImageFound, setIsImageFound] = useState<boolean>(true);

  function isParsable(str: string) {
    try {
      JSON.parse(str);
      return true;
    } catch (error) {
      return false;
    }
  }

  const img = new Image();
  img.src = isParsable(image) ? JSON.parse(image)[0] : image;
  img.onerror = () => {
    setIsImageFound(false);
  };

  const imageURL = isParsable(image) ? JSON.parse(image)[0] : image;

  return isImageFound ? imageURL : NotFoundImage;
};

export default ExtractImage;
