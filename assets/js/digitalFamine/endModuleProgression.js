/**
 * End Module Progression System
 * Handles sequential unlocking, progress tracking, and auto-complete functionality for end modules
 * @module endModuleProgression
 */

const STORAGE_KEY = 'digitalFamine_endModuleProgress';

/**
 * Get current module progression state from localStorage
 * @returns {Object} Progress state with completed modules and current module
 */
function getProgressState() {
  const defaultState = {
    completed: [],
    current: 1,
    version: 1
  };
  
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const state = JSON.parse(saved);
      return { ...defaultState, ...state };
    }
  } catch (error) {
    console.warn('Error loading end module progress:', error);
  }
  
  return defaultState;
}

/**
 * Save progression state to localStorage
 * @param {Object} state - The state to save
 */
function saveProgressState(state) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    console.log('✅ End module progress saved:', state);
  } catch (error) {
    console.error('Error saving end module progress:', error);
  }
}

/**
 * Mark a module as completed
 * @param {number} moduleNumber - The module number (1-5)
 */
export function completeModule(moduleNumber) {
  const state = getProgressState();
  
  if (!state.completed.includes(moduleNumber)) {
    state.completed.push(moduleNumber);
    state.completed.sort((a, b) => a - b);
  }
  
  // Update current module to next available
  state.current = Math.max(...state.completed) + 1;
  if (state.current > 5) state.current = 5;
  
  saveProgressState(state);
  
  // Only update quest display if we're actually on the quest home page
  const currentModuleNum = getCurrentModuleNumber();
  if (!currentModuleNum) {
    // We're on quest home, update the display
    updateQuestDisplay();
  }
  
  return state;
}

/**
 * Check if a module is unlocked
 * @param {number} moduleNumber - The module number to check
 * @returns {boolean} Whether the module is unlocked
 */
export function isModuleUnlocked(moduleNumber) {
  const state = getProgressState();
  
  // First module is always unlocked
  if (moduleNumber === 1) return true;
  
  // A module is unlocked if the previous module is completed
  return state.completed.includes(moduleNumber - 1);
}

/**
 * Check if a module is completed
 * @param {number} moduleNumber - The module number to check
 * @returns {boolean} Whether the module is completed
 */
export function isModuleCompleted(moduleNumber) {
  const state = getProgressState();
  return state.completed.includes(moduleNumber);
}

/**
 * Reset all progression
 */
export function resetProgress() {
  if (confirm('⚠️ WARNING: This will reset ALL end module progress! Are you sure?')) {
    localStorage.removeItem(STORAGE_KEY);
    console.log('🔄 End module progress reset');
    location.reload();
  }
}

/**
 * Get current module number from the page URL
 * @returns {number|null} Module number or null if not on a module page
 */
