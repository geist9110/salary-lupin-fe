import common from '@/pages/MagicBook/common.module.css';

function EmptyBackground() {
  return (
    <div className={`${common.absoluteFill} ${common.selectNone}`}>
      <div className={`${common.neutralBackground} ${common.fullSize}`}></div>
    </div>
  );
}

export default EmptyBackground;
