// To build GameLevels, each contains GameObjects from below imports
import GameEnvBackground from './GameEngine/GameEnvBackground.js';
import Player from './GameEngine/Player.js';
import GameObject from './GameEngine/GameObject.js';

//Import custom classes from select files
import Barrier from './CustomGameClasses/Barrier.js';
import BlackjackGameManager from './CustomGameClasses/Blackjack.js';
import TriggerZone from './CustomGameClasses/TriggerZone.js';

class MansionLevel4 {
    constructor(gameEnv) {
        let width = gameEnv.innerWidth;
        let height = gameEnv.innerHeight;
        let path = gameEnv.path;

        // Initialize blackjack manager
        this.blackjackManager = new BlackjackGameManager(gameEnv);

        // Background data
        const image_background = path + "/images/mansionGame/image_lvl4.png";
        const image_data_background = {
            name: 'background',
            greeting: "This is the casino, you will try to gamble your way out of the level, survive as long as possible.",
            src: image_background,
            pixels: {height: 1280, width: 720}
        };

        const sprite_src_mc = path + "/images/gamify/spookMcWalk.png";
        const MC_SCALE_FACTOR = 6;
        const sprite_data_chillguy = {
            id: 'Spook',
            greeting: "Hi, I am Spook.",
            src: sprite_src_mc,
            SCALE_FACTOR: MC_SCALE_FACTOR,
            STEP_FACTOR: 800,
            ANIMATION_RATE: 10,
            INIT_POSITION: { x: (width / 2 - width / (5 * MC_SCALE_FACTOR)), y: height - (height / MC_SCALE_FACTOR)},
            pixels: {height: 2400, width: 3600},
            orientation: {rows: 2, columns: 3},
            down: {row: 1, start: 0, columns: 3},
            downRight: {row: 1, start: 0, columns: 3, rotate: Math.PI/16},
            downLeft: {row: 0, start: 0, columns: 3, rotate: -Math.PI/16},
            left: {row: 0, start: 0, columns: 3},
            right: {row: 1, start: 0, columns: 3},
            up: {row: 1, start: 0, columns: 3},
            upLeft: {row: 0, start: 0, columns: 3, rotate: Math.PI/16},
            upRight: {row: 1, start: 0, columns: 3, rotate: -Math.PI/16},
            hitbox: { widthPercentage: 0.45, heightPercentage: 0.2 },
            keypress: {up: 87, left: 65, down: 83, right: 68} // W, A, S, D
        };

        // Store reference to blackjack manager for use in trigger zone
        const blackjackManager = this.blackjackManager;

        // Define trigger zone in the illuminated center area
        const triggerZoneData = {
            x: width * 0.35,
            y: height * 0.15,
            width: width * 0.30,
            height: height * 0.40,
            color: 'rgba(255, 215, 0, 0.2)',
            visible: false, // Make invisible so it doesn't show the ugly yellow box
            message: '🎰 Welcome to the Casino! Step into the light to start gambling!',
            onEnter: () => {
                blackjackManager.startGame();
            }
        };

        // Define barrier locations - Creating a simple pathway to the center
        const barrierData = [
            // Outer walls only - keep player contained
            { x: 0, y: 0, width: width, height: 20, visible: true },                    // Top wall
            { x: 0, y: height - 20, width: width, height: 20, visible: true },          // Bottom wall
            { x: 0, y: 0, width: 20, height: height, visible: true },                   // Left wall
            { x: width - 20, y: 0, width: 20, height: height, visible: true }           // Right wall
        ];

        // Initialize game objects
        this.classes = [
            { class: GameEnvBackground, data: image_data_background },
            { class: Player, data: sprite_data_chillguy },
            { class: TriggerZone, data: triggerZoneData },
            ...barrierData.map(data => ({ class: Barrier, data }))
        ];

        this.gameEnv = gameEnv;
        
        // Adding Music
        this.backgroundMusic = new Audio(path + '/audio/mansionGame/SpookieDookie.mp3');
        this.backgroundMusic.loop = true;
        this.backgroundMusic.volume = 0.3; // Set volume to a reasonable level
        this.backgroundMusic.play();
    }

    // Update method called every frame by the game engine
    update() {
        // Collision detection removed - it was causing player to be stuck
        // The player now moves freely, only blocked by canvas boundaries
    }

    // Removed collision checking method - was causing issues with player movement
}

export default MansionLevel4;