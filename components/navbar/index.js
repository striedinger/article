import Logo from './wsj-full.svg';
import styles from './styles.module.css';

const Navbar = () => {
  return (
    <header className={styles.navbar}>
      <a className={styles.logo} href="https://www.wsj.com">
        <Logo />
      </a>
    </header>
  );
};

export default Navbar;
