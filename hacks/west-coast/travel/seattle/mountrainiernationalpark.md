---
layout: post
title: "Mount Rainier National Park"
description: 
permalink: /west-coast/travel/seattle/mtrainier/
date: 2025-10-21
---

<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Lumen Field - Seattle</title>
<style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body {
    font-family: system-ui, -apple-system, sans-serif;
    background: linear-gradient(135deg, #2c5f7c, #1a3f56);
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
  
  .container {
    width: min(1200px, 95vw);
    height: min(700px, 90vh);
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 20px 60px rgba(0,0,0,.5);
    position: relative;
  }
  
  .lumen-scene {
    background: linear-gradient(180deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
    width: 100%;
    height: 100%;
    position: relative;
  }
  
  .stadium-lights {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  
  .light-tower {
    position: absolute;
    width: 30px;
    height: 120px;
    background: linear-gradient(135deg, #555, #333);
    border: 2px solid #222;
    border-radius: 4px;
  }
  
  .lt1 { top: 15%; left: 10%; }
  .lt2 { top: 15%; right: 10%; }
  .lt3 { bottom: 40%; left: 8%; }
  .lt4 { bottom: 40%; right: 8%; }
  
  .light-beam {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 60px;
    background: radial-gradient(ellipse at 50% 0%, rgba(255,255,150,.4), transparent 70%);
    animation: lightPulse 3s ease-in-out infinite;
  }
  
  @keyframes lightPulse {
    0%, 100% { opacity: 0.6; }
    50% { opacity: 1; }
  }
  
  .stadium-structure {
    position: absolute;
    bottom: 20%;
    left: 10%;
    right: 10%;
    height: 180px;
    background: linear-gradient(135deg, #2c5f7c, #1a3f56);
    border: 4px solid #0d2a3a;
    border-radius: 80px 80px 0 0;
    box-shadow: inset 0 -20px 40px rgba(0,0,0,.4);
  }
  
  .stadium-seats {
    position: absolute;
    inset: 20px;
    background: repeating-linear-gradient(
      180deg,
      #4a7c4e 0px,
      #4a7c4e 8px,
      #3a6b3f 8px,
      #3a6b3f 16px
    );
    border-radius: 60px 60px 0 0;
  }
  
  .football-field {
    position: absolute;
    bottom: 20%;
    left: 15%;
    right: 15%;
    height: 25%;
    background: linear-gradient(90deg, #2d5016 0%, #3a6b3f 50%, #2d5016 100%);
    border: 3px solid #fff;
  }
  
  .yard-line {
    position: absolute;
    width: 2px;
    height: 100%;
    background: rgba(255,255,255,.6);
    left: var(--x);
  }
  
  .midfield {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 48px;
    font-weight: 800;
    color: rgba(255,255,255,.3);
  }
  
  .football-player {
    position: absolute;
    bottom: 23%;
    width: 30px;
    height: 60px;
    animation: run 4s linear infinite;
  }
  
  .player-helmet {
    width: 26px;
    height: 20px;
    background: linear-gradient(135deg, #002244, #69be28);
    border-radius: 50% 50% 30% 30%;
    margin: 0 auto 2px;
    border: 2px solid #001122;
    position: relative;
  }
  
  .facemask {
    position: absolute;
    bottom: 2px;
    left: 50%;
    transform: translateX(-50%);
    width: 18px;
    height: 8px;
    border: 2px solid #ccc;
    border-radius: 0 0 8px 8px;
    border-top: none;
  }
  
  .jersey {
    width: 30px;
    height: 28px;
    background: linear-gradient(135deg, #002244, #003366);
    margin: 0 auto;
    border-radius: 6px;
    border: 2px solid #001122;
  }
  
  .player-legs {
    display: flex;
    justify-content: space-around;
    padding: 0 6px;
  }
  
  .player-leg {
    width: 10px;
    height: 20px;
    background: #e8e8e8;
    border-radius: 4px;
    border: 1px solid #ccc;
  }
  
  @keyframes run {
    0% { left: 15%; }
    100% { left: 85%; }
  }
  
  .football {
    position: absolute;
    bottom: 35%;
    left: 40%;
    width: 20px;
    height: 12px;
    background: linear-gradient(135deg, #8b4513, #654321);
    border-radius: 50%;
    border: 2px solid #5a3010;
    animation: spiral 4s ease-in-out infinite;
  }
  
  .laces {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 12px;
    height: 2px;
    background: #fff;
  }
  
  @keyframes spiral {
    0%, 100% { left: 40%; bottom: 35%; transform: rotate(0deg); }
    50% { left: 70%; bottom: 50%; transform: rotate(720deg); }
  }
  
  .label {
    position: absolute;
    top: 20px;
    left: 20px;
    background: rgba(255,255,255,.95);
    padding: 12px 24px;
    border-radius: 12px;
    font-weight: 700;
    font-size: 20px;
    color: #1a3f56;
    box-shadow: 0 8px 20px rgba(0,0,0,.3);
  }
</style>
</head>
<body>
  <div class="container">
    <div class="lumen-scene">
      <div class="label">🏈 Lumen Field</div>
      
      <div class="stadium-lights">
        <div class="light-tower lt1">
          <div class="light-beam"></div>
        </div>
        <div class="light-tower lt2">
          <div class="light-beam"></div>
        </div>
        <div class="light-tower lt3">
          <div class="light-beam"></div>
        </div>
        <div class="light-tower lt4">
          <div class="light-beam"></div>
        </div>
      </div>
      
      <div class="stadium-structure">
        <div class="stadium-seats"></div>
      </div>
      
      <div class="football-field">
        <div class="yard-line" style="--x: 20%"></div>
        <div class="yard-line" style="--x: 40%"></div>
        <div class="yard-line" style="--x: 60%"></div>
        <div class="yard-line" style="--x: 80%"></div>
        <div class="midfield">12</div>
      </div>
      
      <div class="football-player">
        <div class="player-helmet">
          <div class="facemask"></div>
        </div>
        <div class="jersey"></div>
        <div class="player-legs">
          <div class="player-leg"></div>
          <div class="player-leg"></div>
        </div>
      </div>
      
      <div class="football">
        <div class="laces"></div>
      </div>
    </div>
  </div>
</body>
</html>


# Progress Bar Lesson: Mount Rainier National Park Theme

## What is a Progress Bar?
A progress bar shows how much of a task is complete. Think of Mount Rainier National Park—hikers watching trail markers count up to the summit, or the elevation gain on your climb. It shows where you are and how much is left.

## The 3 Parts of a Progress Bar

### The Track (The Trail)
The full trail from Paradise to the summit—represents the total task.
- Background bar showing the complete distance

### The Fill (Miles Hiked)
Progress up the mountain—shows how far you've come.
- Colored bar that grows as you complete the task

### The Label (Trail Marker)
Elevation signs and mile markers—tells you exactly where you are.
- Text showing percentage or "3 of 10 miles complete"

## 5 Design Tips

### 1. Make it Visible
Like trail markers visible through the mist—easy to see from anywhere.
- Use clear colors with good contrast
- Make it big enough to notice

### 2. Show Real Progress
Like elevation markers on the trail—accurate and honest.
- Update smoothly as tasks complete
- Never fake progress or go backwards

### 3. Use Nature Colors
Mountain blues and forest greens create calm focus.
- Match your brand colors
- Use color to show status (green = good, red = error)

### 4. Add Context
Like a trail map—tell users what's happening.
- "Uploading photos... 60%"
- "2 of 5 forms completed"

### 5. Keep it Simple
Don't overcomplicate like confusing trail junctions.
- One bar, clear message
- Avoid fancy animations that distract

## Common Mistakes

1. No feedback—users don't know if anything is happening
2. Jumping progress—going from 10% to 90% instantly feels fake
3. Stuck at 99%—like being 100 feet from the summit forever
4. Too small—like trying to read a trail sign from a mile away
5. No message—progress without context confuses users

## Quick Example

**Good**: "Processing images... [████████░░] 80% - 2 minutes left"  
**Bad**: [░░░░░░░░░░] (no message, unclear progress)

## Quick Tips

- Always show feedback when users wait
- Smooth animations feel more professional
- Add estimated time if possible: "About 2 minutes remaining"
- Use motion to show it's working, not frozen
- Celebrate completion—like reaching the summit!