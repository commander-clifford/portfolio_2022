import React, { useEffect, useState } from 'react';
import { Route, Switch } from "react-router-dom";
import { Transition, TransitionGroup } from 'react-transition-group';
import { enter, exit } from './timelines'; // https://css-tricks.com/animating-between-views-in-react/
import { fetchContentfulEntries } from './services/fetchContentful';
import { getContentfulComponents } from './services/getContentfulComponents';

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
import DesignSystem from './pages/design-system/design-system';

import { sitePaths } from './data';
import { socialLinks } from './data';

const App = () => {
  const [homePageData, setHomePageData] = useState(null);

  const [pagesData, setPagesData] = useState([]);
  const [projectsData, setProjectsData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentPath, setCurrentPath] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const pageResponse = await fetchContentfulEntries('page');
        // setPagesData(pageResponse.items);

        const pageResponse = await fetchContentfulEntries('page');
        const homePage = pageResponse.find(page => page.fields?.slug === 'home');
        if (homePage) {
          setHomePageData(homePage);
        }
        
        const projectsResponse = await fetchContentfulEntries('project');
        setProjectsData(projectsResponse.items);

        setIsLoaded(true);
      } catch (error) {
        console.error(error);
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
            return (
              <>
                <Header path={location.pathname} currentPath={currentPath} />
                <ScrollToTop>
                  <main className="main">
                    <TransitionGroup component={null}>
                      <Transition
                        key={key}
                        appear={true}
                        onEnter={(node, isAppearing) => enter(node, pathname, isAppearing)}
                        onExit={(node, isAppearing) => exit(node, pathname, isAppearing)}
                        timeout={{enter: 2000, exit: 2000 }}
                      >
                        <Switch location={location}>
                        <Route exact path={['/']} render={({ ...props }) => { return <Home {...props} homePageData={homePageData} /> }} />
                            <Route path="/about" render={(props) => <About {...props} />} />
                            <Route path="/resume" render={(props) => <Resume {...props} />} />
                            <Route path="/projects/:projectId" render={({ match }) => {
                              const { projectId } = match.params; 
                              const project = projectsData.find(project => project.fields?.slug === projectId);
                              return <Project project={project} />;
                            }} />
                            <Route path="/projects" render={(props) => <Projects {...props} projectsData={projectsData} />} />
                            <Route path="/projects-data" render={(props) => <ProjectsData {...props} projectsData={projectsData} />} />
                            <Route path="/design-system" render={(props) => <DesignSystem {...props} />} />
                            {/* <Route path="/page/:slug" render={({ match }) => {
                              const { slug } = match.params;
                              const pageData = pagesData.find(page => page.fields?.slug === slug);
                              return getContentfulComponents(pageData);
                            }} />
                            <Route
                              path="/page/:slug" render={({ match }) => {
                                const { slug } = match.params;
                                const pageData = pagesData.find(page => page.fields?.slug === slug);
                                const contentfulComponents = getContentfulComponents(pageData);
                                return <Page data={contentfulComponents} slug={slug} />
                              }}
                            /> */}
                            {/* <Route path="*" render={(props) => <Page {...props} slug="404" />} /> */}
                            <Route path="*" render={(props) => <><div className='d-flex container justify-content-center'><h1 className='text-center w-100'>404</h1></div><Home {...props} slug="404" /></>} />
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
