CREATE TABLE
    IF NOT EXISTS Text (
        textId VARCHAR(20) PRIMARY KEY,
        contentId VARCHAR(20) NOT NULL,
        text TEXT NOT NULL,
        createdBy VARCHAR(50),
        updatedBy VARCHAR(50),
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        FOREIGN KEY (contentId) REFERENCES Chat (chatId)
    );