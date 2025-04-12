import BookCover from '@/assets/book-cover.svg';
import BookCoverBack from '@/assets/book-cover-back.svg';
import BookSpine from '@/assets/book-spine.svg';
import styles from './MagicBook.module.css';

function MagicBook() {
  return (
    <div className={styles.container}>
      <div className={styles.book}>
        <img src={BookSpine} alt="book-spine" draggable={false} />
        <div className={styles.page}>
          <img src={BookCover} alt="book-cover" draggable={false} />
          <img
            src={BookCoverBack}
            alt="book-cover-back"
            className={styles.pageBack}
            draggable={false}
          />
        </div>
      </div>
    </div>
  );
}

export default MagicBook;
