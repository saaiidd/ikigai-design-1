// Ikigai Demo Popup - Watch Dogs 2 Style
(function() {
  'use strict';
  
  const STORAGE_KEY = 'ikigaiDemoPopupDismissed';
  let popup = null;
  let dialog = null;
  let focusableElements = [];
  let firstFocusable = null;
  let lastFocusable = null;
  let previouslyFocused = null;

  // Check if popup should be shown
  function shouldShowPopup() {
    try {
      return !localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      return true; // Show if localStorage is not available
    }
  }

  // Create popup HTML
  function createPopupHTML() {
    return `
      <div id="ikigai-popup" role="dialog" aria-modal="true" aria-labelledby="ikigai-title" aria-describedby="ikigai-body">
        <div id="ikigai-dialog">
          <button class="ikigai-close" aria-label="Close dialog">&times;</button>
          <div class="ikigai-content">
            <h2 id="ikigai-title" class="ikigai-title">Demo Build — Ikigai</h2>
            <div id="ikigai-body" class="ikigai-body">
              <ul class="ikigai-lines">
                <li>This website is a demo.</li>
                <li>Made by: b3hold (Lead Engineer) & alcatraz.js (Design Lead).</li>
                <li>Our mission at Ikigai is to build simple, modern websites that help people and businesses share their ideas with the world. We prioritise clean design, smooth performance, and practical solutions that anyone can afford and use. Every project is crafted to make life easier and bring ideas to life online.</li>
                <li>No tracking. No payments. Showcase only.</li>
              </ul>
            </div>
            <div class="ikigai-actions">
              <button id="ikigai-enter" type="button">Enter Site</button>
              <a id="ikigai-learn" href="#about">Learn More</a>
              <label class="ikigai-optout">
                <input type="checkbox" id="ikigai-dontshow"> Don't show this again
              </label>
            </div>
            <div class="ikigai-meta">build: demo • html/css/js</div>
          </div>
        </div>
      </div>
    `;
  }

  // Get focusable elements
  function getFocusableElements() {
    const selectors = [
      'button:not([disabled])',
      'input:not([disabled])',
      'select:not([disabled])',
      'textarea:not([disabled])',
      'a[href]',
      '[tabindex]:not([tabindex="-1"])'
    ];
    
    focusableElements = Array.from(dialog.querySelectorAll(selectors.join(', ')));
    firstFocusable = focusableElements[0];
    lastFocusable = focusableElements[focusableElements.length - 1];
  }

  // Handle focus trap
  function handleTabKey(e) {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstFocusable) {
        e.preventDefault();
        lastFocusable.focus();
      }
    } else {
      if (document.activeElement === lastFocusable) {
        e.preventDefault();
        firstFocusable.focus();
      }
    }
  }

  // Lock body scroll
  function lockBodyScroll() {
    document.body.style.overflow = 'hidden';
  }

  // Unlock body scroll
  function unlockBodyScroll() {
    document.body.style.overflow = '';
  }

  // Close popup
  function closePopup(rememberChoice = false) {
    if (!popup) return;

    if (rememberChoice) {
      const checkbox = document.getElementById('ikigai-dontshow');
      if (checkbox && checkbox.checked) {
        try {
          localStorage.setItem(STORAGE_KEY, 'true');
        } catch (e) {
          console.warn('Could not save popup preference to localStorage');
        }
      }
    }

    popup.classList.remove('show');
    
    setTimeout(() => {
      if (popup && popup.parentNode) {
        popup.parentNode.removeChild(popup);
      }
      popup = null;
      dialog = null;
      unlockBodyScroll();
      
      // Restore focus
      if (previouslyFocused) {
        previouslyFocused.focus();
      }
    }, 300);

    // Remove event listeners
    document.removeEventListener('keydown', handleKeydown);
  }

  // Handle keydown events
  function handleKeydown(e) {
    if (e.key === 'Escape') {
      e.preventDefault();
      closePopup();
    } else {
      handleTabKey(e);
    }
  }

  // Add glitch effect to title
  function addGlitchEffect() {
    const title = document.getElementById('ikigai-title');
    if (title && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setTimeout(() => {
        title.classList.add('glitch');
        setTimeout(() => {
          title.classList.remove('glitch');
        }, 120);
      }, 500);
    }
  }

  // Show popup
  function showPopup() {
    // Store currently focused element
    previouslyFocused = document.activeElement;

    // Create and insert popup
    const popupHTML = createPopupHTML();
    document.body.insertAdjacentHTML('afterbegin', popupHTML);
    
    popup = document.getElementById('ikigai-popup');
    dialog = document.getElementById('ikigai-dialog');

    if (!popup || !dialog) return;

    // Lock body scroll
    lockBodyScroll();

    // Get focusable elements
    getFocusableElements();

    // Add event listeners
    document.addEventListener('keydown', handleKeydown);

    // Close button
    const closeBtn = popup.querySelector('.ikigai-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => closePopup());
    }

    // Enter site button
    const enterBtn = document.getElementById('ikigai-enter');
    if (enterBtn) {
      enterBtn.addEventListener('click', () => closePopup(true));
    }

    // Overlay click
    popup.addEventListener('click', (e) => {
      if (e.target === popup) {
        closePopup();
      }
    });

    // Show popup with fade-in
    requestAnimationFrame(() => {
      popup.classList.add('show');
      
      // Focus first focusable element
      if (firstFocusable) {
        firstFocusable.focus();
      }
      
      // Add glitch effect
      addGlitchEffect();
    });
  }

  // Initialize
  function init() {
    if (shouldShowPopup()) {
      showPopup();
    }
  }

  // Start when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();