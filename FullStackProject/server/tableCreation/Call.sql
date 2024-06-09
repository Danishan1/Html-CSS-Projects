CREATE TABLE
    IF NOT EXISTS Call (
        callId VARCHAR(20) PRIMARY KEY,
        contentId VARCHAR(20) NOT NULL,
        type VARCHAR(50),
        duration INTERVAL,
        status VARCHAR(50),
        createdBy VARCHAR(50),
        updatedBy VARCHAR(50),
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        FOREIGN KEY (contentId) REFERENCES Chat (chatId)
    );