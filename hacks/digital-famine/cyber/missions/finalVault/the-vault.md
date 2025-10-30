---
layout: post
title: "Final Sequence — The Vault"
description: "Unlock the Sacred Vault — assemble the three code fragments, authenticate, and retrieve the Sacred Page."
permalink: /digital-famine/cyber/vault/
categories: [CSP, Submodule, Vault]
tags: [vault, final, mission, security]
author: Arnav Pallapotu, Sathwik Kintada
date: 2025-10-26
microblog: True
---
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>AI Chatbot Quiz - Galactic Systems Diagnostic</title>
<style>
    body {
        font-family: 'Poppins', sans-serif;
        background: radial-gradient(circle at center, #0f172a, #020617);
        color: white;
        margin: 0;
        padding: 0;
        text-align: center;
        overflow-x: hidden;
    }

    h1 {
        font-size: 2.2em;
        margin-top: 40px;
        color: #38bdf8;
        text-shadow: 0 0 15px rgba(56,189,248,0.4);
    }

    #intro-screen, #results-screen {
        max-width: 800px;
        margin: 40px auto;
        padding: 30px;
        background: rgba(255,255,255,0.05);
        border-radius: 20px;
        box-shadow: 0 0 30px rgba(0,0,0,0.5);
        display: none;
    }

    #intro-screen.show, #results-screen.show {
        display: block;
    }

    #question-container {
        max-width: 850px;
        margin: 40px auto;
        padding: 25px;
        background: rgba(255,255,255,0.05);
        border-radius: 20px;
        box-shadow: 0 0 30px rgba(0,0,0,0.5);
    }

    .question-card {
        display: none;
        text-align: left;
        animation: fadeIn 0.8s ease;
    }

    .question-card.active {
        display: block;
    }

    @keyframes fadeIn {
        from {opacity: 0; transform: translateY(10px);}
        to {opacity: 1; transform: translateY(0);}
    }

    .question-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 15px;
    }

    .question-number {
        font-weight: bold;
        color: #93c5fd;
    }

    .mission-badge {
        padding: 6px 12px;
        border-radius: 12px;
        font-size: 0.9em;
        color: white;
    }

    .mission1 {background: #0284c7;}
    .mission2 {background: #16a34a;}
    .mission3 {background: #9333ea;}

    .question-text {
        font-size: 1.2em;
        margin: 20px 0;
        color: #e0f2fe;
    }

    .answer-option {
        background: rgba(255,255,255,0.08);
        padding: 12px 18px;
        border-radius: 10px;
        margin: 8px 0;
        cursor: pointer;
        transition: 0.3s;
        border: 1px solid transparent;
    }

    .answer-option:hover {
        background: rgba(255,255,255,0.12);
        border: 1px solid rgba(255,255,255,0.2);
    }

    .answer-option.correct {
        background: #22c55e33;
        border: 1px solid #22c55e;
    }

    .answer-option.incorrect {
        background: #ef444433;
        border: 1px solid #ef4444;
    }

    .answer-option.disabled {
        pointer-events: none;
        opacity: 0.7;
    }

    .feedback-box {
        margin-top: 20px;
        background: rgba(0,0,0,0.4);
        border-radius: 12px;
        padding: 15px;
        display: none;
    }

    .feedback-box.show {
        display: block;
    }

    .feedback-box.correct {border-left: 4px solid #22c55e;}
    .feedback-box.incorrect {border-left: 4px solid #ef4444;}

    .feedback-title {
        font-weight: bold;
        margin-bottom: 8px;
    }

    .review-lesson {
        background: #0ea5e9;
        border: none;
        padding: 8px 14px;
        border-radius: 8px;
        color: white;
        margin-top: 10px;
        cursor: pointer;
        transition: 0.3s;
    }

    .review-lesson:hover {
        background: #0284c7;
    }

    .button-group {
        margin-top: 25px;
        text-align: right;
    }

    button {
        background: #1d4ed8;
        color: white;
        border: none;
        padding: 12px 20px;
        border-radius: 10px;
        cursor: pointer;
        transition: 0.3s;
    }

    button:hover {background: #2563eb;}
    button:disabled {background: #1e3a8a; opacity: 0.5; cursor: not-allowed;}

    .score-board {
        margin-top: 20px;
        font-size: 1em;
        color: #93c5fd;
    }

    .progress-bar {
        background: rgba(255,255,255,0.1);
        border-radius: 10px;
        height: 10px;
        width: 100%;
        margin: 15px 0;
        overflow: hidden;
    }

    .progress {
        height: 10px;
        background: #38bdf8;
        width: 0%;
        transition: width 0.5s;
    }

    #results-screen h2 {
        font-size: 2em;
        color: #38bdf8;
        margin-bottom: 10px;
    }

    .mission-score-card {
        display: inline-block;
        margin: 10px;
        background: rgba(255,255,255,0.05);
        border-radius: 10px;
        padding: 15px;
        min-width: 180px;
    }

    .mission-score-card h3 {
        color: #bae6fd;
        margin-bottom: 10px;
    }

    .vault-code {
        background: #0ea5e9;
        color: white;
        padding: 12px 18px;
        display: inline-block;
        border-radius: 10px;
        font-family: monospace;
        letter-spacing: 2px;
        margin-top: 20px;
    }

</style>
</head>
<body>
    <h1>🪐 AI Chatbot Quiz: Galactic Systems Diagnostic</h1>

    <div id="intro-screen" class="show">
        <p>Welcome, Cadet! You are entering the **AI-Powered Chatbot Hub** diagnostics.  
        Each system test checks your knowledge about chatbot design, databases, and AI logic.  
        Complete all missions to unlock the **Vault Code**.</p>
        <button onclick="startQuiz()">🚀 Begin Systems Check</button>
    </div>

    <div id="question-container"></div>

    <div id="results-screen">
        <h2>Mission Results</h2>
        <p>Your Score: <span id="final-score">0</span>/100</p>
        <p id="performance-message"></p>
        <div id="mission-breakdown"></div>
        <div id="vault-code-reveal" style="display:none;">
            <h3>✅ Access Granted</h3>
            <div class="vault-code">CODE: NOVA-7X91</div>
            <button id="vault-button" onclick="retakeQuiz()">🔁 Retake Systems</button>
        </div>
    </div>

<script>
const questions = [
    {
        question: "What is the main advantage of integrating a chatbot into a school district website?",
        options: [
            "It replaces teachers in classrooms",
            "It automates student and parent queries efficiently",
            "It controls the district’s social media",
            "It grades assignments automatically"
        ],
        correct: 1,
        mission: 1,
        explanation: "Chatbots streamline communication by providing quick, 24/7 answers to common questions.",
        lessonUrl: "lesson1.html"
    },
    {
        question: "Which database type is best for storing user conversations?",
        options: ["Relational (SQL)", "Text Files", "Image Database", "Spreadsheet"],
        correct: 0,
        mission: 1,
        explanation: "Relational databases like PostgreSQL allow structured storage and querying of chatbot logs.",
        lessonUrl: "lesson2.html"
    }
];

let currentQuestion = 0;
let score = 0;
let correctAnswers = 0;
let answered = false;

function startQuiz() {
    document.getElementById('intro-screen').classList.remove('show');
    document.getElementById('results-screen').classList.remove('show');
    currentQuestion = 0;
    score = 0;
    correctAnswers = 0;
    renderQuestion();
}

function renderQuestion() {
    const q = questions[currentQuestion];
    const container = document.getElementById('question-container');
    answered = false;

    const progressPercent = ((currentQuestion + 1) / questions.length) * 100;

    container.innerHTML = `
        <div class="score-board">
            Question ${currentQuestion + 1} / ${questions.length} | Score: ${score}
        </div>
        <div class="progress-bar"><div class="progress" style="width:${progressPercent}%;"></div></div>
        <div class="question-card active">
            <div class="question-header">
                <span class="question-number">System ${currentQuestion + 1}</span>
                <span class="mission-badge mission${q.mission}">Mission ${q.mission}</span>
            </div>
            <div class="question-text">${q.question}</div>
            ${q.options.map((opt, i) => `
                <div class="answer-option" onclick="selectAnswer(${i})">
                    <div class="option-letter">${String.fromCharCode(65 + i)}</div>
                    ${opt}
                </div>
            `).join('')}
            <div id="feedback" class="feedback-box">
                <div class="feedback-title"></div>
                <div class="feedback-text"></div>
                <button id="review-button" class="review-lesson" style="display:none;">📘 Review Lesson</button>
            </div>
            <div class="button-group">
                <button id="next-button" disabled onclick="nextQuestion()">Next System ➜</button>
            </div>
        </div>
    `;
}

function selectAnswer(index) {
    if (answered) return;
    answered = true;

    const q = questions[currentQuestion];
    const options = document.querySelectorAll('.answer-option');
    const feedback = document.getElementById('feedback');
    const feedbackTitle = feedback.querySelector('.feedback-title');
    const feedbackText = feedback.querySelector('.feedback-text');
    const reviewButton = document.getElementById('review-button');
    const nextButton = document.getElementById('next-button');

    options.forEach((opt, i) => {
        opt.classList.add('disabled');
        if (i === q.correct) opt.classList.add('correct');
        else if (i === index && i !== q.correct) opt.classList.add('incorrect');
    });

    feedback.classList.add('show');
    if (index === q.correct) {
        score += 5;
        correctAnswers++;
        feedback.classList.add('correct');
        feedbackTitle.textContent = "✅ Correct!";
    } else {
        feedback.classList.add('incorrect');
        feedbackTitle.textContent = "❌ Incorrect!";
        reviewButton.style.display = "inline-block";
        reviewButton.onclick = () => window.location.href = q.lessonUrl;
    }
    feedbackText.textContent = q.explanation;
    nextButton.disabled = false;
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) renderQuestion();
    else showResults();
}

function showResults() {
    const container = document.getElementById('question-container');
    container.innerHTML = '';
    document.getElementById('results-screen').classList.add('show');
    document.getElementById('final-score').textContent = score;

    let message = "";
    if (score === 100) message = "🚀 Perfect! The ship is fully operational!";
    else if (score >= 85) message = "🔥 Excellent work, Commander!";
    else if (score >= 70) message = "✅ Systems stable. Jump approved.";
    else message = "⚠️ Systems unstable. Rerun diagnostics!";

    document.getElementById('performance-message').textContent = message;

    if (score >= 70) {
        document.getElementById('vault-code-reveal').style.display = "block";
    }
}

function retakeQuiz() {
    document.getElementById('results-screen').classList.remove('show');
    startQuiz();
}
</script>
</body>
</html>
