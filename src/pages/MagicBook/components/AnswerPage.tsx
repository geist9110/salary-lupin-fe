import styles from '@/pages/MagicBook/MagicBook.module.css';
import common from '@/pages/MagicBook/common.module.css';
import Page from '@/pages/MagicBook/components/Page.tsx';
import { PageIndex } from '@/pages/MagicBook/types.ts';
import EmptyBackground from '@/pages/MagicBook/components/EmptyBackground.tsx';
import { useEffect, useState } from 'react';

function AnswerPage({ index, visiblePage, setVisible }: Readonly<PageIndex>) {
  const [answer, setAnswer] = useState();

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const fetchAnswer = async () => {
      try {
        console.log(API_BASE_URL);
        const response = await fetch(`${API_BASE_URL}/magic-book/answer`);
        const data = await response.json();
        setAnswer(data.data.answer);
      } catch (e) {
        console.log('에러!');
        console.log(e);
      }
    };

    if (visiblePage === index) {
      fetchAnswer();
    }
  }, [visiblePage, index]);

  const front = (
    <div className={styles.pageContents}>
      <EmptyBackground />
      <div className={`${styles.pageForeground} ${common.absoluteFill} ${common.selectNone}`}>
        <h2
          className={`${common.wrapText} ${common.defaultTextWeight} ${common.flexCenter} ${common.fullSize} ${visiblePage === index ? styles.fadeIn : common.hidden}`}
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
