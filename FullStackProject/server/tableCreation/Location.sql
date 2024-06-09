CREATE TABLE
    IF NOT EXISTS Address (
        addressId VARCHAR(20) PRIMARY KEY,
        contentId VARCHAR(20),
        FOREIGN KEY (contentId) REFERENCES Chat (chatId)
    );