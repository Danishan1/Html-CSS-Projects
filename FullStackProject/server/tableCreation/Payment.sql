CREATE TABLE
    IF NOT EXISTS Payment (
        paymentId VARCHAR(20) PRIMARY KEY,
        contentId VARCHAR(20) NOT NULL,
        amount DECIMAL(10, 2),
        dateOfPayment DATE,
        refNo VARCHAR(50),
        bankName VARCHAR(255),
        createdBy VARCHAR(50),
        updatedBy VARCHAR(50),
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        FOREIGN KEY (contentId) REFERENCES Chat (chatId)
    );