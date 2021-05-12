import movieData from '../data/movies';
import { locationData }  from '../data/location';
import yelpData from '../data/yelp';
import weatherData from '../data/weather';
import { formatMovies, formatLocation } from '../lib/munge-utils';

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
      "forecast": "Partly cloudy until afternoon.",
      "time": "Mon Jan 01 2001"
    },
    {
      "forecast": "Mostly cloudy in the morning.",
      "time": "Tue Jan 02 2001"
    }
  ];

  const expectedYelp = [
    {
      "name": "Pike Place Chowder",
      "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/ijju-wYoRAxWjHPTCxyQGQ/o.jpg",
      "price": "$$   ",
      "rating": "4.5",
      "url": "https://www.yelp.com/biz/pike-place-chowder-seattle?adjust_creative=uK0rfzqjBmWNj6-d3ujNVA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=uK0rfzqjBmWNj6-d3ujNVA"
    },
    {
      "name": "Umi Sake House",
      "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/c-XwgpadB530bjPUAL7oFw/o.jpg",
      "price": "$$   ",
      "rating": "4.0",
      "url": "https://www.yelp.com/biz/umi-sake-house-seattle?adjust_creative=uK0rfzqjBmWNj6-d3ujNVA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=uK0rfzqjBmWNj6-d3ujNVA"
    }
  ];

  it('munges movie data', async () => {
    // arrange
    // expected is in variable above
    // movieData is imported from file

    // act 
    const output = formatMovies(movieData);

    // assert
    expect(output).toEqual(expectedMovies);
  });
  
  it('munges location data', async () => {

    const output = formatLocation(locationData);
    console.log(locationData);
    // assert
    expect(output).toEqual(expectedLocation);
  });



});