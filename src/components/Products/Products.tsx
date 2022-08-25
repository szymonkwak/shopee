import styles from './Products.module.css';
import ProductCard from './ProductCard/ProductCard';
import { productList } from '../../mocks/products';

const Products = () => {
  return (
    <div className={styles.container}>
      {productList.map((product) => (
        <ProductCard
          key={product.name}
          id={product.id}
          name={product.name}
          price={product.price}
          picture={product.picture}
          description={product.description}
        />
      ))}
    </div>
  );
};

export default Products;
