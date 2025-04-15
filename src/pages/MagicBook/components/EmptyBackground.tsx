import styles from '@/pages/MagicBook/MagicBook.module.css';

function EmptyBackground() {
  return (
    <div className={styles.pageBackground}>
      <div className={styles.emptyPage}></div>
    </div>
  );
}

export default EmptyBackground;
