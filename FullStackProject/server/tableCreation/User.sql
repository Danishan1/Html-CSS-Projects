CREATE TABLE
    IF NOT EXISTS User (
        userId VARCHAR(20) PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        mobile VARCHAR(20),
        email VARCHAR(255) NOT NULL UNIQUE,
        profilePicPath VARCHAR(255),
        status VARCHAR(50),
        designation VARCHAR(255),
        orgId VARCHAR(20) NOT NULL,
        registerDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        lastLogin TIMESTAMP,
        createdBy VARCHAR(50),
        updatedBy VARCHAR(50),
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        password VARCHAR(100),
        FOREIGN KEY (orgId) REFERENCES Organization (orgId)
    );
