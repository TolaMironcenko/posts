import React from 'react';
import styles from './Navbar.module.css'

const Navbar = ({children, ...props}) => {
    return (
        <nav className={styles.navbar} {...props}>
            {children}
        </nav>
    );
};

export default Navbar;