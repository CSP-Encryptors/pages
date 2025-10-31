---
layout: opencs
microblog: True 
title: "San Diego"    
description: "City One of Food - San Diego"
permalink: /west-coast/food/SD/
parent: "San Diego"
team: "Syntax Terrors"
submodule: 1
categories: [CSP]
tags: [food, sandiego, create, crud]
author: "Syntax Terrors"
date: 2025-10-24
footer:
  home: /west-coast/food/
  next: /west-coast/food/LA/
---

# 🏙️ San Diego — CREATE (CRUD Submodule 1)

**Quest Chapter:** *The Food Route*  

<br>

**Focus:** C in CRUD — **CREATE**  

<br>

**Location:** San Diego, CA ☀️🌮

<br>

Welcome! This interactive page lets learners *actually* create dishes, ingredients, and join records via simulated API calls — right in the browser.

---

<style>
/* === Theme variables (dark-first) === */
:root{
  --bg-0: #060712;            /* page background deep */
  --bg-1: rgba(8,12,25,0.75); /* card background translucent */
  --card-border: rgba(99,102,241,0.18);
  --muted: #94a3b8;
  --text: #e6eef6;
  --accent-1: #8b5cf6;  /* purple */
  --accent-2: #3b82f6;  /* blue */
  --accent-3: #06b6d4;  /* teal/cyan */
  --success: #10b981;
  --danger: #fb7185;
  --glass: rgba(255,255,255,0.03);
  --terminal-bg: #071827;
  --input-border: rgba(148,163,184,0.12);
  --input-bg: rgba(255,255,255,0.02);
  --code-bg: linear-gradient(180deg, rgba(8,12,25,0.6), rgba(12,16,28,0.6));
}

