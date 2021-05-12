import movieData from '../data/movies';
import { locationData }  from '../data/location';
import { yelpData } from '../data/yelp';
import { weatherData } from '../data/weather';
import { formatLocation, formatWeather, formatYelp } from '../lib/munge-utils';

describe('API Data Munging', () => {

  const expectedMovies = [
    {
      "title": "Star Wars",
      "description": "Princess Leia is captured and held hostage by the evil Imperial forces in their effort to take over the galactic Empire. Venturesome Luke Skywalker and dashing captain Han Solo team together with the loveable robot duo R2-D2 and C-3PO to rescue the beautiful princess and restore peace and justice in the Empire.",
      "image_url": "/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg",
      "released": "1977-05-25",
      "average_rating": 8.2
    },
    {
      "title": "Star Wars: The Rise of Skywalker",
      "description": "The surviving Resistance faces the First Order once again as the journey of Rey, Finn and Poe Dameron continues. With the power and knowledge of generations behind them, the final battle begins.",
      "image_url": "/db32LaOibwEliAmSL2jjDF6oDdj.jpg",
      "released": "2019-12-18",
      "average_rating": 6.5
    },
    {
      "title": "Star Wars: The Last Jedi",
      "description": "Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares to do battle with the First Order.",
      "image_url": "/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg",
      "released": "2017-12-13",
      "average_rating": 6.9
    }
  ];

  const expectedLocation = [
    {
      "formatted_query": "Oakland, Alameda County, California, USA",
      "latitude": "37.8044557",
      "longitude": "-122.2713563"
    }
  ];

  const expectedWeather = [
      {
      "forecast": "Few clouds",
      "time": "2021-05-12"
      },
      {
      "forecast": "Scattered clouds",
      "time": "2021-05-13"
      }
  ];

  const expectedYelp = [
    {
      "name": "Shandong Restaurant",
      "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/Suj414J80yiiAcAhbPBPcA/o.jpg",
      "price": "$$",
      "rating": 4.0,
      "url": "https://www.yelp.com/biz/shandong-restaurant-oakland?adjust_creative=wv6JfgTTjA7SrGUeC-O6yg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=wv6JfgTTjA7SrGUeC-O6yg"
    },
    {
      "name": "Belly",
      "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/4bdBl5wXfumHd5K4nrIlQw/o.jpg",
      "price": "$$",
      "rating": 4.0,
      "url": "https://www.yelp.com/biz/belly-oakland-2?adjust_creative=wv6JfgTTjA7SrGUeC-O6yg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=wv6JfgTTjA7SrGUeC-O6yg"
    }
  ];
  
  it('munges location data', async () => {

    const output = formatLocation(locationData);
    // assert
    expect(output).toEqual(expectedLocation);
  });

  it('munges weather data', async () => {
    const output = formatWeather(weatherData);
    expect(output).toEqual(expectedWeather);
  });
  
  it('munges yelp data', async () => {
    const output = formatYelp(yelpData);
    expect(output).toEqual(expectedYelp);
  });



});