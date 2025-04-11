import BookCover from '@/assets/book-cover.svg';
import styles from './MagicBook.module.css';

function MagicBook() {
  return (
    <div className={styles.container}>
      <img src={BookCover} alt="book-cover" />
    </div>
  );
}

export default MagicBook;
