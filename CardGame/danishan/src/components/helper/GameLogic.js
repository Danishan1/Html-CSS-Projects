export const resetSelection = (setSelectedCard, setScreenStage, setTimer, setShowCard, setPlayerOutput) => {
    setSelectedCard(null);
    setScreenStage(0);
    setTimer(10);
    setShowCard(false);
    setPlayerOutput(null);
};



export const handleBidding = (bidAmount, setPlayerOutput, activePlayer, selectedCard) => {

    setPlayerOutput((prev) => ({
        ...prev,
        [`Player-${activePlayer}`]: { card: prev?.[`Player-${activePlayer}`]?.card || selectedCard, bid: bidAmount },
    }));
};
