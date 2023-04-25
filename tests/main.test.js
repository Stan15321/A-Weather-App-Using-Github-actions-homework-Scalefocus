const { JSDOM } = require('jsdom');

const { displayResult } = require('../main');

test('displayResult function formats weather data correctly', () => {
  const dom = new JSDOM('<html><body></body></html>');
  global.window = dom.window;
  global.document = dom.window.document;

  const container = document.createElement('div');
  displayResult({ weather: { temp: 25 }, name: 'London' }, container);

  expect(container.innerHTML).toBe('<h2>London</h2><p>Temperature: 25°C</p>');
});



