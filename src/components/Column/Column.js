import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';


class Column extends React.Component {
  render() {
    return (
      <section className={styles.component}>
          <h2 className={styles.title}>{this.props.ikon}</h2> 
      </section>
    )
  }
};

Column.propTypes = {
  ikon: PropTypes.node,
};

export default Column;
