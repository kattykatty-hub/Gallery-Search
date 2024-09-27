import styles from './ImageCard.module.css';

const ImageCard = ({ image, onClick }) => {
  return (
    <li className={styles.card} onClick={onClick}>
      <img src={image.urls.small} alt={image.alt_description} className={styles.image} />
    </li>
  );
};

export default ImageCard;
