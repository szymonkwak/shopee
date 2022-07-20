import Nav from './components/Nav/Nav';
import './App.css';
import ProductCard from './components/ProductCard/ProductCard';
import { productList } from './mocks/products';

function App() {
  return (
    <>
      <Nav />

      {productList.map((product) => (
        <ProductCard
          name={product.name}
          price={product.price}
          picture={product.picture}
          description={product.description}
        />
      ))}
    </>
  );
}

export default App;
