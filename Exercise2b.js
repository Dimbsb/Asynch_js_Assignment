// Μέρος Β - Fetch API με async/await
async function fetchProducts() {
    try {
      const response = await fetch('https://dummyjson.com/products');
      const data = await response.json();
     
      const products = data.products.slice(0, 5).map(product => ({
        id: product.id,
        title: product.title,
        category: product.category,
        stock: product.stock
      }));
      
      console.log(products);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  fetchProducts();