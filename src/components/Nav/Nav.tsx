import styles from './Nav.module.css';
import Cart from './Cart/Cart';
import UserInfo from './UserInfo/UserInfo';
import Search from './Search/Search';

const Nav = () => {
  return (
    <div className={styles.navbar}>
      <h3>logo</h3>
      <Search />
      <UserInfo />
      <Cart />
    </div>
  );
};

export default Nav;
