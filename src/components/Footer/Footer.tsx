import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <small>© 2025 월급루팡. Crafted by geist9110.</small>
      <a
        className={styles.icon}
        href="https://github.com/geist9110"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="https://cdn.simpleicons.org/github" alt={'github'} />
      </a>
      <a className={styles.icon} href="mailto:geist9110@gmail.com">
        <img src="https://cdn.simpleicons.org/gmail" alt="Mail" />
      </a>
    </footer>
  );
}

export default Footer;
