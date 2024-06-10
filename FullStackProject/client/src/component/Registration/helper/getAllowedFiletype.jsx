const getAllowedFileTypes = (type) => {
  switch (type) {
    case 0:
      return "*"; // Allow all file types
    case 1:
      return "image/*"; // Allow images
    case 2:
      return "audio/*, video/*"; // Allow audio and video
    case 3:
      return ".pdf"; // Allow PDFs
    case 4:
      return ".doc, .docx, .ppt, .pptx, .xls, .xlsx"; // Allow Office documents
    case 5: 
      return ".cpp, .c, .h"; // Allow C/C++ files
    case 6:
      return ".py"; // Allow Python files
    default:
      return "*"; // Default to all file types
  }
};

export default getAllowedFileTypes;
