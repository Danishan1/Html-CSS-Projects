// src/utils/getImagePath.js

// Create a context for all images in the directory and its subdirectories
const imagesContext = require.context(
  "../../../../../../images",
  true,
  /\.(jpg|jpeg|png)$/
);

const getImagePath = (imageID, directory = null) => {
  try {
    const path = directory
      ? `./${directory}/${imageID}.jpg`
      : `./${imageID}.jpg`;

    // Use the context to load the image
    const image = imagesContext(path);
    return image;
  } catch (error) {
    console.error("Image not found:", error);
    return null;
  }
};

export default getImagePath;
