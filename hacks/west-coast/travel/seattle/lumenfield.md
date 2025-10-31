---
layout: post
title: "Lumen Field"
description: 
permalink: /west-coast/travel/seattle/lumen/
date: 2025-10-21
---

<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Mount Rainier National Park</title>
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
  
  .rainier-scene {
    background: linear-gradient(180deg, #87CEEB 0%, #a4c8e1 40%, #d5e5f0 100%);
    width: 100%;
    height: 100%;
    position: relative;
  }
  
  .mountain-sky {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 65%;
  }
  
  .mountain-cloud {
    position: absolute;
    background: rgba(255,255,255,.75);
    border-radius: 100px;
    animation: driftCloud 35s linear infinite;
  }
  
  .mc1 {
    width: 120px;
    height: 50px;
    top: 15%;
    left: -150px;
  }
  
  .mc1:before {
    content: "";
    position: absolute;
    width: 60px;
    height: 60px;
    background: rgba(255,255,255,.75);
    border-radius: 50%;
    top: -25px;
    left: 30px;
  }
  
  .mc2 {
    width: 100px;
    height: 45px;
    top: 25%;
    left: -200px;
    animation-delay: 10s;
  }
  
  @keyframes driftCloud {
    to { transform: translateX(calc(100vw + 250px)); }
  }
  
  .mount-rainier {
    position: absolute;
    bottom: 35%;
    left: 50%;
    transform: translateX(-50%);
    width: 500px;
    height: 350px;
  }
  
  .mountain-peak {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 250px solid transparent;
    border-right: 250px solid transparent;
    border-bottom: 350px solid #8a9ba8;
    filter: drop-shadow(0 10px 30px rgba(0,0,0,.3));
  }
  
  .snow-cap {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 150px solid transparent;
    border-right: 150px solid transparent;
    border-bottom: 200px solid #fff;
    filter: drop-shadow(0 0 20px rgba(255,255,255,.8));
  }
  
  .glacier {
    position: absolute;
    width: 80px;
    height: 150px;
    background: linear-gradient(180deg, rgba(255,255,255,.9), rgba(200,220,240,.7));
    top: 140px;
    clip-path: polygon(30% 0%, 70% 0%, 100% 100%, 0% 100%);
  }
  
  .g1 { left: 35%; }
  .g2 { right: 35%; }
  
  .forest-base {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 35%;
    background: linear-gradient(180deg, #2d5016 0%, #1e3a0f 100%);
  }
  
  .tree {
    position: absolute;
    bottom: 35%;
    width: 30px;
    height: 80px;
  }
  
  .tree-trunk {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 8px;
    height: 25px;
    background: #5a3a1f;
    border-radius: 2px;
  }
  
  .tree-foliage {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    border-bottom: 60px solid #2d5016;
  }
  
  .tree.t1 { left: 15%; }
  .tree.t2 { left: 25%; bottom: 32%; }
  .tree.t3 { left: 35%; }
  .tree.t4 { right: 30%; }
  .tree.t5 { right: 20%; bottom: 33%; }
  .tree.t6 { right: 10%; }
  
  .deer {
    position: absolute;
    bottom: 35%;
    left: 45%;
    width: 50px;
    height: 60px;
    animation: graze 6s ease-in-out infinite;
  }
  
  .deer-body {
    width: 40px;
    height: 30px;
    background: linear-gradient(135deg, #8b6f47, #6d5838);
    border-radius: 40%;
    position: absolute;
    bottom: 20px;
    border: 2px solid #5a3a1f;
  }
  
  .deer-head {
    width: 20px;
    height: 24px;
    background: #8b6f47;
    border-radius: 50% 50% 40% 40%;
    position: absolute;
    top: 0;
    left: 0;
    border: 2px solid #5a3a1f;
  }
  
  .antler {
    position: absolute;
    width: 3px;
    height: 15px;
    background: #5a3a1f;
    top: -2px;
  }
  
  .antler.left { left: 4px; transform: rotate(-20deg); }
  .antler.right { right: 4px; transform: rotate(20deg); }
  
  .antler:before {
    content: "";
    position: absolute;
    width: 3px;
    height: 8px;
    background: #5a3a1f;
    top: 4px;
    left: -3px;
    transform: rotate(-45deg);
  }
  
  .deer-leg {
    width: 6px;
    height: 20px;
    background: #6d5838;
    position: absolute;
    bottom: 0;
    border-radius: 2px;
    border: 1px solid #5a3a1f;
  }
  
  .dl1 { left: 8px; }
  .dl2 { left: 18px; }
  .dl3 { right: 10px; }
  .dl4 { right: 2px; }
  
  @keyframes graze {
    0%, 100% { transform: translateX(0); }
    50% { transform: translateX(30px); }
  }
  
  .eagle {
    position: absolute;
    width: 40px;
    height: 18px;
    top: 20%;
    left: -60px;
    animation: soar 20s linear infinite;
  }
  
  .eagle:before,
  .eagle:after {
    content: "";
    position: absolute;
    width: 20px;
    height: 12px;
    background: transparent;
    border-top: 4px solid #5a3a1f;
    border-radius: 50%;
  }
  
  .eagle:before {
    left: 0;
    animation: eagleFlap 2s ease-in-out infinite;
  }
  
  .eagle:after {
    right: 0;
    animation: eagleFlap 2s ease-in-out infinite reverse;
  }
  
  @keyframes soar {
    to { left: 110%; top: 30%; }
  }
  
  @keyframes eagleFlap {
    0%, 100% { transform: rotateX(0deg); }
    50% { transform: rotateX(40deg); }
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
    <div class="rainier-scene">
      <div class="label">⛰️ Mount Rainier</div>
      
      <div class="mountain-sky">
        <div class="mountain-cloud mc1"></div>
        <div class="mountain-cloud mc2"></div>
      </div>
      
      <div class="mount-rainier">
        <div class="mountain-peak">
          <div class="snow-cap"></div>
          <div class="glacier g1"></div>
          <div class="glacier g2"></div>
        </div>
      </div>
      
      <div class="tree t1">
        <div class="tree-trunk"></div>
        <div class="tree-foliage"></div>
      </div>
      <div class="tree t2">
        <div class="tree-trunk"></div>
        <div class="tree-foliage"></div>
      </div>
      <div class="tree t3">
        <div class="tree-trunk"></div>
        <div class="tree-foliage"></div>
      </div>
      <div class="tree t4">
        <div class="tree-trunk"></div>
        <div class="tree-foliage"></div>
      </div>
      <div class="tree t5">
        <div class="tree-trunk"></div>
        <div class="tree-foliage"></div>
      </div>
      <div class="tree t6">
        <div class="tree-trunk"></div>
        <div class="tree-foliage"></div>
      </div>
      
      <div class="deer">
        <div class="deer-head">
          <div class="antler left"></div>
          <div class="antler right"></div>
        </div>
        <div class="deer-body"></div>
        <div class="deer-leg dl1"></div>
        <div class="deer-leg dl2"></div>
        <div class="deer-leg dl3"></div>
        <div class="deer-leg dl4"></div>
      </div>
      
      <div class="eagle"></div>
      
      <div class="forest-base"></div>
    </div>
  </div>
</body>
</html>

# Progress Bar Lesson: Lumen Field Theme

## What is a Progress Bar?
A progress bar shows how much of a task is complete. Think of Lumen Field—fans watching the game clock count down, or the "12th Man" flag raising before kickoff. It shows where you are and how much is left.

## The 3 Parts of a Progress Bar

### The Track (The Field)
The full 100 yards—represents the total task.
- Background bar showing the complete distance

### The Fill (Yards Gained)
Progress down the field—shows how far you've come.
- Colored bar that grows as you complete the task

### The Label (Scoreboard)
Game stats and time remaining—tells you exactly where you are.
- Text showing percentage or "3 of 10 steps complete"

## 5 Design Tips

### 1. Make it Visible
Like the giant scoreboard—easy to see from anywhere.
- Use clear colors with good contrast
- Make it big enough to notice

### 2. Show Real Progress
Like yard markers on the field—accurate and honest.
- Update smoothly as tasks complete
- Never fake progress or go backwards

### 3. Use Team Colors
Seahawks blue and green create excitement.
- Match your brand colors
- Use color to show status (green = good, red = error)

### 4. Add Context
Like the play clock—tell users what's happening.
- "Uploading files... 60%"
- "2 of 5 questions answered"

### 5. Keep it Simple
Don't overcomplicate like a confusing penalty call.
- One bar, clear message
- Avoid f