import Header from '@/components/Header';
import styles from './Home.module.css';

function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
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
      <div>이미지</div>
    </div>
  );
}

export default Home;
