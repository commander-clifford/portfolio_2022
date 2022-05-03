import React from 'react';
import {Route, Switch} from "react-router-dom";
import { Transition, TransitionGroup } from 'react-transition-group';
import { enter, exit } from './timelines'; // https://css-tricks.com/animating-between-views-in-react/
import './App.scss';
import Home from './pages/home/home';
import About from './pages/about/about';
import Resume from './pages/resume/resume';
import Projects from './pages/projects/projects';
import Nav from './components/nav/nav';

import { projectData } from './data.js';
import { resumeData } from './data';
import { educationData } from './data';

function App() {

  return (
    <div className="app">
      <Nav/>
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
                  <Route
                    exact path={['/', '/home']}
                    render={({ ...props }) => {
                      return <Home {...props} projectData={projectData} resumeData={resumeData} />
                    }}
                  />
                  <Route
                    path={['/about']}
                    render={({ ...props }) => {
                      return <About {...props} projectData={projectData} educationData={educationData} resumeData={resumeData} />
                    }}
                  />
                  <Route
                    path={['/resume']}
                    render={({ ...props }) => {
                      return <Resume {...props} projectData={projectData} educationData={educationData} resumeData={resumeData} />
                    }}
                  />
                  <Route
                    path={['/projects']}
                    render={({ ...props }) => {
                      return <Projects {...props} projectData={projectData} educationData={educationData} resumeData={resumeData} />
                    }}
                  />
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
