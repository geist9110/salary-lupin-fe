import BookCover from '@/assets/book-cover.svg';
import BookCoverBack from '@/assets/book-cover-back.svg';
import BookSpine from '@/assets/book-spine.svg';
import styles from './MagicBook.module.css';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import applyDraggableFalse from '@/utils/applyDraggableFalse.ts';

function MagicBook() {
  return (
    <div className={styles.container}>
      <div className={styles.book}>
        <img src={BookSpine} alt="book-spine" draggable={false} className={styles.bookSpine} />
        <Page
          front={<img src={BookCover} alt="book-cover" />}
          back={<img src={BookCoverBack} alt="book-cover-back" />}
        />
      </div>
    </div>
  );
}

type PageProps = {
  front: React.ReactNode;
  back: React.ReactNode;
};

function Page({ front, back }: Readonly<PageProps>) {
  const [rotation, setRotation] = useState(0);

  const pageRef = useRef<HTMLDivElement>(null);
  const pageLeftXRef = useRef<number | null>(null);
  const pageRightXRef = useRef<number | null>(null);

  const isDraggingRef = useRef(false);

  const handlePointerDown = (e: React.PointerEvent) => {
    const ratio =
      (e.clientX - pageLeftXRef.current!) / (pageRightXRef.current! - pageLeftXRef.current!);
    const newRotation = (1 - ratio) * 180;

    setRotation(Math.min(180, Math.max(0, newRotation)));
    isDraggingRef.current = true;
  };

  const handlePointerMove = useCallback((e: PointerEvent) => {
    if (!isDraggingRef.current) return;

    const ratio =
      (e.clientX - pageLeftXRef.current!) / (pageRightXRef.current! - pageLeftXRef.current!);
    const newRotation = (1 - ratio) * 180;

    setRotation(Math.min(180, Math.max(0, newRotation)));
  }, []);

  const handlePointerUp = useCallback(() => {
    if (!isDraggingRef.current) return;
    if (rotation > 90) {
      setRotation(180);
    } else {
      setRotation(0);
    }
    isDraggingRef.current = false;
  }, [rotation]);

  useEffect(() => {
    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
    };
  }, [handlePointerMove, handlePointerUp]);

  useEffect(() => {
    if (pageRef.current) {
      pageLeftXRef.current =
        pageRef.current.getBoundingClientRect().left -
        pageRef.current.getBoundingClientRect().width;
      pageRightXRef.current = pageRef.current.getBoundingClientRect().right;
    }
  }, []);

  return (
    <div
      ref={pageRef}
      className={styles.page}
      onPointerDown={handlePointerDown}
      style={{
        transform: `rotateY(${rotation}deg)`,
      }}
    >
      <div draggable={false} className={styles.pageFront}>
        {applyDraggableFalse(front)}
      </div>
      <div draggable={false} className={styles.pageBack}>
        {applyDraggableFalse(back)}
      </div>
    </div>
  );
}

export default MagicBook;
