import ReactModal from 'react-modal';
import styles from './ImageModal.module.css';

const ImageModal = ({ imageUrl, onClose }) => {
  return (
    <ReactModal isOpen={!!imageUrl} onRequestClose={onClose} className={styles.modal}>
      <img src={imageUrl} alt="Large view" className={styles.modalImage} />
      <button onClick={onClose} className={styles.closeButton}>
        Close
      </button>
    </ReactModal>
  );
};

export default ImageModal;
