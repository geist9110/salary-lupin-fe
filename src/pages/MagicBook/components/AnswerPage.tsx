import styles from '@/pages/MagicBook/MagicBook.module.css';
import common from '@/pages/MagicBook/common.module.css';
import Page from '@/pages/MagicBook/components/Page.tsx';
import { PageIndex } from '@/pages/MagicBook/types.ts';
import EmptyBackground from '@/pages/MagicBook/components/EmptyBackground.tsx';

function AnswerPage({ index, setVisible }: Readonly<PageIndex>) {
  // API 연결 후, useState로 값을 변경해야 한다.
  const answer = '아무것도 하지마라.';

  const front = (
    <div className={styles.pageContents}>
      <EmptyBackground />
      <div className={`${styles.pageForeground} ${common.absoluteFill} ${common.selectNone}`}>
        <h2
          className={`${common.wrapText} ${common.defaultTextWeight} ${common.flexCenter} ${common.fullSize}`}
        >
          {answer}
        </h2>
      </div>
      <div className={`${common.absoluteFill} ${styles.rightPageShadow}`}></div>
    </div>
  );

  const back = (
    <div className={styles.pageContents}>
      <EmptyBackground />
      <div className={`${common.absoluteFill} ${styles.leftPageShadow}`}></div>
    </div>
  );

  return <Page front={front} back={back} page={index} setVisible={setVisible} />;
}

export default AnswerPage;
