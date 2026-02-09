/**
 * Main Application Module
 * CI/CD Demo Application
 */

const APP_VERSION = '1.0.0';

/**
 * Initialize the application
 */
function initApp() {
    console.log(`App initialized - Version ${APP_VERSION}`);
    return true;
}

/**
 * Get application version
 * @returns {string} Current version
 */
function getVersion() {
    return APP_VERSION;
}

/**
 * Format a greeting message
 * @param {string} name - The name to greet
 * @returns {string} Formatted greeting
 */
function greet(name) {
    if (!name || typeof name !== 'string') {
        return 'Hello, Guest!';
    }
    return `Hello, ${name}!`;
}

/**
 * Calculate the sum of two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Sum of a and b
 */
function add(a, b) {
    return a + b;
}

/**
 * Check if a value is valid
 * @param {*} value - Value to check
 * @returns {boolean} True if valid
 */
function isValid(value) {
    return value !== null && value !== undefined && value !== '';
}

// Initialize app when DOM is loaded
if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', initApp);
}

// Export for testing (Node.js environment)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initApp,
        getVersion,
        greet,
        add,
        isValid,
        APP_VERSION
    };
}
