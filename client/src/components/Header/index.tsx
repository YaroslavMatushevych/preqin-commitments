import React from 'react';
import { Link } from "react-router-dom";
import styles from './Header.module.scss';

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <nav>
                <Link to="/">Investors</Link>
            </nav>
        </header>
    );
};

export default Header;
