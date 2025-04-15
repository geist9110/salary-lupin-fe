import Card from '@/components/Card';
import styles from './Home.module.css';
import character from '@/assets/person-with-notebook-and-coffee.svg';
import magicBookThumbnail from '@/assets/magin-book-thumbnail.png';
import CardProps from '@/types/card.ts';

const cards: CardProps[] = [
  {
    id: 'contents-001',
    thumbnail: magicBookThumbnail,
    title: '마법의 고민 해결 책',
    description: '고민을 적어주세요.\n정답은 없지만 반응은 있습니다.',
    link: '/magic-book',
  },
];

function Home() {
  return (
    <div className={styles.container}>
      <HeroSection />
      <CardSection />
    </div>
  );
}

function HeroSection() {
  return (
    <div className={styles.heroSection}>
      <div>
        <h1>우리는 일하지 않기 위해 일을 한다.</h1>
        <h3 className={styles.subtitle}>여러분의 월급루팡을 도와드립니다.</h3>
        <div className={styles.description}>
          <p>집중은 무너지고, 할 일은 없고, 상사는 감시하고.</p>
          <p>그래서 우리는 무언가 해야만 합니다.</p>
          <p>이건 일하는 척을 돕는 가장 진지한 플랫폼입니다.</p>
        </div>
      </div>
      <img src={character} alt="character" />
    </div>
  );
}

function CardSection() {
  return (
    <div className={styles.cardSection}>
      {cards.map((card) => (
        <Card key={card.id} {...card} />
      ))}
    </div>
  );
}

export default Home;
