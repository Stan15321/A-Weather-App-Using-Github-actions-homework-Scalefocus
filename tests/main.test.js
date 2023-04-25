const { displayResult } = require('./main');

test('displayResult function formats weather data correctly', () => {
  const weatherData = {
    name: 'London',
    sys: { country: 'UK' },
    main: { temp: 10.5, temp_min: 9.0, temp_max: 12.0 },
    weather: [{ main: 'Cloudy' }]
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

  expect(document.querySelector('.location .city').textContent).toBe('London, UK');
  expect(document.querySelector('.location .date').textContent).toBeTruthy();
  expect(document.querySelector('.current .temp').innerHTML).toBe('11<span>°c</span>');
  expect(document.querySelector('.current .weather').textContent).toBe('Cloudy');
  expect(document.querySelector('.hi-low').textContent).toBe('9°c/12°c');
});

