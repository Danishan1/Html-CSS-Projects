import crypto from 'crypto';
import bcrypt from 'bcrypt';
import moment from 'moment';

// Hash the password before saving to the database
export const hashPassword = async (password) => {
    const saltRounds = 10;
    return await bcrypt.hash(password, saltRounds);
};

// Generate a temporary password
export const generateTemporaryPassword = () => {
    return crypto.randomBytes(12).toString('base64');
};

// Generate a password expiration timestamp
export const generateExpirationDate = () => {
    return moment().add(1, 'hour').toDate(); // Set expiration to 1 hour from now
};