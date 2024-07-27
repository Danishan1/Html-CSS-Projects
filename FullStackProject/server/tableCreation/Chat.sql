CREATE TABLE
    IF NOT EXISTS chat (
        chatId INT AUTO_INCREMENT PRIMARY KEY,
        members VARCHAR(50),
        status VARCHAR(50),
        admin VARCHAR(50),
        chatName VARCHAR(20),
        chatDescription VARCHAR(50),
        isGroupChat BOOLEAN DEFAULT FALSE,
        createdBy VARCHAR(50),
        updatedBy VARCHAR(50),
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    );