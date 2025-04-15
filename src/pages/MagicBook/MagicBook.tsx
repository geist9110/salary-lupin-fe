import BookSpine from '@/assets/magic-book/book-spine.svg';
import styles from './MagicBook.module.css';
import CoverPage from '@/pages/MagicBook/components/CoverPage.tsx';
import WorryPage from '@/pages/MagicBook/components/WorryPage.tsx';
import AnswerPage from '@/pages/MagicBook/components/AnswerPage.tsx';
import BackCoverPage from '@/pages/MagicBook/components/BackCoverPage.tsx';

function MagicBook() {
  return (
    <div className={styles.container}>
      <div className={styles.book}>
        <img src={BookSpine} alt="book-spine" draggable={false} className={styles.bookSpine} />
        <CoverPage />
        <WorryPage />
        <AnswerPage />
        <BackCoverPage />
      </div>
    </div>
  );
}

export default MagicBook;
