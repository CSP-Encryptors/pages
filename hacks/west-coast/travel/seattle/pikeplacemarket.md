---
layout: post
title: "Pike Place Market"
description: 
permalink: /west-coast/travel/seattle/pikeplace/
date: 2025-10-21
---

<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Pike Place Market - Seattle</title>
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
  
  .pike-scene {
    background: linear-gradient(180deg, #87CEEB 0%, #a8c8d8 60%, #c8d8e8 100%);
    width: 100%;
    height: 100%;
    position: relative;
  }
  
  .market-sign {
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translateX(-50%);
    width: 450px;
    height: 120px;
    background: linear-gradient(135deg, #c41e3a, #a01828);
    border: 8px solid #8b1520;
    border-radius: 8px;
    display: grid;
    place-items: center;
    box-shadow: 0 12px 30px rgba(0,0,0,.4);
  }
  
  .market-sign-text {
    color: #fff;
    font-weight: 800;
    font-size: 36px;
    letter-spacing: 4px;
    text-shadow: 3px 3px 6px rgba(0,0,0,.6);
  }
  
  .clock {
    position: absolute;
    top: 18%;
    left: 15%;
    width: 60px;
    height: 60px;
    background: #fff;
    border: 6px solid #333;
    border-radius: 50%;
    box-shadow: 0 6px 15px rgba(0,0,0,.3);
  }
  
  .clock-hand {
    position: absolute;
    background: #333;
    transform-origin: bottom;
    left: 50%;
    bottom: 50%;
  }
  
  .hour-hand {
    width: 4px;
    height: 18px;
    margin-left: -2px;
    animation: rotateHour 120s linear infinite;
  }
  
  .minute-hand {
    width: 3px;
    height: 24px;
    margin-left: -1.5px;
    animation: rotateMinute 10s linear infinite;
  }
  
  @keyframes rotateHour {
    to { transform: rotate(360deg); }
  }
  
  @keyframes rotateMinute {
    to { transform: rotate(360deg); }
  }
  
  .market-awning {
    position: absolute;
    bottom: 35%;
    left: 10%;
    right: 10%;
    height: 80px;
    background: repeating-linear-gradient(
      90deg,
      #ff6b35 0px,
      #ff6b35 40px,
      #fff 40px,
      #fff 80px
    );
    border: 4px solid #d94515;
    border-radius: 12px 12px 0 0;
    box-shadow: 0 8px 20px rgba(0,0,0,.3);
  }
  
  .market-stall {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 35%;
    background: linear-gradient(180deg, #8b6f47 0%, #6d5838 100%);
  }
  
  .crate {
    position: absolute;
    width: 60px;
    height: 50px;
    background: linear-gradient(135deg, #d2a679, #b88a5c);
    border: 3px solid #8b6f47;
    border-radius: 4px;
    bottom: 35%;
  }
  
  .crate.c1 { left: 20%; }
  .crate.c2 { left: 35%; bottom: 40%; }
  .crate.c3 { right: 25%; }
  
  .fish {
    position: absolute;
    width: 50px;
    height: 25px;
    background: linear-gradient(135deg, #a8d8ea, #79c7e3);
    border-radius: 50% 50% 50% 0;
    bottom: 45%;
    left: 30%;
    animation: throwFish 3s ease-in-out infinite;
    transform-origin: center;
    border: 2px solid #5aa8c0;
  }
  
  .fish-eye {
    position: absolute;
    width: 6px;
    height: 6px;
    background: #000;
    border-radius: 50%;
    top: 6px;
    left: 8px;
  }
  
  .fish-tail {
    position: absolute;
    width: 0;
    height: 0;
    border-left: 15px solid #79c7e3;
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;
    right: -10px;
    top: 50%;
    transform: translateY(-50%);
  }
  
  @keyframes throwFish {
    0%, 100% { left: 30%; bottom: 45%; transform: rotate(0deg); }
    50% { left: 60%; bottom: 65%; transform: rotate(360deg); }
  }
  
  .vendor {
    position: absolute;
    bottom: 35%;
    width: 40px;
    height: 70px;
  }
  
  .vendor.v1 { left: 25%; }
  .vendor.v2 { right: 30%; }
  
  .vendor-head {
    width: 28px;
    height: 28px;
    background: radial-gradient(circle at 40% 30%, #ffd4a3, #e6b88a);
    border-radius: 50%;
    margin: 0 auto 4px;
    border: 2px solid #cc9966;
  }
  
  .vendor-body {
    width: 40px;
    height: 35px;
    background: linear-gradient(135deg, #ff6b35, #d94515);
    margin: 0 auto;
    border-radius: 8px;
    border: 2px solid #a83610;
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
    <div class="pike-scene">
      <div class="label">🐟 Pike Place Market</div>
      
      <div class="clock">
        <div class="clock-hand hour-hand"></div>
        <div class="clock-hand minute-hand"></div>
      </div>
      
      <div class="market-sign">
        <div class="market-sign-text">PUBLIC MARKET</div>
      </div>
      
      <div class="market-awning"></div>
      
      <div class="crate c1"></div>
      <div class="crate c2"></div>
      <div class="crate c3"></div>
      
      <div class="fish">
        <div class="fish-eye"></div>
        <div class="fish-tail"></div>
      </div>
      
      <div class="vendor v1">
        <div class="vendor-head"></div>
        <div class="vendor-body"></div>
      </div>
      
      <div class="vendor v2">
        <div class="vendor-head"></div>
        <div class="vendor-body"></div>
      </div>
      
      <div class="market-stall"></div>
    </div>
  </div>
</body>
</html>

# Progress Bar Lesson: Pike Place Market Theme

## What is a Progress Bar?
A progress bar shows how much of a task is complete. Think of Pike Place Market—shoppers moving through vendor stalls from the fish market to the flower stands, checking items off their list. It shows where you are and how much is left.

## The 3 Parts of a Progress Bar

### The Track (The Full Market)
From the famous Pike Place sign to the last vendor—represents the total task.
- Background bar showing the complete distance

### The Fill (Stalls Visited)
Progress through the market—shows how far you've come.
- Colored bar that grows as you complete the task

### The Label (Vendor Signs)
Clear signs at each stall—tells you exactly where you are.
- Text showing percentage or "3 of 10 items checked out"

## 5 Design Tips

### 1. Make it Visible
Like the bright vendor signs—easy to see in the busy market.
- Use clear colors with good contrast
- Make it big enough to notice

### 2. Show Real Progress
Like crossing items off your shopping list—accurate and honest.
- Update smoothly as tasks complete
- Never fake progress or go backwards

### 3. Use Market Colors
Bright produce colors and fresh fish tones create energy.
- Match your brand colors
- Use color to show status (green = good, red = error)

### 4. Add Context
Like vendor shouts calling out specials—tell users what's happening.
- "Processing payment... 60%"
- "2 of 5 items added to cart"

### 5. Keep it Simple
Don't overcomplicate like a crowded Saturday morning.
- One bar, clear message
- Avoid fancy animations that distract

## Common Mistakes

1. No feedback—users don't know if anything is happening
2. Jumping progress—going from 10% to 90% instantly feels fake
3. Stuck at 99%—like waiting in the checkout line forever
4. Too small—like trying to read price signs from across the aisle
5. No message—progress without context confuses users

## Quick Example

**Good**: "Adding to cart... [████████░░] 80% - Almost done!"  
**Bad**: [░░░░░░░░░░] (no message, unclear progress)

## Quick Tips

- Always show feedback when users wait
- Smooth animations feel more professional
- Add estimated time if possible: "About 30 seconds remaining"
- Use motion to show it's working, not frozen
- Celebrate completion—like finding the perfect bouquet!