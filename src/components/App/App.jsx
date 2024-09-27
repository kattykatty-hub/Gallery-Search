import { useState, useEffect } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import ImageModal from '../ImageModal/ImageModal';
import fetchImages from '../../services/api';
import styles from './App.module.css';

const App = () => {
    const [query, setQuery] = useState('');
    const [images, setImages] = useState([]);
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [totalPages, setTotalPages] = useState(0);
    const [modalImage, setModalImage] = useState(null);

    useEffect(() => {
        if (!query) return; 

        const fetchData = async () => {
            setIsLoading(true);
            setError(null); 
            try {
                const data = await fetchImages(query, page);

                if (!data.results.length) {
                    throw new Error('No images found for your search.'); 
                }

                setImages((prevImages) => [...prevImages, ...data.results]);
                setTotalPages(data.total_pages);
            } catch (err) {
                setError(err.message || 'Failed to load images');
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [query, page]);

    const handleSearch = (newQuery) => {
        if (newQuery === query) return;
        setQuery(newQuery);
        setImages([]); 
        setPage(1); 
        setError(null); 
    };

    const handleLoadMore = () => {
        setPage((prevPage) => prevPage + 1);
    };

    const handleImageClick = (imageUrl) => {
        setModalImage(imageUrl);
    };

    const handleCloseModal = () => {
        setModalImage(null);
    };

    return (
        <div className={styles.app}>
            <SearchBar onSubmit={handleSearch} />
            {error && <ErrorMessage message={error} />}
            <ImageGallery images={images} onImageClick={handleImageClick} />
            {isLoading && <Loader />}
            {page < totalPages && !isLoading && <LoadMoreBtn onClick={handleLoadMore} />}
            {modalImage && <ImageModal imageUrl={modalImage} onClose={handleCloseModal} />}
        </div>
    );
};

export default App;
