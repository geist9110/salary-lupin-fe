import BookCover from '@/assets/book-cover.svg';
import BookSpine from '@/assets/book-spine.svg';
import styles from './MagicBook.module.css';

function MagicBook() {
  return (
    <div className={styles.container}>
      <div className={styles.book}>
        <img src={BookSpine} alt="book-spine" />
        <img src={BookCover} alt="book-cover" />
      </div>
    </div>
  );
}

export default MagicBook;
