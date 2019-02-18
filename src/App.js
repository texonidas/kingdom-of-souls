import React from 'react';

import Warrior from './warrior'

const styles = {
  root: {
    height: '100vh',
    width: '100vw',
  }
};

const App = () => (
  <div style={styles.root}>
    <Warrior />
  </div>
);

export default App;
