---
layout: opencs
microblog: True 
title: "Seattle"
description: "City Two of Food - Seattle"
permalink: /west-coast/food/SEA/
parent: "Seattle"
team: "Syntax Terrors"
submodule: 1
categories: [CSP]
tags: [food, seattle]
author: "Syntax Terrors"
date: 2025-10-24
footer:
  home: /west-coast/food/
  previous: /west-coast/food/SF/
---

# 🌲 Seattle — DELETE & ANALYTICS (CRUD Submodule 4)

**Quest Chapter:** *The Food Route*  
**Focus:** D in CRUD — **DELETE & ANALYZE**  
**Location:** Seattle, WA ☕🐚🌧️  

Final stop! In Seattle, learners archive or delete dishes (like *Clam Chowder in a Sourdough Bread Bowl*) and run analytics to uncover insights about all cities’ menus.

---

<style>
.sq-card {
  border-radius: .8rem;
  padding: 1.2rem;
  background: linear-gradient(135deg, #312e81 60%, #7c3aed 100%);
  box-shadow: 0 8px 24px rgba(55, 48, 163, 0.13), 0 1.5px 4px rgba(59,130,246,0.10);
  margin-bottom: 1.2rem;
  border: 1.5px solid #818cf8;
}
.sq-card, .sq-card h3, .sq-card p, .sq-card label, .sq-card input, .sq-card select, .sq-card pre, .sq-card ul, .sq-card li {
  color: #fdf2f8 !important;
}
.sq-terminal, .sq-terminal * {
  color: #fdf2f8 !important;
}
.sq-btn {
  background: linear-gradient(90deg, #38bdf8 60%, #d946ef 100%);
  color: #fff7ed;
  border: none;
  padding: .6rem 1.1rem;
  border-radius: .5rem;
  cursor: pointer;
  font-weight: 700;
  font-size: 1.3rem;
  box-shadow: 0 2px 8px rgba(168,85,247,0.08);
  transition: background 0.2s, box-shadow 0.2s, transform 0.1s;
}
.sq-btn:hover {
  background: linear-gradient(90deg, #d946ef 60%, #38bdf8 100%);
  box-shadow: 0 4px 16px rgba(236,72,153,0.13);
  transform: scale(1.04);
}
.sq-run {
  background: linear-gradient(90deg, #60a5fa 60%, #a78bfa 100%);
  color: #312e81;
}
.sq-run:hover {
  background: linear-gradient(90deg, #a78bfa 60%, #60a5fa 100%);
  color: #312e81;
}
.sq-toast {
  position: fixed;
  right: 1.5rem;
  top: 1.5rem;
  background: linear-gradient(90deg, #818cf8 60%, #f472b6 100%);
  color: #fdf2f8;
  padding: .7rem 1.2rem;
  border-radius: .7rem;
  font-weight: 700;
  display: none;
  z-index: 9999;
  box-shadow: 0 4px 16px rgba(168,85,247,0.13);
}
.progress-tracker {
  background: linear-gradient(135deg, #f5d0fe 60%, #bae6fd 100%);
  border: 2.5px solid #a5b4fc;
  padding: 1.2rem;
  border-radius: 1rem;
  margin: 1.2rem 0;
  color: #312e81;
  box-shadow: 0 2px 8px rgba(168,85,247,0.08);
}
.task-complete {
  color: #f472b6 !important;
  font-weight: bold;
}
.unlock-notification {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: linear-gradient(135deg, #818cf8 60%, #f472b6 100%);
  color: #fff7ed;
  padding: 28px 56px;
  border-radius: 20px;
  font-weight: 700;
  font-size: 20px;
  z-index: 10000;
  box-shadow: 0 20px 60px rgba(168,85,247,0.18);
  display: none;
  text-align: center;
}

.sq-card h3, .sq-card p, .sq-card label, .sq-card input, .sq-card select, .sq-card pre {
  color: #fdf2f8 !important;
}
.sq-card, .sq-card h3, .sq-card p, .sq-card label, .sq-card input, .sq-card select, .sq-card pre, .sq-card ul, .sq-card li {
  color: #fdf2f8 !important;
}
progress-tracker, .progress-tracker h3, .progress-tracker .status, .progress-tracker strong, .progress-tracker span, .progress-tracker div 
.sq-terminal, .sq-terminal * {
  color: #fdf2f8 !important;
}
</style>

<div class="progress-tracker">
  <h3 style="color:#2dd4bf;">🎯 Seattle Progress Tracker</h3>
  <div id="progress-display">
    <div id="task-archive">🗃️ Task 1: Archive Dish – <span class="status">Incomplete</span></div>
    <div id="task-harddelete">🗑️ Task 2: Hard Delete Cascade – <span class="status">Incomplete</span></div>
    <div id="task-analytics">📊 Task 3: Analytics Dashboard – <span class="status">Incomplete</span></div>
    <div id="task-seed">🌱 Task 4: Seed Seattle Dishes – <span class="status">Incomplete</span></div>
    <div id="task-view">👀 Task 5: View Archived/Active Lists – <span class="status">Incomplete</span></div>
  </div>
</div>

---

### 🧠 What Does DELETE Mean?

In databases, **DELETE** = cleaning up existing records — sometimes gently, sometimes permanently.  
There are **two main approaches**:

### 🗃️ Soft Delete (Archiving)
- Adds a `deleted_at` timestamp instead of erasing the record.  
- The data stays in the database but is hidden from normal queries (`WHERE deleted_at IS NULL`).  
- Allows easy “undo” or “restore” later.  
**Example:** When the Seattle restaurant closes, the *Clam Chowder in a Sourdough Bread Bowl* is archived — it disappears from the active menu but remains in the system for reporting.

### 🗑️ Hard Delete (Cascade)
- Permanently removes a record and all related rows (via **cascading delete**).  
- Cleans out join tables like `dish_ingredients` to prevent orphaned data.  
**Example:** If you fully remove the clam chowder, its linked ingredients (“clams,” “bread bowl,” “cream”) are also deleted — the dish is gone forever.

### 📊 Analytics Dashboard (GROUP BY)
- After cleaning up data, we can **analyze what remains**.  
- Use SQL `GROUP BY` and aggregate functions (`COUNT`, `AVG`, `SUM`) to reveal insights:  
  - Top ingredients used across all cities  
  - Average calories per city  
  - Number of dishes per category  
  - Active vs archived chowders  

**Analogy:**  
Your database is like a restaurant kitchen.  
Soft delete = putting an item in cold storage (it’s still there).  
Hard delete = tossing it out completely.  
Analytics = reviewing the kitchen log to see what’s sold, archived, or missing — keeping your menu sustainable and efficient.

---
<style>
/**** Remove the old white background and conflicting color rules ****/
.sq-card{background:unset;}
</style>

<!-- Progress Tracker -->
<div class="progress-tracker">
  <h3 style="color:#2dd4bf;">🎯 Seattle Progress Tracker</h3>
  <div id="progress-display">
    <div id="task-archive">🗃️ Task 1: Archive Dish – <span class="status">Incomplete</span></div>
    <div id="task-harddelete">🗑️ Task 2: Hard Delete Cascade – <span class="status">Incomplete</span></div>
    <div id="task-analytics">📊 Task 3: Analytics Dashboard – <span class="status">Incomplete</span></div>
    <div id="task-seed">🌱 Task 4: Seed Seattle Dishes – <span class="status">Incomplete</span></div>
    <div id="task-view">👀 Task 5: View Archived/Active Lists – <span class="status">Incomplete</span></div>
  </div>
  <div style="margin-top:1rem;padding:.75rem;background:rgba(13,148,136,.15);border-radius:.5rem;">
    <strong>Completion: <span id="completion-percentage">0%</span></strong>
    <div style="background:rgba(55,65,81,.5);height:8px;border-radius:4px;margin-top:.5rem;">
      <div id="progress-bar" style="background:linear-gradient(90deg,#10b981,#0d9488);height:100%;border-radius:4px;width:0%;transition:width .3s ease;"></div>
    </div>
  </div>
</div>

<div class="sq-toast" id="sqToast">Seattle +20 XP</div>
<div id="unlockNotification" class="unlock-notification">
  🎉 CRUD Complete!<br><small style="opacity:.9;font-size:14px;">Congratulations, Cleanup Crew!</small>
</div>

<!-- 🧼 Seattle Cleanup Lesson — DELETE & ANALYTICS (Interactive Edition, Fully Working) -->

<!-- 🗃️ Soft Delete -->
<div class="sq-card">
  <h3>🗃️ Soft Delete — Archive a Dish</h3>
  <p>
    When you <strong>soft delete</strong> a dish, you don’t remove it — you set <code>deleted_at</code>.
    This keeps data for later analysis or restoration.
  </p>
  <p><em>Example:</em> The <strong>Clam Chowder in a Sourdough Bread Bowl</strong> restaurant closes for renovation — we archive, not erase.</p>

  <label class="sq-label">🧩 Question: Why might a restaurant prefer a soft delete?</label>
  <select id="archive-quiz" class="sq-field">
    <option value="">-- choose an answer --</option>
    <option value="a">Because soft delete keeps records for future reports</option>
    <option value="b">Because soft delete frees up disk space</option>
    <option value="c">Because soft delete makes food tastier</option>
  </select>
  <button class="sq-btn" onclick="checkArchiveQuiz()">Check Answer</button>

  <div style="margin-top:1rem"></div>
  <label class="sq-label">Enter Dish ID to Archive (e.g., from Seeded List)</label>
  <input id="archive-id" class="sq-field" placeholder="enter dish id"/>
  <button class="sq-btn sq-run" onclick="runArchive()">Archive Dish</button>
  <pre id="terminal-archive" class="sq-terminal"></pre>
</div>

<!-- 🗑️ Hard Delete -->
<div class="sq-card">
  <h3>🗑️ Hard Delete — Permanent Removal</h3>
  <p>
    <strong>Hard delete</strong> removes the dish and any linked data (e.g., ingredients).  
    Once gone, it’s gone forever — like throwing away a spoiled clam chowder.
  </p>

  <label class="sq-label">🧩 Quick Check: What else must be deleted with the dish?</label>
  <input id="hard-quiz" class="sq-field" placeholder="type your answer (hint: join table name)"/>
  <button class="sq-btn" onclick="checkHardQuiz()">Check Answer</button>

  <div style="margin-top:1rem"></div>
  <label class="sq-label">Enter Dish ID to Hard Delete</label>
  <input id="hard-id" class="sq-field" placeholder="enter dish id"/>
  <button class="sq-btn sq-run" onclick="runHard()">Hard Delete</button>
  <pre id="terminal-hard" class="sq-terminal"></pre>
</div>

<!-- 📊 Analytics -->
<div class="sq-card">
  <h3>📊 Analytics Dashboard — GROUP BY Practice</h3>
  <p>
    After cleanup, you can analyze your data.  
    The backend groups dishes by city, category, or ingredient to uncover insights.
  </p>
  <ul style="margin-left:1.2rem; color:#23213a; font-weight:600;">
    <li>Top ingredients across all cities</li>
    <li>Average calories per city</li>
    <li>Number of dishes per category</li>
    <li>Active vs archived chowders</li>
  </ul>

  <label class="sq-label">🧩 Question: Which SQL clause groups rows for analysis?</label>
  <select id="analytics-quiz" class="sq-field">
    <option value="">-- choose an answer --</option>
    <option value="a">WHERE</option>
    <option value="b">GROUP BY</option>
    <option value="c">DELETE FROM</option>
  </select>
  <button class="sq-btn" onclick="checkAnalyticsQuiz()">Check Answer</button>

  <div style="margin-top:1rem"></div>
  <button class="sq-btn sq-run" onclick="runAnalytics()">Run Analytics</button>
  <pre id="terminal-analytics" class="sq-terminal"></pre>
</div>

<!-- 🌱 Seed Dishes -->
<div class="sq-card">
  <h3>🌱 Seed Seattle Dishes</h3>
  <p>Load sample data into your mock database — includes Clam Chowder, Salmon Bagel, and Vegan Soup.</p>
  <button class="sq-btn sq-run" onclick="seedSeattle()">Seed Seattle Dishes</button>
  <pre id="terminal-seedsea" class="sq-terminal"></pre>
</div>

<!-- 👀 View Dishes -->
<div class="sq-card">
  <h3>👀 View Active & Archived Lists</h3>
  <p>See which dishes are still active and which ones have been archived using <code>deleted_at</code>.</p>
  <button class="sq-btn sq-run" onclick="viewSeattle()">View Active & Archived</button>
  <pre id="terminal-viewsea" class="sq-terminal"></pre>
</div>

<!-- 🧠 Quiz + Action Logic -->
<script>
/* basic helpers if not yet defined */
if(typeof window.logTo!=="function"){
  window.logTo=(id,...msg)=>{
    const el=document.getElementById(id);
    if(!el)return;
    el.textContent+=(el.textContent?'\n':'')+msg.join(' ');
    el.scrollTop=el.scrollHeight;
  };
}
if(typeof window.showToast!=="function"){
  window.showToast=(txt,ms=2000)=>{
    const b=document.getElementById('sqToast');
    if(!b)return;
    b.textContent=txt;
    b.style.display='block';
    setTimeout(()=>b.style.display='none',ms);
  };
}
function flash(el,color){if(!el)return;el.style.transition='background 0.3s';el.style.background=color;setTimeout(()=>el.style.background='',600);}

/* ========== mock data setup ========== */
window.SeattleDB = window.SeattleDB || { dishes: [] };

function seedSeattle(){
  clearTerm('terminal-seedsea');
  SeattleDB.dishes = [
    {id:'1', name:'Clam Chowder', city:'Seattle', calories:450, deleted_at:null},
    {id:'2', name:'Salmon Bagel', city:'Seattle', calories:380, deleted_at:null},
    {id:'3', name:'Vegan Soup', city:'Seattle', calories:320, deleted_at:null}
  ];
  logTo('terminal-seedsea','🌱 Seeded 3 Seattle dishes.');
  showToast('Seattle dishes seeded — +10 XP');
  completeTask?.('seed');
}

/* helper: clear any terminal */
function clearTerm(id){const e=document.getElementById(id);if(e)e.textContent='';}

/* 🗃️ Archive Dish (soft delete) */
function runArchive(){
  clearTerm('terminal-archive');
  const id=document.getElementById('archive-id').value.trim();
  if(!id){logTo('terminal-archive','⚠️ Please enter a dish ID.');return;}
  const dish=SeattleDB.dishes.find(d=>d.id===id);
  if(!dish){logTo('terminal-archive','❌ Dish not found.');return;}
  if(dish.deleted_at){logTo('terminal-archive','⚠️ Already archived.');return;}
  dish.deleted_at=new Date().toISOString();
  logTo('terminal-archive',`✅ Archived: ${dish.name}`);
  showToast('Dish archived — +5 XP');
  flash(document.getElementById('terminal-archive'),'rgba(16,185,129,0.15)');
  completeTask?.('archive');
}

/* 🗑️ Hard Delete (permanent remove) */
function runHard(){
  clearTerm('terminal-hard');
  const id=document.getElementById('hard-id').value.trim();
  if(!id){logTo('terminal-hard','⚠️ Please enter a dish ID.');return;}
  const index=SeattleDB.dishes.findIndex(d=>d.id===id);
  if(index===-1){logTo('terminal-hard','❌ Dish not found.');return;}
  const [removed]=SeattleDB.dishes.splice(index,1);
  logTo('terminal-hard',`✅ Hard deleted: ${removed.name} and linked dish_ingredients.`);
  showToast('Dish hard deleted — +10 XP');
  flash(document.getElementById('terminal-hard'),'rgba(16,185,129,0.15)');
  completeTask?.('harddelete');
}

/* 📊 Analytics */
function runAnalytics(){
  clearTerm('terminal-analytics');
  if(!SeattleDB.dishes.length){logTo('terminal-analytics','⚠️ No data found. Seed dishes first.');return;}
  const active=SeattleDB.dishes.filter(d=>!d.deleted_at);
  const archived=SeattleDB.dishes.filter(d=>d.deleted_at);
  const avgCalories = (arr)=> arr.length? (arr.reduce((a,b)=>a+b.calories,0)/arr.length).toFixed(1):0;
  const avg=avgCalories(active);
  logTo('terminal-analytics',`Active dishes: ${active.length}\nArchived dishes: ${archived.length}\nAverage calories (active): ${avg}`);
  showToast('Analytics run complete — +15 XP');
  flash(document.getElementById('terminal-analytics'),'rgba(16,185,129,0.15)');
  completeTask?.('analytics');
}

/* 👀 View active vs archived */
function viewSeattle(){
  clearTerm('terminal-viewsea');
  if(!SeattleDB.dishes.length){logTo('terminal-viewsea','⚠️ No data found. Seed dishes first.');return;}
  const active=SeattleDB.dishes.filter(d=>!d.deleted_at);
  const archived=SeattleDB.dishes.filter(d=>d.deleted_at);
  logTo('terminal-viewsea',`Active Dishes (${active.length}):`,...active.map(d=>` - ${d.name} (${d.calories} cal)`),`\nArchived Dishes (${archived.length}):`,...archived.map(d=>` - ${d.name} (${d.calories} cal)`));
  showToast('Viewing dishes list');
  completeTask?.('view');
}

/* ========== quizzes ========== */
function checkArchiveQuiz(){
  const val=document.getElementById('archive-quiz').value,termId='terminal-archive',term=document.getElementById(termId);
  if(!val){logTo(termId,'⚠️ Please choose an answer first.');flash(term,'rgba(251,191,36,0.15)');return;}
  if(val==='a'){logTo(termId,'✅ Correct! Archiving keeps records for analytics and restoration.');showToast('+3 XP — You understood soft delete!');flash(term,'rgba(16,185,129,0.15)');}
  else{logTo(termId,'❌ Not quite. Soft delete preserves data for later reports.');flash(term,'rgba(239,68,68,0.15)');}
}
function checkHardQuiz(){
  const val=document.getElementById('hard-quiz').value.trim().toLowerCase(),termId='terminal-hard',term=document.getElementById(termId);
  if(!val){logTo(termId,'⚠️ Please enter your answer.');flash(term,'rgba(251,191,36,0.15)');return;}
  if(val.includes('dish_ingredient')){logTo(termId,'✅ Correct! The join table dish_ingredients must be deleted with the dish.');showToast('+3 XP — Cascade delete learned!');flash(term,'rgba(16,185,129,0.15)');}
  else{logTo(termId,'❌ Hint: It starts with "dish_" and links dishes to ingredients.');flash(term,'rgba(239,68,68,0.15)');}
}
function checkAnalyticsQuiz(){
  const val=document.getElementById('analytics-quiz').value,termId='terminal-analytics',term=document.getElementById(termId);
  if(!val){logTo(termId,'⚠️ Please choose an answer.');flash(term,'rgba(251,191,36,0.15)');return;}
  if(val==='b'){logTo(termId,'✅ Correct! GROUP BY groups rows for aggregate calculations.');showToast('+3 XP — Analytics concept clear!');flash(term,'rgba(16,185,129,0.15)');}
  else{logTo(termId,'❌ Not quite. The correct answer is GROUP BY.');flash(term,'rgba(239,68,68,0.15)');}
}
</script>

<<<<<<< HEAD
=======
<script>
(function(){
  window.taskProgress={archive:false,harddelete:false,analytics:false,seed:false,view:false};

  function loadTaskProgress(){
    const saved=localStorage.getItem('sea_task_progress');
    if(saved)try{Object.assign(window.taskProgress,JSON.parse(saved));}catch{}
    updateProgressDisplay();
  }
  function saveTaskProgress(){localStorage.setItem('sea_task_progress',JSON.stringify(window.taskProgress));}
  window.completeTask=function(t){
    if(!window.taskProgress[t]){
      window.taskProgress[t]=true;saveTaskProgress();updateProgressDisplay();checkModuleCompletion();
    }
  };
  function updateProgressDisplay(){
    const tasks=['archive','harddelete','analytics','seed','view'];let done=0;
    tasks.forEach(x=>{
      const el=document.getElementById(`task-${x}`);if(!el)return;
      const s=el.querySelector('.status');
      if(window.taskProgress[x]){s.textContent='Complete ✅';s.className='status task-complete';done++;}
      else{s.textContent='Incomplete';s.className='status';}
    });
    const pct=Math.round((done/tasks.length)*100);
    document.getElementById('completion-percentage').textContent=`${pct}%`;
    document.getElementById('progress-bar').style.width=`${pct}%`;
  }
  function checkModuleCompletion(){
    if(Object.values(window.taskProgress).every(Boolean)){
      document.getElementById('unlockNotification').style.display='block';
      setTimeout(()=>document.getElementById('unlockNotification').style.display='none',4000);
      unlockNextCity();
    }
  }
  function unlockNextCity(){
    try{
      const saved=localStorage.getItem('city_progress');
      let gp={unlockedCities:[0,1,2,3],completedCities:[],totalCitiesCompleted:0};
      if(saved)gp=JSON.parse(saved);
      if(!gp.completedCities.includes(3)){gp.completedCities.push(3);gp.totalCitiesCompleted++;}
      localStorage.setItem('city_progress',JSON.stringify(gp));
    }catch(e){console.error(e);}
  }
  window.showToast=(txt,ms=2000)=>{const b=document.getElementById('sqToast');b.textContent=txt;b.style.display='block';setTimeout(()=>b.style.display='none',ms);};
  window.logTo=(id,...p)=>{const e=document.getElementById(id);if(!e)return;const t=p.map(a=>typeof a==='object'?JSON.stringify(a,null,2):String(a)).join(' ');e.textContent+=(e.textContent?'\n':'')+t;e.scrollTop=e.scrollHeight;};
  window.clearTerm=id=>{const e=document.getElementById(id);if(e)e.textContent='';};
  loadTaskProgress();
})();
</script>
>>>>>>> 86e2929be71f26422d30cf5f5aadd6712613c820
