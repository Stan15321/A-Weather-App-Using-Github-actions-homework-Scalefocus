const { displayResult } = require('../main.js');

describe('displayResult function', () => {
  test('should update the DOM with the correct weather information', () => {
    const weatherData = {
      name: 'Test City',
      sys: { country: 'Test Country' },
      main: { temp: 10, temp_min: 5, temp_max: 15 },
      weather: [{ main: 'Test Weather' }]
    };

    document.body.innerHTML = `
      <div class="location">
        <div class="city"></div>
        <div class="date"></div>
      </div>
      <div class="current">
        <div class="temp"></div>
        <div class="weather"></div>
      </div>
      <div class="hi-low"></div>
    `;

    displayResult(weatherData);

    expect(document.querySelector('.location .city').innerText).toBe('Test City, Test Country');
    expect(document.querySelector('.location .date').innerText).toMatch(/[a-zA-Z]+ \d{1,2} [a-zA-Z]+ \d{4}/);
    expect(document.querySelector('.current .temp').innerHTML).toBe('10<span>°c</span>');
    expect(document.querySelector('.current .weather').innerText).toBe('Test Weather');
    expect(document.querySelector('.hi-low').innerText).toBe('5°c/15°c');
  });
});
