---
layout: post
title: "Los Angeles"
description: "Roadtrip through LA and learn UI while you're there!"
permalink: /west-coast/analytics/losangeles/US
parent: "Analytics/Admin"
team: "Cool Collaborators"
submodule: 1
author: "Cool Collaborators"
date: 2025-10-21
---

# Los Angeles 


<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"/>
<title>Universal Studios — Roadtrip</title>
<style>
/* ===== Truck intro (8s) ===== */
body{background:#009688;overflow:hidden;font-family:'Open Sans',sans-serif}
.loop-wrapper{margin:0 auto;position:relative;display:block;width:600px;height:250px;overflow:hidden;border-bottom:3px solid #fff;color:#fff}
.mountain{position:absolute;right:-900px;bottom:-20px;width:2px;height:2px;box-shadow:0 0 0 50px #4DB6AC,60px 50px 0 70px #4DB6AC,90px 90px 0 50px #4DB6AC,250px 250px 0 50px #4DB6AC,290px 320px 0 50px #4DB6AC,320px 400px 0 50px #4DB6AC;transform:rotate(130deg);animation:mtn 20s linear infinite}
.hill{position:absolute;right:-900px;bottom:-50px;width:400px;border-radius:50%;height:20px;box-shadow:0 0 0 50px #4DB6AC,-20px 0 0 20px #4DB6AC,-90px 0 0 50px #4DB6AC,250px 0 0 50px #4DB6AC,290px 0 0 50px #4DB6AC,620px 0 0 50px #4DB6AC;animation:hill 4s 2s linear infinite}
.tree,.tree:nth-child(2),.tree:nth-child(3){position:absolute;height:100px;width:35px;bottom:0;background:url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/130015/tree.svg) no-repeat}
.rock{margin-top:-17%;height:2%;width:2%;bottom:-2px;border-radius:20px;position:absolute;background:#ddd}
.truck,.wheels{transition:all ease;width:85px;margin-right:-60px;bottom:0px;right:50%;position:absolute;background:#eee}
.truck{background:url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/130015/truck.svg) no-repeat;background-size:contain;height:60px}
.truck:before{content:" ";position:absolute;width:25px;box-shadow:-30px 28px 0 1.5px #fff,-35px 18px 0 1.5px #fff}
.wheels{background:url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/130015/wheels.svg) no-repeat;height:15px;margin-bottom:0}
.tree{animation:tree 3s 0s linear infinite}
.tree:nth-child(2){animation:tree2 2s .15s linear infinite}
.tree:nth-child(3){animation:tree3 8s .05s linear infinite}
.rock{animation:rock 4s -.53s linear infinite}
.truck{animation:truck 4s .08s ease infinite}
.wheels{animation:truck 4s .001s ease infinite}
.truck:before{animation:wind 1.5s 0s ease infinite}
@keyframes tree{0%{transform:translate(1350px)}100%{transform:translate(-50px)}}
@keyframes tree2{0%{transform:translate(650px)}100%{transform:translate(-50px)}}
@keyframes tree3{0%{transform:translate(2750px)}100%{transform:translate(-50px)}}
@keyframes rock{0%{right:-200px}100%{right:2000px}}
@keyframes truck{0%{}6%{transform:translateY(0)}7%{transform:translateY(-6px)}9%{transform:translateY(0)}10%{transform:translateY(-1px)}11%{transform:translateY(0)}100%{}}
@keyframes wind{0%{}50%{transform:translateY(3px)}100%{}}
@keyframes mtn{100%{transform:translateX(-2000px) rotate(130deg)}}
@keyframes hill{100%{transform:translateX(-2000px)}}
.intro{position:fixed;inset:0;display:grid;place-items:center;background:#009688;z-index:10}
.intro p{color:#fff;font-weight:800;margin-top:18px;text-shadow:0 2px 12px rgba(0,0,0,.35)}
/* ===== Scene: Universal Studios ===== */
.hidden{display:none}
.scene{position:relative;min-height:100vh;background:linear-gradient(#87CEEB 0%,#98D8C8 60%,#bfe6ff 100%)}
.ground{position:absolute;inset:auto 0 0 0;height:34%;background:linear-gradient(#a2bf91,#7aa36c);box-shadow:inset 0 10px 20px rgba(0,0,0,.15)}
.studios{position:absolute;bottom:34%;left:0;right:0;height:26%;background:linear-gradient(#dcd8cf,#c8c3ba);clip-path:polygon(0 100%,0 35%,8% 30%,15% 45%,23% 34%,35% 46%,48% 28%,58% 40%,70% 30%,82% 48%,100% 32%,100% 100%)}
.plaza{position:absolute;bottom:34%;left:0;right:0;height:30px;background:repeating-linear-gradient(90deg,#e9e1d1 0 40px,#d4c7af 40px 80px)}
.track-svg{position:absolute;inset:0;pointer-events:none}
.track-svg path{stroke:#4b4b4b;stroke-width:12;fill:none;filter:drop-shadow(0 6px 8px rgba(0,0,0,.2))}
.ties path{stroke:#6b5b4b;stroke-width:6;stroke-linecap:round}
.supports line{stroke:#3e3e3e;stroke-width:6;opacity:.7}
.coaster-cart{width:60px;height:36px;background:linear-gradient(135deg,#e74c3c,#c0392b);border:3px solid #922b21;border-radius:10px;position:absolute;top:0;left:0;box-shadow:0 8px 16px rgba(0,0,0,.35);offset-path:path("M 80 520 C 200 420, 260 260, 380 220 S 620 210, 700 300 S 820 520, 1020 540");offset-rotate:auto;animation:ride 7.5s cubic-bezier(.37,.01,.27,1) infinite}
.coaster-cart .rider{position:absolute;width:22px;height:26px;background:#4a90e2;border:2px solid #2e5f8a;border-radius:50% 50% 0 0;top:-22px;left:19px}
.coaster-cart .rider:before{content:"";position:absolute;width:16px;height:16px;background:#ffe0bd;border:2px solid #cc9966;border-radius:50%;top:-14px;left:50%;transform:translateX(-50%)}
@keyframes ride{0%{offset-distance:0%}50%{offset-distance:50%}100%{offset-distance:100%}}
.gate{position:absolute;bottom:34%;left:50%;transform:translateX(-50%);width:260px;height:190px;border:6px solid #ffd700;border-radius:22px;background:linear-gradient(135deg,rgba(255,215,0,.18),rgba(255,165,0,.18))}
.gate:before{content:"UNIVERSAL";position:absolute;top:22px;left:50%;transform:translateX(-50%);color:#ffd700;font-weight:800;letter-spacing:3px;text-shadow:0 4px 14px rgba(0,0,0,.5)}
.fw{position:absolute;width:8px;height:8px;background:#ffd700;border-radius:50%;animation:boom 2.2s ease-out infinite}
.fw.f2{left:64%;top:18%;animation-delay:.5s}.fw.f3{left:42%;top:26%;animation-delay:1.1s}
@keyframes boom{0%{transform:scale(1);opacity:1;box-shadow:0 0 0 0 #ffd700}45%{transform:scale(4);box-shadow:0 0 34px 16px #ffd700,20px 20px 30px 10px #ff6b6b}100%{transform:scale(1);opacity:0}}
.caption{position:absolute;left:50%;transform:translateX(-50%);bottom:22px;color:#1a2a2a;font-weight:700;background:rgba(255,255,255,.8);padding:8px 14px;border-radius:10px}
</style>
</head>
<body>
<!-- Truck intro -->
<div class="intro" id="intro">
  <div class="loop-wrapper" role="img" aria-label="Driving up to Universal Studios">
    <div class="mountain"></div>
    <div class="hill"></div>
    <div class="tree"></div><div class="tree"></div><div class="tree"></div>
    <div class="rock"></div>
    <div class="truck"></div>
    <div class="wheels"></div>
  </div>
  <p>Heading to Universal Studios Hollywood…</p>
</div>

<!-- Scene -->
<main class="scene hidden" id="scene">
  <div class="studios"></div><div class="ground"></div><div class="plaza"></div>
  <svg class="track-svg" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    <g class="supports"><line x1="380" y1="235" x2="380" y2="520"/><line x1="700" y1="315" x2="700" y2="555"/><line x1="900" y1="500" x2="900" y2="560"/></g>
    <path d="M80 520 C 200 420, 260 260, 380 220 S 620 210, 700 300 S 820 520, 1020 540"/>
    <path d="M80 535 C 200 435, 260 275, 380 235 S 620 225, 700 315 S 820 535, 1020 555"/>
    <g class="ties">
      <path d="M110 530 L110 545 M170 498 L170 514 M230 458 L230 476 M290 408 L290 428
               M350 358 L350 378 M410 332 L410 352 M470 318 L470 338 M530 310 L530 330
               M590 308 L590 328 M650 314 L650 334 M710 332 L710 352 M770 372 L770 392
               M830 422 L830 442 M890 472 L890 492 M950 512 L950 532 M1010 544 L1010 564"/>
    </g>
  </svg>
  <div class="coaster-cart"><div class="rider"></div></div>
  <div class="gate"></div>
  <div class="fw" style="left:16%;top:12%"></div><div class="fw f2"></div><div class="fw f3"></div>
  <div class="caption">🎬 Universal Studios — coaster & fireworks</div>
</main>

<script>
setTimeout(()=>{
  document.getElementById('intro').classList.add('hidden');
  document.getElementById('scene').classList.remove('hidden');
  document.body.style.background='linear-gradient(#87CEEB,#bfe6ff)';
},8000);
</script>
</body>
</html>

<html>
<head>
<title>Universal Studios Button Lesson</title>
<style>
body {
font-family: Arial, sans-serif;
background: #2874a6;
color: #fff;
margin: 0;
padding: 40px 20px;
line-height: 1.6;
font-size: 16px;
        }
        .container {
            max-width: 800px;
            margin: 0 auto;
        }
        h1, h2, h3 {
            color: #fff;
            font-size: 16px;
            font-weight: bold;
            margin: 20px 0 10px 0;
        }
        p {
            color: #fff;
            font-size: 16px;
            margin: 10px 0;
        }
        pre {
            background: #1a1a1a;
            padding: 15px;
            border-radius: 5px;
            overflow-x: auto;
            color: #fff;
            font-size: 14px;
        }
        code {
            color: #fff;
            font-size: 14px;
        }
        .example-section {
            margin: 40px 0;
            padding: 30px;
            background: #1a1a1a;
            border-radius: 10px;
        }
        .demo-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-height: 400px;
            background: linear-gradient(to bottom, #2874a6 0%, #5499c7 100%);
            border-radius: 10px;
            position: relative;
            margin-top: 20px;
            overflow: hidden;
        }
        .button-container {
            margin-bottom: 50px;
            z-index: 10;
        }
        button {
            background-color: #e74c3c;
            color: white;
            padding: 25px 50px;
            font-size: 24px;
            font-weight: bold;
            border: none;
            border-radius: 10px;
            cursor: pointer;
            box-shadow: 0 6px 12px rgba(0,0,0,0.3);
            transition: all 0.3s ease;
            text-transform: uppercase;
        }
        button:hover {
            background-color: #c0392b;
            transform: translateY(-3px);
            box-shadow: 0 8px 16px rgba(0,0,0,0.4);
        }
        button:active {
            transform: translateY(0);
            box-shadow: 0 4px 8px rgba(0,0,0,0.3);
        }
        #universalContainer {
            opacity: 0;
            transform: scale(0.5) translateY(50px);
            transition: all 1s ease;
            z-index: 10;
        }
        #universalContainer.show {
            opacity: 1;
            transform: scale(1) translateY(0);
        }
        .globe-container {
            position: relative;
            width: 250px;
            height: 250px;
            animation: float 3s ease-in-out infinite;
        }
        .globe {
            position: relative;
            width: 200px;
            height: 200px;
            margin: 0 auto;
            background: linear-gradient(135deg, #4a90e2 0%, #2563a8 50%, #1a4d8a 100%);
            border-radius: 50%;
            box-shadow: 
                inset -20px -20px 40px rgba(0,0,0,0.3),
                inset 20px 20px 40px rgba(255,255,255,0.1),
                0 10px 30px rgba(0,0,0,0.4);
            animation: globeAppear 0.8s ease backwards;
        }
        .globe::before {
            content: '';
            position: absolute;
            top: 20px;
            left: 30px;
            width: 60px;
            height: 60px;
            background: rgba(255,255,255,0.15);
            border-radius: 50%;
            filter: blur(10px);
        }
        .latitude-line {
            position: absolute;
            left: 0;
            right: 0;
            height: 2px;
            background: rgba(255,255,255,0.2);
        }
        .lat1 { top: 30%; }
        .lat2 { top: 50%; }
        .lat3 { top: 70%; }
        .longitude-line {
            position: absolute;
            top: 0;
            bottom: 0;
            width: 2px;
            background: rgba(255,255,255,0.2);
            left: 50%;
            transform: translateX(-50%);
        }
        .universal-text {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 32px;
            font-weight: 900;
            color: white;
            text-shadow: 
                2px 2px 4px rgba(0,0,0,0.5),
                0 0 10px rgba(255,255,255,0.3);
            font-family: Arial Black, sans-serif;
            letter-spacing: 2px;
            animation: textAppear 0.8s ease backwards;
            animation-delay: 0.4s;
        }
        .ring {
            position: absolute;
            border: 3px solid rgba(255,255,255,0.4);
            border-radius: 50%;
            animation: ringAppear 0.8s ease backwards;
        }
        .ring1 {
            top: -15px;
            left: -15px;
            right: -15px;
            bottom: -15px;
            animation-delay: 0.2s;
        }
        .ring2 {
            top: -30px;
            left: -30px;
            right: -30px;
            bottom: -30px;
            animation-delay: 0.3s;
        }
        @keyframes globeAppear {
            from {
                opacity: 0;
                transform: scale(0.3) rotateY(-90deg);
            }
            to {
                opacity: 1;
                transform: scale(1) rotateY(0deg);
            }
        }
        @keyframes textAppear {
            from {
                opacity: 0;
                transform: translate(-50%, -50%) scale(0.5);
            }
            to {
                opacity: 1;
                transform: translate(-50%, -50%) scale(1);
            }
        }
        @keyframes ringAppear {
            from {
                opacity: 0;
                transform: scale(0.8);
            }
            to {
                opacity: 1;
                transform: scale(1);
            }
        }
        @keyframes float {
            0%, 100% {
                transform: translateY(0px);
            }
            50% {
                transform: translateY(-15px);
            }
        }
    </style>
</head>
<body>
<div class="container">
<h1>Los Angeles</h1>
<h2>Universal Studios Button Lesson</h2>
        <h3>Step 1: Set Up Your HTML File</h3>
        <p>First, create a new file and save it as button.html. Every HTML file needs this basic structure:</p>
        <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;title&gt;My Button&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
        <p>What this means:</p>
        <p>&lt;!DOCTYPE html&gt; tells the browser this is an HTML file</p>
        <p>&lt;html&gt; wraps everything</p>
        <p>&lt;head&gt; contains information about the page</p>
        <p>&lt;body&gt; is where your visible content goes</p>
        <h3>Step 2: Create Your First Button</h3>
        <p>Inside the &lt;body&gt; tags, add a button:</p>
        <pre><code>&lt;body&gt;
    &lt;button&gt;Click Me!&lt;/button&gt;
&lt;/body&gt;</code></pre>
        <h3>Step 3: Make the Button Do Something</h3>
        <p>Add an onclick attribute to make something happen when clicked:</p>
        <pre><code>&lt;button onclick="alert('Hello!')"&gt;Click Me!&lt;/button&gt;</code></pre>
        <div class="example-section">
            <h3>Here's an example button!</h3>
            <div class="demo-container">
                <div class="button-container">
                    <button onclick="generateUniversal()">Click for Universal Studios</button>
                </div>
                <div id="universalContainer">
                    <div class="globe-container">
                        <div class="ring ring2"></div>
                        <div class="ring ring1"></div>
                        <div class="globe">
                            <div class="latitude-line lat1"></div>
                            <div class="latitude-line lat2"></div>
                            <div class="latitude-line lat3"></div>
                            <div class="longitude-line"></div>
                        </div>
                        <div class="universal-text">UNIVERSAL</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script>
        function generateUniversal() {
            var universalContainer = document.getElementById('universalContainer');
            // Reset animation by removing and re-adding the class
            universalContainer.classList.remove('show');
            // Small delay to allow reset
            setTimeout(function() {
                universalContainer.classList.add('show');
            }, 50);
        }
    </script>
</body>
</html>
