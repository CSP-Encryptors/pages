---
layout: opencs
title: "San Francisco"
description: "Submodule 3 of Backend Development Mini-Quest"
permalink: /west-coast/backend/submodule_3/
parent: "Backend Development"
team: "Zombies"
submodule: 3
categories: [CSP, Submodule, Backend]
tags: [backend, submodule, zombies]
author: "Zombies Team"
date: 2025-10-21
microblog: True
footer:
  previous: /west-coast/backend/submodule_2/
  home: /west-coast/sports/
  next: /west-coast/backend/submodule_4/
---
 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>San Francisco - Making API Calls</title>
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
            background: linear-gradient(135deg, #AA0000 0%, #B3995D 100%);
            color: white;
            padding: 40px;
            border-radius: 15px;
            text-align: center;
            margin-bottom: 30px;
            box-shadow: 0 10px 30px rgba(170, 0, 0, 0.2);
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
            background: white;
            padding: 30px;
            border-radius: 15px;
            margin-bottom: 25px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }

        .section h2 {
            color: #AA0000;
            margin-bottom: 20px;
            font-size: 1.8em;
            border-bottom: 3px solid #B3995D;
            padding-bottom: 10px;
        }

        .step-number {
            display: inline-block;
            background: #AA0000;
            color: white;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            text-align: center;
            line-height: 40px;
            font-weight: bold;
            margin-right: 15px;
            font-size: 1.2em;
        }

        .explanation {
            background: #f8f9fa;
            padding: 20px;
            border-radius: 10px;
            border-left: 5px solid #B3995D;
            margin: 20px 0;
        }

        .explanation h3 {
            color: #AA0000;
            margin-bottom: 10px;
            font-size: 1.2em;
        }

        .explanation p {
            color: #555;
            line-height: 1.8;
        }

        .stadium-cards {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            margin: 20px 0;
        }

        .stadium-card {
            background: linear-gradient(135deg, #fff 0%, #f8f9fa 100%);
            padding: 20px;
            border-radius: 10px;
            border: 3px solid #dee2e6;
            transition: all 0.3s;
        }

        .stadium-card:hover {
            border-color: #B3995D;
            transform: translateY(-5px);
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);
        }

        .stadium-card h3 {
            color: #AA0000;
            margin-bottom: 10px;
            font-size: 1.3em;
        }

        .stadium-card .info {
            color: #666;
            margin: 5px 0;
        }

        .interactive-box {
            background: #f8f9fa;
            padding: 25px;
            border-radius: 10px;
            margin: 20px 0;
            border: 2px dashed #B3995D;
        }

        .interactive-box h3 {
            color: #AA0000;
            margin-bottom: 15px;
        }

        .key-display {
            background: white;
            padding: 15px;
            border-radius: 8px;
            font-family: 'Courier New', monospace;
            border: 2px solid #dee2e6;
            margin: 15px 0;
            color: #333;
            font-size: 1em;
            min-height: 50px;
            display: flex;
            align-items: center;
        }

        .generate-btn {
            background: linear-gradient(135deg, #AA0000 0%, #B3995D 100%);
            color: white;
            border: none;
            padding: 12px 30px;
            border-radius: 8px;
            font-weight: bold;
            cursor: pointer;
            font-size: 1em;
            transition: all 0.3s;
        }

        .generate-btn:hover {
            transform: scale(1.05);
            box-shadow: 0 5px 15px rgba(170, 0, 0, 0.3);
        }

        .url-builder {
            margin: 20px 0;
        }

        .url-part {
            margin-bottom: 15px;
        }

        .url-part label {
            display: block;
            font-weight: bold;
            color: #AA0000;
            margin-bottom: 5px;
        }

        .url-part select, .url-part input {
            width: 100%;
            padding: 12px;
            border: 2px solid #dee2e6;
            border-radius: 8px;
            font-size: 1em;
        }

        .url-part select:focus, .url-part input:focus {
            outline: none;
            border-color: #B3995D;
        }

        .constructed-url {
            background: #2c3e50;
            color: #00ff00;
            padding: 20px;
            border-radius: 10px;
            font-family: 'Courier New', monospace;
            font-size: 0.95em;
            word-break: break-all;
            margin-top: 15px;
            min-height: 60px;
        }

        .call-btn {
            background: #B3995D;
            color: white;
            border: none;
            padding: 15px 40px;
            border-radius: 8px;
            font-weight: bold;
            cursor: pointer;
            font-size: 1.1em;
            width: 100%;
            margin-top: 15px;
            transition: all 0.3s;
        }

        .call-btn:hover:not(:disabled) {
            background: #9d864f;
            transform: scale(1.02);
        }

        .call-btn:disabled {
            background: #ccc;
            cursor: not-allowed;
        }

        .response-area {
            margin-top: 20px;
            display: none;
        }

        .response-area.active {
            display: block;
            animation: slideIn 0.3s ease-out;
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

        .loading {
            text-align: center;
            padding: 30px;
            color: #AA0000;
            font-weight: bold;
        }

        .spinner {
            border: 4px solid #f3f3f3;
            border-top: 4px solid #AA0000;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            animation: spin 1s linear infinite;
            margin: 0 auto 15px;
        }

        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }

        .json-display {
            background: #2c3e50;
            color: #00ff00;
            padding: 20px;
            border-radius: 8px;
            font-family: 'Courier New', monospace;
            font-size: 0.9em;
            white-space: pre-wrap;
            max-height: 300px;
            overflow-y: auto;
            margin: 15px 0;
        }

        .parsed-data {
            background: white;
            border: 3px solid #B3995D;
            border-radius: 10px;
            padding: 20px;
            margin-top: 15px;
        }

        .data-row {
            display: flex;
            justify-content: space-between;
            padding: 12px;
            background: #f8f9fa;
            border-radius: 6px;
            margin-bottom: 10px;
        }

        .data-label {
            font-weight: bold;
            color: #AA0000;
        }

        .data-value {
            color: #333;
            font-family: 'Courier New', monospace;
        }

        .success-message {
            background: #d4edda;
            border: 2px solid #28a745;
            padding: 15px;
            border-radius: 8px;
            color: #155724;
            margin: 15px 0;
        }

        .key-takeaway {
            background: linear-gradient(135deg, #AA0000 0%, #B3995D 100%);
            color: white;
            padding: 30px;
            border-radius: 12px;
            text-align: center;
            font-size: 1.2em;
            line-height: 1.8;
            box-shadow: 0 10px 30px rgba(170, 0, 0, 0.2);
        }

        .highlight {
            background: rgba(255, 255, 255, 0.2);
            padding: 3px 8px;
            border-radius: 4px;
            font-weight: bold;
        }

        /* Quiz Styles */
        .quiz-section {
            background: white;
            padding: 30px;
            border-radius: 15px;
            margin-top: 30px;
            border: 3px solid #B3995D;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }

        .quiz-section h2 {
            color: #AA0000;
            text-align: center;
            margin-bottom: 30px;
            font-size: 2em;
        }

        .quiz-question {
            background: #f8f9fa;
            padding: 25px;
            border-radius: 12px;
            margin-bottom: 25px;
            display: none;
        }

        .quiz-question.active {
            display: block;
            animation: slideIn 0.3s ease-out;
        }

        .question-number {
            background: #B3995D;
            color: white;
            padding: 5px 15px;
            border-radius: 20px;
            font-weight: bold;
            display: inline-block;
            margin-bottom: 15px;
        }

        .question-text {
            color: #333;
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
            background: white;
            padding: 15px 20px;
            border-radius: 8px;
            border: 2px solid #dee2e6;
            cursor: pointer;
            transition: all 0.3s;
            color: #333;
            font-size: 1.05em;
        }

        .quiz-option:hover {
            border-color: #B3995D;
            background: #fff9e6;
            transform: translateX(5px);
        }

        .quiz-option.selected {
            border-color: #AA0000;
            background: #ffe6e6;
            font-weight: bold;
        }

        .quiz-option.correct {
            border-color: #28a745;
            background: #d4edda;
            color: #155724;
        }

        .quiz-option.incorrect {
            border-color: #dc3545;
            background: #f8d7da;
            color: #721c24;
        }

        .quiz-feedback {
            margin-top: 20px;
            padding: 15px;
            border-radius: 8px;
            display: none;
        }

        .quiz-feedback.show {
            display: block;
            animation: slideIn 0.3s ease-out;
        }

        .quiz-feedback.correct {
            background: #d4edda;
            border: 2px solid #28a745;
            color: #155724;
        }

        .quiz-feedback.incorrect {
            background: #f8d7da;
            border: 2px solid #dc3545;
            color: #721c24;
        }

        .next-btn {
            background: linear-gradient(135deg, #AA0000 0%, #B3995D 100%);
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
            color: #AA0000;
            font-weight: bold;
            margin: 20px 0;
        }

        .restart-btn {
            background: #B3995D;
            color: white;
            border: none;
            padding: 15px 40px;
            border-radius: 8px;
            font-weight: bold;
            cursor: pointer;
            margin-top: 20px;
            font-size: 1.1em;
        }

        .restart-btn:hover {
            background: #9d864f;
            transform: scale(1.05);
        }

        .drag-item {
            background: white;
            border: 2px solid #AA0000;
            padding: 15px;
            margin: 10px 0;
            border-radius: 8px;
            cursor: move;
            text-align: center;
            font-weight: bold;
            color: #333;
        }

        .drag-item:hover {
            background: #ffe6e6;
        }

        .drop-zone {
            background: white;
            border: 2px dashed #dee2e6;
            padding: 20px;
            margin: 10px 0;
            border-radius: 8px;
            min-height: 60px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #999;
        }

        .drop-zone.filled {
            border-color: #28a745;
            background: #d4edda;
            color: #155724;
        }

        .drop-zone.drag-over {
            background: #fff9e6;
            border-color: #B3995D;
        }

        @media (max-width: 768px) {
            .stadium-cards {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🏟️ Stop 2: San Francisco</h1>
            <p>Learn How to Make Complete API Calls</p>
        </div>

        <div class="section">
            <h2>Meet the San Francisco Stadiums</h2>
            <div class="stadium-cards">
                <div class="stadium-card">
                    <h3>🏀 Chase Center</h3>
                    <div class="info"><strong>Team:</strong> Golden State Warriors</div>
                    <div class="info"><strong>Capacity:</strong> 18,064 fans</div>
                    <div class="info"><strong>Opened:</strong> 2019</div>
                    <div class="info"><strong>Championships:</strong> 7 NBA Titles</div>
                </div>
                <div class="stadium-card">
                    <h3>🏈 Levi's Stadium</h3>
                    <div class="info"><strong>Team:</strong> San Francisco 49ers</div>
                    <div class="info"><strong>Capacity:</strong> 68,500 fans</div>
                    <div class="info"><strong>Opened:</strong> 2014</div>
                    <div class="info"><strong>Championships:</strong> 5 Super Bowls</div>
                </div>
            </div>
        </div>

        <div class="section">
            <h2><span class="step-number">1</span> Get Your API Key</h2>
            <div class="explanation">
                <h3>What is an API Key?</h3>
                <p>An API key is like a special password that proves you have permission to access data. Think of it like a stadium pass - without it, you can't get in! Real sports apps need API keys to get live scores and stats.</p>
            </div>

            <div class="interactive-box">
                <h3>🔑 Generate Your Access Key:</h3>
                <div class="key-display" id="keyDisplay">Click the button below to generate your API key...</div>
                <button class="generate-btn" onclick="generateKey()">🔓 Generate API Key</button>
                <div id="keySuccess"></div>
            </div>
        </div>

        <div class="section">
            <h2><span class="step-number">2</span> Build Your API Request</h2>
            <div class="explanation">
                <h3>What is an API Request?</h3>
                <p>An API request is like asking a specific question. You need to tell the computer: WHERE to look (URL), WHAT you want (which stadium), and WHO you are (your API key). Let's build one!</p>
            </div>

            <div class="interactive-box">
                <h3>🔨 Build Your Request URL:</h3>
                <div class="url-builder">
                    <div class="url-part">
                        <label>Step 1: Select which stadium data you want:</label>
                        <select id="stadiumSelect" onchange="updateURL()">
                            <option value="">-- Choose a stadium --</option>
                            <option value="chase_center">🏀 Chase Center (Warriors)</option>
                            <option value="levis_stadium">🏈 Levi's Stadium (49ers)</option>
                        </select>
                    </div>
                    <div class="constructed-url" id="constructedURL">
                        Select a stadium above to see your API request URL...
                    </div>
                </div>
            </div>
        </div>

        <div class="section">
            <h2><span class="step-number">3</span> Send the Request & Get Data</h2>
            <div class="explanation">
                <h3>Making the API Call</h3>
                <p>When you click "Send Request," your computer asks the server: "Give me information about this stadium." The server looks it up and sends back the data in JSON format - a way computers organize information.</p>
            </div>

            <button class="call-btn" id="sendBtn" onclick="sendRequest()" disabled>
                🚀 Send API Request
            </button>

            <div id="responseArea" class="response-area"></div>
        </div>

        <div class="key-takeaway">
            <p>🎯 <span class="highlight">What You Learned:</span> Making an API call has 3 steps: Get permission (API key), Build your request (URL), Send it and receive data (JSON response). Every app that shows live sports data does exactly this!</p>
        </div>

        <!-- Quiz Section -->
        <div class="quiz-section">
            <h2>🎯 Test Your Knowledge</h2>
            
            <div class="quiz-question active" id="q1">
                <div class="question-number">Question 1 of 3</div>
                <div class="question-text">What is an API key used for?</div>
                <div class="quiz-options">
                    <div class="quiz-option" onclick="selectOption(1, 0, false)">A) To make your computer faster</div>
                    <div class="quiz-option" onclick="selectOption(1, 1, true)">B) To prove you have permission to access the data</div>
                    <div class="quiz-option" onclick="selectOption(1, 2, false)">C) To encrypt your password</div>
                    <div class="quiz-option" onclick="selectOption(1, 3, false)">D) To store data on your computer</div>
                </div>
                <div class="quiz-feedback" id="feedback1"></div>
                <button class="next-btn" id="next1" onclick="nextQuestion(2)">Next Question →</button>
            </div>

            <div class="quiz-question" id="q2">
                <div class="question-number">Question 2 of 3</div>
                <div class="question-text">Drag the steps of making an API call into the correct order:</div>
                <div style="margin: 20px 0;">
                    <div style="margin-bottom: 20px;">
                        <strong style="color: #AA0000;">Available Steps (drag these):</strong>
                        <div id="draggables">
                            <div class="drag-item" draggable="true" data-step="3">Receive the data response</div>
                            <div class="drag-item" draggable="true" data-step="1">Get an API key</div>
                            <div class="drag-item" draggable="true" data-step="2">Build the request URL</div>
                        </div>
                    </div>
                    <div>
                        <strong style="color: #AA0000;">Correct Order (drop here):</strong>
                        <div class="drop-zone" data-position="1">1st: Drop here</div>
                        <div class="drop-zone" data-position="2">2nd: Drop here</div>
                        <div class="drop-zone" data-position="3">3rd: Drop here</div>
                    </div>
                </div>
                <button class="generate-btn" onclick="checkDragDrop()" style="margin-top: 20px;">Check Answer</button>
                <div class="quiz-feedback" id="feedback2"></div>
                <button class="next-btn" id="next2" onclick="nextQuestion(3)">Next Question →</button>
            </div>

            <div class="quiz-question" id="q3">
                <div class="question-number">Question 3 of 3</div>
                <div class="question-text">Which stadium has a larger capacity?</div>
                <div class="quiz-options">
                    <div class="quiz-option" onclick="selectOption(3, 0, false)">A) Chase Center (18,064 fans)</div>
                    <div class="quiz-option" onclick="selectOption(3, 1, true)">B) Levi's Stadium (68,500 fans)</div>
                    <div class="quiz-option" onclick="selectOption(3, 2, false)">C) They have the same capacity</div>
                </div>
                <div class="quiz-feedback" id="feedback3"></div>
                <button class="next-btn" id="next3" onclick="showResults()">See Results →</button>
            </div>

            <div class="quiz-complete" id="quizComplete">
                <h3 style="color: #AA0000; font-size: 2em; margin-bottom: 20px;">🎉 Quiz Complete!</h3>
                <div class="quiz-score" id="finalScore">3/3</div>
                <p style="color: #666; font-size: 1.2em; margin-bottom: 20px;" id="scoreMessage">Perfect! You understand APIs!</p>
                <button class="restart-btn" onclick="restartQuiz()">🔄 Retake Quiz</button>
            </div>
        </div>
    </div>

    <script>
        const stadiumData = {
            chase_center: {
                name: "Chase Center",
                team: "Golden State Warriors",
                sport: "Basketball (NBA)",
                capacity: 18064,
                opened: 2019,
                location: "San Francisco, CA",
                championships: 7,
                cost: "$1.4 Billion"
            },
            levis_stadium: {
                name: "Levi's Stadium",
                team: "San Francisco 49ers",
                sport: "Football (NFL)",
                capacity: 68500,
                opened: 2014,
                location: "Santa Clara, CA",
                championships: 5,
                cost: "$1.3 Billion"
            }
        };

        let currentKey = null;
        let selectedStadium = null;
        let score = 0;

        function generateKey() {
            const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            let key = 'sf_';
            for (let i = 0; i < 20; i++) {
                key += chars.charAt(Math.floor(Math.random() * chars.length));
            }
            
            currentKey = key;
            document.getElementById('keyDisplay').textContent = key;
            document.getElementById('keySuccess').innerHTML = `
                <div class="success-message" style="margin-top: 15px;">
                    ✅ <strong>Success!</strong> Your API key has been generated. You can now make requests!
                </div>
            `;
            
            updateURL();
        }

        function updateURL() {
            const stadium = document.getElementById('stadiumSelect').value;
            selectedStadium = stadium;
            
            if (!stadium) {
                document.getElementById('constructedURL').textContent = 'Select a stadium above to see your API request URL...';
                document.getElementById('sendBtn').disabled = true;
                return;
            }
            
            let url = `https://api.sfsports.com/v1/stadium/${stadium}?format=json`;
            
            if (currentKey) {
                url += `&api_key=${currentKey}`;
                document.getElementById('sendBtn').disabled = false;
            } else {
                document.getElementById('sendBtn').disabled = true;
            }
            
            document.getElementById('constructedURL').textContent = url;
        }

        function sendRequest() {
            const responseArea = document.getElementById('responseArea');
            responseArea.classList.add('active');
            
            responseArea.innerHTML = `
                <div class="loading">
                    <div class="spinner"></div>
                    <p>Sending request to server...</p>
                </div>
            `;
            
            setTimeout(() => {
                const data = stadiumData[selectedStadium];
                const response = {
                    status: 200,
                    message: "Success",
                    timestamp: new Date().toISOString(),
                    data: data
                };
                
                responseArea.innerHTML = `
                    <div class="success-message">
                        ✅ <strong>Request Successful!</strong> The server found the data and sent it back.
                    </div>
                    <h3 style="color: #AA0000; margin: 20px 0 10px 0;">📥 Raw JSON Response:</h3>
                    <div class="json-display">${JSON.stringify(response, null, 2)}</div>
                    <h3 style="color: #AA0000; margin: 20px 0 10px 0;">📊 Parsed Data (Easy to Read):</h3>
                    <div class="parsed-data">
                        <div class="data-row">
                            <span class="data-label">Stadium Name:</span>
                            <span class="data-value">${data.name}</span>
                        </div>
                        <div class="data-row">
                            <span class="data-label">Team:</span>
                            <span class="data-value">${data.team}</span>
                        </div>
                        <div class="data-row">
                            <span class="data-label">Sport:</span>
                            <span class="data-value">${data.sport}</span>
                        </div>
                        <div class="data-row">
                            <span class="data-label">Capacity:</span>
                            <span class="data-value">${data.capacity.toLocaleString()} fans</span>
                        </div>
                        <div class="data-row">
                            <span class="data-label">Opened:</span>
                            <span class="data-value">${data.opened}</span>
                        </div>
                        <div class="data-row">
                            <span class="data-label">Championships:</span>
                            <span class="data-value">${data.championships}</span>
                        </div>
                        <div class="data-row">
                            <span class="data-label">Cost to Build:</span>
                            <span class="data-value">${data.cost}</span>
                        </div>
                    </div>
                    <div class="explanation" style="margin-top: 20px;">
                        <h3>💡 What Just Happened?</h3>
                        <p>The server received your request, looked up ${data.name} in its database, and sent back all the information as JSON. Your browser then converted (parsed) that JSON into a readable format!</p>
                    </div>
                `;
                
                responseArea.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }, 1500);
        }

        // Quiz Functions
        function selectOption(questionNum, optionIndex, isCorrect) {
            const options = document.querySelectorAll(`#q${questionNum} .quiz-option`);
            options.forEach(opt => opt.classList.remove('selected', 'correct', 'incorrect'));
            
            const selected = options[optionIndex];
            selected.classList.add('selected');
            
            setTimeout(() => {
                const feedback = document.getElementById(`feedback${questionNum}`);
                if (isCorrect) {
                    selected.classList.add('correct');
                    feedback.className = 'quiz-feedback correct show';
                    feedback.textContent = '✅ Correct! Great job!';
                    score++;