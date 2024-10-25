export const resetSelection = (setSelectedCard, setScreenStage, setTimer, setShowCard) => {
    setSelectedCard(null);
    setScreenStage(0);
    setTimer(10);
    setShowCard(false);
};

export const handleCardClick = (card, setSelectedCard, setScreenStage, setTimer) => {
    setSelectedCard(card);
    setScreenStage(1);
    setTimer(10);
};

export const handleBidding = (bidAmount, setPlayerOutput, activePlayer, selectedCard) => {
    setPlayerOutput((prev) => ({
        ...prev,
        [`Player-${activePlayer}`]: { card: selectedCard, bid: bidAmount },
    }));
};