function getCurrentModuleNumber() {
  const path = window.location.pathname;
  const match = path.match(/\/end\/submodule_(\d+)\//);
  return match ? parseInt(match[1]) : null;
}

/**
 * Add Reset All button to the top of the quest home page
 * @param {Object} state - Current progress state
 */
function addResetAllButtonToTop(state) {
  // Create the Reset All button
  const resetAllBtn = document.createElement('button');
  resetAllBtn.id = 'reset-all-progress-btn';
  resetAllBtn.innerHTML = '🔄 Reset All Progress';
  resetAllBtn.style.cssText = `
    position: fixed;
    top: 100px;
    right: 30px;
    z-index: 9999;
    background: linear-gradient(135deg, #ef4444, #dc2626);
    color: white;
    border: 2px solid rgba(255,255,255,0.3);
    padding: 12px 24px;
    border-radius: 10px;
    font-weight: bold;
    font-size: 14px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(239, 68, 68, 0.5);
  `;
  resetAllBtn.onmouseover = () => {
    resetAllBtn.style.transform = 'scale(1.05)';
    resetAllBtn.style.boxShadow = '0 6px 20px rgba(239, 68, 68, 0.7)';
  };
  resetAllBtn.onmouseout = () => {
    resetAllBtn.style.transform = 'scale(1)';
    resetAllBtn.style.boxShadow = '0 4px 15px rgba(239, 68, 68, 0.5)';
  };
  resetAllBtn.onclick = () => resetProgress();
  
  document.body.appendChild(resetAllBtn);
  
  console.log('✅ Reset All button added to top right of page at position (top: 100px, right: 30px)');
}

/**
 * Update quest home page display with lock indicators
 */
function updateQuestDisplay() {
  const state = getProgressState();
  
  // Add Reset All button to the top of the page (only once)
  if (!document.getElementById('reset-all-progress-btn')) {
    addResetAllButtonToTop(state);
  }
  
  // Find all module cards using data-module attribute
  for (let moduleNum = 1; moduleNum <= 5; moduleNum++) {
    const card = document.querySelector(`[data-module="c${moduleNum}"]`);
    
    if (!card) continue;
    
    const isUnlocked = isModuleUnlocked(moduleNum);
    const isCompleted = isModuleCompleted(moduleNum);
    
    const badge = card.querySelector('.module-badge');
    const lessonLink = card.querySelector('.lesson-link');
    const videoLink = card.querySelector('.video-link');
    
    // Remove old badges/overlays
    const oldCompletionBadge = card.querySelector('.completion-badge');
    const oldLockOverlay = card.querySelector('.lock-overlay');
    if (oldCompletionBadge) oldCompletionBadge.remove();
    if (oldLockOverlay) oldLockOverlay.remove();
    
    if (isCompleted) {
      // Module is completed - show green checkmark
      if (badge) {
        badge.textContent = '✅ Completed';
        badge.className = 'status-badge status-completed module-badge';
        badge.style.cssText = `
          position: absolute;
          top: 10px;
          right: 10px;
          background: #22c55e;
          color: white;
          padding: 6px 12px;
          border-radius: 12px;
          font-size: 12px;
          font-weight: bold;
          z-index: 10;
        `;
      }
      card.style.opacity = '1';
      card.style.filter = 'none';
      card.style.borderColor = '#22c55e';
      
      // Enable links
      if (lessonLink) lessonLink.style.pointerEvents = 'auto';
      if (videoLink) videoLink.style.pointerEvents = 'auto';
      
    } else if (!isUnlocked) {
      // Module is locked - show lock badge and disable
      if (badge) {
        badge.textContent = '🔒 Locked';
        badge.className = 'status-badge status-locked module-badge';
        badge.style.cssText = `
          position: absolute;
          top: 10px;
          right: 10px;
          background: #6b7280;
          color: white;
          padding: 6px 12px;
          border-radius: 12px;
          font-size: 12px;
          font-weight: bold;
          z-index: 10;
        `;
      }
      
      card.style.opacity = '0.5';
      card.style.filter = 'grayscale(70%)';
      
      // Disable links
      if (lessonLink) {
        lessonLink.style.pointerEvents = 'none';
        lessonLink.style.opacity = '0.5';
      }
      if (videoLink) {
        videoLink.style.pointerEvents = 'none';
        videoLink.style.opacity = '0.5';
      }
      
      // Add lock overlay
      const lockOverlay = document.createElement('div');
      lockOverlay.className = 'lock-overlay';
      lockOverlay.innerHTML = `
        <div style="
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: rgba(0,0,0,0.85);
          color: #ef4444;
          padding: 12px 20px;
          border-radius: 16px;
          font-size: 16px;
          font-weight: bold;
          border: 2px solid #ef4444;
          z-index: 5;
          text-align: center;
        ">
          🔒 Complete Module ${moduleNum - 1} First
        </div>
      `;
      lockOverlay.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        pointer-events: auto;
        z-index: 5;
      `;
      card.style.position = 'relative';
      card.appendChild(lockOverlay);
      
    } else {
      // Module is unlocked and available
      if (badge) {
        badge.textContent = '⭐ Available';
        badge.className = 'status-badge status-available module-badge';
        badge.style.cssText = `
          position: absolute;
          top: 10px;
          right: 10px;
          background: #3b82f6;
          color: white;
          padding: 6px 12px;
          border-radius: 12px;
          font-size: 12px;
          font-weight: bold;
          z-index: 10;
        `;
      }
      card.style.opacity = '1';
      card.style.filter = 'none';
      card.style.borderColor = '#3b82f6';
      
      // Enable links
      if (lessonLink) lessonLink.style.pointerEvents = 'auto';
      if (videoLink) videoLink.style.pointerEvents = 'auto';
    }
  }
  
  console.log('✅ Quest display updated with progression state');
}

/**
 * Check if current module is unlocked and show warning if not
 * @returns {boolean} Whether access is allowed
 */
export function checkModuleAccess() {
  const moduleNum = getCurrentModuleNumber();
  
  if (!moduleNum) return true; // Not on a module page
  
  if (!isModuleUnlocked(moduleNum)) {
    // Prevent all interactions
    document.addEventListener('DOMContentLoaded', blockContent);
    // Also run immediately in case DOM is already loaded
    if (document.readyState !== 'loading') {
      blockContent();
    }
    return false;
  }
  
  return true;
}

/**
 * Block content and show locked message
 */
function blockContent() {
  const moduleNum = getCurrentModuleNumber();
  const state = getProgressState();
  const requiredModule = moduleNum - 1;
  
  // Show access denied message
  document.body.innerHTML = `
    <div style="display: flex; justify-content: center; align-items: center; min-height: 100vh; background: linear-gradient(135deg, #1a1a2e, #16213e); color: white; font-family: system-ui;">
      <div style="text-align: center; padding: 40px; background: rgba(255,255,255,0.1); border-radius: 20px; border: 2px solid #ef4444; max-width: 600px;">
        <h1 style="color: #ef4444; font-size: 48px; margin: 0;">🔒 Module ${moduleNum} Locked</h1>
        <p style="font-size: 24px; margin: 20px 0;">This module is currently locked!</p>
        <p style="font-size: 18px; margin: 20px 0; color: #ccc;">
          Complete <strong>Module ${requiredModule}</strong> to unlock this content.
        </p>
        <div style="background: rgba(125, 211, 252, 0.1); padding: 15px; border-radius: 10px; border: 1px solid #7dd3fc; margin: 20px 0;">
          <p style="margin: 5px 0; font-size: 16px;">📋 Your Progress:</p>
          <p style="margin: 5px 0; font-size: 18px; color: #7dd3fc; font-weight: bold;">
            ${state.completed.length} / 5 modules completed
          </p>
        </div>
        <button onclick="window.location.href='/digital-famine/end/'" style="
          background: linear-gradient(135deg, #7dd3fc, #a78bfa);
          color: white;
          border: none;
          padding: 15px 30px;
          border-radius: 10px;
          font-size: 18px;
          font-weight: bold;
          cursor: pointer;
          margin-top: 20px;
          transition: all 0.3s ease;
        " onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">Return to Quest Home</button>
      </div>
    </div>
  `;
  
  // Prevent scrolling
  document.body.style.overflow = 'hidden';
}

/**
 * Add footer controls to individual module pages
 */
export function addModuleFooterControls() {
  const moduleNum = getCurrentModuleNumber();
  
  if (!moduleNum) return; // Not on a module page
  
  const footer = document.getElementById('masterFooter');
  
  if (!footer) {
    console.warn("Footer element 'masterFooter' not found");
    return;
  }
  
  // Check if buttons already exist
  if (document.getElementById('module-complete-btn')) {
    return;
  }
  
  // Clear existing footer content
  footer.innerHTML = '';
  
  // Style footer - fixed at bottom and centered
  footer.style.setProperty('position', 'fixed', 'important');
  footer.style.setProperty('bottom', '0', 'important');
  footer.style.setProperty('left', '0', 'important');
  footer.style.setProperty('right', '0', 'important');
  footer.style.setProperty('display', 'flex', 'important');
  footer.style.setProperty('justify-content', 'center', 'important');
  footer.style.setProperty('align-items', 'center', 'important');
  footer.style.setProperty('padding', '12px 20px', 'important');
  footer.style.setProperty('background', 'rgba(0,0,0,0.9)', 'important');
  footer.style.setProperty('border-top', '2px solid #7dd3fc', 'important');
  footer.style.setProperty('z-index', '1000', 'important');
  footer.style.setProperty('width', '100%', 'important');
  footer.style.setProperty('backdrop-filter', 'blur(10px)', 'important');
  
  // Create button wrapper for centered layout
  const buttonWrapper = document.createElement('div');
  buttonWrapper.style.display = 'flex';
  buttonWrapper.style.gap = '15px';
  buttonWrapper.style.alignItems = 'center';
  buttonWrapper.style.flexWrap = 'wrap';
  buttonWrapper.style.justifyContent = 'center';
  
  // Previous Module button
  const prevModuleBtn = document.createElement('button');
  prevModuleBtn.innerHTML = '⬅️ Previous Module';
  prevModuleBtn.className = 'medium filledHighlight primary';
  prevModuleBtn.style.cssText = `
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: white;
    border: 2px solid rgba(255,255,255,0.3);
    padding: 10px 20px;
    border-radius: 8px;
    font-weight: bold;
    font-size: 14px;
    cursor: pointer;
    transition: all 0.3s ease;
  `;
  prevModuleBtn.onmouseover = () => prevModuleBtn.style.transform = 'scale(1.05)';
  prevModuleBtn.onmouseout = () => prevModuleBtn.style.transform = 'scale(1)';
  prevModuleBtn.onclick = () => navigateToPreviousModule();
  
  // Disable if on first module
  if (moduleNum === 1) {
    prevModuleBtn.disabled = true;
    prevModuleBtn.style.opacity = '0.5';
    prevModuleBtn.style.cursor = 'not-allowed';
  }
  
  // Return to Quest Home button
  const homeBtn = document.createElement('button');
  homeBtn.innerHTML = '🏠 Quest Home';
  homeBtn.className = 'medium filledHighlight primary';
  homeBtn.style.cssText = `
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: white;
    border: 2px solid rgba(255,255,255,0.3);
    padding: 10px 20px;
    border-radius: 8px;
    font-weight: bold;
    font-size: 14px;
    cursor: pointer;
    transition: all 0.3s ease;
  `;
  homeBtn.onmouseover = () => homeBtn.style.transform = 'scale(1.05)';
  homeBtn.onmouseout = () => homeBtn.style.transform = 'scale(1)';
  homeBtn.onclick = () => window.location.href = '/digital-famine/end/';
  
  // Progress indicator
  const state = getProgressState();
  const progressDiv = document.createElement('div');
  progressDiv.innerHTML = `📋 Progress: ${state.completed.length}/5 modules`;
  progressDiv.style.cssText = `
    color: #7dd3fc;
    font-weight: bold;
    font-size: 14px;
    padding: 10px 15px;
    background: rgba(125, 211, 252, 0.1);
    border-radius: 8px;
    border: 1px solid #7dd3fc;
  `;
  
  // Auto-complete button
  const autoCompleteBtn = document.createElement('button');
  const isCompleted = isModuleCompleted(moduleNum);
  autoCompleteBtn.id = 'module-complete-btn';
  autoCompleteBtn.innerHTML = isCompleted ? '✅ Completed' : '🎮 Auto-Complete';
  autoCompleteBtn.className = 'medium filledHighlight primary';
  autoCompleteBtn.style.cssText = `
    background: ${isCompleted ? 'linear-gradient(135deg, #22c55e, #16a34a)' : 'linear-gradient(135deg, #a855f7, #7c3aed)'};
    color: white;
    border: 2px solid rgba(255,255,255,0.3);
    padding: 10px 20px;
    border-radius: 8px;
    font-weight: bold;
    font-size: 14px;
    cursor: pointer;
    transition: all 0.3s ease;
  `;
  autoCompleteBtn.onmouseover = () => autoCompleteBtn.style.transform = 'scale(1.05)';
  autoCompleteBtn.onmouseout = () => autoCompleteBtn.style.transform = 'scale(1)';
  autoCompleteBtn.onclick = () => autoCompleteCurrentModule();
  
  // Reset current module button
  const resetModuleBtn = document.createElement('button');
  resetModuleBtn.innerHTML = '🔄 Reset Module';
  resetModuleBtn.className = 'medium filledHighlight primary';
  resetModuleBtn.style.cssText = `
    background: linear-gradient(135deg, #f97316, #ea580c);
    color: white;
    border: 2px solid rgba(255,255,255,0.3);
    padding: 10px 20px;
    border-radius: 8px;
    font-weight: bold;
    font-size: 14px;
    cursor: pointer;
    transition: all 0.3s ease;
  `;
  resetModuleBtn.onmouseover = () => resetModuleBtn.style.transform = 'scale(1.05)';
  resetModuleBtn.onmouseout = () => resetModuleBtn.style.transform = 'scale(1)';
  resetModuleBtn.onclick = () => resetCurrentModule();
  
  // Next Module button
  const nextModuleBtn = document.createElement('button');
  nextModuleBtn.id = 'next-module-btn';
  nextModuleBtn.innerHTML = 'Next Module ➡️';
  nextModuleBtn.className = 'medium filledHighlight primary';
  nextModuleBtn.style.cssText = `
    background: linear-gradient(135deg, #22c55e, #16a34a);
    color: white;
    border: 2px solid rgba(255,255,255,0.3);
    padding: 10px 20px;
    border-radius: 8px;
    font-weight: bold;
    font-size: 14px;
    cursor: pointer;
    transition: all 0.3s ease;
  `;
  nextModuleBtn.onmouseover = () => nextModuleBtn.style.transform = 'scale(1.05)';
  nextModuleBtn.onmouseout = () => nextModuleBtn.style.transform = 'scale(1)';
  nextModuleBtn.onclick = () => navigateToNextModule();
  
  // Disable if on last module
  if (moduleNum === 5) {
    nextModuleBtn.disabled = true;
    nextModuleBtn.style.opacity = '0.5';
    nextModuleBtn.style.cursor = 'not-allowed';
  }
  
  // Add pulse animation CSS for Next button
  if (!document.getElementById('pulse-animation-style')) {
    const pulseStyle = document.createElement('style');
    pulseStyle.id = 'pulse-animation-style';
    pulseStyle.textContent = `
      @keyframes pulse {
        0%, 100% { 
          box-shadow: 0 0 10px rgba(34, 197, 94, 0.5);
        }
        50% { 
          box-shadow: 0 0 25px rgba(34, 197, 94, 0.8);
        }
      }
    `;
    document.head.appendChild(pulseStyle);
  }
  
  // Assemble footer
  buttonWrapper.appendChild(prevModuleBtn);
  buttonWrapper.appendChild(homeBtn);
  buttonWrapper.appendChild(progressDiv);
  buttonWrapper.appendChild(autoCompleteBtn);
  buttonWrapper.appendChild(resetModuleBtn);
  buttonWrapper.appendChild(nextModuleBtn);
  
  footer.appendChild(buttonWrapper);
  
  console.log('✅ Module footer controls added');
}

/**
 * Reset the current module's progress
 */
function resetCurrentModule() {
  const moduleNum = getCurrentModuleNumber();
  
  if (!moduleNum) return;
  
  if (confirm(`🔄 Reset Module ${moduleNum}? This will remove its completion status and you can redo it.`)) {
    const state = getProgressState();
    
    // Remove this module from completed array
    state.completed = state.completed.filter(m => m !== moduleNum);
    
    // Also remove any modules after this one (since they depend on this one)
    state.completed = state.completed.filter(m => m < moduleNum);
    
    // Update current module
    state.current = moduleNum;
    
    saveProgressState(state);
    
    // Show success message
    showSuccessMessage(`🔄 Module ${moduleNum} has been reset! You can now redo it.`);
    
    // Update button
    const btn = document.getElementById('module-complete-btn');
    if (btn) {
      btn.innerHTML = '🎮 Auto-Complete';
      btn.style.background = 'linear-gradient(135deg, #a855f7, #7c3aed)';
      btn.onclick = () => autoCompleteCurrentModule();
      btn.style.cursor = 'pointer';
    }
    
    // Update progress indicator
    const footer = document.getElementById('masterFooter');
    if (footer) {
      const progressDivs = footer.querySelectorAll('div');
      progressDivs.forEach(div => {
        if (div.innerHTML && div.innerHTML.includes('Progress:')) {
          div.innerHTML = `📋 Progress: ${state.completed.length}/5 modules`;
        }
      });
    }
    
    // Reload after a short delay to clear any game state
    setTimeout(() => {
      location.reload();
    }, 1500);
  }
}

/**
 * Navigate to previous module
 */
function navigateToPreviousModule() {
  const moduleNum = getCurrentModuleNumber();
  
  if (!moduleNum || moduleNum === 1) return;
  
  const prevModule = moduleNum - 1;
  window.location.href = `/digital-famine/end/submodule_${prevModule}/`;
}

/**
 * Navigate to next module
 */
function navigateToNextModule() {
  const moduleNum = getCurrentModuleNumber();
  
  console.log('🔍 Next button clicked! Current module:', moduleNum);
  
  if (!moduleNum) {
    console.warn('No module number detected');
    return;
  }
  
  if (moduleNum === 5) {
    console.log('Already on last module');
    alert('You are on the last module!');
    return;
  }
  
  const nextModule = moduleNum + 1;
  console.log('Checking if module', nextModule, 'is unlocked...');
  
  // Check if next module is unlocked
  if (isModuleUnlocked(nextModule)) {
    console.log('✅ Module', nextModule, 'is unlocked! Navigating...');
    window.location.href = `/digital-famine/end/submodule_${nextModule}/`;
  } else {
    console.log('🔒 Module', nextModule, 'is locked');
    // Show locked message
    showLockedMessage(nextModule);
  }
}

/**
 * Show a message that the next module is locked
 * @param {number} nextModule - The module number that's locked
 */
function showLockedMessage(nextModule) {
  const overlay = document.createElement('div');
  overlay.style.cssText = `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: linear-gradient(135deg, #ef4444, #dc2626);
    color: white;
    padding: 30px 50px;
    border-radius: 20px;
    font-size: 20px;
    font-weight: bold;
    z-index: 10000;
    box-shadow: 0 10px 40px rgba(239, 68, 68, 0.5);
    animation: slideIn 0.3s ease-out;
    text-align: center;
    border: 2px solid rgba(255,255,255,0.3);
  `;
  overlay.innerHTML = `
    🔒 Module ${nextModule} is Locked!<br>
    <span style="font-size: 16px; font-weight: normal; margin-top: 10px; display: block;">
      Complete Module ${nextModule - 1} first to unlock.
    </span>
  `;
  
  document.body.appendChild(overlay);
  
  // Remove after 2.5 seconds
  setTimeout(() => {
    overlay.style.animation = 'slideOut 0.3s ease-in';
    setTimeout(() => overlay.remove(), 300);
  }, 2500);
}

/**
 * Auto-complete the current module
 */
function autoCompleteCurrentModule() {
  const moduleNum = getCurrentModuleNumber();
  
  if (!moduleNum) return;
  
  if (confirm(`🎮 Auto-complete Module ${moduleNum}? This will mark it as finished and unlock the next module.`)) {
    const state = completeModule(moduleNum);
    
    // Show success message
    showSuccessMessage(`✅ Module ${moduleNum} completed! ${moduleNum < 5 ? `Module ${moduleNum + 1} is now unlocked!` : 'All modules complete!'}`);
    
    // Update button
    const btn = document.getElementById('module-complete-btn');
    if (btn) {
      btn.innerHTML = '✅ Completed';
      btn.style.background = 'linear-gradient(135deg, #22c55e, #16a34a)';
      btn.disabled = true;
      btn.style.opacity = '0.8';
      btn.style.cursor = 'default';
    }
    
    // Update progress indicator
    const footer = document.getElementById('masterFooter');
    if (footer) {
      const progressDivs = footer.querySelectorAll('div');
      progressDivs.forEach(div => {
        if (div.innerHTML && div.innerHTML.includes('Progress:')) {
          div.innerHTML = `📋 Progress: ${state.completed.length}/5 modules`;
        }
      });
    }
    
    // CRITICAL: Enable the Next button so user can proceed
    const nextBtn = document.getElementById('next-module-btn');
    console.log('🔍 Looking for Next button...', nextBtn ? 'FOUND' : 'NOT FOUND');
    console.log('Current module:', moduleNum);
    
    if (nextBtn) {
      console.log('Next button current state:', {
        disabled: nextBtn.disabled,
        opacity: nextBtn.style.opacity,
        pointerEvents: nextBtn.style.pointerEvents
      });
      
      if (moduleNum < 5) {
        // Force enable the button
        nextBtn.disabled = false;
        nextBtn.style.setProperty('opacity', '1', 'important');
        nextBtn.style.setProperty('cursor', 'pointer', 'important');
        nextBtn.style.setProperty('pointer-events', 'auto', 'important');
        nextBtn.style.setProperty('background', 'linear-gradient(135deg, #22c55e, #16a34a)', 'important');
        
        // Add a visual indicator that next module is ready
        nextBtn.style.boxShadow = '0 0 20px rgba(34, 197, 94, 0.5)';
        nextBtn.style.animation = 'pulse 1.5s ease-in-out infinite';
        
        console.log('✅ Next button ENABLED! New state:', {
          disabled: nextBtn.disabled,
          opacity: nextBtn.style.opacity,
          pointerEvents: nextBtn.style.pointerEvents
        });
        console.log('Next module', moduleNum + 1, 'is unlocked:', isModuleUnlocked(moduleNum + 1));
      }
    } else {
      console.error('❌ Next button NOT FOUND in DOM!');
    }
    
    // Also ensure Previous button and Reset Module button stay functional
    const prevBtn = document.getElementById('prev-module-btn');
    if (prevBtn && moduleNum > 1) {
      prevBtn.disabled = false;
      prevBtn.style.setProperty('pointer-events', 'auto', 'important');
    }
    
    const resetModuleBtn = document.getElementById('reset-module-btn');
    if (resetModuleBtn) {
      resetModuleBtn.disabled = false;
      resetModuleBtn.style.setProperty('pointer-events', 'auto', 'important');
    }
  }
}

/**
 * Show a success message overlay
 * @param {string} message - The message to display
 */
function showSuccessMessage(message) {
  const overlay = document.createElement('div');
  overlay.style.cssText = `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: linear-gradient(135deg, #22c55e, #16a34a);
    color: white;
    padding: 30px 50px;
    border-radius: 20px;
    font-size: 24px;
    font-weight: bold;
    z-index: 10000;
    box-shadow: 0 10px 40px rgba(34, 197, 94, 0.5);
    animation: slideIn 0.3s ease-out;
    text-align: center;
  `;
  overlay.innerHTML = message;
  
  document.body.appendChild(overlay);
  
  setTimeout(() => {
    overlay.style.animation = 'slideOut 0.3s ease-in';
    setTimeout(() => overlay.remove(), 300);
  }, 2000);
  
  // Add animations
  const style = document.createElement('style');
  style.textContent = `
    @keyframes slideIn {
      from {
        opacity: 0;
        transform: translate(-50%, -45%);
      }
      to {
        opacity: 1;
        transform: translate(-50%, -50%);
      }
    }
    @keyframes slideOut {
      from {
        opacity: 1;
        transform: translate(-50%, -50%);
      }
      to {
        opacity: 0;
        transform: translate(-50%, -55%);
      }
    }
  `;
  document.head.appendChild(style);
}

/**
 * Initialize progression system based on current page
 */
export function initEndModuleProgression() {
  const moduleNum = getCurrentModuleNumber();
  
  // Check if on a module page and verify access FIRST
  if (moduleNum) {
    // Check access immediately - this will block if locked
    const hasAccess = checkModuleAccess();
    if (!hasAccess) {
      console.log(`🔒 Module ${moduleNum} is locked`);
      return;
    }
    
    // Only add footer controls if we have access
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', addModuleFooterControls);
    } else {
      addModuleFooterControls();
    }
  } else {
    // On quest home page, update display
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', updateQuestDisplay);
    } else {
      updateQuestDisplay();
    }
  }
  
  console.log('✅ End module progression system initialized');
}

// IMMEDIATELY check access on module pages (before anything loads)
const currentModule = getCurrentModuleNumber();
if (currentModule) {
  // Run access check as early as possible
  checkModuleAccess();
}

// Auto-initialize when script loads
initEndModuleProgression();

