CREATE TABLE
    IF NOT EXISTS text (
        textId INT AUTO_INCREMENT PRIMARY KEY,
        chatId INT NOT NULL,
        contentId VARCHAR(50) NOT NULL,
        text TEXT NOT NULL,
        createdBy VARCHAR(50),
        updatedBy VARCHAR(50),
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        FOREIGN KEY (chatId) REFERENCES chat (chatId),
        UNIQUE (contentId)
    );