# Card Game Project Documentation

### Table of Contents

1. [Project Overview](#project-overview)
2. [Features](#features)
   - [Player Management](#player-management)
   - [Admin Panel](#admin-panel)
   - [Card Selection](#card-selection)
   - [Dynamic Layout](#dynamic-layout)
   - [Timer and Bid Handling](#timer-and-bid-handling)
   - [Dropdown and Interactive Elements](#dropdown-and-interactive-elements)
   - [Smooth Scrolling](#smooth-scrolling)
3. [Components](#components)
   - [Header](#header)
   - [CardSelection](#cardselection)
   - [PlayerSelectionCard](#playerselectioncard)
   - [Button](#button)
   - [Timer](#timer)
   - [WaitingScreen](#waitingscreen)
4. [Helper Functions](#helper-functions)
5. [Styles and Responsive Design](#styles-and-responsive-design)
6. [Installation and Setup](#installation-and-setup)
7. [Usage Instructions](#usage-instructions)
8. [Contributing](#contributing)
9. [License](#license)

---

## Project Overview

This project is a card-based game designed to support multiple players and managed by an admin. The main gameplay involves each player selecting a card and placing a bid. The game is timed, and players must complete their actions within a given time frame. Additionally, the admin has control over various aspects of the game and can view all players’ bids and selected cards.

## Features

### Player Management

- **Player Dropdown**: Allows the admin to select players from a dropdown to set active players. Clicking outside the dropdown hides it, while clicking inside keeps it open.
- **Player Code Display**: Each player has a unique player code that displays throughout the game for easy identification.
- **Card and Bid Assignment**: Each player can select a card and place a bid.

### Admin Panel

- **Profile Switch**: The admin can toggle between "Admin" and "Player" views, adjusting available actions accordingly.
- **Control Over Player Actions**: The admin can monitor players’ card and bid selections and make adjustments if needed.

### Card Selection

- **Dynamic Deck Handling**: Displays a full deck of cards with responsive layouts. For smaller screens (under 540px), cards display as a single, unified deck. On larger screens, the deck splits into multiple suits.
- **Card Confirmation**: Players receive confirmation when successfully selecting a card, with a waiting screen indicating successful card selection.
- **Random Card and Bid Selection**: If a player doesn’t make a selection in time, a random card or bid will be assigned automatically.

### Dynamic Layout

- **Grid Layout**: Uses a grid to organize cards and player information, adapting to screen size for an optimal view.
- **Responsive Design**: At screen widths under 540px, card suits collapse into a single-column deck view, making the game mobile-friendly.

### Timer and Bid Handling

- **Timer**: Counts down for each round, enforcing a limit on players' selection time. Once time expires, actions are finalized.
- **Bid System**: Each player has the option to place a bid; if no bid is placed, a random bid is assigned.

### Dropdown and Interactive Elements

- **Dropdown for Player Selection**: The dropdown hides when clicked outside, allowing a clean, uncluttered UI.
- **Button Controls**: Provides easy navigation for admin controls and toggling between views.

### Smooth Scrolling

- **Lenis Smooth Scrolling**: Ensures smooth scrolling through cards and player information, especially for larger screens with numerous elements.

## Components

### Header

The `Header` component contains:

- **Buttons for Admin and Player Views**: Switch between profiles.
- **Dropdown for Player Selection**: Allows admins to select active players.
- **Timer Display**: Shows remaining time for players to select cards and place bids.

### CardSelection

Handles the display of cards for players to select:

- **Card Grid Layout**: Organizes cards by suit on larger screens and as a single deck on smaller screens.
- **Waiting Screen**: Indicates when a player has successfully selected a card.

### PlayerSelectionCard

Displays each player’s selected card and bid in the admin view.

### Button

Reusable button component for various actions, such as toggling views, player selection, and card visibility.

### Timer

The `Timer` component manages countdowns for each stage of the game, triggering actions based on remaining time.

### WaitingScreen

A modal-like screen that displays messages, including a confirmation for card selection.

## Helper Functions

- **Random Selection**: Helper functions for selecting random cards and bids when players don’t make a choice in time.
- **Outside Click Handling**: Utility for handling dropdown behavior, hiding dropdowns when clicked outside specific elements.

## Styles and Responsive Design

The game is styled to be visually engaging and user-friendly:

- **Responsive Card Layout**: Changes the number of columns based on screen width, with a single-column view for screens below 540px.
- **Grid Layout for Larger Screens**: The deck organizes into multiple suits for easier selection and a more intuitive player experience.

## Installation and Setup

1. **Clone the Repository**: `git clone https://github.com`
2. **Install Dependencies**: Navigate to the project folder and run `npm install`.
3. **Run the App**: Start the app with `npm start`.

Ensure you have `Node.js` and `npm` installed before proceeding.

## Usage Instructions

1. **Select Active Player**: Select a player from the dropdown.
2. **Card Selection**: Each player selects a card and places a bid within the time limit.
3. **Monitor Timer**: Players must act before the timer expires.
4. **View Results**: After all players complete selections, results display, showing each player’s selected card and bid.

## Contributing

We welcome contributions! To contribute:

1. Fork the repository.
2. Create a new branch for your feature.
3. Commit your changes and open a pull request.

## License

This project is open-source and available under the [MIT License](LICENSE).
