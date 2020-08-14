import React from 'react';

import GlobalStyles from './styles/GlobalStyles';
import Section from "./components/Section";
import data from './data';


function App() {
  return (
    <>
      {/* section */}
      <Section
        variant="blue"
        title={data[0].title}
        description={data[0].description}
      />

      {/* section */}
      <Section
        variant="beige"
        title={data[1].title}
        description={data[1].description}
      />

      {/* section */}
      <Section
        variant="blue"
        title={data[2].title}
        description={data[2].description}
      />

      {/* section */}
      <Section
        variant="white"
        title={data[3].title}
        description={data[3].description}
      />

      {/* section */}
      <Section
        variant="black"
        title={data[4].title}
        description={data[4].description}
      />

      <GlobalStyles />
    </>
  );
}

export default App;
