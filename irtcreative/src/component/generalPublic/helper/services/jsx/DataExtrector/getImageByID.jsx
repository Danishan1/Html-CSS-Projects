
const getImagePath = async (imageID, directory = null) => {
  try {
    const image = directory
      ? await import(`../images/${directory}/${imageID}.jpg`)
      : await import(`../images/${imageID}.jpg`);
    return image.default;
  } catch (error) {
    console.error("Image not found:", error);
    return null;
  }
};

export default getImagePath;
