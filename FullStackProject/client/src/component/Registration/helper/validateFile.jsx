const validateFile = (file, maxSizeInMB = 5) => {
  const validTypes = ["image/jpeg", "image/png", "application/pdf"];
  const maxSizeInBytes = maxSizeInMB * 1024 * 1024;

  if (!validTypes.includes(file.type)) {
    alert("Invalid file type. Only JPEG, PNG, and PDF are allowed.");
    return false;
  }

  if (file.size > maxSizeInBytes) {
    alert(`File size exceeds ${maxSizeInMB}MB.`);
    return false;
  }

  return true;
};
