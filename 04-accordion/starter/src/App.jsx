import { useState } from 'react';
import data from './data';

import Questions from './Questions';

const App = () => {
  return (
    <main>
      <Questions data={data} />
    </main>
  );
};
export default App;
