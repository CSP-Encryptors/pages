---
layout: opencs
microblog: true
title: "Los Angeles"
description: "City Two of Food - Los Angeles"
parent: "Los Angeles"
team: "Syntax Terrors"
submodule: 1
categories: [CSP]
tags: [food, losangeles]
author: "Syntax Terrors"
date: 2025-10-24
footer:
  previous: /west-coast/food/SD/
  home: /west-coast/food/
  next: /west-coast/food/SF/
permalink: /west-coast/food/LA/
---

# Los Angeles 🍔🌮🍜

This submodule explores the rich and diverse food culture of **Los Angeles**, where every neighborhood tells a different culinary story.cd ~/path/to/pages_terrors
make serve


<style>
.table-container {
  width: 90%;
  margin: 20px auto;
  border-collapse: collapse;
  font-family: "Poppins", sans-serif;
}

.table-container th {
  background-color: #ffb6c1; /* pink header */
  color: white;
  padding: 12px;
  font-size: 1.2rem;
}

.table-container td {
  background-color: #add8e6; /* light blue rows */
  color: #000;
  padding: 12px;
  font-size: 1.1rem;
}

.table-container tr:nth-child(even) td {
  background-color: #87cefa; /* alternate blue for rows */
}

.table-container {
  border-radius: 12px;
  overflow: hidden;
}

/* --- Code Button Styling --- */
.code-button {
  display: inline-block;
  background-color: #4b9cd3;
  color: white;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  padding: 10px 20px;
  margin: 20px auto;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
}

.code-button:hover {
  background-color: #357ab7;
  transform: scale(1.05);
}

.code-snippet {
  display: none;
  background-color: #1e1e1e;
  color: #dcdcdc;
  font-family: "Courier New", monospace;
  padding: 15px;
  border-radius: 8px;
  margin-top: 10px;
  width: 90%;
  overflow-x: auto;
}

/* Center content */
.code-section {
  text-align: center;
}
</style>

<div class="table-container">
<table>
  <tr>
    <th>Food</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>🍖 Korean BBQ</td>
    <td>Sizzling short ribs, spicy pork belly, and endless banchan cooked right at your table.</td>
  </tr>
  <tr>
    <td>🌮 Street Tacos (al pastor)</td>
    <td>Authentic flavors from taco trucks with marinated pork, cilantro, onion, and pineapple.</td>
  </tr>
  <tr>
    <td>🍔 In-N-Out Burger</td>
    <td>California’s iconic fast-food favorite known for fresh ingredients and “Animal Style” fries.</td>
  </tr>
  <tr>
    <td>🥑 Avocado Toast</td>
    <td>The brunch classic topped with poached eggs, microgreens, and local sourdough.</td>
  </tr>
  <tr>
    <td>🍜 Ramen & Fusion Dishes</td>
    <td>Creative blends of global flavors found in Little Tokyo and beyond.</td>
  </tr>
  <tr>
    <td>🥤 Erewhon</td>
    <td>The trendy health market known for luxury smoothies and influencer culture.</td>
  </tr>
</table>
</div>

<div class="code-section">
  <button class="code-button" onclick="toggleCode()">💻 Show Example Code</button>
  <pre id="exampleCode" class="code-snippet">
&lt;div&gt;
  &lt;h2&gt;Los Angeles Food Scene&lt;/h2&gt;
  /**
 * 🌴 Los Angeles Food Truck Module — READ & FILTER
 * -------------------------------------------------
 * This example shows how to safely query dishes from a database
 * using Express and PostgreSQL (via node-postgres).
 * It’s built for the "LA Food Truck" stop in the CRUD road trip project.
 */

const express = require('express');
const { Pool } = require('pg'); // PostgreSQL connection
const app = express();
const PORT = 3000;

// 🗄️ Connect to PostgreSQL (update credentials for your setup)
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'food_trip',
  password: 'yourpassword',
  port: 5432,
});

// -----------------------------------------
// 🚦 Route: GET /api/dishes
// Purpose: READ & FILTER dishes (Los Angeles stop)
// -----------------------------------------
app.get('/api/dishes', async (req, res) => {
  try {
    // 🎛️ Get query params (with defaults)
    const {
      city = 'la',
      ingredient,
      min_cal = 0,
      max_cal = 2000,
      sort = 'name',
      page = 1,
      per = 10,
    } = req.query;

    // 🔢 Pagination math
    const offset = (page - 1) * per;

    /**
     * 🧩 Step 1: Build a safe SQL query dynamically
     * Using parameter placeholders ($1, $2, etc.)
     * so no user input is directly inserted into SQL text.
     */

    // Start with base query
    let queryText = `
      SELECT d.id, d.name, d.category, d.calories, d.city,
             ARRAY_AGG(i.name) AS ingredients
      FROM dishes d
      JOIN dish_ingredients di ON d.id = di.dish_id
      JOIN ingredients i ON di.ingredient_id = i.id
      WHERE d.city = $1 AND d.calories BETWEEN $2 AND $3
    `;
    const queryParams = [city, min_cal, max_cal];
    let paramIndex = 4;

    // Optional ingredient filter
    if (ingredient) {
      queryText += ` AND i.name ILIKE $${paramIndex}`;
      queryParams.push(`%${ingredient}%`);
      paramIndex++;
    }

    // Grouping & sorting
    queryText += ` GROUP BY d.id ORDER BY d.${sort} LIMIT $${paramIndex} OFFSET $${paramIndex + 1}`;
    queryParams.push(per, offset);

    // 🧠 Step 2: Run the query
    const result = await pool.query(queryText, queryParams);

    // ✅ Step 3: Send results
    res.json({
      city,
      total: result.rows.length,
      results: result.rows,
    });
  } catch (err) {
    console.error('Error fetching dishes:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// -----------------------------------------
// 🧮 Optional: Simulate index toggle
// (not a real DB toggle—just concept demo)
// -----------------------------------------
app.get('/api/dishes/simulate-index', (req, res) => {
  const { indexOn } = req.query; // "true" or "false"
  const response = indexOn === 'true'
    ? { message: 'Index enabled: queries run ~10x faster ⚡️', time_ms: 25 }
    : { message: 'Index disabled: queries slower 🐢', time_ms: 250 };
  res.json(response);
});

// -----------------------------------------
app.listen(PORT, () => {
  console.log(`🌮 LA Food Module server running on http://localhost:${PORT}`);
});

  &lt;p&gt;Discover the best eats from tacos to ramen!&lt;/p&gt;
&lt;/div&gt;
  </pre>
</div>

<script>
function toggleCode() {
  const code = document.getElementById("exampleCode");
  code.style.display = code.style.display === "block" ? "none" : "block";
}
</script>
