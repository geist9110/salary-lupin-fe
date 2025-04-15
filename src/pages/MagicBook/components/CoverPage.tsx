import BookCover from '@/assets/magic-book/book-cover.svg';
import styles from '@/pages/MagicBook/MagicBook.module.css';
import BookCoverBack from '@/assets/magic-book/book-cover-back.svg';
import Page from '@/pages/MagicBook/components/Page.tsx';
import { PageIndex } from '@/pages/MagicBook/types.ts';

function CoverPage({ index }: Readonly<PageIndex>) {
  return (
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
      page={index}
    />
  );
}

export default CoverPage;
