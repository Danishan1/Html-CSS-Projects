CREATE TABLE
    IF NOT EXISTS ChatList (
        listID INT AUTO_INCREMENT PRIMARY KEY,
        userID VARCHAR(20) NOT NULL,
        chatID INT NOT NULL,
        FOREIGN KEY (userID) REFERENCES User (userID),
        FOREIGN KEY (chatID) REFERENCES Chat (chatID)
    );