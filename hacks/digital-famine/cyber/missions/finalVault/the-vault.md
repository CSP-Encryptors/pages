---
layout: post
title: "Final Sequence — The Vault"
description: "Unlock the Sacred Vault — assemble the three code fragments, authenticate, and retrieve the Sacred Page."
permalink: /digital-famine/cyber/vault
categories: [CSP, Submodule, Vault]
tags: [vault, final, mission, security]
author: Arnav Pallapotu, Sathwik Kintada
date: 2025-10-26
microblog: True
breadcrumb: True
---

<style>
.quiz-container {
  max-width: 700px;
  margin: auto;
  background: #0b0f19;
  padding: 20px;
  border-radius: 15px;
  color: white;
  font-family: "Poppins", sans-serif;
  box-shadow: 0 0 20px rgba(0, 255, 150, 0.4);
}
.question {
  font-size: 1.2em;
  margin-bottom: 20px;
}
.options button {
  display: block;
  width: 100%;
  margin: 8px 0;
  padding: 12px;
  border: none;
  border-radius: 10px;
  background-color: #1c2333;
  color: white;
  font-size: 1em;
  transition: 0.2s;
}
.options button:hover {
  background-color: #2b3247;
  cursor: pointer;
}
.feedback {
  margin-top: 15px;
  font-size: 1em;
  padding: 10px;
  border-radius: 8px;
}
.correct {
  background: #145a32;
}
.wrong {
  background: #641e16;
}
.next-btn {
  margin-top: 20px;
  padding: 10px 20px;
  background: #00ff99;
  color: black;
  border: none;
  border-radius: 10px;
  font-weight: bold;
  cursor: pointer;
}
.progress {
  margin-bottom: 15px;
  text-align: center;
  color: #00ff99;
}
</style>

<div class="quiz-container">
  <h1>Cybersecurity Quiz</h1>
  <div class="progress" id="progress"></div>
  <div id="quiz-content">
    <div class="question" id="question"></div>
    <div class="options" id="options"></div>
    <div id="feedback" class="feedback"></div>
    <button class="next-btn" id="next-btn" style="display:none;">Next Question</button>
  </div>
</div>

