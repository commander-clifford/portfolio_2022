import React from 'react';
import {Route, Switch} from "react-router-dom";
import { Transition, TransitionGroup } from 'react-transition-group';
import { enter, exit } from './timelines'; // https://css-tricks.com/animating-between-views-in-react/
import './App.css';
import Home from './pages/home';

function App() {
  return (
    <div className="app">
      <div className="view-wrapper" style={{position: 'relative', height: '100%'}}>
      <main className="main">
        <Route render={({ location }) => {
          const { pathname, key } = location;
          const prevPathname = null;
          return (
            <TransitionGroup component={null}>
              <Transition
                key={key}
                appear={true}
                onEnter={(node) => enter(node, pathname, prevPathname)}
                onExit={(node) => exit(node, pathname, prevPathname)}
                timeout={{enter: 1200, exit: 700 }}
                >
                <Switch location={location}>
                  <Route exact path={['/', '/home']} render={({ ...props }) => { return <Home {...props} /> }}/>
                </Switch>
              </Transition>
            </TransitionGroup>
          )
        }}/>
        </main>
      </div>
    </div>
  );
}

export default App;
