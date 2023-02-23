import React from 'react';
import PropTypes from 'prop-types';
import styles from './Features.module.css';

export default function Features({
  icon, content, title, alt,
}) {
  return (
    <div className={styles.item}>
      <img className={styles.icon} src={icon} alt={alt} />
      <h3 className={styles.title}>{title}</h3>
      <p>{content}</p>
    </div>
  );
}

Features.propTypes = {
  icon: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
