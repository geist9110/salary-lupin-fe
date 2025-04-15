import CardProps from '@/types/card.ts';
import magicBookThumbnail from '@/assets/magic-book/magic-book-thumbnail.png';

export const cards: CardProps[] = [
  {
    id: 'contents-001',
    thumbnail: magicBookThumbnail,
    title: '마법의 고민 해결 책',
    description: '고민을 적어주세요.\n정답은 없지만 반응은 있습니다.',
    link: '/magic-book',
  },
];
