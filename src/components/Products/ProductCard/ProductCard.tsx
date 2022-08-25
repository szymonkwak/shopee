import styles from './ProductCard.module.css';

type ProductCardProps = {
  id: string;
  name: string;
  price: number;
  picture: string;
  description: string;
};

const ProductCard = ({ id, name, price, picture, description }: ProductCardProps) => {
  const handleAddToCart = () => {
    console.log(id);
  };

  return (
    <>
      <div className={styles.container}>
        <img className={styles.picture} src={picture} />
        <div className={styles.product}>
          <h2>{name}</h2>
          <h3>{`$${price}`}</h3>
          <button onClick={handleAddToCart}>Add to Cart</button>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
