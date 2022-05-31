import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => (
  <nav className={styles.navbar}>
    <h1 className={styles.logo}>Math Magicians</h1>
    <div className={styles.links}>
      <Link className={styles.link} to="/">Home</Link>
      <Link className={styles.link} to="/calculator">Calculator</Link>
      <Link className={styles.link} to="/quote">Quote</Link>
    </div>
  </nav>
);

export default Navbar;
