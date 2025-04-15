import styles from '@/pages/MagicBook/MagicBook.module.css';
import applyDraggableFalse from '@/utils/applyDraggableFalse.ts';
import { PageProps } from '../types.ts';
import { usePageFlip } from '@/pages/MagicBook/usePageFlip.ts';
import common from '@/pages/MagicBook/common.module.css';

function Page({ front, back, page }: Readonly<PageProps>) {
  const { pageRef, degree, zIndex, handlePointerDown, isAnimating } = usePageFlip(page);

  const pageStyle = {
    transform: `rotateY(-${degree}deg)`,
    zIndex: zIndex,
    transition: isAnimating ? 'transform 0.3s ease-in-out' : 'none',
  };

  return (
    <div
      ref={pageRef}
      className={`${styles.page} ${common.selectNone}`}
      onPointerDown={handlePointerDown}
      style={pageStyle}
    >
      <div className={`${styles.pageFront} ${common.absoluteFill} ${common.selectNone}`}>
        {applyDraggableFalse(front)}
      </div>

      <div className={`${styles.pageBack} ${common.absoluteFill} ${common.selectNone}`}>
        {applyDraggableFalse(back)}
      </div>
    </div>
  );
}

export default Page;
