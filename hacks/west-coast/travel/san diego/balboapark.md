---
layout: post
title: "Balboa Park"
description: 
permalink: /west-coast/travel/sd/balboapark/
date: 2025-10-21
---
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Balboa Park - San Diego</title>
<style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body {
    font-family: system-ui, -apple-system, sans-serif;
    background: linear-gradient(135deg, #00a8cc, #005f73);
    min-height: 100vh;
    padding: 40px 0;
  }
  
  .container {
    width: min(1200px, 95vw);
    height: min(700px, 90vh);
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 20px 60px rgba(0,0,0,.5);
    position: relative;
    margin: 0 auto 40px;
  }
  
  .balboa-scene {
    background: linear-gradient(180deg, #87CEEB 0%, #FFE4B5 70%, #DEB887 100%);
    width: 100%;
    height: 100%;
    position: relative;
  }
  
  .balboa-sky {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 60%;
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
  
  .botanical {
    position: absolute;
    bottom: 40%;
    left: 50%;
    transform: translateX(-50%);
    width: 400px;
    height: 220px;
  }
  
  .dome-building {
    width: 180px;
    height: 140px;
    background: linear-gradient(135deg, #f5deb3, #daa520);
    border: 4px solid #b8860b;
    border-radius: 12px;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    box-shadow: 0 10px 30px rgba(0,0,0,.25);
  }
  
  .dome {
    width: 120px;
    height: 90px;
    background: linear-gradient(135deg, #4682b4, #5f9ea0);
    border: 4px solid #36648b;
    border-radius: 50% 50% 0 0;
    position: absolute;
    top: -80px;
    left: 50%;
    transform: translateX(-50%);
    overflow: hidden;
  }
  
  .dome-panel {
    position: absolute;
    width: 8px;
    height: 100%;
    background: rgba(255,255,255,.2);
    left: var(--x);
  }
  
  .arch {
    width: 60px;
    height: 90px;
    border: 6px solid #b8860b;
    border-radius: 50% 50% 0 0;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(139,69,19,.2);
  }
  
  .tower {
    width: 50px;
    height: 180px;
    background: linear-gradient(135deg, #f5deb3, #daa520);
    border: 4px solid #b8860b;
    border-radius: 8px 8px 0 0;
    position: absolute;
    bottom: 0;
  }
  
  .tower.left { left: -120px; }
  .tower.right { right: -120px; }
  
  .tower-top {
    width: 70px;
    height: 40px;
    background: linear-gradient(135deg, #cd853f, #8b4513);
    border: 3px solid #654321;
    border-radius: 50% 50% 0 0;
    position: absolute;
    top: -35px;
    left: 50%;
    transform: translateX(-50%);
  }
  
  .balboa-garden {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 40%;
    background: linear-gradient(180deg, #90EE90 0%, #3cb371 100%);
  }
  
  .flower {
    position: absolute;
    bottom: 40%;
    width: 30px;
    height: 30px;
    animation: bloom 3s ease-in-out infinite;
  }
  
  .flower-center {
    width: 12px;
    height: 12px;
    background: #ffd700;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
  }
  
  .petal {
    width: 14px;
    height: 14px;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
  }
  
  .p1 { background: #ff69b4; transform: translate(-50%, -100%); }
  .p2 { background: #ff1493; transform: translate(0%, -50%); }
  .p3 { background: #ff69b4; transform: translate(-50%, 0%); }
  .p4 { background: #ff1493; transform: translate(-100%, -50%); }
  
  .flower.f1 { left: 15%; animation-delay: 0s; }
  .flower.f2 { left: 35%; animation-delay: 0.5s; }
  .flower.f3 { left: 55%; animation-delay: 1s; }
  .flower.f4 { left: 75%; animation-delay: 1.5s; }
  
  .flower.f2 .petal { background: #9370db; }
  .flower.f2 .p2, .flower.f2 .p4 { background: #8a2be2; }
  
  .flower.f3 .petal { background: #ffa500; }
  .flower.f3 .p2, .flower.f3 .p4 { background: #ff8c00; }
  
  .flower.f4 .petal { background: #ff4500; }
  .flower.f4 .p2, .flower.f4 .p4 { background: #ff6347; }
  
  @keyframes bloom {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.2); }
  }
  
  .butterfly {
    position: absolute;
    width: 24px;
    height: 20px;
    top: 35%;
    left: -40px;
    animation: flyButterfly 15s linear infinite;
  }
  
  .butterfly-wing {
    width: 12px;
    height: 16px;
    background: radial-gradient(circle at 30% 30%, #ff69b4, #ff1493);
    border-radius: 50% 50% 50% 0;
    position: absolute;
    top: 0;
  }
  
  .butterfly-wing.left {
    left: 0;
    animation: wingLeft 0.3s ease-in-out infinite;
  }
  
  .butterfly-wing.right {
    right: 0;
    transform: scaleX(-1);
    animation: wingRight 0.3s ease-in-out infinite;
  }
  
  .butterfly-body {
    width: 3px;
    height: 18px;
    background: #333;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 3px;
  }
  
  @keyframes flyButterfly {
    to { left: 110%; top: 30%; }
  }
  
  @keyframes wingLeft {
    0%, 100% { transform: rotateY(0deg); }
    50% { transform: rotateY(-25deg); }
  }
  
  @keyframes wingRight {
    0%, 100% { transform: scaleX(-1) rotateY(0deg); }
    50% { transform: scaleX(-1) rotateY(-25deg); }
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
    color: #005f73;
    box-shadow: 0 8px 20px rgba(0,0,0,.3);
  }
  
  .audio-lesson {
    max-width: 1200px;
    margin: 0 auto;
    padding: 40px 20px;
    background: white;
    border-radius: 20px;
    box-shadow: 0 20px 60px rgba(0,0,0,.5);
    margin-bottom: 40px;
  }
  
  .audio-container {
    padding: 20px;
  }
  
  .audio-container h1 {
    color: #005f73;
    margin-bottom: 10px;
    font-size: 32px;
  }
  
  .audio-container h2 {
    color: #00a8cc;
    margin-top: 30px;
    margin-bottom: 15px;
    font-size: 24px;
  }
  
  .audio-container h3 {
    color: #005f73;
    margin-top: 25px;
    margin-bottom: 10px;
    font-size: 20px;
  }
  
  .audio-container p {
    color: #333;
    line-height: 1.6;
    margin-bottom: 15px;
  }
  
  .audio-container pre {
    background: #f5f5f5;
    padding: 15px;
    border-radius: 8px;
    overflow-x: auto;
    margin: 15px 0;
  }
  
  .audio-container code {
    font-family: 'Courier New', monospace;
    color: #005f73;
  }
  
  .example-section {
    background: #f0f8ff;
    padding: 25px;
    border-radius: 12px;
    margin-top: 30px;
    border-left: 4px solid #00a8cc;
  }
  
  .example-section audio {
    width: 100%;
    margin: 20px 0;
  }
  
  .source-text {
    font-style: italic;
    color: #666;
    font-size: 14px;
  }
</style>
</head>
<body>
  <div class="container">
    <div class="balboa-scene">
      <div class="label">🏛️ Balboa Park</div>
      
      <div class="sun"></div>
      
      <div class="botanical">
        <div class="tower left">
          <div class="tower-top"></div>
        </div>
        <div class="dome-building">
          <div class="dome">
            <div class="dome-panel" style="--x: 20px"></div>
            <div class="dome-panel" style="--x: 40px"></div>
            <div class="dome-panel" style="--x: 60px"></div>
            <div class="dome-panel" style="--x: 80px"></div>
            <div class="dome-panel" style="--x: 100px"></div>
          </div>
          <div class="arch"></div>
        </div>
        <div class="tower right">
          <div class="tower-top"></div>
        </div>
      </div>
      
      <div class="flower f1">
        <div class="petal p1"></div>
        <div class="petal p2"></div>
        <div class="petal p3"></div>
        <div class="petal p4"></div>
        <div class="flower-center"></div>
      </div>
      <div class="flower f2">
        <div class="petal p1"></div>
        <div class="petal p2"></div>
        <div class="petal p3"></div>
        <div class="petal p4"></div>
        <div class="flower-center"></div>
      </div>
      <div class="flower f3">
        <div class="petal p1"></div>
        <div class="petal p2"></div>
        <div class="petal p3"></div>
        <div class="petal p4"></div>
        <div class="flower-center"></div>
      </div>
      <div class="flower f4">
        <div class="petal p1"></div>
        <div class="petal p2"></div>
        <div class="petal p3"></div>
        <div class="petal p4"></div>
        <div class="flower-center"></div>
      </div>
      
      <div class="butterfly">
        <div class="butterfly-wing left"></div>
        <div class="butterfly-body"></div>
        <div class="butterfly-wing right"></div>
      </div>
      
      <div class="balboa-garden"></div>
    </div>
  </div>

  <!-- Audio Lesson Section -->
  <div class="audio-lesson">
    <div class="audio-container">
      <h1>Balboa Park Organ Audio Lesson</h1>
      <h2>Adding Audio to a Webpage</h2>
      <p>Learn how to add and control audio using HTML with sounds from Balboa Park's historic Spreckels Organ Pavilion</p>
      
      <h3>1. What It Does</h3>
      <p>Use the &lt;audio&gt; tag to play clips (music, nature, narration) directly in the browser.</p>
      
      <h3>2. Prepare Files</h3>
      <p>Save audio files like:</p>
      <pre><code>/audio/balboa-organ.mp3
/audio/organ-performance.mp3
/audio/spreckels-pavilion.mp3
/audio/organ-concert.mp3</code></pre>
      
      <h3>3. Basic Structure</h3>
      <p>Each section should include a heading, a short description, and an audio player.</p>
      <pre><code>&lt;audio controls&gt;
  &lt;source src="path/to/audio.mp3" type="audio/mpeg"&gt;
  Your browser does not support the audio element.
&lt;/audio&gt;</code></pre>
      
      <div class="example-section">
        <h2>Audio you will be working with: Balboa Park Organ Pavilion</h2>
        <p>
          Listen to the majestic sounds of the Spreckels Organ — one of the world's largest outdoor pipe organs, filling Balboa Park with rich, powerful tones.
        </p>
        <audio controls>
          <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg">
          Your browser does not support the audio element.
        </audio>
        <p class="source-text">Source: Organ performance and classical music</p>
      </div>
    </div>
  </div>
</body>
</html>