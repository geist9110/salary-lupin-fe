import BookCover from '@/assets/magic-book/book-cover.svg';
import styles from '@/pages/MagicBook/MagicBook.module.css';
import BookCoverBack from '@/assets/magic-book/book-cover-back.svg';
import Page from '@/pages/MagicBook/components/Page.tsx';
import { PageIndex } from '@/pages/MagicBook/types.ts';
import common from '@/pages/MagicBook/common.module.css';

function CoverPage({ index }: Readonly<PageIndex>) {
  const descriptions = [
    '당신의 고민을 대신하지 않지만,',
    '대신 아무 말이나 해줄 수는 있습니다.',
    '의미 없는 말이 꼭 나쁜 건 아니니까요.',
    '고민을 적고 페이지를 넘기면,',
    '당신의 고민이 사라지진 않지만',
    '적어도 잠시 미뤄둘 수는 있습니다.',
  ];

  const front = <img src={BookCover} alt="book-cover" />;

  const back = (
    <div className={styles.pageContents}>
      <img
        src={BookCoverBack}
        alt="book-cover-back"
        className={`${common.absoluteFill} ${common.selectNone}`}
      />
      <div
        className={`${styles.pageForeground} ${styles.textColorGold} ${common.absoluteFill} ${common.selectNone}`}
      >
        <h2 className={styles.title}>마법의 고민해결 책</h2>
        <div className={styles.description}>
          {descriptions.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </div>
    </div>
  );

  return <Page front={front} back={back} page={index} />;
}

export default CoverPage;
