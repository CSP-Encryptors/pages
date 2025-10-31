---
layout: post
title: "Seattle"
description: "Roadtrip through Seattle and learn UI while you're there!"
permalink: /west-coast/analytics/submodule_4/
parent: "Analytics/Admin"
team: "Cool Collaborators"
submodule: 4
author: "Cool Collaborators"
date: 2025-10-21
footer: 
    previous: /west-coast/analytics/sanfrancisco/
    home: /west-coast/travel/
---

# Seattle

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Seattle Adventures</title>
<style>
  :root {
    --bg1: #2c5f7c;
    --bg2: #1a3f56;
    --accent: #ff6b35;
    --accent2: #f7931e;
  }
  
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  html, body {
    height: 100%;
  }
  
  body {
    font-family: system-ui, -apple-system, sans-serif;
    background: linear-gradient(135deg, var(--bg1), var(--bg2));
    color: #222;
    overflow: hidden;
  }
  
  .app {
    width: min(1400px, 96vw);
    height: min(900px, 94vh);
    background: #fff;
    border-radius: 24px;
    box-shadow: 0 30px 80px rgba(0,0,0,.4);
    display: grid;
    grid-template-rows: auto 1fr;
    overflow: hidden;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  
  header {
    padding: 20px 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: linear-gradient(90deg, #fff 0%, #e8f4f8 100%);
    border-bottom: 2px solid #c5dae0;
  }
  
  header h1 {
    font-size: clamp(24px, 3vw, 32px);
    color: #1a3f56;
  }
  
  .crumb {
    color: #2c5f7c;
    font-weight: 600;
  }
  
  .screens {
    position: relative;
    height: 100%;
  }
  
  .screen {
    position: absolute;
    inset: 0;
    padding: 40px;
    display: none;
  }
  
  .screen.active {
    display: block;
    animation: fadeIn 0.4s ease;
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: none;
    }
  }
  
  h2.title {
    font-size: clamp(28px, 3vw, 36px);
    text-align: center;
    margin-bottom: 12px;
    color: #1a3f56;
  }
  
  p.lead {
    color: #666;
    text-align: center;
    margin-bottom: 40px;
    font-size: 18px;
  }
  
  .options {
    display: grid;
    gap: 20px;
    width: min(800px, 90%);
    margin: 0 auto;
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 700px) {
    .options {
      grid-template-columns: 1fr;
    }
  }
  
  .btn {
    background: linear-gradient(135deg, var(--accent), var(--accent2));
    color: #fff;
    border: 0;
    border-radius: 16px;
    padding: 24px 28px;
    font-weight: 700;
    font-size: 18px;
    box-shadow: 0 12px 24px rgba(255,107,53,.3);
    cursor: pointer;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }
  
  .btn:hover {
    transform: translateY(-4px);
    box-shadow: 0 18px 32px rgba(255,107,53,.4);
  }
  
  .stage {
    width: 100%;
    height: calc(100% - 100px);
    display: grid;
    place-items: center;
  }
  
  .scene-wrap {
    width: min(1200px, 95%);
    height: min(700px, 80vh);
    border-radius: 20px;
    overflow: hidden;
    position: relative;
    box-shadow: 0 16px 50px rgba(0,0,0,.25);
  }
  
  .desc {
    text-align: center;
    color: #555;
    margin-top: 16px;
    font-size: 16px;
  }
  
  .back {
    position: absolute;
    left: 32px;
    bottom: 32px;
  }
  
  .back .btn {
    background: #2e2e3a;
    box-shadow: 0 10px 24px rgba(0,0,0,.3);
  }
  
  .back .btn:hover {
    background: #444456;
  }
  
  .travel {
    position: absolute;
    inset: 0;
    display: none;
    place-items: center;
    z-index: 100;
    background: rgba(0,0,0,.7);
  }
  
  .travel.active {
    display: grid;
  }
  
  .travel-content {
    text-align: center;
    color: #fff;
  }
  
  .travel-content h3 {
    font-size: 32px;
    margin-bottom: 20px;
  }
  
  .spinner {
    width: 60px;
    height: 60px;
    border: 6px solid rgba(255,255,255,.3);
    border-top-color: #ff6b35;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin: 0 auto;
  }
  
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
  
  /* ========== SPACE NEEDLE ========== */
  .needle-scene {
    background: linear-gradient(180deg, #87CEEB 0%, #B0D4E3 60%, #D3E4EC 100%);
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
    bottom: 30%;
    left: 50%;
    transform: translateX(-50%);
    width: 180px;
    height: 380px;
  }
  
  .needle-base {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 40px;
    background: linear-gradient(135deg, #8b8b8b, #666);
    border-radius: 8px;
    border: 3px solid #555;
  }
  
  .needle-legs {
    position: absolute;
    bottom: 40px;
    left: 50%;
    transform: translateX(-50%);
    width: 120px;
    height: 60px;
  }
  
  .leg {
    position: absolute;
    width: 6px;
    height: 60px;
    background: linear-gradient(135deg, #999, #666);
    border: 2px solid #555;
    bottom: 0;
  }
  
  .leg.l1 { left: 0; transform: rotate(-15deg); transform-origin: bottom; }
  .leg.l2 { left: 25%; transform: rotate(-8deg); transform-origin: bottom; }
  .leg.l3 { right: 25%; transform: rotate(8deg); transform-origin: bottom; }
  .leg.l4 { right: 0; transform: rotate(15deg); transform-origin: bottom; }
  
  .needle-shaft {
    position: absolute;
    bottom: 100px;
    left: 50%;
    transform: translateX(-50%);
    width: 16px;
    height: 180px;
    background: linear-gradient(90deg, #bbb, #888);
    border: 2px solid #666;
    border-radius: 8px;
  }
  
  .observation-deck {
    position: absolute;
    top: 80px;
    left: 50%;
    transform: translateX(-50%);
    width: 140px;
    height: 50px;
    background: linear-gradient(135deg, #f0f0f0, #d0d0d0);
    border-radius: 50%;
    border: 4px solid #999;
    box-shadow: 0 8px 20px rgba(0,0,0,.3);
  }
  
  .observation-deck:before {
    content: "";
    position: absolute;
    top: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 120px;
    height: 15px;
    background: #c0c0c0;
    border-radius: 50%;
    border: 3px solid #999;
  }
  
  .needle-top {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 20px;
    height: 90px;
    background: linear-gradient(90deg, #e0e0e0, #b0b0b0);
    border-radius: 10px;
    border: 2px solid #888;
  }
  
  .antenna {
    position: absolute;
    top: -30px;
    left: 50%;
    transform: translateX(-50%);
    width: 4px;
    height: 35px;
    background: #666;
    border-radius: 2px;
  }
  
  .antenna-light {
    position: absolute;
    top: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 8px;
    height: 8px;
    background: #ff0000;
    border-radius: 50%;
    box-shadow: 0 0 15px #ff0000;
    animation: blink 2s ease-in-out infinite;
  }
  
  @keyframes blink {
    0%, 45%, 55%, 100% { opacity: 1; }
    50% { opacity: 0.3; }
  }
  
  .city-building {
    position: absolute;
    bottom: 30%;
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
    height: 30%;
    background: linear-gradient(180deg, #4a5a6a 0%, #3a4a5a 100%);
  }
  
  /* ========== PIKE PLACE MARKET ========== */
  .pike-scene {
    background: linear-gradient(180deg, #87CEEB 0%, #a8c8d8 60%, #c8d8e8 100%);
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
  
  /* ========== LUMEN FIELD ========== */
  .lumen-scene {
    background: linear-gradient(180deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
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
  
  /* ========== MOUNT RAINIER ========== */
  .rainier-scene {
    background: linear-gradient(180deg, #87CEEB 0%, #a4c8e1 40%, #d5e5f0 100%);
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
</style>
</head>
<body>
  <div class="app">
    <header>
      <h1>🌲 Seattle Adventures</h1>
      <div class="crumb" id="crumb">Choose a destination</div>
    </header>
    
    <div class="screens">
      <!-- START SCREEN -->
      <section id="start" class="screen active">
        <h2 class="title">Pick Your Seattle Destination</h2>
        <p class="lead">Explore the Emerald City and Beyond!</p>
        <div class="options">
          <button class="btn" data-go="needle">🗼 Space Needle</button>
          <button class="btn" data-go="pike">🐟 Pike Place Market</button>
          <button class="btn" data-go="lumen">🏈 Lumen Field</button>
          <button class="btn" data-go="rainier">⛰️ Mount Rainier</button>
        </div>
      </section>
      
      <!-- SPACE NEEDLE -->
      <section id="needle" class="screen">
        <h2 class="title">🗼 Space Needle</h2>
        <div class="stage">
          <div class="scene-wrap needle-scene">
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
              </div>
              <div class="observation-deck"></div>
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
          <p class="desc">Seattle's iconic 605-foot tower with observation deck and city views! ☔</p>
          <div class="back"><button class="btn" data-back>Explore another location</button></div>
        </div>
      </section>
      
      <!-- PIKE PLACE MARKET -->
      <section id="pike" class="screen">
        <h2 class="title">🐟 Pike Place Market</h2>
        <div class="stage">
          <div class="scene-wrap pike-scene">
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
          <p class="desc">Famous market with flying fish, fresh produce, and local vendors! 🎣</p>
          <div class="back"><button class="btn" data-back>Explore another location</button></div>
        </div>
      </section>
      
      <!-- LUMEN FIELD -->
      <section id="lumen" class="screen">
        <h2 class="title">🏈 Lumen Field</h2>
        <div class="stage">
          <div class="scene-wrap lumen-scene">
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
          <p class="desc">Home of the Seattle Seahawks! Go Hawks! 🦅💚💙</p>
          <div class="back"><button class="btn" data-back>Explore another location</button></div>
        </div>
      </section>
      
      <!-- MOUNT RAINIER -->
      <section id="rainier" class="screen">
        <h2 class="title">⛰️ Mount Rainier National Park</h2>
        <div class="stage">
          <div class="scene-wrap rainier-scene">
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
          <p class="desc">Majestic 14,411-foot volcano with glaciers, forests, and wildlife! 🏔️</p>
          <div class="back"><button class="btn" data-back>Explore another location</button></div>
        </div>
      </section>
    </div>
    
    <!-- Travel overlay -->
    <div id="travel" class="travel">
      <div class="travel-content">
        <h3>🚗 Heading to your destination...</h3>
        <div class="spinner"></div>
      </div>
    </div>
  </div>
  
  <script>
    const screens = [...document.querySelectorAll('.screen')];
    const start = document.getElementById('start');
    const travel = document.getElementById('travel');
    const crumb = document.getElementById('crumb');
    
    document.querySelectorAll('[data-go]').forEach(btn => {
      btn.addEventListener('click', () => go(btn.dataset.go));
    });
    
    document.querySelectorAll('[data-back]').forEach(btn => {
      btn.addEventListener('click', back);
    });
    
    function go(id) {
      travel.classList.add('active');
      showOnly(start);
      
      setTimeout(() => {
        travel.classList.remove('active');
        const target = document.getElementById(id);
        showOnly(target);
        crumb.textContent = `Viewing: ${target.querySelector('.title').textContent}`;
      }, 1200);
    }
    
    function back() {
      showOnly(start);
      crumb.textContent = 'Choose a destination';
    }
    
    function showOnly(el) {
      screens.forEach(s => s.classList.remove('active'));
      el.classList.add('active');
    }
    
    window.addEventListener('keydown', e => {
      if (e.key === 'Escape' && !start.classList.contains('active')) {
        back();
      }
    });
  </script>
</body>
</html>

