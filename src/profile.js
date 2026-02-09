/**
 * User Profile Module
 * Handles user profile display and management
 */

/**
 * Sample user data
 */
const sampleUser = {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    role: 'Developer'
};

/**
 * Display user profile in the DOM
 * @param {Object} user - User object
 * @returns {string} HTML string for the profile
 */
function displayUserProfile(user) {
    if (!user || !user.name) {
        return '<p>No user data available</p>';
    }

    return `
        <h3>Welcome, ${user.name}!</h3>
        <p>Email: ${user.email}</p>
        <p>Role: ${user.role}</p>
    `;
}

/**
 * Load user profile into the page
 */
function loadUserProfile() {
    const profileElement = document.getElementById('user-profile');
    if (profileElement) {
        profileElement.innerHTML = displayUserProfile(sampleUser);
    }
}

/**
 * Get user by ID (simulated)
 * @param {number} id - User ID
 * @returns {Object|null} User object or null
 */
function getUserById(id) {
    if (id === sampleUser.id) {
        return sampleUser;
    }
    return null;
}

/**
 * Validate user object
 * @param {Object} user - User object to validate
 * @returns {boolean} True if valid
 */
function isValidUser(user) {
    if (!user) {
        return false;
    }
    return typeof user.name === 'string' &&
           typeof user.email === 'string' &&
           user.name.length > 0 &&
           user.email.includes('@');
}

/**
 * Format user display name
 * @param {Object} user - User object
 * @returns {string} Formatted display name
 */
function formatDisplayName(user) {
    if (!user || !user.name) {
        return 'Anonymous User';
    }
    return `${user.name} (${user.role})`;
}

// Export for testing (Node.js environment)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        displayUserProfile,
        getUserById,
        isValidUser,
        formatDisplayName,
        sampleUser
    };
}
