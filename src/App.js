import React, { useEffect, useState } from 'react';
import { Route, Switch } from "react-router-dom";
import { Transition, TransitionGroup } from 'react-transition-group';
import { enter, exit } from './timelines'; // https://css-tricks.com/animating-between-views-in-react/
import { fetchContentfulEntries } from './services/contentfulAPI';

import './App.css';

import ScrollToTop from "./scrollToTop";
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

import { sitePaths } from './data';
import { socialLinks } from './data';

const App = () => {

  const [projectsData, setProjectsData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentPath, setCurrentPath] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {

        const pageResponse = await fetchContentfulEntries('page');
        console.log("pageResponse",pageResponse);

        const projectsResponse = await fetchContentfulEntries('project');
        projectsResponse.items.sort((a, b) => {
          const dateA = new Date(a.fields.originalCreationDate);
          const dateB = new Date(b.fields.originalCreationDate);
      
          // For ascending order
          // return dateA - dateB;
          
          // For descending order
          return dateB - dateA;
      });
      
      // Now, pageResponse is sorted based on originalCreationDate.
      
        setProjectsData(projectsResponse.items);

        setIsLoaded(true);

      } catch (error) {
        console.error(error);
      } finally {

      }
    };
  
    fetchData();
  }, []);

  useEffect(() => {
    if (isLoaded) {
      console.log("App -> projectsData ", projectsData)
    }
  }, [isLoaded, projectsData]);

  return (
    <div className="app">
      <div className="view-wrapper" style={{position: 'relative', height: '100%'}}>
        
          <Route render={({ location }) => {            
            const { pathname, key } = location;
            setCurrentPath(pathname);
            const prevPathname = null;
            return (
              <>
                <Header path={location.pathname} currentPath={currentPath} />
                <ScrollToTop>
                  <main className="main">
                    <TransitionGroup component={null}>
                      <Transition
                        key={key}
                        appear={true}
                        onEnter={(node) => enter(node, pathname, prevPathname)}
                        onExit={(node) => exit(node, pathname, prevPathname)}
                        timeout={{enter: 2000, exit: 2000 }}
                        >
                          
                        <Switch location={location}>
                            <Route
                              exact path={['/']}
                              render={({ ...props }) => {
                                return <Home {...props} />
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
                                  <Projects {...props} projectsData={projectsData} />
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
                </ScrollToTop>
                <Footer path={location.pathname} sitePaths={sitePaths} socialLinks={socialLinks} />
              </>
            )
          }}/>
        
      </div>
    </div>
  );
}

export default App;
