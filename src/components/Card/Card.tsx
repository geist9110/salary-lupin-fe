import styles from './Card.module.css';
import { Link } from 'react-router-dom';
import CardProps from '@/types/card.ts';

function Card({ thumbnail, title, description, link }: Readonly<CardProps>) {
  return (
    <Link className={styles.cardContainer} to={link}>
      <img className={styles.image} src={thumbnail} alt={`${title} thumbnail`} />
      <div className={styles.textContainer}>
        <h3>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </Link>
  );
}

export default Card;
