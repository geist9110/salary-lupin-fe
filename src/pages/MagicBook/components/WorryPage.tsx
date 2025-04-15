import styles from '@/pages/MagicBook/MagicBook.module.css';
import common from '@/pages/MagicBook/common.module.css';
import Page from '@/pages/MagicBook/components/Page.tsx';
import { useState } from 'react';
import { PageIndex } from '@/pages/MagicBook/types.ts';
import EmptyBackground from '@/pages/MagicBook/components/EmptyBackground.tsx';

function WorryPage({ index }: Readonly<PageIndex>) {
  const [worryText, setWorryText] = useState('');
  const textMaxLength = 100;

  const front = (
    <div className={styles.pageContents}>
      <EmptyBackground />
      <div className={`${common.absoluteFill} ${styles.rightPageShadow}`}></div>
      <div className={`${styles.pageForeground} ${common.absoluteFill} ${common.selectNone}`}>
        <h2 className={styles.title}>무엇이 고민인가요?</h2>
        <textarea
          className={styles.worryInput}
          maxLength={textMaxLength}
          onChange={(e) => setWorryText(e.target.value)}
          placeholder={'아무말이나 괜찮아요...'}
        />
      </div>
    </div>
  );

  const back = (
    <div className={styles.pageContents}>
      <EmptyBackground />
      <div className={`${styles.pageForeground} ${common.absoluteFill} ${common.selectNone}`}>
        <div className={`${common.wrapText} ${common.fullSize} ${common.flexCenter}`}>
          {worryText}
        </div>
      </div>
      <div className={`${common.absoluteFill} ${styles.leftPageShadow}`}></div>
    </div>
  );

  return <Page front={front} back={back} page={index} />;
}

export default WorryPage;
