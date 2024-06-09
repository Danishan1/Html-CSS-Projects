CREATE TABLE
    IF NOT EXISTS File (
        fileId VARCHAR(20) PRIMARY KEY,
        contentId VARCHAR(20) NOT NULL,
        filePath VARCHAR(255) NOT NULL,
        actualName VARCHAR(255),
        newName VARCHAR(255),
        fileType VARCHAR(50),
        createdBy VARCHAR(50),
        updatedBy VARCHAR(50),
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        FOREIGN KEY (contentId) REFERENCES Chat (chatId)
    );