import BookCover from '@/assets/book-cover.svg';
import BookCoverBack from '@/assets/book-cover-back.svg';
import BookSpine from '@/assets/book-spine.svg';
import styles from './MagicBook.module.css';
import Page from './Page.tsx';

function MagicBook() {
  return (
    <div className={styles.container}>
      <div className={styles.book}>
        <img src={BookSpine} alt="book-spine" draggable={false} className={styles.bookSpine} />
        <Page
          front={<img src={BookCover} alt="book-cover" />}
          back={<img src={BookCoverBack} alt="book-cover-back" />}
          page={1}
        />
        <Page
          front={<div style={{ width: '100%', height: '100%', background: 'white' }}>FRONT</div>}
          back={<div style={{ width: '100%', height: '100%', background: 'white' }}>BACK</div>}
          page={2}
        />
        <Page
          front={<div style={{ width: '100%', height: '100%', background: 'white' }}>FRONT</div>}
          back={<div style={{ width: '100%', height: '100%', background: 'white' }}>BACK</div>}
          page={3}
        />
        <Page
          front={
            <img
              src={BookCoverBack}
              alt={'book-cover-back'}
              style={{ transform: 'rotateY(180deg)' }}
            />
          }
          back={<img src={BookCoverBack} alt={'book-cover-back'} />}
          page={4}
        />
      </div>
    </div>
  );
}

export default MagicBook;
