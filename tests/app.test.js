/**
 * Unit Tests for the CI/CD Demo Application
 * Using Jest testing framework
 */

const { greet, add, isValid, getVersion, APP_VERSION } = require('../src/app.js');
const { displayUserProfile, isValidUser, getUserById, formatDisplayName, sampleUser } = require('../src/profile.js');

// ============================================
// App.js Tests
// ============================================

describe('App Module', () => {

    describe('getVersion()', () => {
        test('should return the current version', () => {
            expect(getVersion()).toBe(APP_VERSION);
        });

        test('version should be a valid semver string', () => {
            const version = getVersion();
            expect(version).toMatch(/^\d+\.\d+\.\d+$/);
        });
    });

    describe('greet()', () => {
        test('should greet a user by name', () => {
            expect(greet('Alice')).toBe('Hello, Alice!');
        });

        test('should return default greeting for empty name', () => {
            expect(greet('')).toBe('Hello, Guest!');
        });

        test('should return default greeting for null', () => {
            expect(greet(null)).toBe('Hello, Guest!');
        });

        test('should return default greeting for undefined', () => {
            expect(greet(undefined)).toBe('Hello, Guest!');
        });
    });

    describe('add()', () => {
        test('should add two positive numbers', () => {
            expect(add(2, 3)).toBe(5);
        });

        test('should add negative numbers', () => {
            expect(add(-1, -1)).toBe(-2);
        });

        test('should add zero', () => {
            expect(add(5, 0)).toBe(5);
        });
    });

    describe('isValid()', () => {
        test('should return true for valid string', () => {
            expect(isValid('hello')).toBe(true);
        });

        test('should return false for null', () => {
            expect(isValid(null)).toBe(false);
        });

        test('should return false for undefined', () => {
            expect(isValid(undefined)).toBe(false);
        });

        test('should return false for empty string', () => {
            expect(isValid('')).toBe(false);
        });

        test('should return true for zero', () => {
            expect(isValid(0)).toBe(true);
        });
    });
});

// ============================================
// Profile.js Tests
// ============================================

describe('Profile Module', () => {

    describe('displayUserProfile()', () => {
        test('should display user profile HTML', () => {
            const user = { name: 'Test User', email: 'test@test.com', role: 'Tester' };
            const result = displayUserProfile(user);
            expect(result).toContain('Welcome, Test User!');
            expect(result).toContain('test@test.com');
            expect(result).toContain('Tester');
        });

        test('should handle missing user', () => {
            expect(displayUserProfile(null)).toBe('<p>No user data available</p>');
        });

        test('should handle user without name', () => {
            expect(displayUserProfile({ email: 'test@test.com' })).toBe('<p>No user data available</p>');
        });
    });

    describe('isValidUser()', () => {
        test('should return true for valid user', () => {
            expect(isValidUser(sampleUser)).toBe(true);
        });

        test('should return false for null', () => {
            expect(isValidUser(null)).toBe(false);
        });

        test('should return false for user without email', () => {
            expect(isValidUser({ name: 'Test' })).toBe(false);
        });

        test('should return false for invalid email', () => {
            expect(isValidUser({ name: 'Test', email: 'invalid' })).toBe(false);
        });

        test('should return false for empty name', () => {
            expect(isValidUser({ name: '', email: 'test@test.com' })).toBe(false);
        });
    });

    describe('getUserById()', () => {
        test('should return user for valid ID', () => {
            const user = getUserById(1);
            expect(user).toEqual(sampleUser);
        });

        test('should return null for invalid ID', () => {
            expect(getUserById(999)).toBeNull();
        });
    });

    describe('formatDisplayName()', () => {
        test('should format display name with role', () => {
            const user = { name: 'Jane Doe', role: 'Admin' };
            expect(formatDisplayName(user)).toBe('Jane Doe (Admin)');
        });

        test('should return Anonymous User for null', () => {
            expect(formatDisplayName(null)).toBe('Anonymous User');
        });

        test('should return Anonymous User for user without name', () => {
            expect(formatDisplayName({ role: 'Guest' })).toBe('Anonymous User');
        });
    });
});
