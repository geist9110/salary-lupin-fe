import styles from '@/pages/MagicBook/MagicBook.module.css';
import applyDraggableFalse from '@/utils/applyDraggableFalse.ts';
import { PageProps } from '../types.ts';
import { usePageFlip } from '@/pages/MagicBook/usePageFlip.ts';

function Page({ front, back, page }: Readonly<PageProps>) {
  const { pageRef, degree, zIndex, handlePointerDown, isAnimating } = usePageFlip(page);

  const pageStyle = {
    transform: `rotateY(-${degree}deg)`,
    zIndex: zIndex,
    transition: isAnimating ? 'transform 0.3s ease-in-out' : 'none',
  };

  return (
    <div ref={pageRef} className={styles.page} onPointerDown={handlePointerDown} style={pageStyle}>
      <div className={styles.pageFront}>{applyDraggableFalse(front)}</div>
      <div className={styles.pageBack}>{applyDraggableFalse(back)}</div>
    </div>
  );
}

export default Page;
