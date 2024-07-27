CREATE TABLE
    IF NOT EXISTS chat_participant (
        participantId INT AUTO_INCREMENT PRIMARY KEY,
        chatId INT NOT NULL,
        userId VARCHAR(20) NOT NULL,
        status VARCHAR(50),
        addedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (chatId) REFERENCES chat (chatId),
        FOREIGN KEY (userId) REFERENCES user (userId)
    );