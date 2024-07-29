export const addSenderAttribute = (result, authUser) => {
    return result.map(row => {
        row.isSender = row.userID === authUser;
        return row;
    });
};