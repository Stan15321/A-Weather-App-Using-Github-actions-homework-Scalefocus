// Import the functions and API key from the main file
const { setQuery, displayResult, dateBuilder } = require('./main');
const { api } = require('./main');

// Test setQuery function
test('setQuery should return undefined', () => {
  const evt = { keyCode: 13 };
  expect(setQuery(evt)).toBeUndefined();
});

// Test displayResult function
test('displayResult should log the weather object', () => {
  const consoleSpy = jest.spyOn(console, 'log');
  const weather = {
    name: 'Los Angeles',
    sys: { country: 'US' },
    main: { temp: 20, temp_min: 15, temp_max: 25 },
    weather: [{ main: 'Sunny' }],
  };
  displayResult(weather);
  expect(consoleSpy).toHaveBeenCalledWith(weather);
});

// Test dateBuilder function
test('dateBuilder should return a string in the format of "Day Date Month Year"', () => {
  const d = new Date(2023, 3, 25); // April 25, 2023
  expect(dateBuilder(d)).toBe('Tuesday 25 April 2023');
});

// Test API key
test('API key should be a non-empty string', () => {
  expect(api.key).toBeDefined();
  expect(typeof api.key).toBe('string');
  expect(api.key.length).toBeGreaterThan(0);
});

// Test API baseurl
test('API baseurl should be a non-empty string', () => {
  expect(api.baseurl).toBeDefined();
  expect(typeof api.baseurl).toBe('string');
  expect(api.baseurl.length).toBeGreaterThan(0);
});
