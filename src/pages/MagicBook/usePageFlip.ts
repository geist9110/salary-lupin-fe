import React, { useCallback, useEffect, useRef, useState } from 'react';

export function usePageFlip(pageIndex: number) {
  const [rotation, setRotation] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
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
    setRotation(getRotation(e.clientX, pageLeftX.current!, pageRightX.current!));
    isDragging.current = true;
    setIsAnimating(true);
  };

  const handlePointerMove = useCallback(
    (e: PointerEvent) => {
      if (!isDragging.current) return;
      setIsAnimating(false);
      const newRotation = getRotation(e.clientX, pageLeftX.current!, pageRightX.current!);
      setZIndex(newRotation > 90 ? 100 + pageIndex : 100 - pageIndex);
      setRotation(newRotation);
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
    setIsAnimating(true);
  }, [pageIndex]);

  useEffect(() => {
    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);
    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
    };
  }, [handlePointerMove, handlePointerUp]);

  return { pageRef, degree: rotation, zIndex, handlePointerDown, isAnimating };
}

function getRotation(x: number, leftSide: number, rightSide: number): number {
  const ratio = (x - leftSide) / (rightSide - leftSide);
  return Math.min(180, Math.max(0, (1 - ratio) * 180));
}
