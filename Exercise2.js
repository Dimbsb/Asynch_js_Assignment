// Μέρος Α - Fetch API με then()
fetch('https://dummyjson.com/products')
  .then(response => response.json())
  .then(data => {
    // Φιλτράρισμα των πρώτων 5 προϊόντων με τα απαιτούμενα πεδία
    const products = data.products.slice(0, 5).map(product => ({
      id: product.id,
      title: product.title,
      category: product.category,
      stock: product.stock
    }));
    // Εκτύπωση των προϊόντων στην κονσόλα
    console.log(products);
  })
  .catch(error => console.error('Error:', error));