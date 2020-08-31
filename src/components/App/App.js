import React from 'react';
import Home from '../Home/HomeContainer';
import Info from '../Info/Info';
import Faq from '../Faq/Faq';
import { BrowserRouter, Route } from 'react-router-dom';
import MainLayout from '../MainLayout/MainLayout.js';
// import styles from './App.scss';
import { AnimatedSwitch } from 'react-router-transition';
import List from '../List/ListContainer';
import SearchResults from '../SearchResults/SearchResultsContainer';

const App = () => (
  <BrowserRouter>
    <BrowserRouter>
      <MainLayout>
        <AnimatedSwitch
          atEnter={{ opacity: 0 }}
          atLeave={{ opacity: 0 }}
          atActive={{ opacity: 1 }}
          className="styles.switch-wrapper"
        >
          <Route exact path="/" component={Home} />
          <Route exact path="/info" component={Info} />
          <Route exact path="/faq" component={Faq} />
          <Route exact path="/list/:id" component={List} />
          <Route exact path="/search/:id" component={SearchResults} />
        </AnimatedSwitch>
      </MainLayout>
    </BrowserRouter>
  </BrowserRouter>
);

export default App;
