import Header from '@/components/Header';
import Card from '@/components/Card';
import styles from './Home.module.css';
import character from '@/assets/person-with-notebook-and-coffee.svg';
import testImage from '@/assets/testImage.jpg';

const cards = [
  {
    id: 'contents-001',
    thumbnail: testImage,
    title: '일하는 척',
    description: '일하는 척이 하고 싶으신가요?',
  },
  {
    id: 'contents-002',
    thumbnail: testImage,
    title: '마법의 고민 해결 책',
    description: '고민을 해결해주는 책',
  },
  {
    id: 'contents-003',
    thumbnail: testImage,
    title: '샌드위치 휴가 추천',
    description: '연가를 사용하기 적합한 날짜 추천',
  },
  {
    id: 'contents-004',
    thumbnail: testImage,
    title: '고해성사',
    description: '여러분들의 잘못을 들어 드립니다.',
  },
  {
    id: 'contents-005',
    thumbnail: testImage,
    title: '월급루팡 인증서',
    description: '당신의 월급 루팡을 인증해드립니다.',
  },
];

function Home() {
  return (
    <div>
      <Header />
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
