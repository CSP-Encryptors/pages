---
layout: post
title: "La Jolla Shores"
description: 
permalink: /west-coast/travel/sd/lajolla/
date: 2025-10-21
---
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>La Jolla Beach - San Diego</title>
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
  
  .lajolla-scene {
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, #87CEEB 0%, #5fa3d0 50%, #4a90c4 100%);
    position: relative;
  }
  .beach-sun {
    position: absolute;
    top: 10%;
    right: 15%;
    width: 90px;
    height: 90px;
    background: radial-gradient(circle at 35% 35%, #fff8dc, #ffdb58);
    border-radius: 50%;
    box-shadow: 0 0 80px rgba(255,219,88,.6);
    animation: sunGlow 4s ease-in-out infinite;
  }
  @keyframes sunGlow {
    0%, 100% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.05); opacity: 0.9; }
  }
  .ocean-water {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 55%;
    background: linear-gradient(180deg, #4682b4 0%, #1e90ff 50%, #0066cc 100%);
  }
  .wave-motion {
    position: absolute;
    width: 150%;
    height: 60px;
    background: transparent;
    top: -30px;
    left: -25%;
  }
  .wave-line {
    position: absolute;
    width: 100%;
    height: 30px;
    background: radial-gradient(ellipse at 50% 100%, rgba(255,255,255,.6), transparent 70%);
    animation: waveMove 8s ease-in-out infinite;
  }
  .wave-line.w2 {
    top: 20px;
    animation-delay: 1s;
    opacity: 0.5;
  }
  .wave-line.w3 {
    top: 40px;
    animation-delay: 2s;
    opacity: 0.3;
  }
  @keyframes waveMove {
    0%, 100% { transform: translateX(-5%); }
    50% { transform: translateX(5%); }
  }
  .sand {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 30%;
    background: linear-gradient(180deg, #f4a460 0%, #daa520 100%);
  }
  .seal {
    position: absolute;
    bottom: 30%;
    left: 20%;
    width: 70px;
    height: 50px;
    animation: sealBob 3s ease-in-out infinite;
  }
  .seal-body {
    width: 60px;
    height: 45px;
    background: linear-gradient(135deg, #696969, #505050);
    border-radius: 50% 50% 50% 40%;
    position: relative;
    border: 2px solid #404040;
  }
  .seal-head {
    width: 35px;
    height: 35px;
    background: radial-gradient(circle at 40% 40%, #696969, #505050);
    border-radius: 50%;
    position: absolute;
    top: -5px;
    left: -20px;
    border: 2px solid #404040;
  }
  .seal-nose {
    width: 8px;
    height: 6px;
    background: #333;
    border-radius: 50%;
    position: absolute;
    left: 2px;
    top: 18px;
  }
  .seal-whisker {
    width: 12px;
    height: 1px;
    background: #fff;
    position: absolute;
    left: 10px;
  }
  .w1 { top: 16px; }
  .w2 { top: 20px; }
  .seal-flipper {
    width: 20px;
    height: 12px;
    background: #505050;
    border-radius: 50%;
    position: absolute;
    bottom: 5px;
    right: -8px;
    border: 2px solid #404040;
    transform: rotate(-20deg);
  }
  @keyframes sealBob {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-10px) rotate(-5deg); }
  }
  .surfer {
    position: absolute;
    bottom: 40%;
    right: 25%;
    width: 50px;
    height: 70px;
    animation: surf 5s ease-in-out infinite;
  }
  .surfboard {
    width: 60px;
    height: 15px;
    background: linear-gradient(135deg, #ff6b6b, #ff4757);
    border-radius: 50%;
    position: absolute;
    bottom: 0;
    left: -5px;
    border: 2px solid #c23616;
    box-shadow: 0 4px 8px rgba(0,0,0,.3);
  }
  .surfer-body {
    width: 30px;
    height: 35px;
    background: linear-gradient(135deg, #4a90e2, #357abd);
    border-radius: 8px;
    position: absolute;
    bottom: 15px;
    left: 10px;
    border: 2px solid #2e5f8a;
  }
  .surfer-head {
    width: 24px;
    height: 24px;
    background: radial-gradient(circle at 40% 30%, #ffd4a3, #e6b88a);
    border-radius: 50%;
    position: absolute;
    top: -22px;
    left: 3px;
    border: 2px solid #cc9966;
  }
  .surfer-arm {
    width: 20px;
    height: 8px;
    background: #4a90e2;
    border-radius: 4px;
    position: absolute;
    top: 5px;
    border: 1px solid #2e5f8a;
  }
  .surfer-arm.left {
    left: -15px;
    transform: rotate(-45deg);
  }
  .surfer-arm.right {
    right: -15px;
    transform: rotate(45deg);
  }
  @keyframes surf {
    0%, 100% { transform: translateY(0) rotate(-5deg); }
    50% { transform: translateY(-15px) rotate(-8deg); }
  }
  .seagull {
    position: absolute;
    width: 35px;
    height: 15px;
    top: 20%;
    left: -60px;
    animation: seagullFly 18s linear infinite;
  }
  .seagull:before,
  .seagull:after {
    content: "";
    position: absolute;
    width: 18px;
    height: 10px;
    background: transparent;
    border-top: 3px solid rgba(255,255,255,.95);
    border-radius: 50%;
  }
  .seagull:before {
    left: 0;
    animation: gullFlapL 0.6s ease-in-out infinite;
  }
  .seagull:after {
    right: 0;
    animation: gullFlapR 0.6s ease-in-out infinite;
  }
  @keyframes seagullFly {
    to { left: 110%; top: 25%; }
  }
  @keyframes gullFlapL {
    0%, 100% { transform: rotateX(0deg); }
    50% { transform: rotateX(35deg); }
  }
  @keyframes gullFlapR {
    0%, 100% { transform: rotateX(0deg); }
    50% { transform: rotateX(-35deg); }
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
      <div class="lajolla-scene">
        <div class="beach-sun"></div>
        <div class="ocean-water">
          <div class="wave-motion">
            <div class="wave-line"></div>
            <div class="wave-line w2"></div>
            <div class="wave-line w3"></div>
          </div>
        </div>
        <div class="seal">
          <div class="seal-body">
            <div class="seal-head">
              <div class="seal-nose"></div>
              <div class="seal-whisker w1"></div>
              <div class="seal-whisker w2"></div>
            </div>
            <div class="seal-flipper"></div>
          </div>
        </div>
        <div class="surfer">
          <div class="surfboard"></div>
          <div class="surfer-body">
            <div class="surfer-head"></div>
            <div class="surfer-arm left"></div>
            <div class="surfer-arm right"></div>
          </div>
        </div>
        <div class="seagull"></div>
        <div class="sand"></div>
      </div>
    </div>
  </div>

  <div class="audio-lesson">
    <div class="audio-container">
      <h1>La Jolla Beach Audio Lesson</h1>
      <h2>Adding Audio to a Webpage</h2>
      <p>Learn how to add and control audio using HTML with sounds from San Diego's La Jolla Beach</p>
      
      <h3>1. What It Does</h3>
      <p>Use the &lt;audio&gt; tag to play clips (music, nature, narration) directly in the browser.</p>
      
      <h3>2. Prepare Files</h3>
      <p>Save audio files like:</p>
      <pre><code>/audio/la-jolla-beach.mp3
/audio/ocean-waves.mp3
/audio/seagulls.mp3
/audio/sea-lions.mp3</code></pre>
      
      <h3>3. Basic Structure</h3>
      <p>Each section should include a heading, a short description, and an audio player.</p>
      <pre><code>&lt;audio controls&gt;
  &lt;source src="path/to/audio.mp3" type="audio/mpeg"&gt;
  Your browser does not support the audio element.
&lt;/audio&gt;</code></pre>
      
      <div class="example-section">
        <h2>Audio you will be working with: La Jolla Beach Atmosphere</h2>
        <p>
          Listen to the peaceful sounds of La Jolla's coastline — ocean waves crashing, seagulls calling, and the gentle rhythm of the Pacific.
        </p>
        <audio controls>
          <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg">
          Your browser does not support the audio element.
        </audio>
        <p class="source-text">Source: Beach waves and ocean sounds</p>
      </div>
    </div>
  </div>
</body>
</html>