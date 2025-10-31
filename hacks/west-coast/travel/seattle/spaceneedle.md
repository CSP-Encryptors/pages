---
layout: post
title: "Space Needle"
description: 
permalink: /west-coast/travel/seattle/needle/
date: 2025-10-21
---

<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Space Needle - Seattle</title>
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
  
  .needle-scene {
    background: linear-gradient(180deg, #708090 0%, #a9b5c1 60%, #d3dce6 100%);
    width: 100%;
    height: 100%;
    position: relative;
  }
  
  .seattle-sky {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 70%;
  }
  
  .rain-drop {
    position: absolute;
    width: 2px;
    height: 20px;
    background: linear-gradient(180deg, transparent, rgba(255,255,255,.6));
    top: -30px;
    animation: rain 1.5s linear infinite;
  }
  
  @keyframes rain {
    to { top: 110%; }
  }
  
  .space-needle {
    position: absolute;
    bottom: 20%;
    left: 50%;
    transform: translateX(-50%);
    width: 300px;
    height: 500px;
  }
  
  .needle-base {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 140px;
    height: 60px;
    background: linear-gradient(135deg, #a0a0a0, #808080);
    border-radius: 12px;
    border: 4px solid #606060;
    box-shadow: 0 8px 20px rgba(0,0,0,.4);
  }
  
  .needle-legs {
    position: absolute;
    bottom: 60px;
    left: 50%;
    transform: translateX(-50%);
    width: 220px;
    height: 100px;
  }
  
  .leg {
    position: absolute;
    width: 10px;
    background: linear-gradient(135deg, #b8b8b8, #808080);
    border: 3px solid #606060;
    bottom: 0;
    border-radius: 5px;
    box-shadow: 2px 2px 8px rgba(0,0,0,.3);
  }
  
  .leg.l1 { 
    left: 10px; 
    height: 100px;
    transform: rotate(-25deg); 
    transform-origin: bottom center; 
  }
  .leg.l2 { 
    left: 40%; 
    height: 90px;
    transform: rotate(-12deg); 
    transform-origin: bottom center; 
  }
  .leg.l3 { 
    right: 40%; 
    height: 90px;
    transform: rotate(12deg); 
    transform-origin: bottom center; 
  }
  .leg.l4 { 
    right: 10px; 
    height: 100px;
    transform: rotate(25deg); 
    transform-origin: bottom center; 
  }
  
  .needle-shaft {
    position: absolute;
    bottom: 160px;
    left: 50%;
    transform: translateX(-50%);
    width: 22px;
    height: 240px;
    background: linear-gradient(90deg, #d0d0d0 0%, #a0a0a0 50%, #d0d0d0 100%);
    border: 3px solid #707070;
    border-radius: 11px;
    box-shadow: inset 0 0 15px rgba(0,0,0,.25), 4px 0 12px rgba(0,0,0,.3);
  }
  
  .saucer-bottom {
    position: absolute;
    top: 100px;
    left: 50%;
    transform: translateX(-50%);
    width: 200px;
    height: 30px;
    background: linear-gradient(180deg, #888, #666);
    border-radius: 50%;
    border: 4px solid #555;
    box-shadow: 0 12px 30px rgba(0,0,0,.5);
  }
  
  .observation-deck {
    position: absolute;
    top: 80px;
    left: 50%;
    transform: translateX(-50%);
    width: 180px;
    height: 70px;
    background: linear-gradient(180deg, #f8f8f8 0%, #e0e0e0 50%, #c8c8c8 100%);
    border-radius: 50%;
    border: 5px solid #a0a0a0;
    box-shadow: 0 15px 35px rgba(0,0,0,.5), inset 0 -10px 20px rgba(0,0,0,.1);
  }
  
  .observation-deck:before {
    content: "";
    position: absolute;
    top: -22px;
    left: 50%;
    transform: translateX(-50%);
    width: 160px;
    height: 22px;
    background: linear-gradient(180deg, #e8e8e8, #d0d0d0);
    border-radius: 50%;
    border: 4px solid #a0a0a0;
    box-shadow: 0 -5px 15px rgba(0,0,0,.2);
  }
  
  .observation-deck:after {
    content: "";
    position: absolute;
    bottom: -12px;
    left: 50%;
    transform: translateX(-50%);
    width: 140px;
    height: 12px;
    background: linear-gradient(180deg, #b8b8b8, #909090);
    border-radius: 50%;
  }
  
  .deck-windows {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 160px;
    height: 30px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  
  .deck-window {
    width: 10px;
    height: 22px;
    background: linear-gradient(180deg, rgba(135,206,235,.8), rgba(100,149,237,.6));
    border: 2px solid #707070;
    border-radius: 3px;
    box-shadow: inset 0 0 5px rgba(255,255,255,.5);
  }
  
  .roof-ring {
    position: absolute;
    top: 55px;
    left: 50%;
    transform: translateX(-50%);
    width: 200px;
    height: 30px;
    background: linear-gradient(180deg, #d0d0d0, #a8a8a8);
    border-radius: 50%;
    border: 4px solid #888;
    box-shadow: 0 8px 20px rgba(0,0,0,.4);
  }
  
  .needle-top {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 28px;
    height: 70px;
    background: linear-gradient(90deg, #f0f0f0 0%, #c0c0c0 50%, #f0f0f0 100%);
    border-radius: 14px;
    border: 3px solid #909090;
    box-shadow: 0 6px 15px rgba(0,0,0,.4);
  }
  
  .top-cap {
    position: absolute;
    top: 35px;
    left: 50%;
    transform: translateX(-50%);
    width: 40px;
    height: 25px;
    background: radial-gradient(ellipse at 50% 30%, #e8e8e8, #b8b8b8);
    border-radius: 50%;
    border: 3px solid #888;
  }
  
  .antenna {
    position: absolute;
    top: -55px;
    left: 50%;
    transform: translateX(-50%);
    width: 6px;
    height: 60px;
    background: linear-gradient(180deg, #888, #606060);
    border-radius: 3px;
    box-shadow: 2px 2px 6px rgba(0,0,0,.4);
  }
  
  .antenna-light {
    position: absolute;
    top: -12px;
    left: 50%;
    transform: translateX(-50%);
    width: 12px;
    height: 12px;
    background: radial-gradient(circle, #ff3333, #cc0000);
    border-radius: 50%;
    box-shadow: 0 0 25px #ff0000, 0 0 50px rgba(255,0,0,.6);
    animation: blink 2s ease-in-out infinite;
  }
  
  @keyframes blink {
    0%, 40%, 60%, 100% { opacity: 1; transform: translateX(-50%) scale(1); }
    50% { opacity: 0.3; transform: translateX(-50%) scale(0.9); }
  }
  
  .city-building {
    position: absolute;
    bottom: 20%;
    background: linear-gradient(135deg, #7a8a99, #5a6a79);
    border: 2px solid #3a4a59;
    border-radius: 4px 4px 0 0;
  }
  
  .b1 { left: 15%; width: 60px; height: 100px; }
  .b2 { left: 25%; width: 50px; height: 130px; }
  .b3 { right: 20%; width: 70px; height: 90px; }
  .b4 { right: 10%; width: 55px; height: 110px; }
  
  .window-grid {
    position: absolute;
    inset: 10px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 6px;
  }
  
  .window {
    background: rgba(255,255,150,.8);
    border-radius: 2px;
  }
  
  .ground {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 20%;
    background: linear-gradient(180deg, #4a5a6a 0%, #3a4a5a 100%);
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
    <div class="needle-scene">
      <div class="label">🗼 Space Needle</div>
      
      <div class="seattle-sky">
        <div class="rain-drop" style="left: 15%; animation-delay: 0s;"></div>
        <div class="rain-drop" style="left: 25%; animation-delay: 0.3s;"></div>
        <div class="rain-drop" style="left: 35%; animation-delay: 0.6s;"></div>
        <div class="rain-drop" style="left: 45%; animation-delay: 0.2s;"></div>
        <div class="rain-drop" style="left: 55%; animation-delay: 0.8s;"></div>
        <div class="rain-drop" style="left: 65%; animation-delay: 0.4s;"></div>
        <div class="rain-drop" style="left: 75%; animation-delay: 0.1s;"></div>
        <div class="rain-drop" style="left: 85%; animation-delay: 0.7s;"></div>
      </div>
      
      <div class="city-building b1">
        <div class="window-grid">
          <div class="window"></div><div class="window"></div><div class="window"></div>
          <div class="window"></div><div class="window"></div><div class="window"></div>
          <div class="window"></div><div class="window"></div><div class="window"></div>
        </div>
      </div>
      <div class="city-building b2">
        <div class="window-grid">
          <div class="window"></div><div class="window"></div><div class="window"></div>
          <div class="window"></div><div class="window"></div><div class="window"></div>
          <div class="window"></div><div class="window"></div><div class="window"></div>
        </div>
      </div>
      <div class="city-building b3">
        <div class="window-grid">
          <div class="window"></div><div class="window"></div><div class="window"></div>
          <div class="window"></div><div class="window"></div><div class="window"></div>
        </div>
      </div>
      <div class="city-building b4">
        <div class="window-grid">
          <div class="window"></div><div class="window"></div><div class="window"></div>
          <div class="window"></div><div class="window"></div><div class="window"></div>
          <div class="window"></div><div class="window"></div><div class="window"></div>
        </div>
      </div>
      
      <div class="space-needle">
        <div class="needle-top">
          <div class="antenna">
            <div class="antenna-light"></div>
          </div>
          <div class="top-cap"></div>
        </div>
        <div class="roof-ring"></div>
        <div class="observation-deck">
          <div class="deck-windows">
            <div class="deck-window"></div>
            <div class="deck-window"></div>
            <div class="deck-window"></div>
            <div class="deck-window"></div>
            <div class="deck-window"></div>
            <div class="deck-window"></div>
            <div class="deck-window"></div>
            <div class="deck-window"></div>
            <div class="deck-window"></div>
            <div class="deck-window"></div>
          </div>
        </div>
        <div class="saucer-bottom"></div>
        <div class="needle-shaft"></div>
        <div class="needle-legs">
          <div class="leg l1"></div>
          <div class="leg l2"></div>
          <div class="leg l3"></div>
          <div class="leg l4"></div>
        </div>
        <div class="needle-base"></div>
      </div>
      
      <div class="ground"></div>
    </div>
  </div>
</body>
</html>


# Progress Bar Lesson: Space Needle Theme

## What is a Progress Bar?
A progress bar shows how much of a task is complete. Think of the Space Needle—visitors riding the elevator up 520 feet to the observation deck, watching floor numbers light up as you ascend. It shows where you are and how much is left.

## The 3 Parts of a Progress Bar

### The Track (The Full Tower)
From ground level to the top deck—represents the total task.
- Background bar showing the complete distance

### The Fill (Floors Climbed)
Progress up the tower—shows how far you've come.
- Colored bar that grows as you complete the task

### The Label (Floor Display)
Digital floor counter in the elevator—tells you exactly where you are.
- Text showing percentage or "Level 3 of 5"

## 5 Design Tips

### 1. Make it Visible
Like the bright floor display in the elevator—easy to see in any light.
- Use clear colors with good contrast
- Make it big enough to notice

### 2. Show Real Progress
Like the smooth elevator ride—accurate and honest.
- Update smoothly as tasks complete
- Never fake progress or go backwards

### 3. Use Iconic Colors
Space Needle white and orange create recognizable style.
- Match your brand colors
- Use color to show status (green = good, red = error)

### 4. Add Context
Like the elevator operator's announcements—tell users what's happening.
- "Loading... 60%"
- "Step 3 of 5 complete"

### 5. Keep it Simple
Don't overcomplicate like confusing observation levels.
- One bar, clear message
- Avoid fancy animations that distract

## Common Mistakes

1. No feedback—users don't know if anything is happening
2. Jumping progress—going from 10% to 90% instantly feels fake
3. Stuck at 99%—like an elevator frozen between floors
4. Too small—like trying to read the floor display from outside
5. No message—progress without context confuses users

## Quick Example

**Good**: "Uploading to cloud... [████████░░] 80% - Floor 4 of 5"  
**Bad**: [░░░░░░░░░░] (no message, unclear progress)

## Quick Tips

- Always show feedback when users wait
- Smooth animations feel more professional (like the elevator)
- Add estimated time if possible: "About 40 seconds to top"
- Use motion to show it's working, not frozen
- Celebrate completion—like reaching the stunning 360° view!