import React from 'react';
import styles from './Hero.scss';
import PropTypes from 'prop-types';
import List from '../List/List';


class Hero extends React.Component {
  render() {
    return (
    <section className={styles.component}>
        <header className={styles.component}>
            <h2 className={styles.title}>{this.props.titleText}</h2>
            <img className={styles.image} src={this.props.imageUrl} />
        </header>
    </section>
    )
  }
};

Hero.propTypes = {
  titleText: PropTypes.node,
  imageUrl: PropTypes.node,
};

export default Hero;