export const resetSelection = (setSelectedCard, setScreenStage, setTimer, setShowCard, setPlayerOutput) => {
    setSelectedCard(null);
    setScreenStage(0);
    // setTimer(10);
    setTimer(2);
    setShowCard(false);
    setPlayerOutput({});
};



export const handleBidding = (bidAmount, setPlayerOutput, activePlayer, selectedCard) => {

    setPlayerOutput((prev) => ({
        ...prev,
        [`Player-${activePlayer}`]: { card: prev?.[`Player-${activePlayer}`]?.card || selectedCard, bid: bidAmount },
    }));
};
