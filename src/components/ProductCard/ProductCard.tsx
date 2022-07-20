import styles from './ProductCard.module.css';

type ProductCardProps = {
  name: string;
  price: number;
  picture: string;
  description: string;
};

const ProductCard = ({ name, price, picture, description }: ProductCardProps) => {
  return (
    <>
      <div className={styles.container}>
        <img className={styles.picture} src={picture} />
        <div className={styles.product}>
          <h2>{name}</h2>
          <h3>{`$${price}`}</h3>
          <button>Add to Cart</button>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
