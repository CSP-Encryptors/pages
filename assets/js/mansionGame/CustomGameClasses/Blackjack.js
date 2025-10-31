class BlackjackGameManager {
    constructor(gameEnv) {
        this.gameEnv = gameEnv; // Store reference to game environment
        this.money = 1000;
        this.currentBet = 0;
        this.goalMoney = 25000; // Changed from 100000 to 25000
        this.gameActive = false;
        this.overlay = null;
    }

    startGame() {
        if (this.gameActive) return;
        this.gameActive = true;
        this.createOverlay();
        this.currentBet = this.money; // Bet all money
        this.initializeBlackjack();
    }

    createOverlay() {
        // Create dark overlay with initial opacity 0 for fade-in
        this.overlay = document.createElement('div');
        this.overlay.id = 'blackjack-overlay';
        this.overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.95);
            z-index: 10000;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 20px;
            opacity: 0;
            transition: opacity 0.8s ease-in-out;
        `;
        
        // Fade out the game canvas
        if (this.gameEnv && this.gameEnv.canvas) {
            this.gameEnv.canvas.style.transition = 'opacity 0.8s ease-in-out';
            this.gameEnv.canvas.style.opacity = '0';
        }

        // Create game container
        const gameContainer = document.createElement('div');
        gameContainer.id = 'embedded-blackjack';
        gameContainer.style.cssText = `
            width: 90%;
            max-width: 900px;
            background: transparent;
            padding: 30px;
            border-radius: 15px;
            box-shadow: 0 0 30px rgba(255, 215, 0, 0.5);
        `;

        // Add money display
        const moneyDisplay = document.createElement('div');
        moneyDisplay.id = 'money-display';
        moneyDisplay.style.cssText = `
            font-size: 24px;
            font-weight: bold;
            color: white;
            text-align: center;
            margin-bottom: 20px;
        `;
        moneyDisplay.innerHTML = `
            Current Money: $${this.money}<br>
            Current Bet: $${this.currentBet}<br>
            Goal: $${this.goalMoney}
        `;

        // Add instructions
        const instructions = document.createElement('div');
        instructions.style.cssText = `
            background: #f39c12;
            padding: 15px;
            border-radius: 8px;
            margin-bottom: 20px;
            color: white;
            font-weight: bold;
            text-align: center;
        `;
        instructions.innerHTML = `
            🎰 CASINO CHALLENGE 🎰<br>
            Choose your bet amount and play strategically!<br>
            Win your way from $1,000 to $25,000 to escape!
        `;

        // Add betting amount selector
        const bettingSelector = document.createElement('div');
        bettingSelector.style.cssText = `
            background: #34495e;
            padding: 15px;
            border-radius: 8px;
            margin-bottom: 20px;
            color: white;
            text-align: center;
        `;
        bettingSelector.innerHTML = `
            <label for="bet-amount" style="font-weight: bold; margin-right: 10px; color: white;">Bet Amount:</label>
            <select id="bet-amount" style="padding: 8px; font-size: 16px; border-radius: 5px; border: 2px solid #2ecc71; color: white; background: #2c3e50;">
                <option value="100" style="color: white;">$100 (Safe)</option>
                <option value="500" style="color: white;">$500 (Medium)</option>
                <option value="1000" selected style="color: white;">$1,000 (Risky)</option>
                <option value="2500" style="color: white;">$2,500 (Very Risky)</option>
                <option value="5000" style="color: white;">$5,000 (All-In)</option>
                <option value="all" style="color: white;">All Money (YOLO)</option>
            </select>
        `;

        gameContainer.appendChild(moneyDisplay);
        gameContainer.appendChild(instructions);
        gameContainer.appendChild(bettingSelector);
        this.overlay.appendChild(gameContainer);
        document.body.appendChild(this.overlay);
        
        // Trigger fade-in after a brief moment
        setTimeout(() => {
            this.overlay.style.opacity = '1';
        }, 50);

        // Load blackjack game into container
        this.loadBlackjackHTML(gameContainer);
    }

    loadBlackjackHTML(container) {
        // Import the blackjack HTML structure
        const blackjackHTML = `
            <div id="game-container" style="background: transparent;">
                <div id="dealer-area" class="player-area">
                    <h2 style="color: white;">Dealer's Hand: <span id="dealer-score">0</span></h2>
                    <div class="hand-container">
                        <div id="dealer-cards" class="cards-container"></div>
                        <div id="dealer-points" class="points-list" style="color: white;"></div>
                    </div>
                </div>
                <div id="player-area" class="player-area">
                    <h2 style="color: white;">Your Hand: <span id="player-score">0</span></h2>
                    <div class="hand-container">
                        <div id="player-cards" class="cards-container"></div>
                        <div id="player-points" class="points-list" style="color: white;"></div>
                    </div>
                </div>
                <div id="game-controls">
                    <button id="new-game-btn">New Game</button>
                    <button id="hit-btn">Hit</button>
                    <button id="stand-btn">Stand</button>
                    <button id="exit-casino-btn" style="background: #e74c3c; color: white;">Exit Casino</button>
                </div>
                <p id="message" style="color: white; font-weight: bold;"></p>
            </div>
        `;

        container.innerHTML += blackjackHTML;
        this.initializeBlackjack();
    }

    initializeBlackjack() {
        // Wait for DOM elements to be ready
        setTimeout(() => {
            const dealerCardsEl = document.getElementById("dealer-cards");
            const playerCardsEl = document.getElementById("player-cards");
            const dealerScoreEl = document.getElementById("dealer-score");
            const playerScoreEl = document.getElementById("player-score");
            const messageEl = document.getElementById("message");

            const newGameBtn = document.getElementById("new-game-btn");
            const hitBtn = document.getElementById("hit-btn");
            const standBtn = document.getElementById("stand-btn");
            const exitBtn = document.getElementById("exit-casino-btn");

            let deck = [];
            let playerHand = [];
            let dealerHand = [];
            let gameOver = false;

            const createDeck = () => {
                const suits = ["♠", "♥", "♦", "♣"];
                const values = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
                let newDeck = [];
                for (let suit of suits) {
                    for (let value of values) newDeck.push({value, suit});
                }
                return shuffle(newDeck);
            };

            const shuffle = (deck) => {
                for (let i = deck.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [deck[i], deck[j]] = [deck[j], deck[i]];
                }
                return deck;
            };

            const getCardValue = (card) => {
                if (["J","Q","K"].includes(card.value)) return 10;
                if (card.value === "A") return 11;
                return parseInt(card.value);
            };

            const calculateHand = (hand) => {
                let value = 0, aceCount = 0;
                for (let card of hand) {
                    value += getCardValue(card);
                    if (card.value === "A") aceCount++;
                }
                while (value > 21 && aceCount > 0) { value -= 10; aceCount--; }
                return value;
            };

            const renderHand = (hand, container, pointsContainer) => {
                container.innerHTML = "";
                pointsContainer.innerHTML = "";
                for (let card of hand) {
                    const cardEl = document.createElement("div");
                    cardEl.classList.add("card");
                    cardEl.textContent = `${card.value}${card.suit}`;
                    // Change black cards (spades and clubs) to white for visibility
                    cardEl.style.color = (card.suit==="♥"||card.suit==="♦")?"red":"white";
                    container.appendChild(cardEl);
                }
                pointsContainer.textContent = calculateHand(hand);
            };

            const renderDealerInitial = () => {
                dealerCardsEl.innerHTML = "";
                const firstCard = dealerHand[0];
                
                const cardEl1 = document.createElement("div");
                cardEl1.classList.add("card");
                cardEl1.textContent = `${firstCard.value}${firstCard.suit}`;
                // Change black cards (spades and clubs) to white for visibility
                cardEl1.style.color = (firstCard.suit==="♥"||firstCard.suit==="♦")?"red":"white";
                dealerCardsEl.appendChild(cardEl1);

                const cardEl2 = document.createElement("div");
                cardEl2.classList.add("card");
                cardEl2.textContent = "🂠";
                dealerCardsEl.appendChild(cardEl2);

                document.getElementById("dealer-points").textContent = getCardValue(firstCard);
            };

            const checkGameOver = () => {
                const playerValue = calculateHand(playerHand);
                const dealerValue = calculateHand(dealerHand);

                if (playerValue > 21) {
                    messageEl.textContent = "You busted! Lost $" + this.currentBet;
                    console.log('Player busted. Money before:', this.money);
                    // Subtract the bet from current money (goes into debt if needed)
                    this.money -= this.currentBet;
                    console.log('Money after losing bet:', this.money);
                    gameOver = true;
                    this.handleGameEnd(false);
                } else if (dealerValue > 21) {
                    console.log('Dealer busted! Money before:', this.money);
                    // Win the bet amount
                    this.money += this.currentBet;
                    messageEl.textContent = "Dealer busted! Won $" + this.currentBet;
                    console.log('Money after winning bet:', this.money);
                    gameOver = true;
                    this.handleGameEnd(true);
                } else if (gameOver) {
                    if (playerValue > dealerValue) {
                        console.log('Player won! Money before:', this.money, 'currentBet:', this.currentBet);
                        const oldMoney = this.money;
                        // Win the bet amount
                        this.money += this.currentBet;
                        console.log('Money after winning bet:', this.money, 'Went from', oldMoney, 'to', this.money);
                        messageEl.textContent = "You win! Won $" + this.currentBet;
                        this.handleGameEnd(true);
                    } else if (dealerValue > playerValue) {
                        messageEl.textContent = "Dealer wins! Lost $" + this.currentBet;
                        console.log('Dealer won. Money before:', this.money);
                        // Subtract the bet from current money (goes into debt if needed)
                        this.money -= this.currentBet;
                        console.log('Money after losing bet:', this.money);
                        this.handleGameEnd(false);
                    } else {
                        // Push - money stays the same (bet is returned)
                        console.log('Push! Money before:', this.money, 'currentBet:', this.currentBet);
                        // Money should already be correct, but let's ensure it
                        // Since we bet all money, on push we just keep what we had
                        messageEl.textContent = "Push! It's a tie. Your $" + this.money + " is returned.";
                        console.log('Push! Money after:', this.money);
                        this.handleGameEnd(false);
                    }
                }
            };

            const newGame = () => {
                // Get selected bet amount
                const betSelector = document.getElementById('bet-amount');
                const betValue = betSelector.value;
                
                let betAmount;
                if (betValue === 'all') {
                    // Bet all money (or $1000 if in debt/at zero)
                    betAmount = this.money > 0 ? this.money : 1000;
                } else {
                    betAmount = parseInt(betValue);
                    // If they don't have enough money, bet on credit
                    if (this.money < betAmount && this.money >= 0) {
                        // Can't bet more than you have unless in debt
                        betAmount = Math.max(this.money, 100); // Minimum $100 bet
                    }
                }
                
                this.currentBet = betAmount;
                console.log('Starting new game. Current money:', this.money, 'Betting:', this.currentBet);
                
                // Color code money display: green if positive, red if negative
                const moneyColor = this.money >= 0 ? '#2ecc71' : '#e74c3c';
                const moneyDisplay = this.money >= 0 ? `$${this.money}` : `-$${Math.abs(this.money)} (DEBT)`;
                
                document.getElementById('money-display').innerHTML = `
                    <span style="color: ${moneyColor}">Current Money: ${moneyDisplay}</span><br>
                    <span style="color: white;">Current Bet: $${this.currentBet}</span><br>
                    <span style="color: white;">Goal: $${this.goalMoney}</span>
                `;

                deck = createDeck();
                playerHand = [deck.pop(), deck.pop()];
                dealerHand = [deck.pop(), deck.pop()];
                gameOver = false;

                renderHand(playerHand, playerCardsEl, document.getElementById("player-points"));
                renderDealerInitial();
                messageEl.textContent = "Game started. Your move!";
            };

            const hit = () => {
                if (gameOver) return;
                playerHand.push(deck.pop());
                renderHand(playerHand, playerCardsEl, document.getElementById("player-points"));
                const playerValue = calculateHand(playerHand);
                
                if (playerValue > 21) {
                    checkGameOver();
                } else if (playerValue === 21) {
                    messageEl.textContent = "Blackjack! You have 21. Stand or risk busting!";
                } else {
                    messageEl.textContent = `You have ${playerValue}. Hit or Stand?`;
                }
            };

            const stand = () => {
                if (gameOver) return;

                dealerCardsEl.children[1].textContent = `${dealerHand[1].value}${dealerHand[1].suit}`;
                // Change black cards (spades and clubs) to white for visibility
                dealerCardsEl.children[1].style.color = (dealerHand[1].suit==="♥"||dealerHand[1].suit==="♦") ? "red" : "white";
                document.getElementById("dealer-points").textContent = calculateHand(dealerHand);

                while (calculateHand(dealerHand) < 17) {
                    const card = deck.pop();
                    dealerHand.push(card);
                    const cardEl = document.createElement("div");
                    cardEl.classList.add("card");
                    cardEl.textContent = `${card.value}${card.suit}`;
                    // Change black cards (spades and clubs) to white for visibility
                    cardEl.style.color = (card.suit==="♥"||card.suit==="♦")?"red":"white";
                    dealerCardsEl.appendChild(cardEl);
                    document.getElementById("dealer-points").textContent = calculateHand(dealerHand);
                }

                gameOver = true;
                checkGameOver();
            };

            newGameBtn.addEventListener("click", newGame);
            hitBtn.addEventListener("click", hit);
            standBtn.addEventListener("click", stand);
            exitBtn.addEventListener("click", () => this.exitGame());

            // Start first game automatically
            newGame();
        }, 100);
    }

    handleGameEnd(won) {
        // Color code money display: green if positive, red if negative
        const moneyColor = this.money >= 0 ? '#2ecc71' : '#e74c3c';
        const moneyDisplay = this.money >= 0 ? `$${this.money}` : `-$${Math.abs(this.money)} (DEBT)`;
        
        // Update the display with current money (currentBet is outdated after the round)
        document.getElementById('money-display').innerHTML = `
            <span style="color: ${moneyColor}">Current Money: ${moneyDisplay}</span><br>
            <span style="color: white;">Current Bet: $0 (Round Over)</span><br>
            <span style="color: white;">Goal: $${this.goalMoney}</span>
        `;

        // Only trigger victory if we actually have the goal money (and not in debt)
        if (this.money >= this.goalMoney) {
            setTimeout(() => {
                alert("🎉 CONGRATULATIONS! You've won $25,000 and escaped the casino! Level Complete!");
                this.exitGame();
                // Trigger level completion
            }, 2000);
        }
    }

    exitGame() {
        if (this.overlay) {
            // Fade out overlay
            this.overlay.style.opacity = '0';
            
            // Fade in the game canvas
            if (this.gameEnv && this.gameEnv.canvas) {
                this.gameEnv.canvas.style.opacity = '1';
            }
            
            // Remove overlay after transition completes
            setTimeout(() => {
                if (this.overlay && this.overlay.parentNode) {
                    document.body.removeChild(this.overlay);
                }
                this.overlay = null;
            }, 800); // Match the transition duration
        }
        this.gameActive = false;
    }

    resetLevel() {
        this.money = 1000;
        this.exitGame();
        // Instead of location.reload(), reset the game state
        window.location.reload();
    }
}

export default BlackjackGameManager;