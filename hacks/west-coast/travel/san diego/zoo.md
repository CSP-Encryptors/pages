---
layout: post
title: "San Diego Zoo"
description: 
permalink: /west-coast/travel/sd/sdzoo/
date: 2025-10-21
---

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>San Diego Zoo</title>
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
  
  .zoo-scene {
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, #87CEEB 0%, #90EE90 60%, #8FBC8F 100%);
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
    width: 100px;
    height: 40px;
    top: 12%;
    left: -150px;
    animation: float 25s linear infinite;
  }
  
  .cloud:before {
    content: "";
    position: absolute;
    width: 50px;
    height: 50px;
    background: rgba(255,255,255,.85);
    border-radius: 50%;
    top: -20px;
    left: 20px;
  }
  
  @keyframes float {
    to { transform: translateX(calc(100vw + 200px)); }
  }
  
  .zoo-path {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 25%;
    background: linear-gradient(180deg, #d4a574 0%, #b8926a 100%);
    border-top: 4px solid #9b7b5a;
  }
  
  .zoo-trees {
    position: absolute;
    bottom: 25%;
    left: 0;
    right: 0;
    height: 35%;
    background: linear-gradient(180deg, #4a7c4e 0%, #3a6b3f 100%);
    clip-path: polygon(0 100%, 0 60%, 8% 45%, 15% 55%, 22% 40%, 30% 50%, 38% 35%, 46% 45%, 54% 30%, 62% 40%, 70% 35%, 78% 45%, 85% 38%, 92% 50%, 100% 40%, 100% 100%);
  }
  
  .zoo-sign {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translateX(-50%);
    background: linear-gradient(135deg, #8b4513, #654321);
    padding: 16px 32px;
    border-radius: 12px;
    border: 4px solid #5a3a1f;
    box-shadow: 0 10px 24px rgba(0,0,0,.3);
  }
  
  .zoo-sign-text {
    color: #ffd700;
    font-weight: 800;
    font-size: 24px;
    letter-spacing: 2px;
    text-shadow: 2px 2px 4px rgba(0,0,0,.5);
  }
  
  .animal {
    position: absolute;
    bottom: 25%;
  }
  
  /* Panda */
  .panda {
    left: 15%;
    width: 60px;
    height: 70px;
    animation: waddle 4s ease-in-out infinite;
  }
  
  .panda-body {
    width: 50px;
    height: 50px;
    background: radial-gradient(circle at 40% 30%, #fff, #f0f0f0);
    border-radius: 50%;
    position: relative;
    margin: 0 auto;
    border: 3px solid #000;
  }
  
  .panda-head {
    width: 40px;
    height: 40px;
    background: radial-gradient(circle at 40% 30%, #fff, #f0f0f0);
    border-radius: 50%;
    position: absolute;
    top: -25px;
    left: 50%;
    transform: translateX(-50%);
    border: 3px solid #000;
  }
  
  .panda-ear {
    width: 18px;
    height: 18px;
    background: #000;
    border-radius: 50%;
    position: absolute;
    top: 2px;
  }
  
  .panda-ear.left { left: -2px; }
  .panda-ear.right { right: -2px; }
  
  .panda-eye {
    width: 14px;
    height: 18px;
    background: #000;
    border-radius: 50%;
    position: absolute;
    top: 12px;
  }
  
  .panda-eye.left { left: 6px; }
  .panda-eye.right { right: 6px; }
  
  .panda-eye:before {
    content: "";
    width: 6px;
    height: 6px;
    background: #fff;
    border-radius: 50%;
    position: absolute;
    top: 4px;
    left: 4px;
  }
  
  @keyframes waddle {
    0%, 100% { transform: translateX(0) rotate(-3deg); }
    50% { transform: translateX(20px) rotate(3deg); }
  }
  
  /* Giraffe */
  .giraffe {
    right: 20%;
    width: 70px;
    height: 150px;
    animation: nibble 3s ease-in-out infinite;
  }
  
  .giraffe-body {
    width: 50px;
    height: 60px;
    background: linear-gradient(135deg, #f4a460, #d2691e);
    border-radius: 40% 40% 50% 50%;
    position: absolute;
    bottom: 30px;
    left: 10px;
    border: 2px solid #8b4513;
  }
  
  .giraffe-spot {
    width: 12px;
    height: 12px;
    background: #8b4513;
    border-radius: 50%;
    position: absolute;
  }
  
  .spot1 { top: 10px; left: 8px; }
  .spot2 { top: 20px; right: 12px; }
  .spot3 { bottom: 15px; left: 15px; }
  
  .giraffe-neck {
    width: 24px;
    height: 80px;
    background: linear-gradient(90deg, #f4a460, #d2691e);
    position: absolute;
    bottom: 75px;
    left: 32px;
    border-radius: 20px 20px 0 0;
    border: 2px solid #8b4513;
    transform-origin: bottom;
  }
  
  .giraffe-head {
    width: 32px;
    height: 36px;
    background: #f4a460;
    border-radius: 50% 50% 40% 40%;
    position: absolute;
    top: -30px;
    left: -4px;
    border: 2px solid #8b4513;
  }
  
  .giraffe-horn {
    width: 6px;
    height: 12px;
    background: #8b4513;
    border-radius: 50% 50% 0 0;
    position: absolute;
    top: -8px;
  }
  
  .giraffe-horn.left { left: 6px; }
  .giraffe-horn.right { right: 6px; }
  
  .giraffe-leg {
    width: 12px;
    height: 30px;
    background: #d2691e;
    position: absolute;
    bottom: 0;
    border-radius: 0 0 4px 4px;
    border: 2px solid #8b4513;
  }
  
  .giraffe-leg.fl { left: 12px; }
  .giraffe-leg.fr { right: 18px; }
  
  @keyframes nibble {
    0%, 100% { transform: none; }
    50% { transform: translateY(-8px); }
  }
  
  /* Lion */
  .lion {
    left: 45%;
    width: 80px;
    height: 70px;
    animation: roar 5s ease-in-out infinite;
  }
  
  .lion-body {
    width: 60px;
    height: 50px;
    background: linear-gradient(135deg, #daa520, #b8860b);
    border-radius: 40%;
    position: absolute;
    bottom: 0;
    left: 10px;
    border: 2px solid #8b6914;
  }
  
  .lion-head {
    width: 45px;
    height: 45px;
    background: radial-gradient(circle at 40% 40%, #daa520, #b8860b);
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 0;
    border: 2px solid #8b6914;
  }
  
  .lion-mane {
    position: absolute;
    width: 70px;
    height: 70px;
    top: -12px;
    left: -13px;
  }
  
  .mane-piece {
    width: 18px;
    height: 18px;
    background: #cd853f;
    border-radius: 50%;
    position: absolute;
  }
  
  .m1 { top: 0; left: 50%; transform: translateX(-50%); }
  .m2 { top: 8px; left: 8px; }
  .m3 { top: 8px; right: 8px; }
  .m4 { bottom: 8px; left: 0; }
  .m5 { bottom: 8px; right: 0; }
  .m6 { bottom: 0; left: 50%; transform: translateX(-50%); }
  
  .lion-eye {
    width: 8px;
    height: 8px;
    background: #000;
    border-radius: 50%;
    position: absolute;
    top: 18px;
  }
  
  .lion-eye.left { left: 12px; }
  .lion-eye.right { right: 12px; }
  
  .lion-nose {
    width: 12px;
    height: 8px;
    background: #8b6914;
    border-radius: 50%;
    position: absolute;
    bottom: 12px;
    left: 50%;
    transform: translateX(-50%);
  }
  
  @keyframes roar {
    0%, 90%, 100% { transform: scale(1); }
    95% { transform: scale(1.1); }
  }
  
  .zoo-bird {
    position: absolute;
    width: 30px;
    height: 12px;
    top: 15%;
    left: -50px;
    animation: flyBird 12s linear infinite;
  }
  
  .zoo-bird:before,
  .zoo-bird:after {
    content: "";
    position: absolute;
    width: 15px;
    height: 8px;
    background: transparent;
    border-top: 3px solid #333;
    border-radius: 50%;
  }
  
  .zoo-bird:before {
    left: 0;
    animation: flapLeft 0.5s ease-in-out infinite;
  }
  
  .zoo-bird:after {
    right: 0;
    animation: flapRight 0.5s ease-in-out infinite;
  }
  
  @keyframes flyBird {
    to { left: 110%; }
  }
  
  @keyframes flapLeft {
    0%, 100% { transform: rotateX(0deg); }
    50% { transform: rotateX(30deg); }
  }
  
  @keyframes flapRight {
    0%, 100% { transform: rotateX(0deg); }
    50% { transform: rotateX(-30deg); }
  }

  /* Audio Lesson Styles */
  .audio-lesson {
    font-family: Arial, sans-serif;
    background: #2d5016;
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
      <div class="zoo-scene">
        <div class="sun"></div>
        <div class="cloud"></div>
        
        <div class="zoo-sign">
          <div class="zoo-sign-text">SAN DIEGO ZOO</div>
        </div>
        
        <div class="zoo-trees"></div>
        
        <div class="animal panda">
          <div class="panda-body">
            <div class="panda-head">
              <div class="panda-ear left"></div>
              <div class="panda-ear right"></div>
              <div class="panda-eye left"></div>
              <div class="panda-eye right"></div>
            </div>
          </div>
        </div>
        
        <div class="animal giraffe">
          <div class="giraffe-body">
            <div class="giraffe-spot spot1"></div>
            <div class="giraffe-spot spot2"></div>
            <div class="giraffe-spot spot3"></div>
          </div>
          <div class="giraffe-neck">
            <div class="giraffe-head">
              <div class="giraffe-horn left"></div>
              <div class="giraffe-horn right"></div>
            </div>
          </div>
          <div class="giraffe-leg fl"></div>
          <div class="giraffe-leg fr"></div>
        </div>
        
        <div class="animal lion">
          <div class="lion-mane">
            <div class="mane-piece m1"></div>
            <div class="mane-piece m2"></div>
            <div class="mane-piece m3"></div>
            <div class="mane-piece m4"></div>
            <div class="mane-piece m5"></div>
            <div class="mane-piece m6"></div>
          </div>
          <div class="lion-head">
            <div class="lion-eye left"></div>
            <div class="lion-eye right"></div>
            <div class="lion-nose"></div>
          </div>
          <div class="lion-body"></div>
        </div>
        
        <div class="zoo-bird"></div>
        <div class="zoo-path"></div>
      </div>
    </div>
  </div>

  <div class="audio-lesson">
    <div class="audio-container">
      <h1>San Diego Zoo Audio Lesson</h1>
      <h2>Adding Audio to a Webpage</h2>
      <p>Learn how to add and control audio using HTML with sounds from the world-famous San Diego Zoo</p>
      
      <h3>1. What It Does</h3>
      <p>Use the &lt;audio&gt; tag to play clips (music, nature, narration) directly in the browser.</p>
      
      <h3>2. Prepare Files</h3>
      <p>Save audio files like:</p>
      <pre><code>/audio/lion-roar.mp3
/audio/zoo-ambience.mp3
/audio/wildlife-sounds.mp3
/audio/safari-park.mp3</code></pre>
      
      <h3>3. Basic Structure</h3>
      <p>Each section should include a heading, a short description, and an audio player.</p>
      <pre><code>&lt;audio controls&gt;
  &lt;source src="path/to/audio.mp3" type="audio/mpeg"&gt;
  Your browser does not support the audio element.
&lt;/audio&gt;</code></pre>
      
      <div class="example-section">
        <h2>Audio you will be working with: San Diego Zoo Lion Roar</h2>
        <p>
          Listen to the powerful roar of the king of the jungle — one of the most iconic sounds from the San Diego Zoo's African savanna exhibit.
        </p>
        <audio controls>
          <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg">
          Your browser does not support the audio element.
        </audio>
        <p class="source-text">Source: Lion roar and wildlife sounds</p>
      </div>
    </div>
  </div>
</body>
</html>