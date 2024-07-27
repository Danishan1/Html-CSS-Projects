CREATE TABLE IF NOT EXISTS loaction (
    locationId INT AUTO_INCREMENT PRIMARY KEY,
    messageId INT NOT NULL,
    contentId VARCHAR(50) NOT NULL,
    addressId VARCHAR(255),
    createdBy VARCHAR(50),
    updatedBy VARCHAR(50),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (messageId) REFERENCES message (messageId),
    FOREIGN KEY (addressId) REFERENCES address (addressId),
    UNIQUE (contentId)
);
