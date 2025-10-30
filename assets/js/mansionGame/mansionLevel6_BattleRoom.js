import GameEnvBackground from "./GameEngine/GameEnvBackground.js";
import Player from "./GameEngine/Player.js";
import Boss from './CustomGameClasses/Boss.js';
import Arm from './CustomGameClasses/Arm.js';
import Enemy from './GameEngine/Enemy.js';

class MansionLevel6_BattleRoom {
    constructor(gameEnv) {
        const width = gameEnv.innerWidth;
        const height = gameEnv.innerHeight;
        const path = gameEnv.path;

        // --- Floor ---
        const image_src_floor = path + "/images/mansionGame/bossFloorPattern.png";
        const image_data_floor = {
            name: 'floor',
            src: image_src_floor,
            pixels: {height: 341, width: 498}
        };

        // --- Player ---
        const sprite_src_mc = path + "/images/mansionGame/spookMcWalk.png";
        const MC_SCALE_FACTOR = 7;
        const sprite_data_mc = {
            id: 'Spook',
            greeting: "Hi, I am Spook.",
            src: sprite_src_mc,
            SCALE_FACTOR: MC_SCALE_FACTOR,
            STEP_FACTOR: 1500,
            ANIMATION_RATE: 100,
            INIT_POSITION: { 
                x: (width / 2 - width / (5 * MC_SCALE_FACTOR)), 
                y: height - (height / MC_SCALE_FACTOR)
            },
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
            hitbox: {widthPercentage: 0.45, heightPercentage: 0.2},
            keypress: {up: 87, left: 65, down: 83, right: 68} // W, A, S, D
        };

        // --- Reaper Boss ---
        const BOSS_SCALE_FACTOR = 2;
        const sprite_src_body = path + "/images/mansionGame/ReaperMainBody.png";
        const sprite_boss_data = {
            id: 'reaper',
            src: sprite_src_body,
            SCALE_FACTOR: BOSS_SCALE_FACTOR,
            STEP_FACTOR: 800,
            ANIMATION_RATE: 30,
            INIT_POSITION: {x: Math.floor(width * 0.7), y: Math.floor(height * 0.6)},
            pixels: {height: 300, width: 300},
            orientation: {rows: 1, columns: 1},
            hitbox: {widthPercentage: 0.45, heightPercentage: 0.2},
            projectileSpeed: 8,
            attackInterval: 2000,
            projectileTypes: ['FIREBALL', 'ARROW'],
            initialHealth: 1500
        };

        // Reaper Enemy
        const REAPER_SCALE_FACTOR = 2;
        const sprite_reaper_src = path + "/images/mansionGame/ReaperMainBody.png";
        const sprite_reaper_data = {
            id: 'reaperboss',
            src: sprite_reaper_src,
            SCALE_FACTOR: REAPER_SCALE_FACTOR,
            STEP_FACTOR: 800,
            //ANIMATION_RATE: 30,
            INIT_POSITION: {x: width * 0.7, y: height * 0.8},
            pixels: {width: 300, height: 300},
            orientation: {rows: 1, columns: 1},
            hitbox: {widthPercentage: 0.45, heightPercentage: 0.2},
        }

        // --- Reaper Arms ---
        const ARM_SCALE_FACTOR = 2;
        const sprite_arm_left_empty = path + "/images/mansionGame/ReaperLeftHandEmpty.png";
        const sprite_arm_left_scythe = path + "/images/mansionGame/ReaperLeftHandScythe.png";
        const sprite_arm_right_empty = path + "/images/mansionGame/ReaperRightHandEmpty.png";
        const sprite_arm_right_scythe = path + "/images/mansionGame/ReaperRightHandScythe.png";

        const leftArmData = {
            id: 'leftArm',
            src: sprite_arm_left_scythe,
            SCALE_FACTOR: ARM_SCALE_FACTOR,
            STEP_FACTOR: 800,
            ANIMATION_RATE: 30,
            INIT_POSITION: {x: sprite_boss_data.INIT_POSITION.x - 50, y: sprite_boss_data.INIT_POSITION.y + 20},
            pixels: {height: 300, width: 300},
            orientation: {rows:1, columns:1},
            hitbox: {widthPercentage: 0.4, heightPercentage: 0.2},
            xOffset: -50,
            yOffset: 20,
            hasWeapon: true,
            emptySrc: sprite_arm_left_empty,
            weaponSrc: sprite_arm_left_scythe
        };

        const rightArmData = {
            id: 'rightArm',
            src: sprite_arm_right_empty,
            SCALE_FACTOR: ARM_SCALE_FACTOR,
            STEP_FACTOR: 800,
            ANIMATION_RATE: 30,
            INIT_POSITION: {x: sprite_boss_data.INIT_POSITION.x + 50, y: sprite_boss_data.INIT_POSITION.y + 20},
            pixels: {height: 300, width: 300},
            orientation: {rows:1, columns:1},
            hitbox: {widthPercentage: 0.4, heightPercentage: 0.2},
            xOffset: 50,
            yOffset: 20,
            hasWeapon: false,
            emptySrc: sprite_arm_right_empty,
            weaponSrc: sprite_arm_right_scythe
        };

        // Test data -- bring the Enderman into our game
        const sprite_src_enemy = path + "/images/mansionGame/ReaperMainBody.png";
        const sprite_data_enemy = {
            id: 'Reaper',
            greeting: "You feel a dark presence...",
            src: sprite_src_enemy,
            SCALE_FACTOR: 10,
            ANIMATION_RATE: 50,
            pixels: {height: 300, width: 300},
            INIT_POSITION: {x: width / 2, y: height / 2},
            orientation: {rows: 1, columns: 1},
            down: {row: 0, start: 0, columns: 1},
            hitbox: {widthPercentage: 0.4, heightPercentage: 0.4},
            zIndex: 10,
            isKilling: false, // Flag to prevent multiple kills
            
            // The update method with all functionality inline
            update: function() {
                // Skip update if already in killing process
                if (this.isKilling) {
                    return;
                }
                
                // Find all player objects
                const players = this.gameEnv.gameObjects.filter(obj => 
                    obj.constructor.name === 'Player'
                );
                
                if (players.length === 0) return;
                
                // Find nearest player
                let nearest = players[0];
                let minDist = Infinity;

                for (const player of players) {
                    const dx = player.position.x - this.position.x;
                    const dy = player.position.y - this.position.y;
                    const dist = Math.sqrt(dx*dx + dy*dy);
                    if (dist < minDist) {
                        minDist = dist;
                        nearest = player;
                    }
                }

                // Move towards nearest player
                const speed = 0.5; // Adjust speed as needed
                const dx = nearest.position.x - this.position.x;
                const dy = nearest.position.y - this.position.y;
                const angle = Math.atan2(dy, dx);
                
                // Update position
                this.position.x += Math.cos(angle) * speed;
                this.position.y += Math.sin(angle) * speed;
                
                // Check for collision with any player
                for (const player of players) {
                    // Calculate distance for hitbox collision
                    const playerX = player.position.x + player.width / 2;
                    const playerY = player.position.y + player.height / 2;
                    const enemyX = this.position.x + this.width / 2;
                    const enemyY = this.position.y + this.height / 2;
                    
                    const dx = playerX - enemyX;
                    const dy = playerY - enemyY;
                    const distance = Math.sqrt(dx*dx + dy*dy);
                    
                    // Hitbox collision - adjust values as needed
                    const collisionThreshold = (player.width * player.hitbox.widthPercentage + 
                                            this.width * this.hitbox.widthPercentage) / 2;
                    
                    if (distance < collisionThreshold) {
                        // Set killing flag to prevent repeated kills
                        this.isKilling = true;
                        
                        // === PLAYER DEATH: ALL FUNCTIONALITY INLINE ===
                        
                        // 1. Play death animation - particle effect
                        const playerX = player.position.x;
                        const playerY = player.position.y;
                        
                        // Create explosion effect
                        for (let i = 0; i < 20; i++) {
                            const particle = document.createElement('div');
                            particle.style.position = 'absolute';
                            particle.style.width = '5px';
                            particle.style.height = '5px';
                            particle.style.backgroundColor = 'red';
                            particle.style.left = `${playerX + player.width/2}px`;
                            particle.style.top = `${playerY + player.height/2}px`;
                            particle.style.zIndex = '9999';
                            document.body.appendChild(particle);
                            
                            // Animate particles outward
                            const angle = Math.random() * Math.PI * 2;
                            const speed = Math.random() * 5 + 2;
                            const distance = Math.random() * 100 + 50;
                            
                            const destX = Math.cos(angle) * distance;
                            const destY = Math.sin(angle) * distance;
                            
                            particle.animate(
                                [
                                    { transform: 'translate(0, 0)', opacity: 1 },
                                    { transform: `translate(${destX}px, ${destY}px)`, opacity: 0 }
                                ],
                                {
                                    duration: 1000,
                                    easing: 'ease-out',
                                    fill: 'forwards'
                                }
                            );
                            
                            // Remove particle after animation
                            setTimeout(() => {
                                if (particle.parentNode) {
                                    particle.parentNode.removeChild(particle);
                                }
                            }, 1000);
                        }
                        
                        // 2. Show death message dialog
                        const deathMessage = document.createElement('div');
                        deathMessage.style.position = 'fixed';
                        deathMessage.style.top = '50%';
                        deathMessage.style.left = '50%';
                        deathMessage.style.transform = 'translate(-50%, -50%)';
                        deathMessage.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
                        deathMessage.style.color = '#FF0000';
                        deathMessage.style.padding = '30px';
                        deathMessage.style.borderRadius = '10px';
                        deathMessage.style.fontFamily = "'Press Start 2P', sans-serif";
                        deathMessage.style.fontSize = '24px';
                        deathMessage.style.textAlign = 'center';
                        deathMessage.style.zIndex = '10000';
                        deathMessage.style.border = '3px solid #FF0000';
                        deathMessage.style.boxShadow = '0 0 20px rgba(255, 0, 0, 0.5)';
                        deathMessage.style.width = '400px';
                        deathMessage.innerHTML = `
                            <div style="margin-bottom: 20px;">☠️ YOU DIED ☠️</div>
                            <div style="font-size: 16px; margin-bottom: 20px;">The Enderman got you!</div>
                            <div style="font-size: 14px;">Respawning in 2 seconds...</div>
                        `;
                        
                        document.body.appendChild(deathMessage);
                        
                        // Remove message after delay
                        setTimeout(() => {
                            if (deathMessage.parentNode) {
                                deathMessage.parentNode.removeChild(deathMessage);
                            }
                        }, 2000);
                        
                        // 3. Reset the level after a short delay using page reload for reliability
                        setTimeout(() => {
                            // Clean up any lingering resources before reload
                            if (self && self.timerInterval) {
                                clearInterval(self.timerInterval);
                            }
                            
                            // Force a complete page reload - most reliable way to reset
                            location.reload();
                        }, 2000); // 2 second delay before reset
                        
                        break;
                    }
                }
            }
        };

        this.classes = [
            {class: GameEnvBackground, data: image_data_floor},
            {class: Player, data: sprite_data_mc},
            // {class: Boss, data: sprite_boss_data},
            // {class: Arm, data: leftArmData},
            // {class: Arm, data: rightArmData},
            //{class: Enemy, data: sprite_reaper_data},
            {class: Enemy, data: sprite_data_enemy},
        ];
    }
}

export default MansionLevel6_BattleRoom;