CREATE TABLE
    IF NOT EXISTS call_up (
        callId VARCHAR(20) PRIMARY KEY,
        messageId INT NOT NULL,
        contentId VARCHAR(20) NOT NULL,
        type VARCHAR(50),
        duration VARCHAR(20),
        status VARCHAR(50),
        createdBy VARCHAR(50),
        updatedBy VARCHAR(50),
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        FOREIGN KEY (messageId) REFERENCES message (messageId)
    );