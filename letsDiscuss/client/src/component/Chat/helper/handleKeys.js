export const handleKeyDown = (event, setMessage, handleSendMessage) => {
    // Check if Shift + Enter is pressed

    if (event.key === "Enter" && event.shiftKey) {
        setMessage((prevMessage) => prevMessage + "\n");
        event.preventDefault(); // Prevent default Enter behavior (newline)
    }
    else if (event.key === "Enter") {
        handleSendMessage();
        event.preventDefault(); // Prevent default Enter behavior (newline)
    }
};
