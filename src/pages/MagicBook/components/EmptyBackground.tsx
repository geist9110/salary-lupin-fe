import styles from '@/pages/MagicBook/MagicBook.module.css';
import common from '@/pages/MagicBook/common.module.css';

function EmptyBackground() {
  return (
    <div className={`${common.absoluteFill} ${common.selectNone}`}>
      <div className={`${styles.neutralBackground} ${common.fullSize}`}></div>
    </div>
  );
}

export default EmptyBackground;
