CREATE TABLE
    IF NOT EXISTS Chat (
        chatId VARCHAR(20) PRIMARY KEY,
        userId VARCHAR(20) NOT NULL,
        dateTime TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        status VARCHAR(50),
        contentId VARCHAR(20) NOT NULL,
        forwardedChat BOOLEAN DEFAULT FALSE,
        isGroupChat BOOLEAN DEFAULT FALSE,
        createdBy VARCHAR(50),
        updatedBy VARCHAR(50),
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        FOREIGN KEY (userId) REFERENCES User (userId)
    );