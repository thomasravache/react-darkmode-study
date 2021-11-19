import React from 'react';
import styles from './tailwindStyles/footerStyles';

const Footer = () => {
  return (
    <div className={ styles.footerContainer }>
      <div className={ styles.footerSubContainer }>
        <div className={ styles.footerLine }></div>
        <div className={ styles.footerContentContainer }>
          <p>Built with Next.js, Tailwind and Vercel</p>
          <div className={ styles.footerLinksContainer }>
            <a
              href="/"
              className={ styles.footerLinks }
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </a>
            <a
              href="/"
              className={ styles.footerLinks }
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="/"
              className={ styles.footerLinks }
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="/"
              className={ styles.footerLinks }
              target="_blank"
              rel="noreferrer"
            >
              Medium
            </a>
            <a
              href="/"
              className={ styles.footerLinks }
              target="_blank"
              rel="noreferrer"
            >
              DEV
            </a>
            <a
              href="/"
              className={ styles.footerLinks }
              target="_blank"
              rel="noreferrer"
            >
              Hashnode
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
