const path = require('path');
const fetch = require('node-fetch');
var Amadeus = require('amadeus');

var amadeus = new Amadeus({
  clientId: 'igVfv3Ssqmu7wAKD7YX8sQY8UHz6mAwV',
  clientSecret: 'fEIepLAAFUnAepbb'
});

const ctrl = {};

ctrl.index = async (req, res) => {
  const apiKey = '70e2b5ca75d1c92f38cfe80795b26da0';
  const city = req.body.city || 'Cartagena';
  const iATACode = req.body.iATACode || 'BOG';
  const countryCode = req.body.countryCode || 'co';

  const URI = `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${apiKey}&units=metric`;
  const response = await fetch(URI);
  const data = await response.json();
  const weather = {
    city: data.name,
    countryCode: data.sys.country,
    desc: data.weather[0]['description'],
    icon: data.weather[0]['icon'],
    temperatura: data.main.temp + ' °C',
    humidity: 'Humidity: ' + data.main.humidity + '°C',
    wind: 'Weather ' + data.wind.speed + ' m/s'
  };
  console.log(data);
  console.log(weather);
  var hh = {
    estado: false,
    data: {},
    dictionaries: {}
  };
  await amadeus.shopping.flightDestinations.get({ origin: iATACode }).then(function (response) {
    console.log(response);
    hh.estado = true;
    hh.data = response.data;
    hh.dictionaries = response.result.dictionaries;
    console.log('este: ',hh.data);
    console.log('este12: ', hh.dictionaries);
  }).catch(function (responseError) {
    console.log(responseError.code);
    hh.estado = false;
  });

  const respuesta = {
    weather,
    hh
  };
  res.render('vuelos', respuesta);
};

module.exports = ctrl;
