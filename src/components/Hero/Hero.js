import React from 'react';
import styles from './Hero.scss';

class Hero extends React.Component {
  render() {
    return (
    <section className={styles.component}>
        <header className={styles.component}>
            <h2 className={styles.title}>SpaCe Jurney</h2>
            <img className={styles.image} src="/src/components/Hero/space.png"></img>
        </header>
    </section>
    )
  }
}

export default Hero;