import styles from './Nav.module.css';
import Cart from './Cart/Cart';
import UserInfo from './UserInfo/UserInfo';

const Nav = () => {
  return (
    <div className={styles.navbar}>
      <h3>logo</h3>
      <input></input>
      <UserInfo />
      <Cart />
    </div>
  );
};

export default Nav;
