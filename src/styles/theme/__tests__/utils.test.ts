import {
  getInitialTheme,
  getSystemPreference,
  saveTheme,
  updateDataAttribute,
} from '../utils';

// Mocks ==================================================================
// https://jestjs.io/docs/manual-mocks#mocking-methods-which-are-not-implemented-in-jsdom

function mockMatchMedia(prefersDark: boolean) {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: prefersDark,
      media: query,
    })),
  });
}

// Tests =================================================================

describe('getSystemPreference', () => {
  it('should return the user preferred color scheme', () => {
    mockMatchMedia(false);
    expect(getSystemPreference()).toBe('light');

    mockMatchMedia(true);
    expect(getSystemPreference()).toBe('dark');
  });
});

describe('updateDataAttribute', () => {
  it('should set the html dataset to the theme parameter', () => {
    const html = document.documentElement;
    expect(html.dataset.theme).toBeUndefined();

    updateDataAttribute('dark');
    expect(html.dataset.theme).toBe('dark');
  });
});

describe('getInitialTheme', () => {
  const storage = window.localStorage;

  afterEach(() => {
    // Clear the localStorage key/value pairs in between tests
    if (localStorage) localStorage.clear();
  });

  afterAll(() => {
    // Return the localStorage to its original value
    Object.defineProperty(window, 'localStorage', {
      value: storage,
    });
  });

  it('should get the theme from the local storage', () => {
    window.localStorage.setItem('theme', 'dark');

    const theme = getInitialTheme();
    expect(theme).toBe('dark');
  });

  it('should get the theme from the system preference if there is nothing saved in local storage', () => {
    mockMatchMedia(false);

    const theme = getInitialTheme();
    expect(theme).toBe('light');
  });

  it('should get the theme from the system preference if local storage is unavailable', () => {
    Object.defineProperty(window, 'localStorage', {
      writable: true,
      value: null,
    });
    mockMatchMedia(false);

    // We run this test in isolation because localStorageAvailable is cached.
    // We need it to be recalculated now that we set localStorage to null.
    jest.isolateModules(() => {
      // eslint-disable-next-line global-require
      const { getInitialTheme: getInitialThemeI } = require('../utils');

      const theme = getInitialThemeI();
      expect(theme).toBe('light');
    });
  });
});

describe('saveTheme', () => {
  it('should update the data attribute for the html element and save the theme in localstorage if available', () => {
    saveTheme('dark');

    const html = document.documentElement;
    expect(html.dataset.theme).toBe('dark');

    const storedTheme = localStorage.getItem('theme');
    expect(storedTheme).toBe('dark');
  });
});
