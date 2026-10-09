import { gsap, Power1 } from 'gsap';

const DURATION = 1;
const STAGGER = 0.08;
const SCALETO = 0.98;
const DRIFTIN = '-80px';
const DRIFTOUT = '80px';
const EASE = Power1.easeOut;
const activeTransitions = new WeakMap();
const endListeners = new WeakMap();

const restoreInlineStyle = (node, styleAttribute) => {
  if (styleAttribute === null) node.removeAttribute('style');
  else node.setAttribute('style', styleAttribute);
};

const waitForRouteReady = (node, callback) => {
  if (node.getAttribute('data-transition-ready') !== 'false') {
    callback();
    return () => {};
  }

  let finished = false;
  let observer;
  let timeoutId;
  const finish = () => {
    if (finished) return;
    finished = true;
    observer?.disconnect();
    window.clearTimeout(timeoutId);
    callback();
  };

  observer = new MutationObserver(() => {
    if (node.getAttribute('data-transition-ready') !== 'false') finish();
  });
  timeoutId = window.setTimeout(finish, 3000);
  observer.observe(node, { attributes: true, attributeFilter: ['data-transition-ready'] });
  return () => {
    finished = true;
    observer.disconnect();
    window.clearTimeout(timeoutId);
  };
};

const cancelTransition = (node) => {
  const active = activeTransitions.get(node);
  if (!active) return;

  active.cancelWait?.();
  active.context?.revert();
  if (active.restoreStyle !== undefined) restoreInlineStyle(node, active.restoreStyle);
  activeTransitions.delete(node);
};

const startTransition = (node, buildTimeline, waitUntilReady = false, options = {}) => {
  cancelTransition(node);

  const active = { context: null, timeline: null, cancelWait: null, restoreStyle: options.restoreStyle };
  activeTransitions.set(node, active);

  const start = () => {
    if (activeTransitions.get(node) !== active) return;

    active.context = gsap.context(() => {
      active.timeline = buildTimeline();
    }, node);
    active.timeline.eventCallback('onComplete', () => {
      if (activeTransitions.get(node) !== active) return;

      activeTransitions.delete(node);
      if (options.restoreOnComplete) {
        active.context.revert();
        if (active.restoreStyle !== undefined) restoreInlineStyle(node, active.restoreStyle);
      }
      const done = endListeners.get(node);
      endListeners.delete(node);
      done?.();
    });
    active.timeline.play(0);
  };

  if (waitUntilReady) active.cancelWait = waitForRouteReady(node, start);
  else start();
};

export const addTransitionEndListener = (node, done) => {
  if (!activeTransitions.has(node)) {
    done();
    return;
  }

  endListeners.set(node, done);
};

const enterTimeline = (node, direction, simultaneous) => {
  const staggerInElements = node.querySelectorAll('.art__stagger-in');
  const fromX = direction === 'backward' ? '-4rem' : '4rem';

  const timeline = gsap.timeline({
    paused: true,
    defaults: { duration: DURATION, stagger: STAGGER, ease: EASE },
  });

  timeline.fromTo(node, {
    autoAlpha: 0,
    x: fromX,
  }, {
    autoAlpha: 1,
    x: 0,
    delay: simultaneous ? 0 : DURATION * 0.9,
  });

  if (staggerInElements.length) {
    timeline.from(staggerInElements, {
      stagger: STAGGER,
      autoAlpha: 0,
      scale: SCALETO,
      y: direction === 'backward' ? DRIFTOUT : DRIFTIN,
    }, '<');
  }

  return timeline;
};

const exitTimeline = (node, direction) => {
  const scrollOffset = window.scrollY || window.pageYOffset || document.scrollingElement?.scrollTop || document.documentElement.scrollTop || document.body.scrollTop || 0;
  const viewportTop = node.getBoundingClientRect().top;
  const footer = document.getElementById('footer');
  const toX = direction === 'backward' ? '4rem' : '-4rem';

  // Pin the outgoing page at its current viewport position before resetting
  // scroll. This preserves the section the visitor was reading during exit.
  gsap.set(node, {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    y: viewportTop,
    zIndex: 0,
  });
  if (scrollOffset) window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

  const timeline = gsap.timeline({
    paused: true,
    defaults: { duration: DURATION, stagger: STAGGER, ease: EASE },
  });

  if (footer) timeline.to(footer, { autoAlpha: 0, duration: 0.2 }, 0);
  timeline.to(node, { autoAlpha: 0, x: toX }, 0);
  if (footer) timeline.to(footer, { autoAlpha: 1, duration: 0.2 }, '>-0.2');

  return timeline;
};

export const enter = (node, direction = 'forward', simultaneous = false) => {
  // Keep asynchronous CMS pages hidden until their route data has landed.
  const restoreStyle = node.getAttribute('style');
  gsap.set(node, { autoAlpha: 0 });
  startTransition(node, () => enterTimeline(node, direction, simultaneous), true, { restoreOnComplete: true, restoreStyle });
};

export const exit = (node, direction = 'forward') => {
  startTransition(node, () => exitTimeline(node, direction));
};
