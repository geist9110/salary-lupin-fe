import BookSpine from '@/assets/magic-book/book-spine.svg';
import styles from './MagicBook.module.css';
import common from './common.module.css';
import CoverPage from '@/pages/MagicBook/components/CoverPage.tsx';
import WorryPage from '@/pages/MagicBook/components/WorryPage.tsx';
import AnswerPage from '@/pages/MagicBook/components/AnswerPage.tsx';
import BackCoverPage from '@/pages/MagicBook/components/BackCoverPage.tsx';

function MagicBook() {
  return (
    <div className={`${styles.container} ${common.fullSize} ${common.flexCenter}`}>
      <div className={styles.book}>
        <img
          src={BookSpine}
          alt="book-spine"
          draggable={false}
          className={`${styles.bookSpine} ${common.selectNone}`}
        />
        <CoverPage index={1} />
        <WorryPage index={2} />
        <AnswerPage index={3} />
        <BackCoverPage index={4} />
      </div>
    </div>
  );
}

export default MagicBook;
