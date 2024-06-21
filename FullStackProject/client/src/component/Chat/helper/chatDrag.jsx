export const handleDragEnter = (e, setIsDragging) => {
  e.preventDefault();
  e.stopPropagation();
  console.log("Drag Enter");

  setIsDragging(true);
};

export const handleDragLeave = (e, setIsDragging) => {
  e.preventDefault();
  e.stopPropagation();
  console.log("Drag Leave");
  setIsDragging(false);
};

export const handleDragOver = (e) => {
  e.preventDefault();
  console.log("Drag Over");
  e.stopPropagation();
};

export const handleDrop = (e, setIsDragging, setFile) => {
  e.preventDefault();
  e.stopPropagation();
  setIsDragging(false);
  if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
    const droppedFile = e.dataTransfer.files[0];
    setFile(droppedFile);
    console.log("File dropped:", droppedFile);
    e.dataTransfer.clearData();
  }
};


export const handleDragEnterWrapper = (e, setIsDragging, dragCounter) => {
  e.preventDefault();
  dragCounter.current++;
  if (dragCounter.current === 1) {
    handleDragEnter(e, setIsDragging);
  }
};

export const handleDragLeaveWrapper = (e, setIsDragging, dragCounter) => {
  e.preventDefault();
  dragCounter.current--;
  if (dragCounter.current === 0) {
    handleDragLeave(e, setIsDragging);
  }
};

export const handleDropWrapper = (e, setIsDragging, setFile, dragCounter) => {
  e.preventDefault();
  dragCounter.current = 0; // Reset counter on drop
  handleDrop(e, setIsDragging, setFile);
};
