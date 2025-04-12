import React, { useCallback, useEffect, useRef, useState } from 'react';
import styles from '@/pages/MagicBook/MagicBook.module.css';
import applyDraggableFalse from '@/utils/applyDraggableFalse.ts';
import { PageProps } from './types.ts';

function Page({ front, back, page }: Readonly<PageProps>) {
  const [rotation, setRotation] = useState(0);
  const [pageZIndex, setPageZIndex] = useState(100 - page);

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

    if (newRotation > 90) {
      setPageZIndex(100 + page);
    }
    if (newRotation <= 90) {
      setPageZIndex(100 - page);
    }

    setRotation(Math.min(180, Math.max(0, newRotation)));
  }, []);

  const handlePointerUp = useCallback(() => {
    if (!isDraggingRef.current) return;
    if (rotation > 90) {
      setPageZIndex(100 + page);
      setRotation(180);
    } else {
      setPageZIndex(100 - page);
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
        zIndex: pageZIndex,
      }}
    >
      <div className={styles.pageFront}>{applyDraggableFalse(front)}</div>
      <div className={styles.pageBack}>{applyDraggableFalse(back)}</div>
    </div>
  );
}

export default Page;
