CREATE TABLE
    IF NOT EXISTS chat_list (
        listId INT AUTO_INCREMENT PRIMARY KEY,
        userId VARCHAR(20) NOT NULL,
        chatId INT NOT NULL,
        FOREIGN KEY (userId) REFERENCES user (userId),
        FOREIGN KEY (chatId) REFERENCES chat (chatId)
    );