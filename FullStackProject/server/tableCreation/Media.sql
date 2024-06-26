CREATE TABLE
    IF NOT EXISTS Media (
        mediaId VARCHAR(20) PRIMARY KEY,
        contentId VARCHAR(20) NOT NULL,
        type VARCHAR(50),
        filePath VARCHAR(255),
        actualName VARCHAR(255),
        newName VARCHAR(255),
        createdBy VARCHAR(50),
        updatedBy VARCHAR(50),
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        FOREIGN KEY (contentId) REFERENCES Chat (chatId)
    );