import React from 'react';
import styles from './App.scss';
import List from  '../List/List.js';

class App extends React.Component {
  render() {
    return (
      <main className={styles.component}>
        <h3 className={styles.subtitle}>Hello world!</h3>
        <List title={['Things to do Astakavista BB', <sup key='1'>soon!</sup>]} image={'/src/components/Hero/space.png'}>
          <p>Ipsilum solorum et nocet primatur. Astra per lorum et nihil es possumus. Gratifix et Majomus. Opex.</p>
      </List>
      </main>
    )
  }
}

export default App;
