

export const handleFileClick = (fileInputRef) => {
    fileInputRef.current.click();
}

export const handleFileChange = (e) => {
    const files = e.target.files;
    console.log('Files selected:', files);
    Array.from(files).forEach(file => {
        console.log(file.name);
    });

}

export const getFileType = (fileType) => {
    switch (fileType) {
        case 'media':
            return 'audio/*,video/*,image/*,video/x-matroska';
        case 'doc':
            return '.pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.txt,application/*,text/*';
        default:
            return '*/*';
    }

}
