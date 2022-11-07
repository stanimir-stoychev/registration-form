const nextJest = require('next/jest');

const createJestConfig = nextJest({
    dir: './',
});

const customJestConfig = {
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    moduleDirectories: ['node_modules', '<rootDir>/'],
    testEnvironment: 'jest-environment-jsdom',
    moduleNameMapper: {
        '@/app/(.*)': '<rootDir>/app/$1',
        '@/src/(.*)': '<rootDir>/src/$1',
    },
};

module.exports = createJestConfig(customJestConfig);
