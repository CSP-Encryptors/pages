---
layout: opencs
title: "San Diego"
description: "Stop 1: San Diego — “Connecting to the Data Field”"
permalink: /west-coast/backend/submodule_1/
parent: "Backend Development"
team: "Zombies"
submodule: 1
categories: [CSP, Submodule, Backend]
tags: [backend, submodule, zombies]
author: "Zombies Team"
date: 2025-10-21
microblog: True
footer:
  previous: /west-coast/sports/
  home: /west-coast/sports/
  next: /west-coast/backend/submodule_2/
---

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>San Diego - Understanding APIs</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: #f5f5f5;
            color: #333;
            padding: 20px;
            line-height: 1.6;
        }

        .container {
            max-width: 1000px;
            margin: 0 auto;
        }

        .header {
            background: linear-gradient(135deg, #1a237e 0%, #ffa000 100%);
            color: white;
            padding: 40px;
            border-radius: 15px;
            text-align: center;
            margin-bottom: 30px;
            box-shadow: 0 10px 40px rgba(255, 160, 0, 0.3);
        }

        .header h1 {
            font-size: 2.5em;
            margin-bottom: 10px;
        }

        .header p {
            font-size: 1.2em;
            opacity: 0.95;
        }

        .section {
            background: #1a1f3a;
            padding: 30px;
            border-radius: 15px;
            margin-bottom: 25px;
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
            border: 1px solid #2d3561;
        }

        .section h2 {
            color: #ffa000;
            margin-bottom: 20px;
            font-size: 1.8em;
            border-bottom: 3px solid #ffa000;
            padding-bottom: 10px;
        }

        .simple-explanation {
            background: #242b4d;
            padding: 20px;
            border-radius: 10px;
            border-left: 5px solid #ffa000;
            margin-bottom: 20px;
        }

        .simple-explanation h3 {
            color: #ffa000;
            margin-bottom: 10px;
            font-size: 1.2em;
        }

        .simple-explanation p {
            line-height: 1.8;
            color: #b0b0b0;
            font-size: 1.05em;
        }

        .analogy-box {
            background: linear-gradient(135deg, #1a237e 0%, #2d3561 100%);
            padding: 25px;
            border-radius: 12px;
            margin: 20px 0;
            border: 2px solid #ffa000;
        }

        .analogy-box h3 {
            color: #ffa000;
            margin-bottom: 15px;
            text-align: center;
            font-size: 1.4em;
        }

        .steps {
            display: grid;
            gap: 15px;
            margin-top: 20px;
        }

        .step {
            background: #242b4d;
            padding: 20px;
            border-radius: 10px;
            border-left: 5px solid #ffa000;
            transition: all 0.3s;
        }

        .step:hover {
            transform: translateX(10px);
            box-shadow: 0 5px 20px rgba(255, 160, 0, 0.3);
        }

        .step-number {
            display: inline-block;
            background: #ffa000;
            color: #0a0e27;
            width: 35px;
            height: 35px;
            border-radius: 50%;
            text-align: center;
            line-height: 35px;
            font-weight: bold;
            margin-right: 15px;
        }

        .step strong {
            color: #ffa000;
            font-size: 1.1em;
        }

        .venue-card {
            background: #242b4d;
            border: 2px solid #2d3561;
            border-radius: 12px;
            padding: 25px;
            margin-bottom: 20px;
            cursor: pointer;
            transition: all 0.3s;
        }

        .venue-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 30px rgba(255, 160, 0, 0.3);
            border-color: #ffa000;
        }

        .venue-card h3 {
            color: #ffa000;
            font-size: 1.5em;
            margin-bottom: 10px;
        }

        .venue-info {
            color: #b0b0b0;
            margin: 5px 0;
            font-size: 1.05em;
        }

        .api-endpoint {
            background: #1a1f3a;
            padding: 12px;
            border-radius: 6px;
            font-family: 'Courier New', monospace;
            margin: 15px 0;
            color: #4fc3f7;
            font-size: 0.95em;
            border: 1px solid #2d3561;
        }

        .fetch-btn {
            background: linear-gradient(135deg, #1a237e 0%, #ffa000 100%);
            color: white;
            border: none;
            padding: 12px 30px;
            border-radius: 8px;
            font-weight: bold;
            cursor: pointer;
            transition: all 0.3s;
            margin-top: 10px;
            font-size: 1em;
        }

        .fetch-btn:hover {
            transform: scale(1.05);
            box-shadow: 0 5px 20px rgba(255, 160, 0, 0.5);
        }

        .response-box {
            margin-top: 15px;
            display: none;
        }

        .response-box.active {
            display: block;
            animation: slideIn 0.3s ease-out;
        }

        .loading-animation {
            text-align: center;
            padding: 20px;
        }

        .loading-text {
            color: #ffa000;
            font-weight: bold;
            margin-bottom: 10px;
            font-size: 1.1em;
        }

        .progress-bar {
            width: 100%;
            height: 8px;
            background: #1a1f3a;
            border-radius: 10px;
            overflow: hidden;
            margin: 15px 0;
        }

        .progress-fill {
            height: 100%;
            background: linear-gradient(90deg, #1a237e 0%, #ffa000 100%);
            width: 0%;
            transition: width 0.5s ease;
        }

        .data-reveal {
            background: #242b4d;
            border: 2px solid #ffa000;
            border-radius: 10px;
            padding: 20px;
        }

        .data-item {
            display: flex;
            justify-content: space-between;
            padding: 12px;
            margin: 8px 0;
            background: #1a1f3a;
            border-radius: 6px;
            opacity: 0;
            transform: translateX(-20px);
            animation: slideInItem 0.5s forwards;
        }

        .data-item:nth-child(1) { animation-delay: 0.1s; }
        .data-item:nth-child(2) { animation-delay: 0.2s; }
        .data-item:nth-child(3) { animation-delay: 0.3s; }
        .data-item:nth-child(4) { animation-delay: 0.4s; }
        .data-item:nth-child(5) { animation-delay: 0.5s; }
        .data-item:nth-child(6) { animation-delay: 0.6s; }
        .data-item:nth-child(7) { animation-delay: 0.7s; }

        @keyframes slideInItem {
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }

        @keyframes slideIn {
            from {
                opacity: 0;
                transform: translateY(-10px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .data-label {
            font-weight: bold;
            color: #ffa000;
            font-size: 1.05em;
        }

        .data-value {
            color: #e0e0e0;
            font-family: 'Courier New', monospace;
            background: #0a0e27;
            padding: 4px 8px;
            border-radius: 4px;
        }

        .api-explanation {
            background: linear-gradient(135deg, #1a237e 0%, #2d3561 100%);
            border: 2px solid #ffa000;
            border-radius: 8px;
            padding: 15px;
            margin-top: 15px;
            font-size: 0.95em;
            color: #b0b0b0;
        }

        .api-explanation strong {
            color: #ffa000;
        }

        .request-preview {
            background: #0a0e27;
            color: #4fc3f7;
            padding: 12px;
            border-radius: 6px;
            font-family: 'Courier New', monospace;
            font-size: 0.85em;
            margin: 10px 0;
            border: 1px solid #2d3561;
        }

        .key-takeaway {
            background: linear-gradient(135deg, #1a237e 0%, #ffa000 100%);
            color: white;
            padding: 30px;
            border-radius: 12px;
            text-align: center;
            font-size: 1.2em;
            line-height: 1.8;
            box-shadow: 0 10px 40px rgba(255, 160, 0, 0.3);
        }

        .highlight {
            background: rgba(255, 255, 255, 0.2);
            padding: 3px 8px;
            border-radius: 4px;
            font-weight: bold;
        }

        /* Quiz Styles */
        .quiz-section {
            background: #1a1f3a;
            padding: 30px;
            border-radius: 15px;
            margin-top: 30px;
            border: 2px solid #ffa000;
            box-shadow: 0 5px 20px rgba(255, 160, 0, 0.3);
        }

        .quiz-section h2 {
            color: #ffa000;
            text-align: center;
            margin-bottom: 30px;
            font-size: 2em;
        }

        .quiz-question {
            background: #242b4d;
            padding: 25px;
            border-radius: 12px;
            margin-bottom: 25px;
            border: 2px solid #2d3561;
            display: none;
        }

        .quiz-question.active {
            display: block;
            animation: slideIn 0.3s ease-out;
        }

        .question-number {
            background: #ffa000;
            color: #0a0e27;
            padding: 5px 15px;
            border-radius: 20px;
            font-weight: bold;
            display: inline-block;
            margin-bottom: 15px;
        }

        .question-text {
            color: #e0e0e0;
            font-size: 1.3em;
            margin-bottom: 20px;
            line-height: 1.6;
        }

        .quiz-options {
            display: grid;
            gap: 12px;
            margin-top: 20px;
        }

        .quiz-option {
            background: #1a1f3a;
            padding: 15px 20px;
            border-radius: 8px;
            border: 2px solid #2d3561;
            cursor: pointer;
            transition: all 0.3s;
            color: #b0b0b0;
            font-size: 1.05em;
        }

        .quiz-option:hover {
            border-color: #ffa000;
            background: #242b4d;
            transform: translateX(5px);
        }

        .quiz-option.selected {
            border-color: #4fc3f7;
            background: #1a237e;
            color: #fff;
        }

        .quiz-option.correct {
            border-color: #4caf50;
            background: #1b5e20;
            color: #fff;
        }

        .quiz-option.incorrect {
            border-color: #f44336;
            background: #b71c1c;
            color: #fff;
        }

        .quiz-feedback {
            margin-top: 20px;
            padding: 15px;
            border-radius: 8px;
            display: none;
            font-size: 1.05em;
        }

        .quiz-feedback.show {
            display: block;
            animation: slideIn 0.3s ease-out;
        }

        .quiz-feedback.correct {
            background: #1b5e20;
            border: 2px solid #4caf50;
            color: #fff;
        }

        .quiz-feedback.incorrect {
            background: #b71c1c;
            border: 2px solid #f44336;
            color: #fff;
        }

        .interactive-task {
            background: #0a0e27;
            padding: 20px;
            border-radius: 8px;
            margin: 15px 0;
            border: 2px dashed #ffa000;
        }

        .drag-drop-area {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            margin-top: 15px;
        }

        .draggable-item {
            background: #1a237e;
            padding: 12px;
            border-radius: 6px;
            text-align: center;
            cursor: move;
            border: 2px solid #ffa000;
            color: #fff;
            font-weight: bold;
            transition: all 0.3s;
        }

        .draggable-item:hover {
            transform: scale(1.05);
            box-shadow: 0 5px 15px rgba(255, 160, 0, 0.4);
        }

        .draggable-item.dragging {
            opacity: 0.5;
        }

        .drop-zone {
            background: #242b4d;
            padding: 15px;
            border-radius: 8px;
            min-height: 60px;
            border: 2px dashed #2d3561;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #666;
        }

        .drop-zone.drag-over {
            border-color: #ffa000;
            background: #1a1f3a;
        }

        .drop-zone.filled {
            border-color: #4caf50;
            background: #1b5e20;
        }

        .input-task {
            margin-top: 15px;
        }

        .api-input {
            width: 100%;
            padding: 15px;
            background: #1a1f3a;
            border: 2px solid #2d3561;
            border-radius: 8px;
            color: #e0e0e0;
            font-size: 1em;
            font-family: 'Courier New', monospace;
            margin-top: 10px;
        }

        .api-input:focus {
            outline: none;
            border-color: #ffa000;
        }

        .submit-btn {
            background: #ffa000;
            color: #0a0e27;
            border: none;
            padding: 12px 30px;
            border-radius: 8px;
            font-weight: bold;
            cursor: pointer;
            margin-top: 15px;
            font-size: 1em;
            transition: all 0.3s;
        }

        .submit-btn:hover {
            background: #ff8f00;
            transform: scale(1.05);
        }

        .submit-btn:disabled {
            background: #666;
            cursor: not-allowed;
            transform: none;
        }

        .next-btn {
            background: linear-gradient(135deg, #1a237e 0%, #ffa000 100%);
            color: white;
            border: none;
            padding: 12px 30px;
            border-radius: 8px;
            font-weight: bold;
            cursor: pointer;
            margin-top: 20px;
            font-size: 1em;
            display: none;
        }

        .next-btn.show {
            display: inline-block;
        }

        .next-btn:hover {
            transform: scale(1.05);
            box-shadow: 0 5px 20px rgba(255, 160, 0, 0.5);
        }

        .quiz-complete {
            text-align: center;
            padding: 40px;
            display: none;
        }

        .quiz-complete.show {
            display: block;
            animation: slideIn 0.5s ease-out;
        }

        .quiz-score {
            font-size: 3em;
            color: #ffa000;
            font-weight: bold;
            margin: 20px 0;
        }

        .restart-btn {
            background: #ffa000;
            color: #0a0e27;
            border: none;
            padding: 15px 40px;
            border-radius: 8px;
            font-weight: bold;
            cursor: pointer;
            margin-top: 20px;
            font-size: 1.1em;
        }

        .restart-btn:hover {
            background: #ff8f00;
            transform: scale(1.05);
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🏟️ Stop 1: San Diego</h1>
            <p>Learn How APIs Work Using Real Stadium Data</p>
        </div>

        <div class="section">
            <h2>What is an API?</h2>
            <div class="simple-explanation">
                <h3>Simple Definition:</h3>
                <p>An <strong>API (Application Programming Interface)</strong> is like a waiter at a restaurant. You tell the waiter what you want (make a request), the waiter goes to the kitchen (database), and brings back your food (data).</p>
            </div>

            <div class="simple-explanation">
                <h3>Why Do We Need APIs?</h3>
                <p>Imagine if every app had to store ALL data itself - weather, sports scores, maps, etc. That would be impossible! Instead, apps use APIs to ask other services for the data they need, exactly when they need it.</p>
            </div>
        </div>

        <div class="section">
            <h2>How APIs Work: Step by Step</h2>
            <div class="analogy-box">
                <h3>🏈 The Stadium Information Request</h3>
                <div class="steps">
                    <div class="step">
                        <span class="step-number">1</span>
                        <strong>You want information</strong><br>
                        Example: "I need to know about Petco Park"
                    </div>
                    <div class="step">
                        <span class="step-number">2</span>
                        <strong>You make a request to the API</strong><br>
                        Example: Send GET request to <code>/api/stadium?name=petco</code>
                    </div>
                    <div class="step">
                        <span class="step-number">3</span>
                        <strong>The API finds the data</strong><br>
                        API looks in the database for Petco Park information
                    </div>
                    <div class="step">
                        <span class="step-number">4</span>
                        <strong>API sends back the data</strong><br>
                        You receive: name, capacity, team, location, etc.
                    </div>
                </div>
            </div>
        </div>

        <div class="section">
            <h2>Try It: San Diego Sports Venues</h2>
            <p style="margin-bottom: 20px; color: #b0b0b0;">Click on any venue card below to fetch its data using an API call. Watch how the API returns specific information!</p>

            <div class="venue-card" onclick="fetchVenue('petco')">
                <h3>⚾ Petco Park</h3>
                <div class="venue-info">Home of the San Diego Padres (MLB Baseball)</div>
                <div class="api-endpoint">GET /api/stadium?venue=petco</div>
                <button class="fetch-btn">📡 Fetch Stadium Data</button>
                <div id="response-petco" class="response-box"></div>
            </div>

            <div class="venue-card" onclick="fetchVenue('snapdragon')">
                <h3>⚽ Snapdragon Stadium</h3>
                <div class="venue-info">Home of San Diego FC (MLS) & San Diego Wave FC (NWSL)</div>
                <div class="api-endpoint">GET /api/stadium?venue=snapdragon</div>
                <button class="fetch-btn">📡 Fetch Stadium Data</button>
                <div id="response-snapdragon" class="response-box"></div>
            </div>

            <div class="venue-card" onclick="fetchVenue('pechanga')">
                <h3>🏒 Pechanga Arena</h3>
                <div class="venue-info">Home of the San Diego Gulls (AHL Hockey)</div>
                <div class="api-endpoint">GET /api/stadium?venue=pechanga</div>
                <button class="fetch-btn">📡 Fetch Stadium Data</button>
                <div id="response-pechanga" class="response-box"></div>
            </div>

            <div class="venue-card" onclick="fetchVenue('all')">
                <h3>🌟 All San Diego Venues</h3>
                <div class="venue-info">Get data for ALL venues in one request</div>
                <div class="api-endpoint">GET /api/stadium?city=sandiego</div>
                <button class="fetch-btn">📡 Fetch All Venues</button>
                <div id="response-all" class="response-box"></div>
            </div>
        </div>

        <div class="section">
            <h2>What Did You Just Learn?</h2>
            <div class="simple-explanation">
                <p><strong>1. APIs are messengers</strong> - They fetch specific data you request</p>
            </div>
            <div class="simple-explanation">
                <p><strong>2. Endpoints are like addresses</strong> - Each endpoint gives you different data</p>
            </div>
            <div class="simple-explanation">
                <p><strong>3. Responses are structured</strong> - Data comes back in an organized format (usually JSON)</p>
            </div>
            <div class="simple-explanation">
                <p><strong>4. You only get what you ask for</strong> - APIs return exactly the data you request, nothing more</p>
            </div>
        </div>

        <div class="key-takeaway">
            <p>🎯 <span class="highlight">Key Takeaway:</span> APIs let different programs talk to each other. You ask for data (request), and the API brings it back (response). It's that simple!</p>
        </div>

        <!-- Interactive Quiz Section -->
        <div class="quiz-section">
            <h2>🎯 Test Your Knowledge: Interactive Quiz</h2>
            
            <!-- Question 1: Multiple Choice -->
            <div class="quiz-question active" id="q1">
                <div class="question-number">Question 1 of 4</div>
                <div class="question-text">What does API stand for?</div>
                <div class="quiz-options">
                    <div class="quiz-option" onclick="selectOption(1, 0, false)">A) Application Programming Internet</div>
                    <div class="quiz-option" onclick="selectOption(1, 1, true)">B) Application Programming Interface</div>
                    <div class="quiz-option" onclick="selectOption(1, 2, false)">C) Advanced Programming Interface</div>
                    <div class="quiz-option" onclick="selectOption(1, 3, false)">D) Automatic Program Integration</div>
                </div>
                <div class="quiz-feedback" id="feedback1"></div>
                <button class="next-btn" id="next1" onclick="nextQuestion(2)">Next Question →</button>
            </div>

            <!-- Question 2: Drag and Drop -->
            <div class="quiz-question" id="q2">
                <div class="question-number">Question 2 of 4</div>
                <div class="question-text">Drag the steps to put the API process in the correct order:</div>
                <div class="interactive-task">
                    <div style="margin-bottom: 15px; color: #ffa000; font-weight: bold;">Drag items into the correct order (1-4):</div>
                    <div style="display: grid; gap: 10px; margin-bottom: 20px;" id="draggable-container">
                        <div class="draggable-item" draggable="true" data-step="3">API finds the data in database</div>
                        <div class="draggable-item" draggable="true" data-step="1">You want specific information</div>
                        <div class="draggable-item" draggable="true" data-step="4">API sends back the data</div>
                        <div class="draggable-item" draggable="true" data-step="2">You make a request to API</div>
                    </div>
                    <div style="color: #b0b0b0; margin-bottom: 10px;">Drop zones (in order):</div>
                    <div style="display: grid; gap: 10px;">
                        <div class="drop-zone" data-position="1">Step 1: Drop here</div>
                        <div class="drop-zone" data-position="2">Step 2: Drop here</div>
                        <div class="drop-zone" data-position="3">Step 3: Drop here</div>
                        <div class="drop-zone" data-position="4">Step 4: Drop here</div>
                    </div>
                </div>
                <button class="submit-btn" onclick="checkDragDrop()" id="submit-q2">Check Answer</button>
                <div class="quiz-feedback" id="feedback2"></div>
                <button class="next-btn" id="next2" onclick="nextQuestion(3)">Next Question →</button>
            </div>

            <!-- Question 3: Type the API Endpoint -->
            <div class="quiz-question" id="q3">
                <div class="question-number">Question 3 of 4</div>
                <div class="question-text">If you want to get information about Snapdragon Stadium, what endpoint should you use?</div>
                <div class="interactive-task">
                    <div style="color: #b0b0b0; margin-bottom: 10px;">Type the correct API endpoint below:</div>
                    <input type="text" class="api-input" id="endpoint-input" placeholder="GET /api/stadium?venue=_____">
                    <div style="margin-top: 10px; color: #666; font-size: 0.9em;">Hint: Look at the examples above! Remember the venue name for Snapdragon Stadium.</div>
                </div>
                <button class="submit-btn" onclick="checkEndpoint()" id="submit-q3">Check Answer</button>
                <div class="quiz-feedback" id="feedback3"></div>
                <button class="next-btn" id="next3" onclick="nextQuestion(4)">Next Question →</button>
            </div>

            <!-- Question 4: Click the Correct Data Field -->
            <div class="quiz-question" id="q4">
                <div class="question-number">Question 4 of 4</div>
                <div class="question-text">You made an API request and got this response. Click on the field that shows the stadium capacity:</div>
                <div class="interactive-task">
                    <div style="background: #0a0e27; padding: 20px; border-radius: 8px; font-family: 'Courier New', monospace; color: #4fc3f7;">
                        {<br>
                        &nbsp;&nbsp;<span class="quiz-option" onclick="selectDataField(0, false)" style="display: inline; padding: 5px; margin: 2px; cursor: pointer;">"venue": "Petco Park"</span>,<br>
                        &nbsp;&nbsp;<span class="quiz-option" onclick="selectDataField(1, false)" style="display: inline; padding: 5px; margin: 2px; cursor: pointer;">"team": "San Diego Padres"</span>,<br>
                        &nbsp;&nbsp;<span class="quiz-option" onclick="selectDataField(2, true)" style="display: inline; padding: 5px; margin: 2px; cursor: pointer;">"capacity": 40209</span>,<br>
                        &nbsp;&nbsp;<span class="quiz-option" onclick="selectDataField(3, false)" style="display: inline; padding: 5px; margin: 2px; cursor: pointer;">"location": "Downtown"</span><br>
                        }
                    </div>
                </div>
                <div class="quiz-feedback" id="feedback4"></div>
                <button class="next-btn" id="next4" onclick="showResults()">See Results →</button>
            </div>

            <!-- Quiz Complete -->
            <div class="quiz-complete" id="quiz-complete">
                <h3 style="color: #ffa000; font-size: 2em; margin-bottom: 20px;">🎉 Quiz Complete!</h3>
                <div class="quiz-score" id="final-score">4/4</div>
                <p style="color: #b0b0b0; font-size: 1.2em; margin-bottom: 20px;" id="score-message">Perfect score! You're an API expert!</p>
                <button class="restart-btn" onclick="restartQuiz()">🔄 Retake Quiz</button>
            </div>
        </div>
    </div>

    <script>
        const stadiumData = {
            petco: {
                venue: "