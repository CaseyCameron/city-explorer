  return data.results.map(movie => {

    return {
      title: movie.title,
      image_url: movie.poster_path,
      description: movie.overview,
      released: movie.release_date,
      average_rating: movie.vote_average,
    };
  });

export function formatLocation(data){
  console.log(data);
  const obj =  data.map(loc => {
    return {
      formatted_query: loc.display_name,
      latitude: loc.lat,
      longitude: loc.lon
    };
  });
  return obj[0];
}

export function formatWeather(weather){
  return weather.data.map(item => {
    return {
      forecast: item.weather.description,
      time: item.valid_date
    };
  });
}

export function formatYelp(yelp){
  return yelp.businesses.map(item => {
    return {
      name: item.name,
      image_url: item.image_url,
      price: item.price,
      rating: item.rating,
      url: item.url
    };
  });
}