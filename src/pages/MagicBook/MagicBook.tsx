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
          back={
            <div className={styles.pageContents}>
              <img src={BookCoverBack} alt="book-cover-back" className={styles.pageBackground} />
              <div className={styles.pageForeground} style={{ color: 'var(--color-gold)' }}>
                <h2 className={styles.title}>마법의 고민해결 책</h2>
                <div className={styles.description}>
                  <p>당신의 고민을 대신하지 않지만,</p>
                  <p>대신 아무 말이나 해줄 수는 있습니다.</p>
                  <p>의미 없는 말이 꼭 나쁜 건 아니니까요.</p>
                  <p>고민을 적고 페이지를 넘기면, </p>
                  <p>당신의 고민이 사라지진 않지만</p>
                  <p>적어도 잠시 미뤄둘 수는 있습니다.</p>
                </div>
              </div>
            </div>
          }
          page={1}
        />
        <Page
          front={
            <div className={styles.pageContents}>
              <div className={styles.pageBackground}></div>
            </div>
          }
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
