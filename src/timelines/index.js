import { gsap, Power1 } from 'gsap';

/**

Animated Router Transitions (ART)

https://css-tricks.com/animating-between-views-in-react/
GSAP Cheat Sheet: https://ihatetomatoes.net/wp-content/uploads/2016/07/GreenSock-Cheatsheet-4.pdf
GSAP Docs https://greensock.com/docs/
example of similar transition https://codesandbox.io/s/mqy3mmznn
another example https://stackblitz.com/edit/react-transition-group-gsap-test?file=src%2FRoutes.jsx
trouble shooting https://greensock.com/forums/topic/27321-transitions-not-working-with-react-router-dom-gsap-and-react-transition-group/
https://reactcommunity.org/react-transition-group/with-react-router/

*/

const DURATION = 1;
const STAGGER = 0.08;
const SCALETO = 0.98;
const DRIFTIN = "-80px";
const DRIFTOUT = "80px";
const ROTATIONIN = 0;
const ROTATIONOUT = -0;
const EASE = Power1.easeOut;

/* ENTER: ANIMATION TIMELINES */

/* Enter: Slide in from Left */
const enterTimeline = (node) => {

  console.log('ENTER TIMELINE');
  console.log("enter->", node);

  const staggerInElements = node.querySelectorAll('.art__stagger-in');

  let timeline = gsap.timeline({ 
    paused: true,
    defaults: {
      duration: DURATION,
      stagger: STAGGER,
      ease: EASE
    }
  });

  timeline
  .from( node, {
    autoAlpha: 0,
    x: '4rem',
    delay: DURATION*0.9,
  })
  .from( staggerInElements, {
    stagger: STAGGER,
    autoAlpha: 0,
    scale: SCALETO,
    y: DRIFTIN,
    rotationY: ROTATIONIN,
    clearProps: "opacity",
  }, "<")
  return timeline;
}

/* Enter: Slide in from Right */
const enterSlideInFromRightTimeline = (node) => {
  const timeline = gsap.timeline({ 
    paused: true,
    defaults: {
      duration: DURATION,
      stagger: STAGGER,
      ease: EASE
    }
  });
  const staggerInElements = node.querySelectorAll('.art__stagger-in');
  timeline
  .from( node, {
    autoAlpha: 0,
    delay: DURATION,
  })
  .from( staggerInElements, {
    stagger: STAGGER,
    duration: DURATION,
    autoAlpha: 0,
    scale: SCALETO,
    y: DRIFTOUT,
    rotationY: ROTATIONOUT,
  }, "<")
  return timeline;
}

/* EXIT ANIMATION TIMELINES */

/* Exit: Slide out to Left */
const exitTimeline = (node) => {

  console.log('EXIT TIMELINE');
  console.log("exit->", node);

  // const staggerOutElements = node.querySelectorAll('.art__stagger-out');
  // const staggerOutColumnElements = node.querySelectorAll('.art__stagger-out--columns');
  const footer = document.getElementById('footer');

  const timeline = gsap.timeline({ 
    paused: true,
    defaults: {
      duration: DURATION,
      stagger: STAGGER,
      ease: EASE
    }
  });

  timeline
  .set(footer, {
    autoAlpha: 0,
  })
  .set(node, {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 0,
  })
  // .to(staggerOutElements, {
  //   stagger: STAGGER,
  //   autoAlpha: 0,
  //   scale: SCALETO,
  //   y: DRIFTOUT,
  //   rotationY: ROTATIONOUT,
  // }, )
  // .to(staggerOutColumnElements, {
  //   stagger: STAGGER,
  //   autoAlpha: 0,
  //   scale: SCALETO,
  //   y: DRIFTOUT,
  //   rotationY: ROTATIONOUT,
  // },'<')
  .to( node, {
    autoAlpha: 0,
    x: '-4rem',
  })
  .to(footer, {
    autoAlpha: 1
  })
  return timeline;
}

/* Exit: Slide out to right */
const exitSlideOutToRightTimeline = (node) => {
  const timeline = gsap.timeline({ 
    paused: true,
    defaults: {
      duration: DURATION,
      stagger: STAGGER,
      ease: EASE
    }
  });
  const staggerOutElements = node.querySelectorAll('.art__stagger-out');
  timeline
  .set(node,{
    // set position to take this node out of natural flow to prevent flash
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0, // must match app padding
    right: 0, // must match app padding
    zIndex: 0,
  })
  .to(staggerOutElements, {
    duration: DURATION,
    stagger: STAGGER,
    autoAlpha: 0,
    scale: SCALETO,
    y: DRIFTIN,
    rotationY: ROTATIONIN,
  },"<")
  .to( node, {
    duration: DURATION,
    autoAlpha: 0,
  },"<")
  return timeline;
}


/* EXPORT TIMELINES */

/* ENTER */
export const enter = (node, currentPath, previousPath) => {
  
  let timeline;
  // console.log('--- compare Next',currentPath,'to Previous',previousPath);
  
  // if(currentPath !== previousPath){
  //   // do it forwards
  //   console.log('they do not match: go forward');
    timeline = enterTimeline(node);
  // } else {
  //   // do it backwards
  //   console.log('they do match: go backward');
  //   timeline = enterSlideInFromRightTimeline(node); 
  // }
  
  window.loadPromise = new Promise(resolve => {
    window.addEventListener("DOMContentLoaded", timeline.play())
  });
  
}

/* EXIT */
export const exit = (node, currentPath, previousPath) => {
  
  let timelineExit;
  
  // TODO: currentPath === previousPath ? route must be back : Do reverse animation
  // if(currentPath !== previousPath){
    timelineExit = exitTimeline(node); // do it forwards
  // } else {
  //   timelineExit = exitSlideOutToRightTimeline(node); // do it backwards
  // }
  
  window.loadPromise = new Promise(resolve => {
    window.addEventListener("DOMContentLoaded", timelineExit.play())
  });
  
}