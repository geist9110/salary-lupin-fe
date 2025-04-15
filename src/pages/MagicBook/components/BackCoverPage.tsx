import BookCoverBack from '@/assets/magic-book/book-cover-back.svg';
import Page from '@/pages/MagicBook/components/Page.tsx';
import { PageIndex } from '@/pages/MagicBook/types.ts';

function BackCoverPage({ index }: Readonly<PageIndex>) {
  return (
    <Page
      front={
        <img src={BookCoverBack} alt={'book-cover-back'} style={{ transform: 'rotateY(180deg)' }} />
      }
      back={<img src={BookCoverBack} alt={'book-cover-back'} />}
      page={index}
    />
  );
}

export default BackCoverPage;
