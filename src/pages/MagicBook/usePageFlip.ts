import React, { useCallback, useEffect, useRef, useState } from 'react';

export function usePageFlip(pageIndex: number) {
  const [rotation, setRotation] = useState(0);
  const [zIndex, setZIndex] = useState(100 - pageIndex);
  const pageRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const pageLeftX = useRef<number | null>(null);
  const pageRightX = useRef<number | null>(null);

  useEffect(() => {
    if (pageRef.current) {
      const rect = pageRef.current.getBoundingClientRect();
      pageLeftX.current = rect.left - rect.width;
      pageRightX.current = rect.right;
    }
  }, []);

  const handlePointerDown = (e: React.PointerEvent) => {
    const ratio = (e.clientX - pageLeftX.current!) / (pageRightX.current! - pageLeftX.current!);
    setRotation(Math.min(180, Math.max(0, (1 - ratio) * 180)));
    isDragging.current = true;
  };

  const handlePointerMove = useCallback(
    (e: PointerEvent) => {
      if (!isDragging.current) return;

      const ratio = (e.clientX - pageLeftX.current!) / (pageRightX.current! - pageLeftX.current!);
      const newRotation = (1 - ratio) * 180;

      setZIndex(newRotation > 90 ? 100 + pageIndex : 100 - pageIndex);
      setRotation(Math.min(180, Math.max(0, newRotation)));
    },
    [pageIndex]
  );

  const handlePointerUp = useCallback(() => {
    if (!isDragging.current) return;
    setRotation((prev) => {
      const final = prev > 90 ? 180 : 0;
      setZIndex(final === 180 ? 100 + pageIndex : 100 - pageIndex);
      return final;
    });
    isDragging.current = false;
  }, [pageIndex]);

  useEffect(() => {
    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);
    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
    };
  }, [handlePointerMove, handlePointerUp]);

  return { pageRef, rotation, zIndex, handlePointerDown };
}
