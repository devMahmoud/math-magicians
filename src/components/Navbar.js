import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import Logo from './Logo/Logo';

const Navbar = () => (
  <nav className={styles.navbar}>
    <Logo />
    <div className={styles.links}>
      <Link className={styles.link} to="/">Home</Link>
      <Link className={styles.link} to="/calculator">Calculator</Link>
      <Link className={styles.link} to="/quote">Quote</Link>
    </div>
  </nav>
);

export default Navbar;
