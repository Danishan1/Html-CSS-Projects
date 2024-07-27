CREATE TABLE
    IF NOT EXISTS meeting (
        meetingId INT AUTO_INCREMENT PRIMARY KEY,
        messageId INT NOT NULL,
        contentId VARCHAR(50) NOT NULL,
        title VARCHAR(255),
        purpose TEXT,
        description TEXT,
        date DATE,
        time TIME,
        duration VARCHAR(20),
        location VARCHAR(255),
        videoCallLink VARCHAR(255),
        createdBy VARCHAR(50),
        updatedBy VARCHAR(50),
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        FOREIGN KEY (messageId) REFERENCES message (messageId),
        UNIQUE (contentId)
    );