import BookCover from '@/assets/book-cover.svg';
import BookCoverBack from '@/assets/book-cover-back.svg';
import BookSpine from '@/assets/book-spine.svg';
import styles from './MagicBook.module.css';
import { useEffect, useRef, useState } from 'react';

function MagicBook() {
  const [rotation, setRotation] = useState(0);
  const startXRef = useRef<number | null>(null);
  const isDraggingRef = useRef(false);

  const handlePointerDown = (e: React.PointerEvent) => {
    startXRef.current = e.clientX;
    isDraggingRef.current = true;
  };

  const handlePointerMove = (e: PointerEvent) => {
    if (!isDraggingRef.current || startXRef.current === null) return;
    const deltaX = startXRef.current - e.clientX;
    const newRotation = Math.min(Math.max(0, deltaX / 2), 180);
    setRotation(newRotation);
  };

  const handlePointerUp = () => {
    if (!isDraggingRef.current) return;
    if (rotation > 90) {
      setRotation(180);
    } else {
      setRotation(0);
    }
    isDraggingRef.current = false;
    startXRef.current = null;
  };

  useEffect(() => {
    // 전역 이벤트 등록
    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
    };
  }, [rotation]);

  return (
    <div className={styles.container}>
      <div className={styles.book}>
        <img src={BookSpine} alt="book-spine" draggable={false} className={styles.bookSpine} />
        <div
          className={styles.page}
          onPointerDown={handlePointerDown}
          style={{
            transform: `rotateY(${rotation}deg)`,
          }}
        >
          <img src={BookCover} alt="book-cover" draggable={false} className={styles.pageFront} />
          <img
            src={BookCoverBack}
            alt="book-cover-back"
            draggable={false}
            className={styles.pageBack}
          />
        </div>
      </div>
    </div>
  );
}

export default MagicBook;
