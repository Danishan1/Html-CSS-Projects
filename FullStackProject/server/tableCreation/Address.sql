CREATE TABLE
    IF NOT EXISTS Address (
        addressId VARCHAR(20) PRIMARY KEY,
        contentId VARCHAR(20),
        latitude DECIMAL(9, 6),
        longitude DECIMAL(9, 6),
        houseNo VARCHAR(50),
        streetNo VARCHAR(50),
        block VARCHAR(50),
        city VARCHAR(100),
        district VARCHAR(100),
        state VARCHAR(100),
        country VARCHAR(100),
        pincode VARCHAR(20),
        createdBy VARCHAR(50),
        updatedBy VARCHAR(50),
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        FOREIGN KEY (contentId) REFERENCES Chat (chatId)
    );