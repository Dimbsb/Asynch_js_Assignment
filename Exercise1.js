// Άσκηση 1
// Ορισμός μεταβλητής με όνομα film_json
let film_json = `{
    "title": "Inception",
    "director": "Christopher Nolan",
    "releaseYear": 2010,
    "rating": 8.8,
    "cast": ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"]
  }`;
  
  // Μετατροπή της συμβολοσειράς JSON σε αντικείμενο JavaScript
  let film = JSON.parse(film_json);
  
  // Προσθήκη ηθοποιών στο τέλος της λίστας cast
  film.cast.push("Tom Hardy", "Cillian Murphy");
  
  // Εκτύπωση του αντικειμένου film στην κονσόλα, μορφοποιημένο
  console.log(JSON.stringify(film, null, 2));