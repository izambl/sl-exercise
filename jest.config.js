module.exports = {
  moduleNameMapper: {
    '\\.(css|scss)$': '<rootDir>/node_modules/jest-css-modules',
  },
  setupFiles: [
    '<rootDir>/jest.init.js',
  ],
};
