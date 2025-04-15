import styles from '@/pages/MagicBook/MagicBook.module.css';
import Page from '@/pages/MagicBook/Page.tsx';
import { PageIndex } from '@/pages/MagicBook/types.ts';

function AnswerPage({ index }: Readonly<PageIndex>) {
  return (
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
      page={index}
    />
  );
}

export default AnswerPage;
