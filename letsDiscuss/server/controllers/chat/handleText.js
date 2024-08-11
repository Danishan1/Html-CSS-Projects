import CustomError from "../../utils/error.js";

export const handleText = async (messageId, chatId, data, conn, res) => {

    try {
        await conn.query(
            `INSERT INTO text (messageId, chatId, text) VALUES (?, ?, ?)`,
            [messageId, chatId, data.text]
        );

    } catch (err) {
        throw new CustomError('Error while entering Media into the database', '0001A', err);

    }
}
