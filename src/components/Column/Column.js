import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';


class Column extends React.Component {
  render() {
    return (
      <section className={styles.component}>
          <div className={styles.column}>{this.props.ikon}</div> 
      </section>
    )
  }
};

Column.propTypes = {
  ikon: PropTypes.node,
};

export default Column;
