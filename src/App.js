import React from 'react';
import { Navbar } from './components/Navbar/Navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Profile } from './pages/Profile';
import { Auth } from './pages/Auth';
import { Projects } from './pages/Projects';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className={'container pt-4'}>
        <Switch>
          <Route exact path={'/'} component={Home} />
          <Route path={'/about'} component={About} />
          <Route path={'/profile'} component={Profile} />
          <Route path={'/auth'} component={Auth} />
          <Route path={'/projects'} component={Projects} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
