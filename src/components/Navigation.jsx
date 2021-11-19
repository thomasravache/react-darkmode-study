import React from 'react';
// import Link from 'next/link';
import ThemeSwitch from './ThemeSwitch';

import styles from './tailwindStyles/navStyles';
// ou import styles from './Navigation.module.css' --> aí eu usaria styles.navContainer e etc....

const Navigation = () => {
  return (
    <div className={ styles.navContainer }>
      <div className={ styles.navSubContainer }>
        <a href="/" className={ styles.navLink }>
          Thomas Ravache
        </a>
        <ThemeSwitch />
      </div>
    </div>
  );
};

export default Navigation;
