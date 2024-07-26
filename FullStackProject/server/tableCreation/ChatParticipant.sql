CREATE TABLE
    IF NOT EXISTS ChatParticipant (
        participantId INT AUTO_INCREMENT PRIMARY KEY,
        chatId INT NOT NULL,
        userId VARCHAR(20) NOT NULL,
        addedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (chatId) REFERENCES Chat (chatId),
        FOREIGN KEY (userId) REFERENCES User (userId)
    );