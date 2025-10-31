import Character from '../GameEngine/Character.js';

class Projectile extends Character {
    constructor(gameEnv = null, targetx, targety, sourcex, sourcey, type) {
        super({id: type}, gameEnv);

        this.source_coords = { x: sourcex, y: sourcey };
        this.target_coords = { x: targetx, y: targety };
        this.type = type;

        // Get the main path
        const path = gameEnv.path;

        // Calculate angle and velocity to move in a straight line
        const dx = targetx - sourcex;
        const dy = targety - sourcey;
        const distance = Math.sqrt(dx * dx + dy * dy);
        this.speed = 5; // adjust as needed
        this.velocity = {
            x: (dx / distance) * this.speed,
            y: (dy / distance) * this.speed
        };

        this.revComplete = false;

        // Load sprite/image based on type
        if (type === "ARROW") {
            this.spriteSheet = new Image();
            this.spriteSheet.src = path + "/images/mansionGame/arrow.png";
            this.frameIndex = 0;
            this.frameCount = 1; // single frame
            this.width = 60; // scale down if needed
            this.height = 25;
        } else if (type === "FIREBALL") {
            this.spriteSheet = new Image();
            this.spriteSheet.src = path + "/images/mansionGame/fireball.png";
            this.frameIndex = 0;
            this.frameCount = 4; // 2x2 grid
            this.frameCols = 2;
            this.frameRows = 2;
            this.width = 64;
            this.height = 64;
        }

        // Start at source position
        this.position = { x: sourcex, y: sourcey };
    }

    update() {
        // Move projectile
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;

        // Check if offscreen
        if (
            this.position.x < 0 || this.position.x > this.gameEnv.innerWidth ||
            this.position.y < 0 || this.position.y > this.gameEnv.innerHeight
        ) {
            this.revComplete = true;
            this.destroy();
        }

        // Draw
        this.draw();

        // Check if we are close enouph to the player
        this.execDamage();
    }

    draw() {
        const ctx = this.ctx;
        this.clearCanvas();

        if (this.type === "FIREBALL" && this.spriteSheet.complete) {
            // Animate 2x2 sprite sheet
            const frameWidth = this.spriteSheet.width / this.frameCols;
            const frameHeight = this.spriteSheet.height / this.frameRows;
            const col = this.frameIndex % this.frameCols;
            const row = Math.floor(this.frameIndex / this.frameCols);

            ctx.drawImage(
                this.spriteSheet,
                col * frameWidth, row * frameHeight, frameWidth, frameHeight,
                0, 0, this.width, this.height
            );

            // Advance frame
            this.frameIndex = (this.frameIndex + 1) % this.frameCount;

        } else if (this.spriteSheet.complete) {
            // Draw arrow or any single-image projectile
            /*
            ctx.drawImage(
                this.spriteSheet,
                0, 0, this.spriteSheet.naturalWidth, this.spriteSheet.naturalHeight,
                0, 0, this.width, this.height
            );
            */
           ctx.drawImage(this.spriteSheet, 0, 0, this.width, this.height);
        }

        // Draw to screen
        this.setupCanvas();
    }

    // Deal damage to the player
    execDamage() {
        const players = this.gameEnv.gameObjects.filter(obj => obj.constructor.name === 'Player');
        if (players.length === 0) return null;

        let nearest = players[0];
        let minDist = Infinity;

        for (const player of players) {
            const dx = player.position.x - this.position.x;
            const dy = player.position.y - this.position.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < minDist) {
                minDist = dist;
                nearest = player;
            }
        }

        // Do distance formula calculation and return
        const xDiff = nearest.position.x - this.position.x;
        const yDiff = nearest.position.y - this.position.y;
        const distanceFromPlayer = Math.sqrt(xDiff * xDiff + yDiff * yDiff);

        // If the player is too close...
        const PLAYER_HIT_DISTANCE = 100;
        const ARROW_DAMAGE = 10;
        const FIREBALL_DAMAGE = 15;
        const DAMAGE_DEALT = this.type == "FIREBALL" ? FIREBALL_DAMAGE : ARROW_DAMAGE;
        if (distanceFromPlayer <= PLAYER_HIT_DISTANCE) {
            this.revComplete = true;
            this.destroy();
            if (!nearest.data) nearest.data = { health: 100 }; // Initialize health if not exists
            nearest.data.health -= DAMAGE_DEALT;
            console.log("Player Health:", nearest.data.health);
            if (nearest.data.health <= 0) {
                // Only log to the console for now
                console.log("Game over -- the player has been defeated!");
            }
        }
    }

    // Carry over the method that is destroying the image once it's offscreen
    destroy() {
        super.destroy();
    }
}

export default Projectile;
