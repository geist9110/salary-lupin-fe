import BookSpine from '@/assets/magic-book/book-spine.svg';
import styles from './MagicBook.module.css';
import common from './common.module.css';
import CoverPage from '@/pages/MagicBook/components/CoverPage.tsx';
import WorryPage from '@/pages/MagicBook/components/WorryPage.tsx';
import AnswerPage from '@/pages/MagicBook/components/AnswerPage.tsx';
import BackCoverPage from '@/pages/MagicBook/components/BackCoverPage.tsx';
import { useState } from 'react';

function MagicBook() {
  const [visiblePage, setVisiblePage] = useState(1);

  return (
    <div className={`${styles.container} ${common.fullSize} ${common.flexCenter}`}>
      <div className={styles.book}>
        <img
          src={BookSpine}
          alt="book-spine"
          draggable={false}
          className={`${styles.bookSpine} ${common.selectNone}`}
        />
        <CoverPage index={1} visiblePage={visiblePage} setVisible={setVisiblePage} />
        <WorryPage index={2} visiblePage={visiblePage} setVisible={setVisiblePage} />
        <AnswerPage index={3} visiblePage={visiblePage} setVisible={setVisiblePage} />
        <BackCoverPage index={4} visiblePage={visiblePage} setVisible={setVisiblePage} />
      </div>
    </div>
  );
}

export default MagicBook;
