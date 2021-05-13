import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import request from 'superagent';
import { formatLocation, formatWeather, formatYelp } from './munge-utils.js';

// make an express app
const app = express();

// allow our server to be called from any website
app.use(cors());
// read JSON from body of request when indicated by Content-Type
app.use(express.json());
// enhanced logging
app.use(morgan('dev'));

// heartbeat route
app.get('/', (req, res) => {
  res.send('Proxy API');
});

app.get('/location', async (req, res) => {
  try {
    const response = await request.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.CITY_DB_API_KEY}&q=${req.query.search}&format=json`);
    const location = formatLocation(response.body);
    res.json(location);
  }
  catch(err) {
    console.log(err);
    res.status(500).send({ error: err });
  }
});

app.get('/weather', async (req, res) => {
  try {
    const response = await request.get(`https://api.weatherbit.io/v2.0/forecast/daily?key=${process.env.WEATHER_DB_API_KEY}&lat=${req.query.latitude}&lon=${req.query.longitude}`);
    const weather = formatWeather(response.body);
    res.json(weather);
  }
  catch(err) {
    console.log(err);
    res.status(500).send({ error: err });
  }
});

app.get('/reviews', async (req, res) => {
  try {
    const response = await (await request.get(`https://api.yelp.com/v3/businesses/search?latitude=${lat}&longitude=${lng}`))
    .set('Authorization', process.env.YELP_DB_API_KEY);
    const weather = formatWeather(response.body);
    res.json(weather);
  }
  catch(err) {
    console.log(err);
    res.status(500).send({ error: err });
  }
});


export default app;