class WeatherController {
  
  constructor() {
    this.request = require('request-promise');
    this.apiKey = 'f56dca24ce05c3835045624436d6a8e8';
    this.city = 'London';
    this.countryCode = 'uk';
  }

  async getWeather() {
    const URI = `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&appid=${this.apiKey}&units=metric`;
    const response = await request(URI);
    const data = await JSON.parse(response);
    return data;
  }

  changeLocation(city, countryCode) {
    this.city = city;
    this.countryCode = countryCode;
  }

}

module.exports = WeatherController;