import React, { useEffect, useState } from 'react';
// import { createClient } from 'contentful';
import { Route, Switch } from "react-router-dom";
import { Transition, TransitionGroup } from 'react-transition-group';
import { enter, exit } from './timelines'; // https://css-tricks.com/animating-between-views-in-react/
import { fetchContentfulEntries, fetchContentfulAsset } from './contentfulAPI';

import './App.css';

import Home from './pages/home/home';
import About from './pages/about/about';
import Resume from './pages/resume/resume';
import DesignSystem from './pages/design-system/design-system';
import Projects from './pages/projects/projects';
import Header from './components/header/header';
import ProjectDetails from './components/project-details';

import Footer from './components/footer/footer';

import ScrollToTop from "./ScrollToTop";

import { projectData } from './data.js';
import { resumeData } from './data';
import { educationData } from './data';
import { sitePaths } from './data';
import { socialLinks } from './data';

// import useCoverData from './contentfulAPI';

const App = () => {

  const [projectsData, setProjectsData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {

        const projectsResponse = await fetchContentfulEntries('project');
        setProjectsData(projectsResponse.items);

        setIsLoaded(true);

      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
  
    fetchData();
  }, []);

  useEffect(() => {
    if (isLoaded) {
      // console.log("projectsData ", projectsData)
    }
  }, [isLoaded]);

  return (
    <div className="app">
      <div className="view-wrapper" style={{position: 'relative', height: '100%'}}>
        
          <Route render={({ location }) => {            
            const { pathname, key } = location;
            const prevPathname = null;
            return (
              <>
                <Header path={location.pathname}/>
                <main className="main">
                  <TransitionGroup component={null}>
                    <Transition
                      key={key}
                      appear={true}
                      onEnter={(node) => enter(node, pathname, prevPathname)}
                      onExit={(node) => exit(node, pathname, prevPathname)}
                      timeout={{enter: 2000, exit: 2000 }}
                      >
                      <ScrollToTop>
                        <Switch location={location}>
                          <Route
                            exact path={['/']}
                            render={({ ...props }) => {
                              return <Home {...props} sitePaths={sitePaths} socialLinks={socialLinks} />
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
                              return <Resume {...props} />
                            }}
                          />
                          <Route
                            path={['/projects']}
                            render={({ ...props }) => {
                              return (
                                <>
                                  
                                  {/* <Route
                                    path={['/projects/:projectId']}
                                    render={({ match }) => {
                                      const { projectId } = match.params;
                                      console.log("route projectId", projectId);
                                      console.log("route projectsData", projectsData);
                                      const project = projectsData.find(project => project.fields?.slug === projectId);
                                      return <ProjectDetails project={projectsData.find(project => project.fields?.slug === projectId)} />;
                                    }}
                                  /> */}
                                  
                                  <Projects {...props} projectData={projectData} projectsData={projectsData} />
                                
                                </>
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
                              return <Home {...props} sitePaths={sitePaths} socialLinks={socialLinks}/>
                            }}
                          />
                        </Switch>
                      </ScrollToTop>
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

export default App;
