import * as React from 'react'
import { Route } from 'react-router'
import { BrowserRouter as Router } from 'react-router-dom'

import Pages, { PageMarkup } from './pages/pages'

const App = () => {
  return (
    <Router>
      {Pages.map((p: PageMarkup, index: number) => (
        <Route key={p.link + index} exact path={p.link} component={p.page} />
      ))}
    </Router>
  );
};

export default App;
