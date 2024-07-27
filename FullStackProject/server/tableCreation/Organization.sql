CREATE TABLE
    IF NOT EXISTS organization (
        orgId VARCHAR(20) PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        mobile VARCHAR(20),
        email VARCHAR(255) NOT NULL UNIQUE,
        website VARCHAR(255),
        size INT,
        createDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        passcode VARCHAR(255),
        addressId VARCHAR(20),
        logo VARCHAR(255),
        industry VARCHAR(255),
        createdBy VARCHAR(50),
        updatedBy VARCHAR(50),
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        FOREIGN KEY (addressId) REFERENCES address (addressId)
    );