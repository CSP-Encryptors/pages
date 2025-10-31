---
layout: post
title: "Petco Park"
description: 
permalink: /west-coast/travel/sd/petcopark/
date: 2025-10-21
---

<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Petco Park - San Diego</title>
<style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  html {
    scroll-behavior: smooth;
  }
  
  body {
    font-family: system-ui, -apple-system, sans-serif;
    background: linear-gradient(135deg, #00a8cc, #005f73);
    min-height: 100vh;
  }
  
  .animation-wrapper {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px 20px;
    min-height: 100vh;
  }
  
  .container {
    width: min(1200px, 95vw);
    height: min(700px, 90vh);
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 20px 60px rgba(0,0,0,.4);
  }
  
  .petco-scene {
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, #87CEEB 0%, #B8E6F5 45%, #2d5016 45%);
    position: relative;
  }
  
  .sun {
    position: absolute;
    top: 8%;
    right: 12%;
    width: 80px;
    height: 80px;
    background: radial-gradient(circle at 35% 35%, #fff59d, #ffd54f);
    border-radius: 50%;
    box-shadow: 0 0 60px rgba(255,213,79,.5);
  }
  
  .cloud {
    position: absolute;
    background: rgba(255,255,255,.85);
    border-radius: 100px;
    animation: float 25s linear infinite;
  }
  
  .cloud.c1 {
    width: 100px;
    height: 40px;
    top: 12%;
    left: -150px;
  }
  
  .cloud.c1:before {
    content: "";
    position: absolute;
    width: 50px;
    height: 50px;
    background: rgba(255,255,255,.85);
    border-radius: 50%;
    top: -20px;
    left: 20px;
  }
  
  .cloud.c2 {
    width: 80px;
    height: 35px;
    top: 22%;
    left: -200px;
    animation-delay: 8s;
  }
  
  @keyframes float {
    to { transform: translateX(calc(100vw + 200px)); }
  }
  
  .western-building {
    position: absolute;
    bottom: 45%;
    left: 3%;
    width: 140px;
    height: 180px;
    background: linear-gradient(135deg, #8b7355 0%, #6d5a47 100%);
    border: 3px solid #5a4a3a;
    border-radius: 8px 8px 0 0;
    box-shadow: inset 0 -20px 30px rgba(0,0,0,.2);
  }
  
  .western-building:before {
    content: "WESTERN";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(90deg);
    font-size: 22px;
    font-weight: 800;
    color: #fff;
    letter-spacing: 3px;
    text-shadow: 2px 2px 4px rgba(0,0,0,.5);
  }
  
  .metal-panels {
    position: absolute;
    inset: 0;
    background: repeating-linear-gradient(
      0deg,
      transparent 0px,
      rgba(0,0,0,.1) 1px,
      transparent 2px,
      transparent 20px
    );
  }
  
  .scoreboard {
    position: absolute;
    top: 8%;
    left: 50%;
    transform: translateX(-50%);
    width: 280px;
    height: 100px;
    background: linear-gradient(135deg, #1a1a2e, #16213e);
    border: 4px solid #0f3460;
    border-radius: 12px;
    box-shadow: 0 10px 30px rgba(0,0,0,.4);
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    padding: 15px;
  }
  
  .team {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }
  
  .team-name {
    color: #ffd700;
    font-weight: 800;
    font-size: 16px;
    letter-spacing: 1px;
  }
  
  .score {
    color: #00ff88;
    font-size: 32px;
    font-weight: 800;
    text-shadow: 0 0 10px #00ff88;
  }
  
  .field {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 55%;
    background: radial-gradient(ellipse at 50% 100%, #2d5016 0%, #1e3a0f 100%);
  }
  
  .infield {
    position: absolute;
    bottom: 8%;
    left: 50%;
    transform: translateX(-50%);
    width: 320px;
    height: 320px;
    background: #c4a574;
    border-radius: 50%;
    border: 4px solid #a67c52;
    box-shadow: inset 0 -10px 30px rgba(0,0,0,.2);
  }
  
  .pitchers-mound {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 40px;
    height: 40px;
    background: radial-gradient(circle, #d4b896, #a67c52);
    border-radius: 50%;
    border: 2px solid #8b6f47;
  }
  
  .base {
    position: absolute;
    width: 20px;
    height: 20px;
    background: white;
    transform: rotate(45deg);
    box-shadow: 0 4px 8px rgba(0,0,0,.3);
  }
  
  .base.first { bottom: 30%; right: 20%; }
  .base.second { top: 15%; left: 50%; transform: translateX(-50%) rotate(45deg); }
  .base.third { bottom: 30%; left: 20%; }
  .base.home { bottom: 5%; left: 50%; transform: translateX(-50%) rotate(45deg); }
  
  .foul-line {
    position: absolute;
    height: 3px;
    background: white;
    bottom: 8%;
  }
  
  .foul-line.left {
    left: 20%;
    width: 35%;
    transform-origin: right;
    transform: rotate(-45deg);
  }
  
  .foul-line.right {
    right: 20%;
    width: 35%;
    transform-origin: left;
    transform: rotate(45deg);
  }
  
  .wall {
    position: absolute;
    bottom: 35%;
    left: 8%;
    right: 8%;
    height: 8px;
    background: #654321;
    border-radius: 50% 50% 0 0;
    box-shadow: 0 -4px 10px rgba(0,0,0,.3);
  }
  
  .wall:before {
    content: "PETCO PARK";
    position: absolute;
    top: -30px;
    left: 50%;
    transform: translateX(-50%);
    color: #ffd700;
    font-weight: 800;
    font-size: 18px;
    letter-spacing: 3px;
    text-shadow: 2px 2px 4px rgba(0,0,0,.5);
  }
  
  .player {
    position: absolute;
    bottom: 18%;
    left: 50%;
    transform: translateX(-50%);
    width: 40px;
    height: 80px;
    z-index: 10;
  }
  
  .player-head {
    width: 28px;
    height: 28px;
    background: radial-gradient(circle at 40% 30%, #ffd4a3, #e6b88a);
    border-radius: 50%;
    margin: 0 auto 4px;
    border: 2px solid #cc9966;
    position: relative;
  }
  
  .helmet {
    position: absolute;
    top: -6px;
    left: 50%;
    transform: translateX(-50%);
    width: 32px;
    height: 20px;
    background: linear-gradient(135deg, #8b4513, #654321);
    border-radius: 50% 50% 30% 30%;
    border: 2px solid #5a3310;
  }
  
  .player-body {
    width: 40px;
    height: 35px;
    background: linear-gradient(135deg, #1a4d2e, #0f3a1f);
    margin: 0 auto;
    border-radius: 8px;
    position: relative;
    border: 2px solid #0a2615;
  }
  
  .player-legs {
    display: flex;
    justify-content: space-around;
    padding: 0 8px;
  }
  
  .leg {
    width: 12px;
    height: 28px;
    background: #e8e8e8;
    border-radius: 6px;
    border: 2px solid #ccc;
  }
  
  .bat {
    position: absolute;
    width: 8px;
    height: 70px;
    background: linear-gradient(180deg, #8b4513, #654321);
    border-radius: 4px;
    top: 15px;
    right: -25px;
    transform-origin: top;
    animation: swing 2s ease-in-out infinite;
    box-shadow: 2px 2px 6px rgba(0,0,0,.4);
  }
  
  @keyframes swing {
    0%, 70%, 100% { transform: rotate(-30deg); }
    75% { transform: rotate(120deg); }
  }
  
  .baseball {
    position: absolute;
    width: 16px;
    height: 16px;
    background: radial-gradient(circle at 35% 35%, #fff, #e8e8e8);
    border-radius: 50%;
    bottom: 22%;
    left: 48%;
    animation: pitch 2s ease-in-out infinite;
    box-shadow: 0 4px 8px rgba(0,0,0,.3);
    z-index: 5;
  }
  
  .baseball:before,
  .baseball:after {
    content: "";
    position: absolute;
    width: 12px;
    height: 2px;
    background: #ff0000;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-30deg);
  }
  
  .baseball:after {
    transform: translate(-50%, -50%) rotate(30deg);
  }
  
  @keyframes pitch {
    0% { bottom: 22%; left: 48%; opacity: 1; transform: scale(1); }
    30% { bottom: 19%; left: 49%; }
    70% { bottom: 19%; left: 50%; opacity: 1; }
    75% { bottom: 50%; left: 60%; transform: scale(1.5); }
    100% { bottom: 80%; left: 80%; opacity: 0; transform: scale(0.5); }
  }
  
  .stands {
    position: absolute;
    bottom: 55%;
    left: 8%;
    right: 8%;
    height: 90px;
    background: linear-gradient(180deg, #4a4a6a 0%, #2e2e48 100%);
    border-radius: 8px 8px 0 0;
    overflow: hidden;
    box-shadow: inset 0 -10px 20px rgba(0,0,0,.3);
  }
  
  .crowd {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-end;
    padding: 10px;
    gap: 4px;
  }
  
  .fan {
    width: 12px;
    height: 18px;
    border-radius: 4px 4px 0 0;
    animation: cheer 1.5s ease-in-out infinite;
  }
  
  .fan:nth-child(odd) { background: #ff6b6b; }
  .fan:nth-child(even) { background: #4ecdc4; }
  .fan:nth-child(3n) { background: #ffd93d; }
  .fan:nth-child(4n) { background: #95e1d3; }
  .fan:nth-child(5n) { background: #ff9a76; animation-delay: 0.2s; }
  .fan:nth-child(7n) { background: #a8e6cf; animation-delay: 0.4s; }
  .fan:nth-child(11n) { background: #dda0dd; animation-delay: 0.6s; }
  
  @keyframes cheer {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.15) translateY(-3px); }
  }

  .audio-lesson {
    font-family: Arial, sans-serif;
    background: #2874a6;
    color: #fff;
    margin: 0;
    padding: 40px 20px;
    line-height: 1.6;
    font-size: 16px;
  }

  .audio-container {
    max-width: 800px;
    margin: 0 auto;
  }

  .audio-lesson h1, 
  .audio-lesson h2, 
  .audio-lesson h3 {
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    margin: 20px 0 10px 0;
  }

  .audio-lesson p {
    color: #fff;
    font-size: 16px;
    margin: 10px 0;
  }

  .audio-lesson pre {
    background: #1a1a1a;
    padding: 15px;
    border-radius: 5px;
    overflow-x: auto;
    color: #fff;
    font-size: 14px;
  }

  .audio-lesson code {
    color: #fff;
    font-size: 14px;
  }

  .example-section {
    margin: 40px 0;
    padding: 30px;
    background: #1a1a1a;
    border-radius: 16px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }

  .example-section h2 {
    color: #ffd700;
    font-size: 20px;
    margin-bottom: 10px;
  }

  .example-section p {
    color: #e0e0e0;
    font-size: 16px;
    margin-bottom: 20px;
  }

  audio {
    width: 100%;
    margin: 20px 0;
    border-radius: 8px;
  }

  .source-text {
    font-size: 14px;
    color: #b0b0b0;
    margin-top: 15px;
  }
</style>
</head>
<body>
  <div class="animation-wrapper">
    <div class="container">
      <div class="petco-scene">
        <div class="sun"></div>
        <div class="cloud c1"></div>
        <div class="cloud c2"></div>
        
        <div class="scoreboard">
          <div class="team">
            <div class="team-name">PADRES</div>
            <div class="score">3</div>
          </div>
          <div class="team">
            <div class="team-name">AWAY</div>
            <div class="score">2</div>
          </div>
        </div>
        
        <div class="western-building">
          <div class="metal-panels"></div>
        </div>
        
        <div class="stands">
          <div class="crowd">
            <div class="fan"></div><div class="fan"></div><div class="fan"></div><div class="fan"></div>
            <div class="fan"></div><div class="fan"></div><div class="fan"></div><div class="fan"></div>
            <div class="fan"></div><div class="fan"></div><div class="fan"></div><div class="fan"></div>
            <div class="fan"></div><div class="fan"></div><div class="fan"></div><div class="fan"></div>
            <div class="fan"></div><div class="fan"></div><div class="fan"></div><div class="fan"></div>
            <div class="fan"></div><div class="fan"></div><div class="fan"></div><div class="fan"></div>
            <div class="fan"></div><div class="fan"></div><div class="fan"></div><div class="fan"></div>
            <div class="fan"></div><div class="fan"></div><div class="fan"></div><div class="fan"></div>
            <div class="fan"></div><div class="fan"></div><div class="fan"></div><div class="fan"></div>
            <div class="fan"></div><div class="fan"></div><div class="fan"></div><div class="fan"></div>
            <div class="fan"></div><div class="fan"></div><div class="fan"></div><div class="fan"></div>
            <div class="fan"></div><div class="fan"></div><div class="fan"></div><div class="fan"></div>
            <div class="fan"></div><div class="fan"></div><div class="fan"></div><div class="fan"></div>
            <div class="fan"></div><div class="fan"></div><div class="fan"></div><div class="fan"></div>
            <div class="fan"></div><div class="fan"></div><div class="fan"></div><div class="fan"></div>
            <div class="fan"></div><div class="fan"></div><div class="fan"></div><div class="fan"></div>
            <div class="fan"></div><div class="fan"></div><div class="fan"></div><div class="fan"></div>
            <div class="fan"></div><div class="fan"></div><div class="fan"></div><div class="fan"></div>
            <div class="fan"></div><div class="fan"></div><div class="fan"></div><div class="fan"></div>
            <div class="fan"></div><div class="fan"></div><div class="fan"></div><div class="fan"></div>
          </div>
        </div>
        
        <div class="field">
          <div class="wall"></div>
          
          <div class="infield">
            <div class="pitchers-mound"></div>
            <div class="base first"></div>
            <div class="base second"></div>
            <div class="base third"></div>
            <div class="base home"></div>
            <div class="foul-line left"></div>
            <div class="foul-line right"></div>
          </div>
          
          <div class="player">
            <div class="player-head">
              <div class="helmet"></div>
            </div>
            <div class="player-body">
              <div class="bat"></div>
            </div>
            <div class="player-legs">
              <div class="leg"></div>
              <div class="leg"></div>
            </div>
          </div>
          
          <div class="baseball"></div>
        </div>
      </div>
    </div>
  </div>

  <div class="audio-lesson">
    <div class="audio-container">
      <h1>Petco Park Audio Lesson</h1>
      <h2>Adding Audio to a Webpage</h2>
      <p>Learn how to add and control audio using HTML with sounds from San Diego's Petco Park</p>

      <h3>1. What It Does</h3>
      <p>Use the &lt;audio&gt; tag to play clips (music, nature, narration) directly in the browser.</p>

      <h3>2. Prepare Files</h3>
      <p>Save audio files like:</p>
      <pre><code>/audio/petco-park.mp3
/audio/san-diego-zoo.mp3
/audio/balboa-park.mp3
/audio/la-jolla.mp3</code></pre>

      <h3>3. Basic Structure</h3>
      <p>Each section should include a heading, a short description, and an audio player.</p>
      <pre><code>&lt;audio controls&gt;
  &lt;source src="path/to/audio.mp3" type="audio/mpeg"&gt;
  Your browser does not support the audio element.
&lt;/audio&gt;</code></pre>

      <div class="example-section">
        <h2>Audio you will be working with: Petco Park Atmosphere</h2>
        <p>
          Listen to authentic game-day sounds from the Padres' home stadium — cheers, announcers, and that unmistakable Petco Park energy.
        </p>
        <audio controls>
          <source src="https://www.fesliyanstudios.com/play-mp3/387" type="audio/mpeg">
          Your browser does not support the audio element.
        </audio>
        <p class="source-text">Source: Baseball crowd cheer sound effect</p>
      </div>
    </div>
  </div>
</body>
</html>