<script>
const questions = [
  // MISSION 1
  {question:"What is a database schema?",options:["The actual data stored in tables","A blueprint defining table structure, columns, and constraints","A backup file of the database","The SQL queries used to retrieve data"],correct:1,mission:1,lessonUrl:"/digital-famine/cyber/submodule_1"},
  {question:"Which constraint uniquely identifies each record in a table?",options:["NOT NULL","UNIQUE","PRIMARY KEY","FOREIGN KEY"],correct:2,mission:1,lessonUrl:"/digital-famine/cyber/submodule_1"},
  {question:"What does a FOREIGN KEY do in the earth_base.db?",options:["Encrypts sensitive data","Links two tables by referencing another table's PRIMARY KEY","Makes queries run faster","Prevents duplicate entries"],correct:1,mission:1,lessonUrl:"/digital-famine/cyber/submodule_1"},
  {question:"Which SQL statement adds new agents to the database?",options:["CREATE TABLE Agents","INSERT INTO Agents","UPDATE Agents","SELECT FROM Agents"],correct:1,mission:1,lessonUrl:"/digital-famine/cyber/submodule_1"},
  {question:"What happens if you delete an agent who verified alien sightings?",options:["Everything deletes automatically","The database prevents deletion to maintain integrity","The agent deletes but sightings remain unchanged","All sightings become unverified"],correct:1,mission:1,lessonUrl:"/digital-famine/cyber/submodule_1"},
  {question:"Which data type stores clearance_level values (1-10)?",options:["TEXT","REAL","INTEGER","BLOB"],correct:2,mission:1,lessonUrl:"/digital-famine/cyber/submodule_1"},
  {question:"What does CHECK(threat_level >= 1 AND threat_level <= 5) do?",options:["Checks for database corruption","Validates data meets conditions before insertion","Checks for duplicate values","Automatically fixes invalid data"],correct:1,mission:1,lessonUrl:"/digital-famine/cyber/submodule_1"},

  // MISSION 2
  {question:"What is SQL Injection?",options:["A method to speed up queries","A vulnerability where attackers insert malicious SQL into inputs","A database backup technique","A tool for debugging SQL"],correct:1,mission:2,lessonUrl:"/digital-famine/cyber/submodule_2"},
  {question:"Which login input could be a SQL injection attempt?",options:["username: 'john_doe'","username: 'admin' OR '1'='1'","username: 'user@email.com'","username: 'agent_007'"],correct:1,mission:2,lessonUrl:"/digital-famine/cyber/submodule_2"},
  {question:"What's the best defense against SQL injection?",options:["Using longer passwords","Using parameterized queries with placeholders","Encrypting the database","Limiting login attempts"],correct:1,mission:2,lessonUrl:"/digital-famine/cyber/submodule_2"},
  {question:"Why is this vulnerable: 'SELECT * FROM Agents WHERE codename=\"' + userInput + '\"'",options:["It uses SELECT statement","User input is directly concatenated into the SQL string","It doesn't check clearance levels","The table name is incorrect"],correct:1,mission:2,lessonUrl:"/digital-famine/cyber/submodule_2"},
  {question:"Which payload could expose ALL agent records?",options:["' OR 1=1 --","DELETE FROM Agents","CREATE TABLE hacked","UPDATE Agents SET clearance=10"],correct:0,mission:2,lessonUrl:"/digital-famine/cyber/submodule_2"},
  {question:"What does input validation prevent?",options:["Slow queries","Malicious data from being processed by the system","Users from creating accounts","Database backups from failing"],correct:1,mission:2,lessonUrl:"/digital-famine/cyber/submodule_2"},
  {question:"In SQL injection attacks, what does '--' do?",options:["Subtracts two numbers","Starts a comment, ignoring everything after it","Creates a new table","Encrypts the query"],correct:1,mission:2,lessonUrl:"/digital-famine/cyber/submodule_2"},

  // MISSION 3
  {question:"What's the difference between hashing and encryption?",options:["Hashing is faster than encryption","Hashing is one-way (irreversible), encryption is two-way (reversible)","Hashing works on text, encryption on numbers","There's no difference"],correct:1,mission:3,lessonUrl:"/digital-famine/cyber/submodule_3"},
  {question:"How many characters is a SHA-256 hash output?",options:["32 hexadecimal characters","64 hexadecimal characters","128 hexadecimal characters","Varies based on input length"],correct:1,mission:3,lessonUrl:"/digital-famine/cyber/submodule_3"},
  {question:"What is the 'avalanche effect' in SHA-256?",options:["Hashing multiple launch codes simultaneously","A tiny change in input creates a completely different hash","The hash gets longer as input increases","Multiple inputs produce the same hash"],correct:1,mission:3,lessonUrl:"/digital-famine/cyber/submodule_3"},
  {question:"Why hash launch codes instead of storing them in plaintext?",options:["To save storage space in earth_base.db","To make verification faster","So aliens can't read codes even if they breach the database","Because it's required by defense protocols"],correct:2,mission:3,lessonUrl:"/digital-famine/cyber/submodule_3"},
  {question:"If you hash 'ALPHA-001' today and tomorrow, will the hashes match?",options:["No - hashes change daily","Yes - hashing is deterministic (same input = same output)","Only if using the same computer","Depends on the time of day"],correct:1,mission:3,lessonUrl:"/digital-famine/cyber/submodule_3"},
  {question:"What is 'salt' in password hashing?",options:["A secret decryption key","Random data added to passwords before hashing to prevent rainbow table attacks","A specific type of hashing algorithm","A compression method for long passwords"],correct:1,mission:3,lessonUrl:"/digital-famine/cyber/submodule_3"}
];

let currentQuestion = 0;

function showQuestion() {
  const q = questions[currentQuestion];
  document.getElementById("progress").textContent = `Question ${currentQuestion + 1} of ${questions.length}`;
  document.getElementById("question").textContent = q.question;

  const optionsContainer = document.getElementById("options");
  optionsContainer.innerHTML = "";

  q.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.onclick = () => checkAnswer(i);
    optionsContainer.appendChild(btn);
  });

  document.getElementById("feedback").innerHTML = "";
  document.getElementById("next-btn").style.display = "none";
}

function checkAnswer(selected) {
  const q = questions[currentQuestion];
  const feedback = document.getElementById("feedback");

  if (selected === q.correct) {
    feedback.textContent = "✅ Correct!";
    feedback.className = "feedback correct";
    document.getElementById("next-btn").style.display = "inline-block";
  } else {
    feedback.innerHTML = `❌ Incorrect. Review the lesson before trying again: <a href="${q.lessonUrl}" style="color:#00ff99;">Go to Lesson</a>`;
    feedback.className = "feedback wrong";
  }
}

document.getElementById("next-btn").onclick = () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    document.getElementById("quiz-content").innerHTML = "<h2>🎉 Quiz Complete! Great job, Agent!</h2>";
  }
};

showQuestion();
</script>