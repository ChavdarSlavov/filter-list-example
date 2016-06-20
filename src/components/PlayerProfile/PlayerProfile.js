import React from 'react';
import styles from './style.scss';

export default function PlayerProfile(props) {
  const { picture, name, role, description } = props;
  return (
    <div className={styles.userProfile}>
      <img
        src={picture}
        className={styles.picture}
      />
      <div>
        <h3>{name}</h3>
        <h4>{role.join(', ')}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
}
