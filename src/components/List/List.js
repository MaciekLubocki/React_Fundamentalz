import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';
import Column from  '../Column/Column.js';
import {settings} from '../../data/dataStore';


class List extends React.Component {
  static propTypes ={
    title: PropTypes.node.isRequired,
    description: PropTypes.node,
    columns: PropTypes.array,
    image: PropTypes.string,
  }
  
  static defaultProps = {
    description: settings.defaultListDescription,
  }

  render() {
    return (
    <section className={styles.component}>
        <Hero titleText={this.props.title} imageUrl={this.props.image}/>
        <div className={styles.description}>
        {ReactHtmlParser(props.description)}
        </div>
        <div className={styles.columns}>
        <Column ikon={'Animals'} />
        <Column ikon={'Plants'} />
        <Column ikon={'Minerals'} />
        </div>
    </section>
    )
  }
}

export default List