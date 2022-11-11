import React from 'react';
import styles from './Card.module.css'

const Card = ({title, body, children, ...props}) => {
    return (
        <div className={styles.card} {...props}>
            <h3 className={styles.cardTitle}>{title}</h3>
            <div className={styles.cardBody}>
                <p className={styles.cardBodyContent}>{body}</p>
            </div>
        </div>
    );
};

export default Card;