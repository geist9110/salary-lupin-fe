import styles from './Card.module.css';

interface CardProps {
  thumbnail: string;
  title: string;
  description: string;
}

function Card({ thumbnail, title, description }: Readonly<CardProps>) {
  return (
    <div className={styles.cardContainer}>
      <img className={styles.image} src={thumbnail} alt="thumbnail" />
      <div className={styles.textContainer}>
        <h3>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
}

export default Card;
