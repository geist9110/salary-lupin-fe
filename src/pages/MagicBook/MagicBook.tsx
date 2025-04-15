import BookCover from '@/assets/magic-book/book-cover.svg';
import BookCoverBack from '@/assets/magic-book/book-cover-back.svg';
import BookSpine from '@/assets/magic-book/book-spine.svg';
import styles from './MagicBook.module.css';
import Page from './Page.tsx';
import { useState } from 'react';

function MagicBook() {
  const [worryText, setWorryText] = useState('');

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
              <div
                className={styles.pageForeground}
                style={{ background: 'var(--color-neutral-100)' }}
              >
                <h2 className={styles.title}>무엇이 고민인가요?</h2>
                <textarea
                  className={styles.worryInput}
                  maxLength={100}
                  onChange={(e) => setWorryText(e.target.value)}
                  placeholder={'아무말이나 괜찮아요...'}
                />
              </div>
            </div>
          }
          back={
            <div
              className={styles.pageForeground}
              style={{
                background: 'var(--color-neutral-100)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                whiteSpace: 'pre-wrap',
              }}
            >
              {worryText}
            </div>
          }
          page={2}
        />
        <Page
          front={
            <div
              className={styles.pageForeground}
              style={{
                background: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <h2>아무것도 하지마라.</h2>
            </div>
          }
          back={<div className={styles.pageForeground} style={{ background: 'white' }}></div>}
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
