CREATE TABLE
    IF NOT EXISTS file (
        fileId INT AUTO_INCREMENT PRIMARY KEY,
        messageId INT NOT NULL,
        contentId VARCHAR(50) NOT NULL,
        filePath VARCHAR(255) NOT NULL,
        actualName VARCHAR(255),
        newName VARCHAR(255),
        fileType VARCHAR(50),
        createdBy VARCHAR(50),
        updatedBy VARCHAR(50),
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        FOREIGN KEY (messageId) REFERENCES message (messageId),
        UNIQUE (contentId)
    );