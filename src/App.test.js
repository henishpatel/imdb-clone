import { render, screen } from '@testing-library/react';
import App from './App';

// Mock localStorage
const localStorageMock = (function () {
  let store = {};
  return {
    getItem: function (key) {
      return store[key] || null;
    },
    setItem: function (key, value) {
      store[key] = value.toString();
    },
    clear: function () {
      store = {};
    },
  };
})();

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
});

test('renders Trending Movies heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/Trending Movies/i);
  expect(headingElement).toBeInTheDocument();
});
