import generateUserId from "./generateID.js"
import generatePasscode from "./generatePasscode.js";

export const getUserAuth = (req, res) => {
    const userId = generateUserId();
    const passcode = generatePasscode();

    res.json({ userId, passcode })

}