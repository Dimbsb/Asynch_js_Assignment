// Άσκηση 1
let film_json = `{
    "title": "Inception",
    "director": "Christopher Nolan",
    "releaseYear": 2010,
    "rating": 8.8,
    "cast": ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"]
  }`;
  
  let film = JSON.parse(film_json);
  
  film.cast.push("Tom Hardy", "Cillian Murphy");
  
  console.log(JSON.stringify(film, null, 2));