// Μέρος Β - Fetch API με async/await
async function fetchProducts() {
    try {
      const response = await fetch('https://dummyjson.com/products');
      const data = await response.json();
      // Φιλτράρισμα των πρώτων 5 προϊόντων με τα απαιτούμενα πεδία
      const products = data.products.slice(0, 5).map(product => ({
        id: product.id,
        title: product.title,
        category: product.category,
        stock: product.stock
      }));
      // Εκτύπωση των προϊόντων στην κονσόλα
      console.log(products);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  // Κλήση της συνάρτησης
  fetchProducts();