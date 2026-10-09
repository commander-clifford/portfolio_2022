import React, { useEffect, useRef, useState } from 'react';
import { Route, Switch, withRouter } from "react-router-dom";
import { Transition, TransitionGroup } from 'react-transition-group';
import { addTransitionEndListener, enter, exit } from './timelines'; // https://css-tricks.com/animating-between-views-in-react/
import { fetchContentfulEntries } from './services/contentfulAPI';

import './App.css';

import Header from './components/header/header';
import Footer from './components/footer/footer';

import Home from './pages/home/home';
import About from './pages/about/about';
import Resume from './pages/resume/resume';
import Projects from './pages/projects/projects';
import ProjectsData from './pages/projects/projects-data';
import Project from './pages/projects/project';
import Page from './pages/page';
import DesignSystem from './pages/design-system/design-system';
import WorkCaseStudy from './pages/work/work-case-study';
import { featuredWork } from './content/publicCopy';

import { sitePaths } from './data';
import { socialLinks } from './data';

const App = ({ history, location }) => {

  const [projectsData, setProjectsData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const routeDirection = useRef('forward');
  const projectTransition = useRef(false);
  const routeHistory = useRef(null);

  const initialKey = location.key || location.pathname;
  if (!routeHistory.current) {
    routeHistory.current = { keys: [initialKey], index: 0, lastKey: initialKey, lastPathname: location.pathname };
  } else if (initialKey !== routeHistory.current.lastKey) {
    const stack = routeHistory.current;
    const previousProject = stack.lastPathname.match(/^(?:\/projects|\/work)\/([^/]+)$/);
    const nextProject = location.pathname.match(/^(?:\/projects|\/work)\/([^/]+)$/);
    projectTransition.current = Boolean(previousProject && nextProject && previousProject[1] !== nextProject[1]);

    if (history.action === 'POP') {
      const nextIndex = stack.keys.indexOf(initialKey);
      routeDirection.current = nextIndex >= 0 && nextIndex < stack.index ? 'backward' : 'forward';
      if (nextIndex >= 0) stack.index = nextIndex;
      else {
        stack.keys.push(initialKey);
        stack.index = stack.keys.length - 1;
      }
    } else if (history.action === 'REPLACE') {
      routeDirection.current = 'forward';
      stack.keys[stack.index] = initialKey;
    } else {
      routeDirection.current = 'forward';
      if (previousProject && nextProject) {
        const order = stack.lastPathname.startsWith('/work/')
          ? featuredWork.map(project => project.slug)
          : projectsData.map(project => project.fields?.slug);
        const previousIndex = order.indexOf(previousProject[1]);
        const nextIndex = order.indexOf(nextProject[1]);
        if (previousIndex >= 0 && nextIndex >= 0 && nextIndex !== previousIndex) {
          routeDirection.current = nextIndex < previousIndex ? 'backward' : 'forward';
        }
      }
      stack.keys.splice(stack.index + 1);
      stack.keys.push(initialKey);
      stack.index = stack.keys.length - 1;
    }

    stack.lastKey = initialKey;
    stack.lastPathname = location.pathname;
  }

  useEffect(() => {
    const fetchData = async () => {
      try {

        const projectsResponse = await fetchContentfulEntries('project');
        projectsResponse.items.sort((a, b) => {
          const dateA = new Date(a.fields.originalCreationDate);
          const dateB = new Date(b.fields.originalCreationDate);
      
          // For ascending order
          // return dateA - dateB;
          
          // For descending order
          return dateB - dateA;
      });
      
        setProjectsData(projectsResponse.items);

      } catch (error) {
        console.error(error);
      } finally {
        setIsLoaded(true);
      }
    };
  
    fetchData();
  }, []);

  return (
    <div className="app">
      <div className="view-wrapper" style={{position: 'relative', height: '100%'}}>
        
          <Route render={({ location }) => {
            const { pathname, key } = location;
            return (
              <>
                <Header path={location.pathname} currentPath={pathname} />
                  <main className="main">
                    <TransitionGroup component={null}>
                      <Transition
                        key={key || pathname}
                        appear={true}
                        onEnter={(node) => enter(node, routeDirection.current, projectTransition.current)}
                        onExit={(node) => exit(node, routeDirection.current)}
                        addEndListener={(node, done) => addTransitionEndListener(node, done)}
                        >
                          
                        <Switch location={location}>
                            <Route
                              exact path={['/']}
                              render={({ ...props }) => {
                                return <Home {...props} projectsData={projectsData} isLoaded={isLoaded} />
                              }}
                            />
                            <Route
                              path={['/about']}
                              render={({ ...props }) => {
                                return <About {...props} />
                              }}
                            />
                            <Route
                              path={['/resume']}
                              render={({ ...props }) => {
                                return <Resume {...props} />
                              }}
                            />
                            <Route
                              path='/work/:slug'
                              render={({ match }) => <WorkCaseStudy match={match} projectsData={projectsData} />}
                            />
                            <Route
                              path='/projects/:urlSlug'
                              render={({ match }) => {
                                const { urlSlug } = match.params; 
                                const project = projectsData.find(project => project.fields?.slug === urlSlug);
                                const currentIndex = projectsData.findIndex(project => project.fields?.slug === urlSlug);
                                const previousProject = currentIndex > 0 ? projectsData[currentIndex - 1] : null;
                                const nextProject = currentIndex < projectsData.length - 1 ? projectsData[currentIndex + 1] : null;
                                return <Project project={project} previousProject={previousProject} nextProject={nextProject} />;
                              }}
                            />
                            <Route
                              path={['/projects']}
                              render={({ ...props }) => {
                                return (                                  
                                  <Projects {...props} projectsData={projectsData} isLoaded={isLoaded} />
                                );
                              }}
                            />
                            <Route
                              path={['/projects-data']}
                              render={({ ...props }) => {
                                return (                                  
                                  <ProjectsData {...props} projectsData={projectsData} />
                                );
                              }}
                            />
                            <Route
                              path={['/design-system']}
                              render={({ ...props }) => {
                                return <DesignSystem {...props} />
                              }}
                            />
                            <Route
                              path={'*'}
                              render={({ ...props }) => {
                                return <Page {...props} slug="404"/>
                              }}
                            />
                        </Switch>

                      </Transition>
                    </TransitionGroup>
                  </main>
                <Footer path={location.pathname} sitePaths={sitePaths} socialLinks={socialLinks} />
              </>
            )
          }}/>
        
      </div>
    </div>
  );
}

export default withRouter(App);
