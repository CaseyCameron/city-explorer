export function formatMovies(data) {

  return data.results.map(movie => {

    return {
      title: movie.title,
      image_url: movie.poster_path,
      description: movie.overview,
      released: movie.release_date,
      average_rating: movie.vote_average,
    };
  });
  
}

export function formatLocation(data){
  return data.map(loc => {

    return {
      formatted_query: loc.display_name,
      latitude: loc.lat,
      longitude: loc.lon
    };
  });
}