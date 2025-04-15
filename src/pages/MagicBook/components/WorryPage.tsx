import styles from '@/pages/MagicBook/MagicBook.module.css';
import Page from '@/pages/MagicBook/Page.tsx';
import { useState } from 'react';

function WorryPage() {
  const [worryText, setWorryText] = useState('');

  return (
    <Page
      front={
        <div className={styles.pageContents}>
          <div className={styles.pageForeground} style={{ background: 'var(--color-neutral-100)' }}>
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
  );
}

export default WorryPage;
