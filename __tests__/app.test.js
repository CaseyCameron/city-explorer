/* eslint-disable */
import { locationData }  from '../data/location';
import { yelpData } from '../data/yelp';
import { weatherData } from '../data/weather';
import { formatLocation, formatWeather, formatYelp } from '../lib/munge-utils';

describe('API Data Munging', () => {

  const expectedLocation = 
    {
      "formatted_query": "Oakland, Alameda County, California, USA",
      "latitude": "37.8044557",
      "longitude": "-122.2713563"
    };

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