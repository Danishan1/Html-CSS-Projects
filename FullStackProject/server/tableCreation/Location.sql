CREATE TABLE IF NOT EXISTS Loaction (
    locationId INT AUTO_INCREMENT PRIMARY KEY,
    chatId INT NOT NULL,
    contentId VARCHAR(50) NOT NULL,
    addressId VARCHAR(255),
    createdBy VARCHAR(50),
    updatedBy VARCHAR(50),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (chatId) REFERENCES Chat (chatId),
    FOREIGN KEY (addressId) REFERENCES Chat (addressId),
    UNIQUE (contentId)
);
