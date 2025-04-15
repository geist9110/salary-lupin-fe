import styles from '@/pages/MagicBook/MagicBook.module.css';
import Page from '@/pages/MagicBook/components/Page.tsx';
import { PageIndex } from '@/pages/MagicBook/types.ts';
import EmptyBackground from '@/pages/MagicBook/components/EmptyBackground.tsx';

function AnswerPage({ index }: Readonly<PageIndex>) {
  // API 연결 후, useState로 값을 변경해야 한다.
  const answer = '아무것도 하지마라.';

  const front = (
    <div className={styles.pageContents}>
      <EmptyBackground />
      <div className={styles.pageForeground}>
        <h2 className={`${styles.centerText} ${styles.answer}`}>{answer}</h2>
      </div>
    </div>
  );

  const back = <EmptyBackground />;

  return <Page front={front} back={back} page={index} />;
}

export default AnswerPage;
