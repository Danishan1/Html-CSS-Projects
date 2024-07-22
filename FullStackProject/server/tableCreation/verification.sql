CREATE TABLE
    IF NOT EXISTS verification (
        otpID INT AUTO_INCREMENT PRIMARY KEY,
        type ENUM ('mobile', 'email', 'call') NOT NULL,
        otp VARCHAR(6) NOT NULL,
        purpose ENUM ('registration', 'passwordReset', 'verification') NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        expires_at TIMESTAMP NOT NULL
    );