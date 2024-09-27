// ErrorMessage.jsx
import React from 'react';
import styles from './ErrorMessage.module.css'; // Ensure you have some styles defined

const ErrorMessage = ({ message }) => {
    return (
        <div className={styles.errorMessage}>
            <p>{message}</p>
        </div>
    );
};

export default ErrorMessage;
