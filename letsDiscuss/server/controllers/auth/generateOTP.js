export const generateNumericOTP = (digit = 6) => {
    let characters = '0123456789';
    characters = characters.split('').sort(() => Math.random() - 0.5).join('');
    characters = characters.split('').sort(() => Math.random() - 0.5).join('');
    characters = characters.split('').sort(() => Math.random() - 0.5).join('');

    let otp = '';

    for (let i = 0; i < digit; i++) {
        otp += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    otp = otp.split('').sort(() => Math.random() - 0.5).join('');
    otp = otp.split('').sort(() => Math.random() - 0.5).join('');
    return otp;
};

export const generateAlphNumOTP = (digit = 6) => {
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    characters = characters.split('').sort(() => Math.random() - 0.5).join('');
    characters = characters.split('').sort(() => Math.random() - 0.5).join('');
    characters = characters.split('').sort(() => Math.random() - 0.5).join('');

    let otp = '';

    for (let i = 0; i < digit; i++) {
        otp += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    otp = otp.split('').sort(() => Math.random() - 0.5).join('');
    otp = otp.split('').sort(() => Math.random() - 0.5).join('');
    return otp;
};
