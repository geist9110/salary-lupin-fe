import BookCoverBack from '@/assets/magic-book/book-cover-back.svg';
import Page from '@/pages/MagicBook/Page.tsx';

function BackCoverPage() {
  return (
    <Page
      front={
        <img src={BookCoverBack} alt={'book-cover-back'} style={{ transform: 'rotateY(180deg)' }} />
      }
      back={<img src={BookCoverBack} alt={'book-cover-back'} />}
      page={4}
    />
  );
}

export default BackCoverPage;
