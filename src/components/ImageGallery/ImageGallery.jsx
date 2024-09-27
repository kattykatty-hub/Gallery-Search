// src/components/ImageGallery/ImageGallery.jsx
import ImageCard from '../ImageCard/ImageCard';
import styles from './ImageGallery.module.css';

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <ul className={styles.gallery}>
      {images.map((image) => (
        <ImageCard
          key={image.id}
          image={image}
          onClick={() => onImageClick(image.urls.regular)}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;