/* Light mode overrides (toggleable) */
body.light {
  --bg-0: #f8fafc;
  --bg-1: rgba(255,255,255,0.96);
  --card-border: rgba(99,102,241,0.14);
  --muted: #6b7280;
  --text: #0b1220;
  --glass: rgba(0,0,0,0.02);
  --terminal-bg: #0b1220;
  --input-bg: #ffffff;
  --input-border: rgba(2,6,23,0.06);
  --code-bg: linear-gradient(180deg, #f8fafc, #eef2ff);
}

/* Base page */
body {
  background: radial-gradient(1200px 500px at 10% 10%, rgba(59,130,246,0.06), transparent),
              radial-gradient(900px 400px at 90% 80%, rgba(139,92,246,0.05), transparent),
              var(--bg-0);
  color: var(--text);
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
  line-height: 1.5;
  padding: 1.25rem;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Headings */
h1, h2, h3, h4 { color: #e6e9ff; margin-top: 0.25rem; }
strong { color: #f8f9ff; }

/* Card look (no harsh white) */
.sq-card {
  border-radius: 0.75rem;
  padding: 1rem;
  background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
  border: 1px solid var(--card-border);
  box-shadow: 0 8px 32px rgba(2,6,23,0.45);
  margin-bottom: 1rem;
  backdrop-filter: blur(8px) saturate(1.05);
  transition: transform 0.16s ease, box-shadow 0.2s ease;
}
.sq-card:hover { transform: translateY(-4px); box-shadow: 0 18px 48px rgba(59,130,246,0.08); }

/* Terminal */
.sq-terminal {
  background: var(--terminal-bg);
  color: var(--text);
  padding: 0.75rem;
  border-radius: 0.5rem;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, "Roboto Mono", "Courier New", monospace;
  font-size: 0.9rem;
  min-height: 3rem;
  white-space: pre-wrap;
  overflow: auto;
  border: 1px solid rgba(255,255,255,0.02);
  box-shadow: inset 0 -1px 0 rgba(255,255,255,0.02);
}

/* Buttons */
.sq-btn {
  background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
  color: var(--text);
  border: 1px solid rgba(255,255,255,0.04);
  padding: 0.55rem 0.9rem;
  border-radius: 0.45rem;
  cursor: pointer;
  font-weight: 600;
  transition: transform 0.12s ease, box-shadow 0.12s ease, background 0.12s ease;
}
.sq-btn:active { transform: translateY(1px) scale(0.998); }

.sq-run {
  background: linear-gradient(90deg, var(--accent-3), rgba(6,182,212,0.15));
  border: 1px solid rgba(6,182,212,0.18);
  color: white;
  box-shadow: 0 8px 20px rgba(6,182,212,0.12);
}

/* Toast */
.sq-toast {
  position: fixed;
  right: 1rem;
  top: 1rem;
  background: linear-gradient(135deg, rgba(139,92,246,0.92), rgba(59,130,246,0.92));
  color: white;
  padding: 0.6rem 1rem;
  border-radius: 0.5rem;
  font-weight: 700;
  display: none;
  z-index: 9999;
  box-shadow: 0 12px 36px rgba(11,12,35,0.5);
}

/* Labels / fields */
.sq-label { display:block; margin-bottom:0.45rem; font-weight:700; color: #e6ebff; }
.sq-field {
  padding:0.6rem;
  border-radius:0.5rem;
  border:1px solid var(--input-border);
  width:100%;
  background: var(--input-bg);
  color: var(--text);
  outline: none;
  box-shadow: inset 0 -1px 0 rgba(255,255,255,0.01);
  font-size: 0.95rem;
}
.sq-field::placeholder { color: var(--muted); }

/* Code editor area */
.code-editor {
  width:100%;
  min-height:120px;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, "Roboto Mono", "Courier New", monospace;
  padding:0.75rem;
  border-radius:0.6rem;
  border:1px dashed rgba(148,163,184,0.08);
  background: var(--code-bg);
  color: var(--text);
  resize: vertical;
  white-space: pre-wrap;
  overflow: auto;
  box-shadow: inset 0 -6px 24px rgba(2,6,23,0.55);
}

/* small helper */
.small { font-size:0.85rem; color: var(--muted); }

/* Progress tracker */
.progress-tracker {
  background: linear-gradient(135deg, rgba(139,92,246,0.06), rgba(59,130,246,0.04));
  border: 1px solid rgba(99,102,241,0.14);
  padding: 1rem;
  border-radius: 0.75rem;
  margin: 1rem 0;
  color: var(--text);
  box-shadow: 0 8px 30px rgba(2,6,23,0.45);
}
.progress-tracker h3 { color: #dbe4ff; margin: 0 0 0.6rem 0; }
.progress-tracker .task-item { margin: 0.35rem 0; color: var(--muted); }

/* Status text */
.task-complete { color: var(--success) !important; font-weight: 700; }

/* Unlock notification (center modal) */
.unlock-notification {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: linear-gradient(135deg, rgba(139,92,246,0.98), rgba(59,130,246,0.98));
  color: white;
  padding: 20px 36px;
  border-radius: 14px;
  font-weight: 700;
  font-size: 16px;
  z-index: 10000;
  box-shadow: 0 30px 80px rgba(11,12,35,0.6);
  display: none;
  text-align: center;
}


/* Editor tool row */
.editor-actions { display:flex; gap:0.5rem; align-items:center; flex-wrap:wrap; }

/* small responsive */
@media (max-width: 720px) {
  body { padding: 0.75rem; }
  .sq-card { padding: 0.8rem; }
  .next-city-btn { right: 12px; left: auto; bottom: 12px; font-size: 0.95rem; padding: 0.6rem 1rem; }
}

/* Tiny focus ring for accessibility */
.sq-field:focus, .code-editor:focus, .sq-btn:focus { box-shadow: 0 0 0 4px rgba(59,130,246,0.12); border-color: rgba(59,130,246,0.22); outline: none; }

/* small inline remove button styling */
.ingredients-remove-btn {
  background: transparent;
  color: var(--muted);
  border: none;
  cursor: pointer;
  font-weight: 700;
  margin-left: 8px;
}
.ingredients-remove-btn:hover { color: var(--accent-2); text-decoration: underline; }

/* Custom styles for collapsible details/summary */
summary {
    font-weight: 700;
    font-size: 1.1rem;
    cursor: pointer;
    padding: 0.5rem 0;
    color: #e6e9ff;
    list-style-position: inside;
    list-style-type: '▶ ';
}
details[open] > summary {
    list-style-type: '▼ ';
}
</style>

<!-- Dark mode toggle -->
<div style="display:flex; justify-content:flex-end; gap:0.5rem; margin-bottom:0.75rem;">
  <button id="themeToggleBtn" class="sq-btn" title="Toggle dark / light">🌙 Dark</button>
</div>

<!-- Progress Tracker -->
<div class="progress-tracker">
  <h3>🎯 San Diego Progress Tracker</h3>
  <div id="progress-display">
    <div id="task-fishtaco" class="task-item">Task 1: Fish Taco Class - <span class="status">Incomplete</span></div>
    <div id="task-burritocart" class="task-item">Task 2: Burrito Cart - <span class="status">Incomplete</span></div>
    <div id="task-bajabowl" class="task-item">Task 3: Build Baja Bowl - <span class="status">Incomplete</span></div>
    <div id="task-seed" class="task-item">Task 4: Seed Pantry - <span class="status">Incomplete</span></div>
    <div id="task-view" class="task-item">Task 5: View Pantry - <span class="status">Incomplete</span></div>
  </div>
  <div style="margin-top: 1rem; padding: 0.75rem; background: rgba(255,255,255,0.01); border-radius: 0.5rem;">
    <strong>Completion: <span id="completion-percentage">0%</span></strong>
    <div style="background: rgba(2,6,23,0.45); height: 8px; border-radius: 6px; margin-top: 0.5rem;">
      <div id="progress-bar" style="background: linear-gradient(90deg, var(--success), #059669); height: 100%; border-radius: 4px; width: 0%; transition: width 0.3s ease;"></div>
    </div>
  </div>
</div>


<div class="sq-toast" id="sqToast">Baja Bowl added — +50 XP</div>

<!-- Unlock Notification -->
<div id="unlockNotification" class="unlock-notification">
  🎉 Los Angeles Unlocked!<br>
  <small style="font-size: 13px; opacity: 0.95;">You can now continue to the next city!</small>
</div>

- **🧠 What Does CREATE Mean?**  
  - In databases, **CREATE** = inserting new records (e.g., dishes, ingredients, or join rows).  
  <br>
  - On the web, a client form sends a POST /api/dishes request.  
  <br>
  - The server creates:
    - a new **dish** record,  
    - any missing **ingredient** entries, and  
    - **dish_ingredients** join records — ideally inside a single transaction (all succeed or all fail).  
  <br>
  - Analogy: your database is like a **kitchen pantry**. Adding a dish = adding a **recipe card** and ensuring all the required ingredients already exist in the pantry.


# %% Interactive: Mock Backend & Utilities

<div class="sq-card">
  <div style="display:flex; gap:0.5rem; align-items:center;">
    <strong>Initialization:</strong>
    <button class="sq-btn sq-run" onclick="initMock()">Initialize / Reset Mock API</button>
    <span class="small" style="margin-left:0.5rem">Resets mock DB (localStorage) — use this to start fresh.</span>
  </div>

  <div style="margin-top:0.75rem">
    <div class="sq-terminal" id="terminal-init">Terminal: ready</div>
  </div>
</div>

<script>
/* Mock API + utilities for this page. Outputs go to terminal elements using logTo(id,...) */
(function () {
  // Task completion tracking
  window.taskProgress = {
    fishtaco: false,
    burritocart: false,
    bajabowl: false,
    seed: false,
    view: false
  };

  // Load progress from localStorage
  function loadTaskProgress() {
    const saved = localStorage.getItem('sd_task_progress');
    if (saved) {
      try {
        window.taskProgress = { ...window.taskProgress, ...JSON.parse(saved) };
      } catch (e) {
        console.error('Error loading task progress:', e);
      }
    }
    updateProgressDisplay();
  }

  // Save progress to localStorage
  function saveTaskProgress() {
    try {
      localStorage.setItem('sd_task_progress', JSON.stringify(window.taskProgress));
    } catch (e) {
      console.error('Error saving task progress:', e);
    }
  }

  // Mark task as complete
  window.completeTask = function(taskName) {
    if (!window.taskProgress[taskName]) {
      window.taskProgress[taskName] = true;
      saveTaskProgress();
      updateProgressDisplay();
      checkModuleCompletion();
    }
  };

  // Update progress display
  function updateProgressDisplay() {
    const tasks = ['fishtaco', 'burritocart', 'bajabowl', 'seed', 'view'];
    let completedCount = 0;

    tasks.forEach(task => {
      const element = document.getElementById(`task-${task}`);
      if (element) {
        const statusSpan = element.querySelector('.status');
        if (window.taskProgress[task]) {
          statusSpan.textContent = 'Complete ✅';
          statusSpan.className = 'status task-complete';
          completedCount++;
        } else {
          statusSpan.textContent = 'Incomplete';
          statusSpan.className = 'status';
        }
      }
    });

    // Update progress bar
    const percentage = Math.round((completedCount / tasks.length) * 100);
    const percentageElement = document.getElementById('completion-percentage');
    const progressBar = document.getElementById('progress-bar');
    
    if (percentageElement) percentageElement.textContent = `${percentage}%`;
    if (progressBar) progressBar.style.width = `${percentage}%`;
  }

  // Check if module is complete and unlock next city
  function checkModuleCompletion() {
    const allTasks = Object.values(window.taskProgress);
    const isComplete = allTasks.every(task => task === true);
    
    if (isComplete) {
      const notification = document.getElementById('unlockNotification');
      if (notification) {
        notification.style.display = 'block';
        setTimeout(() => notification.style.display = 'none', 4000);
      }
      unlockNextCity();
      console.log('🎉 San Diego module completed! Los Angeles should now be unlocked.');
    }
  }

  // Fallback unlock methods
  function unlockNextCity() {
    try {
      const saved = localStorage.getItem('city_progress'); 
      let gameProgress = saved ? JSON.parse(saved) : { unlockedCities:[0], completedCities:[], totalCitiesCompleted:0 };
      if (!gameProgress.completedCities.includes(0)) {
        gameProgress.completedCities.push(0);
        gameProgress.totalCitiesCompleted++;
      }
      if (!gameProgress.unlockedCities.includes(1)) {
        gameProgress.unlockedCities.push(1);
      }
      localStorage.setItem('city_progress', JSON.stringify(gameProgress));
      console.log('✅ Progress updated:', gameProgress);
    } catch (e) {
      console.error('Unlock failed:', e);
    }
  }

  // Helpers
  window.logTo = function (id, ...parts) {
    const el = document.getElementById(id);
    if (!el) return;
    const text = parts.map(p => typeof p === 'object' ? JSON.stringify(p, null, 2) : String(p)).join(' ');
    el.textContent += (el.textContent ? '\n' : '') + text;
    el.scrollTop = el.scrollHeight;
  };

  window.clearTerm = id => { const el = document.getElementById(id); if (el) el.textContent = ''; };

  class MockDB {
    constructor() { this.load(); }
    load() {
      const raw = localStorage.getItem('foodquest_sd_db_v1');
      if (raw) {
        const parsed = JSON.parse(raw);
        this.dishes = parsed.dishes || [];
        this.ingredients = parsed.ingredients || [];
        this.dishIngredients = parsed.dishIngredients || [];
      } else {
        this.dishes = [];
        this.ingredients = [];
        this.dishIngredients = [];
      }
    }
    save() {
      localStorage.setItem('foodquest_sd_db_v1', JSON.stringify({
        dishes: this.dishes, ingredients: this.ingredients, dishIngredients: this.dishIngredients
      }));
    }
    reset() { this.dishes=[]; this.ingredients=[]; this.dishIngredients=[]; this.save(); }
  }

  class MockAPI {
    constructor() { this.db = new MockDB(); }
    async postDish(payload) {
      if (!payload || !payload.name || !payload.category || !Array.isArray(payload.ingredients) || isNaN(payload.calories))
        return { status:400, body:{error:"Missing required fields"} };
      const dish = { id:Date.now().toString(36), ...payload, createdAt:new Date().toISOString() };
      this.db.dishes.push(dish);
      this.db.save();
      return { status:201, body:dish };
    }
    async postBulk(dishesArray) {
      if (!Array.isArray(dishesArray)) return { status:400, body:{error:"Expected array"} };
      const created = [];
      for (const d of dishesArray) {
        const res = await this.postDish(d);
        if (res.status !== 201) return { status:500, body:{error:"Bulk insert failed"} };
        created.push(res.body);
      }
      return { status:201, body:created };
    }
    async getDishes(query={}) {
      const city = (query.city||'sd').toLowerCase();
      return this.db.dishes.filter(d => (d.city||'sd').toLowerCase()===city);
    }
    reset() { this.db.reset(); }
  }

  window.MockAPIInstance = new MockAPI();

  window.initMock = function() {
    window.MockAPIInstance.reset();
    window.logTo('terminal-init','[MockAPI] Reset DB. You can seed or create dishes now.');
    showToast("Mock DB reset");
  };

  window.showToast = function(text, ms=3000){
    const b=document.getElementById('sqToast');
    b.textContent=text;
    b.style.display='block';
    setTimeout(()=>b.style.display='none',ms);
  };

  if (!localStorage.getItem('foodquest_sd_db_v1')) {
    window.MockAPIInstance.db.save();
    window.logTo('terminal-init','[MockAPI] Initialized new DB. Try seeding!');
  } else {
    window.logTo('terminal-init','[MockAPI] DB loaded from localStorage.');
  }

  loadTaskProgress();
})();
</script>

---

- **⚙️ How this interactive page works:**  
  - Each task includes an editable **code area** (or input form) and a **Run** button.  
  - Running code appends output to the **terminal area** below that task.  
  <br>
  - The page uses a **mock backend (MockAPI)** that simulates:  
    - POST /api/dishes  
    - POST /api/dishes/bulk  
    - GET /api/dishes?city=sd  
  <br>
  - Data is stored in **localStorage**, so progress **persists** across refreshes.  
  - When creating the **Baja Bowl**, a toast appears showing “+50 XP 🎉”.

<br>

<!-- Task 1 -->
<details open>
  <summary>Task 1: Fish Taco Class</summary>
  <div class="sq-card">
    <div class="sq-label">Describe & implement the <strong>FishTaco</strong> class (id, fishType, toppings[], sauce, price, spiceLevel) and method <code>calculateTotalPrice()</code> (<em>8% tax</em>). Throw error if fishType missing.</div>
    <textarea id="code-fishtaco" class="code-editor">
// class FishTaco { ... } - edit or run the example
class FishTaco {
  constructor(id, fishType, toppings = [], sauce, price = 0, spiceLevel = "Mild") {
    if (!fishType) throw new Error("Fish type required");
    this.id = id;
    this.fishType = fishType;
    this.toppings = Array.isArray(toppings) ? toppings : [];
    this.sauce = sauce || null;
    this.price = Number(price) || 0;
    this.spiceLevel = spiceLevel;
  }

  calculateTotalPrice() {
    // add 8% tax, round to 2 decimals
    return Math.round((this.price * 1.08) * 100) / 100;
  }
}

// sample usage:
const taco = new FishTaco("t1", "Mahi-Mahi", ["cabbage","lime","pico"], "chipotle", 5.99, "Medium");
console.log("Created:", taco);
console.log("Total price:", taco.calculateTotalPrice().toFixed(2));

// Mark task as complete when run successfully
completeTask('fishtaco');
    </textarea>
    <div style="margin-top:0.5rem" class="editor-actions">
      <button class="sq-btn sq-run" onclick="runEditor('code-fishtaco','terminal-fishtaco')">Run</button>
      <button class="sq-btn" onclick="copyEditor('code-fishtaco')">Copy</button>
    </div>
    <pre id="terminal-fishtaco" class="sq-terminal"></pre>
  </div>
</details>

<!-- Task 2 -->
<details>
  <summary>Task 2: BurritoCart</summary>
  <div class="sq-card">
    <div class="sq-label">Implement <strong>BurritoCart</strong> with methods <code>addBurrito()</code>, <code>removeBurrito()</code>, <code>getTotalPrice()</code>, <code>getBurritosByFilling()</code>.</div>
    <textarea id="code-burritocart" class="code-editor">
// BurritoCart implementation
class BurritoCart {
  constructor() {
    this.burritos = [];
  }
  addBurrito(burrito) {
    if (!burrito || typeof burrito !== 'object') throw new Error('Invalid burrito');
    this.burritos.push(burrito);
  }
  removeBurrito(index) {
    if (index < 0 || index >= this.burritos.length) return;
    this.burritos.splice(index,1);
  }
  getTotalPrice() { return this.burritos.reduce((s,b)=>s+(Number(b.price)||0),0); }
  getBurritosByFilling(filling) { return this.burritos.filter(b => b.filling === filling); }
}

// example
const cart = new BurritoCart();
cart.addBurrito({ name: "California Burrito", filling: "Carne Asada", price: 8.5 });
cart.addBurrito({ name: "Veggie Burrito", filling: "Beans", price: 7.0 });
console.log("Cart:", cart.burritos);
console.log("Total:", cart.getTotalPrice());
console.log("Carne Asada burritos:", cart.getBurritosByFilling("Carne Asada"));

// Mark task as complete when run successfully
completeTask('burritocart');
    </textarea>
    <div style="margin-top:0.5rem" class="editor-actions">
      <button class="sq-btn sq-run" onclick="runEditor('code-burritocart','terminal-burritocart')">Run</button>
      <button class="sq-btn" onclick="copyEditor('code-burritocart')">Copy</button>
    </div>
    <pre id="terminal-burritocart" class="sq-terminal"></pre>
  </div>
</details>

<!-- Task 3 -->
<details>
  <summary>Task 3: Build the Baja Bowl</summary>
  <div class="sq-card">
    <div class="sq-label">Use the form to build a <strong>Baja Bowl</strong>. Required fields: <em>name, category, ingredients (name, qty, unit), calories</em>. Photo may be a URL or uploaded file (stored as data URL).</div>
    <div style="display:grid; grid-template-columns: 1fr; gap:0.5rem;">
      <label class="sq-label">Dish name</label>
      <input id="dish-name" class="sq-field" placeholder="Baja Bowl" value="Baja Bowl" />

      <label class="sq-label">Category</label>
      <input id="dish-category" class="sq-field" placeholder="Healthy" value="Healthy" />

      <label class="sq-label">Calories</label>
      <input id="dish-calories" type="number" class="sq-field" placeholder="600" value="600" />

      <label class="sq-label">Photo URL (optional)</label>
      <input id="dish-photo" class="sq-field" placeholder="https://..." />

      <label class="sq-label">Add Ingredients (name, qty, unit)</label>
      <div style="display:flex; gap:0.5rem;">
        <input id="ing-name" class="sq-field" placeholder="avocado" />
        <input id="ing-qty" class="sq-field" placeholder="1" />
        <input id="ing-unit" class="sq-field" placeholder="cup" />
        <button class="sq-btn" onclick="addIngredient()">Add</button>
      </div>

      <div id="ingredients-list" class="small" style="margin-top:0.5rem">No ingredients yet</div>

      <div style="display:flex; gap:0.5rem; margin-top:0.75rem;">
        <button class="sq-btn sq-run" onclick="runCreateForm()">Create Dish (POST)</button>
        <button class="sq-btn" onclick="clearForm()">Clear</button>
      </div>

      <div style="margin-top:0.5rem">
        <div id="terminal-create" class="sq-terminal"></div>
      </div>
    </div>
  </div>
</details>

<script>
(function(){
  window._localIngredientBuffer = [];
  window.addIngredient = function() {
    const name = document.getElementById('ing-name').value.trim();
    const qty = document.getElementById('ing-qty').value.trim();
    const unit = document.getElementById('ing-unit').value.trim();
    if (!name) { alert('Ingredient name required'); return; }
    window._localIngredientBuffer.push({ name, qty: qty || null, unit: unit || null });
    document.getElementById('ing-name').value = '';
    document.getElementById('ing-qty').value = '';
    document.getElementById('ing-unit').value = '';
    renderIngredientList();
  };

  window.renderIngredientList = function() {
    const el = document.getElementById('ingredients-list');
    if (!window._localIngredientBuffer.length) { el.textContent = 'No ingredients yet'; return; }
    el.innerHTML = window._localIngredientBuffer.map((ing,i) => {
      return `${i+1}. ${ing.name} — ${ing.qty||''} ${ing.unit||''} <button class="ingredients-remove-btn" onclick="removeIngredient(${i})">remove</button>`;
    }).join('<br>');
  };

  window.removeIngredient = function(i) { window._localIngredientBuffer.splice(i,1); renderIngredientList(); };

  window.clearForm = function() {
    document.getElementById('dish-name').value = '';
    document.getElementById('dish-category').value = '';
    document.getElementById('dish-calories').value = '';
    document.getElementById('dish-photo').value = '';
    window._localIngredientBuffer = [];
    renderIngredientList();
    clearTerm('terminal-create');
  };

  window.runCreateForm = async function() {
    clearTerm('terminal-create');
    const name = document.getElementById('dish-name').value.trim();
    const category = document.getElementById('dish-category').value.trim();
    const calories = parseInt(document.getElementById('dish-calories').value);
    const photo = document.getElementById('dish-photo').value.trim() || null;
    const ingredients = window._localIngredientBuffer.slice();

    // client-side validation
    if (!name || !category || isNaN(calories) || !ingredients.length) {
      logTo('terminal-create', '[Client] Validation failed: name, category, calories, and at least 1 ingredient required');
      return;
    }

    const payload = { name, category, calories, photo, ingredients, city: 'sd' };

    logTo('terminal-create', '[Client] Sending POST /api/dishes', payload);

    // call mock API
    const res = await window.MockAPIInstance.postDish(payload);
    if (res.status === 201) {
      logTo('terminal-create', '[Server] 201 Created', res.body);
      showToast(res.body.name + ' added — +50 XP');
      completeTask('bajabowl'); // Mark task as complete
    } else {
      logTo('terminal-create', '[Server] Error', res);
    }
  };
})();
</script>

<!-- Task 4 -->
<details>
  <summary>Task 4: Programmatic POST & Unit Test</summary>
  <div class="sq-card">
    <div class="sq-label">Simulate a POST /api/dishes call programmatically (JS). There is also a simple unit test runner below to assert 201 and returned resource.</div>
    <textarea id="code-post" class="code-editor">
// Example programmatic POST using MockAPIInstance
(async function(){
  const payload = {
    name: "Carne Asada Fries",
    category: "Fusion",
    calories: 900,
    photo: null,
    ingredients: [
      { name: "fries", qty: "1", unit: "plate" },
      { name: "steak", qty: "150", unit: "g" },
      { name: "cheese", qty: "50", unit: "g" }
    ],
    city: "sd"
  };

  const res = await MockAPIInstance.postDish(payload);
  console.log("Status:", res.status);
  console.log("Body:", res.body);
})();
    </textarea>
    <div style="margin-top:0.5rem" class="editor-actions">
      <button class="sq-btn sq-run" onclick="runEditor('code-post','terminal-post')">Run</button>
      <button class="sq-btn" onclick="copyEditor('code-post')">Copy</button>
    </div>
    <pre id="terminal-post" class="sq-terminal"></pre>
    <div style="margin-top:0.75rem;">
      <button class="sq-btn sq-run" onclick="runUnitTest()">Run Unit Test: POST returns 201 & created resource</button>
      <div id="terminal-test" class="sq-terminal" style="margin-top:0.5rem"></div>
    </div>
  </div>
</details>

<script>
window.runUnitTest = async function() {
  clearTerm('terminal-test');
  const payload = {
    name: "Acai Bowl",
    category: "Breakfast",
    calories: 450,
    ingredients: [{ name: "acai", qty: "1", unit: "bowl" }],
    city: "sd"
  };
  const res = await MockAPIInstance.postDish(payload);
  if (res.status === 201 && res.body && res.body.name === payload.name) {
    logTo('terminal-test', '✅ Unit Test Passed: POST returned 201 and resource created');
    logTo('terminal-test', JSON.stringify(res.body, null, 2));
  } else {
    logTo('terminal-test', '❌ Unit Test Failed', JSON.stringify(res, null, 2));
  }
};
</script>

<!-- Task 5 -->
<details>
  <summary>Task 5: Seed Pantry (Bulk POST)</summary>
  <div class="sq-card">
    <div class="sq-label">Seed the San Diego pantry with at least three dishes (Fish Tacos, California Burrito, Baja Bowl)</div>
    <div style="display:flex; gap:0.5rem;">
      <button class="sq-btn sq-run" onclick="seedPantry()">Seed Pantry</button>
      <button class="sq-btn" onclick="clearTerm('terminal-seed')">Clear</button>
    </div>
    <pre id="terminal-seed" class="sq-terminal" style="margin-top:0.5rem"></pre>
  </div>
</details>

<script>
window.seedPantry = async function() {
  clearTerm('terminal-seed');
  const seed = [
    { name: "Fish Tacos (Baja-style)", category: "Seafood", calories: 420, ingredients: [{name:"fish", qty:"2", unit:"tacos"}], city:'sd' },
    { name: "California Burrito", category: "Mexican Fusion", calories: 800, ingredients: [{name:"potatoes", qty:"1", unit:"cup"}], city:'sd' },
    { name: "Baja Bowl", category: "Healthy Bowl", calories: 390, ingredients: [{name:"rice", qty:"1", unit:"cup"}], city:'sd' },
  ];
  logTo('terminal-seed', '[Client] Sending bulk seed...');
  const res = await MockAPIInstance.postBulk(seed);
  if (res.status === 201) {
    logTo('terminal-seed', '✅ Seed success:', res.body);
    completeTask('seed'); // Mark task as complete
  } else {
    logTo('terminal-seed', '❌ Seed failed', res);
  }
};
</script>

<!-- Task 6 -->
<details>
  <summary>Task 6: View Pantry</summary>
  <div class="sq-card">
    <div class="sq-label">View the San Diego pantry (GET /api/dishes?city=sd)</div>
    <div style="display:flex; gap:0.5rem;">
      <button class="sq-btn sq-run" onclick="viewPantry()">View Pantry</button>
      <button class="sq-btn" onclick="clearTerm('terminal-pantry')">Clear</button>
    </div>
    <pre id="terminal-pantry" class="sq-terminal" style="margin-top:0.5rem"></pre>
  </div>
</details>

<script>
window.viewPantry = async function() {
  clearTerm('terminal-pantry');
  const dishes = await MockAPIInstance.getDishes({ city: 'sd' });
  if (!dishes.length) {
    logTo('terminal-pantry','[Server] 200 OK — No dishes found for city=sd. Try seeding.');
    return;
  }
  logTo('terminal-pantry','[Server] 200 OK — Dishes for city=sd:');
  dishes.forEach(d => logTo('terminal-pantry', JSON.stringify(d, null, 2)));
  completeTask('view'); // Mark task as complete
};
</script>

---
---

## 🎉 Module Complete — San Diego

Congratulations! You've successfully completed **CRUD: CREATE** in San Diego. All tasks — Fish Tacos, California Burrito, Baja Bowl, and the interactive pantry — are done. ✅  

Your **Baja Bowl** creation earned you **+50 XP** and the **"First Insert"** badge! 🏆  

The next city awaits: **Los Angeles — READ module unlocked!** 🌆  
Click through to begin exploring **searching, filtering, and viewing dishes** in LA.


<script>
/* utilities used by editors */
function runEditor(editorId, termId) {
  clearTerm(termId);
  const code = document.getElementById(editorId).value;
  // capture console
  const term = document.getElementById(termId);
  const originalConsole = window.console;
  const fakeConsole = {
    log: (...args) => { logTo(termId, ...args); },
    error: (...args) => { logTo(termId, 'ERROR:', ...args); },
    warn: (...args) => { logTo(termId, 'WARN:', ...args); },
  };
  try {
    window.console = fakeConsole;
    // eslint-disable-next-line no-new-func
    const fn = new Function(code);
    const result = fn();
    if (result && typeof result.then === 'function') {
      result.then(r => window.console.log('[Promise resolved]', r)).catch(e => window.console.error(e));
    }
  } catch (err) {
    logTo(termId, 'Exception:', err && err.stack ? err.stack : String(err));
  } finally {
    window.console = originalConsole;
  }
}

function copyEditor(editorId) {
  const code = document.getElementById(editorId).value;
  navigator.clipboard?.writeText(code).then(()=> alert('Code copied to clipboard'), ()=> alert('Copy failed — try selecting and Ctrl+C'));
}

// small helper used above
function clearTerm(id) { const el = document.getElementById(id); if (el) el.textContent = ''; }

/* Theme toggle: default to dark; remembers preference in localStorage */
(function(){
  const btn = document.getElementById('themeToggleBtn');
  const preferred = localStorage.getItem('sd_theme') || 'dark';
  if (preferred === 'light') document.body.classList.add('light');
  updateThemeButton();

  btn.addEventListener('click', () => {
    document.body.classList.toggle('light');
    localStorage.setItem('sd_theme', document.body.classList.contains('light') ? 'light' : 'dark');
    updateThemeButton();
  });

  function updateThemeButton(){
    if (document.body.classList.contains('light')) {
      btn.textContent = '☀️ Light';
      btn.title = 'Switch to dark mode';
    } else {
      btn.textContent = '🌙 Dark';
      btn.title = 'Switch to light mode';
    }
  }
})();
</script>f